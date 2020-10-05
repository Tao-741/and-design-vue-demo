<template>
<div>
  <h2>测试Mock</h2>
</div>
</template>

<script>
import { getUserInfo } from '@/api/testMockApi'

export default {
  name: 'TestMock',
  data () {
    return {
      obj: {}
    }
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      getUserInfo().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>
