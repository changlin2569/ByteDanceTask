# ByteDanceTask

### 字节前端青训营大作业（仿掘金抽奖系统）

​	**vite + vue3  + ElementPlus 仿写掘金抽奖系统**

### v  1.0.0

- [x] 手工设置奖品池
- [x] 每个奖品的中奖概率
- [x] 起始矿石数和每次消耗矿石数
- [x] 给出中奖结果
- [x] 显示中奖品列表

#### 安装与使用

```
git clone git@github.com:changlin2569/ByteDanceTask.git

cd ./juejin_luck

npm install

npm run dev

```

#### 设置奖品池与中奖概率

**在src/utils/prizeList.js文件中**

##### 修改奖池

**修改上述文件中数组中的元素，注意不要修改id！！！**

##### 中奖概率修改

**修改上述文件数组中的对应的probability属性，支持0-100之间的数，代表其中奖的概率为百分之XX**

#### 每次抽奖矿石数

**在src/utils/prizeList.js文件中找到 id 为 8 的元素，修改其price属性值(代表每次抽奖所消耗的矿石数量)**

#### 起始矿石数

目前第一版其实矿石数是写死的（400），修改**src/components/LuckDraw/LuckDraw/.vue**文件中的count值

*后期会进行起始矿石数的改进*