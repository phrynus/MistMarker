<script setup>
import structure  from './components/structure.vue'
import mainBg from './components/mainBg.vue'

// import {Ajax} from "./public/ajax.js";

const mistmarker={
  mainBg:'https://mistmarker.s3.bitiful.net/background/wallhaven-yxgmll.webp',
  versionChange:false,
  version:110
}

</script>

<template>
<div>
  <structure></structure>
  <mainBg :M_mainBg="mistmarker.mainBg"></mainBg>
</div>
</template>

<style lang="scss" scoped>

</style>
