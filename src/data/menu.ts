// Sourced verbatim from https://iori.com.au/menu/dinner-menu/ and
// /menu/drinks/ (see CURRENT_SITE_AUDIT.md). The live pages list every dish
// as one continuous stream with no structural sections, despite a sidebar
// that implies categories — the grouping below is our own editorial
// restructuring of those real dishes, not an invented menu. Every name,
// price, and description is real; nothing here has been added to fill a
// category out.

export type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

export type MenuCategory = {
  title: string;
  note?: string;
  items: MenuItem[];
};

export const dinnerMenu: MenuCategory[] = [
  {
    title: "Degustation & Kaiseki Courses",
    note: "Multi-course menus; some require a minimum of two or four guests.",
    items: [
      {
        name: "Miyabi Course",
        price: "$94 / person",
        description:
          "Kaiseki style, minimum 2 — entrée, main course, rice & soup, dessert of the day.",
      },
      {
        name: "Shizuka Course",
        price: "$81 / person",
        description:
          "Kaiseki style, minimum 2 — entrée, main course, rice & soup, dessert of the day.",
      },
      {
        name: "Sukiyaki Course",
        price: "$94 / person",
        description:
          "Minimum 2 — assorted entrées, wagyu sukiyaki, udon noodles or rice, dessert of the day.",
      },
      {
        name: "Shabu Shabu Course",
        price: "$94 / person",
        description:
          "Minimum 2 — assorted entrées, wagyu shabu shabu, udon noodles or rice, dessert of the day.",
      },
      {
        name: "Wagyu Premium Beef Ninja Degustation",
        price: "$76 / person",
        description:
          "Edamame, agedashi tofu, sushi, sashimi and sushi rolls, miso soup, rice, tempura, teriyaki chicken, wagyu premium garlic steak.",
      },
      {
        name: "Ninja Degustation",
        price: "$60 / person",
        description:
          "Edamame, agedashi tofu, sushi and sashimi with special rolls, miso soup, rice, tempura, teriyaki chicken.",
      },
      {
        name: "Wagyu Premium Beef Low Carb Degustation",
        price: "$79 / person",
        description:
          "Edamame, age dashi tofu, today's sashimi, miso soup, nasu dengaku eggplant, tempura, teriyaki chicken, wagyu premium garlic steak.",
      },
      {
        name: "Low Carb Degustation",
        price: "$65 / person",
        description:
          "Edamame, age dashi tofu, today's sashimi, miso soup, nasu dengaku eggplant, tempura, teriyaki chicken.",
      },
      {
        name: "Pescatarian Degustation",
        price: "$66 / person",
        description:
          "Edamame, age dashi tofu, sushi, sashimi and sushi rolls, miso soup, rice, tempura, nasu dengaku eggplant, teriyaki salmon.",
      },
      {
        name: "Sho Jin Degustation",
        price: "$55 / person",
        description:
          "Vegetarian, minimum 4 — edamame, seaweed salad, agedashi tofu, vegetable sushi rolls, miso soup, rice, nasu dengaku, vegetable tempura, teriyaki tofu.",
      },
      {
        name: "Yosenabe Hot Pot Course",
        price: "$72 / person",
      },
    ],
  },
  {
    title: "Bento & Set Meals",
    items: [
      {
        name: "Makunouchi",
        price: "$44",
        description:
          "A variety of small entrées in a traditional Japanese box with tempura prawn and delicacies, choice of teriyaki chicken, salmon, or beef (+$14), served with rice and miso soup.",
      },
      {
        name: "Makunouchi with Sashimi",
        price: "$76",
        description: "As above, served with assorted sashimi.",
      },
      {
        name: "A.T.M. (Assorted Tremendous Meal)",
        price: "$69",
      },
      {
        name: "Chicken Li'l",
        price: "$53",
        description:
          "Yakitori chicken skewers, deep-fried chicken salad with mild chilli sauce, chicken hand roll, oyako, teriyaki chicken, miso soup.",
      },
      {
        name: "Kids Meal",
        price: "$24",
        description:
          "A bento box for children — teriyaki chicken and a small selection by IORI chefs, with a choice of toy.",
      },
    ],
  },
  {
    title: "Sashimi & Sushi",
    items: [
      { name: "Sashimi", price: "Reg $38 / Lge $58", description: "Assortment of fresh raw fish, served with wasabi." },
      { name: "Salmon Sashimi", price: "Reg $42 / Lge $62", description: "Fresh raw Tasmanian salmon, served with wasabi." },
      { name: "Tuna Sashimi", price: "Reg $42 / Lge $62", description: "Assortment of fresh raw tuna, served with wasabi." },
      { name: "Sushi", price: "Reg $42 / Lge $62", description: "Assortment of fresh raw fish and delicacies on vinegared rice." },
      { name: "Nigiri", price: "$74", description: "Assortment of nigiri sushi." },
      { name: "Today's Vegi Nigiri", price: "$56", description: "Fresh seasonal vegetable and delicacy nigiri. (v)" },
      { name: "Aburi Sushi", price: "$45", description: "Seared nigiri sushi — salmon, scallop, kingfish, and eel." },
      { name: "Sashimi Salad", price: "$42", description: "Garden salad with fresh sashimi, finished with a mild spicy dressing." },
      { name: "Wagyu Premium Beef Tataki", price: "$42", description: "Very rare seared and thinly sliced, topped with sauce." },
    ],
  },
  {
    title: "Sushi & Sashimi Platters",
    items: [
      { name: "For 1", price: "$64" },
      { name: "For 2", price: "$116" },
      { name: "For 3", price: "$174" },
      { name: "For 4", price: "$225" },
    ],
  },
  {
    title: "Sushi Rolls",
    items: [
      {
        name: "S.S.R Seared Salmon Roll",
        price: "$39",
        description: "Inside-out roll with seafood stick, avocado, cucumber, and flying fish caviar.",
      },
      {
        name: "Eel Rolls",
        price: "$34",
        description: "8 pieces — inside-out rolls with seafood stick, avocado, and grilled eel.",
      },
      {
        name: "Volcano Roll",
        price: "$33",
        description: "10 pieces — wasabi and orange caviar, fresh salmon, a touch of chilli sauce.",
      },
      {
        name: "Dragon Rolls",
        price: "$25",
        description: "8 pieces — mildly spicy, prawn tempura topped with avocado.",
      },
    ],
  },
  {
    title: "Mains",
    items: [
      {
        name: "Garlic Steak – Wagyu Premium Beef",
        price: "$85",
        description: "200g, pan-fried and seared very rare with garlic and leek.",
      },
      {
        name: "Teriyaki Beef – Wagyu Premium Beef",
        price: "$85",
        description: "200g, pan-fried in teriyaki sauce.",
      },
      { name: "Teriyaki Salmon", price: "$56", description: "Pan-fried Tasmanian salmon in teriyaki sauce." },
      { name: "Teriyaki Chicken", price: "$45", description: "Pan-fried chicken fillet in teriyaki sauce." },
      { name: "Teriyaki Tofu", price: "$40", description: "Fried bean curd in teriyaki sauce. (v)" },
      { name: "Unagi Kabayaki", price: "$46", description: "Char-grilled eel." },
      { name: "Ebi Tempura", price: "$46", description: "Deep-fried crispy prawns with dipping sauce and special salt." },
      { name: "Crab Tempura", price: "$45", description: "Deep-fried soft-shell crab with dipping sauce and special salt." },
      { name: "Assorted Tempura", price: "$46", description: "Prawn, crab, and vegetables in a light crispy batter." },
      { name: "Vegetable Tempura", price: "$38", description: "Selected vegetables with dipping sauce and special salt. (v)" },
    ],
  },
  {
    title: "Side Dishes",
    items: [
      { name: "Edamame", price: "$12", description: "Boiled young soy beans. (v)" },
      { name: "Agedashi Tofu", price: "$18", description: "Deep-fried bean curd in soy-based sauce, nori and shallots. (v)" },
      { name: "Nasu Dengaku", price: "$18", description: "Deep-fried eggplant topped with house miso sauce. (v)" },
      { name: "Oshinko", price: "$10", description: "Assorted Japanese pickles. (v)" },
    ],
  },
];

export const drinks = {
  sake: {
    title: "Sake",
    note: "Five sakes from Kobe, Chiba, and Kyoto, plus a non-alcoholic option — poured by the restaurant that has run Canberra's sake list the longest.",
    items: [
      { name: "IORI Mocktail", description: "Popular Kyoho grape flavour, non-alcoholic." },
      { name: "Haku Shika House Sake", description: "Kobe (神戸)." },
      { name: "Kuromatsu", description: "Kobe (黒松生貯蔵) — premium, namachozo style, bottled." },
      { name: "Kido Izumi", description: "Chiba (木戸泉) — premium, junmai style, bottled." },
      { name: "Sennenju", description: "Kobe (白鹿千年壽) — premium junmai daiginjo, Monde Selection Award." },
      { name: "Tamano Hikari", description: "Kyoto (玉乃光) — premium daiginjo-shu, since 1673." },
    ],
  },
  wineNote:
    "An extensive list of Australian and New Zealand whites, reds, and sparkling — including a Canberra Region cabernet merlot, several Penfolds vintages, and French Champagne.",
  beer: [
    "Koshihikari Echigo (Echigo Rice Lager)",
    "Ippin & Ippin Black",
    "Sapporo (サッポロ黒生)",
    "Kirin Ichiban (キリンビール)",
    "Asahi Super Dry (アサヒスーパードライ)",
    "Cascade Premium Light",
  ],
  spiritsNote:
    "Classic spirits — rum, gin, vodka, whisky, and brandy — alongside soft drinks that include imported Japanese Ramune and Gen Mai Cha tea.",
};
