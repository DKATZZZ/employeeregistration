import axios from 'axios';

const API_URL = 'http://localhost:5000';
const FAKE_TOKEN = 'FAKETOKEN440234$6677JK0001';  // Normally, this would be dynamically fetched.

axios.defaults.headers.common['Authorization'] = `Bearer ${FAKE_TOKEN}`;

export const addEmployee = async (employeeData) => {
  try {
    const response = await axios.post(`${API_URL}/employees`, employeeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
