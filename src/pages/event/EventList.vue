<template>
  <div class="q-pa-md row q-gutter-md">
    <q-intersection
         v-for="(event, i) in events" 
         :key="i"
        transition="scale"
         class="event-card ">
    <q-card >
      <q-card-section>
        <div class="text-h6">{{event.title}}</div>
        <div class="text-subtitle2">{{event.description}}</div>
      </q-card-section>
      <q-card-section>
        {{ event.description }}
      </q-card-section>

      <q-separator />

      <q-card-actions align="center">
        <q-btn >编辑</q-btn>
        <q-btn @click="toPage(event)" >参赛者列表</q-btn>
      </q-card-actions>
    </q-card>
    </q-intersection>
  </div>
</template>

<script>
export default {
  methods: {
    toPage(event) {
      this.$router.push("/contestantList")
    }
  },
  data(){
    return {
      events: [{
        id: 1,
        title: '黄金赛道',
        description: '秋名山'
      },{
        id: 1,
        title: '黄金赛道',
        description: '秋名山'
      },{
        id: 1,
        title: '黄金赛道',
        description: '秋名山'
      },{
        id: 1,
        title: '黄金赛道',
        description: '秋名山'
      }
      ]
    }
  }
}
</script>

<style>
.event-card {
  width: 100%;
  max-width: 350px;
}
</style>