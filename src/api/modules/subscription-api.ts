import { AxiosPromise } from 'axios';
import AbstractApi from '@/api/modules/abstract-api';
import SearchData from '@/adapters/SearchData';
import { Raw } from '@/@types/Raw';
import axios from 'axios';
import Subscription from "@/adapters/Subscription";

const apiUrl = process.env.VUE_APP_URL;
axios.defaults.baseURL = apiUrl;

export default class SubscriptionApi extends AbstractApi {
    getSubscriptions(data: Raw): AxiosPromise {
        return this.api.post('subscription/', data);
    }

    saveSubscriptions(data: Raw): AxiosPromise {
        return this.api.post('subscription/save', data);
    }

    searchSubscription(data: SearchData): AxiosPromise {
        return this.api.get('subscription/search', {
            params: {
                text: data.text,
                user_id: data.userId,
            }
        });
    }

    deleteSubscription(data: Subscription): AxiosPromise {
        console.log('delete',data)
        return this.api.delete('subscription/delete', {
            params: {
                id: data.id,
                user_id: 1,
            }
        });
    }
}
