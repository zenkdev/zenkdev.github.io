import Footer from "@/components/footer";
import Header from "@/components/header";
import ServerIntlProvider from "@/components/server-intl-provider";

import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";
import getIntl from "../intl";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const intl = await getIntl(locale, "common");

  return (
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <Header locale={locale} />
          <main className="flex flex-col items-center py-5">
            <div className="layout-content-container flex flex-col max-w-5xl flex-1 w-full px-4 sm:px-6 md:px-8">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </div>
          </main>
          <Footer locale={locale} />
        </div>
      </div>
    </ServerIntlProvider>
  );
}
