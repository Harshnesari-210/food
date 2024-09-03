// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

// const About=()=>{
//     return(
//         <div>
//             <h1>About page...</h1>
//         </div>
//     )
// }

// const Head=()=>{
//     return (
         
//            <div className='flex bg-pi'>  
//             <div className="">
//                 <img className="w-24" src="https://tse4.mm.bing.net/th?id=OIP.ZNRtGH20Gq2N9NPuEqQYCgHaHa&pid=Api&P=0&h=180" alt="" />
//             </div>

//             <div className="flex">
//                 <ul>
//                   <Link to={"/"}><li>Home</li></Link>
//                   <Link to={"/about"}><li>About</li></Link>
                    
//                     <li>contact us Us</li>
//                 </ul>
//             </div>
//         </div>
        
       

//     )
// }






// const Hero=()=>{

//   const [datax,setdatax]=useState(null)
//   const [searchtxt,setsearchtxt]=useState("")

// useEffect(()=>{
//   fetchdata();
// },[])

// const fetchdata=async ()=>{
//     const data= await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2600491&lng=74.4836128&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     )
  
//   const json= await data.json();
//   setdatax(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 
  
// }

//     return(
//         <div>
//              <div className="search">
//                 <input type="text" placeholder='Food!' value={searchtxt} onChange={(e)=>{
//                    setsearchtxt(e.target.value)
                
              
//                 }} />

//                 <button
//                 onClick={()=>{
//                     const  filter_data=datax.filter((res)=>
//                    res.name.toLowerCase().includes(searchtxt.toLowerCase())
//                     )
//                     setdatax(filter_data)
//                 }

//                 }
//                 >search</button>
//                 <button
//                 className='search-btn'
//                 onClick={()=>{
//                 const filter_data=datax.filter((res)=>res.avgRating>4.2)
//                 setdatax(filter_data)
                
//                 }}

//                 >Search</button>
//               </div>

//              <div className="cards">
//                {datax.map((restaurant)=>(<Link to={"/restarant/"+restaurant.id}><Card resname={restaurant} /></Link>))}
               
//               </div>
//         </div>
        
//     )
// }


// const Card=(props)=>{
// const {resname}=props;
// return(

//     <div className='card'>
//           <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resname.cloudinaryImageId} alt="" />
//           <h3>{resname.name}</h3>
//           <h4>{resname.avgRating}</h4>
          
//     </div>
// )
// }

// const RestaurantInfo=()=>{

//   const [data,setdata]=useState([])
//   const {id}=useParams();
 
//   useEffect(()=>{
//     fetchdata();
//   },[])
  
//   const fetchdata=async ()=>{
//       const data= await fetch(
//         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2600491&lng=74.4836128&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//       )
    
//     const json= await data.json();
//     setdata(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//   }

//   return(
//     <div className='restaInfo'>
//       <h2>hotel</h2>
//       <h1>{data.name}</h1>
//       <h1>{data.cuisines}</h1>
//     </div>
//   )
// }

// const Web=()=>
// {
//     return(
//         <div>
//            <Head/>
//            <Outlet/>
          
//         </div>
//     )
// }

// const webrouter=createBrowserRouter([
//     {
//         path:"/",   
//         element:<Web/>,
//         children:[
//           {
//             path:"/",
//             element:<Hero/>
//         },
//           {
//             path:"/about",
//             element:<About/>
//         },
//         {
//            path:"/restarant/:id",
//            element:<RestaurantInfo/>
//         },

//       ],
//     },
    
    
// ])
 

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={webrouter}/>);


import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link, Outlet, useParams } from 'react-router-dom';
import { createContext,useContext } from 'react';

const About = () => {
    return (
        <div>
            <h1>About page...</h1>
        </div>
    )
}

const username=createContext({
    name:"harsh",
})



 
const Head = () => {
    const {name}=useContext(username)

    return (
        <div className='flex bg-pink-100 justify-between shadow-lg'>
            <div className="">
                <img className="w-24" src="https://tse4.mm.bing.net/th?id=OIP.ZNRtGH20Gq2N9NPuEqQYCgHaHa&pid=Api&P=0&h=180" alt="" />
            </div>
            <div className="flex mr-10">
                <ul className='flex items-center justify-center '>
                    <Link to={"/"}><li className='px-4'>Home</li></Link>
                    <Link to={"/about"}><li className='px-4'>About</li></Link>
                    <li>Log In: {name}</li>
                </ul>
            </div>
        </div>
    )
}

const Hero = () => {
    const [datax, setDatax] = useState([]);
    const [searchtxt, setSearchTxt] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
      
            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2600491&lng=74.4836128&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await response.json();
            const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            setDatax(restaurants);
        
    };

   

    const handleSearch = () => {
        const filteredData = datax.filter((res) =>
            res.info.name.toLowerCase().includes(searchtxt.toLowerCase())
        );
        setDatax(filteredData);
    };

    const handleHighRatingSearch = () => {
        const filteredData = datax.filter((res) => res.info.avgRating > 4.2);
        setDatax(filteredData);
    };

    return (
        <div>
            <div className="p-4 m-4 " >
                <input type="text" className='border border-solid border-black  m-4 px-1 rounded-lg' placeholder='Search...' value={searchtxt} onChange={(e) => {
                    setSearchTxt(e.target.value);
                }} />
                <button className='m-4 px-3 rounded-lg bg-green-200' onClick={handleSearch}>Search</button>
                <button className='m-10 px-4 rounded-lg bg-gray-200' onClick={handleHighRatingSearch}> High Rated ⭐</button>
            </div>
            <div className="flex flex-wrap ">
                {
                    datax.map((restaurant) => (
                        <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
                            <Card resname={restaurant.info} />
                        </Link>
                    ))
                
                }
            </div>
        </div>
    )
}

const Card = (props) => {
    const { resname } = props;
    return (
        <div className='h-[300px] w-[250px] m-5  rounded-md bg-gray-100 hover:hover:border border-solid border-black shadow-md '>
            <img className='h-[140px] w-[90%] ml-3 pt-3 rounded-md ' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resname.cloudinaryImageId} alt="" />
            <h3 className='p-3 font-bold'>{resname.name}</h3>
            <h4 className='p-3'>{resname.avgRating}</h4>
            <h4 className='p-3'>{resname.cuisines.join(", ")}</h4>
        </div>
    )
}

const RestaurantInfo = () => {
    const [data, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2600491&lng=74.4836128&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await response.json();

            const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            const restaurant = restaurants.find((res) => res.info.id === id);
            setData(restaurant.info);
        } catch (error) {
            console.error("Failed to fetch data", error);
        }
    };

    return (
        <div className='restaInfo'>
            {data ? (
                <div className='text-center '>
                    <h1 className='font-bold m-4 p-4  '>{data.name}</h1>
                    <h2>{data.cuisines.join(', ')}</h2>
                    <h3>{data.avgRating}</h3>
                 </div>
                
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

const Web = () => {
    return (
        <div>
            <Head />
            <Outlet />
        </div>
    )
}

const webRouter = createBrowserRouter([
    {
        path: "/",
        element: <Web />,
        children: [
            {
                path: "/",
                element: <Hero />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantInfo />
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={webRouter} />);

