<script setup>
import Search from './structure/search.vue'
import Calendar from './structure/calendar.vue'


</script>

<template>
  <div>
    <Calendar class="calendar_plug"/>
    <search class="search_plug"/>
  </div>
</template>

<style scoped lang="scss">
.calendar_plug {
  --height: 3vh;
  padding-top: var(--height);
  @media screen and (min-height: 768px) {
    --height: 6vh;
  }
  @media screen and (min-height: 1280px) {
    --height: 11vh;
  }
  @media screen and (min-height: 1560px) {
    --height: 15vh;
  }
  @media screen and (min-height: 2000px) {
    --height: 18vh;
  }
}
</style>