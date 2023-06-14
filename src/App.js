import React from "react"
import './style.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./Data"



export default function App() {
  const cards = Data.map(item => {
    return (
      <Card 
        id={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.country}
        title={item.title}
        price={item.price}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
      
    </div>
  );
}


/*
<Card
        img="katie-zaferes.png"
        rating="5.00"
        reviewCount= "{6}"
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="136"
      />
*/

/*

 <Card 
    key={item.id} 
    img={item.coverImg} 
    rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    location={item.location}
    title={item.title}
    price={item.price}
    />
   

*/