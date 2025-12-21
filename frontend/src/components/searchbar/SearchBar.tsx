import { useState, useEffect } from "react"
import './searchbar.css'

export default function SearchBar(){
    
    return(
        <section className="searchbar-container">
            <input type="text" className="searchbar" placeholder="Enter your search..."/>
        </section>
    )
}