// Simple client-side cart store using localStorage
export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  slug: string;
  coverImageUrl?: string;
};

const CART_KEY = "divine_cart";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

export function saveCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export function addToCart(item: Omit<CartItem, "quantity">) {
  const cart = getCart();
  const existing = cart.find((i) => i.id === item.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  saveCart(cart);
  return cart;
}

export function removeFromCart(itemId: string) {
  const cart = getCart().filter((i) => i.id !== itemId);
  saveCart(cart);
  return cart;
}

export function updateCartQuantity(itemId: string, quantity: number) {
  const cart = getCart();
  const item = cart.find((i) => i.id === itemId);

  if (item) {
    if (quantity <= 0) {
      return removeFromCart(itemId);
    }
    item.quantity = quantity;
    saveCart(cart);
  }

  return cart;
}

export function clearCart() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CART_KEY);
}

export function getCartTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
