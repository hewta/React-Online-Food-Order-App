import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/userContext";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState(resList);
  const [filterRestaurant, setFilterRestaurant] = useState(resList);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  //Since I am iusing mock data so in order to show shimmer UI effect ,I have used setTimeout in order to keep topRated empty to show shimmer until then.
  //   setTimeout(() => {
  //     setListofRestaurants(resList);
  //   }, 1000);

  function topRatedRestraunt() {
    const a = filterRestaurant.filter(
      (res) => res.card.card.info.avgRating > 4
    );
    setFilterRestaurant(a);
  }

  // Creating a custum hook to checkthe online,offline status of an user.
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        OOPS!! It Looks like you are offline,Please Check your Internet
        connection;
      </h1>
    );

  if (listofRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="search-box"
          />
          <button
          className="searchrest"
            onClick={() => {
              //*** */ if {} use kr rhe then return dalo warna {} maat dalo after (res)=> if return use nahi karna..***
              const filteredRestaurant = listofRestaurants.filter((res) => {
                return res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilterRestaurant(filteredRestaurant);
              console.log(searchText);
            }}
          >
            Search Restaurant
          </button>
        </div>
        <button onClick={topRatedRestraunt} className="filter-btn">
          Top Rated Restaurant
        </button>
        <div className="search">
          <label className="username">UserName: </label>
          <input
            className="loggedininput"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container">
        {filterRestaurant.map((restaurant) => (
          <Link
            //key becs of map
            key={restaurant?.card?.card?.info?.id}
            to={"/restaurants/" + restaurant?.card?.card?.info?.id}
          >
            {restaurant?.card?.card?.info?.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard
                key={restaurant?.card?.card?.info?.id}
                resData={restaurant}
              />
            )} 
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
