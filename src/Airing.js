import React from "react";
import { useGlobalContext } from "./context/global";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";

/**
 * Renders a list of anime images based on the provided props.
 * @param {Object} props - The component props.
 * @param {string} props.rendered - The type of rendering to be done. Can be "airing" or "search".
 * @returns {JSX.Element} - The rendered component.
 */
export default function Airing({ rendered }) {
  const { airingAnime, isSearch, searchResults } = useGlobalContext();

  /**
   * Renders the appropriate list of anime images based on the props and context variables.
   * @returns {JSX.Element[]} - The rendered list of anime images.
   */
  const conditionalRender = () => {
    const animeList = isSearch ? searchResults : airingAnime;

    return animeList?.map((anime) => (
      <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
        <img src={anime.images.jpg.large_image_url} alt="" />
      </Link>
    ));
  };

  return (
    <AiringStyled>
      <div>
        <div className="airing-anime">{conditionalRender()}</div>
        <Sidebar />
      </div>
    </AiringStyled>
  );
}

const AiringStyled = styled.div`
  display: flex;
  .airing-anime {
    margin-top: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 5rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
    background-color: #fff;
    border-top: 5px solid #e5e7eb;
    a {
      height: 500px;
      border-radius: 7px;
      border: 5px solid #e5e7eb;
    }
    a img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
`;
