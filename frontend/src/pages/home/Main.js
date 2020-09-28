import React from "react";

function Main() {
  return (
    <main-background>
      <content-container>
        <main-container>
          <main-content>
            <text-title>Jane Doe</text-title>
            <text-subtitle>Photographer</text-subtitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              earum esse. Inventore odio ipsa recusandae velit quas!
            </p>
          </main-content>
          <main-image>
            <img
              src={require("../../images/photographer.jpg")}
              alt="Jane Doe"
            />
          </main-image>
        </main-container>
      </content-container>
    </main-background>
  );
}

export default Main;
