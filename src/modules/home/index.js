import Contact from "./contact";
import HeroBanner from "./herobanner";
import OriginalMagnatiles from "./originalmagnatiles";
import Woodentoys from "./woodentoys";
import Kinderkraft from "./kinderkraft";
import Artandcrafts from "./artsandcrafts";
import Carsandguns from "./carsandguns";
import Featuredbrands from "./featuredbrands";
import Exclusivewoodentoys from "./exclusivewoodentoys";
import Outdoortoys from "./outdoortoys";
import Gamescorner from "./gamescorner";
import Blogposts from "./blogposts";
import Buttonwhatsapp from "../../shared/button/buttonwhatsapp";
import Buttonmessage from "../../shared/button/buttonmessage";

export default function Home() {
    return (
        <>
            <Buttonwhatsapp />
            <Buttonmessage />
            <HeroBanner />
            <Contact />
            <OriginalMagnatiles />
            <Woodentoys />
            <Kinderkraft />
            <Artandcrafts />
            <Carsandguns />
            <Featuredbrands />
            <Exclusivewoodentoys />
            <Outdoortoys />
            <Gamescorner />
            <Blogposts />
        </>
    );
}