
<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>

        <q-toolbar-title>
          Auntie Admin
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <!-- drawer content -->
      <menu-list/>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-primary text-white">
      <q-tabs
        v-model="tab"
        align="justify"
        outside-arrows
        mobile-arrows
      >
        <q-route-tab default to="/eventList" name="events" icon="event" label="Events" />
        <q-route-tab name="settings" to="" icon="settings" label="Settings" />
      </q-tabs>
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