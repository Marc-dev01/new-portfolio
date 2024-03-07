import React from "react";
import "./main.css";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="section-project">
      <div className="container">
        <div className="content">
          <h2 className="content-title">Projects</h2>
          <div className="content-inner">
            <div className="inner-title">
              <h3>Web Design</h3>
            </div>
            <div className="inner-group">
              <div className="inner-image">
                <Image
                  src={"/images/projects/image1.jpg"}
                  alt="about"
                  width={600}
                  height={600}
                />
              </div>
              <div className="inner-description">
                <h3>CuraVita-Hospital Landing page Design</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam cum labore tenetur facilis rerum consequuntur.
                  Molestias fuga, voluptatum minima laudantium ipsam quam,
                  aliquid quo tempore dolore quas, delectus dolorum? Nulla
                  aperiam quisquam sapiente voluptatum a nesciunt ducimus
                  deleniti nihil facere suscipit. Numquam, eos debitis. Officia
                  vitae numquam quis nostrum repellendus.
                </p>
                <a href="">View Project</a>
              </div>
            </div>
          </div>
          <div className="content-inner">
            <div className="inner-group" id="content-reverse">
              <div className="inner-description">
                <h3>Rental House-Mobile App & Landing Page Design</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam cum labore tenetur facilis rerum consequuntur.
                  Molestias fuga, voluptatum minima laudantium ipsam quam,
                  aliquid quo tempore dolore quas, delectus dolorum? Nulla
                  aperiam quisquam sapiente voluptatum a nesciunt ducimus
                  deleniti nihil facere suscipit. Numquam, eos debitis. Officia
                  vitae numquam quis nostrum repellendus.
                </p>
                <a href="">View Project</a>
              </div>

              <div className="inner-image">
                <div className="inner-title">
                  <h3>Mobile App & Landing Page</h3>
                </div>
                <Image
                  src={"/images/projects/image2.jpg"}
                  alt="about"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
          <div className="content-inner">
            <div className="inner-title">
              <h3>Mobile App Design</h3>
            </div>
            <div className="inner-group">
              <div className="inner-image">
                <Image
                  src={"/images/projects/image3.jpg"}
                  alt="about"
                  width={600}
                  height={600}
                />
              </div>
              <div className="inner-description">
                <h3>Burgerito-Mobile App Design</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam cum labore tenetur facilis rerum consequuntur.
                  Molestias fuga, voluptatum minima laudantium ipsam quam,
                  aliquid quo tempore dolore quas, delectus dolorum? Nulla
                  aperiam quisquam sapiente voluptatum a nesciunt ducimus
                  deleniti nihil facere suscipit. Numquam, eos debitis. Officia
                  vitae numquam quis nostrum repellendus.
                </p>
                <a href="">View Project</a>
              </div>
            </div>
          </div>
          <div className="content-inner">
            <div className="inner-group" id="content-reverse">
              <div className="inner-description">
                <h3>Cinema Now-Mobile App Design</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam cum labore tenetur facilis rerum consequuntur.
                  Molestias fuga, voluptatum minima laudantium ipsam quam,
                  aliquid quo tempore dolore quas, delectus dolorum? Nulla
                  aperiam quisquam sapiente voluptatum a nesciunt ducimus
                  deleniti nihil facere suscipit. Numquam, eos debitis. Officia
                  vitae numquam quis nostrum repellendus.
                </p>
                <a href="">View Project</a>
              </div>

              <div className="inner-image">
                <div className="inner-title">
                  <h3>Mobile App Design</h3>
                </div>
                <Image
                  src={"/images/projects/image4.jpg"}
                  alt="about"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
