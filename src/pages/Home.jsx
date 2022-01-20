import Header from "../components/header/Header";
import Proposal from "../proposal/Proposal";
import HorizontalBreak from "../components/horizontalBreak/HorizontalBreak";
import Ariticle from "../components/article/Article";
import Package from "../components/package/Package";

function Home() {
    return (
        <>
            <Header />
            <Proposal />
            <HorizontalBreak image={['./assets/image/parallax-search-2.jpg']} />
            <Ariticle />
            <HorizontalBreak image={['./assets/image/parallax-5-filter.jpg', './assets/image/parallax-6-filter.jpg']} />
            <Package />
        </>
    )
}

export default Home;