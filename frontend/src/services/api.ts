import axios from 'axios';

import { User } from '@/src/types';
import { SignUpFormInput } from '@/src/components/SignUpForm';

// const baseURL = process.env.API_HOST_URL;
const baseURL = 'http://localhost:3000';
console.log('baseURL ', baseURL);

export const api = {
  signup: async (user: SignUpFormInput): Promise<User> =>
    axios
      .post(`${baseURL}/users/new`, user)
      .then((res) => {
        console.log(res.data);
        const { data: user } = res.data;
        return user;
      })
      .catch((err) => {
        if (err.response) {
          // Server responded with a status other than 200 range
          console.error('Response error:', err.response.data);
        } else if (err.request) {
          // Request was made but no response received
          console.error('Request error:', err.request);
        } else {
          // Something else happened
          console.error('Error:', err.message);
        }
        throw new Error(err);
      })
};
