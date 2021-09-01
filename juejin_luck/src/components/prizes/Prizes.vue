<template>
  <div class="list-box">
    <div class="list-header">
      <span>我获得的奖品</span>
    </div>
    <div class="prizes-list">
      <div class="content">
        <p class="no-prize" v-if="!list.length">还没有抽到奖品哦~</p>
        <div class="item" v-for="item in list" :key="item.id">
          <div class="name">{{ item.name }}</div>
          <div class="time">{{ item.date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.list-box {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: #6c91f0;

  .list-header {
    width: 100%;
    height: 10%;
    text-align: center;
    line-height: 300%;
    font-size: 20px;
    color: #eee;
  }

  .prizes-list {
    width: 90%;
    height: 80%;
    margin: 0 auto;
    padding: 30px;
    border-radius: 15px;
    box-sizing: border-box;

    .content {
      width: 100%;
      height: 100%;

      .no-prize {
        text-align: center;
        color: #eee;
      }

      .item {
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-size: 18px;
        margin-bottom: 5px;
        color: #eee;
      }
    }
  }
}
</style>
