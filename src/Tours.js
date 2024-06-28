import React, { useState } from "react";
import './tours.css';

function Tours() {
  const [places, setPlaces] = useState([
    {
      "id": "rec6d6T3q5EBIdCfD",
      "name": "Best of Paris in 7 Days Tour",
      "info": "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literaturer, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
      "image": "https://th.bing.com/th/id/OIP.DL4esutFue0GdM0eblu0tAHaE7?rs=1&pid=ImgDetMain",
      "price": "1,995"
    },
    {
      "id": "recIwxrvU9HfJR3B4",
      "name": "Best of Ireland in 14 Days Tour",
      "info": "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by bs,  the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
      "image": "https://www.course-api.com/images/tours/tour-2.jpeg",
      "price": "3,895"
    },
    {
      "id": "recJLWcHScdUtI3ny",
      "name": "Best of Salzburg & Vienna in 8 Days Tour",
      "info": "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcof Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
      "image": "https://www.course-api.com/images/tours/tour-3.jpeg",
      "price": "2,695"
    },
    {
      "id": "recK2AOoVhIHPLUwn",
      "name": "Best of Rome in 7 Days Tour",
      "info": "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history,  your tour guide will resurrect the grandeur of  Forum, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
      "image": "https://www.course-api.com/images/tours/tour-4.jpeg",
      "price": "2,095"
    },
    {
      "id": "receAEzz86KzW2gvH",
      "name": "Best of Poland in 10 Days Tour",
      "info": "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated  With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
      "image": "https://www.course-api.com/images/tours/tour-5.jpeg",
      "price": "2,595"
    }
  ])

  const [reservePlaces,setReservePlaces] = useState(places)

  

  const handleIntrest =(id)=>
    {
        const filteredPlaces = places.filter(place=>place.id!==id)
        setPlaces(filteredPlaces)

    }

    const handleRefresh =()=>
        {
            setPlaces(reservePlaces)

        }



 

  return (
    <div> 
        <div className="main">
    <div className="container mt-5">
      <div >
        <h2 className=" text-center">Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div className="row mt-5">
        {places.map((place) => (
          <div key={place.id} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card w-100 h-100">
              <img className="imag-fluid rounded w-100 h-100" src={place.image} alt={place.name} />
              <div className="card-body">
                <h5 className="card-title">{place.name}</h5>
                <p className="card-text">{place.info}</p>
                <p className="price"><strong>${place.price}</strong></p>
                <button className="btn btn-outline-success w-100" onClick={()=>handleIntrest(place.id)}>not intrested</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

   { places =='' && <div className="container text-center">
        <h2 className="h2">
            No Tours left

        </h2>
        <button className="btn btn-success" onClick={handleRefresh}>Refresh</button>

    </div> }





    </div>
    </div>
  );
}

export default Tours;
