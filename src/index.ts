const path = require('path');
const file = require('fs');
import type { Plugin } from 'vite'
import { transformMarkdown } from "./transform";

export default function markdownPlugin(): Plugin {
  const vueRE = /\.vue$/;
  const markdownRE = /\<g-markdown.*\/\>/g;
  const filePathRE = /(?<=file=("|')).*(?=('|"))/;
  
  return {
    name: 'vite:markdown',

    enforce: 'pre',

    transform(code, id, opt) {
      if (!vueRE.test(id) || !markdownRE.test(code)) return code;

      const mdList = code.match(markdownRE);
      let transformCode = code;
      mdList?.forEach(md => {
        const fileRelativePaths = md.match(filePathRE);
        if (!fileRelativePaths?.length) return;

        const fileRelativePath = fileRelativePaths![0];
        const filePath = path.resolve(path.dirname(id), fileRelativePath);
        const mdText = file.readFileSync(filePath, 'utf-8');
        transformCode = transformCode.replace(md, transformMarkdown(mdText));
      })
      return transformCode;
    }
  }
}

// overwrite for cjs require('...')() usage
module.exports = markdownPlugin
markdownPlugin['default'] = markdownPlugin
