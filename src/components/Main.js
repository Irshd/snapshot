import React, { useContext, useRef } from "react";
import { SnapshotContext } from "../snapshot-context/snapshot-context";
import { Link } from "react-router-dom";
import ImageDisplay from "./imageDisplay";
const Main = () => {
  const searchData = useRef(null);

  const { addSearchText } = useContext(SnapshotContext);
  return (
    <div>
      <div className="header">
        <h1>SnapShot</h1>
        <div>
          <input
            onChange={(e) => {
              searchData.current = e.target.value;
            }}
          />

          <Link
            to="/"
            onClick={() => {
              addSearchText(searchData.current);
            }}
          >
            <button>Search</button>
          </Link>
        </div>
        <div className="buttons">
          <Link
            className="button"
            to="/mountain"
            onClick={() => {
              addSearchText("Mountain");
            }}
          >
            Mountain
          </Link>
          <Link
            className="button"
            to="/beaches"
            onClick={() => {
              addSearchText("beaches");
            }}
          >
            Beaches
          </Link>
          <Link
            className="button"
            to="/birds"
            onClick={() => {
              addSearchText("birds");
            }}
          >
            Birds
          </Link>
          <Link
            className="button"
            to="/food"
            onClick={() => {
              addSearchText("food");
            }}
          >
            food
          </Link>
        </div>
      </div>

      <ImageDisplay />
    </div>
  );
};

export default Main;
