/*
 * @Author: xs
 * @Date: 2023-05-09 13:34:16
 */
// or ESM/TypeScript import
// import Ajv from "ajv";
// Node.js require:
const Ajv = require("ajv");

const schema = {
  type: "object",
  properties: {
    foo: { type: "integer", format: "test" },
    bar: { type: "string" },
  },
  required: ["foo"],
  additionalProperties: false,
};

const data = {
  foo: 1,
  bar: "abc",
};

const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
ajv.addFormat("test", (data) => {
  console.log(">>>data", data);
  return data === "哈哈";
});

const validate = ajv.compile(schema);

const valid = validate(data);
if (!valid) console.log(validate.errors);
