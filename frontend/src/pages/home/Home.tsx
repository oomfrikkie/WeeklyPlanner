import { useState } from "react";
import axios from "axios";
import HeroBanner from "../../components/herobanner/HeroBanner";
import './home.css'
import ProductScroller from "../../components/product-scroller/ProductScroller";



export default function Home() {
  
 

  return (
    
      <section className="home-section">
        <div className="-home-container">
            <div>
              <HeroBanner />
            </div>
            <div>
              <h1>Browser by category</h1>
              <ProductScroller category="Shoes" />
              <ProductScroller category="Sports" />
              <ProductScroller category="Clothing" />
            </div>

        </div>
      </section>
    
  );
}
