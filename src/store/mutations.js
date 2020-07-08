export default {
  changeCity (state, city) {
    state.city = city
    try {
      // 使用h5本地存储
      localStorage.city = city
    } catch (e) {}
  }
}
