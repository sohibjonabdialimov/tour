import logo from "@/assets/images/logo_w.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 px-10">
      <div>
        <img className="w-44" src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex gap-4 items-center text-white">
          <li>
            <Link to={"/"}>Shaharlar</Link>
          </li>
          <li>
            <Link to={"/"}>Turizm joylari</Link>
          </li>
          <li>
            <Link to={"/"}>Diqqatga sazovor joylar</Link>
          </li>
          <li>
            <Link to={"/"}>Turistik tashkilotlar</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header