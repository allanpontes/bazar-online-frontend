import { Component, computed, inject, signal } from '@angular/core';
import { ProductCard } from '../../../../shared/components/product-card/product-card';
import { ProductService } from '../../../../core/services/product';
import {
  Product,
  ProductCondition,
  ProductSize,
} from '../../../../core/models/product.model';

type PriceRange = 'all' | 'under-80' | '80-150' | 'over-150';

@Component({
  imports: [ProductCard],
  selector: 'app-home-catalog',
  styleUrl: './home-catalog.css',
  templateUrl: './home-catalog.html',
})
export class HomeCatalog {
  private readonly productService = inject(ProductService);

  readonly sizes: ProductSize[] = ['P', 'M', 'G'];
  readonly conditions: ProductCondition[] = [
    'Novo com etiqueta',
    'Gentilmente usado',
    'Vintage',
  ];
  readonly priceRanges: { id: PriceRange; label: string }[] = [
    { id: 'all', label: 'Todas' },
    { id: 'under-80', label: 'Até R$ 80' },
    { id: '80-150', label: 'R$ 80 – R$ 150' },
    { id: 'over-150', label: 'Acima de R$ 150' },
  ];

  readonly selectedSizes = signal<Set<ProductSize>>(new Set());
  readonly selectedConditions = signal<Set<ProductCondition>>(new Set());
  readonly selectedPriceRange = signal<PriceRange>('all');
  readonly products = signal<Product[]>([]);

  readonly filteredProducts = computed(() => {
    const sizes = this.selectedSizes();
    const conditions = this.selectedConditions();
    const range = this.selectedPriceRange();

    return this.products().filter((product) => {
      const matchesSize = sizes.size === 0 || sizes.has(product.size);
      const matchesCondition =
        conditions.size === 0 || conditions.has(product.condition);
      const matchesPrice = this.matchesPrice(product.price, range);
      return matchesSize && matchesCondition && matchesPrice;
    });
  });

  constructor() {
    this.productService.getProducts().subscribe((products) => {
      this.products.set(products);
    });
  }

  toggleSize(size: ProductSize): void {
    const next = new Set(this.selectedSizes());
    if (next.has(size)) {
      next.delete(size);
    } else {
      next.add(size);
    }
    this.selectedSizes.set(next);
  }

  toggleCondition(condition: ProductCondition): void {
    const next = new Set(this.selectedConditions());
    if (next.has(condition)) {
      next.delete(condition);
    } else {
      next.add(condition);
    }
    this.selectedConditions.set(next);
  }

  selectPriceRange(range: PriceRange): void {
    this.selectedPriceRange.set(range);
  }

  isSizeActive(size: ProductSize): boolean {
    return this.selectedSizes().has(size);
  }

  isConditionActive(condition: ProductCondition): boolean {
    return this.selectedConditions().has(condition);
  }

  private matchesPrice(price: number, range: PriceRange): boolean {
    switch (range) {
      case 'under-80':
        return price <= 80;
      case '80-150':
        return price > 80 && price <= 150;
      case 'over-150':
        return price > 150;
      default:
        return true;
    }
  }
}
