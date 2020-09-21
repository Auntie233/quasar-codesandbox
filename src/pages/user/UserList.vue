<template>
  <div class="q-pa-md">
    <q-table
      title="用户列表"
      :data="data"
      :columns="columns"
      row-key="id"
      :selected.sync="selected"
      :filter="filter"
      :pagination.sync="pagination"
    >
    <template v-slot:top>
      <div class="q-table__title">用户列表</div>
      <q-space/>
      <q-input label="请输入用户名" v-model="filter">
      <template v-slot:append>
        <q-icon name="search"/>
      </template>
      </q-input>
      <user-info-dialog :dialog="dialog" :on-dialog-close="closeDialog"/>
    </template>
    <template v-slot:body-cell-action="props">
      <q-td :props="props">
        <q-btn @click="dialog=true">
          编辑
        </q-btn>
      </q-td>
    </template>
    </q-table>
  </div>
</template>

<script>
import userInfoDialog from './UserInfoDialog.vue'
export default {
  components: {
    userInfoDialog
  },
  methods:{
    closeDialog() {
      this.dialog = false
    },
    loadData() {
      this.$axios.get('/user/find', {
        params: {
          page: this.pagination.page-1,
          size: this.pagination.rowsPerPage
        }
      }).then(
        (response) => {
          if(response.status==200) {
            if (response.data.success) {
              var resData = response.data.result
              this.data = resData.content
              this.pagesNumber = resData.totalPages
              this.pagination.page = resData.number
              this.pagination.rowsNumber = resData.totalElements
              console.info(this.data)
            }
          }
        }
      )
    }
  },
  mounted() {
    this.loadData()
  },
  data () {
    return {
      pagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 10
        // rowsNumber: xx if getting data from a server
      },
      pagesNumber: 10,
      dialog: false,
      filter: '',
      selected: [],
      columns: [
        {
          name: 'username',
          label: '用户名',
          align: 'left',
          field: row => row.username,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'action', label: '操作' ,align: 'center'}
      ],
      data: []
    }
  }
}
</script>
