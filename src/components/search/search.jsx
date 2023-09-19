import { useState } from "react";
import axios from "axios";

const searchFunction = (search, setVideoList) => {
    let url = `https://youtube.googleapis.com/youtube/v3/search?q=${search}&key=AIzaSyBIegSFTT--E-eyHJcu-Rz_BusEsv6ah3k`;
    axios
        .get(url)
        .then((res) => {
            console.log(res);
            setVideoList(res.data.items);
        })
        .catch((e) => {
            console.log(e);
        });
}
const Search = ({ setVideoList }) => {

    const [search, setSearch] = useState("")

    return (

        <>
            <div >
                <div style={{ fontSize: "22px", textAlign: "left", marginLeft: "100px" }}>
                    Search Video
                </div>
                <div>
                    <input type="text" onChange={(e) => setSearch(e.target.value)}
                        style={{ padding: "20px", fontSize: "22px", borderRadius: "10px", width: "80%" }}
                        onKeyDown={(e) => {
                            if (e.code == "Enter") {
                                searchFunction(search, setVideoList);
                            }
                        }}
                    >

                    </input>
                    <button style={{ padding: "25px", borderRadius: "10px", width: "10%" }}
                        onClick={(search, setVideoList) => {
                            searchFunction(search, setVideoList);
                        }}
                    >
                        search
                    </button>
                </div>
            </div>

        </>
    )
}
export default Search;