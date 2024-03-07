import {
  faBehance,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faLocation,
  faStar,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FontIcon = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faFacebook} size="xs" />
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faBehance} />
      <FontAwesomeIcon icon={faDownload} />
      <FontAwesomeIcon icon={faLocation} />
      <FontAwesomeIcon icon={faVoicemail} />
      <FontAwesomeIcon icon={faStar} />
    </div>
  );
};

export default FontIcon;
