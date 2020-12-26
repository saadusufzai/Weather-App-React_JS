import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="inner-footer">
        <div className="footer-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
          nesciunt. Recusandae, impedit aspernatur quod voluptatum minima
          distinctio inventore doloribus tempora nesciunt id! Veniam architecto,
          praesentium dolorum aperiam accusantium facilis distinctio!
        </div>
        <div className="contact">
          <ul className="icons">
            <h3>
              <i class="fa fa-map-marker" aria-hidden="true"></i> Contact Us
            </h3>
            <li>
              <i class="fa fa-user" aria-hidden="true"></i> Saad Aslam
            </li>
            <li>
              <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
              saadusufzai@gmail.com
            </li>
            <li>
              <i class="fa fa-phone" aria-hidden="true"></i> 03326877676
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        Copyright &copy;2020 TechWA Movie App | All Rights are reserved.
      </p>
    </footer>
  );
};

export default Footer;
