import { useEffect } from 'react';
import Data from '../Data/Data.json'

import Aos from 'aos';
import 'aos/dist/aos.css';


function Schedule() {
    useEffect(()=>{
        Aos.init({duration:1500});
    },[]);

    return(
        <div className="bg-orange-400 flex justify-center py-10">
            <div data-aos="fade-left" className='bg-white grid space-y-10 shadow-2xl p-3 divide-y-2 divide-orange-400'>
                <h1 className='text-4xl md:text-6xl text-center'>{Data.opening_hours_text}</h1>
                <div className='text-2xl md:text-4xl grid grid-cols-2 p-10'>
                    <div className='space-y-2'>
                        {
                            Data.opening_hours.map((value,key) => {
                                return(
                                    <div>
                                        {value.day}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='space-y-2'>
                        {
                            Data.opening_hours.map((value,key) => {
                                var temp = value.hours;
                                if(temp.toLowerCase() === "closed" | temp.toLowerCase() === "fermé"){
                                    return(
                                        <div className='text-red-600'>
                                            {temp}
                                        </div>
                                    )
                                }
                                return(
                                    <div>
                                        {temp}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule;