import React from "react";
import { Input, Select, Button, Space, Card } from "antd";
const { Option } = Select;

const SchemaField = ({ fields, setFields, path = [] }) => {
  const updateField = (index, key, value) => {
    const updated = [...fields];
    updated[index][key] = value;
    setFields(updated);
  };

  const addField = () => {
    setFields([...fields, { key: "", type: "String" }]);
  };

  const deleteField = (index) => {
    const updated = [...fields];
    updated.splice(index, 1);
    setFields(updated);
  };

  const updateNested = (index, nestedFields) => {
    const updated = [...fields];
    updated[index].children = nestedFields;
    setFields(updated);
  };

  return (
    <div>
      {fields.map((field, index) => (
        <Card size="small" key={index} style={{ marginBottom: "10px" }}>
          <Space direction="horizontal" style={{ display: "flex" }}>
            <Input
              placeholder="Field Name"
              value={field.key}
              onChange={(e) => updateField(index, "key", e.target.value)}
            />
            <Select
              value={field.type}
              onChange={(value) => updateField(index, "type", value)}
              style={{ width: 120 }}
            >
              <Option value="String">String</Option>
              <Option value="Number">Number</Option>
              <Option value="Nested">Nested</Option>
            </Select>
            <Button danger onClick={() => deleteField(index)}>
              Delete
            </Button>
          </Space>

          {field.type === "Nested" && (
            <div style={{ marginLeft: "20px", marginTop: "10px" }}>
              <SchemaField
                fields={field.children || []}
                setFields={(nested) => updateNested(index, nested)}
              />
            </div>
          )}
        </Card>
      ))}

      <Button type="dashed" onClick={addField} style={{ marginTop: "10px" }}>
        Add Field
      </Button>
    </div>
  );
};

export default SchemaField;
