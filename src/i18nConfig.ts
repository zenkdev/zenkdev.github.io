const i18nConfig = {
  locales: ["en", "ru"],
  defaultLocale: "ru",
};

export default i18nConfig;

export type Locale = (typeof i18nConfig)["locales"][number];
