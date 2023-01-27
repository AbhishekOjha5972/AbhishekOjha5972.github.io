import Typescript from "../project_images/Components_for_Images/Typescript";
import SkillsMan from "../project_images/Components_for_Images/SkillsMan";
import ExpressJS from "../project_images/Components_for_Images/ExpressJS";
import Firebase from "../project_images/Components_for_Images/Firebase";
import NextJS from "../project_images/Components_for_Images/NextJS";
import Chakra from "../project_images/Components_for_Images/Chakra";
import Redux from "../project_images/Components_for_Images/Redux";
import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import junctionPlus from "..//project_images/junctionplus.png";
import profile_image from "../project_images/profile.jpg";
import rentomojo from "..//project_images/rentomojo.png";
import boy_svg1 from "../project_images/boy_image1.svg";
import boy_svg from "../project_images/boy_image.svg";
import foodium from "../project_images/foodium.png";
import skillsData from "../Data/skillsData";
import {AiFillGithub} from "react-icons/ai"
import Navbar from "../Components/Navbar";
import {FaOctopusDeploy} from "react-icons/fa"
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

import javascript_image from "../project_images/png_images/javascript.png";
import chakra from "../project_images/png_images/chakra.png";
import html from "../project_images/png_images/html.png";
import css from "../project_images/png_images/css.png";
import firebase from "../project_images/png_images/firebase.png";
import jquery from "../project_images/png_images/jquery.png";
import json from "../project_images/png_images/json.png";
import react from "../project_images/png_images/react.png";
import vercel from "../project_images/png_images/triangle.png";

let projectsData = [
  {
    title: "Junction Plus",
    image: junctionPlus,
    github: "https://github.com/AbhishekOjha5972/childlike-temper-5127",
    deployment: "https://junction-plus.vercel.app/",
    description:
      "This project is completely based on real life use case in which you can see the live updates of movies and tv shows which are currently running in theatres and on tv's",
    skills: [
      [html, "HTML"],
      [css, "Css"],
      [javascript_image, "JavaScript"],
      [react, "React"],
      [json, "Json"],
      [firebase, "Firebase"],
      [vercel, "Vercel"],
      [chakra, "Chakra"],
    ],
  },
  {
    title: "Rentomojo",
    image: rentomojo,
    github: "https://github.com/AbhishekOjha5972/-hard-birds-9261",
    deployment: "https://rentomojoapp.netlify.app/",
    description:
      "In this app you can buy many type of furniture and electronics",
    skills: [
      [html, "HTML"],
      [css, "Css"],
      [javascript_image, "JavaScript"],
      [jquery, "JQuery"],
    ],
  },
  {
    title: "Foodium",
    image: foodium,
    github: "https://github.com/AbhishekOjha5972/zonked-hall-6274",
    deployment: "https://foodium-project.netlify.app/",
    description:
      "This app is made for ordering healthy food. In this app you can order many types of food according to your diet",
    skills: [
      [html, "HTML"],
      [css, "Css"],
      [javascript_image, "JavaScript"],
      [jquery, "JQuery"],
      [json, "JSon"],
    ],
  },
];

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  console.log("projectsData:", projectsData);
  return (
    <>
      <Navbar />
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
            <Box data-aos="zoom-out-right" data-aos-duration="1000">
              {skillsData.map((ele) => {
                return (
                  <div key={ele.id}>
                    <div>
                      <img src={ele.svg} alt={ele.skill_name} />
                    </div>
                    <Text>{ele.skill_name}</Text>
                  </div>
                );
              })}
            </Box>
            <Box data-aos="zoom-out-left" data-aos-duration="1000">
              <SkillsMan />
            </Box>
          </Box>
        </Box>

        {/* Project Section  */}
        <Box className="home-projects_container_css" id="projects">
          <Box>
            <Text>Project</Text>
            <Text>s</Text>
          </Box>
          <Box>
            {projectsData.map((ele) => {
              return (
                <Box>
                  <Box>
                    <Box style={{ background: `url(${ele.image})` }}>
                      {/* <Image src={ele.image}/> */}
                    </Box>
                    <Text>{ele.title}</Text>
                    <Flex>
                      <Link href={ele.github} target="_blank">
                       <AiFillGithub/>GitHub
                      </Link>
                      <Link href={ele.deployment} target="_blank">
                       <FaOctopusDeploy/> App
                      </Link>
                    </Flex>
                    <Box data-aos="fade-down">
                      <Box>
                        <Button>Tech Stack</Button>
                        <Box>
                          {ele.skills.map((item) => {
                            return (
                              <Box>
                                <Image w="20px" h="20px" src={item[0]} />
                                <Text>{item[1]}</Text>
                              </Box>
                            );
                          })}
                        </Box>
                      </Box>
                      <Box>
                        <Button>Description</Button>
                        <Box>{ele.description}</Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
