import {createApp} from 'vue';
import './style.scss';
import App from './App.vue';
const app = createApp(App)
app.config.globalProperties.mistmarker={
    mainBg:'https://mistmarker.s3.bitiful.net/background/wallhaven-yxgmll.webp'
}
app.mount('#app');





