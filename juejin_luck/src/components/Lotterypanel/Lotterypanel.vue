<template>
  <div class="container">
    <div class="item-box">
      <div
        :class="{
          item,
          btn: item.id === 8 || count === item.id,
        }"
        v-for="item in prizeList"
        :key="item.id"
      >
        <div class="img" v-if="item.id !== 8">
          <img :src="item.img" alt="" />
        </div>
        <div class="text" @click="luckDrawHandle" v-else>抽奖</div>
        <span>{{ item.price ? `${item.price}/次` : item.name }}</span>
      </div>
    </div>
    <!-- <Toast></Toast> -->
    <el-dialog
      title="恭喜您中将了！"
      v-model="prizeDialogVisible"
      width="30%"
      @close="count = -1"
    >
      <div class="own-prize">
        <!-- <div class="img-box">
          <img :src="ownPrize.img" alt="" />
        </div> -->
        <span class="prize-name">{{ ownPrizeName }}</span>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="prizeDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="prizeDialogVisible = false"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, toRefs } from "vue";
// import { prizeList } from "../../utils/prizeList";
// import Toast from "./../common/Toast/Toast.vue";
import { ElDialog, ElButton, ElMessage } from "element-plus";
import usePrizeList from "./../../hooks/usePrizeList";

export default {
  props: {
    money: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const count = ref(-1);
    const { money: curMoney } = toRefs(props);
    const ownPrizeName = ref(""); // 获得奖品的名字
    const prizeDialogVisible = ref(false);
    const { prizeList } = usePrizeList();

    // 抽中的奖品
    const getPrize = function (id) {
      const [prize] = prizeList.filter((item) => item.id == id);
      return prize;
    };

    // 中奖后
    const winPrize = function (val) {
      const ownPrize = getPrize(val);
      emit("getPrizeHandle", ownPrize);
      ownPrizeName.value = ownPrize.name;
      prizeDialogVisible.value = !prizeDialogVisible.value;
    };
    // 触发抽奖
    const luckDrawHandle = function () {
      if (curMoney.value < 200) {
        ElMessage({
          showClose: true,
          message: "矿石不足，签到领取200矿石哦~",
          type: "error",
        });
        return;
      }
      emit("updateMoney");
      const random = Math.random() * 100;
      let i = 1;
      let timer;
      function _handle() {
        timer = setTimeout(() => {
          count.value += 1;
          if (count.value > 8) {
            count.value = 0;
          }
          i++;
          if (i > 25 && prizeList[count.value].probability >= random) {
            clearTimeout(timer);
            winPrize(count.value);
          } else {
            _handle();
          }
        }, i * 10);
      }
      _handle();
    };
    return {
      count,
      prizeList,
      luckDrawHandle,
      prizeDialogVisible,
      ownPrizeName,
    };
  },
  components: {
    // Toast,
    ElDialog,
    ElButton,
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: #fada90;

  .item-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 94%;
    height: 94%;
    background-color: #e37815;

    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 30%;
      height: 30%;
      border-radius: 20px;
      background-color: #fff;

      .img {
        display: flex;
        width: 72px;
        height: 50px;
        justify-content: center;
        align-items: center;

        img {
          width: 40px;
          height: 40px;
        }
      }

      .text {
        width: 100%;
        text-align: center;
        font-size: 28px;
      }
    }

    .btn {
      background-color: #ffe5a4;
      box-shadow: inset 0 0 16px #ffa800;
      cursor: pointer;
    }
  }
}
</style>
