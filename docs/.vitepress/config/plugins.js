import path from "path";
import fs from "fs";
import MarkdownIt from "markdown-it";
import mdContainer from "markdown-it-container";
// import { docRoot } from '@element-plus/build-utils'

const localMd = MarkdownIt();

export const mdPlugin = (md) => {
  md.use(mdContainer, "demo", {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/);
    },

    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : "";
        const sourceFileToken = tokens[idx + 2];
        // let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? "";
        if (sourceFileToken.type === "inline") {
          source = fs.readFileSync(
            path.resolve(".vitepress/components", `${sourceFile}.vue`),
            "utf-8"
          );
        }
        // if (!source) throw new Error(`Incorrect source file: ${sourceFile}`);

        return `
        <Demo :demo="demos" path="${sourceFile}" description="${description}" source="${encodeURIComponent(
          source
        )}">
        `;
      } else {
        return "</Demo>";
      }
    },
  });
};
