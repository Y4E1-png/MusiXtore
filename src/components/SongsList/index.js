import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List } from "./styles";
import SongCard from "../SongCard";
import { fetchSongs } from "../../redux/slices/songsSlice";



const SongsList = () => {
  const dispatch = useDispatch()
  const {items, status, error} = useSelector((state) => state.songs);
  
  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch])

  return (
    <List>
      {items.map((song) => {
        <SongCard key={song.id} song={song} />
      })}
    </List>
  )
}