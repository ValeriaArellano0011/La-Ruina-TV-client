import React from "react";
import "./css/Sort.css"

const Sort = () => {
    return (
        
        <div id="header">
            <ul className="nav">
                <li>Explore
                    <ul>
                        <li>Music Genre
                            <ul>
                                <li>Rock</li>
                                <li>Metal</li>
                                <li>Jazz</li>
                                <li>Blues</li>
                                <li>Góspel</li>
                                <li>Soul</li>
                                <li>Pop</li>
                                <li>Rock and roll</li>
                                <li>Country</li>
                            </ul>
                        </li>
                        <li>Artists</li>
                        <li>Category</li>
                        <li>Type Media</li>
                    </ul>
                </li>
            </ul>
        </div>
        
        
        // <div>
        //     <select name="order_filter" className="sort">
        //         <option>Explore</option>
        //         <option value="MG">Music Genre</option>
        //         <option value="Ar">Artists</option>
        //         <option value="Ca">Category</option>
        //         <option value="TM">Type Media</option>
        //     </select>
        // </div>

    )
}
export default Sort;