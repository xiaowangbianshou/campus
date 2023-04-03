<template>
  <div class="module-container">
    <div class="module-body">
      <el-timeline class="timeline" reverse='true'>
        <el-timeline-item v-for="comment in comments" :key="comment.id" icon="el-icon-time" size='large' color='#7427da'>
          {{comment.date+' '+comment.time}}
          <div class="timeline-item">
            <div class="timeline-item-user">
              <img class="timeline-item-image"  src="../../../assets/images/avatar.png">
              <span class="timeline-item-name">{{comment.username}}</span>
            </div>
            <span class="timeline-item-content">{{comment.content}}</span>
          </div>
        </el-timeline-item>
      </el-timeline>
        <!-- <i class="el-icon-time" style="color:blue"></i> -->
        <!-- <span nz-icon nzType="clock-circle-o" style="font-size: 16px;"></span> -->
    </div>
    <div class="module-footer">
      <button class="comment_button">留言</button>
      <el-pagination
      background
      layout="prev, pager, next"
      :total="10"
      class="pagination">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import comments from '@/assets/json/comments.json'
export default {
  data(){
    return{
      comments:comments
    }
  },
  methods: {
    show(){
      console.log('留言');
    }
  },
}
</script>

<style lang='scss' scope>
@import './comment.component.scss';
</style>