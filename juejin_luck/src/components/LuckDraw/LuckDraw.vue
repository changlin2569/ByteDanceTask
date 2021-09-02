<template>
  <div>
    <p class="title">掘金幸运抽奖</p>
    <div class="box">
      <div class="left_box">
        <div class="left_header">
          <div class="count">
            当前矿石数：<span>{{ money }}</span>
          </div>
          <div :class="{ sign: true, signed: isSign }" @click="signHandle">
            {{ isSign ? "已签到" : "签到" }}
          </div>
        </div>
        <div class="panel">
          <Lotterypanel
            :money="money"
            @updateMoney="updateMoney"
            @getPrizeHandle="getPrizeHandle"
          ></Lotterypanel>
        </div>
      </div>
      <div class="right_box">
        <Prizes :list="wonPrizes"></Prizes>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import Lotterypanel from "./../Lotterypanel/Lotterypanel.vue";
import Prizes from "./../Prizes/Prizes.vue";
import useMoney from "./../../hooks/useMoney";

export default {
  setup() {
    const { money } = useMoney();
    const isSign = ref(false);
    // 签到
    const signHandle = function () {
      if (isSign.value) {
        return;
      }
      money.value += 200;
      isSign.value = true;
    };

    const updateMoney = function () {
      money.value -= 200;
    };

    // 抽中的奖品
    const wonPrizes = reactive([]);
    const getPrizeHandle = function (prize) {
      const [date] = new Date().toLocaleString().split(" ");
      wonPrizes.push({
        ...prize,
        date,
      });
    };

    return {
      money,
      isSign,
      signHandle,
      updateMoney,
      wonPrizes,
      getPrizeHandle,
    };
  },
  components: {
    Lotterypanel,
    Prizes,
  },
};
</script>

<style lang="less" scoped>
.title {
  font-size: 30px;
  color: #fadda0;
}

.box {
  display: flex;
  width: 882px;
  height: 524px;
  margin-top: 16px;
  justify-content: space-between;

  .left_box {
    width: 486px;
    height: 524px;

    .left_header {
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-size: 20px;
      line-height: 40px;
      color: #eee;

      .count {
        span {
          color: #fadda0;
        }
      }

      .sign {
        width: 80px;
        height: 40px;
        text-align: center;
        border-radius: 20px;
        background-color: #c38b10;
        cursor: pointer;
      }

      .signed {
        background-color: #5f7cd3;
      }
    }
    .panel {
      width: 486px;
      height: 396px;
      margin-top: 20px;
    }
  }

  .right_box {
    width: 364px;
    height: 524px;
  }
}
</style>
