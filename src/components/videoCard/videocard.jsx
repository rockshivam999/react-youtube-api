import axios from "axios"
import { useState } from "react"

const VideoCard = ({ videoId, setPlayUrl }) => {
    const [tittle, setTittle] = useState("")
    // let thumbmail=
    let tittleUrl = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + videoId + "&key=" + "AIzaSyBIegSFTT--E-eyHJcu-Rz_BusEsv6ah3k"
    axios.get(tittleUrl).then((res) => {
        setTittle(res.data.items[0].snippet.title)
    }).catch((e) => {
        setTittle("some error occured")
        console.log(e)
    })
    return (
        <div style={{ display: "flex", border: "solid grey", margin: "10px", padding: "10px" }} onClick={() => {
            setPlayUrl(videoId);
        }}>
            <div>
                <img src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}></img>
            </div>
            <div style={{ textAlign: 'center', alignContent: 'center', marginLeft: "10px" }}>
                <h4>{tittle}</h4>
            </div>
        </div>
    )

}
export default VideoCard;