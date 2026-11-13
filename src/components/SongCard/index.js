import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { Card, Image, Info, Title, Price, AddButton } from "./styles";

const SongCard = ({ song }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch (addToCart(song));
  };

  return (
    <Card>
      <Image src= {song.image} alt={song.title} />
      <Info>
        <Title>{song.title}</Title>
        <Price> {song.price} </Price>
        <AddButton onClick= {handleAddToCart}> Add to Cart </AddButton>
      </Info>
    </Card>
  )
}

export default SongCard;