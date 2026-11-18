import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { clearCart } from "../../redux/slices/cartSlice";
import { Receipt, Status, Songs, Summary, HomeButton } from "./styles";


const PostCheckOut = () => {
  const orderItems = useSelector((state) => state.order.items)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const clearPurchasedCart = state?.clearPurchasedCart;

  useEffect(() => {
    if (clearPurchasedCart) {
      dispatch(clearCart());
      navigate(".", { replace: true, state: null });
    }
  }, [clearPurchasedCart, dispatch, navigate]);
    const total = orderItems.reduce((sum, song) => {
    return sum + Number(song.price);
  }, 0);



  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Receipt>
      <Status>
        <span aria-hidden="true">✓</span>
        <h2>Order confirmed</h2>
        <p>Thank you for shopping at MusiXtore.</p>
      </Status>
      <Songs aria-label="Purchased songs">
        {orderItems.map((song) => (
          <li key={song.id}>
            <div className="cover" aria-hidden="true">
              {song.image ? <img src={song.image} alt="" /> : "♪"}
            </div>
            <div>
              <strong>{song.title}</strong>
              <small>{song.artist}</small>
            </div>
            <b>${song.price}</b>
          </li>
        ))}        
      </Songs>
      <Summary>
        <h3>Order summary</h3>
        <dl>
          <div><dt>Songs</dt><dd>{orderItems.length}</dd></div>
          <div><dt>Total</dt><dd>${total.toFixed(2)}</dd></div>
        </dl>
      </Summary>
      <HomeButton type="button" onClick={handleGoHome}>Back to catalog</HomeButton>
    </Receipt>
  );
};


export default PostCheckOut;
