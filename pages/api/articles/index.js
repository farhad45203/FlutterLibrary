import tv1 from "../../../src/images/articles/TV - 1.png";
import tv2 from "../../../src/images/articles/TV - 2.png";
import tv3 from "../../../src/images/articles/TV - 3.png";

const articles = [
  {
    id: 1,
    content: "Foodly Restaurent App Template",
    href: "#",
    image: tv1.src,
    imageAlt: "Model wearing women's black cotton crewneck tee.",
    date: "Mar 24, 2024",
    type: "Animation",
  },
  {
    id: 2,
    content: "Foodly Restaurent App Template",
    href: "#",
    image: tv2.src,
    imageAlt: "Model wearing women's black cotton crewneck tee.",
    date: "Mar 24, 2024",
    type: "Animation",
  },
  {
    id: 3,
    content: "Foodly Restaurent App Template",
    href: "#",
    image: tv3.src,
    imageAlt: "Model wearing women's black cotton crewneck tee.",
    date: "Mar 24, 2024",
    type: "Animation",
  },
];

export default function handler(req, res) {
  res.status(200).json(articles);
}
