import React from 'react';
import { Router, Link } from '@reach/router';
import { css } from 'emotion';
import Home from '../../pages/home';
import Books from '../../pages/books';

const navStyle = css`
  background-color: #247BA0;
  display: flex;
  justify-content: space-around;
  padding: 1.125rem 1.5rem;
`;

const linkStyle = css`
  color: #fffcff;
`;

const mainContentStyle = css`
  padding: 1.125rem 1.5rem;
`;

const App = () => (
  <div>
    <nav className={navStyle}>
      <Link className={linkStyle} to="/">Home</Link>
      <Link className={linkStyle} to="/books">Books</Link>
    </nav>
    <main className={mainContentStyle} role="main">
      <Router>
        <Home path="/" />
        <Books path="/books" />
      </Router>
    </main>
  </div>
);

export default App;
