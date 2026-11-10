import type { PaisTranslation } from "../types";

export const PAISES_EN: Record<string, PaisTranslation> = {
  argentina: {
    name: "Argentina",
    subtitle: "The soul of vast horizons",
    giaMessage: "Hey there, what a joy! Make yourself at home.",
    antesDeViajar: [
      {
        title: "Currency",
        description:
          "The Argentine peso (ARS) is the official currency, although due to the local economic context, currency exchange is very common in tourism.",
      },
      {
        title: "Gastronomy",
        description:
          "A cuisine based on grilled meats, pastries, and traditional mate predominates, characterized by a strong European influence and balanced flavors.",
      },
      {
        title: "Language",
        description:
          "**Rioplatense Spanish,** distinguished worldwide by its 'voseo' and a marked Italian intonation that gives it a melodious personality.",
      },
      {
        title: "Seasons",
        description:
          "Located at the southern tip of the continent, it experiences all four seasons clearly: very cold winters and mild summers.",
      },
    ],
    destinos: [
      {
        id: "parque-nacional-los-glaciares",
        title: "Los Glaciares National Park",
        tag: "Frozen giant",
        description:
          "Home to towering masses of ancient ice such as Perito Moreno in Santa Cruz. An icy territory sculpted by time that invites you to discover southern majesty.",
      },
      {
        id: "serrania-de-hornocal",
        title: "Serranía de Hornocal",
        tag: "Ancestral prism",
        description:
          "The majestic hill of 14 colors located in the Quebrada de Humahuaca in Jujuy. A striking geological formation that captivates with its limestone folds and vivid hues.",
      },
      {
        id: "cataratas-del-iguazu",
        title: "Iguazú Falls",
        tag: "Waterfalls & jungle",
        description:
          "The most breathtaking waterfall system in the world, surrounded by dense Misiones rainforest. An overwhelming natural spectacle where water and mist merge into the landscape.",
      },
    ],
    curiosidades: [
      {
        text: "**Did you know that sharing 'mate' in Argentina is almost a sacred ritual of friendship?**\n\nHowever, there is a golden rule for tourists: you must never use the bombilla (the metal straw) to stir the herbs, as it is considered a serious sign of disrespect toward the person who prepared it.",
      },
      {
        text: "**Did you know that Argentina is home to some of the largest continental colonies of Magellanic penguins in the world?**\n\nIn places like Punta Tombo, visitors can literally walk alongside hundreds of thousands of penguins in their natural habitat.",
      },
      {
        text: "**Did you know that Argentina is a real-life Jurassic Park?**\n\nIn the Patagonia region, paleontologists discovered the remains of the Argentinosaurus, which at nearly 40 meters long is considered one of the largest land animals to have ever existed.",
      },
    ],
  },
  brasil: {
    name: "Brazil",
    subtitle: "The strength of the eternal jungle.",
    giaMessage: "Tudo bem! Feel the energy.",
    antesDeViajar: [
      {
        title: "Currency",
        description:
          "The Brazilian real (BRL) is the official currency, and the use of digital payments is completely widespread across all types of businesses.",
      },
      {
        title: "Gastronomy",
        description:
          "A cuisine based on rice, black beans, and cassava predominates, characterized by a rich balance of African, Indigenous, and European seasonings.",
      },
      {
        title: "Language",
        description:
          "**Portuguese,** spoken with a unique musicality and rhythm, full of cheerful and warm expressions that reflect the festive and hospitable spirit of its people.",
      },
      {
        title: "Seasons",
        description:
          "It experiences the four traditional seasons inverted relative to the northern hemisphere, with mild winters and intensely warm summers.",
      },
    ],
    destinos: [
      {
        id: "jardin-botanico-curitiba",
        title: "Curitiba Botanical Garden",
        tag: "Greenhouse",
        description:
          "A French Art Nouveau crystal palace surrounded by flawless geometric gardens. An architectural gem that shelters tropical flora and delights with visual symmetry.",
      },
      {
        id: "lencois-maranhenses",
        title: "Lençóis Maranhenses",
        tag: "Desert of lagoons",
        description:
          "An endless blanket of white sand dunes interspersed with thousands of turquoise freshwater lagoons. A unique geological miracle that merges an arid landscape with tropical rains.",
      },
      {
        id: "pedra-do-telegrafo",
        title: "Pedra do Telégrafo",
        tag: "Postcard viewpoint",
        description:
          "A famous rock in Rio de Janeiro that creates a stunning optical illusion of hanging over the void above the ocean. The perfect viewpoint to capture adrenaline and the Carioca coast.",
      },
    ],
    curiosidades: [
      {
        text: "**Did you know that although Brazil is the birthplace of açaí, it is rarely eaten there as a sweet dessert?**\n\nUnlike the fruit-and-granola bowl popularized worldwide, the traditional way to eat it in northern Brazil is as a savory side dish served with fried fish or shrimp and mixed with cassava flour.",
      },
      {
        text: "**Did you know that a tiny monkey that looks like a miniature lion lives in the forests of Brazil?**\n\nIt is the golden lion tamarin (mico-leão-dourado), an endemic species famous for its bright orange fur and abundant mane framing its face.",
      },
      {
        text: "**Did you know that New Year's Eve in Brazil is celebrated by jumping over ocean waves?**\n\nDuring the Réveillon festivities, millions of Brazilians dress completely in white and head to the beach at midnight to jump over seven consecutive waves, making a wish on each jump for good luck.",
      },
    ],
  },
  chile: {
    name: "Chile",
    subtitle: "The essence of living tradition",
    giaMessage: "Buena, po! Let's go explore.",
    antesDeViajar: [
      {
        title: "Currency",
        description:
          "The Chilean peso (CLP) is the official currency, supported by a modern financial system where cards and electronic payments are the commercial norm.",
      },
      {
        title: "Gastronomy",
        description:
          "A cuisine based on fresh seafood predominates, characterized by a balance of Indigenous Mapuche recipes and Spanish culinary heritage.",
      },
      {
        title: "Language",
        description:
          "**Spanish**, characterized by a unique speaking speed, a distinctive intonation, and a repertoire of local idioms that challenge every traveler.",
      },
      {
        title: "Seasons",
        description:
          "Stretching from the northern desert to the southern fjords, the country experiences four well-defined seasons with opposite extremes from north to south.",
      },
    ],
    destinos: [
      {
        id: "capillas-de-marmol",
        title: "Marble Caves",
        tag: "Lake cathedrals",
        description:
          "Majestic calcium carbonate formations sculpted by the waves of Lake General Carrera. A spectacle of sky-blue textures reflecting the pure azure of Patagonian waters.",
      },
      {
        id: "valle-nevado",
        title: "Valle Nevado",
        tag: "Kingdom of snow",
        description:
          "South America's premier ski resort at the foot of the towering Andes Mountains. A white paradise near Santiago that invites you to experience the mountains in full.",
      },
      {
        id: "volcan-villarrica",
        title: "Villarrica Volcano",
        tag: "Giant of fire",
        description:
          "A snow-capped volcano with a smoking summit watching over the lake and forests of Araucanía. Climbing to its crater is an unforgettable adventure to feel the power of the earth in Chile.",
      },
    ],
    curiosidades: [
      {
        text: "**Did you know that the local Chilean hot dog is called a 'completo italiano' for a strictly visual reason?**\n\nThe name does not come from a European recipe, but from its essential toppings—mashed avocado, mayonnaise, and diced tomato—which replicate the exact colors of the flag of Italy.",
      },
      {
        text: "**Did you know that the cold forests of southern Chile are home to the pudú?**\n\nIt is the smallest deer species in the world, standing barely 40 centimeters tall (about the size of a small dog), and is a very shy and adorable animal.",
      },
      {
        text: "**Did you know that the frequent Chilean expression 'po' has a documented historical origin?**\n\nIt is a phonetic contraction of the Spanish word 'pues', inherited from colonial Spanish, and has become an iconic conversational tag used for emphasis at the end of sentences.",
      },
    ],
  },
  colombia: {
    name: "Colombia",
    subtitle: "The charm of the land of biodiversity",
    giaMessage: "What's up, parce! Come on in.",
    antesDeViajar: [
      {
        title: "Currency",
        description:
          "The Colombian peso (COP) is the official currency, although credit cards and digital payment platforms are widely accepted throughout the country.",
      },
      {
        title: "Gastronomy",
        description:
          "A diverse cuisine based on corn, plantains, and tubers predominates, characterized by a perfect balance of traditional flavors, comforting broths, and local arepas.",
      },
      {
        title: "Language",
        description:
          "**Spanish**, renowned for its clear pronunciation and a wealth of warm, polite expressions that reflect the signature hospitality of its regions.",
      },
      {
        title: "Seasons",
        description:
          "As a tropical country, there are no traditional four seasons, but rather two main climatic periods: the dry season (summer) and the rainy season (winter).",
      },
    ],
    destinos: [
      {
        id: "ciudad-perdida",
        title: "Lost City",
        tag: "Ancestral treasure",
        description:
          "The ancient sacred city of the Tayrona people, hidden deep in the jungle of the Sierra Nevada de Santa Marta. A legendary trek across rivers and mountains to uncover Colombia's ancient mysteries.",
      },
      {
        id: "eje-cafetero",
        title: "Coffee Axis",
        tag: "Coffee lands",
        description:
          "Green valleys planted with coffee groves among mountains and traditional Paisa towns. A land of aromas, birds, and landscapes that invites you to live the rural soul of Colombia.",
      },
      {
        id: "santuario-las-lajas",
        title: "Las Lajas Sanctuary",
        tag: "Mystic temple",
        description:
          "An imposing neo-Gothic church built over a deep canyon in Ipiales. An architectural miracle that defies gravity and invites you to discover Andean faith and mystery.",
      },
    ],
    curiosidades: [
      {
        text: "**Did you know that in Colombia it is a beloved culinary tradition to put cheese inside hot chocolate?**\n\nEspecially in cooler highland regions like Bogotá and the Coffee Axis, people drop pieces of white cheese into their steaming cup so it melts, creating a delicious sweet-and-salty blend.",
      },
      {
        text: "**Did you know that the rainforests of the Colombian Pacific are home to the golden poison frog?**\n\nDespite measuring barely five centimeters and displaying a bright yellow color, it is considered the most poisonous vertebrate on Earth.",
      },
      {
        text: "**Did you know that the iconic 'sombrero vueltiao' carries hidden messages in its woven design?**\n\nThe black-and-white geometric patterns woven from caña flecha fibers by the Indigenous Zenú community represent elements of nature, family clans, and ancestral mathematical concepts.",
      },
    ],
  },
  mexico: {
    name: "Mexico",
    subtitle: "The essence of living tradition",
    giaMessage: "What's up, compa! Come on in.",
    antesDeViajar: [
      {
        title: "Currency",
        description:
          "The Mexican peso (MXN) is the official currency, although credit cards and US dollars (USD) in cash are widely accepted in tourist shops and services.",
      },
      {
        title: "Gastronomy",
        description:
          "A cuisine based on corn, chili peppers, and beans predominates—declared Intangible Cultural Heritage of Humanity and celebrated for its balance of flavors.",
      },
      {
        title: "Language",
        description:
          "**Spanish,** enriched with linguistic diversity and world-famous idioms that reflect the wit, warmth, and hospitality of its people.",
      },
      {
        title: "Seasons",
        description:
          "Seasons vary by region: the **north** experiences extreme temperatures, while the **center** and **south** alternate between dry and rainy seasons.",
      },
    ],
    destinos: [
      {
        id: "hierve-el-agua",
        title: "Hierve el Agua",
        tag: "Geological wonder",
        description:
          "Home to ancient petrified waterfalls and natural mineral pools overlooking the mountains. A mystical territory sculpted by time in Oaxaca that invites you to discover the purest energy of Mexican nature.",
      },
      {
        id: "castillo-de-chapultepec",
        title: "Chapultepec Castle",
        tag: "Historic Palace",
        description:
          "The only royal palace on the entire continent, perched atop the forest hill of Mexico City. A historic guardian surrounded by grand gardens that preserves the nation's colonial and imperial memory.",
      },
      {
        id: "tulum",
        title: "Tulum",
        tag: "Caribbean ruins",
        description:
          "An ancient Mayan city rising atop a cliff overlooking the Caribbean Sea. An archaeological destination surrounded by turquoise waters that blends pre-Hispanic history with natural beauty.",
      },
    ],
    curiosidades: [
      {
        text: '**Did you know that in Mexico eating insects is not an extreme dare, but a prized pre-Hispanic delicacy?**\n\n"Chapulines" (toasted grasshoppers) are seasoned with salt, lime, and chili, and are a crunchy snack commonly bought in local markets.',
      },
      {
        text: "**Did you know that Mexico is the exclusive natural home of the axolotl?**\n\nThis remarkable amphibian, famous for looking as though it is always smiling, is studied by scientists worldwide for its astonishing ability to regenerate limbs and even parts of its heart and brain.",
      },
      {
        text: "**Did you know that Mexicans have such a festive relationship with death that families hold celebrations in cemeteries?**\n\nInstead of silent mourning on Day of the Dead, families spend the night beside their loved ones' graves with music, food, and marigold flowers, turning cemeteries into a vibrant tribute to life.",
      },
    ],
  },
  peru: {
    name: "Peru",
    subtitle: "The essence of ancestral tradition",
    giaMessage: "Hello, causita! Step right in.",
    antesDeViajar: [
      {
        title: "Currency",
        description:
          "The sol (PEN) is the official currency, with cash recommended for local markets while cards are widely accepted in major businesses.",
      },
      {
        title: "Gastronomy",
        description:
          "A cuisine based on native potatoes and fresh seafood predominates, acclaimed worldwide for its balance of ancestral techniques and modern fusion.",
      },
      {
        title: "Language",
        description:
          "Spanish, enriched by a strong presence of native languages such as Quechua and Aymara, contributing unique cultural expressions full of history.",
      },
      {
        title: "Seasons",
        description:
          "With a complex geography spanning coast, highlands, and jungle, seasons vary: the Andes and Amazon alternate between dry and heavy rainy seasons.",
      },
    ],
    destinos: [
      {
        id: "isla-ballestas",
        title: "Ballestas Islands",
        tag: "Marine sanctuary",
        description:
          "A rocky archipelago bustling with sea lions and seabirds off the coast of Paracas. A boat ride among dramatic cliffs that invites you to discover the wildlife of the Peruvian Pacific.",
      },
      {
        id: "montana-7-colores",
        title: "Rainbow Mountain",
        tag: "Mineral rainbow",
        description:
          "An imposing Andean peak dyed with stripes of diverse minerals at over 5,000 meters above sea level. A visual spectacle that defies the horizon with its vivid colorful folds.",
      },
      {
        id: "oasis-huacachina",
        title: "Huacachina Oasis",
        tag: "Desert pearl",
        description:
          "An emerald lagoon embraced by golden dunes in the heart of the Ica desert. A postcard setting where sandboarding and dune buggy adventures let you feel the energy of the Peruvian desert.",
      },
    ],
    curiosidades: [
      {
        text: "**Did you know that Peruvian gastronomy features a unique culinary fusion called 'Chifa'?**\n\nIt is the spectacular result of blending traditional Andean ingredients with the cooking techniques brought by thousands of Chinese immigrants who arrived in the 19th century.",
      },
      {
        text: "**Did you know that the 'Peruvian Hairless Dog' is an ancient canine breed that the Incas used as a living 'hot water bottle'?**\n\nIts body temperature feels naturally warmer to the touch to compensate for its lack of fur, making it wonderful to cuddle with in cold mountain climates.",
      },
      {
        text: "**Did you know that Peru is a paradise of agricultural diversity?**\n\nFarmers cultivate more than 3,000 varieties of potatoes in every imaginable color, shape, and texture, and traditional Andean corn produces kernels as large as a coin.",
      },
    ],
  },
  repdominicana: {
    name: "Dominican Republic",
    subtitle: "The Caribbean paradise",
    giaMessage: "Dime a ver! You've arrived in paradise.",
    antesDeViajar: [
      {
        title: "Currency",
        description:
          "The Dominican peso (DOP) is the official currency, although US dollars (USD) and euros (EUR) are widely accepted in the country's main tourist hubs.",
      },
      {
        title: "Gastronomy",
        description:
          "A Creole cuisine based on rice, beans, plantains, and braised meats predominates, characterized by a rich balance of Caribbean seasoning and ocean freshness.",
      },
      {
        title: "Language",
        description:
          "**Spanish**, spoken at a lively pace with a cheerful intonation and unique Caribbean warmth filled with idioms that reflect the hospitable essence of its people.",
      },
      {
        title: "Seasons",
        description:
          "As a tropical country, there are no traditional four seasons, but rather two climatic periods: the dry season (summer) and the rainy season (winter).",
      },
    ],
    destinos: [
      {
        id: "punta-cana",
        title: "Punta Cana",
        tag: "Caribbean Eden",
        description:
          "A paradise of mile-long white-sand beaches and coconut palms facing a turquoise sea. The ultimate tropical destination combining pure relaxation with natural beauty.",
      },
      {
        id: "parque-3-ojos",
        title: "Three Eyes National Park",
        tag: "Lagoons & caverns",
        description:
          "Three crystal-clear lagoons and a limestone cavern that form one of the country's most visited parks. A sanctuary where underground water emerges into natural pools.",
      },
      {
        id: "altos-de-chavon",
        title: "Altos de Chavón",
        tag: "Renaissance village",
        description:
          "A replica of a 16th-century Mediterranean village built in stone and adobe, surrounded by botanical gardens and overlooking the Chavón River.",
      },
    ],
    curiosidades: [
      {
        text: "**Did you know that the Dominican Republic is the only place on Earth where Larimar is mined?**\n\nIt is a stunning sky-blue and turquoise semi-precious stone that mirrors the colors of the Caribbean Sea, making it the most sought-after jewelry souvenir for visitors.",
      },
      {
        text: "**Did you know that the island is home to an endemic reptile called the 'rhinoceros iguana'?**\n\nDespite its intimidating look and the small horn-like scales on its snout that make it resemble a miniature dinosaur, it is herbivorous and completely harmless.",
      },
      {
        text: "**Did you know that the most famous characters of the Dominican Carnival are the colorful 'Diablos Cojuelos'?**\n\nThey wear costumes covered in mirrors, bells, and bright ribbons to mock evil spirits, and their tradition includes playfully tapping spectators in the streets to 'chase away bad energy'.",
      },
    ],
  },
  venezuela: {
    name: "Venezuela",
    subtitle: "The magic of the land of grace.",
    giaMessage: "Hey there, chamo! Get ready for the trip.",
    antesDeViajar: [
      {
        title: "Currency",
        description:
          "The **bolívar (VES)** is the official currency, although the use of US dollars (USD) in cash is widespread in shops and services.",
      },
      {
        title: "Gastronomy",
        description:
          "A cuisine based on corn, seasoned meats, and fresh cheeses predominates, characterized by a perfect balance of rich, vibrant flavors.",
      },
      {
        title: "Language",
        description:
          "**Spanish,** spoken with a unique warmth \n and full of iconic colloquial \n expressions that will make you \n feel right at home.",
      },
      {
        title: "Seasons",
        description:
          "As a tropical country, there are no traditional four seasons, but rather two climatic periods: the dry season **(summer)** and the rainy season **(winter)**.",
      },
    ],
    destinos: [
      {
        id: "canaima",
        title: "Canaima National Park",
        tag: "Natural heritage",
        description:
          "Home to ancient tepuis and Angel Falls, the highest uninterrupted waterfall on the planet. A territory sculpted by time that invites you to discover the purest energy of nature.",
      },
      {
        id: "colonia-tovar",
        title: "Colonia Tovar",
        tag: "German Corner",
        description:
          "A picturesque European village founded high in the mountains of the Coastal Range. A mystical destination where timber architecture and mountain mist fuse Andean and German traditions.",
      },
      {
        id: "isla-larga",
        title: "Isla Larga",
        tag: "Caribbean refuge",
        description:
          "A paradise island in San Esteban National Park with white sands and coral reefs. A marine haven ideal for exploring historic shipwrecks in crystal-clear waters.",
      },
    ],
    curiosidades: [
      {
        text: "**Did you know that Venezuela is one of the few countries in the world where you can experience almost every climate?**\n\nOn a single trip you can go from the desert sand dunes of Médanos de Coro, to tropical rainforests, and end up touching snow on the peaks of the Andes Mountains.",
      },
      {
        text: '**Did you know that the capybara (chigüire) is the largest rodent in the world and inhabits the Venezuelan plains?**\n\nHistorically, the Vatican allowed Venezuelans to eat it during Holy Week by classifying it alongside "fish" due to its semi-aquatic habits.',
      },
      {
        text: "**Did you know that Venezuela has a curious New Year's Eve tradition to attract travel?**\n\nAt the exact stroke of midnight on January 1st, it is customary to walk or run down the street pulling a suitcase. According to popular belief, this guarantees a new year filled with trips and adventures.",
      },
    ],
  },
};
