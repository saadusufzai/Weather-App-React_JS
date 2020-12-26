import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section>
        <div className="text">
          <h1>Heading 1</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            reiciendis alias beatae repudiandae natus et molestiae quae,
            expedita recusandae ipsa, esse facilis dolor delectus rerum
            voluptates unde nam mollitia ratione.
          </p>
        </div>
        <div className="text">
          <h1>Heading 2</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            reiciendis alias beatae repudiandae natus et molestiae quae,
            expedita recusandae ipsa, esse facilis dolor delectus rerum
            voluptates unde nam mollitia ratione.
          </p>
        </div>
        <div className="text">
          <h1>Heading 3</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            reiciendis alias beatae repudiandae natus et molestiae quae,
            expedita recusandae ipsa, esse facilis dolor delectus rerum
            voluptates unde nam mollitia ratione.
          </p>
        </div>
      </section>
      <footer>
        <div className="intro">
          Copyrights Movies &copy; 2020 | All rights are reserved
        </div>
        <div className="icons">
          <div className="fb">Facebook</div>
          <div className="fb">Insta</div>
          <div className="fb">Youtube</div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
