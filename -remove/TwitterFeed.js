import React from 'react';

const TwitterFeed = ({ twitter }) => (
  <article>
    <a className="twitter-timeline" href={twitter}>
      Tweets by fordnation
    </a>{' '}
    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
  </article>
);

export default TwitterFeed;
