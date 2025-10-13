import locale from "./locale_ru.json";

export default function About() {
  return (
    <section className="py-16 md:py-24 border-t-2 border-text" id="about">
      <div className="terminal-block">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary">
          {locale.about.title}
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-center text-lg text-text">
          {locale.about.text}
        </p>
      </div>
    </section>
  );
}
