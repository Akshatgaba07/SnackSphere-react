export const outlets = [
  {
    name: "Maggi Hotspot (Nescafe)",
    rating: 4.4,
    category: "Maggi • Coffee",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlEmKueYjDe3Sqy1znV7n6HqOncZIV-xBfw&s",
    menuId: "maggiHotspot"
  },
  {
    name: "Infinity Kitchen",
    rating: 4.2,
    category: "Rolls • North Indian",
    image: "https://static1.squarespace.com/static/51705dafe4b09442896bb75d/t/51935e15e4b0ff34061189e6/1758594573677/-infinity kitchens",
    menuId: "infinityKitchen"
  },
  {
    name: "Southern Stories",
    rating: 4.5,
    category: "South Indian",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd62au3cuPlWoUrbuuEE8aGW_57BFUDyrK7Q&s",
    menuId: "southernStories"
  },
  {
    name: "House of Chow",
    rating: 4.1,
    category: "Chinese • Asian",
    image: "https://lh3.googleusercontent.com/yv-RzFnYFdGrCew-LR-_7nLIyxU1XTmvhd5mrf2lVbZcsipN0U3Y2HvYZYtv9C_VP09BEbPPC4GBfBAEyn1B9fT3boK1-rIzUKZvCmg",
    menuId: "houseOfChow"
  },
  {
    name: "Calcutta Chef",
    rating: 4.0,
    category: "Indian Meals",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJ_36HdgWuZLzSAKD8szRe4eNgX13D3_DpQ&s",
    menuId: "calcuttaChef"
  },
  {
    name: "Snap Eats",
    rating: 3.9,
    category: "Burgers • Snacks",
    image: "https://dcassetcdn.com/design_img/188319/109880/109880_2174093_188319_thumbnail.jpg",
    menuId: "snapEats"
  },
  {
    name: "Quench",
    rating: 4.3,
    category: "Juices • Beverages",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6hcNZ0m-70XgbMeKc6HvAAEjE9YBLOA7c9Q&s",
    menuId: "quench"
  },
  {
    name: "Subway",
    rating: 4.6,
    category: "Subs • Healthy",
    image: "https://thumbs.dreamstime.com/z/subway-logo-subway-logo-white-background-vector-format-avaliable-129290681.jpg",
    menuId: "subway"
  }
]

export const foodCategories = [
  { label: "Burger", key: "burger", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop" },
  { label: "Main Course", key: "main-course", image: "https://assets.vogue.com/photos/6352ccb841ea2bd565be085f/1:1/w_3349,h_3350,c_limit/GettyImages-1223580360.jpg" },
  { label: "Chinese", key: "chinese", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=200&h=200&fit=crop" },
  { label: "Sandwich", key: "sandwich", image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=200&h=200&fit=crop" },
  { label: "Momos", key: "momos", image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=200&h=200&fit=crop" },
  { label: "Chole-Bhature", key: "chole-bhature", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&h=200&fit=crop" },
  { label: "Tandoori", key: "tandoori", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=200&h=200&fit=crop" },
  { label: "Maggi", key: "maggi", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=200&h=200&fit=crop" },
  { label: "Paranthas", key: "paranthas", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&h=200&fit=crop" },
  { label: "Rice Items", key: "rice-items", image: "https://www.sharmispassions.com/wp-content/uploads/2018/03/chicken-fried-rice3.jpg" },
  { label: "South Indian", key: "south-indian", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinCKGPNr2g5zx4Qet43b2n3rGXhO-_ppJww&s" },
  { label: "Beverages", key: "beverages", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=200&h=200&fit=crop" },
  { label: "Fries", key: "fries", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&h=200&fit=crop" },
  { label: "Sides", key: "sides(street-food)", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&h=200&fit=crop" },
  { label: "Rolls", key: "rolls", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=200&h=200&fit=crop" },
  { label: "All", key: "all", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&h=200&fit=crop" }
]

export const foodCategoryMap = {
  burger: ["Infinity Kitchen", "House of Chow", "Snap Eats", "Quench"],
  chinese: ["Infinity Kitchen", "House of Chow", "Calcutta Chef", "Snap Eats"],
  sandwich: ["Infinity Kitchen", "House of Chow", "Snap Eats", "Quench"],
  tandoori: ["Snap Eats", "Calcutta Chef"],
  momos: ["Infinity Kitchen", "House of Chow", "Calcutta Chef", "Snap Eats"],
  maggi: ["Maggi Hotspot (Nescafe)"],
  paranthas: ["Snap Eats", "Southern Stories", "Infinity Kitchen", "Calcutta Chef"],
  "south-indian": ["Southern Stories"],
  beverages: ["Maggi Hotspot (Nescafe)", "Infinity Kitchen", "Southern Stories", "House of Chow", "Calcutta Chef", "Snap Eats", "Quench", "Subway"],
  fries: ["Snap Eats", "Infinity Kitchen", "House of Chow", "Quench"],
  rolls: ["Infinity Kitchen", "Snap Eats", "Calcutta Chef", "Quench"],
  "sides(street-food)": ["Southern Stories", "Snap Eats", "Calcutta Chef", "Quench"],
  "rice-items": ["Southern Stories", "House of Chow", "Snap Eats", "Maggi Hotspot (Nescafe)", "Calcutta Chef"],
  "chole-bhature": ["Southern Stories", "Snap Eats"],
  "main-course": ["Calcutta Chef", "Southern Stories", "House of Chow", "Snap Eats", "Infinity Kitchen"],
  all: ["Maggi Hotspot (Nescafe)", "Infinity Kitchen", "Southern Stories", "House of Chow", "Calcutta Chef", "Snap Eats", "Quench", "Subway"]
}

export const adminCredentials = [
  { email: "houseofchow@bennett.edu.in", password: "123456", outlet: "House of Chow" },
  { email: "southernstories@bennett.edu.in", password: "123456", outlet: "Southern Stories" },
  { email: "maggihotspot@bennett.edu.in", password: "123456", outlet: "Maggi Hotspot (Nescafe)" },
  { email: "snapeats@bennett.edu.in", password: "123456", outlet: "Snap Eats" },
  { email: "calcuttachef@bennett.edu.in", password: "123456", outlet: "Calcutta Chef" },
  { email: "infinitykitchen@bennett.edu.in", password: "123456", outlet: "Infinity Kitchen" },
  { email: "quench@bennett.edu.in", password: "123456", outlet: "Quench" }
]
