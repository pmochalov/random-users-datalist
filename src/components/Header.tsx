import * as React from "react";
import { Layout } from "antd";

const { Header: H } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#4096ff",
};

const Header: React.FC = () => {
    return <H style={headerStyle}>Usders data list</H>;
};

export { Header };
