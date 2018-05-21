import React from 'react';

const MenuItem = (props) => {
  return(
    <a href="javascript:void(0)" className="menu-item">{props.linkName}</a>
  )
}

export default MenuItem;
