<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view/>
    </div>
  </a-config-provider>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import zhTW from 'ant-design-vue/lib/locale-provider/zh_TW'
import enUS from 'ant-design-vue/lib/locale-provider/en_US'
export default {
  data () {
    return {
      locale: zhCN
    }
  },
  watch: {
    userLang (newVal, oldVal) {
      if (newVal === 'zh-CN') {
        this.locale = zhCN
      } else if (newVal === 'zh-TW') {
        this.locale = zhTW
      } else if (newVal === 'en-US') {
        this.locale = enUS
      }
    }

  },
  computed: {
    userLang () {
      return this.$store.getters.userLang
    }
  }
}
</script>
<style lang="less">
#app {
   height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
