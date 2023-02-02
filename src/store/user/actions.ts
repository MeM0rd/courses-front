import UserState from './state';
import UserGetters from './getters';
import UserMutations from './mutations';
import {ApiActions} from '@/store/api-actions';
import {Raw} from '@/@types/Raw';
import User from '@/adapters/User';
import Subscription from "@/adapters/Subscription";

export default class UserActions extends ApiActions<UserState, UserGetters, UserMutations, UserActions> {
    registerByEmail(data: Raw): Promise<User | null | void> {
        return this.api.user.registerByEmail(data)
            .then(({data}) => {
                const user = data.data ? User.fromRaw(data.data) : null;

                this.commit('setUser', user);

                return user;
            }
        );
    }

    getStatus(): Promise<User | void> {
        return this.api.user.status()
            .then(({data}) => {
                this.commit('setStatus', data);
            })
    }

    loginByEmail(data: Raw): Promise<User | null | void> {
        return this.api.user.loginByEmail(data)
            .then(({data}) => {
                const user = data.data ? User.fromRaw(data.data) : null;

                this.commit('setUser', user);

                return user;
                }
            );
    }

    getSubscriptions(data: Raw): Promise<Array<any> | null | void> {
        return this.api.subscription.getSubscriptions(data)
            .then((response) => {
                const subs = response.data.data ? Subscription.fromRaw(response.data.data) : null;
                this.state.subscriptions = response.data.data;
            });
    }

    saveSubscriptions(data: Raw) {
        return this.api.subscription.saveSubscriptions(data)
            .then()
    }

    searchSubscription(searchText: string) {
        const data = {
            text: searchText,
            userId: 1
        }

        return this.api.subscription.searchSubscription(data)
            .then((response) => {
                this.state.subscriptions = response.data.data;
        })
    }
}
