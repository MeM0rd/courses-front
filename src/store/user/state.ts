import User from '@/adapters/User';
import AuthStage from '@/components/AuthModal/AuthStage';
import Subscription from "@/adapters/Subscription";

export default class UserState {
  currentUser: User | null = null;
  authStage: AuthStage | null = null;
  authAfterResponse: boolean | null = false;
  status: User | null = null;
  subscriptions: Array<Subscription> = [];
}
