import axios from 'axios';

export async function loginAdmin(username, password) {
  try {
    const response = await axios.post('https://use2fun.onrender.com/admin/login', {
      username,
      password,
    });

    const data = response.data;

    if (data.status === 1) {
      localStorage.setItem('MasterAdmintoken', data.data.token);
      return { success: true, message: 'Login successful' };
    } else {
      return { success: false, message: 'Login failed' };
    }
  } catch (error) {
    console.error('Error logging in:', error);
    return { success: false, message: 'An error occurred' };
  }
}

export async function loginAgent(email, otp) {
  try {
    const response = await axios.post('https://use2fun.onrender.com/agent/loginemail', {
      email,
    });

    const data = response.data;

    if (data) {
      localStorage.setItem('AgentSignIn', true);
      return { success: true, message: 'Login successful', data };
    } else {
      return { success: false, message: 'Login failed' };
    }
  } catch (error) {
    console.error('Error logging in:', error);
    return { success: false, message: 'An error occurred' };
  }
}
