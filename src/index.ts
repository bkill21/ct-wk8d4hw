import Shop from './shop';
import User from './user';

const shop = new Shop();
const user = new User('Ben');

const items = shop.getItems();
user.addToCart(items[0]);
user.addToCart(items[1]);
user.addToCart(items[2]);

user.printCart();

user.removeFromCart(items[1]);
user.removeQuantityFromCart(items[0], 2);
user.printCart();

console.log(`Cart Total: $${user.getCartTotal()}`);
