import i18nConfig from "@/i18nConfig";
import { redirect } from "next/navigation";

export default function Index() {
  redirect(`/${i18nConfig.defaultLocale}`);
}
