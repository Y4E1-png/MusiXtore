export const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (error) {
    console.error("Could not load cart", error)
    return [];
  }
};

export const saveCartToLocalStorage = (items) => {
  try {
    const serializedCart = JSON.stringify(items);
    localStorage.setItem("cart", serializedCart);
  } catch (error) {
    console.error("Could not load cart", error);
  }
};