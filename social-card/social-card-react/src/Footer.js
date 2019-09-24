import React from "react";

function Footer() {
  return (
    <div className="flex between">
      <div className="icons flex between">
        <i class="icon fas fa-basketball-ball" />
        <i class="icon fab fa-behance" />
        <i class="icon fab fa-linkedin-in" />
        <i class="icon fab fa-instagram" />
        <i class="icon fab fa-vimeo-v" />
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
