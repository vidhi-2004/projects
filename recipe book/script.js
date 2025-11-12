// Full recipe data with detailed steps
const recipes = [
  {
    id: 1,
    name: "Paneer Tikka",
    category: "Indian",
    subcategory: "North Indian",
    image: "paneer_tikka.jpg",
    description: "Chunks of paneer marinated in spices and grilled to perfection.",
    ingredients: [
      "200g paneer (cottage cheese)",
      "1/2 cup thick yogurt",
      "1 tbsp ginger-garlic paste",
      "1 tsp red chili powder",
      "1/2 tsp turmeric powder",
      "1 tsp garam masala",
      "1 tbsp lemon juice",
      "Salt to taste",
      "1 tbsp oil"
    ],
    steps: `1. Cut paneer into cubes.
    2. In a bowl, mix yogurt, ginger-garlic paste, spices, lemon juice, salt, and oil.
    3. Add paneer cubes and coat them evenly. Marinate for at least 30 minutes.
    4. Preheat a grill or pan, and grill the marinated paneer until golden brown on all sides.
    5. Serve hot with mint chutney and onion rings.`
  },

  {
    id: 2,
    name: "Masala Dosa",
    category: "Indian",
    subcategory: "South Indian",
    image: "masala_dosa.webp",
    description: "Crispy dosa filled with flavorful mashed potato stuffing.",
    ingredients: [
      "1 cup dosa batter",
      "2 boiled potatoes",
      "1 onion (sliced)",
      "1 green chili (chopped)",
      "1/2 tsp mustard seeds",
      "Curry leaves",
      "1/4 tsp turmeric",
      "Salt to taste",
      "Oil for cooking"
    ],
    steps: `1. Heat oil in a pan, add mustard seeds and let them splutter.
2. Add onions, green chili, curry leaves, turmeric, and sauté.
3. Mash potatoes and add to the pan, mix well with salt.
4. Heat a dosa pan, pour batter and spread into a thin circle.
5. Drizzle oil, cook until crisp, then place filling in center and fold.
6. Serve with coconut chutney and sambar.`
  },
  {
    id: 3,
    name: "Hakka Noodles",
    category: "Chinese",
    subcategory: "Street Style",
    image: "hakka_noodles.webp",
    description: "Stir-fried noodles with veggies and savory sauces.",
    ingredients: [
      "2 packs noodles",
      "1/2 cup chopped carrots",
      "1/2 cup bell peppers",
      "1/2 cup cabbage",
      "2 tbsp soy sauce",
      "1 tbsp chili sauce",
      "1 tbsp vinegar",
      "Salt and pepper to taste",
      "2 tbsp oil"
    ],
    steps: `1. Boil noodles until just cooked, drain and toss in a little oil.
2. Heat oil in a wok, add all vegetables and stir fry on high heat.
3. Add soy sauce, chili sauce, vinegar, salt and pepper.
4. Add noodles and toss everything well for 2-3 minutes.
5. Serve hot garnished with spring onions.`
  },
  {
    id: 4,
    name: "Dal Baati Churma",
    category: "Indian",
    subcategory: "Rajasthani",
    image: "dal_dati_churma.jpg",
    description: "A traditional dish from Rajasthan made with lentils, baked wheat balls, and sweet churma.",
    ingredients: [
      "1 cup toor dal",
      "1/2 cup wheat flour",
      "Ghee for serving",
      "Salt and spices to taste",
      "Jaggery or sugar for churma"
    ],
    steps: `1. Prepare dal with spices and cook until soft.
2. Make dough using wheat flour and water. Shape into small balls (baati).
3. Bake baatis in oven or over coal until crisp.
4. For churma, grind baked baati, mix with ghee and jaggery/sugar.
5. Serve hot dal with baati dipped in ghee and churma on side.`
  },
  {
    id: 5,
    name: "Pasta Alfredo",
    category: "Italian",
    subcategory: "Continental",
    image: "alfredo_pasta.webp",
    description: "Creamy and cheesy Alfredo pasta made with garlic, butter, and cream.",
    ingredients: [
      "200g penne pasta",
      "1 tbsp butter",
      "2 cloves garlic (minced)",
      "1 cup heavy cream",
      "1/2 cup grated parmesan cheese",
      "Salt and pepper to taste",
      "Parsley for garnish"
    ],
    steps: `1. Cook pasta until al dente. Drain and set aside.
2. In a pan, melt butter and sauté garlic.
3. Add cream, bring to a gentle boil, and then simmer.
4. Add parmesan cheese, stir until melted.
5. Add pasta to the sauce, toss well. Season with salt and pepper.
6. Garnish with parsley and serve hot.`
  }
,
  {
  id: 6,
  name: "Chole Bhature",
  category: "Indian",
  subcategory: "Punjabi",
  image: "chole_bhature.webp",
  description: "Spicy chickpeas served with deep-fried fluffy bread.",
  ingredients: [
    "1 cup chickpeas",
    "1 onion (chopped)",
    "1 tomato (pureed)",
    "1 tsp ginger-garlic paste",
    "1 tsp chole masala",
    "1/2 tsp turmeric",
    "Salt to taste",
    "For bhature: flour, yogurt, salt, oil"
  ],
  steps: `1. Soak chickpeas overnight and pressure cook until soft.
2. Sauté onions and ginger-garlic paste, then add tomato puree and spices.
3. Add cooked chickpeas and simmer for 15 minutes.
4. Make soft dough using flour, yogurt, and salt. Rest for 1 hour.
5. Roll into discs and deep fry till puffed.
6. Serve hot with onions and pickle.`
},
{
  id: 7,
  name: "Paneer Butter Masala",
  category: "Indian",
  subcategory: "Punjabi",
  image: "paneer_butter_masal.jpeg",
  description: "Creamy tomato-based curry with paneer cubes and spices.",
  ingredients: [
    "200g paneer",
    "2 tomatoes (pureed)",
    "1 onion (finely chopped)",
    "2 tbsp cream",
    "1 tsp ginger-garlic paste",
    "1 tsp red chili powder",
    "1/2 tsp garam masala",
    "1 tbsp butter",
    "Salt to taste"
  ],
  steps: `1. Heat butter in a pan, add onions and sauté till golden.
2. Add ginger-garlic paste, tomato puree, and cook until oil separates.
3. Add spices and cream, stir well.
4. Add paneer cubes, simmer for 5 minutes.
5. Garnish with fresh coriander and serve with naan or rice.`
},
{
  id: 8,
  name: "Dhokla",
  category: "Indian",
  subcategory: "Gujarati",
  image: "dhokla.webp",
  description: "Steamed savory cake made from gram flour, soft and spongy.",
  ingredients: [
    "1 cup gram flour (besan)",
    "1 tbsp semolina (rava)",
    "1/2 cup curd",
    "1/2 tsp turmeric",
    "1 tsp fruit salt (Eno)",
    "Salt to taste",
    "For tempering: mustard seeds, curry leaves, green chilies"
  ],
  steps: `1. Mix besan, rava, curd, turmeric, and water into a smooth batter.
2. Add Eno and mix quickly. Pour into greased tray.
3. Steam for 15–20 minutes until cooked.
4. Temper mustard seeds, curry leaves, and green chilies in oil.
5. Pour over dhokla, cut into squares, and serve with chutney.`
},
{
  id: 9,
  name: "Undhiyu",
  category: "Indian",
  subcategory: "Gujarati",
  image: "undhiyu.webp",
  description: "Mixed winter vegetable curry slow-cooked with spices.",
  ingredients: [
    "1/2 cup surti papdi",
    "1/2 cup small brinjals",
    "1/2 cup yam (suran)",
    "1/4 cup methi muthia",
    "Green garlic paste",
    "Coriander, coconut, and spices",
    "Oil and salt to taste"
  ],
  steps: `1. Prepare stuffing using green garlic, coconut, coriander, and spices.
2. Stuff brinjals and papdi with the mix.
3. Heat oil, add all vegetables and muthias layer-wise.
4. Cover and cook on slow flame without stirring much.
5. Garnish with coriander and serve hot with puri.`
},
{
  id: 10,
  name: "Thai Green Curry",
  category: "Thai",
  subcategory: "Main Course",
  image: "thai_green_curry.jpeg",
  description: "Aromatic green curry with coconut milk and vegetables.",
  ingredients: [
    "1 tbsp green curry paste",
    "1 cup coconut milk",
    "1/2 cup tofu or chicken",
    "1/2 cup bell peppers",
    "1/4 cup baby corn",
    "1 tbsp soy sauce",
    "Fresh basil and lime leaves"
  ],
  steps: `1. Heat oil and sauté green curry paste.
2. Add coconut milk and bring to boil.
3. Add tofu/chicken and vegetables, simmer till cooked.
4. Add soy sauce, basil, and lime leaves.
5. Serve hot with jasmine rice.`
},
{
  id: 11,
  name: "Pad Thai",
  category: "Thai",
  subcategory: "Noodles",
  image: "pad_thai.jpeg",
  description: "Famous stir-fried Thai noodles with tamarind sauce.",
  ingredients: [
    "200g rice noodles",
    "1 egg",
    "1/2 cup bean sprouts",
    "2 tbsp tamarind paste",
    "1 tbsp fish sauce (or soy sauce)",
    "Peanuts, garlic, lime, chili flakes"
  ],
  steps: `1. Soak rice noodles in warm water until soft.
2. In a pan, sauté garlic and crack in egg, scramble it.
3. Add noodles, tamarind, fish/soy sauce, mix well.
4. Add bean sprouts, peanuts, lime juice, and chili flakes.
5. Toss and serve hot with lime wedges.`
} ,

    {
      id: 12,
      name: "Rajma Chawal",
      category: "Indian",
      subcategory: "Punjabi",
      image: "rajma_chawal.webp",
      description: "Red kidney beans curry served with steamed rice.",
      ingredients: [
        "1 cup rajma (kidney beans)",
        "1 onion (chopped)",
        "2 tomatoes (pureed)",
        "1 tsp ginger-garlic paste",
        "1 tsp cumin seeds",
        "1/2 tsp turmeric",
        "1 tsp red chili powder",
        "1 tsp garam masala",
        "Salt to taste",
        "2 tbsp oil",
        "Fresh coriander for garnish",
        "2 cups cooked rice"
      ],
      steps: `1. Soak rajma overnight.
      2. Pressure cook for 4–5 whistles until soft.
      3. Heat oil, add cumin seeds, and sauté onions.
      4. Add ginger-garlic paste and cook till raw smell fades.
      5. Add tomato puree and cook until oil separates.
      6. Mix in turmeric, chili powder, salt, garam masala.
      7. Add cooked rajma and simmer for 10–15 mins.
      8. Garnish with coriander and serve hot with rice.`
    },
    {
      id: 13,
      name: "Sarson Da Saag",
      category: "Indian",
      subcategory: "Punjabi",
      image: "sarson_saag.webp",
      description: "Mustard greens cooked with spices, served with makki roti.",
      ingredients: [
        "2 cups mustard leaves (sarson)",
        "1 cup spinach (palak)",
        "1/4 cup bathua leaves (optional)",
        "2 green chilies",
        "1 tbsp ginger (chopped)",
        "2 tbsp maize flour (makki ka atta)",
        "Salt to taste",
        "3 tbsp ghee",
        "1 onion",
        "2 garlic cloves",
        "1/2 tsp red chili powder"
      ],
      steps: `1. Wash and boil all greens with green chilies and ginger.\n2. Cool and blend into a coarse paste.\n3. Add maize flour and cook the saag on low heat for 30–40 mins.\n4. For tempering, heat ghee, sauté onion and garlic.\n5. Add red chili powder.\n6. Pour over saag and mix well.\n7. Serve hot with makki di roti and butter.`
    },
    {
      id: 14,
      name: "Amritsari Kulcha",
      category: "Indian",
      subcategory: "Punjabi",
      image: "amritsari_kulcha.jpeg",
      description: "Stuffed tandoori bread filled with spiced potatoes.",
      ingredients: [
        "2 cups all-purpose flour (maida)",
        "1/2 tsp baking powder",
        "1/4 tsp baking soda",
        "1/2 cup curd",
        "Water as needed",
        "2 boiled potatoes",
        "1 onion (chopped)",
        "1 tsp coriander powder",
        "1/2 tsp amchur",
        "1/2 tsp garam masala",
        "Salt to taste",
        "Fresh coriander",
        "Butter for brushing"
      ],
      steps: `1. Knead dough using maida, baking powder, baking soda, curd, and water. Rest 2 hours.\n2. Mix mashed potatoes with onion, spices, and coriander.\n3. Roll dough, stuff with potato mix, and seal.\n4. Roll again gently and bake in oven/tandoor until golden.\n5. Brush with butter and serve hot.`
    },
    {
      id: 15,
      name: "Punjabi Kadhi Pakora",
      category: "Indian",
      subcategory: "Punjabi",
      image: "kadhi_pakora.jpeg",
      description: "Tangy yogurt curry with gram flour dumplings.",
      ingredients: [
        "1 cup curd",
        "1/4 cup besan (gram flour)",
        "1/2 tsp turmeric",
        "1/2 tsp red chili powder",
        "Salt to taste",
        "For pakoras: 1 cup besan, 1 onion, chili, spices",
        "1/2 tsp ajwain",
        "Oil for frying",
        "Curry leaves, mustard seeds, hing"
      ],
      steps: `1. Mix curd, besan, turmeric, chili, salt with water.
      2. Boil the mixture on low for 30 minutes.
      3. For pakoras: mix besan, onion, spices, water and deep fry.
      4. Add pakoras to kadhi and simmer.
      5. Temper with mustard seeds, curry leaves, and hing in oil.
      6. Pour tempering over kadhi and serve with rice.`
    },
    {
      id: 16,
      name: "Bhel Puri",
      category: "gujarati",
      subcategory: "Street Food",
      image: "bhel_puri.webp",
      description: "A tangy and crunchy snack made with puffed rice, vegetables, and chutneys.",
      ingredients: [
        "2 cups puffed rice",
        "1/2 cup chopped onions",
        "1/2 cup chopped tomatoes",
        "1/4 cup boiled potatoes (mashed)",
        "1/4 cup sev (crispy noodles)",
        "2 tbsp tamarind chutney",
        "2 tbsp green chutney",
        "1 tsp chaat masala",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      steps: `1. In a large bowl, mix puffed rice, onions, tomatoes, and potatoes.`
},
 {
      id: 17,
      name: "Thepla",
      category: "Indian",
      subcategory: "Gujarati",
      image: "thepla.webp",
      description: "Spiced flatbread made with fenugreek leaves.",
      ingredients: [
        "2 cups wheat flour",
        "1 cup chopped methi leaves",
        "1/4 cup curd",
        "1/2 tsp turmeric",
        "1 tsp red chili powder",
        "1 tsp coriander powder",
        "1 tsp sesame seeds",
        "Salt to taste",
        "Water to knead",
        "Oil for cooking"
      ],
      steps: `1. Mix all ingredients to form a soft dough.\n2. Roll into thin discs.\n3. Cook on tawa with oil until golden on both sides.\n4. Serve with curd or pickle.`
    },
    {
      id: 18,
      name: "Handvo",
      category: "Indian",
      subcategory: "Gujarati",
      image: "handvo.jpeg",
      description: "Savory lentil cake with vegetables.",
      ingredients: [
        "1 cup rice",
        "1/2 cup toor dal",
        "1/4 cup bottle gourd (grated)",
        "1/4 cup carrot (grated)",
        "1 tsp ginger-green chili paste",
        "1/2 tsp turmeric",
        "Salt to taste",
        "1/2 tsp baking soda",
        "1 tsp mustard seeds",
        "1 tsp sesame seeds"
      ],
      steps: `1. Soak rice and dal overnight and grind to batter.\n2. Add grated veggies, salt, spices, and baking soda.\n3. Heat oil, add mustard and sesame seeds.\n4. Pour batter in pan, top with tempering.\n5. Cook on low flame or bake until golden and firm.`
    },
    {
      id: 19,
      name: "Sev Tameta Nu Shaak",
      category: "Indian",
      subcategory: "rajasthani",
      image: "sev_tameta.jpeg",
      description: "Tangy tomato curry topped with crispy sev.",
      ingredients: [
        "4 ripe tomatoes",
        "1 onion",
        "2 green chilies",
        "1 tsp mustard seeds",
        "1/2 tsp turmeric",
        "1/2 tsp red chili powder",
        "1 tsp jaggery",
        "Salt to taste",
        "1 cup sev",
        "2 tbsp oil"
      ],
      steps: `1. Heat oil, add mustard seeds and chopped onion.
      2. Add green chilies and chopped tomatoes.
      3. Cook till soft, add spices, salt, and jaggery.
      4. Simmer for 10 mins.
      5. Add sev just before serving.`
    },
    {
  id: 20,
  name: "Idli Sambar",
  category: "Indian",
  subcategory: "South Indian",
  image: "idli_sambar.webp",
  description: "Steamed rice cakes with spicy lentil soup.",
  ingredients: [
    "1 cup idli rice",
    "1/4 cup urad dal",
    "Salt to taste",
    "1 cup toor dal",
    "1 onion (sliced)",
    "1 tomato (chopped)",
    "1/2 tsp mustard seeds",
    "1/2 tsp cumin seeds",
    "1/4 tsp hing",
    "Curry leaves",
    "1 tbsp sambar powder",
    "Tamarind pulp",
    "Salt and oil to taste"
  ],
  steps: `1. Soak idli rice and urad dal separately for 4–5 hours.
2. Grind them to a smooth batter and ferment overnight.
3. Pour batter in idli moulds and steam for 10–12 mins.
4. For sambar, cook toor dal until soft.
5. Heat oil, add mustard, cumin, hing, curry leaves, onion, and tomato.
6. Add sambar powder, tamarind pulp, salt, and boiled dal.
7. Simmer for 10 mins and serve hot with idlis.`
},
{
  id: 21,
  name: "Vada",
  category: "Indian",
  subcategory: "South Indian",
  image: "medu_vada.jpeg",
  description: "Crispy fried lentil doughnuts.",
  ingredients: [
    "1 cup urad dal",
    "1 onion (chopped)",
    "1 green chili (chopped)",
    "Few curry leaves",
    "1/2 tsp crushed black pepper",
    "Salt to taste",
    "Oil for deep frying"
  ],
  steps: `1. Soak urad dal for 4 hours and grind to fluffy batter.
2. Add onion, chili, curry leaves, pepper, and salt.
3. Wet hands, shape into doughnut form.
4. Deep fry till golden and crisp.
5. Serve with coconut chutney and sambar.`
},
{
  id: 22,
  name: "Uttapam",
  category: "Indian",
  subcategory: "South Indian",
  image: "uttapam.jpeg",
  description: "Thick rice pancakes topped with vegetables.",
  ingredients: [
    "1 cup idli/dosa batter",
    "1 onion (finely chopped)",
    "1 tomato (chopped)",
    "1 green chili (chopped)",
    "Coriander leaves",
    "Salt and oil to taste"
  ],
  steps: `1. Heat tawa and grease lightly.
2. Pour a ladle of batter to make thick round.
3. Sprinkle chopped onions, tomatoes, chili, and coriander.
4. Drizzle oil on edges.
5. Flip and cook both sides till golden.
6. Serve hot with chutneys.`
},
{
  id: 23,
  name: "Rasam",
  category: "Indian",
  subcategory: "South Indian",
  image: "rasam.jpeg",
  description: "Spicy tamarind soup with pepper and garlic.",
  ingredients: [
    "1 small lemon-sized tamarind",
    "2 cups water",
    "1 tomato",
    "1/2 tsp black pepper",
    "1/2 tsp cumin",
    "2 garlic cloves",
    "1/4 tsp turmeric",
    "1 tsp mustard seeds",
    "Few curry leaves",
    "Hing and salt to taste",
    "Coriander for garnish"
  ],
  steps: `1. Soak tamarind in warm water, extract juice.
2. Crush pepper, cumin, and garlic.
3. Heat oil, add mustard, hing, curry leaves.
4. Add tomato, turmeric, tamarind water, crushed spices, and salt.
5. Simmer for 5–7 mins.
6. Garnish with coriander and serve hot.`
},
{
  id: 24,
  name: "Veg Manchurian",
  category: "Chinese",
  subcategory: "Street Style",
  image: "veg_manchurian.jpeg",
  description: "Crispy veggie balls in tangy soy-based sauce.",
  ingredients: [
    "1 cup grated cabbage",
    "1/2 cup grated carrot",
    "2 tbsp cornflour",
    "2 tbsp all-purpose flour",
    "1 tsp soy sauce",
    "1/2 tsp ginger-garlic paste",
    "Salt and pepper to taste",
    "Oil for frying",
    "For sauce: garlic, soy sauce, vinegar, chili sauce, spring onions"
  ],
  steps: `1. Mix grated veggies, cornflour, flour, spices to form a dough.
2. Make small balls and deep fry till golden.
3. In a pan, sauté garlic in oil. Add sauces, vinegar, and little water.
4. Add fried balls and toss until coated well.
5. Garnish with spring onions and serve.`
},
{
  id: 25,
  name: "Veg Fried Rice",
  category: "Chinese",
  subcategory: "Main Course",
  image: "veg_fried_rice.webp",
  description: "Stir-fried rice with mixed vegetables and soy sauce.",
  ingredients: [
    "2 cups cooked rice",
    "1/2 cup chopped carrots",
    "1/2 cup bell peppers",
    "1/2 cup cabbage",
    "2 tbsp soy sauce",
    "1 tbsp vinegar",
    "1/2 tsp black pepper",
    "2 tbsp oil",
    "Salt to taste",
    "Spring onions"
  ],
  steps: `1. Heat oil in a wok, stir-fry vegetables on high flame.
2. Add cooked rice, soy sauce, vinegar, and pepper.
3. Toss everything on high flame for 2–3 mins.
4. Garnish with spring onions and serve hot.`
},
{
  id: 26,
  name: "Vegetarian Thai Red Curry",
  category: "Thai",
  subcategory: "Curry",
  image: "thai_red_curry.jpeg",
  description: "Creamy coconut-based red curry with vegetables.",
  ingredients: [
    "1 tbsp red curry paste",
    "1 cup coconut milk",
    "1/2 cup tofu",
    "1/4 cup carrots",
    "1/4 cup zucchini",
    "1/4 cup bell peppers",
    "1 tsp soy sauce",
    "Fresh basil leaves",
    "Salt to taste"
  ],
  steps: `1. Sauté red curry paste in a pan.
2. Add coconut milk and bring to a simmer.
3. Add tofu and vegetables. Cook until tender.
4. Add soy sauce and basil. Simmer for 5 mins.
5. Serve with jasmine rice.`
},
{
  id: 27,
  name: "Thai Basil Stir Fry",
  category: "Thai",
  subcategory: "Stir Fry",
  image: "thai_basil_stirfry.webp",
  description: "Quick and flavorful veggie stir-fry with fresh basil.",
  ingredients: [
    "1 cup assorted vegetables (carrots, bell pepper, beans)",
    "2 tbsp soy sauce",
    "1 tbsp garlic (minced)",
    "1 tsp chili flakes",
    "1 tsp sugar",
    "Fresh Thai basil",
    "1 tbsp oil"
  ],
  steps: `1. Heat oil, sauté garlic and chili flakes.
2. Add vegetables and stir-fry on high heat.
3. Add soy sauce and sugar, mix well.
4. Toss in fresh basil and cook for 1 more minute.
5. Serve hot with rice or noodles.`
},
{
  id: 28,
  name: "Margherita Pizza",
  category: "Italian",
  subcategory: "Pizza",
  image: "margherita_pizza.webp",
  description: "Classic Italian pizza with tomato, basil, and mozzarella.",
  ingredients: [
    "1 pizza base",
    "1/2 cup pizza sauce",
    "100g mozzarella cheese",
    "Fresh basil leaves",
    "1 tsp olive oil",
    "Salt and pepper"
  ],
  steps: `1. Spread pizza sauce over the base.
2. Top with shredded mozzarella and basil leaves.
3. Drizzle with olive oil.
4. Bake in preheated oven at 220°C for 10–12 mins.
5. Slice and serve hot.`
},
{
  id: 29,
  name: "Vegetable Lasagna",
  category: "Italian",
  subcategory: "Main Course",
  image: "veg_lasagna.jpeg",
  description: "Layered pasta with vegetables, tomato sauce, and cheese.",
  ingredients: [
    "6 lasagna sheets",
    "1 cup chopped vegetables (zucchini, bell pepper, spinach)",
    "1 cup tomato sauce",
    "1 cup béchamel sauce",
    "1 cup mozzarella cheese",
    "Salt, pepper, oregano"
  ],
  steps: `1. Boil lasagna sheets and keep aside.
2. Sauté vegetables with salt, pepper, oregano.
3. In a baking dish, layer sauce, lasagna sheets, vegetables, béchamel sauce, and cheese.
4. Repeat layers and finish with cheese.
5. Bake at 180°C for 25–30 mins.
6. Serve warm in slices.`
},
{
  id: 30,
  name: "Bruschetta",
  category: "Italian",
  subcategory: "Appetizer",
  image: "bruschetta.webp",
  description: "Toasted bread topped with tomatoes, basil, and olive oil.",
  ingredients: [
    "4 slices baguette",
    "2 tomatoes (finely chopped)",
    "1 garlic clove",
    "Fresh basil",
    "1 tbsp olive oil",
    "Salt and pepper"
  ],
  steps: `1. Toast baguette slices until crisp.
2. Rub garlic on warm slices.
3. Mix tomatoes, basil, olive oil, salt, and pepper.
4. Spoon mixture onto toast and serve.`
},
{
  id: 31,
  name: "Khandvi",
  category: "Indian",
  subcategory: "Gujarati",
  image: "khandvi.webp",
  description: "Soft, rolled savory snacks made from gram flour and yogurt.",
  ingredients: [
    "1 cup gram flour (besan)",
    "1 cup yogurt",
    "2 cups water",
    "1/2 tsp turmeric",
    "Salt to taste",
    "For tempering: mustard seeds, curry leaves, sesame seeds"
  ],
  steps: `1. Mix besan, yogurt, water, turmeric, and salt into a smooth batter.
2. Cook on low heat, stirring continuously, till thickened.
3. Spread on a greased surface while hot and roll into spirals.
4. Prepare tempering with mustard, sesame seeds, and curry leaves.
5. Pour over khandvi and garnish with coriander.`
},
{
  id: 32,
  name: "Muthiya",
  category: "Indian",
  subcategory: "Gujarati",
  image: "muthiya.jpeg",
  description: "Steamed or fried dumplings made with spiced flour and vegetables.",
  ingredients: [
    "1 cup bottle gourd (grated)",
    "1 cup wheat flour",
    "1/2 cup gram flour",
    "1/4 tsp turmeric",
    "1 tsp chili-ginger paste",
    "1/2 tsp sugar",
    "Salt to taste",
    "1 tsp sesame seeds",
    "Coriander for garnish"
  ],
  steps: `1. Mix all ingredients into a soft dough.
2. Shape into logs and steam for 15–20 mins.
3. Slice and temper with sesame seeds and mustard.
4. Optionally pan-fry till golden.
5. Garnish with coriander and serve.`
},
{
  id: 33,
  name: "Gatte Ki Sabzi",
  category: "Indian",
  subcategory: "Rajasthani",
  image: "gatte_ki_sabzi.webp",
  description: "Gram flour dumplings in spicy yogurt gravy.",
  ingredients: [
    "1 cup gram flour",
    "1/2 tsp carom seeds",
    "1/2 cup yogurt",
    "1/2 tsp turmeric",
    "1 tsp red chili powder",
    "1/2 tsp cumin",
    "1/2 tsp mustard seeds",
    "Curry leaves",
    "Salt and oil to taste"
  ],
  steps: `1. Mix besan, spices, and water to form dough. Roll into logs and boil.
2. Cut logs into gatte pieces.
3. Prepare yogurt-based curry with spices and add gatte.
4. Simmer for 10 minutes.
5. Serve hot with roti or rice.`
},
{
  id: 34,
  name: "Ker Sangri",
  category: "Indian",
  subcategory: "Rajasthani",
  image: "ker_sangri.webp",
  description: "Traditional desert bean and berry curry from Rajasthan.",
  ingredients: [
    "1/2 cup ker (dried berries)",
    "1/2 cup sangri (dried beans)",
    "1/2 tsp turmeric",
    "1 tsp red chili powder",
    "1/2 tsp amchur",
    "1 tsp mustard seeds",
    "Salt to taste",
    "2 tbsp oil"
  ],
  steps: `1. Soak ker and sangri overnight. Boil and drain.
2. Heat oil, add mustard seeds and dry spices.
3. Add boiled ker-sangri and mix well.
4. Cook for 10 mins and serve with bajra roti.`
},
{
  id: 35,
  name: "Vegetable Chettinad",
  category: "Indian",
  subcategory: "South Indian",
  image: "vegetable_chettinad.webp",
  description: "Spicy and flavorful mixed vegetable curry from Chettinad cuisine.",
  ingredients: [
    "1 cup mixed vegetables (carrot, beans, potato)",
    "1/2 cup chopped onions",
    "1/2 cup tomatoes",
    "1 tbsp Chettinad masala",
    "1 tsp mustard seeds",
    "Curry leaves",
    "Salt and oil to taste"
  ],
  steps: `1. Heat oil, add mustard seeds and curry leaves.
2. Sauté onions and tomatoes.
3. Add vegetables and Chettinad masala.
4. Add water and simmer till vegetables are cooked.
5. Serve with dosa or rice.`
},
{
  id: 36,
  name: "Thai Pineapple Fried Rice",
  category: "Thai",
  subcategory: "Main Course",
  image: "pineapple_fried_rice.jpeg",
  description: "Fried rice with pineapple chunks, cashews, and Thai spices.",
  ingredients: [
    "2 cups cooked rice",
    "1/2 cup pineapple chunks",
    "1/4 cup bell peppers",
    "1 tbsp soy sauce",
    "1 tsp curry powder",
    "2 tbsp cashews",
    "Salt and pepper"
  ],
  steps: `1. Heat oil, sauté cashews and vegetables.
2. Add pineapple, soy sauce, and curry powder.
3. Add rice and toss well on high flame.
4. Serve hot with lime wedges.`
},
{
  id: 37,
  name: "Thai Coconut Soup (Tom Kha)",
  category: "Thai",
  subcategory: "Soup",
  image: "tom_kha.webp",
  description: "Aromatic coconut milk soup with lemongrass and galangal.",
  ingredients: [
    "1 cup coconut milk",
    "1/2 cup water",
    "1 stalk lemongrass",
    "2 slices galangal (or ginger)",
    "1/4 cup mushrooms",
    "1 tbsp lime juice",
    "Soy sauce or salt",
    "Coriander for garnish"
  ],
  steps: `1. Boil coconut milk and water with lemongrass and galangal.
2. Add mushrooms and simmer for 10 mins.
3. Season with lime juice and soy sauce.
4. Garnish with coriander and serve hot.`
},
{
  id: 38,
  name: "Minestrone Soup",
  category: "Italian",
  subcategory: "Soup",
  image: "minestrone_soup.webp",
  description: "Hearty vegetable soup with beans and pasta.",
  ingredients: [
    "1/2 cup macaroni",
    "1 cup chopped vegetables (carrots, zucchini, beans)",
    "1/2 cup kidney beans",
    "2 tomatoes (chopped)",
    "2 cups vegetable broth",
    "Italian herbs, salt and pepper"
  ],
  steps: `1. Sauté vegetables in olive oil.
2. Add tomatoes, broth, and beans. Simmer.
3. Add pasta and cook till done.
4. Season and serve hot.`
},
{
  id: 39,
  name: "Caprese Salad",
  category: "Italian",
  subcategory: "Salad",
  image: "caprese_salad.webp",
  description: "Fresh mozzarella, tomato, and basil salad drizzled with olive oil.",
  ingredients: [
    "2 tomatoes (sliced)",
    "100g fresh mozzarella (sliced)",
    "Fresh basil leaves",
    "1 tbsp olive oil",
    "Salt and pepper"
  ],
  steps: `1. Arrange tomato and mozzarella slices alternately.
2. Place basil leaves on top.
3. Drizzle with olive oil, sprinkle salt and pepper.
4. Serve chilled.`
},

    ];

// DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  displayRecipes(recipes);
  document.getElementById("searchInput").addEventListener("input", handleSearch);
});

// Display recipes to container
function displayRecipes(recipeList) {
  const container = document.getElementById("recipesContainer");
  container.innerHTML = "";

  if (recipeList.length === 0) {
    container.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  recipeList.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" />
      <h3>${recipe.name}</h3>
      <p>${recipe.description}</p>
      <button onclick="openPopup(${recipe.id})">View Recipe</button>
    `;
    container.appendChild(card);
  });
}

// Search filter
function handleSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query) ||
    recipe.ingredients.join(" ").toLowerCase().includes(query) ||
    recipe.category.toLowerCase().includes(query) ||
    recipe.subcategory.toLowerCase().includes(query)
  );
  displayRecipes(filtered);
}

// Category/subcategory filter
function filterRecipes(category) {
  if (category === "All") {
    displayRecipes(recipes);
  } else {
    const filtered = recipes.filter(
      r => r.category === category || r.subcategory === category
    );
    displayRecipes(filtered);
  }
}

// Show recipe modal
function openPopup(recipeId) {
  const recipe = recipes.find(r => r.id === recipeId);
  if (!recipe) return;

  document.getElementById("popupTitle").textContent = recipe.name;
  document.getElementById("popupContent").innerHTML = `
    <h4>Description:</h4>
    <p>${recipe.description}</p>
    <h4>Ingredients:</h4>
    <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join("")}</ul>
    <h4>Steps:</h4>
    <pre>${recipe.steps}</pre>
  `;
  document.getElementById("popup").style.display = "block";
}

// Close modal
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

