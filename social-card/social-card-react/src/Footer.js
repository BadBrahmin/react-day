import React from "react";

function Footer() {
  return (
    <div className="flex between">
      <div className="icons flex between">
        <i class="icon fa fa-basketball-ball" />
        <i class="icon fa fa-behance" />
        <i class="icon fa fa-linkedin" />
        <i class="icon fa fa-instagram" />
        <i class="icon fa fa-vimeo-v" />
      </div>

      <div>
        <p>
          Contact me at: <span>john@doe.com</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
