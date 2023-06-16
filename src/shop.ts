import Item from './items';

class Shop {
  private items: Item[];

  constructor() {
    this.items = [];
    const item1 = new Item('Burgers', 10, 'Bubba Burgers');
    const item2 = new Item('Cheese', 20, 'Craft singles');
    const item3 = new Item('Buns', 30, 'Generic buns');
    this.items.push(item1, item2, item3);
  }

  public getItems(): Item[] {
    return this.items;
  }
}

export default Shop;