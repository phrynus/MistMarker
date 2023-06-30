<script>
import structure  from './components/structure.vue'
import {Ajax} from "./public/ajax.js";
export default {
  name: 'App',
  data() {
    return {
      // Your data properties here
      ajax : new Ajax(),
      mistmarker:{
        mainBg:'https://mistmarker.s3.bitiful.net/background/wallhaven-yxgmll.webp'
      }
    };
  },
  computed:{
    versionChange(){
      return false
    },
    version(){
      return '110'
    },
    mainBg:{
      get() {
        if(LStorage.get("mainBg")){
          return LStorage.get("mainBg")
        }else {
          this.getAjaxMainBg(this.mistmarker.mainBg)
          return `background-image: url(${this.mistmarker.mainBg})`
        }
      },
      set(v) {
        LStorage.set("mainBg",v)
      }
    },
    engine(){
      return undefined
    },
    category(){
      return undefined
    }
  },
  components:{
    structure
  },
  methods: {
    // Your methods here

    getAjaxMainBg(imgUrl) {
      // Method logic here
      this.ajax.image(imgUrl, {
        timeout: 10 * 1000,
        onProgress: ({ loaded, total }) => {
          // console.log(loaded, total, `${((loaded / total) * 100).toFixed(2)}%`);
        },
      })
          .then((response) => {
            this.mainBg= `background-image: url(${response})`
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
  created() {
    // 实例已经创建完成之后被调用
  },
  mounted() {
    // 实例已经挂载完成之后被调用
  },
  beforeUpdate() {
    // 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前
  },
  updated() {
    // 虚拟 DOM 重新渲染和打补丁之后被调用
  },
  beforeUnmount() {
    // 实例销毁之前调用。在这一步，实例仍然完全可用
  },
  unmounted() {
    // 实例销毁后调用。此时，所有的事件监听器和子组件也都被移除
  },
};





</script>

<template>
<div>
  <structure></structure>
  <div class="main-bg" :style="mainBg"></div>
</div>
</template>

<style lang="scss" scoped>


  .main-bg{
    //background-image: url(var(--data-mainBg));
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    z-index: -1;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
  }



</style>
