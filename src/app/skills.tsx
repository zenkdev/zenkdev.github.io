import Image from "next/image";

import locale from "./locale_ru.json";

const skills = [
  {
    name: "React",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBlqBkkpbmpVc-wReiPW1NIKJ2dL-kh3z5CCJvDQIeUY0-yj4Vr6ciJDs2r8sn2PlacVReaBs6zX29dN74X0pqNpITRb3mB3fZGCS4u9DKp0ouXkfvAlagO6d4SbxJnOCO7UzokOqNOdiMzaPSsZ2zyYZAcIjjzebSpM2iyvnXgLsjWBLXqASvDiRdR0vXyAcfLxOs8jEtbxtyXx-Wrmzld-PHztJhr8a-O7rv91kOB61Bd12dsZkp0xB-MQ1scB6kv4kP62t_5jvU",
  },
  {
    name: "JavaScript",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFa5AfugKRNHXnmgvIci-O1pcPlc4IxPrpMmizcrPKcwrkfjPDWvUYuBg0rJcanlJnGijwsgXPDlm_YVPaRvc7yzm9NE2t7CrAXwAkPMbKm3w6tidPtNOxI766HUwNY_LTadozqmsno1MddAONBRIaI9OD98xPYmROLZwHITatevdXlPB2_vPQE5eqvFl5GI0XaVc20370o6PmuVPlj5Xue7nc6gNj0iVbSyCeapF4Zgv8UZ8IJ1BimZI419YwWRYVDwSNyQdtNJM",
  },
  {
    name: "TypeScript",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD475uyQce8pw1rSOeWHTvyqCsk1-dEiqubgs999P8B3qAn8jyXPbiV7h6CWsS1c_xBzMT5Qd5kZTfH8fEhVRYYuolYht9wVdQKIQSKOBQtEqX7J6mZ2ORjhCJKXTvvpHlFxdneVQRqr_FwTOmoINQ-EwhbjwhXrRlVzqg-x_4ZQVIUKK0Mwed9pin1cXKKnp2G2X3ROsMLrF9pibl4UEwnsXF-6szD1mxZ0x8StPL-N12KaHEtBx6qRMlMP2vHArfso7KbcTCeKpk",
  },
  {
    name: "Redux",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBR3XEqeL9njmig0FFh7zEUbOTU1kY6FuPZ7f4L9IEBNUV_K1TB3YZyZkQnMVq5CVW204w6-4oelAPljRCMo4-cnxWzs-Rw1_NmuKuMuATKz7RLYi5v8HEUJx3V5q7H9eYmAIfIt8H9D8ItZ3LXJ5w2aDq7WgDIk9SKl-2LuvSNA8X-kDRNfADyR__RqNjcAx9BUT5xdKeuVWVAr16XRaMYxqwK7iIwbij-4R1uSRSUe0HBt5Q842mLnu_Ookbv3vsdMptdMqZLqi8",
  },
  {
    name: "Tailwind CSS",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPWE04aG4M2UHaDO9RO-xCFUioCKRT4Z8M9g443W2TaDxRdMSzYaz1DPKl_Y41u8Dkcv6mOmWtdp5WyCAosqRTaO1_TYkQ1IXkTJLrjyTwVWBzXUC66hI24AlZtB9mHPdaXxaGcIIsSzlRmOZZzRVS3nMe6TRCPMqgUikrJfHi76PrYRUgG_NqFFKww5HM70TeYHQLhi5UYqNyRWWx-1kUidD3lTwCdQ0MHdPJcozDNf7rqVcTh1Lck_2wpetvDLPtvl2416tWlks",
  },
  {
    name: "HTML5",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD9gNkqFjXKgd-6sabOMnvd1NwUx5zyHuXgkhnx2tb2r9VdVjoMczuhmEJvQQdoAhYS8tRi-_7BRQ7q-xStydYnXtAHQB28Wd5cdLrmV0Bla1a6Ksk5Km8897HYYT8g8gUNNJzck98SiAiHT6tltIHeXETYVXi9rY_kxT9fZi1AA5lCzftu2R26eQPBpNbfPjT92LG9aBkZFmikjPsByi5rjnjZrAdYNcT_3FPYWnKuqZhosfnSIYBMISrA8fdzNhU9tCgaaq1wf6g",
  },
  {
    name: "CSS3",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDoL9aCWwuPeHpAZPGdmWSS6Rn1icetezoQZE-Z-ZgjcBXi5OluGvDx63O74xiDvedk-PlY_aGdj3AGWra1zh72YgvWYo0vo_BHaFzzXITaxBPCYgtIq9f9rEwPLo44XEhos8BuZAMWVE5VMMilCh3Adlbqy5tXvb_9DYOBdFO-onWVjctG5JbbqnR2PUPE5-eMyuid3bqlBqwxi6RSmQzVrpmZWBMS06TE6ucGeSBh61FJklCYGDFSw2csWIVm3ZK1Ln4WbpnXQA0",
  },
  {
    name: "Node.js",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBezVFym8j8WzEOZkxIH5rGjQJbfmVZOxIMUlkpJHnLiyVcJw8Mrvb7nUaRRUGQg6xUx_RDuyHQIMLs_H7MQFXG2Hgm2ltRUE2wVWPBRtqTrYHYMa_DLLskD_cNCeXsJkEFn_EDmFWH-seMG0eV9kyo6_ohDYZgWqb639VtcGwer5SO70B6ZOyQuFTBsepcZzTtth2iLS-UucV3a_eM9QlEMlhcwLzCIOSz0_eWT5PfAJ5oqj9jJPnSTgrrIQMto3XiDtSulmsSr1U",
  },
  {
    name: "Git",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQZKlJ1g1FLJEaM91EGL8T49CPt9yuVymqsDAhf7_tqfr2tkCjMc2Klgognp3vVlqvlkrHZEiPzLK_5lWonYODvGg6p2p5cxJUaAuBTGgx4Z7Q2mEx5E22G9C0EYJnFV7W8x1rFIilt2RvpqPDqjZK01UdxaH8suMsW-iAT6LwqAsfwIyrmoFaiiM8o1oAzixB78dqfTpGSiaP6GDVbXMpFsbCg36ZOL4O-3w9sAan9p6uUUbb_ZaoPF__1dMkp7ni0kNH4YV0RJY",
  },
  {
    name: "Figma",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAf212kv1T0ZPRGozcP49sU9c2UGU4XaN-LO1QXIPW3E36weSgyxohjC0y7zZprT3gptfupbyBH6V8zeQNWCAoMJVlgzU2IOBGuHhZHqDfrYgo9WuCDQdab_7xGBbZ4CJoKT0zQGc9O8R73NJqQvojADIGh-A1IyBpjzV4t1pc3GmqyaKqq7ZS0Iw3HplUeKl2nZxK9WmM5_8_sKXOjiOgsV5KHW8ePxK7BdCPjGM117nHEhcKUAVGc_pngu4AMUCwi03FyOFDrU70",
  },
];

export default function Skills() {
  return (
    <section className="py-16 md:py-24 border-t-2 border-text" id="skills">
      <div className="terminal-block">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary">
          {locale.skills.title}
        </h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
          {skills.map((skill) => (
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
