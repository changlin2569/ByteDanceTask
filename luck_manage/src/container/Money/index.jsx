import React, { useState, useEffect } from "react";
import { Card, message, Button } from "antd";
import axios from "axios";
import "./index.css";

function Money() {
  const [originMoney, setOriginMoney] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    getMoneyPrice();
  }, []);

  const getMoneyPrice = async () => {
    const {
      data: { status, msg, data },
    } = await axios({
      url: "http://127.0.0.1:7001/money/getMoney",
    });
    // console.log(data);
    if (status !== 200) {
      message.error(msg);
      return;
    }
    setOriginMoney(data[0].originmoney);
    setPrice(data[0].price);
  };

  const editPrice = async () => {
    const newPrice = prompt("请输入新的单价", price);
    if (!newPrice || newPrice <= 0) {
      return;
    }
    const {
      data: { status, msg },
    } = await axios({
      method: "post",
      url: "http://127.0.0.1:7001/editPrice",
      data: {
        oldPrice: price,
        price: +newPrice,
      },
    });
    if (status !== 200) {
      message.error(msg);
      return;
    }
    message.success(msg);
    getMoneyPrice();
  };

  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title="初始矿石数"
        bordered={false}
        style={{ width: 300, marginRight: 20 }}
      >
        <p>{originMoney}</p>
        <Button
          type="primary"
          onClick={() => alert("这个接口忘记写了/(ㄒoㄒ)/~~")}
        >
          修改
        </Button>
      </Card>
      <Card title="单价" bordered={false} style={{ width: 300 }}>
        <p>{price}</p>
        <Button type="primary" onClick={editPrice}>
          修改
        </Button>
      </Card>
    </div>
  );
}

export default Money;
