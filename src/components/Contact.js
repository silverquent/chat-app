import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status : this.props.status
    }
  }

  render() {   
      return (
        <div className="Contact">
          <img className="avatar" src={this.props.avatar} alt={this.props.name}></img>
          <div>
            <h4 className="name">{this.props.name}</h4>
            <div className="status" onClick={event => {
              const newStatus = !this.state.status;
              this.setState({status:newStatus})
            }} >
              <span className={this.state.status ? 'status-online' :'status-offline'}> </span>
              <span className="status-text" >{this.state.status ? 'Online' :'Offline'}</span>
            </div>
          </div>
        </div>
      );   
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,


};

export default Contact;
