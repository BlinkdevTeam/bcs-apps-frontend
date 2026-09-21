import api from "../api/axios";

const BASE = "/api/employees";

// Encode ids before putting them in a URL path so a value like "../users"
// can't redirect the request to a different endpoint.
const byId = (id) => `${BASE}/${encodeURIComponent(id)}`;

/**
 * Create a new employee
 * @param {Object} employeeData - Employee object matching backend Employee model
 * @returns {Promise} Axios Promise
 */
export const createEmployee = (employeeData) => {
  return api.post(BASE, employeeData);
};

/**
 * Get all employees
 * @returns {Promise} Axios Promise
 */
export const getEmployees = () => {
  return api.get(BASE);
};

/**
 * Get a single employee by ID
 * @param {string} id - Employee UUID
 * @returns {Promise} Axios Promise
 */
export const getEmployeeById = (id) => {
  return api.get(byId(id));
};

/**
 * Update an employee by ID
 * @param {string} id - Employee UUID
 * @param {Object} employeeData - Fields to update (first_name, last_name, role_title, department_id, status, etc.)
 * @returns {Promise} Axios Promise
 */
export const updateEmployee = (id, employeeData) => {
  return api.put(byId(id), employeeData);
};

/**
 * Delete an employee by ID
 * @param {string} id - Employee UUID
 * @returns {Promise} Axios Promise
 */
export const deleteEmployee = (id) => {
  return api.delete(byId(id));
};
