import Logo from "./Logo";
import Menu from "./Menu";
import Avatar from "./Avatar";

function Header() {
  return (
    <div className="flex justify-around  shadow">
      <Logo />
      <Menu />
      <Avatar />
    </div>
  );
}

export default Header;
