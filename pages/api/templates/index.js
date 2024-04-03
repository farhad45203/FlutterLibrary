import tv1 from "../../../src/images/templates/TV - 1.png";
import tv2 from "../../../src/images/templates/TV - 2.png";
import tv3 from "../../../src/images/templates/TV - 3.png";
import tv4 from "../../../src/images/templates/TV - 4.png";
import tv5 from "../../../src/images/templates/TV - 5.png";
import tv6 from "../../../src/images/templates/TV - 6.png";

const templates = [
  {
    id: 1,
    content: "Foodly Restaurent App Template",
    price: "$32",
    href: "#",
    image: tv1,
    imageAlt: "Model wearing women's black cotton crewneck tee.",
    phone: 28,
    download: 546,
  },
  {
    id: 2,
    content: "Flutter Animation Template",
    price: "$32",
    href: "#",
    image: tv2,
    imageAlt: "Model wearing women's black cotton crewneck tee.",
    phone: 28,
    download: 546,
  },
  {
    id: 3,
    content: "Flutter Animation Template",
    price: "$32",
    href: "#",
    image: tv3,
    imageAlt: "Model wearing women's black cotton crewneck tee.",
    phone: 28,
    download: 546,
  },
  {
    id: 4,
    content: "Flutter Animation Template",
    price: "$32",
    href: "#",
    image: tv4,
    imageAlt: "Model wearing women's black cotton crewneck tee.",
    phone: 28,
    download: 546,
  },
  {
    id: 5,
    content: "Flutter Animation Template",
    price: "$32",
    href: "#",
    image: tv5,
    imageAlt: "Model wearing women's black cotton crewneck tee.",
    phone: 28,
    download: 546,
  },
  {
    id: 6,
    content: "Flutter Animation Template",
    price: "$32",
    href: "#",
    image: tv6,
    imageAlt: "Model wearing women's black cotton crewneck tee.",
    phone: 28,
    download: 546,
  },
];

export default function handler(req, res) {
  res.status(200).json(templates);
}
