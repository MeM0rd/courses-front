import { AxiosPromise } from 'axios';
import AbstractApi from '@/api/modules/abstract-api';
import { Raw } from '@/@types/Raw';
import axios from 'axios';

const apiUrl = process.env.VUE_APP_URL;
axios.defaults.baseURL = apiUrl;

export default class SubscriptionApi extends AbstractApi {
    getSubscriptions(data: Raw): AxiosPromise {
        return this.api.post('subscription/', data)
    }

    saveSubscriptions(data: Raw): AxiosPromise {
        return this.api.post('subscription/save', data)
    }
}
