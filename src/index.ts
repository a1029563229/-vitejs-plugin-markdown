const path = require('path');
const file = require('fs');
import type { Plugin } from 'vite'
import { transformMarkdown } from "./transform";
import qs from "qs";
import { snehStyle } from "./assets/sneh";
import { addStyle } from './style';

export default function markdownPlugin(): Plugin {
  const vueRE = /\.vue$/;
  const markdownRE = /\<g-markdown.*\/\>/g;
  const filePathRE = /(?<=file=("|')).*(?=('|"))/;
  let imported = false;
  
  return {
    name: 'vite:markdown',

    enforce: 'pre',

    load(id: string) {
      const queryStr = id.split('?')[1];
      if (!queryStr) {
        return;
      }

      const params = qs.parse(queryStr);
      if (!params.mdStyle) return;

      console.group(id);
      // return `
      //   export const msg = "from virtual module"
      // `;
      // 思路 1：引入加载 css 的 js
      // 思路 2：使用 configureServer 添加文件服务器，将文件放到文件服务器后，在 transform 直接加载
    },

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

      transformCode = `
        <script>
          import "${id}?mdStyle=sneh";
        </script>
        ${transformCode}
      `
      return transformCode;
    }
  }
}

// overwrite for cjs require('...')() usage
module.exports = markdownPlugin
markdownPlugin['default'] = markdownPlugin
