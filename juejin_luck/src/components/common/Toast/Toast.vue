<template>
  <div class="toast-bg">
    <div class="toast-content"></div>
  </div>
</template>

<script>
import { nextTick, ref } from "vue";
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.toast-bg {
  position: absolute;
  width: 2000px;
  height: 2000px;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);

  .toast-content {
    position: absolute;
    width: 400px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    z-index: 9999;
  }
}
</style>
