export class Coffee {
  private name: string;
  private price: number;
  private stock: number;

  constructor(name: string, price: number, stock: number) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
  getStock() {
    return this.stock;
  }

  decrementStock(): void {
    try {
      if (this.stock <= 0) {
        throw new Error(`The coffee ${this.name} is out of stock.`);
      }
      this.stock -= 1;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  incrementStock(quantity: number): void {
    this.stock += quantity;
  }
}
