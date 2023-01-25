import { Mutations } from 'vuex-smart-module';
import UserState from './state';
import AuthStage from '@/components/AuthModal/AuthStage';
import User from "@/adapters/User";
import Subscription from "@/adapters/Subscription";
export default class UserMutations extends Mutations<UserState> {
  setAuthStage(stage: AuthStage): void {
    this.state.authStage = stage;
  }

  setStatus(status: User) {
    this.state.status = status ? User.fromRaw(status) : null;
  }

  setUser(user: User | null) {
    this.state.currentUser = user;
  }

  setSubscriptions(subscription: Array<Subscription>) {
    this.state.subscriptions = subscription;
  }
}
