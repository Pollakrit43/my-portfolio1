import skill100 from "../assets/img/SVG/Asset 5.svg";
import skill90 from "../assets/img/SVG/Asset 6.svg";
import skill80 from "../assets/img/SVG/Asset 4.svg";
import skill70 from "../assets/img/SVG/Asset 7.svg";
import skill60 from "../assets/img/SVG/Asset 8.svg";
import skill50 from "../assets/img/SVG/Asset 9.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import skillBG from "../assets/img/skill-bg.jpg"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I just graduated. I'm not very good yet.But I try to learn something new.<br></br>I'm ready to self improvement.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={skill100} alt="Image" />
                                <h5>Html</h5>
                            </div>
                            <div className="item">
                                <img src={skill80} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={skill80} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={skill80} alt="Image" />
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src={skill70} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={skill60} alt="Image" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={skill80} alt="Image" />
                                <h5>Reactjs</h5>
                            </div>
                            <div className="item">
                                <img src={skill80} alt="Image" />
                                <h5>Nextjs</h5>
                            </div>
                            <div className="item">
                                <img src={skill50} alt="Image" />
                                <h5>Nodejs</h5>
                            </div>
                            <div className="item">
                                <img src={skill50} alt="Image" />
                                <h5>MySql</h5>
                            </div>
                            <div className="item">
                                <img src={skill50} alt="Image" />
                                <h5>NoSql</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={skillBG} alt="Image" />
    </section>
  )
}
