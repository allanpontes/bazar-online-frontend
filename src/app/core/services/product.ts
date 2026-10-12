import { Service } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Service()
export class ProductService {
  private readonly products: Product[] = [
    {
      id: 1,
      title: 'Jaqueta jeans oversized 90s',
      price: 189.9,
      size: 'G',
      condition: 'Vintage',
      imageUrl:
        'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Jaqueta jeans azul vintage em cabide',
    },
    {
      id: 2,
      title: 'Vestido midi floral Zara',
      price: 79.0,
      size: 'M',
      condition: 'Gentilmente usado',
      imageUrl:
        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Vestido vermelho midi em manequim',
    },
    {
      id: 3,
      title: 'Bolsa tote de couro caramelo',
      price: 220.0,
      size: 'M',
      condition: 'Novo com etiqueta',
      imageUrl:
        'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Bolsa de couro marrom sobre fundo claro',
    },
    {
      id: 4,
      title: 'Tênis All Star branco 38',
      price: 95.5,
      size: 'M',
      condition: 'Gentilmente usado',
      imageUrl:
        'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Tênis branco casual visto de lado',
    },
    {
      id: 5,
      title: 'Cardigan de lã merino',
      price: 64.9,
      size: 'P',
      condition: 'Novo com etiqueta',
      imageUrl:
        'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Suéter de malha bege dobrado',
    },
    {
      id: 6,
      title: 'Camisa de linho off-white',
      price: 48.0,
      size: 'G',
      condition: 'Gentilmente usado',
      imageUrl:
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Camisa de linho clara em cabide',
    },
    {
      id: 7,
      title: 'Calça jeans reta Levi’s 501',
      price: 129.0,
      size: 'M',
      condition: 'Vintage',
      imageUrl:
        'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Calça jeans azul dobrada',
    },
    {
      id: 8,
      title: 'Blazer de linho areia',
      price: 159.9,
      size: 'P',
      condition: 'Novo com etiqueta',
      imageUrl:
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Blazer bege de alfaiataria',
    },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
