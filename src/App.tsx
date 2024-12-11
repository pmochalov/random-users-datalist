import React from "react";
import { Layout, Table, Col, Row } from "antd";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const { Content } = Layout;

const layoutStyle = {
    overflow: "hidden",
};

const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    margin: "0 auto",
    color: "#111",
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: "1200px",
};

const dataSource = [
    {
        key: "1",
        name: "Mike",
        age: 32,
        address: "10 Downing Street",
    },
    {
        key: "2",
        name: "John",
        age: 42,
        address: "10 Downing Street",
    },
];

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
    },
];

const App: React.FC = () => (
    <Layout style={layoutStyle}>
        <Header />
        <Content style={contentStyle}>
            <Row>
                <Col span={24}>
                    <Table dataSource={dataSource} columns={columns} />
                </Col>
            </Row>
        </Content>
        <Footer />
    </Layout>
);

export { App };
