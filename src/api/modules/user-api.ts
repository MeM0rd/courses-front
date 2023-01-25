import { AxiosPromise } from 'axios';
import AbstractApi from '@/api/modules/abstract-api';
import { Raw } from '@/@types/Raw';
import axios from 'axios';

const apiUrl = process.env.VUE_APP_URL;
axios.defaults.baseURL = apiUrl;

export default class UserApi extends AbstractApi {
  status(): AxiosPromise {
    return this.api.get('status');
  }

  saveEmail(data: Raw): AxiosPromise {
    return this.api.post('users/save-email', data);
  }

  loginByEmail(data: Raw): AxiosPromise {
    return this.api.post('auth/login-by-email', data);
  }

  registerByEmail(data: Raw): AxiosPromise {
    return this.api.post('auth/register-by-email', data);
  }
}
