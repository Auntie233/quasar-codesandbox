<template>
  <div class="fullscreen text-center q-pa-md flex flex-center">
    <div>
      <q-card style="width:300px;min-height:360px;">
    
      <q-tabs v-model="tab" class="text-teal">
        <q-tab label="登录" name="login" />
        <q-tab label="注册" name="register" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md"
            >
              <q-input
                filled
                v-model="name"
                label="用户名"
                lazy-rules
              />

              <q-input
                filled
                type="password"
                v-model="age"
                label="密码"
                lazy-rules
              />

              <!-- <q-separator/> -->

              <div>
                <q-btn label="提交" padding="12px 30px" type="submit" color="primary"/>
              </div>
            </q-form>
        </q-tab-panel>

        <q-tab-panel name="register">
          With so much content to display at once, and often so little screen real-estate,
          Cards have fast become the design pattern of choice for many companies, including
          the likes of Google and Twitter.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
    </div>
  </div>
</template>

<script >
export default {
  name: 'Login',
  data() {
    return {
      tab: 'login',
      accept: false
    }
  }
}
</script>
