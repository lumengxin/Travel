import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

// 使用vuex管理home,city公共数据
Vue.use(Vuex)

export default new Vuex.Store({
  // 键值相同
  // state: state,
  // actions: {
  //   changeCity (ctx, city) {
  //     console.log(city)
  //     ctx.commit('changeCity', city)
  //   }
  // },
  state,
  mutations,
  getters: {
    doubleCity (state) {
      return state.city + '(city)'
    }
  }
})
