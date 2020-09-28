<template>
  <div class="q-pa-md q-gutter-sm" >
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card style="min-width:400px;">
        <q-bar class="bg-primary text-white">
            <div >角色分配</div>
          <q-space />
          <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary">Minimize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" @click="onDialogClose" >
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <div class="q-pa-md" style="width:100%;">
          <q-card class="q-pa-md q-pl-md" >
            <q-card-section>
              <q-form class="q-gutter-md row items-start">
                  <q-input disable v-model="userInfo.username" label="用户名" stack-label/>
                  <q-select clearable filled v-model="model" :options="options" label="Label" />
              </q-form>
            </q-card-section>
            <q-separator />
            <q-card-actions align="center">
              <q-btn @click="onSubmit">提交</q-btn>
              <q-btn @click="onDialogClose" >取消</q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </q-card>
      
    </q-dialog>
  </div>
</template>

<script>
export default {
    
    props: {
        dialog: Boolean,
        onDialogClose: Function,
        userInfo: Object
    },
  data () {
    return {
      maximizedToggle: false
    }
  },
  methods:{
    onSubmit() {
      this.$axios.post('/user/save', this.userInfo).then(
        (response) => {
          if(response.status==200) {
            if (response.data.success) {
              this.onDialogClose();
            }
          }
        }
      )
    }
  }
}
</script>