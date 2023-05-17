import React from 'react';
import {Link} from 'react-router-dom';
import './FeedHead.less';

type TProps = {
  linkText: React.ReactNode;
  linkUrl: string;
  title: React.ReactNode;
};

export const FeedHead = ({linkText, linkUrl, title}: TProps) => (
  <>
    <h1 className="FeedHead__Title">{title}</h1>
    <p>
      <Link to={linkUrl}>{linkText}</Link>
    </p>
  </>
);
