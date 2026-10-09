import api from "../api/axios";

export const getLeaveBalances = async (year) => {
  const res = await api.get("/api/leave-balances", { params: { year } });
  return res.data.data; // [{ empId, annual:{total,used}, sick, emergency }]
};

export const saveLeaveBalance = async (employeeId, payload) => {
  const res = await api.put(
    `/api/leave-balances/${encodeURIComponent(employeeId)}`,
    payload, // { year, annual, sick, emergency }
  );
  return res.data.data;
};
