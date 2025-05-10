export type Region = {
  id: string;
  name: string;
  description: string;
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  featured: boolean;
};

export type Property = {
  id: string;
  name: string;
  type: 'villa' | 'farmhouse' | 'cottage' | 'apartment';
  location: string;
  regionId: string;
  price: number;
  perNight: boolean;
  images: string[];
  description: string;
  amenities: string[];
  rating: number;
  reviewCount: number;
  featured: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
};

export type Experience = {
  id: string;
  name: string;
  type: 'food' | 'culture' | 'outdoor' | 'wellness';
  location: string;
  regionId: string;
  price: number;
  images: string[];
  description: string;
  duration: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
};

export type Village = {
  id: string;
  name: string;
  regionId: string;
  description: string;
  population: number;
  elevation: number;
  image: string;
  highlights: string[];
  historicalNotes: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  featured: boolean;
};

export type Event = {
  id: string;
  name: string;
  location: string;
  villageId: string;
  regionId: string;
  date: string;
  startTime: string;
  endTime: string;
  description: string;
  program: {
    time: string;
    activity: string;
    description: string;
  }[];
  images: string[];
  isFree: boolean;
  price?: number;
  capacity: number;
  organizer: string;
  contactInfo: string;
  website?: string;
};

export const regions: Region[] = [
  {
    id: 'tuscany',
    name: 'Tuscany',
    description: 'Rolling hills, vineyards, and historic villages characterize this iconic Italian region.',
    image: 'https://tourismmedia.italia.it/is/image/mitur/1600X1000_citta_toscana_2?wid=800&hei=500&fit=constrain,1&fmt=webp',
    coordinates: { lat: 43.7711, lng: 11.2486 },
    featured: true,
  },
  {
    id: 'umbria',
    name: 'Umbria',
    description: "Known as Italy\'s green heart, Umbria is famous for its medieval hill towns, dense forests, and local cuisine.",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXGiYppdRI5sj3jKE2hQP676zlVAUsdAUoLTwvJbf-Wjo639NvXsjHEWJE_9RMamMelRk&usqp=CAU',
    coordinates: { lat: 43.0962, lng: 12.3861 },
    featured: false,
  },
  {
    id: 'puglia',
    name: 'Puglia',
    description: "Located in the heel of Italy\'s boot, Puglia offers whitewashed towns, olive groves, and beautiful Mediterranean coastlines.",
    image: 'https://www.napolincc.com/wp-content/uploads/2023/06/vincenzo-de-simone-ag-2vUYJLpM-unsplash-scaled.jpg',
    coordinates: { lat: 41.1187, lng: 16.8718 },
    featured: true,
  },
  {
    id: 'sicily',
    name: 'Sicily',
    description: 'This stunning Mediterranean island is known for its rich history, diverse landscapes, and culinary traditions.',
    image: 'https://image-tc.galaxy.tf/wijpeg-4v9zgiiewzbhuih0k7mcab71d/1-teatro-greco-taormina-sicilia-copertina_wide.jpg?crop=119%2C0%2C1742%2C980',
    coordinates: { lat: 37.5994, lng: 14.0154 },
    featured: true,
  },
  {
    id: 'lazio',
    name: 'Lazio',
    description: 'Home to the ancient capital of Rome, Lazio offers a perfect blend of history, culture, and beautiful countryside.',
    image: 'https://www.archeoroma.it/wp-content/uploads/colosseo-roma-anfiteatro-flavio-558x400.jpg',
    coordinates: { lat: 41.9028, lng: 12.4964 },
    featured: true,
  },
  {
    id: 'marche',
    name: 'Marche',
    description: "A hidden gem on Italy\'s eastern coast, Marche features rolling hills, medieval towns, and pristine Adriatic beaches.",
    image: 'https://res.cloudinary.com/lastminute-contenthub/s--dzg7ABcD--/c_limit,h_999999,w_1920/f_auto/q_auto:eco/v1/DAM/Photos/Destinations/Europe/Italy/Marche/shutterstock_648990004',
    coordinates: { lat: 43.6168, lng: 13.5189 },
    featured: false,
  },
  {
    id: 'valle-daosta',
    name: "Valle d'Aosta",
    description: 'The smallest region in Italy, dotted with the highest peaks in the Alps. Ideal for winter sports and high-altitude walks, its green valleys and fairy-tale castles enchant all year round.',
    image: 'https://cdn.turistipercaso.it/media?src=/uploads/2024/06/valle-daosta_2200520203.jpg&sharpen&save-as=webp&aspect-ratio=16:9&crop-to-fit&w=1040&h=585&q=90',
    coordinates: { lat: 45.7372, lng: 7.3207 },
    featured: false,
  },
  {
    id: 'piemonte',
    name: 'Piemonte',
    description: 'Mountains, hills, unique flavours and elegant cities. Known for art, history, culture, nature, skiing, fascinating villages, and extraordinary wine production.',
    image: 'https://static2-viaggi.corriereobjects.it/wp-content/uploads/2015/06/torino-getty-1080x810.jpg?v=1572448436',
    coordinates: { lat: 45.0703, lng: 7.6869 },
    featured: false,
  },
  {
    id: 'liguria',
    name: 'Liguria',
    description: 'Coastal region known as the Italian Riviera, with colorful villages like Cinque Terre.',
    image: 'https://static2-viaggi.corriereobjects.it/wp-content/uploads/2015/06/liguria-guide-getty.jpg?v=1437066406', // Placeholder image
    coordinates: { lat: 44.50, lng: 8.80 }, // Updated coordinates
    featured: true,
  },
  {
    id: 'lombardia',
    name: 'Lombardia',
    description: 'Home to Milan, fashion capital, and stunning lakes like Como and Garda.',
    image: 'https://cdn.blastness.biz/media/1086/top/thumbs/full/1600-milano5.jpg', // Placeholder image
    coordinates: { lat: 45.59, lng: 9.93 }, // Updated coordinates
    featured: true,
  },
  {
    id: 'trentino-alto-adige',
    name: 'Trentino-Alto Adige',
    description: 'Mountainous region in northern Italy, known for the Dolomites.',
    image: 'https://static2-viaggi.corriereobjects.it/wp-content/uploads/2021/08/16_Lago_di_Carezza_iStock-1-1080x746.jpg?v=1627910643', // Placeholder image
    coordinates: { lat: 46.50, lng: 11.33 }, // Updated coordinates
    featured: false,
  },
  {
    id: 'veneto',
    name: 'Veneto',
    description: 'Home to Venice, Verona, and the Prosecco wine region.',
    image: 'https://www.museivenezia.it/wp-content/uploads/2019/10/rialto_venice_gondola_rialto_bridge_venezia_italy_canale_grande-716586-1200x803.jpg', // Placeholder image
    coordinates: { lat: 45.76, lng: 11.84 }, // Updated coordinates
    featured: true,
  },
  {
    "id": "friuli-venezia-giulia",
    "name": "Friuli-Venezia Giulia",
    "description": "Confina con Austria e Slovenia, nota per le sue montagne, spiagge e cultura unica.",
    "image": "https://siviaggia.it/wp-content/uploads/sites/2/2022/01/palmanova.jpg?w=640",
    "coordinates": { "lat": 46.17, "lng": 13.00 },
    "featured": false
  },
  {
    "id": "emilia-romagna",
    "name": "Emilia-Romagna",
    "description": "Famosa per la sua ricca gastronomia (Parmigiano Reggiano, aceto balsamico) e città storiche come Bologna.",
    "image": "https://www.wine-searcher.com/images/region/emilia-romagna-3835-1-2.jpg",
    "coordinates": { "lat": 44.425, "lng": 10.95 },
    "featured": false
  },
  {
    "id": "abruzzo",
    "name": "Abruzzo",
    "description": "Regione con parchi nazionali, borghi medievali e costa adriatica.",
    "image": "https://www.italiavai.com/wp-content/uploads/2024/06/cosa-vedere-in-abruzzo.jpg",
    "coordinates": { "lat": 42.29, "lng": 13.89 },
    "featured": false
  },
  {
    "id": "molise",
    "name": "Molise",
    "description": "Piccola regione con montagne, campagna e una breve costa adriatica.",
    "image": "https://www.salonedelcamper.it/wp-content/uploads/2023/08/AdobeStock_322175550-PIETRACUPA-1024x683.jpg",
    "coordinates": { "lat": 41.6667, "lng": 14.6667 },
    "featured": false
  },
  {
    "id": "campania",
    "name": "Campania",
    "description": "Ospita Napoli, Pompei e la Costiera Amalfitana, ricca di storia e bellezze naturali.",
    "image": "https://images.visititaly.eu/uploads/articoli/paragrafo/2023122233-Journey%20of%207%20days%20in%20Campania.jpg",
    "coordinates": { "lat": 40.92, "lng": 14.83 },
    "featured": true
  },
  {
    "id": "basilicata",
    "name": "Basilicata",
    "description": "Regione montuosa del sud, nota per la città rupestre di Matera.",
    "image": "https://www.dovedormire.info/wp-content/uploads/sites/119/basilicata.jpg",
    "coordinates": { "lat": 40.52, "lng": 16.095 },
    "featured": false
  },
  {
    "id": "calabria",
    "name": "Calabria",
    "description": "Il 'tacco' dello stivale italiano, con montagne aspre, spiagge mozzafiato e antiche rovine greche.",
    "image": "https://static.alpitour.it/.imaging/default/dam/alpitour/destinazioni/europa/italia/calabria/0-generic/3_placeholder.jpg/jcr:content.jpg",
    "coordinates": { "lat": 39.0, "lng": 16.4 },
    "featured": false
  },
  {
    "id": "sardegna",
    "name": "Sardegna",
    "description": "Grande isola mediterranea con rovine nuragiche uniche, spiagge e un interno montuoso.",
    "image": "https://www.nieddittas.it/wp-content/uploads/2022/04/dove-andare-al-mare-in-Sardegna.jpg",
    "coordinates": { "lat": 40.0, "lng": 9.0 },
    "featured": false
  }
];

export const properties: Property[] = [
  {
    id: 'villa-toscana',
    name: 'Villa Toscana',
    type: 'villa',
    location: 'San Gimignano, Tuscany',
    regionId: 'tuscany',
    price: 250,
    perNight: true,
    images: [
      'https://lh3.googleusercontent.com/-XiXZRDul_kw/WzJWlsoQXEI/AAAAAAAB3as/i5i5OtqF06gDlJ4F7EB9djCB3Kbjq98vQCHMYBhgL/s500/ville-di-lusso-toscana-con-giardino.jpg',
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    ],
    description: 'A stunning traditional Tuscan villa with a private pool, surrounded by vineyards and olive groves. Enjoy breathtaking views and authentic rural living.',
    amenities: ['Pool', 'Garden', 'WiFi', 'Kitchen', 'Parking', 'Air conditioning'],
    rating: 4.8,
    reviewCount: 56,
    featured: true,
    coordinates: { lat: 43.4677, lng: 11.0569 },
  },
  {
    id: 'casa-verde',
    name: 'Casa Verde Farmhouse',
    type: 'farmhouse',
    location: 'Montepulciano, Tuscany',
    regionId: 'tuscany',
    price: 180,
    perNight: true,
    images: [
      'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027', 
    ],
    description: 'An authentic restored farmhouse with rustic charm and modern comforts. Set on a working farm with fresh produce and wine tasting available.',
    amenities: ['Farm experience', 'WiFi', 'Kitchen', 'Parking', 'Pets allowed'],
    rating: 4.7,
    reviewCount: 42,
    featured: false,
    coordinates: { lat: 43.1000, lng: 11.7800 },
  },
  {
    id: 'trulli-dream',
    name: 'Trulli Dream',
    type: 'cottage',
    location: 'Alberobello, Puglia',
    regionId: 'puglia',
    price: 140,
    perNight: true,
    images: [
      'https://images.unsplash.com/photo-1500673922987-e212871fec22',
      'https://images.unsplash.com/photo-1466721591366-2d5fba72006d', 
    ],
    description: 'Experience staying in a traditional Puglian trullo, these cone-shaped houses are unique to the region and offer a magical getaway.',
    amenities: ['Unique architecture', 'Garden', 'WiFi', 'Kitchen', 'Air conditioning'],
    rating: 4.9,
    reviewCount: 78,
    featured: true,
    coordinates: { lat: 40.7864, lng: 17.2402 },
  },
  {
    id: 'umbrian-retreat',
    name: 'Umbrian Retreat',
    type: 'apartment',
    location: 'Perugia, Umbria',
    regionId: 'umbria',
    price: 120,
    perNight: true,
    images: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07', 
    ],
    description: 'A cozy apartment in a medieval building in the heart of historic Perugia. Perfect for exploring the cultural treasures of Umbria.',
    amenities: ['Historic building', 'WiFi', 'Kitchen', 'Central location'],
    rating: 4.6,
    reviewCount: 34,
    featured: false,
    coordinates: { lat: 43.1107, lng: 12.3908 },
  },
  {
    id: 'casa-bianca',
    name: 'Casa Bianca',
    type: 'apartment',
    location: 'Castelmezzano, Puglia',
    regionId: 'puglia',
    price: 95,
    perNight: true,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1512918728675-ed5a9dbdeafd',
    ],
    description: 'A charming white-washed apartment in the heart of Castelmezzano, offering stunning mountain views and easy access to local attractions.',
    amenities: ['Mountain view', 'WiFi', 'Kitchen', 'Parking', 'Air conditioning'],
    rating: 4.7,
    reviewCount: 38,
    featured: false,
    coordinates: { lat: 40.5312, lng: 16.0481 },
  },
  {
    id: 'torre-del-sole',
    name: 'Torre del Sole',
    type: 'villa',
    location: 'San Gimignano, Tuscany',
    regionId: 'tuscany',
    price: 120,
    perNight: true,
    images: [
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/156878841.jpg?k=891bf3a1c4a393791700d5fb51aefb0baa47efcdd411bf30ef2d1e93c822c46b&o=&hp=1',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    ],
    description: 'A beautiful villa with a private garden and pool, just a short walk from San Gimignano\'s historic center.',
    amenities: ['Pool', 'Garden', 'WiFi', 'Kitchen', 'Parking', 'Air conditioning'],
    rating: 4.9,
    reviewCount: 62,
    featured: true,
    coordinates: { lat: 43.4677, lng: 11.0429 },
  },
  {
    id: 'casa-umbria',
    name: 'Casa Umbria',
    type: 'farmhouse',
    location: 'Civita di Bagnoregio, Umbria',
    regionId: 'umbria',
    price: 85,
    perNight: true,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1512918728675-ed5a9dbdeafd',
    ],
    description: 'A traditional Umbrian farmhouse with modern comforts, offering panoramic views of the surrounding countryside.',
    amenities: ['Countryside view', 'WiFi', 'Kitchen', 'Garden', 'Parking'],
    rating: 4.6,
    reviewCount: 45,
    featured: false,
    coordinates: { lat: 42.6278, lng: 12.1139 },
  },
  {
    id: 'casa-sicilia',
    name: 'Casa Sicilia',
    type: 'apartment',
    location: 'Gangi, Sicily',
    regionId: 'sicily',
    price: 90,
    perNight: true,
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9dbdeafd',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    ],
    description: 'A cozy apartment in the historic center of Gangi, perfect for exploring the town\'s medieval charm.',
    amenities: ['Historic building', 'WiFi', 'Kitchen', 'Central location', 'Air conditioning'],
    rating: 4.8,
    reviewCount: 51,
    featured: true,
    coordinates: { lat: 37.7983, lng: 14.2072 },
  },
  {
    id: 'trulli-casa',
    name: 'Trulli Casa',
    type: 'cottage',
    location: 'Alberobello, Puglia',
    regionId: 'puglia',
    price: 110,
    perNight: true,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1512918728675-ed5a9dbdeafd',
    ],
    description: 'A beautifully restored trullo with modern amenities, located in the heart of Alberobello\'s historic district.',
    amenities: ['Unique architecture', 'WiFi', 'Kitchen', 'Air conditioning', 'Central location'],
    rating: 4.9,
    reviewCount: 73,
    featured: true,
    coordinates: { lat: 40.7864, lng: 17.2402 },
  },
  {
    id: 'casa-artista',
    name: 'Casa Artista',
    type: 'apartment',
    location: 'Calcata, Lazio',
    regionId: 'lazio',
    price: 95,
    perNight: true,
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9dbdeafd',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    ],
    description: 'A unique apartment in an artist\'s studio, offering creative inspiration and stunning views of the surrounding valley.',
    amenities: ['Artistic decor', 'WiFi', 'Kitchen', 'Garden', 'Parking'],
    rating: 4.7,
    reviewCount: 42,
    featured: false,
    coordinates: { lat: 42.2175, lng: 12.4264 },
  },
  {
    id: 'casa-montagna',
    name: 'Casa Montagna',
    type: 'cottage',
    location: 'Fano Adriano, Marche',
    regionId: 'marche',
    price: 80,
    perNight: true,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1512918728675-ed5a9dbdeafd',
    ],
    description: 'A charming mountain cottage with direct access to hiking trails and stunning views of the Gran Sasso mountains.',
    amenities: ['Mountain view', 'WiFi', 'Kitchen', 'Garden', 'Parking', 'Fireplace'],
    rating: 4.8,
    reviewCount: 39,
    featured: true,
    coordinates: { lat: 42.5509, lng: 13.5322 },
  },
  {
    id: 'casa-del-sole',
    name: 'Casa del Sole',
    type: 'apartment',
    location: 'Castelmezzano, Puglia',
    regionId: 'puglia',
    price: 85,
    perNight: true,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1512918728675-ed5a9dbdeafd',
    ],
    description: 'A sunny apartment with a private terrace offering panoramic views of the Lucanian Dolomites, perfect for nature lovers.',
    amenities: ['Terrace', 'Mountain view', 'WiFi', 'Kitchen', 'Parking'],
    rating: 4.6,
    reviewCount: 29,
    featured: false,
    coordinates: { lat: 40.5312, lng: 16.0481 },
  },
  {
    id: 'villa-oliveto',
    name: 'Villa Oliveto',
    type: 'villa',
    location: 'San Gimignano, Tuscany',
    regionId: 'tuscany',
    price: 150,
    perNight: true,
    images: [
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/653465745.jpg?k=712e51013e43f4ebd060e2a4bf61c93beee13470a17490cad8c3ed974050677d&o=&hp=1',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    ],
    description: 'A luxurious villa surrounded by olive groves, featuring a private pool and stunning views of the Tuscan countryside.',
    amenities: ['Pool', 'Olive grove', 'WiFi', 'Kitchen', 'Parking', 'Air conditioning', 'Garden'],
    rating: 4.9,
    reviewCount: 45,
    featured: true,
    coordinates: { lat: 43.4677, lng: 11.0429 },
  },
  {
    id: 'casa-vecchia',
    name: 'Casa Vecchia',
    type: 'farmhouse',
    location: 'Civita di Bagnoregio, Umbria',
    regionId: 'umbria',
    price: 95,
    perNight: true,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1512918728675-ed5a9dbdeafd',
    ],
    description: 'A charming restored farmhouse with original features, offering a peaceful retreat in the Umbrian countryside.',
    amenities: ['Original features', 'WiFi', 'Kitchen', 'Garden', 'Parking', 'Fireplace'],
    rating: 4.7,
    reviewCount: 33,
    featured: false,
    coordinates: { lat: 42.6278, lng: 12.1139 },
  },
  {
    id: 'casa-madonie',
    name: 'Casa Madonie',
    type: 'apartment',
    location: 'Gangi, Sicily',
    regionId: 'sicily',
    price: 75,
    perNight: true,
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9dbdeafd',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    ],
    description: 'A cozy apartment with views of the Madonie mountains, located in the historic center of Gangi.',
    amenities: ['Mountain view', 'WiFi', 'Kitchen', 'Central location', 'Air conditioning'],
    rating: 4.5,
    reviewCount: 27,
    featured: false,
    coordinates: { lat: 37.7983, lng: 14.2072 },
  },
  {
    id: 'trulli-paradiso',
    name: 'Trulli Paradiso',
    type: 'cottage',
    location: 'Alberobello, Puglia',
    regionId: 'puglia',
    price: 105,
    perNight: true,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1512918728675-ed5a9dbdeafd',
    ],
    description: 'A beautifully restored trullo with a private garden, offering a unique and authentic Puglian experience.',
    amenities: ['Garden', 'Unique architecture', 'WiFi', 'Kitchen', 'Air conditioning'],
    rating: 4.8,
    reviewCount: 41,
    featured: true,
    coordinates: { lat: 40.7864, lng: 17.2402 },
  },
  {
    id: 'villa-chianti',
    name: 'Villa Chianti',
    type: 'villa',
    location: 'Chianti, Tuscany',
    regionId: 'tuscany',
    price: 350,
    perNight: true,
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9dbdeafd',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    ],
    description: 'Luxurious villa in the heart of Chianti with panoramic views, private pool, and wine cellar.',
    amenities: ['Pool', 'Wine cellar', 'WiFi', 'Kitchen', 'Parking', 'Air conditioning', 'Garden'],
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    coordinates: { lat: 43.6833, lng: 11.3167 },
  },
  {
    id: 'agriturismo-val-dorcia',
    name: 'Agriturismo Val d\'Orcia',
    type: 'farmhouse',
    location: 'Val d\'Orcia, Tuscany',
    regionId: 'tuscany',
    price: 200,
    perNight: true,
    images: [
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
    ],
    description: 'Authentic farmhouse with organic farm, cooking classes, and stunning views of the Val d\'Orcia.',
    amenities: ['Organic farm', 'Cooking classes', 'WiFi', 'Kitchen', 'Parking', 'Garden', 'Pool'],
    rating: 4.8,
    reviewCount: 45,
    featured: true,
    coordinates: { lat: 43.0667, lng: 11.7667 },
  },
];

export const experiences: Experience[] = [
  {
    id: 'pasta-cooking',
    name: 'Traditional Pasta Making Class',
    type: 'food',
    location: 'Florence, Tuscany',
    regionId: 'tuscany',
    price: 89,
    images: [
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
    ],
    description: 'Learn to make pasta from scratch with a local family in their Tuscan kitchen. Includes lunch with wine and a recipe book to take home.',
    duration: '3 hours',
    rating: 4.9,
    reviewCount: 124,
    featured: true,
    coordinates: { lat: 43.7731, lng: 11.2558 },
  },
  {
    id: 'olive-harvest',
    name: 'Olive Harvest Experience',
    type: 'culture',
    location: 'Ostuni, Puglia',
    regionId: 'puglia',
    price: 65,
    images: [
      'https://www.travel.gr/wp-content/uploads/2024/10/olive-grove-new-2048x1543.jpg',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    ],
    description: 'Join a local farmer to harvest olives and learn about the process of making extra virgin olive oil. Includes tasting and a bottle to take home.',
    duration: '4 hours',
    rating: 4.7,
    reviewCount: 86,
    featured: false,
    coordinates: { lat: 40.7255, lng: 17.5787 },
  },
  {
    id: 'vineyard-tour',
    name: 'Vineyard Tour & Wine Tasting',
    type: 'food',
    location: 'Montalcino, Tuscany',
    regionId: 'tuscany',
    price: 110,
    images: [
      'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
      'https://images.unsplash.com/photo-1466721591366-2d5fba72006d',
    ],
    description: 'Tour a family-owned vineyard and learn about Brunello wine production. Enjoy a guided tasting of premium wines paired with local specialties.',
    duration: '5 hours',
    rating: 4.8,
    reviewCount: 152,
    featured: true,
    coordinates: { lat: 43.0567, lng: 11.4900 },
  },
  {
    id: 'rural-yoga',
    name: 'Sunrise Yoga in the Countryside',
    type: 'wellness',
    location: 'Assisi, Umbria',
    regionId: 'umbria',
    price: 45,
    images: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    ],
    description: 'Begin your day with a rejuvenating yoga session in a peaceful rural setting with views of Assisi. Suitable for all levels and includes organic breakfast.',
    duration: '2 hours',
    rating: 4.6,
    reviewCount: 64,
    featured: false,
    coordinates: { lat: 43.0714, lng: 12.6122 },
  },
  {
    id: 'ceramics-workshop',
    name: 'Traditional Ceramics Workshop',
    type: 'culture',
    location: 'Caltagirone, Sicily',
    regionId: 'sicily',
    price: 75,
    images: [
      'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    ],
    description: 'Create your own ceramic piece under the guidance of a master artisan. Learn about Sicily\'s rich ceramic tradition and take home your creation.',
    duration: '3 hours',
    rating: 4.9,
    reviewCount: 43,
    featured: true,
    coordinates: { lat: 37.2400, lng: 14.5167 },
  },
  {
    id: 'mountain-hike',
    name: 'Guided Mountain Hike',
    type: 'outdoor',
    location: 'Castelmezzano, Puglia',
    regionId: 'puglia',
    price: 35,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1512918728675-ed5a9dbdeafd',
    ],
    description: 'Explore the stunning Lucanian Dolomites with a local guide, discovering hidden trails and breathtaking viewpoints.',
    duration: '4 hours',
    rating: 4.8,
    reviewCount: 67,
    featured: true,
    coordinates: { lat: 40.5312, lng: 16.0481 },
  },
  {
    id: 'wine-tasting',
    name: 'Vernaccia Wine Tasting',
    type: 'food',
    location: 'San Gimignano, Tuscany',
    regionId: 'tuscany',
    price: 30,
    images: [
      'https://wineexperience.vernacciasangimignano.it/wp-content/uploads/2022/04/slide79.jpg',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    ],
    description: 'Sample the famous Vernaccia wine of San Gimignano at a family-run winery, paired with local cheeses and cured meats.',
    duration: '2 hours',
    rating: 4.7,
    reviewCount: 89,
    featured: true,
    coordinates: { lat: 43.4677, lng: 11.0429 },
  },
  {
    id: 'etruscan-tour',
    name: 'Etruscan History Tour',
    type: 'culture',
    location: 'Civita di Bagnoregio, Umbria',
    regionId: 'umbria',
    price: 25,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1512918728675-ed5a9dbdeafd',
    ],
    description: 'Discover the ancient Etruscan history of Civita di Bagnoregio with an expert guide, exploring hidden caves and historic sites.',
    duration: '3 hours',
    rating: 4.9,
    reviewCount: 54,
    featured: false,
    coordinates: { lat: 42.6278, lng: 12.1139 },
  },
  {
    id: 'cooking-class',
    name: 'Sicilian Cooking Class',
    type: 'food',
    location: 'Gangi, Sicily',
    regionId: 'sicily',
    price: 35,
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9dbdeafd',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    ],
    description: 'Learn to cook traditional Sicilian dishes with a local chef, using fresh ingredients from the Madonie mountains.',
    duration: '3 hours',
    rating: 4.8,
    reviewCount: 72,
    featured: true,
    coordinates: { lat: 37.7983, lng: 14.2072 },
  },
  {
    id: 'trulli-workshop',
    name: 'Trulli Building Workshop',
    type: 'culture',
    location: 'Alberobello, Puglia',
    regionId: 'puglia',
    price: 30,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1512918728675-ed5a9dbdeafd',
    ],
    description: 'Learn about the traditional construction techniques of trulli houses and try your hand at building a miniature version.',
    duration: '2 hours',
    rating: 4.6,
    reviewCount: 48,
    featured: false,
    coordinates: { lat: 40.7864, lng: 17.2402 },
  },
  {
    id: 'art-workshop',
    name: 'Artistic Workshop',
    type: 'culture',
    location: 'Calcata, Lazio',
    regionId: 'lazio',
    price: 25,
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9dbdeafd',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    ],
    description: 'Join a local artist for a creative workshop in their studio, learning various techniques inspired by the village\'s bohemian atmosphere.',
    duration: '3 hours',
    rating: 4.7,
    reviewCount: 39,
    featured: true,
    coordinates: { lat: 42.2175, lng: 12.4264 },
  },
  {
    id: 'mountain-biking',
    name: 'Mountain Biking Adventure',
    type: 'outdoor',
    location: 'Fano Adriano, Marche',
    regionId: 'marche',
    price: 35,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1512918728675-ed5a9dbdeafd',
    ],
    description: 'Explore the Gran Sasso National Park on a guided mountain biking tour, suitable for all skill levels.',
    duration: '4 hours',
    rating: 4.8,
    reviewCount: 56,
    featured: true,
    coordinates: { lat: 42.5509, lng: 13.5322 },
  },
  {
    id: 'dolomites-tour',
    name: 'Dolomites Sunset Tour',
    type: 'outdoor',
    location: 'Castelmezzano, Puglia',
    regionId: 'puglia',
    price: 25,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1512918728675-ed5a9dbdeafd',
    ],
    description: 'Experience the magic of the Lucanian Dolomites at sunset with a guided tour to the best viewpoints.',
    duration: '2 hours',
    rating: 4.9,
    reviewCount: 38,
    featured: true,
    coordinates: { lat: 40.5312, lng: 16.0481 },
  },
  {
    id: 'tuscan-cooking',
    name: 'Tuscan Cooking Masterclass',
    type: 'food',
    location: 'San Gimignano, Tuscany',
    regionId: 'tuscany',
    price: 35,
    images: [
      'https://en.julskitchen.com/wp-content/uploads/sites/2/2019/06/20180505-001-1.jpg',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    ],
    description: 'Learn to cook traditional Tuscan dishes using local ingredients, followed by a delicious meal with wine.',
    duration: '3 hours',
    rating: 4.8,
    reviewCount: 52,
    featured: true,
    coordinates: { lat: 43.4677, lng: 11.0429 },
  },
  {
    id: 'etruscan-cooking',
    name: 'Etruscan Cooking Experience',
    type: 'food',
    location: 'Civita di Bagnoregio, Umbria',
    regionId: 'umbria',
    price: 30,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1512918728675-ed5a9dbdeafd',
    ],
    description: 'Discover ancient Etruscan cooking techniques and prepare traditional dishes using local ingredients.',
    duration: '2.5 hours',
    rating: 4.7,
    reviewCount: 31,
    featured: false,
    coordinates: { lat: 42.6278, lng: 12.1139 },
  },
  {
    id: 'sicilian-pastry',
    name: 'Sicilian Pastry Workshop',
    type: 'food',
    location: 'Gangi, Sicily',
    regionId: 'sicily',
    price: 25,
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9dbdeafd',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    ],
    description: 'Learn to make traditional Sicilian pastries and desserts with a local pastry chef.',
    duration: '2 hours',
    rating: 4.6,
    reviewCount: 28,
    featured: false,
    coordinates: { lat: 37.7983, lng: 14.2072 },
  },
  {
    id: 'trulli-photography',
    name: 'Trulli Photography Tour',
    type: 'culture',
    location: 'Alberobello, Puglia',
    regionId: 'puglia',
    price: 30,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1512918728675-ed5a9dbdeafd',
    ],
    description: 'Capture the unique beauty of trulli houses with a professional photographer guiding you to the best spots.',
    duration: '3 hours',
    rating: 4.7,
    reviewCount: 35,
    featured: true,
    coordinates: { lat: 40.7864, lng: 17.2402 },
  },
  {
    id: 'tuscan-wine-tour',
    name: 'Chianti Wine Tour',
    type: 'food',
    location: 'Chianti, Tuscany',
    regionId: 'tuscany',
    price: 120,
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9dbdeafd',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    ],
    description: 'Visit three prestigious Chianti wineries, learn about wine production, and enjoy tastings paired with local specialties.',
    duration: '6 hours',
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    coordinates: { lat: 43.6833, lng: 11.3167 },
  },
  {
    id: 'tuscan-cooking-masterclass',
    name: 'Tuscan Cooking Masterclass',
    type: 'food',
    location: 'Florence, Tuscany',
    regionId: 'tuscany',
    price: 150,
    images: [
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
    ],
    description: 'Master the art of Tuscan cuisine with a professional chef. Learn to prepare traditional dishes using local ingredients.',
    duration: '4 hours',
    rating: 4.8,
    reviewCount: 98,
    featured: true,
    coordinates: { lat: 43.7731, lng: 11.2558 },
  },
  {
    id: 'tuscan-hiking',
    name: 'Tuscan Hills Hiking',
    type: 'outdoor',
    location: 'Val d\'Orcia, Tuscany',
    regionId: 'tuscany',
    price: 75,
    images: [
      'https://images.unsplash.com/photo-1500673922987-e212871fec22',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    ],
    description: 'Guided hike through the stunning Val d\'Orcia landscape, with stops at local farms and a traditional lunch.',
    duration: '5 hours',
    rating: 4.7,
    reviewCount: 82,
    featured: true,
    coordinates: { lat: 43.0667, lng: 11.7667 },
  },
];

export const villages: Village[] = [
  {
    id: 'castelmezzano',
    name: 'Castelmezzano',
    regionId: 'puglia',
    description: 'A picturesque medieval village perched on the Lucanian Dolomites, known for its breathtaking views and stone houses built into the mountainside.',
    population: 820,
    elevation: 750,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    highlights: ['Flight of the Angel zipline', 'Historic center', 'Gradinata Normanna', 'Local cuisine'],
    historicalNotes: 'Founded by Greek settlers around the 6th century BC, Castelmezzano later became a Norman stronghold. Its name derives from "Castle in the Middle" due to its strategic position.',
    coordinates: { lat: 40.5312, lng: 16.0481 },
    featured: true
  },
  {
    id: 'san-gimignano',
    name: 'San Gimignano',
    regionId: 'tuscany',
    description: 'Known as the "Town of Fine Towers," this medieval hill town is famous for its remarkably well-preserved tower houses and Vernaccia wine.',
    population: 7800,
    elevation: 324,
    image: 'https://images.winalist.com/blog/wp-content/uploads/2024/08/02131927/AdobeStock_484607182-1500x704.jpeg',
    highlights: ['Medieval towers', 'Piazza della Cisterna', 'Vernaccia wine', 'Historic center (UNESCO World Heritage)'],
    historicalNotes: 'Founded in the 3rd century BC, San Gimignano flourished during the Middle Ages. At its height, the town had 72 tower houses, with 14 still standing today.',
    coordinates: { lat: 43.4677, lng: 11.0429 },
    featured: true
  },
  {
    id: 'civita-di-bagnoregio',
    name: 'Civita di Bagnoregio',
    regionId: 'umbria',
    description: 'Known as "The Dying Town," this ancient settlement sits atop an eroding volcanic plateau, accessible only by a pedestrian bridge.',
    population: 11,
    elevation: 443,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
    highlights: ['Dramatic setting', 'Ancient doorways and arches', 'Etruscan caves', 'Renaissance palace'],
    historicalNotes: 'Founded by Etruscans over 2,500 years ago, Civita faces constant threat from erosion. Today it remains one of Italy\'s most striking and endangered historic sites.',
    coordinates: { lat: 42.6278, lng: 12.1139 },
    featured: false
  },
  {
    id: 'gangi',
    name: 'Gangi',
    regionId: 'sicily',
    description: 'A beautiful medieval town built in a spiral around a hill, offering panoramic views of Mount Etna and the Madonie mountains.',
    population: 6900,
    elevation: 1011,
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    highlights: ['Ventimiglia Castle', 'Mother Church', 'Palace of Bongiorno', 'Traditional festivals'],
    historicalNotes: 'Founded in the Byzantine era, Gangi has been recognized as one of "The Most Beautiful Villages in Italy" and features remarkable medieval architecture.',
    coordinates: { lat: 37.7983, lng: 14.2072 },
    featured: true
  },
  {
    id: 'alberobello',
    name: 'Alberobello',
    regionId: 'puglia',
    description: 'Famous for its unique trulli houses with conical roofs, this UNESCO World Heritage site showcases a remarkable example of traditional construction.',
    population: 10700,
    elevation: 428,
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    highlights: ['Trulli houses', 'Trullo Sovrano', 'Church of Saint Anthony', 'Trulli Museum'],
    historicalNotes: 'The unusual trulli construction dates back to the 14th century and was designed to be easily dismantled to avoid taxation on permanent dwellings.',
    coordinates: { lat: 40.7864, lng: 17.2402 },
    featured: true
  },
  {
    id: 'calcata',
    name: 'Calcata',
    regionId: 'lazio',
    description: 'Perched on a volcanic cliff, Calcata is a bohemian medieval village that has become a haven for artists and craftspeople.',
    population: 900,
    elevation: 290,
    image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140',
    highlights: ['Medieval stone architecture', 'Artistic community', 'Surrounding nature reserve', 'Local crafts'],
    historicalNotes: 'Originally an Etruscan settlement, Calcata was largely abandoned in the 1930s until artists and hippies rediscovered it in the 1960s, transforming it into the unique cultural enclave it is today.',
    coordinates: { lat: 42.2175, lng: 12.4264 },
    featured: true
  },
  {
    id: 'fano-adriano',
    name: 'Fano Adriano',
    regionId: 'marche',
    description: 'Nestled in the Gran Sasso National Park, Fano Adriano is a charming mountain village offering spectacular natural scenery and outdoor activities.',
    population: 350,
    elevation: 750,
    image: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9',
    highlights: ['Mountain hiking trails', 'Traditional stone architecture', 'Local gastronomy', 'Winter sports'],
    historicalNotes: 'Dating back to the medieval period, Fano Adriano has preserved its authentic character despite earthquakes that have affected the region throughout its history. The village showcases typical Abruzzese mountain architecture.',
    coordinates: { lat: 42.5509, lng: 13.5322 },
    featured: true
  },
  {
    id: 'montepulciano',
    name: 'Montepulciano',
    regionId: 'tuscany',
    description: 'A Renaissance hill town famous for its Vino Nobile wine, medieval architecture, and stunning views of the Val d\'Orcia.',
    population: 14000,
    elevation: 605,
    image: 'https://cdn4.tuscanynowandmore.com/storage/app/uploads/public/19e/f87/9a2/thumb__1920_0_0_0_auto.jpg',
    highlights: ['Vino Nobile wine', 'Piazza Grande', 'Medieval walls', 'Renaissance palaces'],
    historicalNotes: 'Founded in the 4th century BC, Montepulciano flourished during the Renaissance and is known for its wine production and architectural heritage.',
    coordinates: { lat: 43.1000, lng: 11.7800 },
    featured: true
  },
  {
    id: 'pienza',
    name: 'Pienza',
    regionId: 'tuscany',
    description: 'A UNESCO World Heritage site known as the "Ideal City" of the Renaissance, famous for its Pecorino cheese and panoramic views.',
    population: 2100,
    elevation: 491,
    image: 'https://www.italia.it/content/dam/tdh/it/interests/toscana/pienza-la-citta-ideale/media/20210310170416-shutterstock-1779793667.jpg',
    highlights: ['Pecorino cheese', 'Piazza Pio II', 'Renaissance architecture', 'Val d\'Orcia views'],
    historicalNotes: 'Transformed by Pope Pius II in the 15th century, Pienza represents one of the first examples of Renaissance urban planning.',
    coordinates: { lat: 43.0767, lng: 11.6789 },
    featured: true
  },
  {
    id: 'volterra',
    name: 'Volterra',
    regionId: 'tuscany',
    description: 'An ancient Etruscan town perched on a hill, known for its alabaster craftsmanship and well-preserved medieval architecture.',
    population: 10500,
    elevation: 531,
    image: 'https://www.toscana.info/wp-content/uploads/sites/123/volterra-mura-hd.jpg',
    highlights: ['Etruscan Museum', 'Alabaster workshops', 'Roman Theater', 'Medieval walls'],
    historicalNotes: 'One of the 12 Etruscan cities, Volterra has a rich history spanning over 3,000 years and is famous for its alabaster production.',
    coordinates: { lat: 43.4000, lng: 10.8667 },
    featured: true
  },
];

export const events: Event[] = [
  {
    id: '1',
    name: 'Sagra del Tartufo',
    location: 'San Miniato, Tuscany',
    villageId: 'san-gimignano',
    regionId: 'tuscany',
    date: '2024-11-15',
    startTime: '10:00',
    endTime: '22:00',
    description: 'Annual truffle festival featuring local food, music, and truffle hunting demonstrations.',
    program: [
      {
        time: '10:00',
        activity: 'Opening Ceremony',
        description: 'Welcome speech by the mayor and local authorities'
      },
      {
        time: '11:00',
        activity: 'Truffle Hunting Demo',
        description: 'Watch trained dogs find truffles in the local woods'
      },
      {
        time: '12:00',
        activity: 'Cooking Show',
        description: 'Local chefs demonstrate truffle-based recipes'
      },
      {
        time: '14:00',
        activity: 'Food Stalls Open',
        description: 'Taste various truffle dishes and local specialties'
      },
      {
        time: '20:00',
        activity: 'Live Music',
        description: 'Traditional Italian music performance'
      }
    ],
    images: ['https://www.ferrarainfo.com/it/santagostino/eventi/manifestazioni-e-iniziative/sagre-feste/sagra-del-tartufo-autunnale/leadImage_carousel'],
    isFree: true,
    capacity: 500,
    organizer: 'Comune di San Miniato',
    contactInfo: 'info@sagradeltartufo.it',
    website: 'www.sagradeltartufo.it'
  },
  {
    id: '2',
    name: 'Festa della Vendemmia',
    location: 'Montefioralle, Tuscany',
    villageId: 'san-gimignano',
    regionId: 'tuscany',
    date: '2024-09-28',
    startTime: '09:00',
    endTime: '23:00',
    description: 'Traditional grape harvest festival with wine tasting, grape stomping, and local crafts.',
    program: [
      {
        time: '09:00',
        activity: 'Grape Harvest',
        description: 'Join the locals in harvesting grapes from the vineyards'
      },
      {
        time: '11:00',
        activity: 'Grape Stomping',
        description: 'Traditional grape stomping demonstration'
      },
      {
        time: '13:00',
        activity: 'Lunch',
        description: 'Traditional Tuscan lunch with local wines'
      },
      {
        time: '15:00',
        activity: 'Craft Market',
        description: 'Local artisans showcase their products'
      },
      {
        time: '20:00',
        activity: 'Dinner & Dance',
        description: 'Traditional dinner followed by folk dancing'
      }
    ],
    images: ['https://www.fontanafredda.it/wp-content/uploads/2024/08/FDV_2024_GENERICO_evento.jpg'],
    isFree: true,
    capacity: 300,
    organizer: 'Pro Loco Montefioralle',
    contactInfo: 'info@festavendemmia.it'
  }
];
