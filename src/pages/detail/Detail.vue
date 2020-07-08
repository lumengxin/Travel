<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
      >
    </detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './Banner'
import DetailHeader from './DetailHeader'
import DetailList from './DetailList'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
      /* list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人三馆联票',
              children: [{title: '成人三馆联票-一号楼'}, {title: '成人三馆联票-二号楼'}, {title: '成人三馆联票-三号楼'}]
            },
            {
              title: '成人五馆联票'
            }
          ]
        },
        {
          title: '学生票'
        },
        {
          title: '儿童票'
        }
      ] */
    }
  },
  methods: {
    getDetailInfo () {
      // axios.get('/api/detail.json?id=' + this.$route.params.id)
      // /v19/travel: 打包到服务器加上
      axios.get('/v19/travel/static/mock/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        console.log(res.data)
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
