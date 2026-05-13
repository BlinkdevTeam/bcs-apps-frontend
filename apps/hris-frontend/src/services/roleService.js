import api from "./api";

// GET ALL PERMISSIONS
export const getPermissions = async () => {
  const res = await api.get("/api/permissions");

  return res.data;
};

// CREATE ROLE
export const createRole = async (payload) => {
  const res = await api.post("/api/roles", payload);

  return res.data;
};
