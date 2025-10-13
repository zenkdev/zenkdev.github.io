import config from "@/app.config";

import locale from "./locale_ru.json";

export default function Contact() {
  if (!config.contactVisible) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 border-t-2 border-text" id="contact">
      <div className="terminal-block">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary">
          {locale.contact.title}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-text">
          {locale.contact.description}
        </p>
        <form className="mt-10 max-w-xl mx-auto">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label
                className="block text-sm font-medium text-primary"
                htmlFor="name"
              >
                {locale.contact.name_label}
              </label>
              <div className="mt-1">
                <input
                  autoComplete="name"
                  className="text-input w-full"
                  id="name"
                  name="name"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-primary"
                htmlFor="email"
              >
                {locale.contact.email_label}
              </label>
              <div className="mt-1">
                <input
                  autoComplete="email"
                  className="text-input w-full"
                  id="email"
                  name="email"
                  type="email"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                className="block text-sm font-medium text-primary"
                htmlFor="message"
              >
                {locale.contact.message_label}
              </label>
              <div className="mt-1">
                <textarea
                  className="text-input w-full"
                  id="message"
                  name="message"
                  rows={4}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:col-span-2 text-center">
            <button className="terminal-button" type="submit">
              {locale.contact.submit_button}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
