<script setup>
import Search from './structure/search.vue'
import Calendar from './structure/calendar.vue'
</script>

<template>
  <div>
    <Calendar class="calendar_plug"/>
    <Search class="search_plug"/>
  </div>
</template>

<style scoped lang="scss">
.calendar_plug {
    
  padding-top: var(--calendar-height);
  
}
.search_plug{
    padding:  0 24px;
    box-sizing: content-box;
}
</style>