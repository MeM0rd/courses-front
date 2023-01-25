import Vue from 'vue'
import Vuex from 'vuex'
import {createStore} from 'vuex-smart-module';

import UserStore from './user/index'

Vue.use(Vuex)

export default () => createStore(UserStore, {
  strict: process.env.NODE_ENV !== 'production'
});
