<template>
<div class="module-container">
  <div class="module-body">
    <!-- <map-control (mapInit)="mapInit($event)"></map-control> -->
    <Map></Map>
  </div>
  <div class="module-right">
      <Pointdetail></Pointdetail>
  </div>
</div>
</template>

<script>
import Map from '@/components/main/point/map.vue'
import PointDetail from './pointdetail.vue' 
import Pointdetail from './pointdetail.vue'
export default {
  name:'Point',
  components:{
    Map,
    Pointdetail
  },
  data(){
    return{
      fid:null
    }
  },
}
</script>

<style lang='scss' scope>
@import "./point.component.scss"
</style>