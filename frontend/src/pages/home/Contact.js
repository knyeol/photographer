import React from "react";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaClipboard,
} from "react-icons/fa";

async function handleClick(e) {
  const text = e.target.innerText;
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.log(error);
  }
}

function Contact() {
  return (
    <content-container>
      <text-subtitle>Contact</text-subtitle>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <email-container>
        <span onClick={(e) => handleClick(e)}>photographer@email.com</span>
        &ensp;
        <FaClipboard className="email-icon" />
      </email-container>
      <social-container>
        <a href="/">
          <FaInstagramSquare />
        </a>
        <a href="/">
          <FaTwitterSquare />
        </a>
        <a href="/">
          <FaYoutubeSquare />
        </a>
      </social-container>
    </content-container>
  );
}

export default Contact;
