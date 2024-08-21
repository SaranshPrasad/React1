import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";
const useResturantMenu = async (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
 
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json);
    //   console.log(resInfo)
    // setResMenu(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
  };
  return resInfo;
};
export default useResturantMenu;
