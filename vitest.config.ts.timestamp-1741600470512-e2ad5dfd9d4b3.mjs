// vitest.config.ts
import { fileURLToPath as fileURLToPath2 } from "node:url";
import { mergeConfig, defineConfig as defineConfig2, configDefaults } from "file:///D:/web/web_knowledge_system/extend/%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96/echarts/visual-comprehensive-management-platform/node_modules/.pnpm/vitest@2.1.4_@types+node@22.9.0_jsdom@25.0.1_less@4.2.2_sass@1.84.0/node_modules/vitest/dist/config.js";

// vite.config.ts
import { fileURLToPath, URL as URL2 } from "node:url";
import { defineConfig } from "file:///D:/web/web_knowledge_system/extend/%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96/echarts/visual-comprehensive-management-platform/node_modules/.pnpm/vite@5.4.10_@types+node@22.9.0_less@4.2.2_sass@1.84.0/node_modules/vite/dist/node/index.js";
import VueComponents from "file:///D:/web/web_knowledge_system/extend/%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96/echarts/visual-comprehensive-management-platform/node_modules/.pnpm/unplugin-vue-components@28.4.1_vue@3.5.12/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///D:/web/web_knowledge_system/extend/%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96/echarts/visual-comprehensive-management-platform/node_modules/.pnpm/unplugin-auto-import@19.1.1/node_modules/unplugin-auto-import/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/web/web_knowledge_system/extend/%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96/echarts/visual-comprehensive-management-platform/node_modules/.pnpm/unplugin-vue-components@28.4.1_vue@3.5.12/node_modules/unplugin-vue-components/dist/resolvers.js";
import vue from "file:///D:/web/web_knowledge_system/extend/%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96/echarts/visual-comprehensive-management-platform/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.10_vue@3.5.12/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import tailwindcss from "file:///D:/web/web_knowledge_system/extend/%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96/echarts/visual-comprehensive-management-platform/node_modules/.pnpm/@tailwindcss+vite@4.0.3_vite@5.4.10/node_modules/@tailwindcss/vite/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/web/web_knowledge_system/extend/%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96/echarts/visual-comprehensive-management-platform/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    VueComponents({ resolvers: [ElementPlusResolver()] }),
    AutoImport({ resolvers: [ElementPlusResolver()] })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL2("./src", __vite_injected_original_import_meta_url))
    }
  },
  server: {
    proxy: {
      //  '/api': {
      //   target: 'https://api.imooc-web.lgdsunday.club',
      //   changeOrigin:true,
      //   // rewrite:(path)=> path.replace(/^\/api/, '')
      // },
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});

// vitest.config.ts
var __vite_injected_original_import_meta_url2 = "file:///D:/web/web_knowledge_system/extend/%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96/echarts/visual-comprehensive-management-platform/vitest.config.ts";
var vitest_config_default = mergeConfig(
  vite_config_default,
  defineConfig2({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/**"],
      root: fileURLToPath2(new URL("./", __vite_injected_original_import_meta_url2))
    }
  })
);
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy50cyIsICJ2aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXHdlYlxcXFx3ZWJfa25vd2xlZGdlX3N5c3RlbVxcXFxleHRlbmRcXFxcXHU2NTcwXHU2MzZFXHU1M0VGXHU4OUM2XHU1MzE2XFxcXGVjaGFydHNcXFxcdmlzdWFsLWNvbXByZWhlbnNpdmUtbWFuYWdlbWVudC1wbGF0Zm9ybVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcd2ViXFxcXHdlYl9rbm93bGVkZ2Vfc3lzdGVtXFxcXGV4dGVuZFxcXFxcdTY1NzBcdTYzNkVcdTUzRUZcdTg5QzZcdTUzMTZcXFxcZWNoYXJ0c1xcXFx2aXN1YWwtY29tcHJlaGVuc2l2ZS1tYW5hZ2VtZW50LXBsYXRmb3JtXFxcXHZpdGVzdC5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3dlYi93ZWJfa25vd2xlZGdlX3N5c3RlbS9leHRlbmQvJUU2JTk1JUIwJUU2JThEJUFFJUU1JThGJUFGJUU4JUE3JTg2JUU1JThDJTk2L2VjaGFydHMvdmlzdWFsLWNvbXByZWhlbnNpdmUtbWFuYWdlbWVudC1wbGF0Zm9ybS92aXRlc3QuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJ1xuaW1wb3J0IHsgbWVyZ2VDb25maWcsIGRlZmluZUNvbmZpZywgY29uZmlnRGVmYXVsdHMgfSBmcm9tICd2aXRlc3QvY29uZmlnJ1xuaW1wb3J0IHZpdGVDb25maWcgZnJvbSAnLi92aXRlLmNvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VDb25maWcoXG4gIHZpdGVDb25maWcsXG4gIGRlZmluZUNvbmZpZyh7XG4gICAgdGVzdDoge1xuICAgICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgICBleGNsdWRlOiBbLi4uY29uZmlnRGVmYXVsdHMuZXhjbHVkZSwgJ2UyZS8qKiddLFxuICAgICAgcm9vdDogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuLycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH0sXG4gIH0pLFxuKVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3ZWJcXFxcd2ViX2tub3dsZWRnZV9zeXN0ZW1cXFxcZXh0ZW5kXFxcXFx1NjU3MFx1NjM2RVx1NTNFRlx1ODlDNlx1NTMxNlxcXFxlY2hhcnRzXFxcXHZpc3VhbC1jb21wcmVoZW5zaXZlLW1hbmFnZW1lbnQtcGxhdGZvcm1cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHdlYlxcXFx3ZWJfa25vd2xlZGdlX3N5c3RlbVxcXFxleHRlbmRcXFxcXHU2NTcwXHU2MzZFXHU1M0VGXHU4OUM2XHU1MzE2XFxcXGVjaGFydHNcXFxcdmlzdWFsLWNvbXByZWhlbnNpdmUtbWFuYWdlbWVudC1wbGF0Zm9ybVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd2ViL3dlYl9rbm93bGVkZ2Vfc3lzdGVtL2V4dGVuZC8lRTYlOTUlQjAlRTYlOEQlQUUlRTUlOEYlQUYlRTglQTclODYlRTUlOEMlOTYvZWNoYXJ0cy92aXN1YWwtY29tcHJlaGVuc2l2ZS1tYW5hZ2VtZW50LXBsYXRmb3JtL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgVnVlQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICdAdGFpbHdpbmRjc3Mvdml0ZSdcblxuLy8gaHR0cHM6Ly92aXRlLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgdGFpbHdpbmRjc3MoKSxcbiAgICBWdWVDb21wb25lbnRzKHsgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSB9KSxcbiAgICBBdXRvSW1wb3J0KHsgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICB9LFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwcm94eToge1xuICAgICAgLy8gICcvYXBpJzoge1xuICAgICAgLy8gICB0YXJnZXQ6ICdodHRwczovL2FwaS5pbW9vYy13ZWIubGdkc3VuZGF5LmNsdWInLFxuICAgICAgLy8gICBjaGFuZ2VPcmlnaW46dHJ1ZSxcbiAgICAgIC8vICAgLy8gcmV3cml0ZToocGF0aCk9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJylcbiAgICAgIC8vIH0sXG4gICAgICAnL2FwaSc6IHtcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJycpLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdWYsU0FBUyxpQkFBQUEsc0JBQXFCO0FBQ3JoQixTQUFTLGFBQWEsZ0JBQUFDLGVBQWMsc0JBQXNCOzs7QUNEeWIsU0FBUyxlQUFlLE9BQUFDLFlBQVc7QUFFdGhCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBQ3BDLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjtBQVArUSxJQUFNLDJDQUEyQztBQVV4VixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixZQUFZO0FBQUEsSUFDWixjQUFjLEVBQUUsV0FBVyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQztBQUFBLElBQ3BELFdBQVcsRUFBRSxXQUFXLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDO0FBQUEsRUFDbkQ7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJQyxLQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1MLFFBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxNQUM5QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzs7O0FEcEN3UyxJQUFNQyw0Q0FBMkM7QUFJMVYsSUFBTyx3QkFBUTtBQUFBLEVBQ2I7QUFBQSxFQUNBQyxjQUFhO0FBQUEsSUFDWCxNQUFNO0FBQUEsTUFDSixhQUFhO0FBQUEsTUFDYixTQUFTLENBQUMsR0FBRyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQzdDLE1BQU1DLGVBQWMsSUFBSSxJQUFJLE1BQU1GLHlDQUFlLENBQUM7QUFBQSxJQUNwRDtBQUFBLEVBQ0YsQ0FBQztBQUNIOyIsCiAgIm5hbWVzIjogWyJmaWxlVVJMVG9QYXRoIiwgImRlZmluZUNvbmZpZyIsICJVUkwiLCAiVVJMIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwiLCAiZGVmaW5lQ29uZmlnIiwgImZpbGVVUkxUb1BhdGgiXQp9Cg==
