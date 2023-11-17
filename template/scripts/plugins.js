module.exports = ({ env }) => ({
  // ...
  seo: {
    enabled: true,
  },
  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      requestTransforms: {
        wrapBodyWithDataKey: true,
      },
    },
    sitemap: {
      enabled: true,
      config: {
        cron: "0 0 0 * * *",
        limit: 45000,
        xsl: true,
        autoGenerate: false,
        caching: true,
        allowedFields: ["id", "uid", "slug", "title"],
        excludedTypes: [],
      },
    },
  },
});
