<template>
<div>
  <a-select default-value="zh-CN" style="width: 120px" @change="handleChange">
    <a-select-option value="zh-CN">zh-CN</a-select-option>
    <a-select-option value="zh-TW">zh-TW</a-select-option>
    <a-select-option value="en-US">en-US</a-select-option>
  </a-select>
    <a-button type="primary" @click="showModel">打开对话框</a-button>
    <a-modal :visible="visible"
             :title="title"
             :confirm-loading="confirmLoading"
             @cancel="handleCancel"
    >
      <p>Some contents...</p>
    </a-modal>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: '标题',
      visible: false,
      confirmLoading: false
    }
  },
  methods: {
    ...mapActions([
      'setUserLanguage'
    ]),
    handleChange (value) {
      console.log(value)
      this.$i18n.locale = value
      localStorage.setItem('lang', value)
      this.setUserLanguage({ userLang: value })
    },
    showModel () {
      this.visible = true
    },
    handleCancel () {
      this.visible = false
    }
  }
}
</script>

<style scoped>

</style>
