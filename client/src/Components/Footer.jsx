import Data from "../Data/Data.json"

function Footer () {
    return(
        <div className="bg-slate-800">
            <RestaurantInfo/>
            <DevelopperInfo/>
        </div>
    )
}

const RestaurantInfo = () => {
    return(
        <div className="text-gray-300 text-center pt-3">

            <h1 className="">
                Copyright by @{Data.restaurant_name}. All rights reserved.
            </h1>
            <h1>
                <a href={Data.terms_of_service_href} className="hover:underline hover:text-blue-600">
                    Terms of Service (ToS)
                </a>
            </h1>

        </div>
    )
}

const DevelopperInfo = () => {
    return(
        <div className="py-1">
            <h1 className="text-center text-gray-400">Project by <a className="text-blue-700 underline" href={Data.restaurant_footer[0].DevHref}>
                {Data.restaurant_footer[0].DevName}
                </a> 
            </h1>
        </div>
    )
}


export default Footer;