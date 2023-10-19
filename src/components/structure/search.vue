<script setup>
import { computed, inject, ref } from 'vue'
const mistmarker = inject('mistmarker')
let engine = mistmarker.engine
let choiceEngine = mistmarker.choiceEngine

let engineToday = computed({
    get: () => {
        let e = engine.find(engine => engine.id === choiceEngine)
        if (e) {
            return e
        } else {
            return {
                id: "baidu",
                name: "百度",
                icon: "https://mistmarker.s3.bitiful.net/engine/baidu.png",
                url: "https://www.baidu.com/s?wd={data}"
            }
        }
    },
    set: (val) => {
        // lStorage.set("mainBg", val)
    }
})
let searchText = ref("")
</script>

<template>
    <div>
        <div class="searchBox">
            <div class="engine">
                <i class="iconfont icon-arrow-down-filling"></i>
                <div class="img">
                    <img :src="engineToday.icon" alt="">
                </div>
            </div>
            <div class="search">
                <input type="text" placeholder="输入搜索内容" v-model="searchText">
                <div v-show="searchText != ''" @click="searchText = ''" class="searchIcon">
                    <i class="iconfont icon-close-bold"></i>
                </div>
                <div v-show="searchText == ''" class="searchIcon">
                    <i class="iconfont icon-search"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.searchBox {
    display: flex;
    background-color: rgba(238, 238, 238, 0.7);
    backdrop-filter: blur(12px);
    height: 46px;
    max-width: 600px;
    margin: 3vh auto 20px;
    border-radius: 23px;
    box-shadow: 0 0 10px 3px #0000001a;
    font-size: 14px;
    transition: .3s;

    &:hover {
        background-color: rgba(238, 238, 238, 0.85);
    }

    .engine {
        height: 100%;
        position: relative;
        width: 46px;
        margin-right: 2px;

        >.iconfont {
            position: absolute;
            right: -1px;
            top: 52%;
            transform: translateY(-50%) scale(0.8);
            display: block;
            font-size: 12px;
            opacity: 0.4;
            color: #000;
        }

        .img {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 50px;
            max-width: 50px;
            transition: .2s;
            position: relative;

            img {
                width: 20px;
                height: 20px;
            }
        }
    }

    .search {
        flex: 1;
        display: flex;
        align-items: center;
        padding-left: 8px;

        input {
            line-height: 1.25;
            background-color: transparent;
            outline: none;
            border: none;
            font-family: inherit;
            -webkit-user-select: auto;
            flex: 1;
            height: 22px;
            font-size: 14px;
        }

        .searchIcon {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 50px;
            max-width: 50px;
            transition: .2s;
            position: relative;
            cursor:pointer;

            i {
                font-size: 20px;
            }
        }
    }
}
</style>