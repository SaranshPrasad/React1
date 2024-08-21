import { MENU_API } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();
  console.log("Res id = " + resId);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data?.cards[2]?.card?.card?.info);
    setResMenu(
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    console.log(resInfo);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo || {};

  return (
    <div className="flex justify-center align-middle m-4 p-4 flex-col">
      <h1 className="font-bold text-center text-4xl">{name}</h1>
      <div className="flex flex-wrap flex-col m-4 p-4 justify-center gap-2">
        <div className="flex gap-2 justify-center">
          <h2 className="text-lg font-semibold border-b">
            {" "}
            Top Picks &rarr; {cuisines.join(" - ")}{" "}
          </h2>
          <h3 className="text-lg ">Now At {costForTwoMessage.toUpperCase()}</h3>
        </div>
      </div>
      <div className="flex m-4 p-4 flex-wrap flex-col justify-center border-x border-t-2 ">
        <h1 className="font-bold p-4 m-4 text-xl gap-1">Menu Items</h1>
        {resMenu.map((item) => (
          <div className="m-4 p-4 border-b border-black flex justify-between">
            {" "}
            <p className="font-bold text-lg ">{item.card.info.name}</p>{" "}
            <p className="font-semibold text-lg">
              {" "}
              Price :- Rs.{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
