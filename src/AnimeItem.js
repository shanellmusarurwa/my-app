import React, { useEffect }  from "react";
import { useParams } from "react-router-dom";

export default function AnimeItem(){
    const {id}= useParams()

    const [anime , setAnime] = useState({})
    const [characters,setCharacters] = useState({})
    const [showMore,setShowMore] = useState(false)


    const {title, synopsis, trailer, duration, aired, season,images, rank , score,scored_by, popularity, status, rating,source}= anime

    const getAnime = async (anime) => {
        const response = await fetch (`https://api.jikan.moe/v4/anime/${anime}`)
         const data = await response.json()
         setAnime(data.data)
    }

    useEffect(()=> {
        getAnime(id)
    } [])
    return(
        <div>
            <h1>{title}</h1>
            <div className="details">
                <div className="detail">
                    <div className="image">
                        <img src={images?.jpg.large_image_url} alt=""/>
                    </div>
                    <div className="anime-details">
                        <p><span>Aired:</span><span>{aired?.string}</span></p>
                         
                    </div>
                </div>
            </div>
        </div>
    )
}