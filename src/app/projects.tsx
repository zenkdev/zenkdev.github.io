import config from "@/app.config";

import locale from "./locale_ru.json";

export default function Projects() {
  return (
    <section className="py-16 md:py-24 border-t-2 border-text" id="projects">
      <div className="terminal-block">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary">
          {locale.projects.title}
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {config.projects.map((project) => (
            <div key={project.name} className="project-card flex flex-col">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover border-b-2 border-text"
                data-alt={project.image_alt}
                style={{ backgroundImage: `url(${project.image_url})` }}
              ></div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-primary">
                  &gt; {project.title}
                </h3>
                <p className="mt-2 flex-1 text-text">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-4">
                  {project.github_repo ? (
                    <a
                      className="text-primary font-mono hover:underline"
                      href={project.github_repo}
                    >
                      &gt; github_repo
                    </a>
                  ) : null}
                  <a
                    className="text-primary font-mono hover:underline"
                    href={project.web_site}
                  >
                    &gt; web_site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
