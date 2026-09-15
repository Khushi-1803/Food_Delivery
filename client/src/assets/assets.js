import logo from "./logo.png";
import cart from "./cart.png";
import search from "./search.png";
import favourite from "./favourite.png";

import burger_cat from "./burger_cat.jpg";
import pizza_cat from "./pizza_cat.jpg";
import taccos_cat from "./taccos_cat.jpg";
import french_fries_cat from "./french_fries_cat.jpg";
import momos_cat from "./momos_cat.jpg";
import coke from "./coke.jpg";
import hotdog_cat from "./hotdog_cat.jpg";
import burger_bs from "./burger_bs.jpg";
import pizza_bs from "./pizza_bs.jpg";
import momos_bs from "./momos_bs.jpg";
import hotdog_bs from "./hotdog_bs.jpg";
import loop1 from "./loop1.jpg";
import loop2 from "./loop2.jpg";
import loop3 from "./loop3.jpg";
import loop4 from "./loop4.jpg";
import loop5 from "./loop5.jpg";
import loop6 from "./loop6.jpg";
import loop7 from "./loop7.jpg";
import loop8 from "./loop8.jpg";

import burger1_fl from "./burger1_fl.jpg";
import burger3_fl from "./burger3_fl.jpg";
import burger4_fl from "./burger4_fl.jpg";
import burger5_fl from "./burger5_fl.jpg";

import pizza1_fl from "./pizza1_fl.jpg";
import pizza2_fl from "./pizza2_fl.jpg";
import pizza3_fl from "./pizza3_fl.jpg";
import pizza4_fl from "./pizza4_fl.jpg";
import pizza5_fl from "./pizza5_fl.jpg";

import fries1_fl from "./fries1_fl.jpg";
import fries2_fl from "./fries2_fl.jpg";
import fries3_fl from "./fries3_fl.jpg";
import fries4_fl from "./fries4_fl.jpg";
import fries5_fl from "./fries5_fl.jpg";

import hd1_fl from "./hd1_fl.jpg";
import hd2_fl from "./hd2_fl.jpg";
import hd3_fl from "./hd3_fl.jpg";
import hd4_fl from "./hd4_fl.jpg";
import hd5_fl from "./hd5_fl.jpg";

import cc1_fl from "./cc1_fl.jpg";
import cc2_fl from "./cc2_fl.jpg";
import cc3_fl from "./cc3_fl.jpg";
import cc4_fl from "./cc4_fl.jpg";
import cc5_fl from "./cc5_fl.jpg";

import momo1_fl from "./momo1_fl.jpg";
import momo2_fl from "./momo2_fl.jpg";
import momo3_fl from "./momo3_fl.jpg";
import momo4_fl from "./momo4_fl.jpg";
import momo5_fl from "./momo5_fl.jpg";

import noodles1_fl from "./noodles1_fl.jpg";
import noodles2_fl from "./noodles2_fl.jpg";
import noodles3_fl from "./noodles3_fl.jpg";
import noodles4_fl from "./noodles4_fl.jpg";
import noodles5_fl from "./noodles5_fl.jpg";

import taccos1_fl from "./taccos1_fl.jpg";
import taccos2_fl from "./taccos2_fl.jpg";
import taccos3_fl from "./taccos3_fl.jpg";
import taccos4_fl from "./taccos4_fl.jpg";
import taccos5_fl from "./taccos5_fl.jpg";

import aboutimg from "./aboutimg.png";
import about2img from "./about2img.png";

import pd from "./pd.jpg";







import coldDrink_bs from "./coldDrink_bs.jpg";

import banner2 from "./banner2.mp4";
import banner_food from "./banner_food.jpg";


const assets = {
  logo,
  cart,
  search,
  favourite,
  burger_cat,
  burger_bs,
  taccos_cat,
  pizza_bs,
  momos_bs,
  hotdog_bs,
  coldDrink_bs,
  pizza_cat,
  french_fries_cat,
  momos_cat,  
  coke,
  hotdog_cat,
  loop1,
  loop2,
  loop3,
  loop4,
  loop5,
  loop6,
  loop7,
  loop8,
  banner2,
  banner_food,
  burger1_fl,
  burger3_fl,
  burger4_fl,
  burger5_fl,
  pizza1_fl,
  pizza2_fl,
  pizza3_fl,
  pizza4_fl,
  pizza5_fl,
  fries1_fl,
  fries2_fl,
  fries3_fl,
  fries4_fl,
  fries5_fl,
  hd1_fl,
  hd2_fl,
  hd3_fl,
  hd4_fl,
  hd5_fl,
  cc1_fl,
  cc2_fl,
  cc3_fl,
  cc4_fl,
  cc5_fl,
  momo1_fl,
  momo2_fl,
  momo3_fl,
  momo4_fl,
  momo5_fl,
  noodles1_fl,
  noodles2_fl,
  noodles3_fl,
  noodles4_fl,
  noodles5_fl,
  taccos1_fl,
  taccos2_fl,
  taccos3_fl,
  taccos4_fl,
  taccos5_fl,
  aboutimg,
  about2img,
  pd

 
};


export const categories = [
  {
    text: "Burgers",
    path: "Burger",
    image: burger_cat,
  },
  {
    text: "Pizzas",
    path: "Pizza",
    image: pizza_cat,
  },
  {
    text: "Cold Drinks",
    path: "Cold Drink",
    image: coke,
  },
  {
    text: "French Fries",
    path: "French Fries",
    image: french_fries_cat,
  },
  {
    text: "Momos",
    path: "Momos",
    image: momos_cat,
  },
  {
    text: "Hotdogs",
    path: "Hot Dog",
    image: hotdog_cat,
  },
  {
    text: "Taccos",
    path: "Tacos",
    image: taccos_cat,
  },
];



export const bestSellers = [
  {
    text: "Chicken Burgers",
    price: 250,
    image: burger_bs
  },
  {
    text: "Pepperoni pizzas",
    price: 250,
    image: pizza_bs
  },
  {
    text: "Fried Momos",
    price: 250,
    image: momos_bs
  },
  {
    text: "Cheeze Hotdogs",
    price: 250,
    image: hotdog_bs
  },
  {
    text: "Coca Cola",
    price: 250,
    image: coldDrink_bs
  }

];

export const FoodList = [
  // Burgers
  { id: 1, image:burger1_fl, name: "Veg Burger", rating: 4.5, deliveryTime: "20-25 mins", category: "Burger" },
  { id: 2, image:burger_cat, name: "Cheese Burger", rating: 4.7, deliveryTime: "25-30 mins", category: "Burger" },
  { id: 3, image:burger3_fl, name: "Patty Burger", rating: 4.6, deliveryTime: "25-30 mins", category: "Burger" },
  { id: 4, image:burger4_fl, name: "Chicken Burger", rating: 4.8, deliveryTime: "20-25 mins", category: "Burger" },
  { id: 5, image:burger5_fl, name: "Paneer Burger", rating: 4.4, deliveryTime: "15-20 mins", category: "Burger" },

  // Pizza
  { id: 6, image:pizza1_fl, name: "Margherita Pizza", rating: 4.8, deliveryTime: "30-35 mins", category: "Pizza" },
  { id: 7, image:pizza2_fl, name: "Farmhouse Pizza", rating: 4.7, deliveryTime: "30-35 mins", category: "Pizza" },
  { id: 8, image:pizza3_fl, name: "Veggie Delight Pizza", rating: 4.6, deliveryTime: "25-30 mins", category: "Pizza" },
  { id: 9, image:pizza4_fl, name: "Pepperoni Pizza", rating: 4.9, deliveryTime: "30-35 mins", category: "Pizza" },
  { id: 10, image:pizza5_fl, name: "Paneer Tikka Pizza", rating: 4.8, deliveryTime: "30-35 mins", category: "Pizza" },

  // Momos
  { id: 11, image:momo1_fl, name: "Veg Steamed Momos", rating: 4.5, deliveryTime: "15-20 mins", category: "Momos" },
  { id: 12, image:momo2_fl, name: "Chicken Momos", rating: 4.7, deliveryTime: "20-25 mins", category: "Momos" },
  { id: 13, image:momo3_fl, name: "Fried Momos", rating: 4.6, deliveryTime: "20-25 mins", category: "Momos" },
  { id: 14, image:momo4_fl, name: "Paneer Momos", rating: 4.4, deliveryTime: "20-25 mins", category: "Momos" },
  { id: 15, image:momo5_fl, name: "Tandoori Momos", rating: 4.9, deliveryTime: "25-30 mins", category: "Momos" },

  // Tacos
  { id: 16, image:taccos1_fl, name: "Veg Taco", rating: 4.5, deliveryTime: "20-25 mins", category: "Tacos" },
  { id: 17, image:taccos2_fl, name: "Chicken Taco", rating: 4.8, deliveryTime: "20-25 mins", category: "Tacos" },
  { id: 18, image:taccos3_fl, name: "Cheesy Taco", rating: 4.6, deliveryTime: "20-25 mins", category: "Tacos" },
  { id: 19, image:taccos4_fl, name: "Spicy Taco", rating: 4.4, deliveryTime: "15-20 mins", category: "Tacos" },
  { id: 20, image:taccos5_fl, name: "Mexican Taco", rating: 4.7, deliveryTime: "25-30 mins", category: "Tacos" },

  // French Fries
  { id: 21, image:fries1_fl, name: "Classic French Fries", rating: 4.5, deliveryTime: "15-20 mins", category: "French Fries" },
  { id: 22, image:fries2_fl, name: "Peri Peri Fries", rating: 4.8, deliveryTime: "20-25 mins", category: "French Fries" },
  { id: 23, image:fries3_fl, name: "Cheese Fries", rating: 4.7, deliveryTime: "20-25 mins", category: "French Fries" },
  { id: 24, image:fries4_fl, name: "Masala Fries", rating: 4.6, deliveryTime: "15-20 mins", category: "French Fries" },
  { id: 25, image:fries5_fl, name: "Loaded Fries", rating: 4.9, deliveryTime: "25-30 mins", category: "French Fries" },

  // Cold Drinks
  { id: 26, image:cc1_fl, name: "Coca-Cola", rating: 4.6, deliveryTime: "10-15 mins", category: "Cold Drink" },
  { id: 27, image:cc2_fl, name: "Pepsi", rating: 4.5, deliveryTime: "10-15 mins", category: "Cold Drink" },
  { id: 28, image:cc3_fl, name: "Sprite", rating: 4.7, deliveryTime: "10-15 mins", category: "Cold Drink" },
  { id: 29, image:cc4_fl, name: "Fanta", rating: 4.4, deliveryTime: "10-15 mins", category: "Cold Drink" },
  { id: 30, image:cc5_fl, name: "Lemon Soda", rating: 4.8, deliveryTime: "10-15 mins", category: "Cold Drink" },

  // Hot Dogs
  { id: 31, image:hd1_fl, name: "Classic Hot Dog", rating: 4.5, deliveryTime: "20-25 mins", category: "Hot Dog" },
  { id: 32, image:hd2_fl, name: "Cheese Hot Dog", rating: 4.8, deliveryTime: "20-25 mins", category: "Hot Dog" },
  { id: 33, image:hd3_fl, name: "Chicken HotDog", rating: 4.7, deliveryTime: "25-30 mins", category: "Hot Dog" },
  { id: 34, image:hd4_fl, name: "Spicy Hot Dog", rating: 4.6, deliveryTime: "20-25 mins", category: "Hot Dog" },
  { id: 35, image:hd5_fl, name: "Loaded Hot Dog", rating: 4.9, deliveryTime: "25-30 mins", category: "Hot Dog" },

  // Noodles
  { id: 36, image:noodles1_fl, name: "Hakka Noodles", rating: 4.7, deliveryTime: "20-25 mins", category: "Noodles" },
  { id: 37, image:noodles2_fl, name: "Veg Chow Mein", rating: 4.5, deliveryTime: "20-25 mins", category: "Noodles" },
  { id: 38, image:noodles3_fl, name: "Chicken Noodles", rating: 4.8, deliveryTime: "25-30 mins", category: "Noodles" },
  { id: 39, image:noodles4_fl, name: "Schezwan Noodles", rating: 4.9, deliveryTime: "20-25 mins", category: "Noodles" },
  { id: 40, image:noodles5_fl, name: "Paneer Noodles", rating: 4.6, deliveryTime: "20-25 mins", category: "Noodles" },
];



export const ProductDetails = [
  {
    id: 1,
    name: "Veg Burger",
    image: burger1_fl,
    category: "Burger",
    rating: 4.5,
    price: 149,
    oldPrice: 179,
    deliveryTime: "20-25 mins",
    description:
      "Fresh veg patty with lettuce, tomato, onion and creamy mayonnaise in a toasted bun.",
    ingredients: [
      "Veg Patty",
      "Cheese",
      "Lettuce",
      "Tomato",
      "Onion",
      "Burger Bun"
    ],
    bestseller: true
  },

  {
    id: 2,
    name: "Cheese Burger",
    image: burger_cat,
    category: "Burger",
    rating: 4.7,
    price: 189,
    oldPrice: 219,
    deliveryTime: "25-30 mins",
    description:
      "Loaded with double cheese, crispy veg patty and fresh vegetables.",
    ingredients: [
      "Veg Patty",
      "Cheddar Cheese",
      "Lettuce",
      "Tomato",
      "Burger Bun"
    ],
    bestseller: true
  },

  {
    id: 3,
    name: "Patty Burger",
    image: burger3_fl,
    category: "Burger",
    rating: 4.6,
    price: 169,
    oldPrice: 199,
    deliveryTime: "25-30 mins",
    description:
      "Crunchy crispy patty burger with fresh vegetables and sauces.",
    ingredients: [
      "Veg Patty",
      "Onion",
      "Tomato",
      "Sauce",
      "Burger Bun"
    ],
    bestseller: false
  },

  {
    id: 4,
    name: "Chicken Burger",
    image: burger4_fl,
    category: "Burger",
    rating: 4.8,
    price: 229,
    oldPrice: 259,
    deliveryTime: "20-25 mins",
    description:
      "Juicy grilled chicken burger with lettuce and signature sauce.",
    ingredients: [
      "Chicken Patty",
      "Cheese",
      "Lettuce",
      "Tomato",
      "Burger Bun"
    ],
    bestseller: true
  },

  {
    id: 5,
    name: "Paneer Burger",
    image: burger5_fl,
    category: "Burger",
    rating: 4.4,
    price: 179,
    oldPrice: 209,
    deliveryTime: "15-20 mins",
    description:
      "Grilled paneer patty burger with fresh veggies and spicy mayo.",
    ingredients: [
      "Paneer Patty",
      "Cheese",
      "Onion",
      "Tomato",
      "Burger Bun"
    ],
    bestseller: false
  },

  {
    id: 6,
    name: "Margherita Pizza",
    image: pizza1_fl,
    category: "Pizza",
    rating: 4.8,
    price: 299,
    oldPrice: 349,
    deliveryTime: "30-35 mins",
    description:
      "Classic pizza topped with mozzarella cheese and tomato sauce.",
    ingredients: [
      "Pizza Base",
      "Mozzarella",
      "Tomato Sauce",
      "Oregano"
    ],
    bestseller: true
  },

  {
    id: 7,
    name: "Farmhouse Pizza",
    image: pizza2_fl,
    category: "Pizza",
    rating: 4.7,
    price: 399,
    oldPrice: 449,
    deliveryTime: "30-35 mins",
    description:
      "Loaded with onion, capsicum, mushrooms and sweet corn.",
    ingredients: [
      "Pizza Base",
      "Cheese",
      "Capsicum",
      "Mushroom",
      "Corn"
    ],
    bestseller: true
  },

  {
    id: 8,
    name: "Veggie Delight Pizza",
    image: pizza3_fl,
    category: "Pizza",
    rating: 4.6,
    price: 349,
    oldPrice: 389,
    deliveryTime: "25-30 mins",
    description:
      "Delicious vegetable pizza with premium mozzarella cheese.",
    ingredients: [
      "Pizza Base",
      "Cheese",
      "Tomato",
      "Capsicum",
      "Onion"
    ],
    bestseller: false
  },

  {
    id: 9,
    name: "Pepperoni Pizza",
    image: pizza4_fl,
    category: "Pizza",
    rating: 4.9,
    price: 499,
    oldPrice: 549,
    deliveryTime: "30-35 mins",
    description:
      "Premium pepperoni pizza with extra cheese.",
    ingredients: [
      "Pizza Base",
      "Pepperoni",
      "Mozzarella",
      "Tomato Sauce"
    ],
    bestseller: true
  },

  {
    id: 10,
    name: "Paneer Tikka Pizza",
    image: pizza5_fl,
    category: "Pizza",
    rating: 4.8,
    price: 429,
    oldPrice: 469,
    deliveryTime: "30-35 mins",
    description:
      "Indian-style pizza topped with spicy paneer tikka cubes.",
    ingredients: [
      "Pizza Base",
      "Paneer",
      "Cheese",
      "Capsicum",
      "Onion"
    ],
    bestseller: true
  },
  // Momos

{
  id: 11,
  name: "Veg Steamed Momos",
  image: momo1_fl,
  category: "Momos",
  rating: 4.5,
  price: 149,
  oldPrice: 179,
  deliveryTime: "15-20 mins",
  description:
    "Soft steamed momos filled with fresh vegetables, herbs and delicious seasoning.",
  ingredients: [
    "Momo Dough",
    "Cabbage",
    "Carrot",
    "Onion",
    "Spices"
  ],
  bestseller: true
},

{
  id: 12,
  name: "Chicken Momos",
  image: momo2_fl,
  category: "Momos",
  rating: 4.7,
  price: 179,
  oldPrice: 209,
  deliveryTime: "20-25 mins",
  description:
    "Juicy chicken momos stuffed with seasoned chicken and fresh vegetables.",
  ingredients: [
    "Momo Dough",
    "Chicken",
    "Onion",
    "Cabbage",
    "Spices"
  ],
  bestseller: true
},

{
  id: 13,
  name: "Fried Momos",
  image: momo3_fl,
  category: "Momos",
  rating: 4.6,
  price: 169,
  oldPrice: 199,
  deliveryTime: "20-25 mins",
  description:
    "Crispy fried momos filled with flavorful vegetables and served hot.",
  ingredients: [
    "Momo Dough",
    "Vegetables",
    "Onion",
    "Garlic",
    "Spices"
  ],
  bestseller: false
},

{
  id: 14,
  name: "Paneer Momos",
  image: momo4_fl,
  category: "Momos",
  rating: 4.4,
  price: 179,
  oldPrice: 209,
  deliveryTime: "20-25 mins",
  description:
    "Delicious momos stuffed with soft paneer, fresh vegetables and aromatic spices.",
  ingredients: [
    "Momo Dough",
    "Paneer",
    "Cabbage",
    "Onion",
    "Spices"
  ],
  bestseller: false
},

{
  id: 15,
  name: "Tandoori Momos",
  image: momo5_fl,
  category: "Momos",
  rating: 4.9,
  price: 199,
  oldPrice: 239,
  deliveryTime: "25-30 mins",
  description:
    "Smoky tandoori momos coated with spicy marinade and grilled to perfection.",
  ingredients: [
    "Momo Dough",
    "Paneer",
    "Yogurt",
    "Spices",
    "Tandoori Marinade"
  ],
  bestseller: true
},


// Tacos

{
  id: 16,
  name: "Veg Taco",
  image: taccos1_fl,
  category: "Tacos",
  rating: 4.5,
  price: 129,
  oldPrice: 159,
  deliveryTime: "20-25 mins",
  description:
    "Crispy taco shell filled with fresh vegetables, creamy sauce and flavorful seasoning.",
  ingredients: [
    "Taco Shell",
    "Lettuce",
    "Tomato",
    "Onion",
    "Sauce"
  ],
  bestseller: false
},

{
  id: 17,
  name: "Chicken Taco",
  image: taccos2_fl,
  category: "Tacos",
  rating: 4.8,
  price: 159,
  oldPrice: 189,
  deliveryTime: "20-25 mins",
  description:
    "Crispy taco loaded with juicy seasoned chicken, fresh vegetables and delicious sauce.",
  ingredients: [
    "Taco Shell",
    "Chicken",
    "Lettuce",
    "Tomato",
    "Sauce"
  ],
  bestseller: true
},

{
  id: 18,
  name: "Cheesy Taco",
  image: taccos3_fl,
  category: "Tacos",
  rating: 4.6,
  price: 149,
  oldPrice: 179,
  deliveryTime: "20-25 mins",
  description:
    "Crispy taco filled with melted cheese, fresh vegetables and a flavorful creamy sauce.",
  ingredients: [
    "Taco Shell",
    "Cheese",
    "Lettuce",
    "Tomato",
    "Sauce"
  ],
  bestseller: false
},

{
  id: 19,
  name: "Spicy Taco",
  image: taccos4_fl,
  category: "Tacos",
  rating: 4.4,
  price: 139,
  oldPrice: 169,
  deliveryTime: "15-20 mins",
  description:
    "Spicy and flavorful taco packed with fresh vegetables and hot Mexican-style seasoning.",
  ingredients: [
    "Taco Shell",
    "Onion",
    "Tomato",
    "Jalapeno",
    "Spicy Sauce"
  ],
  bestseller: false
},

{
  id: 20,
  name: "Mexican Taco",
  image: taccos5_fl,
  category: "Tacos",
  rating: 4.7,
  price: 169,
  oldPrice: 199,
  deliveryTime: "25-30 mins",
  description:
    "Classic Mexican-style taco loaded with fresh vegetables, flavorful filling and spicy sauce.",
  ingredients: [
    "Taco Shell",
    "Lettuce",
    "Tomato",
    "Onion",
    "Mexican Sauce"
  ],
  bestseller: true
},


// French Fries

{
  id: 21,
  name: "Classic French Fries",
  image: fries1_fl,
  category: "French Fries",
  rating: 4.5,
  price: 99,
  oldPrice: 129,
  deliveryTime: "15-20 mins",
  description:
    "Golden and crispy classic French fries seasoned with a touch of salt.",
  ingredients: [
    "Potatoes",
    "Salt",
    "Cooking Oil"
  ],
  bestseller: false
},

{
  id: 22,
  name: "Peri Peri Fries",
  image: fries2_fl,
  category: "French Fries",
  rating: 4.8,
  price: 119,
  oldPrice: 149,
  deliveryTime: "20-25 mins",
  description:
    "Crispy golden fries tossed in spicy and flavorful peri peri seasoning.",
  ingredients: [
    "Potatoes",
    "Peri Peri Seasoning",
    "Salt",
    "Cooking Oil"
  ],
  bestseller: true
},

{
  id: 23,
  name: "Cheese Fries",
  image: fries3_fl,
  category: "French Fries",
  rating: 4.7,
  price: 139,
  oldPrice: 169,
  deliveryTime: "20-25 mins",
  description:
    "Crispy French fries topped with creamy melted cheese for a rich and delicious taste.",
  ingredients: [
    "Potatoes",
    "Cheese",
    "Salt",
    "Cooking Oil"
  ],
  bestseller: true
},

{
  id: 24,
  name: "Masala Fries",
  image: fries4_fl,
  category: "French Fries",
  rating: 4.6,
  price: 109,
  oldPrice: 139,
  deliveryTime: "15-20 mins",
  description:
    "Crispy fries tossed with aromatic Indian masala and flavorful spices.",
  ingredients: [
    "Potatoes",
    "Masala",
    "Chilli Powder",
    "Salt",
    "Cooking Oil"
  ],
  bestseller: false
},

{
  id: 25,
  name: "Loaded Fries",
  image: fries5_fl,
  category: "French Fries",
  rating: 4.9,
  price: 159,
  oldPrice: 199,
  deliveryTime: "25-30 mins",
  description:
    "Loaded crispy fries topped with cheese, sauces and flavorful toppings.",
  ingredients: [
    "Potatoes",
    "Cheese",
    "Onion",
    "Sauces",
    "Spices"
  ],
  bestseller: true
},


// Cold Drinks

{
  id: 26,
  name: "Coca-Cola",
  image: cc1_fl,
  category: "Cold Drink",
  rating: 4.6,
  price: 60,
  oldPrice: 70,
  deliveryTime: "10-15 mins",
  description:
    "Refreshing and chilled Coca-Cola with its classic sparkling cola flavor.",
  ingredients: [
    "Carbonated Water",
    "Sugar",
    "Caramel Color",
    "Flavoring"
  ],
  bestseller: true
},

{
  id: 27,
  name: "Pepsi",
  image: cc2_fl,
  category: "Cold Drink",
  rating: 4.5,
  price: 60,
  oldPrice: 70,
  deliveryTime: "10-15 mins",
  description:
    "Refreshing chilled Pepsi with a bold and classic cola flavor.",
  ingredients: [
    "Carbonated Water",
    "Sugar",
    "Caramel Color",
    "Flavoring"
  ],
  bestseller: false
},

{
  id: 28,
  name: "Sprite",
  image: cc3_fl,
  category: "Cold Drink",
  rating: 4.7,
  price: 60,
  oldPrice: 70,
  deliveryTime: "10-15 mins",
  description:
    "Crisp and refreshing lemon-lime soft drink served chilled.",
  ingredients: [
    "Carbonated Water",
    "Sugar",
    "Lemon Flavor",
    "Lime Flavor"
  ],
  bestseller: true
},

{
  id: 29,
  name: "Fanta",
  image: cc4_fl,
  category: "Cold Drink",
  rating: 4.4,
  price: 60,
  oldPrice: 70,
  deliveryTime: "10-15 mins",
  description:
    "Refreshing orange-flavored sparkling drink served chilled.",
  ingredients: [
    "Carbonated Water",
    "Sugar",
    "Orange Flavor",
    "Food Color"
  ],
  bestseller: false
},

{
  id: 30,
  name: "Lemon Soda",
  image: cc5_fl,
  category: "Cold Drink",
  rating: 4.8,
  price: 70,
  oldPrice: 80,
  deliveryTime: "10-15 mins",
  description:
    "Refreshing fizzy lemon soda with a delicious sweet and tangy flavor.",
  ingredients: [
    "Carbonated Water",
    "Lemon",
    "Sugar",
    "Salt"
  ],
  bestseller: true
},


// Hot Dogs

{
  id: 31,
  name: "Classic Hot Dog",
  image: hd1_fl,
  category: "Hot Dog",
  rating: 4.5,
  price: 129,
  oldPrice: 159,
  deliveryTime: "20-25 mins",
  description:
    "Classic hot dog served in a soft bun with fresh vegetables and delicious sauces.",
  ingredients: [
    "Hot Dog Bun",
    "Sausage",
    "Onion",
    "Tomato Sauce",
    "Mustard Sauce"
  ],
  bestseller: false
},

{
  id: 32,
  name: "Cheese Hot Dog",
  image: hd2_fl,
  category: "Hot Dog",
  rating: 4.8,
  price: 159,
  oldPrice: 189,
  deliveryTime: "20-25 mins",
  description:
    "Juicy hot dog topped with melted cheese, fresh vegetables and flavorful sauces.",
  ingredients: [
    "Hot Dog Bun",
    "Sausage",
    "Cheese",
    "Onion",
    "Sauces"
  ],
  bestseller: true
},

{
  id: 33,
  name: "Chicken HotDog",
  image: hd3_fl,
  category: "Hot Dog",
  rating: 4.7,
  price: 169,
  oldPrice: 199,
  deliveryTime: "25-30 mins",
  description:
    "Juicy chicken hot dog served in a soft bun with fresh vegetables and signature sauces.",
  ingredients: [
    "Hot Dog Bun",
    "Chicken Sausage",
    "Onion",
    "Lettuce",
    "Sauces"
  ],
  bestseller: true
},

{
  id: 34,
  name: "Spicy Hot Dog",
  image: hd4_fl,
  category: "Hot Dog",
  rating: 4.6,
  price: 149,
  oldPrice: 179,
  deliveryTime: "20-25 mins",
  description:
    "Spicy hot dog loaded with flavorful sausage, fresh vegetables and hot sauce.",
  ingredients: [
    "Hot Dog Bun",
    "Sausage",
    "Jalapeno",
    "Onion",
    "Spicy Sauce"
  ],
  bestseller: false
},

{
  id: 35,
  name: "Loaded Hot Dog",
  image: hd5_fl,
  category: "Hot Dog",
  rating: 4.9,
  price: 189,
  oldPrice: 229,
  deliveryTime: "25-30 mins",
  description:
    "Loaded hot dog topped with cheese, vegetables and delicious creamy sauces.",
  ingredients: [
    "Hot Dog Bun",
    "Sausage",
    "Cheese",
    "Onion",
    "Sauces"
  ],
  bestseller: true
},


// Noodles

{
  id: 36,
  name: "Hakka Noodles",
  image: noodles1_fl,
  category: "Noodles",
  rating: 4.7,
  price: 149,
  oldPrice: 179,
  deliveryTime: "20-25 mins",
  description:
    "Delicious stir-fried Hakka noodles tossed with fresh vegetables and flavorful sauces.",
  ingredients: [
    "Hakka Noodles",
    "Cabbage",
    "Carrot",
    "Capsicum",
    "Soy Sauce"
  ],
  bestseller: true
},

{
  id: 37,
  name: "Veg Chow Mein",
  image: noodles2_fl,
  category: "Noodles",
  rating: 4.5,
  price: 139,
  oldPrice: 169,
  deliveryTime: "20-25 mins",
  description:
    "Classic vegetable chow mein stir-fried with fresh vegetables and aromatic sauces.",
  ingredients: [
    "Noodles",
    "Cabbage",
    "Carrot",
    "Capsicum",
    "Soy Sauce"
  ],
  bestseller: false
},

{
  id: 38,
  name: "Chicken Noodles",
  image: noodles3_fl,
  category: "Noodles",
  rating: 4.8,
  price: 179,
  oldPrice: 209,
  deliveryTime: "25-30 mins",
  description:
    "Flavorful noodles tossed with juicy chicken, fresh vegetables and savory sauces.",
  ingredients: [
    "Noodles",
    "Chicken",
    "Cabbage",
    "Carrot",
    "Soy Sauce"
  ],
  bestseller: true
},

{
  id: 39,
  name: "Schezwan Noodles",
  image: noodles4_fl,
  category: "Noodles",
  rating: 4.9,
  price: 169,
  oldPrice: 199,
  deliveryTime: "20-25 mins",
  description:
    "Spicy Schezwan noodles tossed with fresh vegetables and bold Schezwan sauce.",
  ingredients: [
    "Noodles",
    "Schezwan Sauce",
    "Capsicum",
    "Onion",
    "Garlic"
  ],
  bestseller: true
},

{
  id: 40,
  name: "Paneer Noodles",
  image: noodles5_fl,
  category: "Noodles",
  rating: 4.6,
  price: 179,
  oldPrice: 209,
  deliveryTime: "20-25 mins",
  description:
    "Delicious noodles tossed with soft paneer, fresh vegetables and flavorful sauces.",
  ingredients: [
    "Noodles",
    "Paneer",
    "Capsicum",
    "Onion",
    "Soy Sauce"
  ],
  bestseller: false
}

 
];
export default assets;