import React from "react";
import"./AppDownload.css"
import { assets } from "../../assets/assets";
function AppDownload() {
    return(
        <>
        <div className="app-download" id  = "app-download">
            <p> For Better Experiences Download<br/> Tomato App</p>
            <div className="app-download-platforms">
                <img src  = {assets.play_store}/>
                <img src  = {assets.app_store}/>

            </div>

        </div>
        </>
    )

}
export default AppDownload