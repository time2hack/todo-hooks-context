import React from "react";

export const Header = ({ app }) => (
  <header className="mb-3">
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href={app.url}>
          <img src={app.logo} height="30" alt={app.title} />
        </a>
      </div>
    </nav>
  </header>
);
