<template>
  <div>
    <!-- 动态菜单 -->
    <q-list>
      <my-q-menu-item :my-router="menuList" :init-level="0"/>
    </q-list>
  </div>
</template>

<script>
import MyQMenuItem from './myQMenuItem'

export default {
  props: {
    menuList:[]
  },
  name: 'my-q-menu',
  components: { MyQMenuItem },
  data () {
    return {
      
    }
  }
}
</script>