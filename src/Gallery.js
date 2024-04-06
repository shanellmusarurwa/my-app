import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context/global";

export default function Gallery() {
  const { getAnimePictures } = useGlobalContext();
  const { id } = useParams();

  return <GalleryStyled>Gallery</GalleryStyled>;
}
const GalleryStyled = styled.div``;
