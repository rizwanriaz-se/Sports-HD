import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import channelInfo from "./channelInfo";

const Channel = () => {
    const { url } = useParams();
    const [channel, setChannel] = useState({});

    useEffect(() => {
        for (let i in channelInfo) {
            if (`/${url}` === channelInfo[i].url) {
                console.log(channelInfo[i]);
                setChannel(channelInfo[i]);
                break; // Stop searching once a match is found
            }
        }
    }, [url]);

    useEffect(() => {
        // Access the iframe element once it's available in the DOM
        const iframe = document.getElementById("myIframe");
        if (iframe) {
            // Add an event listener to the iframe's contentWindow
            iframe.contentWindow.addEventListener("click", function(event) {
                // Prevent the default behavior (opening popups)
                event.preventDefault();
                // Do whatever action you want when the iframe is clicked
                // For example, you can redirect the parent window to the iframe's source URL
                window.location.href = iframe.src;
            });
        }
    }, [channel.iframe]); // Use channel.iframe as a dependency

    return (
        <div>
            <p className="text-4xl font-bold mt-6 mx-6">
                {channel.name}
            </p>

            <div className="w-11/12 mx-2">
                {channel.iframe}
                <iframe id="myIframe" src="//stream.crichd.vip/update/star.php" width="100%" height="500px" marginheight="0" marginwidth="0" frameborder="0" allowfullscreen allow="encrypted-media" sandbox></iframe>
            </div>
        </div>
    );
};

export default Channel;
