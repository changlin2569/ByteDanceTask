<template>
  <div class="main">
    <div class="bgc_wrapper">
      <img
        src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/background.f2441ca.png"
        alt=""
      />
    </div>
    <div class="title_wrapper">
      <img
        src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/title.b704296.png"
        alt=""
      />
    </div>
    <div class="luck_draw">
      <LuckDraw></LuckDraw>
    </div>
  </div>
</template>

<script>
import LuckDraw from "../LuckDraw/LuckDraw.vue";
export default {
  setup() {
    return {};
  },
  components: {
    LuckDraw,
  },
};
</script>

<style lang="less" scoped>
.main {
  position: relative;
  max-width: 946px;
  height: 100%;
  margin: 0 auto;
  background-color: #1550ed;

  .bgc_wrapper {
    width: 100%;
    height: 100%;
  }

  .title_wrapper {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 20%;
    top: 82px;

    img {
      width: 500px;
      height: 50%;
    }
  }

  .luck_draw {
    position: absolute;
    width: 882px;
    height: 568px;
    bottom: 0;
    padding: 40px 32px 72px;
  }
}
</style>
