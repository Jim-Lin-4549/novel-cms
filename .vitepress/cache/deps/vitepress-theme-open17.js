// node_modules/.pnpm/vitepress-theme-open17@1.2.1_vitepress@1.5.0_@algolia+client-search@5.18.0_postcss@8.4.49_sea_36l5ki4uakuu7zj2olytxpf6yq/node_modules/vitepress-theme-open17/libs/index.ts
import DefaultTheme from "vitepress/theme";
import MyLayout from "D:/projects/!!!OwnProjects/!CMS/cms-novel/node_modules/.pnpm/vitepress-theme-open17@1.2.1_vitepress@1.5.0_@algolia+client-search@5.18.0_postcss@8.4.49_sea_36l5ki4uakuu7zj2olytxpf6yq/node_modules/vitepress-theme-open17/libs/components/MyLayout.vue";
import Blog from "D:/projects/!!!OwnProjects/!CMS/cms-novel/node_modules/.pnpm/vitepress-theme-open17@1.2.1_vitepress@1.5.0_@algolia+client-search@5.18.0_postcss@8.4.49_sea_36l5ki4uakuu7zj2olytxpf6yq/node_modules/vitepress-theme-open17/libs/components/Blog.vue";
import Archive from "D:/projects/!!!OwnProjects/!CMS/cms-novel/node_modules/.pnpm/vitepress-theme-open17@1.2.1_vitepress@1.5.0_@algolia+client-search@5.18.0_postcss@8.4.49_sea_36l5ki4uakuu7zj2olytxpf6yq/node_modules/vitepress-theme-open17/libs/components/Archive.vue";
import Tags from "D:/projects/!!!OwnProjects/!CMS/cms-novel/node_modules/.pnpm/vitepress-theme-open17@1.2.1_vitepress@1.5.0_@algolia+client-search@5.18.0_postcss@8.4.49_sea_36l5ki4uakuu7zj2olytxpf6yq/node_modules/vitepress-theme-open17/libs/components/Tags.vue";
import "D:/projects/!!!OwnProjects/!CMS/cms-novel/node_modules/.pnpm/vitepress-theme-open17@1.2.1_vitepress@1.5.0_@algolia+client-search@5.18.0_postcss@8.4.49_sea_36l5ki4uakuu7zj2olytxpf6yq/node_modules/vitepress-theme-open17/libs/style.css";
var libs_default = {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app, router, siteData }) {
    app.component("blog", Blog);
    app.component("archive", Archive);
    app.component("tags", Tags);
  }
};
export {
  libs_default as default
};
//# sourceMappingURL=vitepress-theme-open17.js.map
