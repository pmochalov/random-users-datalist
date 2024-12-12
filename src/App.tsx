import React from "react";
import { Layout, Table, Col, Row } from "antd";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useAppDispatch, useAppSelector } from "./hooks";
import { fetchUsers, resetUsersState } from "./slices/usersSlice";
import { RootState } from "./store";

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

const columns = [
    {
        title: "Имя",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Логин",
        dataIndex: "login",
        key: "login",
    },
    {
        title: "Возраст",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
    },
    {
        title: "Страна",
        dataIndex: "country",
        key: "country",
    },
    {
        title: "Город",
        dataIndex: "city",
        key: "city",
    },
];

const App: React.FC = () => {
    const dispatch = useAppDispatch();

    const {
        entities: users,
        loading,
        error,
    } = useAppSelector((state: RootState) => state.users);

    console.log(users);

    React.useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    React.useEffect(() => {
        return () => {
            dispatch(resetUsersState());
        };
    }, []);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    return (
        <Layout style={layoutStyle}>
            <Header />
            <Content style={contentStyle}>
                <Row>
                    <Col span={24}>
                        <Table
                            dataSource={users}
                            columns={columns}
                            pagination={{ pageSize: 25 }}
                        />
                    </Col>
                </Row>
            </Content>
            <Footer />
        </Layout>
    );
};

export { App };
