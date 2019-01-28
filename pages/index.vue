<template>
  <section class="container">
    <div v-for="item in data">
      <p>{{item.phone}}</p>
    </div>
  </section>

</template>

<script type="text/ecmascript-6">
  import { getUser, addUser } from '../plugins/axios.js'
  export default {
    head () {
      return {
        title: '首页',
        meta: [
          {
            name: 'keywords',
            content: '很多个很多个关键词很多个很多个关键词很多个很多个关键词'
          }
        ]
      }
    },
    asyncData () {
      // return getUser().then((res) => {
      //   return { data: res.message}
      // })
    },
    data () {
      return {
        data: null
      }
    },
    mounted () {

    },
    methods: {

    }
  }
</script>
