import CoverSection from "./coverSection";
import MiddleSection from "./middleSection";
import MostRated from "./mostRated";
import PopularProducts from "./popularProducts";
import SubFooter from "./SubFooter";

const Home = () => {
  return (
    <>
      <CoverSection />
      <MiddleSection />
      <PopularProducts />
      <MostRated />
      <SubFooter />
    </>
  )
}

export default Home