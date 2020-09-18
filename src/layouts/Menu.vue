<template>
    <q-list bordered separator>
        <q-item v-for="(menu, i) in menus" @click="toMenu(menu)" :active="curr === menu.name" :key="i" v-ripple clickable >
            <q-item-section avatar>
                <q-icon :name="menu.icon"/>
            </q-item-section>

            <q-item-section>
                {{menu.name}}
            </q-item-section>
        </q-item>
    </q-list>
</template>

<script>
export default {
    data() {
        return {
            curr: null,
            menus: [
                {
                    icon: "event",
                    name:"事件",
                    path:"/eventList"
                },
                {
                    icon: "person",
                    name:"用户管理",
                    path:"/userList"
                }
            ]
        }
    },
    methods: {
        toMenu(menu) {
            this.curr = menu.name
            this.$router.push(menu.path)
        }
    }
}
</script>