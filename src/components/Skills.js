import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import skillBG from "../assets/img/skill-bg.jpg"
import { BOOTSTRAP, CSS, HTML, NEXT, REACT, TAILWIND, dart, firebase, flutter, logoJavascript, mongodb, mysql, nodejs2 } from "../assets/img/SVG";

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
                                <img src={HTML} alt="Image" />
                                <h5>Html</h5>
                            </div>
                            <div className="item">
                                <img src={CSS} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={logoJavascript} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={BOOTSTRAP} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={TAILWIND} alt="Image" />
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src={REACT} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={NEXT} alt="Image" />
                                <h5>Next</h5>
                            </div>

                            <div className="item">
                                <img src={nodejs2} alt="Image" />
                                <h5>Nodejs</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image" />
                                <h5>Mysql</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="Image" />
                                <h5>Mongodb</h5>
                            </div>
                            <div className="item">
                                <img src={firebase} alt="Image" />
                                <h5>Firebase</h5>
                            </div>
                            <div className="item">
                                <img src={dart} alt="Image" />
                                <h5>Dart</h5>
                            </div>
                            <div className="item">
                                <img src={flutter} alt="Image" />
                                <h5>Flutter</h5>
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
