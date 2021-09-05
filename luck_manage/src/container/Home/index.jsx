import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { Layout, Menu } from "antd";
import { RadarChartOutlined, StrikethroughOutlined } from "@ant-design/icons";
import routers from "./../../router";
import "./index.css";

const { Header, Content, Footer, Sider } = Layout;
const Home = () => {
  const history = useHistory();

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
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[window.sessionStorage.getItem("key")]}
          onClick={({ key }) => {
            history.push(key);
            window.sessionStorage.setItem("key", key);
          }}
        >
          <Menu.Item key="0">掘金抽奖后台管理系统</Menu.Item>
          <Menu.Item key="/prize" icon={<RadarChartOutlined />}>
            奖池
          </Menu.Item>
          <Menu.Item key="/money" icon={<StrikethroughOutlined />}>
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
          <div className="site-layout-background">
            <Switch>
              {routers.map((item) => (
                <Route
                  exact
                  key={item.path}
                  path={item.path}
                  component={item.component}
                ></Route>
              ))}
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>©2021 Created by cl</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
