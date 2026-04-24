/**
 * lib/auth.ts
 *
 * Client-side auth helpers using:
 * - in-memory access token
 * - HttpOnly refresh token (server-managed)
 */

let _accessToken: string | null = null;

/** Store access token in memory */
export function setAccessToken(token: string) {
  _accessToken = token;
}

/** Get current access token */
export function getAccessToken(): string | null {
  return _accessToken;
}

/** Clear token */
export function clearAccessToken() {
  _accessToken = null;
}

/**
 * Refresh access token using HttpOnly cookie
 */
export async function refreshAccessToken(): Promise<string | null> {
  try {
    const res = await fetch("/api/auth/refresh", {
      method: "POST",
      credentials: "include",
    });

    if (!res.ok) return null;

    const data: { accessToken?: string } = await res.json();

    if (data.accessToken) {
      setAccessToken(data.accessToken);
      return data.accessToken;
    }

    return null;
  } catch {
    return null;
  }
}

/**
 * Safe authenticated fetch wrapper
 */
export async function authFetch(
  input: RequestInfo,
  init: RequestInit = {}
): Promise<Response> {
  const token = getAccessToken();

  const buildRequest = (t: string | null) =>
    fetch(input, {
      ...init,
      credentials: "include",
      headers: {
        ...(init.headers || {}),
        ...(t ? { Authorization: `Bearer ${t}` } : {}),
        // only set JSON header if body is NOT FormData
        ...(init.body && !(init.body instanceof FormData)
          ? { "Content-Type": "application/json" }
          : {}),
      },
    });

  let response = await buildRequest(token);

  // 🔁 try refresh once on expired token
  if (response.status === 401) {
    const newToken = await refreshAccessToken();

    if (newToken) {
      response = await buildRequest(newToken);
    } else {
      clearAccessToken();
    }
  }

  return response;
}

/**
 * Logout user
 */
export async function logout(redirectTo = "/login") {
  clearAccessToken();

  try {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
  } catch {
    // ignore
  }

  window.location.href = redirectTo;
}