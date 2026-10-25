import i18nConfig from "@/i18nConfig";
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect(`/${i18nConfig.defaultLocale}`);
}
