const yaml = require("js-yaml");
const fs = require("fs");

const path = "_config.yml";
const encoding = "utf8";
const version = require("../package.json").version;

const { CIRCLE_TAG } = process.env;

// Get document, or throw exception on error
try {
  let doc = yaml.safeLoad(fs.readFileSync(path, encoding));
  doc.current_version = CIRCLE_TAG || version;
  fs.writeFileSync(path, yaml.safeDump(doc), encoding);
} catch (e) {
  console.error(e);
}
