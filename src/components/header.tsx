import config from "@/app.config";

import locale from "../app/locale_ru.json";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b-2 border-text">
      <div className="flex items-center justify-between whitespace-nowrap px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-3">
        <div className="flex items-center gap-4">
          <div className="size-6 text-primary">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-[-0.015em] text-primary">
            {locale.header.title}{" "}
            <span className="text-text">:: {locale.header.title2}</span>
          </h2>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a
            className="text-sm font-medium text-text hover:text-primary transition-colors"
            href="#about"
          >
            {locale.header.about}
          </a>
          <a
            className="text-sm font-medium text-text hover:text-primary transition-colors"
            href="#skills"
          >
            {locale.header.skills}
          </a>
          <a
            className="text-sm font-medium text-text hover:text-primary transition-colors"
            href="#projects"
          >
            {locale.header.projects}
          </a>
          <a
            className="text-sm font-medium text-text hover:text-primary transition-colors"
            href="#contact"
          >
            {locale.header.contact}
          </a>
        </nav>
        <a
          className="hidden md:flex min-w-[84px] max-w-[480px] terminal-button"
          href="#contact"
        >
          <span className="truncate">{locale.header.connect}</span>
        </a>
        <button
          aria-label="Открыть меню"
          className="md:hidden p-2 border-2 border-text text-text hover:bg-primary hover:text-background transition-colors"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}
