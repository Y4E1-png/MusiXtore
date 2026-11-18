import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/slices/cartSlice";
import { CartItem } from "../CartItem/CartItem";
import { CartGrid, CartSummary, CartTotal, CartActions, ClearCartButton, CheckoutLink, ContinueLink } from "./styles";
import { CartEmptyState, CartEmptyIcon, CartEmptyTitle, CartEmptyDescription, CartTitle, CartContainer } from "./styles"


export const Cart = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.cart);

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const total = items.reduce((sum, song) => {
    return sum + Number(song.price);
  }, 0);

  return (
    <CartContainer>
      <CartTitle>CART</CartTitle>

      {items.length === 0 && (
        <CartEmptyState>
          <CartEmptyIcon aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" >
              <path d="M9 18V5L21 3V16" />
              <path d="M9 9L21 7" />
              <ellipse cx="6" cy="18" rx="3" ry="2" />
              <ellipse cx="18" cy="16" rx="3" ry="2" />
            </svg>
          </CartEmptyIcon>

          <CartEmptyTitle>
            Your cart is empty
          </CartEmptyTitle>

          <CartEmptyDescription>
            Explore available songs and press «+» on the ones you want to purchase.
          </CartEmptyDescription>
        </CartEmptyState>
      )}

      <CartGrid>
        {items.map((song) => (
          <CartItem 
            key={song.id}
            song = {song}
          />
        ))}
      </CartGrid>

      
      <CartSummary>
        <CartTotal>
          <span>Total</span>
          <strong>${total.toFixed(2)}</strong>
        </CartTotal>

      
        <CartActions>
          <ContinueLink to="/">Explore Songs</ContinueLink>
          {items.length > 0 && (
            <>
              <ClearCartButton type="button" onClick={handleClearCart}>
                Empty Cart
              </ClearCartButton>
              <CheckoutLink to="/checkout">Continue to Payment</CheckoutLink>
            </>
          )}
        </CartActions>
      </CartSummary>

    </CartContainer>
  );
};

