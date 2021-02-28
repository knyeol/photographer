import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_IMAGES } from "../../apollo";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Portfolio() {
  const [images, setImages] = useState(null);
  const [ids, setIds] = useState(null);
  const { data } = useQuery(GET_IMAGES);

  useEffect(() => {
    if (!data) return;
    setIds(data.portfolios.map((data) => data.id));
    setImages(data.portfolios.map((data) => data.image.formats.large.url));
  }, [data]);

  return (
    <content-container>
      <text-subtitle>Portfolio</text-subtitle>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <portfolio-container>
        {images &&
          images.map((image, index) => (
            <LazyLoadImage key={ids[index]} src={`${image}`} />
          ))}
      </portfolio-container>
      <a className="link" href="/portfolio">
        View All
      </a>
    </content-container>
  );
}

export default Portfolio;
