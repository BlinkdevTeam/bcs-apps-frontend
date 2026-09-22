// src/services/userService.js
import api from "../api/axios";

export async function getRoles() {
  const res = await api.get("/api/roles");
  return res.data;
}

export async function getPermissions() {
  const res = await api.get("/api/permissions");
  return res.data;
}

export async function updateUser(userId, payload) {
  const res = await api.put(`/api/users/${userId}`, {
    role_id: payload.role_id,
    status: payload.status,
    is_active: payload.status === "active",
  });
  return res.data;
}

export async function getUserPermissions(userId) {
  const res = await api.get(`/api/employees/${userId}/permissions`);
  return res.data;
}

export async function updateUserPermissions(userId, payload) {
  const res = await api.put(`/api/employees/${userId}/permissions`, payload);
  return res.data;
}

export async function resendInvite(userId) {
  const res = await api.post(`/api/users/${userId}/resend-invite`);
  return res.data;
}
