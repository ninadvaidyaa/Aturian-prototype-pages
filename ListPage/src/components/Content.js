import React from 'react';
import ListPage from './ListPage'; // Import ListPage component

const Content = () => {
  return (
    <section>
      <h2>Main Content</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <ListPage /> {/* Render ListPage component */}
    </section>
  );
};

export default Content;
