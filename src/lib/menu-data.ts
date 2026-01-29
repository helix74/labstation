/**
 * Lab Station - Menu Data
 * Prix en Dinars Tunisiens (DT)
 * Données extraites du menu officiel
 */

export type MenuCategory = "burger" | "taco" | "sides" | "drinks";

export type MenuItem = {
  id: string;
  symbol: string; // Symbole "Table Périodique" (2-3 lettres)
  name: string;
  category: MenuCategory;
  price: number; // Prix en DT (pour burgers: prix unique, pour tacos: taille L)
  price2XL?: number; // Prix 2XL pour tacos
  description_fr: string;
  description_derja: string;
  ingredients: string[];
  image?: string; // Path to product image
  isSignature?: boolean;
  isSpicy?: boolean;
  spicyLevel?: 1 | 2 | 3; // 1: mild, 2: spicy, 3: super spicy
};

// ═══════════════════════════════════════════════════════════════════════════
// SIGNATURE BURGERS
// ═══════════════════════════════════════════════════════════════════════════

export const signatureBurgers: MenuItem[] = [
  {
    id: "crispy-chicken",
    symbol: "Cc",
    name: "Crispy Chicken",
    category: "burger",
    price: 16.9,
    description_fr:
      "Poulet croustillant, laitue, burger sauce, gruyère, tomate, oignons, cornichons",
    description_derja:
      "Djej crispy mta3na, b sauce special w fromage fondant. Benna garantie!",
    ingredients: [
      "Poulet croustillant",
      "Laitue",
      "Burger sauce",
      "Gruyère",
      "Tomate",
      "Oignons",
      "Cornichons",
    ],
    image: "/images/products/crispy_chicken_burger.webp",
    isSignature: false,
  },
  {
    id: "classic",
    symbol: "Cl",
    name: "Classic",
    category: "burger",
    price: 16.9,
    description_fr:
      "Steak haché, cheddar, burger sauce, laitue, tomate, oignons, cornichons",
    description_derja: "El classique mta3na! Steak juteux w cheddar fondant.",
    ingredients: [
      "Steak haché",
      "Cheddar",
      "Burger sauce",
      "Laitue",
      "Tomate",
      "Oignons",
      "Cornichons",
    ],
    image: "/images/products/classic_burger.webp",
    isSignature: false,
  },
  {
    id: "double",
    symbol: "Db",
    name: "Double",
    category: "burger",
    price: 25.9,
    description_fr:
      "Double steak haché, cheddar, burger sauce, laitue, tomate, oignons, cornichons",
    description_derja: "Double la3b! Zouz steaks, zouz fois el benna.",
    ingredients: [
      "Double steak haché",
      "Cheddar",
      "Burger sauce",
      "Laitue",
      "Tomate",
      "Oignons",
      "Cornichons",
    ],
    image: "/images/products/double_burger.webp",
    isSignature: false,
  },
  {
    id: "triple",
    symbol: "Tr",
    name: "Triple",
    category: "burger",
    price: 29.9,
    description_fr:
      "Triple steak haché, cheddar, burger sauce, laitue, tomate, oignons, cornichons",
    description_derja:
      "Triple threat! Tletha steaks lel les champions seulement.",
    ingredients: [
      "Triple steak haché",
      "Cheddar",
      "Burger sauce",
      "Laitue",
      "Tomate",
      "Oignons",
      "Cornichons",
    ],
    image: "/images/products/triple_burger.webp",
    isSignature: false,
  },
  {
    id: "scrambled-eggs",
    symbol: "Se",
    name: "Scrambled Eggs",
    category: "burger",
    price: 19.9,
    description_fr: "Steak haché, gruyère, lab sauce, oignons, œuf brouillé",
    description_derja: "Burger wel 3adhem! Steak w œuf cremeux.",
    ingredients: [
      "Steak haché",
      "Gruyère",
      "Lab sauce",
      "Oignons",
      "Œuf brouillé",
    ],
    image: "/images/products/scrambled_eggs_burger.webp",
    isSignature: false,
  },
  {
    id: "mr-bacon",
    symbol: "Bc",
    name: "Mr Bacon",
    category: "burger",
    price: 23.9,
    description_fr:
      "Steak haché, bacon, cheddar, lab sauce, bacon sauce, œuf, oignons sautés",
    description_derja: "Mr Bacon fi el place! Bacon crispy w sauce maison.",
    ingredients: [
      "Steak haché",
      "Bacon",
      "Cheddar",
      "Lab sauce",
      "Bacon sauce",
      "Œuf",
      "Oignons sautés",
    ],
    image: "/images/products/mr_bacon_burger.webp",
    isSignature: true,
  },
  {
    id: "texas-ribs",
    symbol: "Tx",
    name: "Texas Ribs",
    category: "burger",
    price: 29.9,
    description_fr:
      "Viande ribs fumée, lab sauce, sauce brisket, mozzarella, gruyère, cheddar, oignons caramélisés, roquette, crispy potato, tapenade",
    description_derja:
      "Texas style! Ribs mfawwar w sauce signature. Yekhdem behi!",
    ingredients: [
      "Viande ribs fumée",
      "Lab sauce",
      "Sauce brisket",
      "Mozzarella",
      "Gruyère",
      "Cheddar",
      "Oignons caramélisés",
      "Roquette",
      "Crispy potato",
      "Tapenade",
    ],
    image: "/images/products/texas_ribs_burger.webp",
    isSignature: true,
  },
  {
    id: "100-meat",
    symbol: "Mt",
    name: "100% Meat",
    category: "burger",
    price: 39.9,
    description_fr:
      "Steak haché, viande brisket, viande ribs, mozzarella, cheddar, gruyère, oignons caramélisés, roquette, cornichons, tapenade",
    description_derja:
      "100% viande, 0% blague! Triple viande fumée lel les vrais carnivores.",
    ingredients: [
      "Steak haché",
      "Viande brisket",
      "Viande ribs",
      "Mozzarella",
      "Cheddar",
      "Gruyère",
      "Oignons caramélisés",
      "Roquette",
      "Cornichons",
      "Tapenade",
    ],
    image: "/images/products/100_meat_burger.webp",
    isSignature: true,
  },
  {
    id: "brisket-lab",
    symbol: "Bl",
    name: "Brisket Lab",
    category: "burger",
    price: 26.9,
    description_fr:
      "Viande brisket fumée, lab sauce, sauce brisket, mozzarella, gruyère, cheddar, crispy potato, tapenade",
    description_derja: "Brisket mfawwar 12 heures. Fondant kima el beurre!",
    ingredients: [
      "Viande brisket fumée",
      "Lab sauce",
      "Sauce brisket",
      "Mozzarella",
      "Gruyère",
      "Cheddar",
      "Crispy potato",
      "Tapenade",
    ],
    image: "/images/products/brisket_lab_burger.webp",
    isSignature: true,
  },
  {
    id: "creamy-mushroom",
    symbol: "Cm",
    name: "Creamy Mushroom",
    category: "burger",
    price: 23.9,
    description_fr:
      "Steak haché, lab sauce, sauce brisket, mozzarella, oignons caramélisés, sauce aux champignons blancs",
    description_derja:
      "Champignons crémeux w viande juteuse. Combinaison mortelle!",
    ingredients: [
      "Steak haché",
      "Lab sauce",
      "Sauce brisket",
      "Mozzarella",
      "Oignons caramélisés",
      "Sauce aux champignons blancs",
    ],
    image: "/images/products/creamy_mushroom_burger.webp",
    isSignature: false,
  },
  {
    id: "monto-cinto",
    symbol: "Mc",
    name: "Monto Cinto",
    category: "burger",
    price: 28.9,
    description_fr:
      "Steak haché, lab sauce, pesto, parmesan, mozzarella, olives",
    description_derja: "Italian vibes! Pesto frais w parmesan. Buonissimo!",
    ingredients: [
      "Steak haché",
      "Lab sauce",
      "Pesto",
      "Parmesan",
      "Mozzarella",
      "Olives",
    ],
    image: "/images/products/monto_cinto_burger.webp",
    isSignature: false,
  },
  {
    id: "spicy",
    symbol: "Sp",
    name: "Spicy / Super Spicy",
    category: "burger",
    price: 28.9,
    description_fr:
      "Steak haché, cheddar, sauce spicy ou super spicy, planet rouge",
    description_derja:
      "Attention danger! Sauce spicy lel les braves seulement. 🔥",
    ingredients: ["Steak haché", "Cheddar", "Sauce spicy", "Planet rouge"],
    image: "/images/products/spicy_burger.webp",
    isSignature: false,
    isSpicy: true,
    spicyLevel: 2,
  },
  {
    id: "truffle",
    symbol: "Tf",
    name: "Truffle",
    category: "burger",
    price: 25.9,
    description_fr:
      "Steak haché, sauce truffette, lab sauce, mozzarella, roquette",
    description_derja: "Luxe mta3 el lab! Truffe + burger = perfection.",
    ingredients: [
      "Steak haché",
      "Sauce truffette",
      "Lab sauce",
      "Mozzarella",
      "Roquette",
    ],
    image: "/images/products/truffle_burger.webp",
    isSignature: true,
  },
  {
    id: "full-cheese",
    symbol: "Fc",
    name: "Full Cheese",
    category: "burger",
    price: 21.9,
    description_fr:
      "Steak haché façon raclette, gruyère, cheddar, mozzarella, sauce fromagère",
    description_derja: "Cheese lovers only! 4 fromages fondants. Mamma mia!",
    ingredients: [
      "Steak haché",
      "Façon raclette",
      "Gruyère",
      "Cheddar",
      "Mozzarella",
      "Sauce fromagère",
    ],
    image: "/images/products/full_cheese_burger.webp",
    isSignature: false,
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// SIGNATURE TACOS
// ═══════════════════════════════════════════════════════════════════════════

export const signatureTacos: MenuItem[] = [
  {
    id: "taco-classic",
    symbol: "Tc",
    name: "Classic",
    category: "taco",
    price: 12.9,
    price2XL: 17.9,
    description_fr:
      "Poulet grillé, lab sauce, spicy sauce, oignons caramélisés, frites, sauce fromagère",
    description_derja:
      "El classique mta3 el tacos! Poulet grillé w sauce fromagère.",
    ingredients: [
      "Poulet grillé",
      "Lab sauce",
      "Spicy sauce",
      "Oignons caramélisés",
      "Frites",
      "Sauce fromagère",
    ],
    isSignature: false,
  },
  {
    id: "taco-crispy",
    symbol: "Cy",
    name: "Crispy",
    category: "taco",
    price: 12.9,
    price2XL: 17.9,
    description_fr:
      "Poulet pané, lab sauce, spicy sauce, frites, sauce fromagère, oignons caramélisés",
    description_derja: "Poulet crispy mta3na! Croustillant barcha.",
    ingredients: [
      "Poulet pané",
      "Lab sauce",
      "Spicy sauce",
      "Frites",
      "Sauce fromagère",
      "Oignons caramélisés",
    ],
    isSignature: false,
  },
  {
    id: "taco-super-spicy",
    symbol: "Ss",
    name: "Super Spicy",
    category: "taco",
    price: 13.9,
    price2XL: 18.9,
    description_fr:
      "Poulet épicé, super spicy sauce, oignons caramélisés, frites, sauce fromagère",
    description_derja:
      "Attention radioactif! 🔥 Sauce super spicy lel les warriors.",
    ingredients: [
      "Poulet épicé",
      "Super spicy sauce",
      "Oignons caramélisés",
      "Frites",
      "Sauce fromagère",
    ],
    isSignature: false,
    isSpicy: true,
    spicyLevel: 3,
  },
  {
    id: "taco-creamy-mushroom",
    symbol: "Tm",
    name: "Creamy Mushroom",
    category: "taco",
    price: 14.9,
    price2XL: 19.9,
    description_fr:
      "Poulet à la crème, champignons, lab sauce, oignons caramélisés, frites, sauce fromagère",
    description_derja: "Crémeux w délicieux! Champignons frais w poulet.",
    ingredients: [
      "Poulet à la crème",
      "Champignons",
      "Lab sauce",
      "Oignons caramélisés",
      "Frites",
      "Sauce fromagère",
    ],
    isSignature: false,
  },
  {
    id: "taco-full-cheese",
    symbol: "Tf",
    name: "Full Cheese",
    category: "taco",
    price: 16.9,
    price2XL: 21.9,
    description_fr:
      "Poulet pané ou grillé, lab sauce, cheddar, gruyère, mozzarella, frites, sauce fromagère",
    description_derja: "Triple fromage! Fondant level maximale.",
    ingredients: [
      "Poulet pané ou grillé",
      "Lab sauce",
      "Cheddar",
      "Gruyère",
      "Mozzarella",
      "Frites",
      "Sauce fromagère",
    ],
    isSignature: false,
  },
  {
    id: "taco-viande-hachee",
    symbol: "Vh",
    name: "Viande Hachée",
    category: "taco",
    price: 14.9,
    price2XL: 19.9,
    description_fr:
      "Viande hachée, lab sauce, sauce au poivre, spicy sauce, oignons caramélisés, crispy potato, sauce fromagère",
    description_derja: "Viande hachée w sauce poivre. Classique upgraded!",
    ingredients: [
      "Viande hachée",
      "Lab sauce",
      "Sauce au poivre",
      "Spicy sauce",
      "Oignons caramélisés",
      "Crispy potato",
      "Sauce fromagère",
    ],
    isSignature: false,
  },
  {
    id: "taco-brisket-lab",
    symbol: "Tb",
    name: "Brisket Lab",
    category: "taco",
    price: 23.9,
    price2XL: 29.9,
    description_fr:
      "Viande brisket fumée, brisket sauce, spicy sauce, oignons caramélisés, crispy potato, sauce fromagère",
    description_derja: "Brisket mfawwar fil taco! Premium level.",
    ingredients: [
      "Viande brisket fumée",
      "Brisket sauce",
      "Spicy sauce",
      "Oignons caramélisés",
      "Crispy potato",
      "Sauce fromagère",
    ],
    isSignature: true,
  },
  {
    id: "taco-texas-ribs",
    symbol: "Tr",
    name: "Texas Ribs",
    category: "taco",
    price: 24.9,
    price2XL: 33.9,
    description_fr:
      "Viande ribs fumée, brisket sauce, spicy sauce, oignons caramélisés, crispy potato, sauce fromagère",
    description_derja: "Texas vibes fil taco! Ribs fumé w sauce signature.",
    ingredients: [
      "Viande ribs fumée",
      "Brisket sauce",
      "Spicy sauce",
      "Oignons caramélisés",
      "Crispy potato",
      "Sauce fromagère",
    ],
    isSignature: true,
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// RESTAURANT INFO
// ═══════════════════════════════════════════════════════════════════════════

export const restaurantInfo = {
  name: "The Lab Station",
  tagline: "The Lab is Working! 🥼🔥",
  tagline_derja: "El Lab khaddém! Benna scientifiquement prouvée.",
  address: "Av. Hédi Nouira, Ariana, Tunisie",
  phone: "+216 21 722 108",
  instagram: "@labstation_tn", // À confirmer
  founder: "Moudi Food",
  philosophy:
    "Chez Lab Station, on ne plaisante pas avec la qualité ! Nos viandes sont 100% fraîches, locales et premium.",
  philosophy_derja:
    "Fil Lab Station, ma na3mlouch compromis 3al qualité! Viande 100% fraîche w premium.",
};

// ═══════════════════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════════════════

export const allMenuItems: MenuItem[] = [
  ...signatureBurgers,
  ...signatureTacos,
];

export const getItemsByCategory = (category: MenuCategory): MenuItem[] =>
  allMenuItems.filter((item) => item.category === category);

export const getSignatureItems = (): MenuItem[] =>
  allMenuItems.filter((item) => item.isSignature);

export const getSpicyItems = (): MenuItem[] =>
  allMenuItems.filter((item) => item.isSpicy);

export const formatPrice = (price: number): string => `${price.toFixed(1)} DT`;
