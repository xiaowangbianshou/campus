<template>
  <div class="wall">
      <div class="wall-title">
        <img class="wall-badge" src="../../../assets/images/map/badge.png" /> 
        <div class="wall-desc">勋章墙</div>
      </div>
      <div class="wall-archive">
        <div v-for="rule in rules" :key="rule.id" class="wall-archive-item" :class="getClass(rule)">
          
          <img class="wall-archive-item-image" src="../../../assets/images/map/badge2.png" /> 
          <div class="wall-archive-item-text">{{rule.name}}</div>
        </div>
      </div>
    </div>
</template>

<script>
import rules from '@/assets/json/rules.json'
export default {
  data(){
    return{
      rules:rules
    }
  },
  methods:{
    getClass:function(item){
      if(item.point || item.count){
        return 'wall-archive-item-'+item.type
      }else{
        return 'wall-archive-item-gray'
      }
    }
  }
}
</script>

<style lang='scss' scope>
@import './welcome.component.scss';
</style>