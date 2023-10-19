<script setup>
import { computed, inject } from 'vue'
import { Ajax } from "../public/ajax.js";
import { LStorage } from '../public/LStorage.js'
const mistmarker = inject('mistmarker')
const ajax = new Ajax()
const lStorage = new LStorage()

let mainBg = computed({
    get: () => {
        let bg = lStorage.get("mainBg")
        if (bg != null) {
            return `background-image: url(${bg})`
        } else {
            getAjaxMainBg(mistmarker.mainBg)
            return `background-image: url(${mistmarker.mainBg})`
        }
    },
    set: (val) => {
        lStorage.set("mainBg", val)
    }
})
function getAjaxMainBg(imgUrl) {
    // Method logic here
    ajax.image(imgUrl, {
        timeout: 10 * 1000,
    })
        .then((response) => {
            mainBg.value = response
        })
        .catch((error) => {
            console.log(error);
        });
}


</script>

<template>
    <div class="main-bg" :style="mainBg"></div>
</template>

<style scoped lang="scss">
.main-bg {
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