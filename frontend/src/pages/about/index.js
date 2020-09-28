import React from "react";

function About() {
  return (
    <content-container>
      <text-subtitle>About</text-subtitle>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      <img src={require("../../images/camera.jpg")} alt="camera" />
      <text-header>I've taken for photos for 10 years.</text-header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, tempora
        accusamus rerum voluptatum minima animi quibusdam perferendis in
        tenetur, labore provident.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quos
        totam velit reiciendis voluptatum optio mollitia itaque facilis! Sequi,
        itaque. Laborum adipisci provident similique!
      </p>
      <text-header>I love beautiful landscapes.</text-header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quaerat
        incidunt adipisci distinctio?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        rerum a ex quod, unde similique repellat culpa et nesciunt? Minima,
        libero.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, iste
        omnis animi consequuntur consectetur pariatur distinctio itaque iure
        deleniti voluptas.
      </p>
    </content-container>
  );
}

export default About;
