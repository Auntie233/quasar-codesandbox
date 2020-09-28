<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
        <q-input label="请输入角色名">
            <template v-slot:append>
              <q-icon name="search"/>
            </template>
        </q-input>
      </div>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn fab icon="add" color="primary" @click="openNewDialog" />
      </q-page-sticky>
      <role-info-dialog :dialog="dialog" :roleInfo="roleInfoInPage" :onDialogClose="closeDialog"/>
    <q-table
      :data="data"
      :columns="columns"
      row-key="id"
      :loading="loading"
      :pagination.sync="pagination"
    >
    <template v-slot:body-cell-action="props">
      <q-td :props="props">
        <q-btn @click="openEditDialog(props)">
          编辑
        </q-btn>
      </q-td>
    </template>
    </q-table>
  </div>
</template>

<script>
import roleInfoDialog from './RoleInfoDialog.vue'
export default {
  components: {
    roleInfoDialog
  },
  methods:{
    closeDialog() {
      this.dialog = false
      this.$router.go(0)
    },
    openNewDialog() {
      this.roleInfoInPage = {}
      this.dialog = !this.dialog
    },
    openEditDialog(scope) {
      this.roleInfoInPage = scope.row
      this.dialog = !this.dialog
    },
    loadData() {
      this.loading = true
      this.$axios.get('/role/find', {
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
            }
          }
        }
      ).finally(()=>{
        this.loading = false
      })
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
      loading: false,
      columns: [
        {
          name: 'roleName',
          label: '角色名',
          align: 'left',
          field: row => row.roleName,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'action', label: '操作' ,align: 'center'}
      ],
      data: [],
      roleInfoInPage: {}
    }
  }
}
</script>
