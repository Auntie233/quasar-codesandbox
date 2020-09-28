
<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="left = !left"
        />
        <q-toolbar-title>
          Auntie Admin
        </q-toolbar-title>
        <q-btn
          flat
          round
          v-go-back="'/'"
        >返回首页</q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <menu-list/>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <q-toolbar>
          <q-toolbar-title>管理平台</q-toolbar-title>
        </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import menuList from './Menu'
export default {
  components:{
    menuList,
  },
  data () {
    return {
      left: false
    }
  }
}
</script>