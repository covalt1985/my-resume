import React, { Component } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Card } from 'react-bootstrap';

class ContactText extends Component {
  render() {
    return (
      <span className="contact">
        {/* <span>
          <FaPhoneAlt /> <span className="contactMethod">510 951 570</span>
        </span> */}
        <span>
          <MdEmail />
          <span className="contactMethod">
            <Card.Link
              className="contactLink"
              href="mailto:tomaszkowalik85@gmail.com">
              tomaszkowalik85@gmail.com
            </Card.Link>
          </span>
        </span>
        <span>
          <FaGithub />
          <span className="contactMethod">
            <Card.Link
              className="contactLink"
              href="https://github.com/covalt1985/"
              target="blank">
              GitHub
            </Card.Link>
          </span>
        </span>
        <span>
          <FaLinkedin />
          <span className="contactMethod">
            <Card.Link
              className="contactLink"
              href="https://www.linkedin.com/in/tomasz-kowalik-2b8a84210/"
              target="blank">
              LinkedIn
            </Card.Link>
          </span>
        </span>
      </span>
    );
  }
}

export default ContactText;
