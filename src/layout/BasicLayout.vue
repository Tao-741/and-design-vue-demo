<template>
  <a-layout id="components-layout-demo-custom-trigger" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']" @click="handleClick">
        <template v-for="item in menuList">
          <a-sub-menu :key="item.name">
            <span slot="title">
              <a-icon :type="item.meta.icon"/>
              <span>{{item.meta.title}}</span>
            </span>
            <template v-for="childrenItem in item.children">
              <a-menu-item :key="childrenItem.name">
                <a-icon :type="childrenItem.meta.icon"/>
                <span>{{childrenItem.meta.title}}</span>
              </a-menu-item>
            </template>
          </a-sub-menu>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>
          <a-icon type="home"></a-icon>
          首页
        </a-breadcrumb-item>
          <template v-for="item in breadCrumbList">
            <a-breadcrumb-item :key="item.name">
              <a-icon :type="item.icon"/>
              <span>{{ (item.meta && item.meta.title) || item.name}}</span>
            </a-breadcrumb-item>
          </template>
      </a-breadcrumb>
      <a-layout-content
        :style="{ margin: '0 24px 16px', padding: '24px', background: '#fff',height: '100%'}"
      >
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'BasicLayout',
  data () {
    return {
      collapsed: false
    }
  },
  computed: {
    menuList () {
      return this.$store.getters.menuList
    },
    breadCrumbList () {
      return this.$store.getters.breadCrumbList
    }
  },
  methods: {
    ...mapMutations([
      'setBreadCrumbList'
    ]),
    handleClick (e) {
      this.$router.push({
        name: e.key
      })
    }
  },
  watch: {
    '$route' (newRoute) {
      this.setBreadCrumbList(newRoute.matched)
    }
  }
}
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
