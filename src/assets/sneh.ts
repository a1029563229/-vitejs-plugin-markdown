export const snehStyle = `
:root {
  --side-bar-bg-color: var(--base2);    
  --text-color: #44425e;
  --bg-color: #fafaff;
  --green: #00b253;
  --orange: #f49b00;
  --red: #ff3399;
  --yellow: #FFAA00;
  --magenta: #CC66FF;
  --violet: #6c71c4;
  --blue: #01a9e1;
  --cyan: #00CED1;
  --base2: #f5f5ff;
  --base1: #93a1a1;
  --base3: #f2f2f7;
  --bblue: rgba(1, 169, 224, 0.08);
  --bgreen: rgba(0, 179, 83, 0.08);
  --bred: rgba(255, 51, 153, 0.03);
  --base02: #3d3d56;
  --base03: #2c2c3e;
  --item-hover-bg-color: var(--base2);
  --window-border: 1px solid #93a1a1;
  --active-file-bg-color: var(--red);
  --active-file-text-color:  var(--bg-color);
  --item-hover-text-color: #93a1a1;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@600');
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Merriweather&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');

html {
  font-size: 18px;
}

body {
  font-family: "PT Sans", "-apple-system", "Liberation Mono", monospace;
  /*font-family: Geneva, Tahoma, sans-serif;*/
  color: var(--text-color);
  line-height: 2;
  background-color: var(--bg-color);
  -webkit-font-smoothing: subpixel-antialiased;
}

#write {
  max-width: 860px;
  margin: 0 auto;
  padding: 20px 30px 40px 30px;
  padding-top: 20px;
  padding-bottom: 100px;
}

#write > ul:first-child,
#write > ol:first-child {
  margin-top: 30px;
}

body > *:first-child {
  margin-top: 0 !important;
}

body > *:last-child {
  margin-bottom: 0 !important;
}

a {
  color: var(--blue);
}
a:hover {
  color: var(--cyan);
}

em {
color: var(--orange);
}

strong {
color: var(--magenta);
}

.md-toc-inner {
  color: #93a1a1!important;
}

mark {
background: var(--text-color);
border-radius: 5px;
color: var(--bg-color);
padding: 1px 4px;
}

h1,
h2,
h3,
[mdlike='h1'],
[mdlike='h2'],
[mdlike='h3'] {
color: var(--red);
font-weight: bold;
font-family: "PT Sans", monospace;
}
[mdlike='h1'] > .md-blockmeta,
[mdlike='h2'] > .md-blockmeta,
[mdlike='h3'] > .md-blockmeta {
color: var(--yellow);
color: inherit;
font-weight: inherit;
font-style: inherit;
}
h1,
[mdlike='h1'] {
font-size: 1.3rem;
}
h1:before {
content: "#";
color: var(--yellow);
padding-right: 1ch;
margin-left: -2ch;
}
h2,
[mdlike='h2'] {
font-size: 1.2rem;
}
h2:before {
content: "##";
color: var(--yellow);
padding-right: 1ch;
margin-left: -3ch;
}
h3,
[mdlike='h3'] {
font-size: 1.1rem;
}
h3:before,
h3.md-focus:before {
content: "###";
color: var(--yellow);
padding-right: 1ch;
margin-left: -4ch;
}
/** override the default style for focused headings */
h3.md-focus:before {
color: inherit;
border: inherit;
border-radius: inherit;
position: inherit;
left: initial;
float: none;
top: initial;
font-size: inherit;
padding-left: inherit;
padding-right: inherit;
vertical-align: inherit;
font-weight: inherit;
line-height: inherit;
}

p,
ul,
ol,
dl,
table {
  margin: 0.8em 0;
}

li > ol,
li > ul {
  margin: 0 0;
}

hr {
  height: 1px;
  padding: 0;
  margin: 24px 0;
  background-color: var(--base2);
  border: 0 none;
  overflow: hidden;
  box-sizing: content-box;
  border-bottom: 1px solid var(--base2);
}

body > h2:first-child {
  margin-top: 0;
  padding-top: 0;
}

body > h1:first-child {
  margin-top: 0;
  padding-top: 0;
}

body > h1:first-child + h2 {
  margin-top: 0;
  padding-top: 0;
}

body > h3:first-child,
body > h4:first-child,
body > h5:first-child,
body > h6:first-child {
  margin-top: 0;
  padding-top: 0;
}

a:first-child h1,
a:first-child h2,
a:first-child h3,
a:first-child h4,
a:first-child h5,
a:first-child h6 {
  margin-top: 0;
  padding-top: 0;
}

h4 p,
h5 p,
h6 p {
background-color: #000;
  margin-top: 0;
}

h1 p,
h2 p,
h3 p {
  margin-top: 0;
}

li p.first {
  display: inline-block;
}

ul,
ol {
  padding-left: 30px;
}

ul:first-child,
ol:first-child {
  margin-top: 0;
}

ul:last-child,
ol:last-child {
  margin-bottom: 0;
}

blockquote {
background-color: var(--base3);
border-radius: 5px;
padding: 16px;
color: var(--base02)
}

h4, h5, h6 {
display:  none;
}

h4 + blockquote {
  background-color: var(--bred);
  color:  var(--red);
  padding-left: 50px;
  border-radius: 5px;
}

h4 + blockquote::before {
  content:url('sneh/info-red.png');
  position: absolute;
  left: 40px;
}

h5 + blockquote {
  background-color: var(--bgreen);
  color:  var(--green);
  padding-left: 50px;
  border-radius: 5px;
}

h5 + blockquote::before {
  content:url('sneh/idea-green.png');
  position: absolute;
  left: 40px;
}

h6 + blockquote {
  background-color: var(--bblue);
  color:  var(--blue);
  padding-left: 50px;
  border-radius: 5px;
}

h6 + blockquote::before {
  content:url('sneh/bookmark-blue.png');
  position: absolute;
  left: 40px;
}

blockquote blockquote {
  padding-right: 0;
}

table {
  padding: 0;
  word-break: initial;
}

table tr {
  border-top: 1px solid #cccccc;
  margin: 0;
  padding: 0;
}

table tr:nth-child(2n) {
  background-color: var(--base2);
}

table tr th {
  font-weight: bold;
  border: 1px solid #cccccc;
  text-align: left;
  margin: 0;
  padding: 6px 13px;
}

table tr td {
  border: 1px solid #cccccc;
  text-align: left;
  margin: 0;
  padding: 6px 13px;
}

table tr th:first-child,
table tr td:first-child {
  margin-top: 0;
}

table tr th:last-child,
table tr td:last-child {
  margin-bottom: 0;
}

.CodeMirror-gutters {
  border-right: 0px;
}

.CodeMirror-linenumber {
color: var(--base1);
}

code {
color: var(--base03);
font-family: "SF Mono", monospace;
font-size: 0.9rem;
}
.md-fences,
code,
tt {
  background-color: var(--base3);
  color: var(--cyan);
  font-family: "SF Mono", monospace;
  border-radius: 5px;
  padding: 2px 4px;
}

.md-fences {
  font-size: 0.9rem;
  margin-bottom: 15px;
  margin-top: 15px;
  padding: 15px;
}

.task-list {
  padding-left: 0;
}

.task-list-item {
  padding-left: 32px;
}

.task-list-item input {
  top: 2px;
  left: -4px;
}

@media screen and (min-width: 914px) {
  /*body {
      width: 854px;
      margin: 0 auto;
  }*/
}

@media print {
  html {
      font-size: 13px;
  }
  table,
  pre {
      page-break-inside: avoid;
  }
  pre {
      word-wrap: break-word;
  }
}

.md-fences {
  background-color: var(--base2);
  color: var(--text-color);
}

#write pre.md-meta-block {
  padding: 1rem;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f7f7f7;
  border: 0;
  border-radius: 3px;
  color: #777777;
  margin-top: 0 !important;
}

.mathjax-block > .code-tooltip {
  bottom: .375rem;
}


.md-image > .md-meta {
  border-radius: 3px;
  font-family: "Roboto Mono", "Liberation Mono", Courier, monospace;
  padding: 8px 16px;
  font-size: 0.9em;
  color: inherit;
  background-color: 
}

.md-tag {
  color: inherit;
}

.md-toc {
  margin-top: 10px;
  padding-bottom: 10px;
}

.sidebar-tabs {
  border-bottom: none;
}

#typora-quick-open {
  background-color: var(--base2);
}

#typora-quick-open-item {
  background-color: #FAFAFA;
  border-color: #FEFEFE #e5e5e5 #e5e5e5 #eee;
  border-style: solid;
  border-width: 1px;
}

#md-notification:before {
  top: 10px;
}

/** focus mode */

.on-focus-mode blockquote {
  border-left-color: rgba(85, 85, 85, 0.12);
}

header,
.context-menu,
.megamenu-content,
footer {
  font-family: "Roboto Mono", "Liberation Mono", monospace;
}

.file-node-content:hover .file-node-icon,
.file-node-content:hover .file-node-open-state {
  visibility: visible;
}

.task-list-done {
  /* styles for completed tasks */
  text-decoration: line-through;
}
.task-list-not-done {
  /* styles for incomplete tasks */
}

.mac-seamless-mode #typora-sidebar {
  background-color: var(--side-bar-bg-color);
}

/* code mirror theme */
.cm-s-inner .cm-header { color: var(--blue); }
.cm-s-inner .cm-quote { color: #93a1a1; }

.cm-s-inner .cm-keyword { color: var(--orange); }
.cm-s-inner .cm-atom { color: var(--red); }
.cm-s-inner .cm-number { color: var(--red); }
.cm-s-inner .cm-def { color: var(--red); }

.cm-s-inner .cm-variable { color: var(--blue); }
.cm-s-inner .cm-variable-2 { color: var(--green); }
.cm-s-inner .cm-variable-3, .cm-s-inner .cm-type { color: var(--orange); }

.cm-s-inner .cm-property { color: var(--green); }
.cm-s-inner .cm-operator { color: var(--violet); }

.cm-s-inner .cm-comment { color: var(--base00); font-style:italic; }

.cm-s-inner .cm-string { color: var(--green); }
.cm-s-inner .cm-string-2 { color: var(--cyan); }

.cm-s-inner .cm-meta { color: #859900; }
.cm-s-inner .cm-qualifier { color: var(--orange); }
.cm-s-inner .cm-builtin { color: var(--red); }
.cm-s-inner .cm-bracket { color: var(--yellow); }
.cm-s-inner .CodeMirror-matchingbracket { color: #859900; }
.cm-s-inner .CodeMirror-nonmatchingbracket { color: #dc322f; }
.cm-s-inner .cm-tag { color: #93a1a1; }
.cm-s-inner .cm-attribute { color: var(--magenta); }
.cm-s-inner .cm-hr {
color: transparent;
border-top: 1px solid #586e75;
display: block;
}
.cm-s-inner .cm-link { color: #93a1a1; cursor: pointer; }
.cm-s-inner .cm-special { color: #6c71c4; }
.cm-s-inner .cm-em {
color: #999;
text-decoration: underline;
text-decoration-style: dotted;
}
.cm-s-inner .cm-error,
.cm-s-inner .cm-invalidchar {
color: #586e75;
border-bottom: 1px dotted #dc322f;
}

.CodeMirror-line {
  margin-left: 0.5rem;
}
`