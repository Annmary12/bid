// third party library
import axios from 'axios';

// helper function
import { authService } from '../auth';

const token = authService.getToken();

const http = axios.create({
  baseURL: process.env.EAZY_TENDER_API,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default http;