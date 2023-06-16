import { v4 as uuidv4 } from 'uuid';
import Item from './items';

class User {
  private id: string = uuidv4();
  private cart: Item[] = [];

  constructor(private name: string) {}

  public addToCart(item: Item): void {
    this.cart.push(item);
  }

  public removeFromCart(item: Item): void {
    this.cart = this.cart.filter((i) => i !== item);
  }

  public removeQuantityFromCart(item: Item, quantity: number): void {
    let count = 0;
    this.cart = this.cart.filter((i) => {
      if (i === item) {
        count++;
        return count > quantity;
      }
      return true;
    });
  }

  public getCartTotal(): number {
    return this.cart.reduce((total, item) => total + item.getPrice(), 0);
  }

  public printCart(): void {
    console.log(`User: ${this.name}'s Cart`);
    this.cart.forEach((item) => {
      console.log(`- ${item.getName()} ($${item.getPrice()})`);
    });
  }
}

export default User;
