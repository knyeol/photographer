import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_FILES } from "../../apollo";
import Modal from "../../components/Modal";

function Portfolio() {
  const [files, setFiles] = useState(null);
  const { data } = useQuery(GET_FILES);

  useEffect(() => {
    if (!data) return;
    setFiles(data.files);
  }, [data]);

  return (
    <content-container>
      <text-subtitle>All Works</text-subtitle>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus!</p>
      <images-container>
        {files &&
          files.map((file) => (
            <Modal
              key={file.id}
              id={file.id}
              imageSrc={`${process.env.REACT_APP_URL}${file.formats.small.url}`}
              modalSrc={`${process.env.REACT_APP_URL}${file.formats.large.url}`}
            />
          ))}
      </images-container>
    </content-container>
  );
}

export default Portfolio;
