import React,{Component} from "react";
import {Animated} from "react-animated-css";

import NRC_burger from '../Resources/NCR_burger.jpg';
import NRC_pasta from '../Resources/NCR_pasta.jpg';
import NRC_saumon from '../Resources/NCR_saumon.jpg'

import Data from "../Data/Data.json"
import Schedule from "../Components/Schedule";

class Home extends Component {
    render(){
        return(
            <div className="font-custom_font_2">
                <div className="xl:grid xl:grid-cols-2">
                    <div id="home_left_" className="grid content-center">
                        <IntroductionTextCard></IntroductionTextCard>
                    </div>
                    <div id="home_right_" className="">
                        <RandomImages></RandomImages>
                    </div>
                </div>
                <div id="stuff_probably_Schedule">
                    <Schedule/>
                </div>
            </div>
        )
    }
}

const IntroductionTextCard = () => {
    return(
        <Animated animationIn="fadeInLeft" isVisible={true}>
                    <div className="bg-orange-400 mx-10 text-neutral-100 p-4">
                            <h1 className="text-6xl font-bold" >
                                Enjoy your best time
                            </h1>
                            <h1 className="text-6xl font-bold border-b-2 border-orange-500 pb-2" >
                                with <i> {Data.restaurant_name} </i> 
                            </h1>
                            <p className="text-2xl md:w-[40rem] mt-5">
                            What we like: As a Massachusetts native, I want to book a ferry ticket after seeing the website for 
                            Martha’s-Vineyard-based doughnut shop Back Door Donuts. Maybe it’s the friendly and inviting images 
                            and copy, or the frosting drip effects, or maybe I just want a doughnut from somewhere other than Dunkin’.
                            <br/><br/>
                            The website’s designers know how tempting a bunch of high-res photos of doughnuts can be, 
                            but we like that this website goes beyond the food to highlight its history and place in the community.
                            </p>
                    </div>
        </Animated>
    )
}

const RandomImages = () => {
    return(
        <div className="relative h-screen">
            <Animated animationIn="fadeInLeft" animationInDuration={500}
            className="
            w-[300px] md:w-[350px] 2xl:w-[400px]
            absolute top-[5%] left-[10%]
            shadow-lg shadow-black">
                <img src={NRC_burger} alt="burger"></img>
            </Animated>
            <Animated animationIn="fadeInLeft" animationInDuration={700}
            className="
            w-[300px] md:w-[350px] 2xl:w-[400px]
            absolute bottom-[15%] left-[20%]
            shadow-lg shadow-black">
                <img src={NRC_pasta} alt="pasta" ></img>
            </Animated>
            <Animated animationIn="fadeInLeft" animationInDuration={900}
            className="
            w-[300px] md:w-[350px] 2xl:w-[400px]
            absolute 
            left-[30%] top-[31%]
            md:top-[35%] md:left-[50%]
            shadow-lg shadow-black">
                <img src={NRC_saumon} alt="saumon"  ></img>
            </Animated>
        </div>
    )
}

export default Home;