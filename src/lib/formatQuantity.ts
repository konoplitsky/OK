const MAX_NUMBER = 99;
const MAX_SYMBOLS = 3;

export const formatQuantity = (quantity: string | number) => {
  if (typeof quantity === 'number') {
    return quantity > MAX_NUMBER ? '99+' : String(quantity);
  } else {
    return quantity.length > MAX_SYMBOLS ? quantity.slice(0, MAX_SYMBOLS) : quantity;
  }
};
