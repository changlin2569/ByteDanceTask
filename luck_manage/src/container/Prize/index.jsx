import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Space,
  Modal,
  Form,
  Input,
  InputNumber,
  Select,
  message,
} from "antd";
import axios from "axios";
import "./index.css";

const { Column } = Table;
const selectBefore = (
  <Select defaultValue="http://" className="select-before">
    <Select.Option value="http://">http://</Select.Option>
    <Select.Option value="https://">https://</Select.Option>
  </Select>
);

function Prize() {
  const [prizeList, setPrizeList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [prizeInfo, setPrizeInfo] = useState({});
  const [form] = Form.useForm();
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [probability, setProbability] = useState(0);

  useEffect(() => {
    getPrizeList();
  }, []);

  const getPrizeList = async () => {
    const {
      data: { data },
    } = await axios({
      url: "http://127.0.0.1:7001/prizeList",
    });
    setPrizeList(data);
  };

  const editPrize = (record) => {
    setIsModalVisible(true);
    setPrizeInfo(record);
  };

  form.submit = async () => {
    const {
      data: { status },
    } = await axios({
      method: "post",
      url: "http://127.0.0.1:7001/editPrizeList",
      data: {
        oldName: prizeInfo.name,
        newName: name,
        imgSrc: img,
        probability,
      },
    });
    if (status !== 200) {
      message.error("修改失败");
      return;
    }
    message.success("修改成功");
    setName("");
    setImg("");
    setProbability(0);
    getPrizeList();
  };

  return (
    <>
      <Table
        dataSource={prizeList}
        rowKey="id"
        onRow={(record) => {
          return {
            onClick: () => editPrize(record),
          };
        }}
      >
        <Column
          title="奖品图"
          dataIndex="img"
          key="img"
          render={(val) => <img src={val} alt="" />}
        />
        <Column title="奖品名" dataIndex="name" key="name" />
        <Column title="中奖概率" dataIndex="probability" key="probability" />
        <Column
          title="行为"
          key="id"
          render={() => (
            <Space size="middle">
              <Button type="primary" size="small">
                修改
              </Button>
            </Space>
          )}
        />
      </Table>
      <Modal
        getContainer={false}
        title="Basic Modal"
        visible={isModalVisible}
        onOk={() => {
          form.submit();
          setIsModalVisible(false);
        }}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="奖品图网址"
            name="img"
            rules={[
              {
                required: true,
                message: "请输入奖品图网址!",
              },
            ]}
          >
            <Input
              addonBefore={selectBefore}
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="奖品名"
            name="name"
            rules={[
              {
                required: true,
                message: "请输入奖品名!",
              },
            ]}
          >
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="中奖概率"
            name="probability"
            rules={[
              {
                required: true,
                message: "请输入中奖概率!",
              },
            ]}
          >
            <InputNumber
              min={0}
              max={100}
              value={probability}
              onChange={(val) => setProbability(val)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default Prize;
