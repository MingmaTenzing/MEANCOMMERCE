import { createReducer, on } from '@ngrx/store';
import { Compare_Items_State } from './app.state';
import { add_to_compare, remove_from_compare } from './action';

export const initialState: Compare_Items_State = {
  items: [
    {
      _id: '661f3a9e67816d0c6ff7098d',
      name: 'KAMRUI Mini PC, 12th Intel Alder Lake- N95 up to 3.4 GHz,16GB RAM+512GB M.2 SSD, Windows 11 Pro Mini Computer,Support 2.5 SATA SSD,WiFi 2.4G/5G,Bluetooth4.2,Triple Display,4K Reliable Office Small PC',
      price: 229,
      category: 'Computer & Laptop',
      featured: true,
      description:
        'Powerful 12th Intel Alder Lake- N95]--- KAMRUI AK1 PLUS Mini Computer about 5.1*5.1*1.8inch,is powered by Intel N95 (4M Cache, 4 Core,10nm Lithography,up to 3.40 GHz) ,Higher 30% than the performance of the 8th-Gen Celeron N5105, Pre-installed the newest windows 11 pro(64bit) but also support changing to other OS, like windows 10,ubuntu and linux, a deal and reliable partner for your work and life',
      rating: 4.3,
      createdAt: new Date(),
      stock: 10,
      brand: 'Kamrui',
      sku: 2593570,
      images: [
        'https://m.media-amazon.com/images/I/61k1eAJAunL._AC_SX425_.jpg',
        'https://m.media-amazon.com/images/I/61DtwoJLEPL._AC_SX425_.jpg',
        'https://m.media-amazon.com/images/I/714XrgL-tgL._AC_SX425_.jpg',
        'https://m.media-amazon.com/images/I/71FKLNjASWL._AC_SX425_.jpg',
      ],
    },
    {
      _id: '661f3a9e67816d0c6ff70987',
      name: '2023 - ASUS TUF F15 Gaming Laptop, 15.6-inch, 512GB SSD/16GB RAM, Intel Core i7-12700H, NVIDIA GeForce RTX 4050',
      price: 2297,
      category: 'Computer & Laptop',
      featured: true,
      description:
        'Processor : 12th Gen Intel Core i7-12700H Processor 2.3 GHz.Operating System: Windows 11 Home. Display: FHD (1920 x 1080) 16:9.Memory: 16GB DDR4-3200 SO-DIMM. Battery: 90WHrs, 4S1P, 4-cell Li-ion',
      rating: 4,
      createdAt: new Date(),
      stock: 10,
      brand: 'Asus',
      sku: 2593570,
      images: [
        'https://m.media-amazon.com/images/I/51HR961IyaL._AC_SY355_.jpg',
        'https://m.media-amazon.com/images/I/71msIBA3V9L._AC_SY355_.jpg',
        'https://m.media-amazon.com/images/I/7193eBv9skL._AC_SY355_.jpg',
        'https://m.media-amazon.com/images/I/61Gu3JI5RgL._AC_SY355_.jpg',
        'https://m.media-amazon.com/images/I/51p8YRSAF+L._AC_SY355_.jpg',
      ],
    },
    {
      _id: '661f3a9e67816d0c6ff7098f',
      name: 'New Apple Mac Mini (Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB SSD)',
      price: 1014,
      category: 'Computer & Laptop',
      featured: false,
      description:
        'Apple-designed M1 chip for a giant leap in CPU, GPU and machine learning performance.8-core CPU packs up to 3x faster performance, to fly through workflows quicker than ever.Superfast SSD storage launches apps and opens files in an instant',
      rating: 4.8,
      createdAt: new Date(),
      stock: 10,
      brand: 'Apple',
      sku: 2593570,
      images: [
        'https://m.media-amazon.com/images/I/61MNtbRqLyS._AC_SX466_.jpg',
        'https://m.media-amazon.com/images/I/815lrEMzE-S._AC_SX466_.jpg',
        'https://m.media-amazon.com/images/I/61s9roA48WS._AC_SX466_.jpg',
        'https://m.media-amazon.com/images/I/511bsPO8j2S._AC_SX466_.jpg',
        'https://m.media-amazon.com/images/I/71Zrj+HKygS._AC_SX466_.jpg',
      ],
    },
  ],
};

export const compare_Reducer = createReducer(
  initialState,
  on(add_to_compare, (state, { product }) => {
    if (state.items.length === 3) {
      return state;
    }
    const itemExists = state.items.find((item) => item._id === product._id);
    if (!itemExists) {
      return {
        items: [...state.items, product],
      };
    }

    return state;
  }),
  on(remove_from_compare, (state, { product }) => ({
    ...state,
    items: state.items.filter((item) => item._id !== product._id),
  }))
);
