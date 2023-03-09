import axios from 'axios';
import { showAlert } from './alert';

export const updateData = async (name, email) => {
  try {
    const res = await axios.patch(
      'http://127.0.0.1:3088/api/v1/users/updateMe',
      {
        name,
        email,
      }
    );
    if (res.data.status === 'success') {
      showAlert('success', 'Updated successfully!');
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};
