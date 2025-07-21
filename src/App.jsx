import React, { useState } from "react";
import SchemaField from "./components/SchemaField";
import { generateJson } from "./utils/generateJson";
import { Layout, Row, Col, Typography, Divider } from "antd";

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const [fields, setFields] = useState([]);

  return (
    <Layout style={{ minHeight: "100vh", padding: "20px" }}>
      <Header style={{ color: "white", fontSize: "20px" }}>
        JSON Schema Builder
      </Header>
      <Content style={{ padding: "20px" }}>
        <Row gutter={32}>
          <Col xs={24} md={12}>
            <Title level={4}>Schema Builder</Title>
            <SchemaField fields={fields} setFields={setFields} />
          </Col>
          <Col xs={24} md={12}>
            <Title level={4}>Live JSON Output</Title>
            <pre
              style={{
                backgroundColor: "#f0f0f0",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              {JSON.stringify(generateJson(fields), null, 2)}
            </pre>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
