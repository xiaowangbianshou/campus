<template>
  <div class="module-right-body">
    <img class="point-image" :src="imgurl">
          <!-- <div class="point-info"> -->
            <el-form :model="PointForm" :rules="rules" label-width="auto" ref="ruleForm" size="small" class="demo-ruleForm">
                <el-row class="rowclass">
                  <el-col :span="12">
                    <el-form-item label="编号:" prop="fid">
                      <el-input v-model="PointForm.fid" style="width:125px"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="名称:" prop="name">
                      <el-input v-model="PointForm.name" style="width:125px"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row class="rowclass">
                  <el-col :span="12">
                    <el-form-item label="区域:" prop="area">
                      <el-select v-model="PointForm.area" placeholder="区域" style="width:125px">
                        <el-option label="东校区" value="东"></el-option>
                        <el-option label="中校区" value="中"></el-option>
                        <el-option label="西校区" value="西"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="大类:" prop="type1">
                      <el-select v-model="PointForm.type1" placeholder="大类" style="width:125px">
                        <el-option label="风景" value="景"></el-option>
                        <el-option label="建筑" value="楼"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row class="rowclass">
                  <el-col :span="12">
                    <el-form-item label="小类:" prop="type2">
                      <el-select v-model="PointForm.type2" placeholder="小类" style="width:125px">
                        <el-option label="水景" Value="水" ></el-option>
                        <el-option label="公园" Value="园" ></el-option>
                        <el-option label="树林" Value="林" ></el-option>
                        <el-option label="广场" Value="场" ></el-option>
                        <el-option label="道路" Value="路" ></el-option>
                        <el-option label="教学" Value="学" ></el-option>
                        <el-option label="办公" Value="公" ></el-option>
                        <el-option label="宿舍" Value="宿" ></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row  class="rowclass">
                  <el-form-item label="简介" prop="desc">
                    <el-input type="textarea" v-model="PointForm.desc"></el-input>
                  </el-form-item>
                </el-row>
            </el-form>
          <!-- </div> -->
  </div>
</template>

<script>
import Points from '@/assets/json/points.json'
import Bus from './EventBus.js'
  export default {
    data() {
      return {
        // usefid:0,
        // imgurl:require('@/assets/images/points/1.jpg'),
        imgurl:'',
        PointForm: {
          fid: '',
          name: '',
          area: '',
          type1: '',
          type2: '',
          desc: ''
        },
        rules: {
          fid: [
            { required: true, message: '请输入编号', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入名称', trigger: 'change' }
          ],
          type1: [
            { required: true, message: '请选择', trigger: 'change' }
          ],
          type2: [
            { required: true, message: '请选择', trigger: 'change' }
          ],
          area: [
            {  required: true, message: '请选择', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写简介', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      changefid(){
        Bus.$on('share',(val)=>{
          let img_src = require('@/assets/images/points/'+val.value+'.jpg')
          this.imgurl=img_src
          this.PointForm.fid=Points[val.value-1].fid
          this.PointForm.name=Points[val.value-1].name
          this.PointForm.area=Points[val.value-1].area
          this.PointForm.type1=Points[val.value-1].type1
          this.PointForm.type2=Points[val.value-1].type2
          this.PointForm.desc=Points[val.value-1].desc
        })
      }
    },
    created() {
      this.changefid()
    },
  }
</script>

<style lang='scss'>
// @import './point.component.scss'
.module-right-body{
  .point-image{
    width: 100%;
    height: 400px;
  }
  .rowclass{
    padding-left: 20px;
    margin-right: 0px;
    margin-top: 10px;
  }
}
</style>