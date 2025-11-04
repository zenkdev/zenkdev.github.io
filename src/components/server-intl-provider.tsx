"use client";

import { IntlProvider } from "react-intl";

type ServerIntlProviderProps = Pick<
  React.ComponentProps<typeof IntlProvider>,
  "messages" | "locale"
> & { children: React.ReactNode };

export default function ServerIntlProvider({
  messages,
  locale,
  children,
}: ServerIntlProviderProps) {
  return (
    <IntlProvider messages={messages} locale={locale}>
      {children}
    </IntlProvider>
  );
}
