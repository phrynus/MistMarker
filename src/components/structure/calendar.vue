<script setup>
import {ref, onBeforeMount, onUnmounted} from 'vue';
import LunarCalendar from 'lunar-calendar';

const currentDate = ref(new Date());
const formattedTime = ref([]);
const formattedDate = ref('');
const lunarDate = LunarCalendar.solarToLunar(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, currentDate.value.getDate());

// 格式化时间为 [小时, 分钟]
const formatTime = (time) => {
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  return [hours, minutes];
};

// 格式化日期
const formatCalendar = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekDay = ['日', '一', '二', '三', '四', '五', '六'][date.getDay()];
  return `${month}月${day}日`;
};

// 每两秒更新一次时间
let timer;

onBeforeMount(() => {
  formattedTime.value = formatTime(new Date());
  formattedDate.value = formatCalendar(currentDate.value);
  timer = setInterval(() => {
    currentDate.value = new Date();
    formattedTime.value = formatTime(currentDate.value);
  }, 2000);
});

onUnmounted(() => {
  clearInterval(timer);
  timer = null;
});

</script>

<template>
  <div>
    <div className="dateBox">
      <div className="time">
        <span>{{ formattedTime[0] }}</span>
        <span>:</span>
        <span>{{ formattedTime[1] }}</span>
      </div>
      <div className="date">
        <span>{{ formattedDate }}</span>
        <span>星期{{ ['日', '一', '二', '三', '四', '五', '六'][currentDate.getDay()] }}</span>
        <span>{{ lunarDate.lunarMonthName + lunarDate.lunarDayName }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dateBox {
  display: flex;
  flex-direction: column;
  align-items: center;

  .time {
    font-size: var(--time-size);
    line-height: var(--time-size);
    font-weight: var(--time-fontWeight);
    transition: font 0.2s;

    span {
      vertical-align: unset;
      color: #fff;
    }
  }

  .date {
    font-size: 14px;
    line-height: 26px;

    span {
      margin: 0 2px;
      color: #fff;
    }
  }
}
</style>
