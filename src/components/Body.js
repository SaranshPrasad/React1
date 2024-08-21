import { Link } from "react-router-dom";
import RestaurantCard from "./ResCard";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResturants, setListOfResturant] = useState(null);
  const [filteredResturants,  setFilteredResturant] = useState(null);
  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    setListOfResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants|| []
    );
    setFilteredResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  const userStatus = useOnlineStatus();
  if(userStatus === false){
   return  <h1>Look's like you are offline </h1>
  }

  if (filteredResturants === null) {
    return <Shimmer />
  }
  
  return (
    <div className="body">
      <div className="m-4 p-4">
      <input
            type="text"
            data-testid="searchInput"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }} className="border border-solid border-black"
          />
      <button
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfResturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredResturant(filteredRestaurant);
            }}

            className=" bg-green-500 px-4 m-4 py-2 rounded-lg"
          >
            Search
          </button>
        <button
          className=" bg-green-500 px-4 m-4 py-2 rounded-lg"
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredResturant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredResturants.length > 0 ? (
          filteredResturants.map((restaurant) => (
           <Link to={"/resturants/"+restaurant.info.id}> <RestaurantCard key={restaurant.info.id} resData={restaurant.info} /></Link>
          ))
        ) : (
          <p>No restaurants available</p>
        )}
      </div>
    </div>
  );
};

export default Body;
