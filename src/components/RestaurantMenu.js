import { useState } from "react";
import resList from "../utils/mockData";
import { CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(resList);
  const {resId} = useParams();
  console.log("resId: ",resId);
  const a = resInfo.filter((res) => (
    parseInt(resId) === parseInt(res?.card?.card?.info?.id)
  ))
  
  return (
    <div className="menu">
      <img
        className="res-img"
        alt="res-logo"
        src={CDN_URL + a[0]?.card?.card?.info?.cloudinaryImageId}
      />
      <h1>{a[0]?.card?.card?.info?.name}</h1>
      <p>
        {a[0]?.card?.card?.info?.cuisines.join(",")} - {a[0]?.card?.card?.info?.costForTwo}
      </p>
      <h3>{a[0]?.card?.card?.info?.sla?.avgRating}</h3>
      <h3>{a[0]?.card?.card?.info?.areaName}</h3>
    </div>
  );
};

export default RestaurantMenu;
