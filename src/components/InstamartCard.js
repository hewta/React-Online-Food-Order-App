import { addItem } from "../utils/cartSlice";
import { INSTA_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const InstamartCard = (props) => {
    const { instData } = props;

    const dispatch = useDispatch();

    const handleAddItems = (instData) => {
        dispatch(addItem(instData));
    };

    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <button className="instamartadd" onClick={() => handleAddItems(instData)}>Add</button>
        <img
          className="res-logo"
          alt="res-logo"
          src={INSTA_URL + instData?.imageId
          }
        />
        <h3>{instData?.displayName}</h3>
        <h4>Product Count Available : {instData?.productCount}</h4>
      </div>
    );
  };

  export default InstamartCard;