import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function AnimeItem() {
  const { id } = useParams();

  const [anime, setAnime] = useState({});
  const [characters, setCharacters] = useState({});
  const [showMore, setShowMore] = useState(false);

  const {
    title,
    synopsis,
    trailer,
    duration,
    aired,
    season,
    images,
    rank,
    score,
    scored_by,
    popularity,
    status,
    rating,
    source,
  } = anime;

  const getAnime = async (anime) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
    const data = await response.json();
    setAnime(data.data);
  };

  const getCharacters = async (anime) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${anime}/characters`
    );
    const data = await response.json();
    setCharacters(data.data);
  };

  useEffect(() => {
    getAnime(id);
    getCharacters(id);
  }, []);
  return (
    <AnimeItemStyled>
      <h1>{title}</h1>
      <div className="details">
        <div className="detail">
          <div className="image">
            <img src={images?.jpg.large_image_url} alt="" />
          </div>
          <div className="anime-details">
            <p>
              <span>Aired:</span>
              <span>{aired?.string}</span>
            </p>
            <p>
              <span>Rating:</span>
              <span>{rating}</span>
            </p>
            <p>
              <span>Rank:</span>
              <span>{rank}</span>
            </p>
            <p>
              <span>Score:</span>
              <span>{score}</span>
            </p>
            <p>
              <span>scored By:</span>
              <span>{scored_by}</span>
            </p>
            <p>
              <span>Popularity:</span>
              <span>{popularity}</span>
            </p>
            <p>
              <span>Status:</span>
              <span>{status}</span>
            </p>
            <p>
              <span>Source:</span>
              <span>{source}</span>
            </p>
            <p>
              <span>Season:</span>
              <span>{season}</span>
            </p>
            <p>
              <span>Duration:</span>
              <span>{duration}</span>
            </p>
          </div>
        </div>
        <p className="description">
          {showMore ? synopsis : synopsis ? substring : (0, 500) + "..."}
          <button
            onClick={() => {
              setShowMore(!showMore);
            }}>
            {showMore ? "Show Less" : "Read More"}
          </button>
        </p>
      </div>
      <h3 className="title">Trailer</h3>
      <div className="trailer-container">
        {trailer?.embed_url && (
          <iframe
            src={trailer?.embed_url}
            title="inline Frame Example"
            width="800"
            height="450"
            frame-border="0"
            allow="accelerometer; autoplay; clipboard-write; encypted-media; gyroscope; picture-in-picture "
            allowFullScreen></iframe>
        )}
      </div>
      <h3 className="title">Characters</h3>
      <div className="characters">
        {characters?.map((character, index) => {
          const { role } = character;
          const { images, name, mal_id } = character.character;
          return (
            <link to={`/character/${mal_id}`} key={index}>
              div{" "}
              <div className="character">
                <img src={images?.jpg.image_url} alt="" />
                <h4>{name}</h4>
                <p>{role}</p>
              </div>
            </link>
          );
        })}
      </div>
    </AnimeItemStyled>
  );
}

const AnimeItemStyled = styled.div`
  padding: 3rem;
  background-color: #ededed;
  h1 {
    display: inline-block;
    font-size: 3rem;
    cursor: pointer;
    background: linear-gradient(to right, #a855f7, #27ae60);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.4s ease-in-out;
    &:hover {
      transform: skew(-3deg);
    }
    .description {
      margin-top: 2rem;
      color: #6c7983;
      line-height: 1.7;
      button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 1.2rem;
        color: #27ae60;
        font-weight: 600;
      }
    }
    .trailer-container {
      display: flex;
      justify-content: center;
      align-items: center;
      iframe {
        outline: none;
        border: 5px solid #e5e7eb;
        padding: 1.5rem;
        border-radius: 10px;
        background-color: #ffffff;
      }
    }
    .characters {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-gap: 2rem;
      background-color: #fff;
      padding: 2rem;
      border-radius: 20px;
      border: 5px solid #e5e7eb;
      .character {
        padding: 0.4rem 0.6rem;
        border-radius: 7px;
        background-color: #ededed;
        transition: all 0.4s ease-in-out;
        img {
          width: 100%;
        }
        h4 {
          padding: 0.5rem 0;
          color: #454e56;
        }
        p {
          color: #27ae60;
        }
        &:hover {
          transform: translateY(-5px);
        }
      }
    }
    .details {
      background-color: #fff;
      border-radius: 20px;
      padding: 2rem;
      border: 5px solid #e5e7eb;
      .detail {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        img {
          border-radius: 7px;
        }
        .anime-details {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        p {
          display: flex;
          gap: 1rem;
        }
        p span:first-child {
          font-weight: 600;
          color: #6c7983;
        }
      }
    }
  }
`;
