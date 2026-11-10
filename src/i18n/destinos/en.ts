import type { DestinoTranslation } from "../types";

export const DESTINOS_EN: Record<string, DestinoTranslation> = {
  // Argentina
  "parque-nacional-los-glaciares": {
    name: "Los Glaciares National Park",
    tag: "Frozen giant",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Cold and windy subpolar climate; summer highs reach 15 °C and winter temperatures drop below 0 °C.",
      },
      {
        title: "Transport",
        description:
          "Direct flights to El Calafate (FTE) and paved Route 11 to the Perito Moreno walkways or buses to El Chaltén.",
      },
      {
        title: "Best Time",
        description:
          "From October to April, with longer daylight hours and open mountain trails.",
      },
    ],
    animalesDescription:
      "Home to the Andean condor, the South Andean deer (huemul), guanacos, red foxes, and the puma across the Patagonian steppe and subantarctic forest.",
    actividadesDescription:
      "Walk the panoramic balconies facing Perito Moreno, sail across Lake Argentino, hike with crampons on the glacier, and trek to Mount Fitz Roy.",
  },
  "serrania-de-hornocal": {
    name: "Serranía de Hornocal",
    tag: "Ancestral prism",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Dry high-mountain climate at 4,350 m above sea level: strong daytime sun, cold winds, and wide thermal amplitude.",
      },
      {
        title: "Transport",
        description:
          "From Humahuaca, ascend 25 km along gravel Provincial Route 73 in authorized 4x4 vehicles.",
      },
      {
        title: "Best Time",
        description:
          "From April to November (dry season); visit in the afternoon when sunlight illuminates all 14 colors.",
      },
    ],
    animalesDescription:
      "Vicuñas, guanacos, Andean condors, mountain chinchillas, and Andean flamingos inhabit the high-altitude lagoons of Jujuy.",
    actividadesDescription:
      "Panoramic photography from the 4,350 m viewpoint, guided walks along the Quebrada de Humahuaca, and cultural visits to Uquía and Purmamarca.",
  },
  "cataratas-del-iguazu": {
    name: "Iguazú Falls",
    tag: "Natural wonder",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Humid subtropical climate year-round, with temperatures ranging between 18 °C and 33 °C.",
      },
      {
        title: "Transport",
        description:
          "Flights to Puerto Iguazú (IGR), urban buses to the National Park, and the Ecological Jungle Train inside the reserve.",
      },
      {
        title: "Best Time",
        description:
          "March to May and August to October for pleasant temperatures and balanced water flow.",
      },
    ],
    animalesDescription:
      "Toucans, coatis, capuchin monkeys, plush-crested jays, colorful butterflies, and the jaguar in the Atlantic rainforest.",
    actividadesDescription:
      "Walk the Upper and Lower Circuits, stand over the Devil's Throat balcony, take the Great Adventure boat ride, and explore Macuco Trail.",
  },

  // Brasil
  "jardin-botanico-curitiba": {
    name: "Curitiba Botanical Garden",
    tag: "Iconic greenhouse",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Temperate subtropical highland climate (12 °C to 26 °C), with cool winters and mild summers.",
      },
      {
        title: "Transport",
        description:
          "Accessible via the Turismo Line double-decker bus, urban BRT buses, or ride apps from downtown Curitiba.",
      },
      {
        title: "Best Time",
        description:
          "September to November (spring) when the geometric French-style flowerbeds are in full bloom.",
      },
    ],
    animalesDescription:
      "Southern lapwings (quero-quero), capybaras, rufous-bellied thrushes, hummingbirds, and native bees among araucaria forests.",
    actividadesDescription:
      "Tour the iconic three-domed Art Nouveau glasshouse, walk the Garden of Sensations blindfolded, and visit the Franz Krajcberg botanical museum.",
  },
  "lencois-maranhenses": {
    name: "Lençóis Maranhenses",
    tag: "Flooded desert",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Warm tropical climate year-round (26 °C to 32 °C), with rains from January to May that fill the freshwater lagoons.",
      },
      {
        title: "Transport",
        description:
          "Transfer from São Luís (SLZ) to Barreirinhas, Santo Amaro, or Atins, followed by certified 4x4 jardineira vehicles and speedboats.",
      },
      {
        title: "Best Time",
        description:
          "From May to September, when the rainwater lagoons reach their highest crystal-clear levels under sunny skies.",
      },
    ],
    animalesDescription:
      "Scarlet ibises (guarás),jaçanãs, wolf fish (traíras) adapted to seasonal lagoons, sea turtles, and crab-eating foxes.",
    actividadesDescription:
      "Swim in Lagoa Bonita and Lagoa Azul at sunset, navigate the Preguiças River to Caburé, and practice kitesurfing in Atins.",
  },
  "pedra-do-telegrafo": {
    name: "Pedra do Telégrafo",
    tag: "Visual abyss",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Humid tropical coastal climate (20 °C to 32 °C); early morning starts are recommended to avoid midday heat.",
      },
      {
        title: "Transport",
        description:
          "Take the BRT TransOeste to Ilha de Guaratiba and connect by local bus or taxi to Praia Grande de Guaratiba.",
      },
      {
        title: "Best Time",
        description:
          "From April to October (drier, cooler months with clear views over the Wild Beaches and Restinga da Marambaia).",
      },
    ],
    animalesDescription:
      "Marmosets (micos-estrela), tiê-sangue tanagers, frigatebirds, toucans, and sloth species in the Pedra Branca State Park.",
    actividadesDescription:
      "Hike the Morro de Guaratiba trail, take the famous perspective photo on the cliff stone, and kayak through the Guaratiba mangroves.",
  },

  // Chile
  "capillas-de-marmol": {
    name: "Marble Caves",
    tag: "Lake cathedrals",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Cold Patagonian climate with brisk winds over Lake General Carrera (5 °C to 18 °C).",
      },
      {
        title: "Transport",
        description:
          "Fly to Balmaceda (BBA) and drive 220 km south along the scenic Carretera Austral (Route 7) to Puerto Río Tranquilo.",
      },
      {
        title: "Best Time",
        description:
          "From November to March for calmer navigation, or early spring when the glacial water turns its brightest turquoise.",
      },
    ],
    animalesDescription:
      "Andean condors, culpeo foxes, huemul deer, upland geese (caiquenes), and Patagonian woodpeckers along the lake basin.",
    actividadesDescription:
      "Kayak or take a boat tour through the Marble Cathedral, Chapel, and caverns, plus glacier trekking on the Exploradores Glacier.",
  },
  "valle-nevado": {
    name: "Valle Nevado",
    tag: "Alpine summit",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "High-Andean alpine climate at 3,025 m: sub-zero winter snowfalls (-10 °C to 5 °C) and crisp dry summers.",
      },
      {
        title: "Transport",
        description:
          "Located 60 km from Santiago via Route G-21 and G-25 with 60 mountain switchbacks; tire chains and 4x4 transfers are required in winter.",
      },
      {
        title: "Best Time",
        description:
          "From June to September for skiing and snowboarding; October to March for high-Andes trekking and condor watching.",
      },
    ],
    animalesDescription:
      "Majestic Andean condors soaring at eye level, mountain vizcachas, culpeo foxes, and black-chested buzzard-eagles.",
    actividadesDescription:
      "Ski and snowboard across 900 hectares of trails, ride the panoramic gondola, and enjoy sunset views over Mount El Plomo.",
  },
  "volcan-villarrica": {
    name: "Villarrica Volcano",
    tag: "Active guardian",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Temperate rainy lake-district climate at the base and icy high-mountain winds at the 2,847 m summit.",
      },
      {
        title: "Transport",
        description:
          "Flights to Temuco (ZCO), 1.5-hour transfer to Pucón, and 4x4 transport to the ski center base inside Villarrica National Park.",
      },
      {
        title: "Best Time",
        description:
          "November to March for summit ascents on stable snow, and July to September for winter sports on its slopes.",
      },
    ],
    animalesDescription:
      "Pudús (the world's smallest deer), Magellanic woodpeckers, monito del monte marsupials, and Andean condors.",
    actividadesDescription:
      "Guided summit ascent with crampons and ice axe, volcanic cave exploration, snowsledding down the slopes, and soaking in Geometric Hot Springs.",
  },

  // Colombia
  "ciudad-perdida": {
    name: "Lost City (Teyuna)",
    tag: "Archaeological trace",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Warm and humid tropical rainforest climate (22 °C to 30 °C) with frequent afternoon showers.",
      },
      {
        title: "Transport",
        description:
          "4x4 transfer from Santa Marta to El Mamey (Machete Pelao), followed by a 4-to-5-day guided jungle trek.",
      },
      {
        title: "Best Time",
        description:
          "December to March and July to August (note: the park closes in September for indigenous spiritual cleansing).",
      },
    ],
    animalesDescription:
      "Toucans, howler monkeys, poison dart frogs, jaguars, and endemic birds of the Sierra Nevada Biosphere Reserve.",
    actividadesDescription:
      "Multi-day jungle trekking across the Buritaca River, climbing the 1,200 stone steps to the Tayrona circular terraces, and cultural exchanges with Kogui communities.",
  },
  "eje-cafetero": {
    name: "Coffee Cultural Landscape",
    tag: "Cultural landscape",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Spring-like Andean mountain weather year-round (16 °C to 26 °C), cooler in the Cocora cloud forest.",
      },
      {
        title: "Transport",
        description:
          "Flights to Armenia (AXM), Pereira (PEI), or Manizales (MZL), and iconic Willys jeeps connecting Salento, Filandia, and Cocora.",
      },
      {
        title: "Best Time",
        description:
          "December to March and June to August for clear trails and main coffee harvest seasons.",
      },
    ],
    animalesDescription:
      "Yellow-eared parrots, Andean motmots (barranqueros), spectacled bears, howler monkeys, and dozens of hummingbird species.",
    actividadesDescription:
      "Hike among giant wax palms in the Cocora Valley, tour traditional coffee haciendas with specialty tastings, and stroll the colorful balconies of Salento and Filandia.",
  },
  "santuario-las-lajas": {
    name: "Las Lajas Sanctuary",
    tag: "Mystical temple",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Cold Andean canyon climate at 2,900 m above sea level (8 °C to 16 °C); pack a warm windproof jacket.",
      },
      {
        title: "Transport",
        description:
          "Flights to Pasto (PSO) or Ipiales (IPI), then shared taxis or cable car down into the Guáitara River canyon.",
      },
      {
        title: "Best Time",
        description:
          "From June to September for sunny Andean skies, or December to January during regional festivities.",
      },
    ],
    animalesDescription:
      "Andean condors, spectacled bears in nearby páramos, giant hummingbirds, and mountain tanagers along the Guáitara gorge.",
    actividadesDescription:
      "Admire the neo-Gothic basilica suspended 50 m above the canyon, ride the panoramic cable car, visit the crypt museum, and walk the waterfall viewpoints at dusk.",
  },

  // México
  "hierve-el-agua": {
    name: "Hierve el Agua",
    tag: "Geological wonder",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Semi-arid temperate climate (15 °C to 30 °C) with strong sun at midday and cool mountain mornings.",
      },
      {
        title: "Transport",
        description:
          "1.5-hour drive east of Oaxaca City via Mitla along the new scenic highway or authorized local tours.",
      },
      {
        title: "Best Time",
        description:
          "From October to April during the dry season, arriving early in the morning for clear turquoise mineral pools.",
      },
    ],
    animalesDescription:
      "White-tailed deer, canyon wrens, golden eagles, gray foxes, and reptiles native to the Central Valleys of Oaxaca.",
    actividadesDescription:
      "Swim in the natural mineral infinity pools, hike the base trail around the 30-meter petrified waterfalls, and visit nearby Zapotec weaving villages.",
  },
  "castillo-de-chapultepec": {
    name: "Chapultepec Castle",
    tag: "Historic Palace",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Mild highland climate (12 °C to 26 °C), with sunny mornings and brief afternoon showers in summer.",
      },
      {
        title: "Transport",
        description:
          "Metro Line 1 or Line 7 (Chapultepec / Auditorio stations) and a scenic pedestrian walk up Cerro del Chapulín.",
      },
      {
        title: "Best Time",
        description:
          "Year-round from Tuesday to Sunday; March and April stand out when purple jacaranda trees bloom across the city.",
      },
    ],
    animalesDescription:
      "Axolotls in the Chapultepec conservation center, Mexican gray squirrels, hummingbirds, and migratory ducks on the park lakes.",
    actividadesDescription:
      "Explore the National Museum of History, Emperor Maximilian and Carlota's royal alcázar, murals by Orozco and Siqueiros, and panoramic terraces overlooking Paseo de la Reforma.",
  },
  "tulum": {
    name: "Tulum Archaeological Zone",
    tag: "Caribbean ruins",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Warm tropical Caribbean climate (24 °C to 32 °C) tempered by constant ocean breezes.",
      },
      {
        title: "Transport",
        description:
          "Flights to Tulum International Airport (TQO) or Cancún (CUN), Maya Train, ADO buses, and bicycles along the coastal zone.",
      },
      {
        title: "Best Time",
        description:
          "From November to April for sunny skies, low humidity, and crystal-clear turquoise Caribbean waters.",
      },
    ],
    animalesDescription:
      "Black spiny-tailed iguanas on the ruins, loggerhead and green sea turtles, coatis, spider monkeys, and reef fish.",
    actividadesDescription:
      "Tour the cliffside Mayan walled city (El Castillo and Temple of the Frescoes), snorkel the Mesoamerican Reef, and swim in sacred crystal cenotes.",
  },

  // Perú
  "isla-ballestas": {
    name: "Ballestas Islands",
    tag: "Marine refuge",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Sunny coastal desert climate (16 °C to 28 °C) with cool Humboldt Current sea breezes in the morning.",
      },
      {
        title: "Transport",
        description:
          "3.5-hour bus ride south from Lima to Paracas along the Pan-American Highway, followed by a morning speedboat from El Chaco pier.",
      },
      {
        title: "Best Time",
        description:
          "From December to March (coastal summer) when sea lion pups are born and wildlife activity peaks.",
      },
    ],
    animalesDescription:
      "Humboldt penguins, South American sea lions, Inca terns, Peruvian boobies, guanay cormorants, and dolphins.",
    actividadesDescription:
      "Two-hour speedboat wildlife navigation around the rock arches, viewing the enigmatic Paracas Candelabra geoglyph, and touring the Paracas National Reserve.",
  },
  "montana-7-colores": {
    name: "Rainbow Mountain (Vinicunca)",
    tag: "Mineral rainbow",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Cold high-Andean puna climate at 5,200 m above sea level (-5 °C to 12 °C) with intense solar radiation and brisk winds.",
      },
      {
        title: "Transport",
        description:
          "3-hour overland transfer south from Cusco via Cusipata or Pitumarca, followed by a 1.5-to-2-hour high-altitude hike.",
      },
      {
        title: "Best Time",
        description:
          "From May to September (Andean dry season) for snow-free mineral stripes and clear views of Ausangate Peak.",
      },
    ],
    animalesDescription:
      "Alpacas, llamas, wild vicuñas, Andean condors, mountain caracaras, and vizcachas across the high puna.",
    actividadesDescription:
      "High-altitude trekking to the 5,200 m Vinicunca viewpoint, crossing the Red Valley trail, and admiring the sacred Ausangate glacier.",
  },
  "oasis-huacachina": {
    name: "Huacachina Oasis",
    tag: "Natural mirage",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Warm and dry desert climate year-round (18 °C to 32 °C) with virtually no rainfall and starry nights.",
      },
      {
        title: "Transport",
        description:
          "4-hour bus ride from Lima to the city of Ica, plus a 10-minute taxi or mototaxi ride into the dune oasis.",
      },
      {
        title: "Best Time",
        description:
          "Year-round; March stands out for the traditional Ica Grape Harvest Festival (Vendimia).",
      },
    ],
    animalesDescription:
      "Burrowing owls, coastal desert foxes, migratory herons around the emerald lagoon, and desert lizards.",
    actividadesDescription:
      "Adrenaline-filled dune buggy rides, sandboarding down giant dunes, pedal boating on the lagoon, and artisan Pisco vineyard tours.",
  },

  // República Dominicana
  "punta-cana": {
    name: "Punta Cana",
    tag: "Caribbean Eden",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Warm tropical climate year-round (25 °C to 31 °C) with gentle trade winds and warm turquoise waters.",
      },
      {
        title: "Transport",
        description:
          "Direct international flights to Punta Cana International Airport (PUJ) and Coral Highway transfers from Santo Domingo.",
      },
      {
        title: "Best Time",
        description:
          "From December to April, offering sunny skies, low humidity, and calm seas.",
      },
    ],
    animalesDescription:
      "Antillean manatees, hawksbill sea turtles, Ridgway's hawks, rhinoceros iguanas, and tropical coral reef fish.",
    actividadesDescription:
      "Relax on Bávaro and Macao beaches, sail by catamaran to Saona Island, swim in the Hoyo Azul cenote, and snorkel coral reefs.",
  },
  "parque-3-ojos": {
    name: "Los Tres Ojos National Park",
    tag: "Mystical cavern",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Warm tropical climate outside (28 °C) and refreshing, humid microclimate inside the limestone caverns.",
      },
      {
        title: "Transport",
        description:
          "Located 15 minutes by taxi or ride app from the Colonial City of Santo Domingo along Las Américas Avenue.",
      },
      {
        title: "Best Time",
        description:
          "Year-round between 9:00 AM and 3:00 PM, when sunbeams pierce the cavern openings and illuminate the turquoise lagoons.",
      },
    ],
    animalesDescription:
      "Freshwater turtles (jicoteas), cave bats, tarpon fish, herons, and lush subterranean ferns.",
    actividadesDescription:
      "Descend the limestone stairs to explore the Aguas Azufradas, La Nevera, and Las Damas lagoons, and cross by wooden raft to the open-air fourth lake, Los Zaramagullones.",
  },
  "altos-de-chavon": {
    name: "Altos de Chavón",
    tag: "Renaissance village",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Sunny Caribbean climate (24 °C to 30 °C) refreshed by elevated breezes overlooking the Chavón River canyon.",
      },
      {
        title: "Transport",
        description:
          "Located inside Casa de Campo in La Romana, 15 minutes from La Romana Airport (LRM) or 50 minutes from Punta Cana.",
      },
      {
        title: "Best Time",
        description:
          "From November to April, especially in the late afternoon to enjoy golden sunsets over the river and evening concerts.",
      },
    ],
    animalesDescription:
      "Hispaniolan woodpeckers, palmchats (cigüas palmeras, the national bird), frigatebirds, and river fish along the Chavón gorge.",
    actividadesDescription:
      "Stroll cobblestone Mediterranean alleys, visit the 5,000-seat stone amphitheater, St. Stanislaus Church, the Regional Archaeological Museum, and artisan workshops.",
  },

  // Venezuela
  "canaima": {
    name: "Canaima National Park",
    tag: "Natural heritage",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Warm tropical savanna and tepui climate (20 °C to 30 °C), with cool nights on the river camps.",
      },
      {
        title: "Transport",
        description:
          "Direct charter flights from Maiquetía (CCS) or Puerto Ordaz (PZO) to Canaima Lagoon, followed by indigenous curiara dugout canoes.",
      },
      {
        title: "Best Time",
        description:
          "From June to November (rainy season) so the Carrao and Churún rivers have enough water to navigate to the base of Angel Falls.",
      },
    ],
    animalesDescription:
      "Scarlet macaws, toucans, giant anteaters, jaguars, giant river otters, and endemic black frogs found only on the summit of the tepuis.",
    actividadesDescription:
      "Navigate by curiara to the base of Angel Falls (979 m), walk behind the water curtain of El Sapo Falls, and fly by helicopter over the Auyántepui.",
  },
  "colonia-tovar": {
    name: "Colonia Tovar",
    tag: "German corner",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Cool cloud-forest mountain climate at 2,200 m above sea level, with temperatures between 10 °C and 21 °C.",
      },
      {
        title: "Transport",
        description:
          "1.5-hour mountain drive west from Caracas via El Junquito or up from La Victoria in Aragua; rustic 4x4 tours operate locally.",
      },
      {
        title: "Best Time",
        description:
          "Year-round; December to April offers sunny skies, and October celebrates the traditional Oktoberfest.",
      },
    ],
    animalesDescription:
      "Emerald toucanets, quetzals, sloths, red howler monkeys, and hummingbirds of the Henri Pittier coastal mountain range.",
    actividadesDescription:
      "Taste German-Venezuelan sausages, Black Forest cake, and strawberries with cream, tour craft breweries, and ride 4x4 jeeps to the giant Cedro tree and Puerto Maya beach.",
  },
  "isla-larga": {
    name: "Isla Larga",
    tag: "Caribbean refuge",
    manualDelViajero: [
      {
        title: "Weather",
        description:
          "Sunny and warm Caribbean coastal climate year-round (26 °C to 32 °C) with calm, crystal-clear waters.",
      },
      {
        title: "Transport",
        description:
          "Drive to Quizandal or Gañango beach in Puerto Cabello, then take a 15-minute authorized peñero boat ride to the island.",
      },
      {
        title: "Best Time",
        description:
          "From January to May and September to October for maximum underwater visibility over the coral reefs.",
      },
    ],
    animalesDescription:
      "Parrotfish,brain corals, starfish, sea urchins, pelicans, and frigatebirds in the protected marine sanctuary.",
    actividadesDescription:
      "Snorkel and scuba dive around the sunken WWII freighter 'Sesostris' now covered in corals, kayak through mangroves, and relax on white coral sand.",
  },
};

