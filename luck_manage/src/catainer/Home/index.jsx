import React from "react";
import { Layout, Menu } from "antd";
import { RadarChartOutlined, StrikethroughOutlined } from "@ant-design/icons";
import "./index.css";

const { Header, Content, Footer, Sider } = Layout;

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="0">掘金抽奖后台管理系统</Menu.Item>
            <Menu.Item key="1" icon={<RadarChartOutlined />}>
              奖池
            </Menu.Item>
            <Menu.Item key="2" icon={<StrikethroughOutlined />}>
              矿石
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              content
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>©2021 Created by cl</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
