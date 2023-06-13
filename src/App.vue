<script setup>
import structure  from './components/structure.vue'
// 步骤1: 取localStorage中的version
// const localVersion = localStorage.getItem("version");
// 步骤2: 发送GET请求获取version数据
// fetch("https://mistmarker.s3.bitiful.net/version")
//     .then((response) => response.text())
//     .then((data) => {
//         const serverVersion = parseInt(data);
//         // 步骤3: 判断本地version和服务器version是否相等
//         if (localVersion !== serverVersion.toString()) {
//             // 步骤4: 发送GET请求获取mistmarker数据
//             fetch("https://mistmarker.s3.bitiful.net/mistmarker.lz")
//                 .then((response) => response.text())
//                 .then((data) => {
//                     // 在这里可以处理获取到的mistmarker数据
//                     let mistmarkerData = JSON.parse(LZString.decompressEncoded(data));
//                     console.log("获取到的mistmarker:", mistmarkerData);
//                     // 更新本地mistmarker数据
//                     localStorage.setItem("mistmarkerJson", JSON.stringify(mistmarkerData));
//                     // 更新本地engine数据
//                     localStorage.setItem("engine", JSON.stringify(mistmarkerData.engine));
//                     // 更新本地category数据
//                     localStorage.setItem("category", JSON.stringify(mistmarkerData.category));
//                     // 更新本地version
//                     localStorage.setItem("version", JSON.stringify(mistmarkerData.version));
//                 })
//                 .catch((error) => {
//                     console.error("获取mistmarker数据时出错:", error);
//                 });
//         } else {
//             console.log("本地version与服务器version相等，无需更新");
//         }
//     })
//     .catch((error) => {
//         console.error("获取version数据时出错:", error);
//     });
</script>

<template>
<div>
  <structure></structure>
</div>
</template>

<style lang="scss" scoped>

</style>
