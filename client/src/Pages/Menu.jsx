import { useState } from 'react';
import Data_Menu from '../Data/Data_Menu.json'

function Menu () {
    
    const [styleNumber,setStyleNumber] = useState(0);
    const [style1,setStyle1] = useState(Menu_Type_1());
    
    function ChangeStyle (){
        if(styleNumber === 0){
            setStyleNumber(1);
            setStyle1(Menu_Type_2);
        }
        else{
            setStyleNumber(0);
            setStyle1(Menu_Type_1);
        }
    }
    return(
        <div className='bg-gray-200\0 container mx-auto'>
            <div className=' text-end mx-10'>
                <span> (will be removed) Change style : </span>
                <button onClick={ChangeStyle} className='border-[0.05rem] border-black bg-gray-300 px-2 py-1 rounded-lg hover:bg-gray-400 transition-all duration-100'>CS</button>
            </div>
            <div className=''>
                {style1}
            </div>
        </div>
    )

}


function Menu_Type_1 () {
    return(
        <div className=' my-10 py-10 container mx-auto place-items-center CustomFont'>
            <div className='bg-orange-400 p-2'>
                {Data_Menu.map((value,key) => {
                    return(<Category CategoryName={value.category} ItemsList={value.items} Valute={"€"}></Category>)
                })}
            </div>
        </div>
    )
}

function Menu_Type_2 () {
    return(
        <div className='my-10 py-10 flex justify-center CustomFont'>
            <div className='bg-orange-400 p-2'>
                {Data_Menu.map((value,key) => {
                    return(<Category CategoryName={value.category} ItemsList={value.items} Valute={"€"}></Category>)
                })}
            </div>
        </div>
    )
}

const Category = ({CategoryName,ItemsList,Valute}) => {
    return(
        <div className=''>
            <div className='text-2xl sm:text-3xl pt-2 border-black border-b-[0.05rem] mb-2'>
                {CategoryName}
            </div>
            <div className='grid grid-flow-row '>
                {ItemsList.map((val,key) => {
                    return(
                        <Item key={key} Name={val.name} Price={val.price} Valute={Valute}></Item>
                    )
                })}
            </div>
        </div>
    )
}

const Item = ({Name,Price,Valute}) => {
    return(
        <div className='grid grid-cols-2 text-lg sm:text-xl text-white' >
            <span className='px-2'>{Name}</span>
            <span className='text-center'>{Price + " " + Valute}</span>
        </div>
    )
}

export default Menu;