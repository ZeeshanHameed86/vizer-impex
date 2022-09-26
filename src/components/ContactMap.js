import React from "react";

const ContactMap = () => {
  return (
    <div style={{ width: "100%", textAlign: "end" }}>
      <iframe
        title="map"
        width="400"
        height="250"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=32%C2%B029'32%22N%2074%C2%B031'50%22E+(Industrial%20Area)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
};

export default ContactMap;
