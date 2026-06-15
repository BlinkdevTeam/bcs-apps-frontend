"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import type { BookingData } from "@/lib/postgres/types";

function BookingConfirmation() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [booking, setBooking] = useState<BookingData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [proof, setProof] = useState<File | null>(null);

  // Load booking data
  useEffect(() => {
    const dataParam = searchParams.get("data");

    if (!dataParam) {
      router.replace("/book-now");
      return;
    }

    try {
      const parsed: BookingData = JSON.parse(
        decodeURIComponent(dataParam),
      ) as BookingData;

      setBooking(parsed);
    } catch (error) {
      console.error("Invalid booking data:", error);
      router.replace("/book-now");
    }
  }, [searchParams, router]);

  const handleConfirm = async (): Promise<void> => {
    if (loading) return;
    if (!booking) return;

    if (!proof) {
      alert("Please upload payment proof");
      return;
    }

    // 🔥 ADD THIS CHECK
    if (!booking.service?.slug) {
      console.error("Missing service ID:", booking.service);
      alert("Invalid service selected. Please try again.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("booking", JSON.stringify(booking));
      formData.append("proof", proof);

      const res = await fetch("/api/bookings", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      console.log("API RESULT:", result); // ✅ DEBUG

      if (!res.ok) {
        throw new Error(result.error || "Booking failed");
      }

      router.push("/book-now/success");
    } catch (error) {
      console.error(error);
      alert("Failed to confirm booking.");
    } finally {
      setLoading(false);
    }
  };

  if (!booking) {
    return (
      <div className="max-w-xl mx-auto p-6 text-center">
        <p>Loading booking details...</p>
      </div>
    );
  }

  const { customer, service, addons, date, time, totalPrice } = booking;

  return (
    <>
      {/* WRAPPER */}
      <div
        className={`min-h-screen bg-gray-50 transition-opacity duration-200 ${
          loading ? "pointer-events-none opacity-60 select-none" : ""
        }`}
      >
        {/* HEADER */}
        <section className="bg-[#A30A24] text-white py-16 px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Confirm Booking</h1>
        </section>

        {/* CONTENT */}
        <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
          {/* INTRO */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#191919]">
              Almost there!
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Please review your booking details before confirming.
            </p>
          </div>

          {/* CARD */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 space-y-6">
            {/* Customer Info */}
            <section>
              <h3 className="text-lg font-semibold mb-4 text-[#191919]">
                Your Information
              </h3>
              <div className="space-y-2 text-sm md:text-base">
                <p className="flex justify-between">
                  <span className="text-gray-500">Full Name</span>
                  <span className="text-[#A30A24] font-medium">
                    {customer.name}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-500">Email</span>
                  <span className="text-[#A30A24] font-medium">
                    {customer.email}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-500">Phone</span>
                  <span className="text-[#A30A24] font-medium">
                    {customer.phone}
                  </span>
                </p>
              </div>
            </section>

            <hr />

            {/* Service Info */}
            <section>
              <h3 className="text-lg font-semibold mb-4 text-[#191919]">
                Service Details
              </h3>
              <div className="space-y-2 text-sm md:text-base">
                <p className="flex justify-between">
                  <span className="text-gray-500">Service</span>
                  <span className="text-[#A30A24] font-medium">
                    {service.title}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-500">Base Price</span>
                  <span className="text-[#A30A24] font-medium">
                    ₱{Number(service.price).toLocaleString()}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-500">Notes</span>
                  <span className="text-[#A30A24] font-medium">
                    {customer.description || "N/A"}
                  </span>
                </p>
              </div>
            </section>

            <hr />

            {/* Add-ons */}
            {addons && addons.length > 0 && (
              <>
                <section>
                  <h3 className="text-lg font-semibold mb-4 text-[#191919]">
                    Add-ons
                  </h3>
                  <div className="space-y-2 text-sm md:text-base">
                    {addons.map((addon) => (
                      <p key={addon.id} className="flex justify-between">
                        <span>{addon.label}</span>
                        <span className="text-[#A30A24]">+₱{addon.price}</span>
                      </p>
                    ))}
                  </div>
                </section>

                <hr />
              </>
            )}

            {/* Schedule */}
            <section>
              <h3 className="text-lg font-semibold mb-4 text-[#191919]">
                Schedule
              </h3>
              <div className="space-y-2 text-sm md:text-base">
                <p className="flex justify-between">
                  <span className="text-gray-500">Date</span>
                  <span className="text-[#A30A24] font-medium">{date}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-500">Time</span>
                  <span className="text-[#A30A24] font-medium">{time}</span>
                </p>
              </div>
            </section>

            {/* TOTAL */}
            <div className="bg-[#A30A24]/5 border border-[#A30A24] rounded-xl p-4 flex justify-between items-center">
              <span className="text-base font-medium text-gray-700">Total</span>
              <span className="text-xl md:text-2xl font-bold text-[#A30A24]">
                ₱{totalPrice}
              </span>
            </div>

            {/* Upload */}
            {/* Upload */}
            <section className="border border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center text-center">
              <p className="font-semibold text-[#191919] mb-1">
                Upload Payment Proof
              </p>

              <p className="text-sm text-gray-500 mb-4">
                JPG, PNG, or PDF (max 5MB)
              </p>

              <label className="cursor-pointer">
                <span className="inline-block px-4 py-2 bg-[#A30A24] text-white rounded-lg text-sm hover:bg-gray-800 transition">
                  {proof ? "Replace File" : "Choose File"}
                </span>

                <input
                  type="file"
                  disabled={loading}
                  accept="image/png,image/jpeg,application/pdf"
                  onChange={(e) => {
                    if (loading) return;

                    const file = e.target.files?.[0];
                    if (!file) return;

                    if (file.size > 5 * 1024 * 1024) {
                      alert("File must be 5MB or smaller");
                      return;
                    }

                    setProof(file);
                  }}
                  className="hidden"
                />
              </label>

              {/* File info */}
              {proof && (
                <div className="mt-4 text-sm text-gray-700">
                  <p className="font-medium text-green-600">✓ File selected</p>
                  <p className="truncate max-w-xs">{proof.name}</p>
                </div>
              )}
            </section>

            {/* ACTIONS */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="button"
                onClick={() => router.back()}
                disabled={loading}
                className="w-full sm:w-auto px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition text-[#191919]"
              >
                Back
              </button>

              <button
                type="button"
                onClick={handleConfirm}
                disabled={loading}
                className="w-full sm:flex-1 px-6 py-3 rounded-lg bg-[#A30A24] text-white font-semibold hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Processing..." : "Confirm & Book"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* LOADING OVERLAY */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white px-8 py-6 rounded-xl shadow-lg text-center">
            <p className="text-lg font-semibold text-[#A30A24]">
              Processing your booking...
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Please wait while we confirm your booking.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading booking confirmation...</p>}>
      <BookingConfirmation />
    </Suspense>
  );
}
