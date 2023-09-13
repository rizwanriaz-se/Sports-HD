import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import channelInfo from "./channelInfo";


const ChannelGrid = () => {


    return (
        <div className="grid grid-flow-col auto-cols-max gap-8 mx-6">

            {channelInfo.map((channel, k) => (
                <Link to={channel.url}>
                    <div id={k} className="card card-body rounded-lg bg-white mb-0 pb-2">
                        <img src={channel.img} alt={channel.name} className="image-full w-60 h-60" />
                        <div className="card-title self-center text-black">{channel.name}</div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ChannelGrid;