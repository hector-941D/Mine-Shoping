const carrito = 'minecart';

export const getCart = () => {
  const saved = localStorage.getItem(carrito);
  if (!saved) return [];
  try {
    return JSON.parse(saved);
  } catch (e) {
    return [];
  }
};

export const saveCart = (cart) => {
  localStorage.setItem(carrito, JSON.stringify(cart));
};

export const addToCart = (product, quantity = 1) => {
  const cart = getCart();
  const existingIndex = cart.findIndex((item) => item.id === product.id);

  if (existingIndex !== -1) {
    const newQuantity = cart[existingIndex].cantidad + quantity;
    if (product.stock > 0 && newQuantity > product.stock) {
      alert(`Solo hay ${product.stock} unidades en stock.`);
      cart[existingIndex].cantidad = product.stock;
    } else {
      cart[existingIndex].cantidad = newQuantity;
    }
  } else {
    cart.push({
      ...product,
      cantidad: Math.min(quantity, product.stock || 1)
    });
  }

  saveCart(cart);
  return getCart();
};

export const updateQuantity = (id, quantity) => {
  let cart = getCart();
  const index = cart.findIndex((item) => item.id === Number(id));

  if (index !== -1) {
    if (quantity <= 0) {
      cart = cart.filter((item) => item.id !== Number(id));
    } else {
      const maxStock = cart[index].stock;
      cart[index].cantidad = Math.min(quantity, maxStock);
    }
  }

  saveCart(cart);
  return getCart();
};

export const removeFromCart = (id) => {
  const cart = getCart().filter((item) => item.id !== Number(id));
  saveCart(cart);
  return cart;
};

export const clearCart = () => {
  localStorage.removeItem(carrito);
  return [];
};

export const getCartTotal = () => {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.precio_esmeraldas * item.cantidad, 0);
};