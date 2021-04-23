import React from 'react';

const ExternalLink: React.FC<
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'rel' | 'target'>
> = ({ children, ...otherProps }) => {
  return (
    <a {...otherProps} target='__blank' rel='noopener norefferer'>
      {children}
    </a>
  );
};

export default ExternalLink;
