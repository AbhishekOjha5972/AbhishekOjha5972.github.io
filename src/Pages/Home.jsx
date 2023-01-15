import { Box, Container, Divider, Image, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import boy_svg from "../project_images/boy_image.svg";
import boy_svg1 from "../project_images/boy_image1.svg";
import profile_image from "../project_images/profile.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Firebase from "../project_images/Components_for_Images/Firebase";
import Chakra from "../project_images/Components_for_Images/Chakra";
import ExpressJS from "../project_images/Components_for_Images/ExpressJS";
import Typescript from "../project_images/Components_for_Images/Typescript";
import NextJS from "../project_images/Components_for_Images/NextJS";
import Redux from "../project_images/Components_for_Images/Redux";
import skillsData from "../Data/skillsData";
import SkillsMan from "../project_images/Components_for_Images/SkillsMan";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <div></div>
      <Box className="home_css">
        {/* Top section */}
        <Box id="home">
          {/* Landing page SVG section */}
          <Box>
            <Image src={boy_svg1} />
          </Box>

          <Box>
            <Box>
              <Text>Hey</Text>
              <Text>Welcome</Text>
            </Box>
            <Box>
              <Text>
                Nothing ever becomes real 'til it is experienced.― John Keats
              </Text>
            </Box>
          </Box>

          {/* Landing page naming part */}
        </Box>

        {/* About Me  */}

        <Box className="home-about_me_css" id="about_me">
          <Box>
            <Text>About</Text>
            <Text>Me</Text>
          </Box>

          <Box>
            <Box data-aos="zoom-out-right" data-aos-duration="1000">
              <Text>
                A self-taught passionate Full Stack web developer including with
                1300+ hours of coding experience, who cares about the code and
                the people, A quick learner who can absorb new ideas and can
                communicate clearly and effectively. Capable of writing
                production- ready code using React.js, Redux.js, and CSS on the
                Front-end, and Node.js and Express.js on the Backend to build
                single-page applications.
              </Text>
            </Box>
            <Box data-aos="zoom-out-left" data-aos-duration="1000">
              <Box>
                <Image src={profile_image} />
              </Box>
              <Box
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <Text data-aos="fade-right">Abhishek Ojha</Text>
                <Text data-aos="fade-left">Full Stack Web Developer</Text>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Skills Section */}

        <Box className="home-skills_container_css" id="skills">
          <Box>
            <Text>Skill</Text>
            <Text>s</Text>
          </Box>

          {/* SKILLS SECTION TWO CHILD BOX  */}
          <Box className="home-skills_boxes_css">
            <Box>
              <Box>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa brands fa-html5" aria-hidden="true"></i>
                      <span> - HTML</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa brands fa-css3" aria-hidden="true"></i>
                      <span> - CSS</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-brands fa-square-js"
                        aria-hidden="true"
                      ></i>
                      <span> - JavaScript</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa" aria-hidden="true">
                        <Chakra />
                      </i>
                      <span> - Chakra UI</span>
                    </a>
                  </li>
                </ul>
              </Box>

              <Box>
                <ul>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-brands fa-react"
                        aria-hidden="true"
                      ></i>
                      <span> - React.Js</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-brands fa-node"
                        aria-hidden="true"
                      ></i>
                      <span> - Node.js</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa brands fa-envira" aria-hidden="true"></i>
                      <span> - MongoDB</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa" aria-hidden="true">
                        <Firebase />
                      </i>
                      <span> - Firebase</span>
                    </a>
                  </li>
                </ul>
              </Box>

              <Box>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa" aria-hidden="true">
                        <ExpressJS />
                      </i>
                      <span> - Express.Js</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa " aria-hidden="true">
                        <Typescript />
                      </i>
                      <span> - TypeScript</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa" aria-hidden="true">
                        <NextJS />
                      </i>
                      <span> - Next.Js</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa" aria-hidden="true">
                        <Redux />
                      </i>
                      <span> - Redux</span>
                    </a>
                  </li>
                </ul>
              </Box>
            </Box>
            {/* SVG Box  */}
          </Box>

          <Box className="home-skills_small_screen">
            <Box>
              {skillsData.map((ele) => {
                return (
                  <div key={ele.id}>
                    <div>
                      <img src={ele.svg} alt={ele.skill_name} />
                    </div>
                    <button>{ele.skill_name}</button>
                  </div>
                );
              })}
            </Box>
            <Box>
              <SkillsMan/>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
