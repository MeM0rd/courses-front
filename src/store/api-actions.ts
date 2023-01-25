import { Actions } from 'vuex-smart-module';
import Api from '@/api';
import { Store } from 'vuex';
import createApiInstance from '@/api/factory';
import { BG, BM } from 'vuex-smart-module/lib/assets';
import UserState from "@/store/user/state";

export class ApiActions<S = Record<string, unknown>, G extends BG<S> = BG<S>, M extends BM<S> = BM<S>, A = Record<string, unknown>> extends Actions<S, G, M, A> {
  private apiInstance: Api | null = null;
  protected store!: Store<UserState>;

  $init(store: Store<UserState>): void {
    this.store = store;
  }

  get api(): Api {
    if (this.apiInstance === null) {
      this.apiInstance = new Api(createApiInstance());
    }

    return this.apiInstance;
  }
}
