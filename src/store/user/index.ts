import { createMapper, Module } from 'vuex-smart-module';

import RootState from './state';
import RootGetters from './getters';
import RootMutations from './mutations';
import RootActions from './actions';

const module = new Module({
  state: RootState,
  getters: RootGetters,
  mutations: RootMutations,
  actions: RootActions,
});

const userMapper = createMapper(module);

export { module as default, userMapper };
