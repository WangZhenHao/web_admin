<template lang="html">
  <div>
      sdafdsf
  </div> 
</template>

<script>

  import routerScript from '@/components/plugin/routerScript'
  import { autoComplete } from 'STATIC/js/module/Amap.js'
  import { addMansion, getMansionList, editManSion } from '@/config/apiList.js'
  export default {
    components: {
      routerScript
    },
    data() {
      return {
        params: {},
        mansionDetail: {},
        buildingName: '',
        dialogStauts: {
          addDetail: false,
          editDetail: false
        },
        loading: false,
        areaList: [],
        showArealist: false,
        params: {
          pageSize: 20,
          pageNo: 1
        },
        list: []
      }
    },
    activated() {
      // alert(1)
      // page.apiPost('/operator/building/v1/list', {}).then(res => {
        
      // })
      this.getList();
    },
    methods: {
      mapFinsh() {

      },
      //分页
      handleCurrentChange(currentPage){
          this.params['pageNo'] = currentPage;
          this.getList();
        },
      showDaliog(type, info) {
        if(type == 'addDetail') {
          this.mansionDetail = {};
        } else if(type == 'editDetail') {
          this.mansionDetail = {
            adminId: info['adminId'],
            buildingId: info['buildingId'],
            buildingName: info['buildingName'],
            provice: info['provice'],
            city: info['city'],
            district: info['district'],
            address: info['address'],
            longitude: info['longitude'],
            latitude: info['latitude'],
            accountName: info['accountName'],
            phoneNo: info['phoneNo'],
            password: ''
          }
          console.log(this.mansionDetail)
        }
        this.dialogStauts[type] = true;
      },
      hideDaliog(type) {
        this.dialogStauts[type] = false;
      },
      inputHandle(value) {
        autoComplete(value, (status, result) => {
          if(status == 'complete') {
            this.areaList = result.tips;
            if(this.areaList.length) {
              this.showArealist = true;
            }
          } else {
            this.showArealist = false;
          }
        })
      },
      search() {

      },
      getList() {
        // debugger;
        getMansionList(this.params)
        .then(res => {
          this.list = res.data.list;
          this.params = {
            pageSize: res.data.pageSize,
            total: res.data.total
          };
        }).catch(res => {

        })
      },
      checkField() {
        if(!this.mansionDetail['buildingName']) {
          alert('请输入大厦名称');
          return false;
        } else if(!this.mansionDetail['city']) {
          alert('城市不存在');
          return false;
        } else if(!this.mansionDetail['longitude']) {
          alert('经纬度不存在');
          return false;
        } else if(!this.mansionDetail['accountName']) {
          alert('请输入账号名称');
          return false;
        } else if(!phoneNumberFormat(this.mansionDetail['phoneNo'])) {
          alert('请输入正确手机号');
          return false;
        } else {
          return true;
        }
      },
      add() {
        if(this.checkField()) {
          if(!this.mansionDetail['password']) {
            alert('请输入密码');
            return false;
          }
          this.addMansion();
        }
      },
      edit() {
        if(this.checkField()) {
          this.editManSion();
        }
      },
      choseAddress(info) {
        let str = info['district'],
          re = /(.*省)(.*市)(.*区)/g,
          arr = str.match(re);
        this.mansionDetail['address'] = info['address'];
        this.mansionDetail['buildingName'] = info['name'];
        this.mansionDetail['longitude'] = info['location']['lng'];
        this.mansionDetail['latitude'] = info['location']['lat'];
        this.mansionDetail['provice'] = RegExp.$1;
        this.mansionDetail['city'] = RegExp.$2;
        this.mansionDetail['district'] = RegExp.$3;
        this.showArealist = false;
        console.log(this.mansionDetail)
      },
      addMansion() {
        addMansion(this.mansionDetail)
        .then(res => {
          this.$message({
                message: res.msg,
                type: 'success'
              });
          this.hideDaliog('addDetail');
          this.mansionDetail = {};
          this.getList();
        }).catch(res => {

        })
      },
      editManSion() {
        editManSion(this.mansionDetail).then(res => {
          this.$message({
                message: res.msg,
                type: 'success'
              });
          this.hideDaliog('editDetail');
          this.mansionDetail = {};
          this.getList();
        }).catch(res => {

        })
      }
    }
  }
</script>

<style lang="scss">

</style>
