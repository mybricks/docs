const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, './../docs/组件库/PC通用组件库/下拉框/下拉框.md')

const read = () => {
  return fs.readFileSync(targetPath, 'utf-8')
}

const write = (markdown) => {
  return fs.writeFileSync(targetPath, markdown, 'utf-8')
}

function formatTtile (markdown) {
  return markdown.replace(/^\s*(#)/gm, '$1#')
}

write(formatTtile(read()));