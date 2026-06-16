"use client";

import { useState, useMemo, useEffect } from "react";
import { notFound } from "next/navigation";
import ServiceAddons from "@/components/ui/checkbox/ServiceAddons";
import BookingForm from "@/components/ui/forms/BookingForm";
import type { Service, ServiceAddon } from "@/data/service";

interface Props {
  params: Promise<{ slug: string }>;
}

// ✅ API type (DB shape)
interface PackageAPI {
  id: string;
  title: string;
  description?: string;
  price: number | string;
  duration?: number;
  type?: "portrait" | "rental";
  inclusions: { id: string; text: string }[];
  addons: { id: string; label: string; price: number }[];
}

export default function ServicePage({ params }: Props) {
  // ✅ NOW using correct type
  const [service, setService] = useState<Service | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<ServiceAddon[]>([]);

  // ✅ Fetch + map DB → Service
  useEffect(() => {
    params.then(async ({ slug }) => {
      try {
        const res = await fetch("/api/packages");

        if (!res.ok) throw new Error("Failed to fetch packages");

        const data: PackageAPI[] = await res.json();

        const pkg = data.find((p) => p.id === slug);

        if (!pkg) return notFound();

        // 🔥 MAP DB → UI (THIS FIXES YOUR ERROR)
        const mapped: Service = {
          id: pkg.id,
          slug: pkg.id, // temporary (can replace with real slug later)
          title: pkg.title,
          desc: pkg.description ?? "",
          price: Number(pkg.price),
          duration: Number(pkg.duration ?? 0),

          // map type → category
          category: pkg.type === "rental" ? "studio" : "portraits",

          image: "",

          inclusions: pkg.inclusions.map((i) => i.text),

          addons: pkg.addons.map((a) => ({
            id: a.id,
            label: a.label,
            price: a.price,
          })),
        };

        setService(mapped);
      } catch (err) {
        console.error("Failed to load service:", err);
      }
    });
  }, [params]);

  // Add-ons total
  const addonsTotal = useMemo(
    () => selectedAddons.reduce((sum, a) => sum + Number(a.price), 0), // ensure number
    [selectedAddons],
  );

  // Total price
  const totalPrice = service ? Number(service.price) + addonsTotal : 0;

  if (!service) return null;

  return (
    <section className="px-4 sm:px-6 lg:px-20 py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6 lg:gap-10">
        {/* LEFT SIDE */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-[#191919]">
          {/* Title */}
          <h1 className="text-xl md:text-3xl font-bold mb-4">
            {service.title}
          </h1>

          {/* Price */}
          <p className="text-lg md:text-2xl font-semibold text-[#A30A24] mb-4">
            ₱{service.price.toLocaleString()}
          </p>

          {/* Description */}
          {service.desc && (
            <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
              {service.desc}
            </p>
          )}

          {/* Inclusions */}
          <h3 className="text-base md:text-lg font-semibold text-[#191919] mb-3">
            Inclusions
          </h3>

          <ul className="mb-6 space-y-2">
            {service.inclusions.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm md:text-base"
              >
                <span className="text-[#A30A24] mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Addons */}
          <div className="border-t pt-6">
            <ServiceAddons
              addons={service.addons}
              selectedAddons={selectedAddons}
              onChange={setSelectedAddons}
            />
          </div>

          {/* Total */}
          <div className="mt-6 p-4 rounded-xl bg-[#A30A24]/5 border border-[#A30A24]">
            <p className="text-sm text-gray-600">Total Price</p>
            <p className="text-xl md:text-2xl font-bold text-[#A30A24]">
              ₱{totalPrice.toLocaleString()}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:sticky lg:top-6 h-fit">
          <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6 shadow-sm">
            <BookingForm
              service={service}
              selectedAddons={selectedAddons}
              totalPrice={totalPrice}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
