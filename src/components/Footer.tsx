import React from "react";
import { Layout } from "antd";

const { Footer: F } = Layout;

const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#eee",
};

const Footer: React.FC = () => (
    <F style={footerStyle}>
        <a href='https://github.com/pmochalov'>https://github.com/pmochalov</a>
    </F>
);

export { Footer };
