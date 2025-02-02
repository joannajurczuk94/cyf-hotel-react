import React from "react";

function Footer() {
  const contact = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  return (
    <div className="footer">
      <p>Contact Us</p>
      <ul>
        {contact.map(item => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Footer;
