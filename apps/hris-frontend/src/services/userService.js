import axios from "axios";

const API = "http://localhost:3001/api";

export async function getRoles() {
  const res = await axios.get(`${API}/roles`);
  return res.data;
}

export async function getPermissions() {
  const res = await axios.get(`${API}/permissions`);
  return res.data;
}

export async function updateUser(userId, payload) {
  const res = await axios.put(`${API}/users/${userId}`, {
    role_id: payload.role_id, // UUID — backend must update employee_roles table
    status: payload.status,
    is_active: payload.status === "active",
  });
  return res.data;
}

export async function getUserPermissions(userId) {
  const res = await axios.get(`${API}/employees/${userId}/permissions`);
  return res.data;
}

export async function updateUserPermissions(userId, payload) {
  const res = await axios.put(
    `${API}/employees/${userId}/permissions`,
    payload,
  );
  return res.data;
}

export async function resendInvite(userId) {
  const res = await axios.post(`${API}/users/${userId}/resend-invite`);
  return res.data;
}
