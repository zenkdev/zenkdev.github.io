import { ReactSVGElement, cloneElement } from "react";

interface SocialProps {
  title: string;
  href: string;
  children: Omit<ReactSVGElement, "ref">;
}

export default function Social({ title, href, children }: SocialProps) {
  return (
    <a
      className="text-text hover:text-primary transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{title}</span>
      {cloneElement(children, {
        "aria-hidden": true,
        className: "h-6 w-6",
        fill: "currentColor",
      })}
    </a>
  );
}
