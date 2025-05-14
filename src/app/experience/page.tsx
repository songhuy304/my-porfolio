import { FullScreen } from "@/components/full-screen";
import { ExperienceTimeline } from "./containers/experience-timeline";

export const metadata = {
  title: "Experience | Huy Dev",
  description:
    "Explore the professional journey of Huy Dev - frontend developer with experience in modern JavaScript frameworks.",
  openGraph: {
    title: "Experience | Huy Dev",
    description:
      "Frontend Developer with hands-on experience in React, Next.js, and modern UI/UX design.",
    siteName: "Huy Dev",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience | Huy Dev",
    description:
      "Check out Huy Dev's past work and achievements in frontend development.",
  },
  alternates: {},
};

export default function Page() {
  return (
    <div>
      <FullScreen>
        <ExperienceTimeline />
      </FullScreen>
    </div>
  );
}
