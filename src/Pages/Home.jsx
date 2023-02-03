import Typescript from "../project_images/Components_for_Images/Typescript";
import SkillsMan from "../project_images/Components_for_Images/SkillsMan";
import ExpressJS from "../project_images/Components_for_Images/ExpressJS";
import Firebase from "../project_images/Components_for_Images/Firebase";
import NextJS from "../project_images/Components_for_Images/NextJS";
import Chakra from "../project_images/Components_for_Images/Chakra";
import Redux from "../project_images/Components_for_Images/Redux";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Link,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import junctionPlus from "..//project_images/junctionplus.png";
import profile_image from "../project_images/profile.jpg";
import rentomojo from "..//project_images/rentomojo.png";
import boy_svg1 from "../project_images/boy_image1.svg";
import boy_svg from "../project_images/boy_image.svg";
import foodium from "../project_images/foodium.png";
import skillsData from "../Data/skillsData";
import { AiFillGithub } from "react-icons/ai";
import Navbar from "../Components/Navbar";
import { FaOctopusDeploy } from "react-icons/fa";
import { useEffect, useRef } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useForm, ValidationError } from "@formspree/react";
import ContectMe from "../project_images/Components_for_Images/ContectMe";
import { SiHandshakeProtocol } from "react-icons/si";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

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
  const [state, handleSubmit] = useForm("mnqyjvay");
  const emailInput = useRef(null);
  const nameInput = useRef(null);
  const messageInput = useRef(null);
  const toast = useToast();

  useEffect(() => {
    Aos.init();
  }, []);

  const handleMessage = () => {
    console.log(emailInput.current.value);
    if (
      emailInput.current.value == "" &&
      nameInput.current.value == "" &&
      messageInput.current.value == ""
    ) {
      toast({
        title: "Account created.",
        description: "Please fill all the fields!.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
  };

  if (state.succeeded) {
    emailInput.current.value = "";
    nameInput.current.value = "";
    messageInput.current.value = "";
    toast({
      title: "Account created.",
      description: "The mail has been sent.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  }

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
            {projectsData.map((ele, i) => {
              return (
                <Box key={i}>
                  <Box>
                    <Box style={{ background: `url(${ele.image})` }}>
                      {/* <Image src={ele.image}/> */}
                    </Box>
                    <Text>{ele.title}</Text>
                    <Flex>
                      <Link href={ele.github} target="_blank">
                        <AiFillGithub />
                        GitHub
                      </Link>
                      <Link href={ele.deployment} target="_blank">
                        <FaOctopusDeploy /> App
                      </Link>
                    </Flex>
                    <Box data-aos="fade-down">
                      <Box>
                        <Button>Tech Stack</Button>
                        <Box>
                          {ele.skills.map((item, ind) => {
                            return (
                              <Box key={ind}>
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

        {/* Github section  */}
        <Box color="white" fill="yellow" className="home-github_container_css">
          <Box>
            <Text>GitHub</Text>
            <Text>Updates</Text>
          </Box>
          <Box className="home-github_child">
            <GitHubCalendar
              username="AbhishekOjha5972"
              showWeekdayLabels="true"
              labels="Labels"
              children={<ReactTooltip html />}
            />
          </Box>
          <Box>
            <Box>
            <Image align="center" src="https://camo.githubusercontent.com/4b3757859cc9c8bd443665c742c3307c289739e2704d8bf97d7996614a30be57/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d73656a616c373130267468656d653d736561" alt="AbhishekOjha5972" data-canonical-src="https://github-readme-streak-stats.herokuapp.com/?user=AbhishekOjha5972&amp;theme=sea" max-width="100%" />
            </Box>
          </Box>
        </Box>

        {/* Contect Me Section  */}
        <Box className="home-contect_me_container_css">
          <Box id="ContactMe" gap="10px">
            <Text>Contact</Text>
            <Text>Me</Text>
          </Box>
          <Box>
            <Box>
              <ContectMe />
            </Box>
            <Box>
              <Box>
                <Text color="rgb(206, 212, 226)">Get in </Text>
                <Text color="rgb(103, 77, 137)"> Touch</Text>
              </Box>
              <form onSubmit={handleSubmit}>
                <Box>
                  <Input
                    name="name"
                    type="name"
                    placeholder=" "
                    ref={nameInput}
                    _focus={{ borderColor: "rgb(206, 212, 226)" }}
                  />
                  <span>Your Name</span>
                </Box>
                <Box>
                  <Input
                    name="email"
                    type="email"
                    placeholder=" "
                    ref={emailInput}
                    _focus={{ borderColor: "rgb(206, 212, 226)" }}
                  />
                  <span>Email Address</span>
                </Box>
                <Box>
                  <Textarea
                    color="white"
                    name="message"
                    placeholder=" "
                    ref={messageInput}
                    _focus={{ borderColor: "rgb(206, 212, 226)" }}
                  />
                  <span>Type your Message</span>
                </Box>
                <Button
                  width="100%"
                  color="rgb(103, 77, 137)"
                  bg="rgb(206, 212, 226)"
                  fontWeight="600"
                  fontSize="18px"
                  type="submit"
                  disabled={state.submitting}
                  onClick={handleMessage}
                >
                  Send
                </Button>
              </form>
            </Box>
          </Box>
        </Box>

        {/* Footer And Connection */}
        <Box className="home-footer">
          <Box>
            {/* <Text color="rgb(206, 212, 226)">Via</Text> */}
            <Text color="rgb(103, 77, 137)">
              {" "}
              <SiHandshakeProtocol />
            </Text>
          </Box>
          <Box>
            <Link href="https://mail.google.com/mail/u/0/#inbox?compose=new">
              <i>
                <AiFillMail />
              </i>
              <Text>aojha7408@gmail.com</Text>
            </Link>
            <Link href="tel:6261036892">
              <i>
                <BsFillTelephoneFill />
              </i>
              <Text>+916261036892</Text>
            </Link>

            <Link>
              <Text></Text>
            </Link>
          </Box>
          <Box>
            <ul>
              <li>
                <a href="https://github.com/AbhishekOjha5972" target="_blank">
                  <i class="fab fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/aojha7408" target="_blank">
                  <i class="fab fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://myaccount.google.com/u/1/profile?pageId=none"
                  target="_blank"
                >
                  <i class="fab fa-google-plus-g" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/abhishek-ojha-03794b1aa/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </Box>
        </Box>

        {/* Go to the top  */}
        <Link className="home-goto_top" data-aos="fade-left" href="#home">
          <div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span>
            <img src="https://media.tenor.com/24-42ZZr3AcAAAAi/emojis-emoji.gif" />
          </span>
        </Link>
      </Box>
    </>
  );
};

export default Home;
