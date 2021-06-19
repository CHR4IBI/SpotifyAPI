import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import "./SearchForm.css";

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== "") {
      setErrorMsg("");
      props.handleSearch(searchTerm);
    } else {
      setErrorMsg("Please enter a search term.");
    }
  };
  return (
    <React.Fragment>
      <div className="search-form">
        {errorMsg && (
          <Alert variant="danger" className="error-msg">
            {errorMsg}
          </Alert>
        )}
        <input
          onChange={handleInputChange}
          name="searchTerm"
          placeholder="Search for album, artist or playlist"
          autocomplete="off"
          type="search"
          id="formBasicEmail"
          class="form-control"
          value={searchTerm}
        ></input>
        <Button variant="dark" onClick={handleSearch}>
          Search
        </Button>{" "}
      </div>
    </React.Fragment>
  );
};
export default SearchForm;
