import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import channelInfo from "./channelInfo";


const ChannelGrid = () => {


    return (
        <div className="grid-container">
            {channelInfo.map((channel, k) => (
                <Link to={channel.url} className="card">
                    <div id={k} className="card-body">
                        <img src={channel.img} alt={channel.name} className="image-full" />
                        <div className="card-title">{channel.name}</div>
                    </div>
                </Link>
            ))}
        </div>

    )
}

export default ChannelGrid;