// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
  ],
});
