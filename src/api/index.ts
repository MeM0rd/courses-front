import {AxiosInstance} from 'axios';

import RootApi from '@/api/modules/root-api';
import UserApi from '@/api/modules/user-api';
import SubscriptionApi from '@/api/modules/subscription-api';

export default class Api {
  private readonly apiInstance: AxiosInstance;

  public root: RootApi;
  public user: UserApi;
  public subscription: SubscriptionApi

  constructor(api: AxiosInstance) {
    this.apiInstance = api;

    this.root = new RootApi(this.apiInstance);
    this.user = new UserApi(this.apiInstance);
    this.subscription = new SubscriptionApi(this.apiInstance);
  }

  setDefaults(defaults = {}): void {
    this.apiInstance.defaults.params = defaults;
  }
}
