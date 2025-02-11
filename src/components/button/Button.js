import React from "react";
import "./Button.scss";

export default function Button({ text, className, href, newTab }) {
  if (href) {
    return (
      <a className={`main-button ${className}`} href={href} target={newTab ? "_blank" : "_self"} rel="noopener noreferrer">
        {text}
      </a>
    );
  }

  return <button className={`main-button ${className}`}>{text}</button>;
}
