import React from "react";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaClipboard,
} from "react-icons/fa";

function Contact() {
  return (
    <content-container>
      <text-subtitle>Contact</text-subtitle>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <email-container>
        <span>photographer@email.com</span>&ensp;
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
