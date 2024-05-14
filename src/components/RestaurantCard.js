import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/userContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, sla } =
      resData?.card?.card?.info;

    const {loggedInUser} = useContext(UserContext);

    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL + 
            resData?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} minutes</h4>
        <h5>{loggedInUser}</h5>
      </div>
    );
  };

  export const withPromotedLabel = (RestaurantCard) => {
    //it will return another component
    return (props) => {
      return(
        <div>
          <label className="promoted">Promoted</label>
          <RestaurantCard {...props} />
        </div>
      );
    }
  }

  export default RestaurantCard;