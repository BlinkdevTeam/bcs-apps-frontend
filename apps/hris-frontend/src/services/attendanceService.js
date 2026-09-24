import api from "../api/axios";

const BASE = "/api/attendance";

export const getAttendanceRecords = (params = {}) => api.get(BASE, { params });
export const clockIn = (payload) => api.post(`${BASE}/clock-in`, payload);
export const startBreak = (id, payload) =>
  api.put(`${BASE}/${id}/break-start`, payload);
export const endBreak = (id, payload) =>
  api.put(`${BASE}/${id}/break-end`, payload);
export const clockOut = (id, payload) =>
  api.put(`${BASE}/${id}/clock-out`, payload);
export const correctAttendanceRecord = (id, payload) =>
  api.put(`${BASE}/${id}/correct`, payload);
export const deleteAttendanceRecord = (id) => api.delete(`${BASE}/${id}`);
