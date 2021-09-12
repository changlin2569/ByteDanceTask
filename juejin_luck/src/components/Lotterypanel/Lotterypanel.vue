<template>
  <div class="container">
    <div class="item-box">
      <div
        :class="{
          item: true,
          selected: item === 8 || count === item,
        }"
        v-for="item in order"
        :key="item"
      >
        <div class="img" v-if="item !== 8">
          <img :src="prizeList[item]?.img" alt="" />
        </div>
        <div class="text" @click="luckDrawHandle" v-else>抽奖</div>
        <span>{{
          prizeList[item]?.price
            ? `${prizeList[item].price}/次`
            : prizeList[item]?.name
        }}</span>
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
import { ref, toRefs, reactive, onMounted } from "vue";
// import { prizeList } from "../../utils/prizeList";
// import Toast from "./../common/Toast/Toast.vue";
import { ElDialog, ElButton, ElMessage } from "element-plus";
// import usePrizeList from "./../../hooks/usePrizeList";
const order = [0, 1, 2, 7, 8, 3, 6, 5, 4];

export default {
  props: {
    money: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const { money: curMoney, price } = toRefs(props);
    const prizeDialogVisible = ref(false);
    const prizeList = reactive([]);
    // 获取礼物列表
    const getPrizeList = async function () {
      const respose = await fetch("http://127.0.0.1:7001/prizeList");
      const { data } = await respose.json();
      prizeList.push(...data, {
        id: 8,
        price,
      });
    };

    // 抽中的奖品
    const getResult = async function () {
      const response = await fetch("http://127.0.0.1:7001/getLuckResult");
      const { data } = await response.json();
      return data;
    };

    // 中奖后
    const ownPrizeName = ref(""); // 获得奖品的名字
    const winPrize = function (val) {
      emit("getPrizeHandle", val);
      ownPrizeName.value = val.name;
      prizeDialogVisible.value = !prizeDialogVisible.value;
    };

    // 触发抽奖
    const count = ref(-1);
    const timer = ref(null);
    const luckDrawHandle = async function () {
      if (curMoney.value < 200) {
        ElMessage({
          showClose: true,
          message: "矿石不足，签到领取200矿石哦~",
          type: "error",
        });
        return;
      } else if (timer.value) {
        return;
      }
      emit("updateMoney");
      const result = await getResult();
      let i = 1;
      function _handle() {
        timer.value = setTimeout(() => {
          if (count.value === 7) {
            count.value = -1;
          }
          count.value += 1;
          i++;
          if (i > 25) {
            clearTimeout(timer.value);
            timer.value = null;
            winPrize(result);
          } else {
            _handle();
          }
        }, i * 10);
      }
      _handle();
    };

    onMounted(() => {
      getPrizeList();
    });
    return {
      count,
      prizeList,
      luckDrawHandle,
      prizeDialogVisible,
      ownPrizeName,
      order,
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
      grid-area: five;
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

    .selected {
      background-color: #ffe5a4;
      box-shadow: inset 0 0 16px #ffa800;
      cursor: pointer;
    }
  }
}
</style>
