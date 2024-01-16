// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/content"],
  colorMode: {
    classSuffix: "",
  },
  content: {
    highlight: {
      theme: "material-theme",
      preload: [
        "diff",
        "ts",
        "js",
        "css",
        "java",
        "groovy",
        "sql",
        "xml",
        "json",
      ],
    },
  },
  router: {
    options: {
      hashMode: true,
      scrollBehaviorType: "smooth",
    },
  },
});
