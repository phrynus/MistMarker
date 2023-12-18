<script setup>
import { provide } from 'vue';
import structure from './components/structure.vue'
import mainBg from './components/mainBg.vue'

// import {Ajax} from "./public/ajax.js";

const mistmarker = {
    mainBg: "https://o-web.s3.bitiful.net/mistmarker/background/wallhaven-2yoo1m.jpg?fm=webp",
    engine: [
        {
            id: "baidu",
            name: "百度",
            icon: "https://o-web.s3.bitiful.net/mistmarker/engine/baidu.png",
            url: "https://www.baidu.com/s?wd={data}"
        },
        {
            id: "google",
            name: "Google",
            icon: "https://o-web.s3.bitiful.net/mistmarker/engine/google.png",
            url: "https://www.google.com/search?q={data}"
        },
        {
            id: "github",
            name: "GitHub",
            icon: "https://o-web.s3.bitiful.net/mistmarker/engine/github.png",
            url: "https://github.com/search?q={data}"
        },
        {
            id: "codepen",
            name: "CodePen",
            icon: "https://o-web.s3.bitiful.net/mistmarker/engine/codepen.png",
            url: "https://codepen.io/search/pens?q={data}"
        },
        {
            id: "gitee",
            name: "Gitee",
            icon: "https://o-web.s3.bitiful.net/mistmarker/engine/gitee.png",
            url: "https://search.gitee.com/?q={data}"
        },
        {
            id: "juejin",
            name: "掘金",
            icon: "https://o-web.s3.bitiful.net/mistmarker/engine/juejin.png",
            url: "https://juejin.cn/search?query={data}"
        }
    ],
    choiceEngine: "baidu",
}
provide('mistmarker', mistmarker);
</script>

<template>
    <div>
        <structure />
        <mainBg />
    </div>
</template>

<style lang="scss" scoped></style>
