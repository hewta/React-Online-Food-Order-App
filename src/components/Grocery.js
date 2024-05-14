import instalistMockData from "../utils/instamart";
import InstamartCard from "./InstamartCard";

const Grocery = () => {
  const item = instalistMockData;
 return (
    <div className="res-container">
      {item.map((restaurant) => (
          <InstamartCard
            key={restaurant?.nodeId}
            instData={restaurant}
          />
      ))}
    </div>
  );
};

export default Grocery;
