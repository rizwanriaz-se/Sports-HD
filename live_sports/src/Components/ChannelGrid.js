import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import channelInfo from "./channelInfo";


const ChannelGrid = () => {


    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center">
            {channelInfo.map((channel, k) => (
                <Link to={channel.url} className="card p-4">
                    <div id={k} className="card-body rounded-lg bg-white mb-0 pb-2">
                        <img src={channel.img} alt={channel.name} className="image-full w-full h-full" />
                        <div className="self-center text-black font-semibold">{channel.name}</div>
                    </div>
                </Link>
            ))}
        </div>

    )
}

export default ChannelGrid;