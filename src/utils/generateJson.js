export const generateJson = (fields) => {
  const result = {};

  fields.forEach((field) => {
    if (field.type === "String") {
      result[field.key] = "STRING";
    } 
    else if (field.type === "Number") {
      result[field.key] = "number";
    }else if (field.type === "Float") {
      result[field.key] = 0;
    } else if (field.type === "Nested") {
      result[field.key] = generateJson(field.children || []);
    }
  });

  return result;
};
