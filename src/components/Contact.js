import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

function Contact(props) {
  if (props.status == true) {
    return (
      <div className="Contact">
        <img className="avatar" src={props.avatar} alt={props.name}></img>
        <div>
          <h4 className="name">{props.name}</h4>
          <div className="status">
            <span className="status-online"> </span>
            <span className="status-text" >Online</span>
          </div>

        </div>
      </div>
    );
  } else {
    return (
      <div className="Contact">
        <img className="avatar" src={props.avatar} alt={props.name}></img>
        <div>
          <h4 className="name">{props.name}</h4>
          <div className="status">
            <span className="status-offline"> </span>
            <span className="status-text" >Ofline</span>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,


};

export default Contact;
