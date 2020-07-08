// 防止用户禁用本地存储
let defaultCity = '武汉'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
