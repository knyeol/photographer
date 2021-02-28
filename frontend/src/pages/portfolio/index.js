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
      <p>Check out Jane's landscape shots!</p>
      <images-container>
        {files &&
          files.map((file) => (
            <Modal
              key={file.id}
              id={file.id}
              imageSrc={`${file.formats.small.url}`}
              modalSrc={`${file.formats.large.url}`}
            />
          ))}
      </images-container>
    </content-container>
  );
}

export default Portfolio;
