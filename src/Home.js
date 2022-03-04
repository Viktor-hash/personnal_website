import img_cover from "../images/img_cover2.jpeg";
import FadeIn from "react-fade-in";

const Home = () => {
  return (
    <FadeIn>
      <div className="home">
        <img className="img_cover" src={img_cover} alt="" />
      </div>
    </FadeIn>
  );
};

export default Home;
