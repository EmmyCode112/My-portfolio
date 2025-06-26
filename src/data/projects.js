import triimo1 from "/public/triimo1.png";
import pharste1 from "/public/pharste1.png";
import pharste2 from "/public/pharste2.png";
import pharste3 from "/public/pharste3.png";
import vfm1 from "/public/vfm-1.jpeg";
import vfm2 from "/public/vfm-2.png";
import vfm3 from "/public/vfm-3.png";
import token1 from "/public/token-1.png";
import token2 from "/public/token-2.png";
import token3 from "/public/token-3.png";

export const projects = [
  {
    id: "1",
    title: "Pharste Dashboard",
    description:
      "A fintech App dashboard, thats allows admin take control of the App.",
    fullDescription:
      "This is a complete live fintech App dashboard thats allows admin to take control of the mobile App, like send notification to users, update exchange rate, set transaction changes and many more.",
    tech: ["React js ", "Tailwind css", "Framer Motion"],
    images: [pharste1, pharste2, pharste3],
    live: false,
    adminOnly: true,
    link: "",
  },
  {
    id: "2",
    title: "Triimo",
    description:
      "Triimo web Application is design to send message across platform like email, whatsApp and sms.",
    fullDescription:
      "With Triimo you can create a group of contact then start a campaign either an email campaign, sms campaign or even a whatsApp campaign. With triimo you have access to chose a contact that will join the campaign. In a single campaign you can send template, messages, links and lots more.  (it's still under development.)",
    tech: ["React js", "Redux", "Tailwind css"],
    images: [triimo1],
    live: false,
    adminOnly: true,
    link: "",
  },
  {
    id: "3",
    title: "VFM",
    description:
      "VFM website is design to Educate and tell you more about the VFM mobile game.",
    fullDescription:
      "VFM (Virtual Football Manager) is a mobile game that you take control of you team, earn coins and get reward as a football manager. ",
    tech: ["React js", "Tailwind css", "email js"],
    images: [vfm1, vfm2, vfm3],
    live: true,
    adminOnly: false,
    link: "https://vfmgame.com",
  },
  {
    id: "4",
    title: "VFM TOKEN",
    description:
      "VFM website is design to Educate and tell you more about the VFM mobile game.",
    fullDescription:
      "VFM(Virtual Football Manager) is a mobile game that you take control of you team, earn coins and get reward as a football manager. ",
    tech: ["React js", "Tailwind css", "email js"],
    images: [token1, token2, token3],
    live: true,
    adminOnly: false,
    link: "",
  },
];
