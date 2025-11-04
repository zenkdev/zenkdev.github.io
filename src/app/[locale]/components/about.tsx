"use client";

import { useIntl } from "react-intl";

export default function About() {
  const intl = useIntl();

  return (
    <section className="py-16 md:py-24 border-t-2 border-text" id="about">
      <div className="terminal-block">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary">
          {intl.formatMessage({ id: "about_title" })}
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-center text-lg text-text">
          {intl.formatMessage({ id: "about_text" })}
        </p>
      </div>
    </section>
  );
}
