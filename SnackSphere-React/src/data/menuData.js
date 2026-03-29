// Each item: { name, price, category, type: 'veg' | 'nonveg' }

export const menuData = {
  maggiHotspot: {
    outletName: "Maggi Hotspot (Nescafe)",
    sections: [
      {
        title: "🍜 NOODLES / PASTA / RICE BOWLS",
        items: [
          { name: "Double Maggi", price: 45, category: "maggi", type: "veg" },
          { name: "Butter Maggi", price: 50, category: "maggi", type: "veg" },
          { name: "Oregano Maggi", price: 50, category: "maggi", type: "veg" },
          { name: "Rosemary Maggi", price: 50, category: "maggi", type: "veg" },
          { name: "Corn Maggi", price: 50, category: "maggi", type: "veg" },
          { name: "Atta Masala", price: 55, category: "maggi", type: "veg" },
          { name: "Onion Capsicum", price: 55, category: "maggi", type: "veg" },
          { name: "Peri Peri", price: 55, category: "maggi", type: "veg" },
          { name: "Fusion Maggi", price: 55, category: "maggi", type: "veg" },
          { name: "Oats Masala", price: 55, category: "maggi", type: "veg" },
          { name: "Butter Double Masala", price: 60, category: "maggi", type: "veg" },
          { name: "Cheese Maggi", price: 60, category: "maggi", type: "veg" },
          { name: "Butter Garlic", price: 60, category: "maggi", type: "veg" },
          { name: "Schezwan", price: 60, category: "maggi", type: "veg" },
          { name: "Chilli Garlic", price: 60, category: "maggi", type: "veg" },
          { name: "Masala Penne with Tomato", price: 60, category: "maggi", type: "veg" },
          { name: "Tomato Pasta", price: 60, category: "maggi", type: "veg" },
          { name: "Cheese Macaroni", price: 60, category: "maggi", type: "veg" },
          { name: "Onion Capsicum Butter Maggi", price: 70, category: "maggi", type: "veg" },
          { name: "Corn and Cheese", price: 70, category: "maggi", type: "veg" },
          { name: "Chilli Garlic Cheese", price: 70, category: "maggi", type: "veg" },
          { name: "Extra Cheese / Butter / Dry Masala / Vegetables", price: 15, category: "maggi", type: "veg" },
        ]
      },
      {
        title: "☕ NESCAFE",
        items: [
          { name: "Espresso", price: 20, category: "beverages", type: "veg" },
          { name: "Cardamom Tea", price: 20, category: "beverages", type: "veg" },
          { name: "Milk", price: 20, category: "beverages", type: "veg" },
          { name: "Masala Tea", price: 20, category: "beverages", type: "veg" },
          { name: "Cappuccino", price: 30, category: "beverages", type: "veg" },
          { name: "Cafe Latte", price: 30, category: "beverages", type: "veg" },
          { name: "Ginger & Honey Tea", price: 30, category: "beverages", type: "veg" },
          { name: "Assam Tea", price: 30, category: "beverages", type: "veg" },
          { name: "Darjeeling Tea", price: 30, category: "beverages", type: "veg" },
          { name: "Cafe Mocha", price: 35, category: "beverages", type: "veg" },
          { name: "Hot Chocolate", price: 35, category: "beverages", type: "veg" },
          { name: "Irish / Caramel / Hazelnut Cappuccino", price: 40, category: "beverages", type: "veg" },
        ]
      },
      {
        title: "🥤 COLD BEVERAGES",
        items: [
          { name: "Lemon Ice Tea (Regular)", price: 40, category: "beverages", type: "veg" },
          { name: "Lemon Ice Tea (Large)", price: 75, category: "beverages", type: "veg" },
          { name: "Special Masala Lemon Ice Tea (Regular)", price: 45, category: "beverages", type: "veg" },
          { name: "Special Masala Lemon Ice Tea (Large)", price: 85, category: "beverages", type: "veg" },
          { name: "Frappe (Regular)", price: 55, category: "beverages", type: "veg" },
          { name: "Frappe (Large)", price: 105, category: "beverages", type: "veg" },
          { name: "All Flavoured Frappe", price: 75, category: "beverages", type: "veg" },
        ]
      }
    ]
  },

  houseOfChow: {
    outletName: "House of Chow",
    sections: [
      {
        title: "🍚 RICE",
        items: [
          { name: "Veg Fried Rice", price: 90, category: "rice-items", type: "veg" },
          { name: "Chicken Fried Rice", price: 150, category: "rice-items", type: "nonveg" },
          { name: "Paneer Fried Rice", price: 140, category: "rice-items", type: "veg" },
          { name: "Egg Fried Rice", price: 100, category: "rice-items", type: "nonveg" },
          { name: "Chilli Garlic Fried Rice", price: 140, category: "rice-items", type: "veg" },
        ]
      },
      {
        title: "🍜 NOODLES",
        items: [
          { name: "Veg Hakka Noodles", price: 120, category: "chinese", type: "veg" },
          { name: "Chicken Hakka Noodles", price: 200, category: "chinese", type: "nonveg" },
          { name: "Veg Chowmein", price: 120, category: "chinese", type: "veg" },
          { name: "Chicken Chowmein", price: 200, category: "chinese", type: "nonveg" },
          { name: "Veg Singapore Noodles", price: 140, category: "chinese", type: "veg" },
          { name: "Chicken Singapore Noodles", price: 230, category: "chinese", type: "nonveg" },
        ]
      },
      {
        title: "🥟 MOMOS (8 Pcs)",
        items: [
          { name: "Veg Steam Momos", price: 95, category: "momos", type: "veg" },
          { name: "Veg Kurkure Momos", price: 120, category: "momos", type: "veg" },
          { name: "Chicken Steam Momos", price: 119, category: "momos", type: "nonveg" },
          { name: "Chicken Kurkure Momos", price: 160, category: "momos", type: "nonveg" },
        ]
      },
      {
        title: "🌿 VEG APPETIZERS",
        items: [
          { name: "Crispy Chilli Potato", price: 100, category: "sides(street-food)", type: "veg" },
          { name: "Veg Spring Roll", price: 115, category: "sides(street-food)", type: "veg" },
          { name: "Chilli Paneer", price: 150, category: "chinese", type: "veg" },
          { name: "Crispy Corn", price: 105, category: "sides(street-food)", type: "veg" },
          { name: "Salted Fries", price: 74, category: "fries", type: "veg" },
          { name: "Cheese Fries", price: 158, category: "fries", type: "veg" },
        ]
      },
      {
        title: "🍗 NON VEG APPETIZERS",
        items: [
          { name: "Chicken Drumsticks", price: 210, category: "sides(street-food)", type: "nonveg" },
          { name: "Chicken Spring Roll", price: 157, category: "sides(street-food)", type: "nonveg" },
          { name: "Chilli Chicken", price: 210, category: "chinese", type: "nonveg" },
          { name: "Chicken Shawarma", price: 157, category: "sandwich", type: "nonveg" },
        ]
      },
      {
        title: "🌯 WRAPS",
        items: [
          { name: "Veggie Wrap", price: 70, category: "sandwich", type: "veg" },
          { name: "Paneer Wrap", price: 90, category: "sandwich", type: "veg" },
          { name: "Chilli Paneer Wrap", price: 120, category: "sandwich", type: "veg" },
          { name: "Chicken Kebab Wrap", price: 120, category: "sandwich", type: "nonveg" },
          { name: "Chilli Chicken Wrap", price: 140, category: "sandwich", type: "nonveg" },
        ]
      },
      {
        title: "🥤 SHAKES",
        items: [
          { name: "Vanilla", price: 80, category: "beverages", type: "veg" },
          { name: "Chocolate", price: 80, category: "beverages", type: "veg" },
          { name: "Strawberry", price: 80, category: "beverages", type: "veg" },
          { name: "Oreo Shake", price: 147, category: "beverages", type: "veg" },
          { name: "KitKat Shake", price: 135, category: "beverages", type: "veg" },
          { name: "Peanut Butter Shake", price: 147, category: "beverages", type: "veg" },
          { name: "Nutella Crunch", price: 168, category: "beverages", type: "veg" },
          { name: "Blue Lagoon", price: 63, category: "beverages", type: "veg" },
          { name: "Fresh Lime Soda", price: 70, category: "beverages", type: "veg" },
          { name: "Peach Mojito", price: 80, category: "beverages", type: "veg" },
          { name: "Green Apple Mojito", price: 80, category: "beverages", type: "veg" },
          { name: "Watermelon Mojito", price: 80, category: "beverages", type: "veg" },
          { name: "Cold Coffee", price: 90, category: "beverages", type: "veg" },
        ]
      },
      {
        title: "🍨 DESSERTS",
        items: [
          { name: "Vanilla Ice Cream", price: 70, category: "desserts", type: "veg" },
          { name: "Chocolate Ice Cream", price: 80, category: "desserts", type: "veg" },
          { name: "Hot Chocolate Fudge", price: 130, category: "desserts", type: "veg" },
          { name: "Brownie Sundae", price: 150, category: "desserts", type: "veg" },
        ]
      }
    ]
  },

  southernStories: {
    outletName: "Southern Stories",
    sections: [
      {
        title: "🥞 DOSAS",
        items: [
          { name: "Plain Dosa", price: 70, category: "south-indian", type: "veg" },
          { name: "Masala Dosa", price: 80, category: "south-indian", type: "veg" },
          { name: "Rawa Dosa", price: 90, category: "south-indian", type: "veg" },
          { name: "Rawa Onion / Masala Dosa", price: 100, category: "south-indian", type: "veg" },
          { name: "Podi Butter Masala Dosa", price: 100, category: "south-indian", type: "veg" },
          { name: "Mysore Masala Dosa", price: 110, category: "south-indian", type: "veg" },
          { name: "Ghee Roast Masala Dosa", price: 120, category: "south-indian", type: "veg" },
          { name: "Cheese Dosa / Paneer Dosa", price: 120, category: "south-indian", type: "veg" },
          { name: "Cheese Masala Dosa", price: 130, category: "south-indian", type: "veg" },
          { name: "Paper Masala Dosa", price: 150, category: "south-indian", type: "veg" },
        ]
      },
      {
        title: "🥘 UTTAPAM",
        items: [
          { name: "Onion Uttapam", price: 80, category: "south-indian", type: "veg" },
          { name: "Tomato Onion Uttapam", price: 90, category: "south-indian", type: "veg" },
          { name: "Veg Uttapam", price: 100, category: "south-indian", type: "veg" },
          { name: "Paneer Uttapam", price: 120, category: "south-indian", type: "veg" },
          { name: "Mixed Uttapam", price: 130, category: "south-indian", type: "veg" },
        ]
      },
      {
        title: "🫓 PARATHA / BREADS",
        items: [
          { name: "Aloo Payaaz Paratha (1pc)", price: 60, category: "paranthas", type: "veg" },
          { name: "Aloo Payaaz Paratha (2pcs)", price: 110, category: "paranthas", type: "veg" },
          { name: "Mixed Veg Paratha (1pc)", price: 65, category: "paranthas", type: "veg" },
          { name: "Mixed Veg Paratha (2pcs)", price: 120, category: "paranthas", type: "veg" },
          { name: "Gobhi Paratha (1pc)", price: 65, category: "paranthas", type: "veg" },
          { name: "Gobhi Paratha (2pcs)", price: 120, category: "paranthas", type: "veg" },
          { name: "Paneer Paratha (1pc)", price: 75, category: "paranthas", type: "veg" },
          { name: "Paneer Paratha (2pcs)", price: 140, category: "paranthas", type: "veg" },
          { name: "Paratha with Paneer Korma", price: 130, category: "paranthas", type: "veg" },
        ]
      },
      {
        title: "🍛 SIDES / SNACKS",
        items: [
          { name: "Idli Sambhar", price: 70, category: "south-indian", type: "veg" },
          { name: "Vada Sambhar", price: 75, category: "south-indian", type: "veg" },
          { name: "Idli / Vada Combo", price: 75, category: "south-indian", type: "veg" },
          { name: "Pav Bhaji", price: 80, category: "sides(street-food)", type: "veg" },
          { name: "Channa Kulcha", price: 100, category: "sides(street-food)", type: "veg" },
          { name: "Rajma Rice Bowl", price: 120, category: "rice-items", type: "veg" },
          { name: "Chole Rice Bowl", price: 120, category: "rice-items", type: "veg" },
          { name: "Chole Bhatura", price: 130, category: "chole-bhature", type: "veg" },
        ]
      },
      {
        title: "☕ BEVERAGES",
        items: [
          { name: "Filter Coffee", price: 40, category: "beverages", type: "veg" },
          { name: "Classic Cold Coffee", price: 70, category: "beverages", type: "veg" },
          { name: "Hazelnut / Irish / Caramel Cold Coffee", price: 85, category: "beverages", type: "veg" },
          { name: "KitKat / Oreo Coffee Shake", price: 85, category: "beverages", type: "veg" },
          { name: "Lassi", price: 65, category: "beverages", type: "veg" },
          { name: "Softy Cone", price: 30, category: "beverages", type: "veg" },
        ]
      }
    ]
  },

  snapEats: {
    outletName: "Snap Eats",
    sections: [
      {
        title: "☕ HOT BEVERAGES",
        items: [
          { name: "Cappuccino", price: 49, category: "beverages", type: "veg" },
          { name: "Hot Coffee", price: 49, category: "beverages", type: "veg" },
          { name: "Hot Chocolate", price: 59, category: "beverages", type: "veg" },
          { name: "Adrak Chai (Cup)", price: 10, category: "beverages", type: "veg" },
          { name: "Adrak Chai (Kulhad)", price: 20, category: "beverages", type: "veg" },
          { name: "Masala Chai (Cup)", price: 10, category: "beverages", type: "veg" },
          { name: "Masala Chai (Kulhad)", price: 20, category: "beverages", type: "veg" },
        ]
      },
      {
        title: "🥪 SANDWICHES",
        items: [
          { name: "Veg Sandwich", price: 69, category: "sandwich", type: "veg" },
          { name: "Cheese Sandwich", price: 99, category: "sandwich", type: "veg" },
          { name: "Paneer Tikka Sandwich", price: 99, category: "sandwich", type: "veg" },
          { name: "Chicken Tikka Sandwich", price: 129, category: "sandwich", type: "nonveg" },
          { name: "Seekh Kebab Sandwich", price: 129, category: "sandwich", type: "nonveg" },
        ]
      },
      {
        title: "🍔 BURGERS",
        items: [
          { name: "Veg Burger", price: 59, category: "burger", type: "veg" },
          { name: "Cheese Burger", price: 69, category: "burger", type: "veg" },
          { name: "Peppy Paneer Burger", price: 109, category: "burger", type: "veg" },
          { name: "Egg & Mayo Burger", price: 99, category: "burger", type: "nonveg" },
          { name: "Chicken Burger", price: 129, category: "burger", type: "nonveg" },
        ]
      },
      {
        title: "🔥 DIL SE TANDOORI",
        items: [
          { name: "Malai Paneer Tikka (8 Pcs.)", price: 249, category: "tandoori", type: "veg" },
          { name: "Malai Soya Chap (8 Pcs.)", price: 199, category: "tandoori", type: "veg" },
          { name: "Tandoori Mushroom (8 Pcs.)", price: 199, category: "tandoori", type: "veg" },
          { name: "Chicken Tikka (8 Pcs.)", price: 299, category: "tandoori", type: "nonveg" },
          { name: "Seekh Kebab – Chicken (8 Pcs.)", price: 299, category: "tandoori", type: "nonveg" },
          { name: "Seekh Kebab – Mutton (8 Pcs.)", price: 349, category: "tandoori", type: "nonveg" },
          { name: "Tandoori Chicken Half (4 Pcs.)", price: 199, category: "tandoori", type: "nonveg" },
          { name: "Tandoori Chicken Full (8 Pcs.)", price: 349, category: "tandoori", type: "nonveg" },
          { name: "Lachha Parantha", price: 59, category: "paranthas", type: "veg" },
          { name: "Garlic Naan", price: 59, category: "paranthas", type: "veg" },
          { name: "Butter Naan", price: 59, category: "paranthas", type: "veg" },
          { name: "Chicken Keema Naan", price: 139, category: "paranthas", type: "nonveg" },
          { name: "Mutton Keema Naan", price: 199, category: "paranthas", type: "nonveg" },
          { name: "Chicken Tangdi (4 Pcs.)", price: 249, category: "tandoori", type: "nonveg" },
        ]
      },
      {
        title: "🍟 CRISPY SNACKS",
        items: [
          { name: "Classic Salted Fries", price: 80, category: "fries", type: "veg" },
          { name: "Peri Peri Fries", price: 99, category: "fries", type: "veg" },
          { name: "Potato Wedges", price: 99, category: "sides(street-food)", type: "veg" },
          { name: "Sweet Corn", price: 99, category: "sides(street-food)", type: "veg" },
          { name: "Crispy Corn", price: 129, category: "sides(street-food)", type: "veg" },
          { name: "Crispy Chicken", price: 159, category: "sides(street-food)", type: "nonveg" },
          { name: "Honey Chilly Potato", price: 129, category: "sides(street-food)", type: "veg" },
          { name: "Chilly Paneer Dry", price: 159, category: "sides(street-food)", type: "veg" },
          { name: "Chilly Chicken Dry", price: 249, category: "sides(street-food)", type: "nonveg" },
        ]
      },
      {
        title: "🥟 DIMSUMS & ROLLS",
        items: [
          { name: "Veg Momos (8 Pcs.) Steamed", price: 99, category: "momos", type: "veg" },
          { name: "Veg Momos (8 Pcs.) Fried", price: 119, category: "momos", type: "veg" },
          { name: "Paneer Momos (8 Pcs.) Steamed", price: 119, category: "momos", type: "veg" },
          { name: "Paneer Momos (8 Pcs.) Fried", price: 129, category: "momos", type: "veg" },
          { name: "Chicken Momos (8 Pcs.) Steamed", price: 129, category: "momos", type: "nonveg" },
          { name: "Chicken Momos (8 Pcs.) Fried", price: 139, category: "momos", type: "nonveg" },
          { name: "Veg Cigar Rolls", price: 119, category: "rolls", type: "veg" },
          { name: "Chicken Cigar Rolls", price: 139, category: "rolls", type: "nonveg" },
        ]
      },
      {
        title: "🌮 STREET FLAVOURS",
        items: [
          { name: "Pao Bhaji", price: 70, category: "sides(street-food)", type: "veg" },
          { name: "Chole Bhature", price: 89, category: "chole-bhature", type: "veg" },
          { name: "Paneer Bread Pakora", price: 49, category: "sides(street-food)", type: "veg" },
          { name: "Classic Bread Omelette", price: 79, category: "sides(street-food)", type: "veg" },
          { name: "Cheese Bread Omelette", price: 99, category: "sides(street-food)", type: "veg" },
          { name: "Chicken Bread Omelette", price: 129, category: "sides(street-food)", type: "nonveg" },
          { name: "Vada Pao", price: 49, category: "sides(street-food)", type: "veg" },
        ]
      },
      {
        title: "🌯 VEG KATHI ROLLS",
        items: [
          { name: "Veg Kathi Roll", price: 99, category: "rolls", type: "veg" },
          { name: "Paneer Kathi Roll", price: 119, category: "rolls", type: "veg" },
          { name: "Paneer Makhan Roll", price: 139, category: "rolls", type: "veg" },
          { name: "Paneer Schezwan Roll", price: 129, category: "rolls", type: "veg" },
          { name: "Paneer Shawarma Roll", price: 99, category: "rolls", type: "veg" },
          { name: "Noodle Roll", price: 89, category: "rolls", type: "veg" },
          { name: "Soya Chap Roll", price: 89, category: "rolls", type: "veg" },
        ]
      },
      {
        title: "🍗 NON VEG KATHI ROLLS",
        items: [
          { name: "Egg Roll", price: 89, category: "rolls", type: "nonveg" },
          { name: "Chicken Tikka Roll", price: 149, category: "rolls", type: "nonveg" },
          { name: "Chicken Achari Roll", price: 129, category: "rolls", type: "nonveg" },
          { name: "Chicken Egg Roll", price: 169, category: "rolls", type: "nonveg" },
          { name: "Chicken Shawarma Roll", price: 159, category: "rolls", type: "nonveg" },
          { name: "Chicken Kebab Roll", price: 129, category: "rolls", type: "nonveg" },
          { name: "Mutton Kebab Roll", price: 189, category: "rolls", type: "nonveg" },
        ]
      },
      {
        title: "🍽 CLASSIC INDIAN COMBOS",
        items: [
          { name: "Aloo Pyaz Parantha with Curd & Pickle", price: 90, category: "paranthas", type: "veg" },
          { name: "Paneer Parantha with Curd & Pickle", price: 99, category: "paranthas", type: "veg" },
          { name: "Egg Parantha with Curd & Pickle", price: 119, category: "paranthas", type: "nonveg" },
          { name: "Chicken Keema Parantha with Curd & Pickle", price: 139, category: "paranthas", type: "nonveg" },
          { name: "Veg Combo with Rice (Rajma / Chole / Kadhi / Soya Chap)", price: 89, category: "rice-items", type: "veg" },
          { name: "Rice & Egg Curry Combo", price: 149, category: "rice-items", type: "nonveg" },
          { name: "Rice & Paneer Combo", price: 149, category: "rice-items", type: "veg" },
          { name: "Chicken Curry (2 Pcs.) with Rice / Parantha / Naan", price: 159, category: "rice-items", type: "nonveg" },
          { name: "Mutton Curry (2 Pcs.) with Rice / Parantha / Naan", price: 259, category: "rice-items", type: "nonveg" },
          { name: "Chicken Biryani with Salan (Serves 2)", price: 299, category: "rice-items", type: "nonveg" },
        ]
      },
      {
        title: "🥤 COLD BEVERAGES",
        items: [
          { name: "Cold Coffee", price: 85, category: "beverages", type: "veg" },
          { name: "Iced Americano", price: 85, category: "beverages", type: "veg" },
          { name: "Iced Cappuccino", price: 85, category: "beverages", type: "veg" },
          { name: "Mint Mojito", price: 85, category: "beverages", type: "veg" },
          { name: "Blue Lagoon", price: 85, category: "beverages", type: "veg" },
          { name: "Oreo Shake", price: 85, category: "beverages", type: "veg" },
          { name: "Kitkat Shake", price: 85, category: "beverages", type: "veg" },
          { name: "Brownie Blast Shake", price: 85, category: "beverages", type: "veg" },
        ]
      }
    ]
  },

  calcuttaChef: {
    outletName: "Calcutta Chef",
    sections: [
      {
        title: "🫓 AMRITSARI KULCHA COMBO",
        items: [
          { name: "Aloo Kulcha", price: 120, category: "sides(street-food)", type: "veg" },
          { name: "Paneer Kulcha", price: 150, category: "sides(street-food)", type: "veg" },
          { name: "Mix Kulcha", price: 130, category: "sides(street-food)", type: "veg" },
        ]
      },
      {
        title: "🍚 VEG RICE & NOODLE BOWL",
        items: [
          { name: "Paneer Rice", price: 170, category: "rice-items", type: "veg" },
          { name: "Butter Rice", price: 120, category: "rice-items", type: "veg" },
          { name: "Dal Fry Rice", price: 150, category: "rice-items", type: "veg" },
          { name: "Veg Biryani", price: 170, category: "rice-items", type: "veg" },
          { name: "Shahi Paneer Rice", price: 190, category: "rice-items", type: "veg" },
          { name: "Chole Paneer Rice", price: 170, category: "rice-items", type: "veg" },
        ]
      },
      {
        title: "🥘 VEGETARIAN MAIN COURSE",
        items: [
          { name: "Dal Makhani", price: 220, category: "main-course", type: "veg" },
          { name: "Butter Paneer Masala", price: 250, category: "main-course", type: "veg" },
          { name: "Paneer Lababdar", price: 250, category: "main-course", type: "veg" },
          { name: "Shahi Paneer", price: 250, category: "main-course", type: "veg" },
          { name: "Kadhai Paneer", price: 250, category: "main-course", type: "veg" },
          { name: "Mushroom Masala", price: 220, category: "main-course", type: "veg" },
          { name: "Mix Veg", price: 200, category: "main-course", type: "veg" },
          { name: "Chole Masala", price: 200, category: "main-course", type: "veg" },
          { name: "Matar Paneer", price: 220, category: "main-course", type: "veg" },
        ]
      },
      {
        title: "🍗 NON VEGETARIAN MAIN COURSE",
        items: [
          { name: "Chicken Tikka Masala", price: 300, category: "main-course", type: "nonveg" },
          { name: "Butter Chicken", price: 300, category: "main-course", type: "nonveg" },
          { name: "Chicken Keema Punjabi", price: 300, category: "main-course", type: "nonveg" },
          { name: "Chicken Lababdar", price: 300, category: "main-course", type: "nonveg" },
          { name: "Chicken Seekh Masala", price: 300, category: "main-course", type: "nonveg" },
        ]
      },
      {
        title: "🥟 MOMOS",
        items: [
          { name: "Veg Momos - Steamed", price: 100, category: "momos", type: "veg" },
          { name: "Veg Momos - Tandoori / Kurkure", price: 130, category: "momos", type: "veg" },
          { name: "Chicken Momos - Steamed", price: 130, category: "momos", type: "nonveg" },
          { name: "Chicken Momos - Tandoori / Kurkure", price: 160, category: "momos", type: "nonveg" },
        ]
      },
      {
        title: "🌯 ROLLS",
        items: [
          { name: "Crispy Chicken Roll", price: 190, category: "rolls", type: "nonveg" },
          { name: "Chicken Tikka Roll", price: 190, category: "rolls", type: "nonveg" },
          { name: "Chicken Kebab Roll", price: 180, category: "rolls", type: "nonveg" },
          { name: "Paneer Tikka Roll", price: 170, category: "rolls", type: "veg" },
          { name: "Soya Chaap Roll", price: 160, category: "rolls", type: "veg" },
        ]
      },
      {
        title: "🔥 NON VEG TANDOORI SNACKS",
        items: [
          { name: "Tandoori Chicken", price: 280, category: "tandoori", type: "nonveg" },
          { name: "Chicken Tikka", price: 280, category: "tandoori", type: "nonveg" },
          { name: "Achari Chicken Tikka", price: 300, category: "tandoori", type: "nonveg" },
          { name: "Chicken Seekh Kebab", price: 280, category: "tandoori", type: "nonveg" },
        ]
      },
      {
        title: "🌿 VEGETARIAN TANDOORI SNACKS",
        items: [
          { name: "Paneer Tikka", price: 250, category: "tandoori", type: "veg" },
          { name: "Achari Paneer Tikka", price: 260, category: "tandoori", type: "veg" },
          { name: "Afgani Chaap", price: 220, category: "tandoori", type: "veg" },
          { name: "Hara Bhara Kabab", price: 200, category: "tandoori", type: "veg" },
          { name: "Tandoori Chaap", price: 220, category: "tandoori", type: "veg" },
        ]
      },
      {
        title: "🫓 BREADS",
        items: [
          { name: "Tandoori Roti / Butter Roti", price: 15, category: "paranthas", type: "veg" },
          { name: "Butter Naan", price: 40, category: "paranthas", type: "veg" },
          { name: "Butter Kulcha Naan", price: 45, category: "paranthas", type: "veg" },
          { name: "Green Chilli Parantha", price: 30, category: "paranthas", type: "veg" },
          { name: "Tawa Parantha", price: 20, category: "paranthas", type: "veg" },
        ]
      },
      {
        title: "☕ BEVERAGES",
        items: [
          { name: "Fresh Brewed Coffee", price: 80, category: "beverages", type: "veg" },
          { name: "Cold Frappe", price: 90, category: "beverages", type: "veg" },
          { name: "Fresh Lime Soda", price: 80, category: "beverages", type: "veg" },
          { name: "Lassi", price: 70, category: "beverages", type: "veg" },
        ]
      }
    ]
  },

  quench: {
    outletName: "Quench",
    sections: [
      {
        title: "🍔 BURGERS",
        items: [
          { name: "Retro Aloo Tikki Burger", price: 55, category: "burger", type: "veg" },
          { name: "Spicy Chilly Lava Burger", price: 60, category: "burger", type: "veg" },
          { name: "Schezwan Burger", price: 65, category: "burger", type: "veg" },
          { name: "Classic Veggie Burger", price: 65, category: "burger", type: "veg" },
          { name: "Crunchy Paneer Burger", price: 70, category: "burger", type: "veg" },
          { name: "Paneer Makani Burger", price: 85, category: "burger", type: "veg" },
          { name: "Maharaja Burger", price: 85, category: "burger", type: "veg" },
        ]
      },
      {
        title: "🍟 FRIES",
        items: [
          { name: "Classic With Mayo", price: 60, category: "fries", type: "veg" },
          { name: "Peri Peri With Mayo", price: 60, category: "fries", type: "veg" },
          { name: "Soy Cheese Fries", price: 70, category: "fries", type: "veg" },
          { name: "Fire n Cheese Fries", price: 75, category: "fries", type: "veg" },
          { name: "Mexican Salsa Fries", price: 75, category: "fries", type: "veg" },
          { name: "Paneer Makani Fries", price: 85, category: "fries", type: "veg" },
        ]
      },
      {
        title: "🍝 PASTAS",
        items: [
          { name: "Arriablata Pasta", price: 90, category: "sides(street-food)", type: "veg" },
          { name: "Alfredo Pasta", price: 90, category: "sides(street-food)", type: "veg" },
          { name: "Pink Sauce Pasta", price: 90, category: "sides(street-food)", type: "veg" },
        ]
      },
      {
        title: "🌯 SIGNATURE WRAPS",
        items: [
          { name: "Aloo Wraps", price: 70, category: "rolls", type: "veg" },
          { name: "Tandoori Veggie Wrap", price: 80, category: "rolls", type: "veg" },
          { name: "Veg Paneer Wrap", price: 90, category: "rolls", type: "veg" },
          { name: "Mexican Salsa Wrap", price: 90, category: "rolls", type: "veg" },
        ]
      },
      {
        title: "🥪 SANDWICHES",
        items: [
          { name: "Veg Masala Grilled", price: 65, category: "sandwich", type: "veg" },
          { name: "Creamy Cheese Corn", price: 75, category: "sandwich", type: "veg" },
          { name: "Spicy Paneer & Jalapeno", price: 90, category: "sandwich", type: "veg" },
          { name: "Paneer Korma Sandwich", price: 90, category: "sandwich", type: "veg" },
          { name: "Bombay Street Style", price: 90, category: "sandwich", type: "veg" },
        ]
      },
      {
        title: "🧇 WAFFLES",
        items: [
          { name: "Choco Waffle", price: 70, category: "sides(street-food)", type: "veg" },
          { name: "Strawberry Waffle", price: 80, category: "sides(street-food)", type: "veg" },
          { name: "Maple Waffle", price: 80, category: "sides(street-food)", type: "veg" },
          { name: "Choco Oreo Waffle", price: 85, category: "sides(street-food)", type: "veg" },
          { name: "Nutella Waffle", price: 85, category: "sides(street-food)", type: "veg" },
        ]
      },
      {
        title: "🥤 THICK SHAKES",
        items: [
          { name: "Banana Shake", price: 60, category: "beverages", type: "veg" },
          { name: "Mango Shake", price: 70, category: "beverages", type: "veg" },
          { name: "Chocolate Shake", price: 70, category: "beverages", type: "veg" },
          { name: "Cold Coffee Shake", price: 70, category: "beverages", type: "veg" },
          { name: "Bubble Gum Shake", price: 85, category: "beverages", type: "veg" },
          { name: "Choc Oreo Shake", price: 85, category: "beverages", type: "veg" },
          { name: "Hazelnut Cold Coffee Shake", price: 85, category: "beverages", type: "veg" },
          { name: "Crunchy Caramel Shake", price: 85, category: "beverages", type: "veg" },
        ]
      }
    ]
  },

  infinityKitchen: {
    outletName: "Infinity Kitchen",
    sections: [
      {
        title: "🥪 MULTIGRAIN SANDWICHES",
        items: [
          { name: "Veg Grilled Sandwich", price: 73, category: "sandwich", type: "veg" },
          { name: "Crispy Veg Sandwich", price: 94, category: "sandwich", type: "veg" },
          { name: "Jungle Paneer Sandwich", price: 94, category: "sandwich", type: "veg" },
          { name: "Crispy Paneer Sandwich", price: 104, category: "sandwich", type: "veg" },
          { name: "Aloo Tikki Sandwich", price: 95, category: "sandwich", type: "veg" },
          { name: "Cheese Corn Sandwich", price: 126, category: "sandwich", type: "veg" },
          { name: "Cheese Pizza Grilled", price: 126, category: "sandwich", type: "veg" },
          { name: "Paneer Masala Sandwich", price: 126, category: "sandwich", type: "veg" },
          { name: "Paneer Makhani Sandwich", price: 147, category: "sandwich", type: "veg" },
        ]
      },
      {
        title: "🍔 BURGERS",
        items: [
          { name: "Veg Burger", price: 63, category: "burger", type: "veg" },
          { name: "Cheese Burger", price: 74, category: "burger", type: "veg" },
          { name: "Chicken Burger", price: 116, category: "burger", type: "nonveg" },
          { name: "Chicken Tikka Burger", price: 147, category: "burger", type: "nonveg" },
          { name: "Chicken Makhni Burger", price: 147, category: "burger", type: "nonveg" },
          { name: "Maharaja Burger", price: 140, category: "burger", type: "veg" },
        ]
      },
      {
        title: "🍟 FRIES",
        items: [
          { name: "Salted Fries", price: 74, category: "fries", type: "veg" },
          { name: "Peri Peri Fries", price: 84, category: "fries", type: "veg" },
          { name: "Cheese Fries", price: 95, category: "fries", type: "veg" },
          { name: "Tandoori Fries", price: 95, category: "fries", type: "veg" },
          { name: "Cheese Baked Fries", price: 157, category: "fries", type: "veg" },
        ]
      },
      {
        title: "🌯 VEG WRAPS",
        items: [
          { name: "Soya Chap Wrap", price: 116, category: "rolls", type: "veg" },
          { name: "Paneer Tikka Wrap", price: 147, category: "rolls", type: "veg" },
          { name: "Paneer Bhuji Wrap", price: 147, category: "rolls", type: "veg" },
          { name: "Paneer Shawarma Wrap", price: 147, category: "rolls", type: "veg" },
          { name: "Paneer Makhni Wrap", price: 152, category: "rolls", type: "veg" },
          { name: "Paneer Schezwan Wrap", price: 152, category: "rolls", type: "veg" },
        ]
      },
      {
        title: "🍗 NON VEG WRAPS",
        items: [
          { name: "Egg Wrap (2 Egg)", price: 95, category: "rolls", type: "nonveg" },
          { name: "Chicken Kebab Wrap", price: 189, category: "rolls", type: "nonveg" },
          { name: "Chicken Tikka Wrap", price: 189, category: "rolls", type: "nonveg" },
          { name: "Chicken Makhani Wrap", price: 189, category: "rolls", type: "nonveg" },
          { name: "Chicken Shawarma Wrap", price: 189, category: "rolls", type: "nonveg" },
        ]
      },
      {
        title: "🫓 PARANTHAS",
        items: [
          { name: "Aloo Paratha", price: 75, category: "paranthas", type: "veg" },
          { name: "Pyaz Paratha", price: 75, category: "paranthas", type: "veg" },
          { name: "Mix Paratha", price: 75, category: "paranthas", type: "veg" },
          { name: "Paneer Paratha", price: 95, category: "paranthas", type: "veg" },
          { name: "Egg Paratha", price: 95, category: "paranthas", type: "nonveg" },
          { name: "Gobhi Paratha", price: 75, category: "paranthas", type: "veg" },
        ]
      },
      {
        title: "🍛 SIDES",
        items: [
          { name: "Choly Bhature", price: 50, category: "sides(street-food)", type: "veg" },
          { name: "Poori Sabji", price: 50, category: "sides(street-food)", type: "veg" },
          { name: "Kachori Sabji", price: 50, category: "sides(street-food)", type: "veg" },
          { name: "Vada Pao", price: 50, category: "sides(street-food)", type: "veg" },
        ]
      },
      {
        title: "🍱 COMBO",
        items: [
          { name: "Kadahi Paneer + 2pc Lachha Paratha", price: 180, category: "main-course", type: "veg" },
          { name: "Dal Makhni + 2pc Lachha Paratha", price: 180, category: "main-course", type: "veg" },
        ]
      },
      {
        title: "☕ HOT BEVERAGES",
        items: [
          { name: "Adrak Chai (S)", price: 11, category: "beverages", type: "veg" },
          { name: "Adrak Chai (R)", price: 16, category: "beverages", type: "veg" },
          { name: "Masala Chai (S)", price: 11, category: "beverages", type: "veg" },
          { name: "Masala Chai (R)", price: 16, category: "beverages", type: "veg" },
          { name: "Hot / Black Coffee", price: 45, category: "beverages", type: "veg" },
          { name: "Cappuccino", price: 60, category: "beverages", type: "veg" },
          { name: "Latte", price: 70, category: "beverages", type: "veg" },
          { name: "Mocha", price: 80, category: "beverages", type: "veg" },
        ]
      },
      {
        title: "🧋 COLD COFFEE & SHAKES",
        items: [
          { name: "Cold Coffee", price: 69, category: "beverages", type: "veg" },
          { name: "Ice Latte", price: 116, category: "beverages", type: "veg" },
          { name: "Hazelnut Cold", price: 147, category: "beverages", type: "veg" },
          { name: "Caramel Frappe", price: 147, category: "beverages", type: "veg" },
          { name: "Oreo Shake", price: 147, category: "beverages", type: "veg" },
          { name: "Kit Kat Shake", price: 147, category: "beverages", type: "veg" },
          { name: "Vanilla Shake", price: 104, category: "beverages", type: "veg" },
          { name: "Chocolate Shake", price: 104, category: "beverages", type: "veg" },
          { name: "Strawberry Shake", price: 104, category: "beverages", type: "veg" },
        ]
      },
      {
        title: "🍹 MOJITOS",
        items: [
          { name: "Classic Mint Mojito", price: 105, category: "beverages", type: "veg" },
          { name: "Kiwi Mojito", price: 105, category: "beverages", type: "veg" },
          { name: "Peach Mojito", price: 105, category: "beverages", type: "veg" },
          { name: "Green Apple Mojito", price: 105, category: "beverages", type: "veg" },
          { name: "Strawberry Mojito", price: 105, category: "beverages", type: "veg" },
          { name: "Watermelon Mojito", price: 105, category: "beverages", type: "veg" },
          { name: "Blue Lagoon", price: 62, category: "beverages", type: "veg" },
          { name: "Lime Soda", price: 55, category: "beverages", type: "veg" },
        ]
      }
    ]
  }
}
