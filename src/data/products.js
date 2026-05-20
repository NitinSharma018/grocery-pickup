const products = [
  {
    "id": 1,
    "name": "Broccoli ",
    "price": 74.26,
    "image": "https://www.mealpro.net/wp-content/uploads/2024/09/broccoli-thumbnail.jpg",
    "category": "vegetables"
  },
  {
    "id": 2,
    "name": "Onion ",
    "price": 92.52,
    "image": "https://www.shutterstock.com/image-photo/full-frame-shot-purple-onions-260nw-1284082165.jpg",
    "category": "vegetables"
  },
  {
    "id": 3,
    "name": "Tomato ",
    "price": 40.41,
    "image": "https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg",
    "category": "vegetables"
  },
  {
    "id": 4,
    "name": "Potato ",
    "price": 89.51,
    "image": "https://cdn.pixabay.com/photo/2014/08/06/20/32/potatoes-411975_1280.jpg",
    "category": "vegetables"
  },
  
  
  {
    "id": 5,
    "name": "Cabbage ",
    "price": 32.39,
    "image": "https://images.squarespace-cdn.com/content/v1/60d5fe5c9e25003cd4b3b2ed/1634316438635-27FNWQSMMPRHWXB0MLGJ/green-cabbage-envato.jpg",
    "category": "vegetables"
  },
  {
    "id": 6,
    "name": "Carrot ",
    "price": 99.13,
    "image": "https://images.unsplash.com/photo-1633380110125-f6e685676160?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnJvdHxlbnwwfHwwfHx8MA%3D%3D",
    "category": "vegetables"
  },
  {
    "id": 7,
    "name": "Spinach ",
    "price": 68.1,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXhq4vOWEtOva7iYG3z28EC5g5uku78Pua0A&s",
    "category": "vegetables"
  },
  
  {
    "id": 8,
    "name": "Peas ",
    "price": 106.4,
    "image": "https://m.media-amazon.com/images/I/612O377T9FL.jpg",
    "category": "vegetables"
  },
  
  {
    "id": 9,
    "name": "Papaya ",
    "price": 95.22,
    "image": "https://media.istockphoto.com/id/1493004470/photo/fresh-ripe-cut-and-whole-papaya-fruits-on-wooden-table-outdoors.jpg?s=612x612&w=0&k=20&c=5S02yLShlnfyKgesWbFP0f-IqzQNxmOeP39tPw1k12U=",
    "category": "fruits"
  },
  {
    "id": 10,
    "name": "Kiwi ",
    "price": 64.36,
    "image": "https://media.istockphoto.com/id/537403487/photo/kiwi.jpg?s=612x612&w=0&k=20&c=NC7ogHNUxPDFL3SkcTMOe1vrr6p_5p34n7saoI-jhac=",
    "category": "fruits"
  },
  {
    "id": 11,
    "name": "Pineapple ",
    "price": 23.12,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbnEhpQvMHQRtXdvCLISriJ4nJcBZnetPcA&s",
    "category": "fruits"
  },
  {
    "id": 12,
    "name": "Mango ",
    "price": 62.42,
    "image": "https://www.shutterstock.com/image-photo/picture-beautiful-ripe-yellow-mangoes-260nw-2478082417.jpg",
    "category": "fruits"
  },
 
  {
    "id": 13,
    "name": "Watermelon ",
    "price": 86.48,
    "image": "https://images.news18.com/webstories/uploads/2025/04/24-2025-04-09f50c99a24070f507519ee4b1ceade7.jpg",
    "category": "fruits"
  },
  
  {
    "id": 14,
    "name": "Grapes ",
    "price": 22.33,
    "image": "https://media.istockphoto.com/id/489520104/photo/green-grape-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=9kg_3pMeBKYnHHjx2JECF61QwzxTikLaQ2w-6A5tOO0=",
    "category": "fruits"
  },
  {
    "id": 15,
    "name": "Apple ",
    "price": 94.85,
    "image": "https://i.pinimg.com/736x/9c/25/85/9c258525e4eb471d29b3c0a2c22d000b.jpg",
    "category": "fruits"
  },

 
  {
    "id": 16,
    "name": "Strawberry ",
    "price": 72.39,
    "image": "https://www.shutterstock.com/image-photo/fresh-strawberries-above-filling-frame-600nw-2367292005.jpg",
    "category": "fruits"
  },
 
  {
    "id": 17,
    "name": "Banana ",
    "price": 34.95,
    "image": "https://www.shutterstock.com/image-photo/bananas-fruits-that-come-herbaceous-600nw-2552818301.jpg",
    "category": "fruits"
  },

  {
    "id": 18,
    "name": "Orange ",
    "price": 71.32,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdH-1DJtAWojOgn1oRDNLZdXDeVsRJw5zMQ&s",
    "category": "fruits"
  },
 
  {
    "id": 19,
    "name": "Bread ",
    "price": 46.84,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZeeZNnWTzgSKiDM8KruEO0EdsmmgTO-Wzw&s",
    "category": "grocery"
  },
  {
    "id": 20,
    "name": "Salt ",
    "price": 61.73,
    "image": "https://5.imimg.com/data5/SELLER/Default/2022/3/WQ/FT/ID/3642811/1kg-tata-salt-packet-500x500.jpg",
    "category": "grocery"
  },
  {
    "id": 21,
    "name": "Coffee ",
    "price": 20.99,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWjly05fgrFWsSqCAJANribCXSL0TSi5panA&s",
    "category": "grocery"
  },
  {
    "id": 22,
    "name": "Pasta ",
    "price": 47.69,
    "image": "https://5.imimg.com/data5/SELLER/Default/2022/12/MJ/FD/RT/68365182/1-kg-pastiano-italian-macaroni.jpg",
    "category": "grocery"
  },
  {
    "id": 23,
    "name": "Rice ",
    "price": 112.09,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoDRFiV-L9oMqVPWusA4KCGKjezKk_ektwvg&s",
    "category": "grocery"
  },
  {
    "id": 24,
    "name": "Wheat Flour ",
    "price": 43.88,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRucO0LKMoUjnblK7hb-Zba4BFcJz0E-gbhYg&s",
    "category": "grocery"
  },
  {
    "id": 25,
    "name": "Sugar ",
    "price": 112.44,
    "image": "https://t3.ftcdn.net/jpg/01/37/76/22/360_F_137762293_rRVXJZF2sNRNPQx0mUE6iFKGKU1Fn50U.jpg",
    "category": "grocery"
  },
  {
    "id": 26,
    "name": "Cooking Oil ",
    "price": 74.48,
    "image": "https://connect.healthkart.com/wp-content/uploads/2016/08/banner-56.jpg",
    "category": "grocery"
  },
  

  {
    "id": 27,
    "name": "Lentils ",
    "price": 27.88,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWbOxMJyCEbDiKtCIiy4fUwfr_30fosY4xsw&s",
    "category": "grocery"
  },
  
  
  {
    "id": 28,
    "name": "Tea  ",
    "price": 82.76,
    "image": "data:image/jpeg;base64,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",
    "category": "grocery"
  },
  
  
];

export default products;