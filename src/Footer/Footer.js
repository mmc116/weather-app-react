import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer>">
      <footer className="git">
        Coded by{" "}
        <a
          href="https://github.com/mmc116/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Marta Chaves
        </a>
        , hosted on Netlify{" "}
      </footer>

      <footer className="photo">
        Photo by
        <a
          href="https://unsplash.com/@claybanks?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clay Banks
        </a>
        on
        <a
          href="https://unsplash.com/s/photos/japan?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash
        </a>
      </footer>
    </div>
  );
}
