import { Metadata } from "next";
import { ComingSoonPage } from "@/components/layout/coming-soon";

export const metadata: Metadata = {
  title: "About | Huy Dev",
  description:
    "Learn more about Huy Dev - Frontend Developer, JavaScript enthusiast, and tech explorer.",
  keywords: [
    "Huy Dev",
    "About Kinh",
    "Frontend Developer",
    "JavaScript",
    "Next.js",
    "Vietnam Developer",
  ],
  openGraph: {
    title: "About | Huy Dev",
    description:
      "Discover the story and journey of Huy Dev in the world of web development.",
    siteName: "Huy Dev",
    type: "website",
    locale: "en_US",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Huy Dev",
    description:
      "Learn more about Huy Dev - Frontend Developer and tech enthusiast.",
  },
};

export default function Page() {
  return <ComingSoonPage pageName="About" />;
}
