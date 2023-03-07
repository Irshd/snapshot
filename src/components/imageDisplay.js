import React, { useContext } from "react";
import { SnapshotContext } from "../snapshot-context/snapshot-context";

const ImageDisplay = () => {
  const { imageData } = useContext(SnapshotContext);
  return (
    <div>
      {" "}
      <section className="image-container">
        {imageData.map((imageurl, key) => {
          return (
            <article className="flickr-image">
              <img src={imageurl} key={key} alt="img" />
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default ImageDisplay;
