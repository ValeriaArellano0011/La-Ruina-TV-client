import React from "react";
import "./css/sort.css"

const Sort = () => {
    return (
        
        <div id="header">
            <ul className="nav">
                <li><a href="">Explore</a>
                    <ul>
                        <li><a href="">Music Genre</a>
                            <ul>
                                <li><a href="">Rock</a></li>
                                <li><a href="">Metal</a></li>
                                <li><a href="">Jazz</a></li>
                                <li><a href="">Blues</a></li>
                                <li><a href="">Góspel</a></li>
                                <li><a href="">Soul</a></li>
                                <li><a href="">Pop</a></li>
                                <li><a href="">Rock and roll</a></li>
                                <li><a href="">Country</a></li>
                            </ul>
                        </li>
                        <li><a href="">Artists</a></li>
                        <li><a href="">Category</a></li>
                        <li><a href="">Type Media</a></li>
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