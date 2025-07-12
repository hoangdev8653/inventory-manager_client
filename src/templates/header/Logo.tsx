import { Link } from "react-router-dom";
import LogoSection from "../../assets/images/logo.png";

function Logo() {
  return (
    <div>
      <Link to="/home">
        <img
          className=" object-cover py-2 h-20 w-20 tablet:w-[100px] "
          src={LogoSection}
          alt="LogoSection"
        />
      </Link>
    </div>
  );
}

export default Logo;
