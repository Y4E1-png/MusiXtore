import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { CardContainer, CardCover, CardContent, CardTitle, CardArtist, CardData, AddButton } from './styles';



const SongCard = ({ song }) => {
  const dispatch = useDispatch();
  const isInCart = useSelector((state) =>
    state.cart.items.some((item) => item.id === song.id)
  );
  const buttonLabel = isInCart
    ? `${song.title} is in the cart`
    : `Agregar ${song.title} to cart`;

  const handleAddToCart = () => {
    dispatch (addToCart(song));
  };

  return (
    <CardContainer>
      {song.image && (
        <CardCover
          src={song.image}
          alt={`Portada de ${song.album}`}
        />
      )}

      <CardContent>
        <CardTitle title={song.title}>
          {song.title}
        </CardTitle>

        <CardArtist title={song.artist}>
          {song.artist}
        </CardArtist>

        <CardData title={`${song.album} · ${song.price}`}>
          {song.album} · ${song.price}
        </CardData>
      </CardContent>

      <AddButton type="button" onClick={handleAddToCart} aria-label={buttonLabel} title={buttonLabel} $isInCart={isInCart}>
        {isInCart ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="m4 8 2.5 2.5L12 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 3.5v9m-4.5-4.5h9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        )}
      </AddButton>
    </CardContainer>
  );
}

export default SongCard;




