const STATUS_TO_LABEL = {
  present: "Present",
  remote: "Remote",
  late: "Late",
  absent: "Absent",
  on_leave: "On Leave",
};
const LABEL_TO_STATUS = Object.fromEntries(
  Object.entries(STATUS_TO_LABEL).map(([k, v]) => [v, k]),
);

export function statusToLabel(status) {
  return STATUS_TO_LABEL[status] || status || "—";
}
export function labelToStatus(label) {
  return LABEL_TO_STATUS[label] || label?.toLowerCase().replace(/\s+/g, "_");
}

// "08:52:00" -> "8:52 AM"
export function to12Hour(time24) {
  if (!time24) return null;
  const [hStr, mStr] = time24.split(":");
  let h = parseInt(hStr, 10);
  const suffix = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${mStr} ${suffix}`;
}

// "8:52 AM" -> "08:52:00"
export function to24Hour(time12) {
  if (!time12) return null;
  const [time, meridiem] = time12.trim().split(" ");
  let [h, m] = time.split(":").map(Number);
  if (meridiem === "PM" && h !== 12) h += 12;
  if (meridiem === "AM" && h === 12) h = 0;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:00`;
}

// Raw backend attendance_records row -> the shape AttendanceTab already expects
export function mapAttendanceRecord(record) {
  return {
    id: record.id,
    empId: record.employee_id,
    status: statusToLabel(record.status),
    timeIn: to12Hour(record.time_in),
    breakOut: to12Hour(record.break_out),
    breakIn: to12Hour(record.break_in),
    timeOut: to12Hour(record.time_out),
    hours: record.net_hours != null ? Number(record.net_hours) : null,
    correctedAt:
      record.updated_at !== record.created_at ? record.updated_at : null,
  };
}
