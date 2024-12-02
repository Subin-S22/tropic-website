import one from "../public/image/plp/oil11.jpg";
import two from "../public/image/plp/oil5001.jpg";
import three from "../public/image/plp/oil2501.jpg";
import four from "../public/image/plp/dpowder1.jpg";

export const coconutData = [
  {
    coconut: [
      {
        product: "Coconut Oil",
        description:
          "Pure and natural coconut oil for cooking and personal care",
        ingredients: [
          "Our premium coconut oil is crafted exclusively from the finest dried coconuts , known as copra, from Tiptur ensuring a rich, pure, and authentic taste.",
        ],
        variants: [
          {
            id: "1",
            size: "1ltr -1000ml",
            mainImage: "/image/plp/oil11.jpg",
            name: "Narikela 1 Ltr Coconut Oil",
            icon: "/image/plp/Ellipse.png",
            secondName: "Narikela1ltr Oil",
            mrp: 250,
            sellingPrice: 225,
            benefits: [
              "Moisturizes Skin",
              "Nourishes Hair",
              "Boosts Energy",
              "Boosts Immunity",
              "Improves Metabolism",
              "Reduces Bad Cholesterol",
            ],
            image: [
              {
                oil: "/image/plp/oil1.jpg",
                infographic1: "/image/oil/infographics1.jpg",
                infographic2: "/image/oil/infographics1.jpg",
                infographic3: "/image/oil/infographics1.jpg",
                styledImage: "/image/oil/StyledImage.jpg",
              },
            ],
            mrp: 250,
            sellingPrice: 225,
          },
          {
            id: "500",
            size: "1/2ltr-500ml",
            mainImage: "/image/plp/oil5001.jpg",
            name: "Narikela 1/2 Ltr Coconut Oil",
            icon: "/image/plp/Ellipse.png",
            mrp: 130,
            secondName: "Narikela1/2ltr Oil",
            sellingPrice: 120,
            benefits: [
              "Moisturizes Skin",
              "Nourishes Hair",
              "Boosts Energy",
              "Boosts Immunity",

              "Improves Metabolism",
              "Reduces Bad Cholesterol",
            ],
            image: [
              {
                oil: "/image/oil/500ml/oil500ml.jpg",
                infographic1: "/image/oil/500ml/infogrpahics1.jpg",
                infographic2: "/image/oil/500ml/infogrpahics2.jpg",
                infographic3: "/image/oil/500ml/infogrpahics3.jpg",
                styledImage: "/image/oil/500ml/StyledImage.jpg",
              },
            ],
          },
          {
            id: "250",
            size: "1/4ltr-250 ml ",
            mainImage: "/image/plp/oil2501.jpg",
            name: "Narikela 1/4 Ltr Coconut Oil",
            icon: "/image/plp/Ellipse.png",
            secondName: "Narikela1/4ltr Oil",
            benefits: [
              "Moisturizes Skin",
              "Nourishes Hair",
              "Boosts Energy",
              "Boosts Immunity",

              "Improves Metabolism",
              "Reduces Bad Cholesterol",
            ],
            image: [
              {
                oil: "/image/plp/oil250.png",
                infographic1: "/image/oil/250ml/infogrpahics1.jpg",
                infographic2: "/image/oil/250ml/infogrpahics2.jpg",
                infographic3: "/image/oil/250ml/infogrpahics3.jpg",
                styledImage: "/image/oil/250ml/StyledImage.jpg",
              },
            ],
            mrp: 70,
            sellingPrice: 65,
          },

          {
            id: "22",
            mainImage: "/image/plp/dpowder1.jpg",
            size: "500 grams",
            mrp: 330,
            sellingPrice: 310,
            name: "Dessicated Coconut Powder",
            secondName: "Dessicated Powder",
            icon: "/image/plp/Ellipse.png",
            benefits: [
              "Moisturizes Skin",
              "Nourishes Hair",
              "Boosts Energy",
              "Boosts Immunity",
              "Improves Metabolism",
              "Reduces Bad Cholesterol",
            ],
          },
          // {
          //   "id": 5,
          //   "size": "5 ltr",
          //   "image": "/image/4cards/image4.jpeg",
          //   "mrp": 1100,
          //   "sellingPrice": 999
          // }
        ],
      },
    ],
    DesssicatePowder: [
      {
        product: " Desssicate powder",
        ingredients: [
          "Our desiccated coconut powder is crafted with care, using only the finest dried coconuts. We meticulously remove only the moisture content, preserving the natural flavor, aroma, and nutritional value.",
        ],
        variants: [
          {
            id: 22,
            image: "/image/plp/dpowde2.png",
            mrp: 330,
            sellingPrice: 310,
            name: "Dessicated Coconut Powder",
            icon: "/image/plp/Ellipse.png",
            benefits: [
              "Moisturizes Skin",
              "Nourishes Hair",
              "Boosts Energy",
              "Boosts Immunity",
              "Improves Metabolism",
              "Reduces Bad Cholesterol",
            ],
          },
        ],
      },
    ],
    Copra: [
      {
        product: "Copra",
        variants: [
          {
            id: "D1",
            image: "/image/4cards/image4.jpeg",
          },
        ],
      },
    ],
  },
];

export const fourCards = [
  {
    variants: [
      {
        id: "1",
        size: "1 ltr",
        name: "Narikela 1ltr",
        mainImage: one,
        mrp: 250,
        sellingPrice: 225,
      },
      {
        id: "500",
        size: "500 ml",
        name: "Narikela 1/2ltr",
        mainImage: two,
        mrp: 130,
        sellingPrice: 120,
      },
      {
        id: "250",
        size: "250 ml (Pack of 3)",
        name: "Narikela 1/4ltr",
        mainImage: three,
        mrp: 210,
        sellingPrice: 195,
      },

      {
        id: "22",
        mainImage: four,
        size: "500 grams",
        mrp: 330,
        sellingPrice: 310,
        name: "Dessicated Coconut Powder",
      },
    ],
  },
];

export const instagram = [
  {
    images: [
      {
        image: "/image/instagram/instgram1.png",
        link: "https://www.instagram.com/narikela.in/p/C8cdBRNSQk8/",
      },
      {
        image: "/image/instagram/instgram2.png",
        link: "https://www.instagram.com/narikela.in/p/C8cdGzIyzBC/",
      },
      {
        image: "/image/instagram/instgram3.png",
        link: "https://www.instagram.com/narikela.in/p/C8cdPRYSexc/",
      },
    ],
  },
];

export const HOMEBANNER = [
  {
    images: [
      {
        image: "/image/banner/banner1l.jpg",
      },
      {
        image: "/image/banner/banner2l.jpg",
      },
      {
        image: "/image/banner/banner3l.jpg",
      },
    ],
  },
];

export const HOMEBANNERM = [
  {
    images: [
      {
        image: "/image/banner/banner1m.jpg",
      },
      {
        image: "/image/banner/banner2m.jpg",
      },
      {
        image: "/image/banner/banner3m.jpg",
      },
    ],
  },
];

export const pdp = [
  {
    main: "/image/pdp/pdpmain1.png",
    side1: "/image/pdp/pdpside1.png",
    side2: "/image/pdp/pdpside2.png",
    side3: "/image/pdp/pdpside3.png",
  },
];

export const keyFeature = [
  {
    key: "/image/pdp/keyF1.png",
  },
  {
    key: "/image/pdp/keyF2.png",
  },
  {
    key: "/image/pdp/keyF3.png",
  },
];

export const ingredients = [
  {
    ingredients: "/image/pdp/ingredients1.png",
  },
  {
    ingredients: "/image/pdp/ingredients2.png",
  },
  {
    ingredients: "/image/pdp/ingredients3.png",
  },
  {
    ingredients: "/image/pdp/ingredients1.png",
  },
];

export const use1 = [
  {
    use: "/image/pdp/skincare.png",
    name: "Moisturizes Skin",
  },
  {
    use: "/image/pdp/healthy.png",
    name: "Nourishes Hair ",
  },
  {
    use: "/image/pdp/immunity.png",
    name: "Boosts Immunity ",
  },
];

export const use2 = [
  {
    use: "/image/pdp/stamina.png",
    name: "Boosts Energy ",
  },
  {
    use: "/image/pdp/digestion.png",
    name: "Improves Metabolism",
  },
  {
    use: "/image/pdp/saturated.png",
    name: "Reduces Bad Cholesterol ",
  },
];

export const TESTMIONIALSS = [
  {
    name: "Shamitha Anilkumar",
    exp: "This is my second buy of coconut oil. The oil is fresh and tastes good. Bought 5ltr can and the oil stayed fresh for a long time",
    rating: "5",
  },
  {
    name: "Samatha punya manavi C",
    exp: "I Love the quality of Narikela coconut oil.. definitely I will repurchase again",
    rating: "5",
  },
  {
    name: "Rahul Pujar",
    exp: "Lot of advantages from this Coconut oil, all are happy to eat food from this oil",
    rating: "5",
  },
  {
    name: "Ravitheja Kalkur",
    exp: "Coconut oil smells natural.Fresh product.Overall good experience.",
    rating: "5",
  },
  {
    name: "Mamatha Vinay",
    exp: "I have been  using the coconut oil since 6 months and I should say its a great product as compared to other products available in market.Quality of the oil is really good.I could see the difference after I started using it.",
    rating: "5",
  },
];
