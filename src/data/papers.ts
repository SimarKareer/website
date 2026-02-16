export type LinkItem = {
  label: string;
  href: string;
};

export type Paper = {
  id: string;
  title: string;
  month: string;
  year: number;
  venue: string;
  authors: string[];
  paperUrl: string;
  blogUrl?: string;
  tweetUrl?: string;
  newsLinks?: LinkItem[];
};

export const papers: Paper[] = [
  {
    id: "emergence-transfer",
    title: "Emergence of Human to Robot Transfer in Vision-Language-Action Models",
    month: "Dec",
    year: 2025,
    venue: "arXiv",
    authors: [
      "Simar Kareer",
      "Karl Pertsch",
      "James Darpinian",
      "Judy Hoffman",
      "Danfei Xu",
      "Sergey Levine",
      "Chelsea Finn",
      "Suraj Nair",
    ],
    paperUrl: "https://arxiv.org/abs/2512.22414",
    blogUrl: "https://www.pi.website/research/human_to_robot",
    tweetUrl:
      "https://x.com/physical_int/status/2001096200456692114?s=20",
  },
  {
    id: "egobridge",
    title:
      "EgoBridge: Domain Adaptation for Generalizable Imitation from Egocentric Human Data",
    month: "Sep",
    year: 2025,
    venue: "NeurIPS",
    authors: [
      "Ryan Punamiya",
      "Dhruv Patel",
      "Patcharapong Aphiwetsa",
      "Pranav Kuppili",
      "Lawrence Y. Zhu",
      "Simar Kareer",
      "Judy Hoffman",
      "Danfei Xu",
    ],
    paperUrl: "https://arxiv.org/abs/2509.19626",
    blogUrl: "https://ego-bridge.github.io/",
    tweetUrl:
      "https://x.com/ryan_punamiya/status/1971239110439469256?s=20",
  },
  {
    id: "emma",
    title: "EMMA: Scaling Mobile Manipulation via Egocentric Human Data",
    month: "Sep",
    year: 2025,
    venue: "RAL",
    authors: [
      "Lawrence Y. Zhu",
      "Pranav Kuppili",
      "Ryan Punamiya",
      "Patcharapong Aphiwetsa",
      "Dhruv Patel",
      "Simar Kareer",
      "Sehoon Ha",
      "Danfei Xu",
    ],
    paperUrl: "https://arxiv.org/abs/2509.04443",
    blogUrl: "https://ego-moma.github.io/",
    tweetUrl:
      "https://x.com/LawrenceZhu22/status/1965430612283850978?s=20",
  },
  {
    id: "egomimic",
    title: "EgoMimic: Scaling Imitation Learning via Egocentric Video",
    month: "Oct",
    year: 2024,
    venue: "ICRA",
    authors: [
      "Simar Kareer",
      "Dhruv Patel",
      "Ryan Punamiya",
      "Pranay Mathur",
      "Shuo Cheng",
      "Chen Wang",
      "Judy Hoffman",
      "Danfei Xu",
    ],
    paperUrl: "https://arxiv.org/abs/2410.24221",
    blogUrl:
      "https://ai.meta.com/blog/egomimic-project-aria-georgia-tech-ego4d-robotics-embodied-ai/",
    tweetUrl:
      "https://x.com/simar_kareer/status/1852412283739353498?s=20",
    newsLinks: [
      {
        label: "Georgia Tech News",
        href: "https://www.cc.gatech.edu/news/new-algorithm-teaches-robots-through-human-perspective",
      },
    ],
  },
  {
    id: "videoda",
    title: "We're Not Using Videos Effectively: An Updated Domain Adaptive Video Segmentation Baseline",
    month: "Jan",
    year: 2024,
    venue: "TMLR",
    authors: [
      "Simar Kareer",
      "Vivek Vijaykumar",
      "Harsh Maheshwari",
      "Prithvi Chattopadhyay",
      "Judy Hoffman",
      "Viraj Prabhu",
    ],
    paperUrl: "https://arxiv.org/abs/2402.00868",
    tweetUrl:
      "https://x.com/simar_kareer/status/1753504831669715178?s=20",
  },
  {
    id: "vinl",
    title: "ViNL: Visual Navigation and Locomotion Over Obstacles",
    month: "Oct",
    year: 2022,
    venue: "ICRA",
    authors: [
      "Simar Kareer",
      "Naoki Yokoyama",
      "Dhruv Batra",
      "Sehoon Ha",
      "Joanne Truong",
    ],
    paperUrl: "https://arxiv.org/abs/2210.14791",
    blogUrl: "http://www.joannetruong.com/projects/vinl.html",
    tweetUrl: "https://x.com/simar_kareer/status/1587083342909825024?s=20",
    newsLinks: [
      {
        label: "Georgia Tech News",
        href: "https://www.cc.gatech.edu/news/researchers-use-novel-approach-teach-robot-navigate-over-obstacles",
      },
      {
        label: "Tech Xplore",
        href: "https://techxplore.com/news/2023-05-approach-robot-obstacles.html",
      },
      {
        label: "Inceptive Mind",
        href: "https://www.inceptivemind.com/novel-approach-teaches-trobot-navigate-over-obstacle/31082/",
      },
    ],
  },
];

export const highlightedPaperIds = [
  "egomimic",
  "egobridge",
  "emma",
  "emergence-transfer",
];

const monthToIndex: Record<string, number> = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
};

function sortNewestFirst(a: Paper, b: Paper): number {
  if (a.year !== b.year) {
    return b.year - a.year;
  }
  return (monthToIndex[b.month] ?? 0) - (monthToIndex[a.month] ?? 0);
}

export const papersNewestFirst = [...papers].sort(sortNewestFirst);

export const highlightedPapers = papersNewestFirst.filter((paper) =>
  highlightedPaperIds.includes(paper.id),
);
