"use client";

/**
 * middleware/withAuth.tsx
 *
 * Higher-order component that protects any page.
 * On first render it calls /api/auth/refresh to get a fresh access token
 * from the HttpOnly cookie. If that fails it redirects to /login.
 *
 * Usage:
 *   export default withAuth(Dashboard);
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { refreshAccessToken, setAccessToken } from "@/lib/auth";

export interface AuthUser {
  id: string;
  employeeCode: string;
  name: string;
  email: string;
  role: string;
  mustChangePassword: boolean;
}

interface WithAuthProps {
  user: AuthUser;
}

export function withAuth<P extends WithAuthProps>(
  WrappedComponent: React.ComponentType<P>,
) {
  const Protected = (props: Omit<P, keyof WithAuthProps>) => {
    const router = useRouter();
    const [user, setUser] = useState<AuthUser | null>(null);
    const [checking, setChecking] = useState(true);

    useEffect(() => {
      (async () => {
        try {
          const res = await fetch("/api/auth/refresh", { method: "POST" });
          if (!res.ok) throw new Error("refresh failed");
          const data = await res.json();
          setAccessToken(data.accessToken);
          setUser(data.user);

          // Force password change if required
          if (data.user?.mustChangePassword) {
            router.replace("/change-password");
            return;
          }
        } catch {
          router.replace("/login");
        } finally {
          setChecking(false);
        }
      })();
    }, [router]);

    if (checking || !user) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            fontFamily: "DM Sans, sans-serif",
            color: "#6b7280",
            fontSize: ".9rem",
          }}
        >
          Verifying session…
        </div>
      );
    }

    return <WrappedComponent {...(props as P)} user={user} />;
  };

  Protected.displayName = `withAuth(${WrappedComponent.displayName ?? WrappedComponent.name})`;
  return Protected;
}
