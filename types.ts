export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  features: string[];
}

export interface Resource {
  id: string;
  title: string;
  category: string;
  description: string;
  downloadUrl: string;
  date: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = 'Todos' | 'Guías' | 'Rúbricas' | 'Plantillas' | 'Talleres';