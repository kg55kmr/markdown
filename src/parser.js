import unified from "unified";
import parse from "remark-parse";
import frontmatter from "remark-frontmatter";
import raw from "rehype-raw";
import remark2rehype from "remark-rehype";

export default (content) =>
  unified()
    .use(parse)
    .use(frontmatter, ["yaml"])
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(raw)
    .use(compiler)
    .processSync(content).result;

function compiler() {
  this.Compiler = (tree) => {
    return tree;
  };
}
