
import Marquee from "react-fast-marquee";


const Header = () => {
  return (
    <div className="cont">
      <Marquee >
        <h1 className="blog-title">POSTLY</h1>
        <h1 className="blog-title">BLOGS</h1>
        <h1 className="blog-title">EXPLORE</h1>
      </Marquee>
    </div>
  );
};

export default Header;
