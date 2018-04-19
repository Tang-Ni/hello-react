import React from 'react';

const Header = (props) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h2>Home!</h2>
            <h3>{props.homeLink}</h3>
          </div>
        </div>
      </div>
    );
}

export default Header;
