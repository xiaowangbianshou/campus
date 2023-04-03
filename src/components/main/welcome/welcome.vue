<template>
  <div class="module-container">
    <div class="module-body">
      <Map></Map>
    </div>
    <div class="module-right">
      <Meri></Meri>
    </div>
</div>
</template>

<script>
import Map from '@/components/main/welcome/map.vue'
import Meri from '@/components/main/welcome/Meritorious.vue'
export default {
  components:{
    Map,
    Meri
  }
}
</script>

<style lang='scss' scope>
@import './welcome.component.scss';
</style>