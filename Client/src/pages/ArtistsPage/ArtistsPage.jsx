import React, { useRef } from "react";
import "./ArtistsPage.css";
import ArtistCardList from "../../components/ArtistCardList/ArtistCardList";
import { connect } from "react-redux";
import { initiateGetResult } from "../../redux/actions/index";
import SearchBar from '../../components/SearchBar/SearchBar'

const ArtistsPage = ({ initiateGetResult }) => {
  return (
    <div className="dashboard">
      <h1>Artists</h1>
      <SearchBar />
      <ArtistCardList />
    </div>
  );
};

export default ArtistsPage;
