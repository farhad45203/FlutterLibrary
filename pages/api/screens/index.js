import pm1 from "../../../src/images/screens/Phone Mockup.png";
import pm2 from "../../../src/images/screens/Phone Mockup (1).png";
import pm3 from "../../../src/images/screens/Phone Mockup (2).png";
import pm4 from "../../../src/images/screens/Phone Mockup (3).png";
import pm5 from "../../../src/images/screens/Phone Mockup (4).png";
import pm6 from "../../../src/images/screens/Phone Mockup (5).png";
import pm7 from "../../../src/images/screens/Phone Mockup (6).png";
import pm8 from "../../../src/images/screens/Phone Mockup (7).png";
import pm9 from "../../../src/images/screens/Phone Mockup (8).png";
import pm10 from "../../../src/images/screens/Phone Mockup (9).png";

const screens = [
  {
    id: 1,
    type: "New",
    href: "/screens/1",
    imageSrc: pm1.src,
    imageAlt: "Hand stitched, orange leather long wallet.",
    code: 20,
  },
  {
    id: 2,
    type: "Popular",
    href: "/screens/2",
    imageSrc: pm2.src,
    imageAlt: "Hand stitched, orange leather long wallet.",
    code: 20,
  },
  {
    id: 3,
    type: "Onboarding",
    href: "/screens/3",
    imageSrc: pm3.src,
    imageAlt: "Hand stitched, orange leather long wallet.",
    code: 20,
  },
  {
    id: 4,
    type: "Auth",
    href: "/screens/4",
    imageSrc: pm4.src,
    imageAlt: "Hand stitched, orange leather long wallet.",
    code: 20,
  },
  {
    id: 5,
    type: "Shop",
    href: "/screens/5",
    imageSrc: pm5.src,
    imageAlt: "Hand stitched, orange leather long wallet.",
    code: 20,
  },
  {
    id: 6,
    type: "Chat",
    href: "/screens/6",
    imageSrc: pm6.src,
    imageAlt: "Hand stitched, orange leather long wallet.",
    code: 20,
  },
  {
    id: 7,
    type: "TOP Verification",
    href: "/screens/7",
    imageSrc: pm7.src,
    imageAlt: "Hand stitched, orange leather long wallet.",
    code: 20,
  },
  {
    id: 8,
    type: "Dashboard",
    href: "/screens/8",
    imageSrc: pm8.src,
    imageAlt: "Hand stitched, orange leather long wallet.",
    code: 20,
  },
  {
    id: 9,
    type: "Food",
    href: "/screens/9",
    imageSrc: pm9.src,
    imageAlt: "Hand stitched, orange leather long wallet.",
    code: 20,
  },
  {
    id: 10,
    type: "Restaurent",
    href: "/screens/10",
    imageSrc: pm10.src,
    imageAlt: "Hand stitched, orange leather long wallet.",
    code: 20,
  },
  {
    id: 11,
    type: "Fitness",
    href: "/screens/1",
    imageSrc: pm1.src,
    imageAlt: "Hand stitched, orange leather long wallet.",
    code: 20,
  },
  {
    id: 12,
    type: "Dashboard",
    href: "/screens/2",
    imageSrc: pm2.src,
    imageAlt: "Hand stitched, orange leather long wallet.",
    code: 20,
  },
  {
    id: 13,
    type: "TOP Verification",
    href: "/screens/3",
    imageSrc: pm3.src,
    imageAlt: "Hand stitched, orange leather long wallet.",
    code: 20,
  },
  {
    id: 14,
    type: "Chat",
    href: "/screens/4",
    imageSrc: pm4.src,
    imageAlt: "Hand stitched, orange leather long wallet.",
    code: 20,
  },
  {
    id: 15,
    type: "Auth",
    href: "/screens/5",
    imageSrc: pm5.src,
    imageAlt: "Hand stitched, orange leather long wallet.",
    code: 20,
  },
  {
    id: 16,
    type: "Shop",
    href: "/screens/6",
    imageSrc: pm6.src,
    imageAlt: "Hand stitched, orange leather long wallet.",
    code: 20,
  },
  {
    id: 17,
    type: "Onboarding",
    href: "/screens/7",
    imageSrc: pm7.src,
    imageAlt: "Hand stitched, orange leather long wallet.",
    code: 20,
  },
  {
    id: 18,
    type: "Popular",
    href: "/screens/8",
    imageSrc: pm8.src,
    imageAlt: "Hand stitched, orange leather long wallet.",
    code: 20,
  },
  {
    id: 19,
    type: "Restaurent",
    href: "/screens/9",
    imageSrc: pm9.src,
    imageAlt: "Hand stitched, orange leather long wallet.",
    code: 20,
  },
  {
    id: 20,
    type: "New",
    href: "/screens/10",
    imageSrc: pm10.src,
    imageAlt: "Hand stitched, orange leather long wallet.",
    code: 20,
  },
];

export default function handler(req, res) {
  res.status(200).json(screens);
}
