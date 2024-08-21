import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-200 shadow-lg">
            <div className="logo-container">
                <img className="w-36 p-5" src="https://dynamic.brandcrowd.com/asset/logo/7f982a19-779d-4dd3-b533-7a9f66474000/logo-search-grid-1x?logoTemplateVersion=1&v=637810055012670000" />
            </div>
                <div className="flex items-center">
                    <ul className="flex p-4 m-4 ">
                        <li className="px-6">Online Status {onlineStatus == true ? "🚀" : "👻"}</li>
                        <li className="px-6"><Link to="/" >Home</Link></li>
                        <li className="px-6"><Link to="/about">About Us</Link></li>
                        <li className="px-6"> <Link to="/contact">Contact Us</Link> </li>
                        <li className="px-6">Cart</li>
                    </ul>
                </div>
            
        </div>
    )
}

export default Header;