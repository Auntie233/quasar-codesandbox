<template>
    <my-q-menu :menuList="menuList"/>
</template>

<script>
import MyQMenu from './myQMenu'
export default {
  name: 'myMenu',
  components: { MyQMenu },
  data () {
    return {
        menuList: [
                {
                    icon: "event",
                    label:"事件",
                    path:"/eventList"
                },
                {
                    icon: "person",
                    label:"用户管理",
                    children:[
                      {
                          icon: "person",
                          label:"用户管理",
                          path:"/userList"
                      },{
                          icon: "person",
                          label:"角色管理",
                          path:"/roleList"
                      }
                    ]
                }
            ]
    }
  },
}
</script>