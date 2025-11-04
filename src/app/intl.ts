"server-only";

import { createIntl } from "@formatjs/intl";

export default async function getIntl(locale: string, namespace: string) {
  return createIntl({
    locale,
    messages: (await import(`../../locales/${locale}/${namespace}.json`))
      .default,
  });
}
