import config from "@/app.config";

import locale from "./locale_ru.json";

const projects = [
  {
    name: "Project 1",
    title: "Project_1_Details",
    description:
      "Краткое описание проекта. Демонстрация ключевых функций и использованных технологий.",
    tags: ["React", "Node.js", "MongoDB"],
    github_repo: "#",
    live_demo: "#",
    image_url:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1686pO2cfNxZV2Vq250VgiFdcZjq16AVY9qW_4_Dx39FlCEEf_8KahS1KFNEtqhD8e56_B-H5VZEdvdWJ2NXZ38dnbBtTGhyRnPDiKetFfcxgtCuge2Uqod5yO6r7ooeGTgRrjwRoLjlDER8JQs4s6pT6aBZ3g76WH0Ggu5bkQgL5evytrHo_K5jyOJtYILvo9KG81A1GrpmmL31Hrb28p8tgQssvCnbz8hbYWKUUuWD8JOv8dQWwamtEZD2cCMPEef5sqYkHX-I",
    image_alt: "Скриншот проекта 1",
  },
  {
    name: "Project 2",
    title: "Project_2_Details",
    description:
      "Краткое описание проекта. Демонстрация ключевых функций и использованных технологий.",
    tags: ["React", "Node.js", "MongoDB"],
    github_repo: "#",
    live_demo: "#",
    image_url:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-fyGeNZ4H6qgYxgq2q9JkmHd3VIfem5EOJz1_BwZqtVQ3jA7BNhhHO9ooYMZKewan9Iv0Vx4fCJ5cxATDszR_un0FALi2Jnmj-dmkyK5DO-_tLOIu91QOYEtoAnGKUvbe-Qfp6nG9L_uCFJXL1i4LNNgKVNYdc-pSz9rvknwFuz73JQgRPB4XUm1UH4jNYb3vqPJyIoq8BB-tFQu2xOLgLSPCOQD35bUnqkKQGz-tNS72xV8GJcjKkw00bbLPossKG3epC8GsVKQ",
    image_alt: "Скриншот проекта 2",
  },
  {
    name: "Project 3",
    title: "Project_3_Details",
    description:
      "Краткое описание проекта. Демонстрация ключевых функций и использованных технологий.",
    tags: ["React", "Node.js", "MongoDB"],
    github_repo: "#",
    live_demo: "#",
    image_url:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTDqgT6kly4kcG_qeYaCRpvPnBfMGZDMbAHa7-f9Mv7O1jGZSpc15SMJK3_O6m2-AUkIZxpXrpNKJwazVaSRRx4AWei9--ybS9enDjcfkYhwWlZMXyINKWQYMzaJQwwJbImHBj51F8Yy1Ytx71zXTeh4KV19ESQ09k2kNuwcLPUjYA6EcF0Q6Enfj1j1K7PHslWoED5BWRXOC--_lpHx1gO91Mabvk5JofJ200AnOlAzcsxGzOYjN9Iz8PUJTMo4YZxpkaFi3Uy9A",
    image_alt: "Скриншот проекта 3",
  },
];

export default function Projects() {
  if (!config.projectsVisible) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 border-t-2 border-text" id="projects">
      <div className="terminal-block">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary">
          {locale.projects.title}
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.name} className="project-card">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover border-b-2 border-text"
                data-alt={project.image_alt}
                style={{ backgroundImage: `url(${project.image_url})` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">
                  &gt; {project.title}
                </h3>
                <p className="mt-2 text-text">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-4">
                  <a
                    className="text-primary font-mono hover:underline"
                    href={project.github_repo}
                  >
                    &gt; github_repo
                  </a>
                  <a
                    className="text-primary font-mono hover:underline"
                    href={project.live_demo}
                  >
                    &gt; live_demo
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
