import Logo from "./Logo";
import Menu from "./Menu";
import Avatar from "./Avatar";

function Header() {
  return (
    <div className="flex justify-around items-center shadow-sm tablet:w-4/5 tablet:mx-auto tablet:justify-between relative">
      <Logo />
      <Menu />
      <Avatar />
    </div>
  );
}

export default Header;
