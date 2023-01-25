import { Getters } from 'vuex-smart-module';
import { Store } from 'vuex';

import UserState from './state';
import User from "@/adapters/User";
import Subscription from "@/adapters/Subscription";

export default class RootGetters extends Getters<UserState> {
  private store?: Store<UserState>;

  $init(store: Store<UserState>): void {
    this.store = store;
  }

  get isAuthorized(): boolean {
    return this.state.currentUser !== null;
  }

  get currentUser(): User|null {
    return this.state.currentUser;
  }

  get subscriptionsData(): Subscription[] {
    return this.state.subscriptions;
  }
}
