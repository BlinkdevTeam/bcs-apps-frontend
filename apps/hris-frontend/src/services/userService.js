import axios from "axios";

const API = "http://localhost:3001/api";

// ─────────────────────────────────────────────
// GET ROLES
// ─────────────────────────────────────────────
export async function getRoles() {
  const res = await axios.get(`${API}/roles`);
  return res.data;
}

// ─────────────────────────────────────────────
// UPDATE USER
// ─────────────────────────────────────────────
export async function updateUser(userId, payload) {
  const res = await axios.put(`${API}/employees/${userId}`, payload);

  return res.data;
}

// ─────────────────────────────────────────────
// GET USER PERMISSIONS
// ─────────────────────────────────────────────
export async function getUserPermissions(userId) {
  const res = await axios.get(`${API}/employees/${userId}/permissions`);

  return res.data;
}

// ─────────────────────────────────────────────
// UPDATE USER PERMISSIONS
// ─────────────────────────────────────────────
export async function updateUserPermissions(userId, payload) {
  const res = await axios.put(
    `${API}/employees/${userId}/permissions`,
    payload,
  );

  return res.data;
}
