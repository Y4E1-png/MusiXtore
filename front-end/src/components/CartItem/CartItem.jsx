import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/slices/cartSlice";
import { RemoveButton, CartItemContainer } from './styles'; 

export const CartItem = ({song}) => {
  const dispatch = useDispatch()

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(song))
  }

  return (
    <CartItemContainer>
      {song.image && (
        <img
          src={song.image}
          alt={`Portada de ${song.album}`}
        />
      )}
      <section>
        <h1 title={song.title}>
          {song.title}
        </h1>

        <h2 title={song.artist}>
          {song.artist}
        </h2>

        <p title={song.album}>{song.album}</p>
      </section>

      <strong>${song.price}</strong>

      <RemoveButton type="button" onClick={handleRemoveFromCart} aria-label={`Eliminar ${song.title} del carrito`} title="Eliminar del carrito">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="m4.5 4.5 7 7m0-7-7 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </RemoveButton>
    </CartItemContainer>
  )
}
