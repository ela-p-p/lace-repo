import React from 'react';

const FacebookFeed = ({ facebook }) => (
  <article>
    <div
      className="fb-page"
      data-href={facebook}
      data-tabs="timeline"
      data-small-header="true"
      data-adapt-container-width="true"
      data-hide-cover="true"
      data-show-facepile="false"
    >
      <blockquote cite={facebook} className="fb-xfbml-parse-ignore">
        <a href={facebook}>FordNation</a>
      </blockquote>
    </div>
  </article>
);

export default FacebookFeed;
