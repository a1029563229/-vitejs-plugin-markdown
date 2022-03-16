const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

export const transformMarkdown = (mdText: string): string => {
  return `
    <section class='article-content'>
      ${md.render(mdText)}
    </section>
  `;
}