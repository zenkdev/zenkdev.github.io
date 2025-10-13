import locale from "./locale_ru.json";

export default function Hero() {
  return (
    <section className="py-16 md:py-24" id="hero">
      <div className="@container">
        <div className="flex flex-col-reverse gap-10 @[864px]:flex-row items-center">
          <div className="flex flex-col gap-6 text-center @[864px]:text-left @[864px]:w-1/2 terminal-block">
            <div className="flex flex-col gap-4">
              <p className="text-primary">{locale.hero.title}</p>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                {locale.hero.h1}
              </h1>
              <h2 className="text-lg sm:text-xl text-text">{locale.hero.h2}</h2>
            </div>
            <a
              className="self-center @[864px]:self-start terminal-button"
              href="#projects"
            >
              <span className="truncate">::list_projects</span>
            </a>
          </div>
          <div className="w-full max-w-sm @[864px]:w-1/2 flex justify-center">
            <div
              className="bg-center bg-no-repeat aspect-3/4 bg-cover w-64 md:w-80 border-2 border-text shadow-sharp"
              data-alt="Фотография Ивана Иванова"
              style={{ backgroundImage: 'url("/me.jpg")' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
