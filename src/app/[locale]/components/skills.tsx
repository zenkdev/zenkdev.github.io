"use client";

import Image from "next/image";
import config from "@/app.config";
import { useIntl } from "react-intl";

export default function Skills() {
  const intl = useIntl();

  return (
    <section className="py-16 md:py-24 border-t-2 border-text" id="skills">
      <div className="terminal-block">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary">
          {intl.formatMessage({ id: "skills_title" })}
        </h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
          {config.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-3 border border-text p-3 shadow-sharp-light"
            >
              <Image
                alt={skill.name}
                className="h-16 w-16 filter invert brightness-200 sepia saturate-100 hue-rotate-90"
                data-alt={skill.name}
                width={16}
                height={16}
                src={skill.image}
              />
              <span className="font-mono text-primary">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
