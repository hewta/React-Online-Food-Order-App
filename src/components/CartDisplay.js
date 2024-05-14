import InstamartCard from "./InstamartCard";
import { INSTA_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

import { removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const CartDisplay = ({ instData }) => {

    const dispatch = useDispatch();

    const handleRemoveItem = (index) => {
        dispatch(removeItem(index));
    }

  return (
    <div className="res-container">
      {instData.map((restaurant,index) => (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
          <button className="remove" onClick={() => handleRemoveItem(index)}>Remove</button>
          <img
            className="res-logo image-animation"
            alt="res-logo"
            src={INSTA_URL + restaurant?.imageId}
          />
          <h3>{restaurant?.displayName}</h3>
        </div>
      ))}
    </div>
  );
};

export default CartDisplay;
