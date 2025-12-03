import { IMAGES } from "@/utils/constants";

export interface TProduct {
  id: number;
  name: string;
  price: number;
  image: any;
  materials: string[];
}

export const products: TProduct[] = [
  {
    id: 1,
    name: "Detox Cleanse Paket",
    price: 150000,
    image: IMAGES.product1,
    materials: [
      "Salad hijau organik",
      "Nasi merah & quinoa",
      "Smoothie buah segar",
      "Sup sayuran ringan",
    ],
  },
  {
    id: 2,
    name: "Protein Balance Paket",
    price: 180000,
    image: IMAGES.product2,
    materials: [
      "Dada ayam panggang",
      "Sayur kukus segar",
      "Salad kacang & biji - bijian",
      "Jus lemon & jahe",
    ],
  },
  {
    id: 3,
    name: "Vegan Delight Paket",
    price: 170000,
    image: IMAGES.product3,
    materials: [
      "Tumis tahu tempe",
      "Nasi merah & sayuran",
      "Smoothie hijau",
      "Kue kering sehat",
    ],
  },
];
