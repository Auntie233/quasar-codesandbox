<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card>
        <q-bar class="bg-primary text-white">
            <div >编辑</div>
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
            <q-form class="q-gutter-md row items-start">
                <q-input placeholder="用户名"/>
            </q-form>          
        </div>  
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
    
    props: {
        dialog: Boolean,
        onDialogClose: Function
    },
  data () {
    return {
      maximizedToggle: true
    }
  }
}
</script>