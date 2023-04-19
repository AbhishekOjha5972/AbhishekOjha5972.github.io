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
import rock_paper_scissors from "../project_images/rock_paper_scissors.png"
import junctionPlus from "..//project_images/junctionplus.png";
import pabloParking from "../project_images/pablo_parking.png"
import profile_image from "../project_images/profile.jpg";
import rentomojo from "..//project_images/rentomojo.png";
import boy_svg1 from "../project_images/boy_image1.svg";
import rentish from "../project_images/rentish.png";
import kanban from "../project_images/kanban.png"
import foodium from "../project_images/foodium.png";
import { FaOctopusDeploy } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import skillsData from "../Data/skillsData";
import Navbar from "../Components/Navbar";
import { useEffect, useRef } from "react";

import ContectMe from "../project_images/Components_for_Images/ContectMe";
import { useForm, ValidationError } from "@formspree/react";
import { SiHandshakeProtocol } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import GitHubCalendar from "react-github-calendar";
import { AiFillMail } from "react-icons/ai";
import { Tooltip } from '@chakra-ui/react'
import ReactTooltip from "react-tooltip";
import "aos/dist/aos.css";
import Aos from "aos";

import javascript_image from "../project_images/png_images/javascript.png";
import firebase from "../project_images/png_images/firebase.png";
import vercel from "../project_images/png_images/triangle.png";
import jquery from "../project_images/png_images/jquery.png";
import chakra from "../project_images/png_images/chakra.png";
import react from "../project_images/png_images/react.png";
import html from "../project_images/png_images/html.png";
import json from "../project_images/png_images/json.png";
import css from "../project_images/png_images/css.png";
import mongoDb from "../project_images/png_images/mongoDB.png";
import redux from "../project_images/png_images/redux.png";
import nodeJS from "../project_images/png_images/nodejs.png";
import expressJS from "../project_images/png_images/express.png";
import socketIO from "../project_images/png_images/socket.png";
import netlify from "../project_images/png_images/netlify.png"
import profile_pic  from "../project_images/profile_pic.jpg"

//? Tools imports
import VSCode from "../project_images/visual_studio_code.png";
import Sandbox from "../project_images/code_sandbox.png";
import CodePen from "../project_images/codepen.png";
import GitHub from "../project_images/github.png";
import Git from "../project_images/git.png";



let projectsData = [
  {
    title: "Junction Plus",
    image: junctionPlus,
    github: "https://github.com/AbhishekOjha5972/childlike-temper-5127",
    deployment: "https://junction-plus-abhishekojha5972.vercel.app/",
    description:
      "This project is completely based on real life use case in which you can see the live updates of movies and tv shows which are currently running in theatres and on tv's.",
    type: "OTT WEB APP",
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
    title: "Legacy Rock Paper Scissors",
    image: rock_paper_scissors,
    github: "https://github.com/AbhishekOjha5972/legacy-rock-paper-scissors",
    deployment: "https://legacy-rock-paper-scissors.netlify.app/",
    description:
      "A multiplayer rock paper scissors game is an online game where multiple players compete against each other by choosing rock, paper, or scissors. The game follows the traditional rules of rock paper scissors, and may include features such as leaderboards.",
    type: "MULTIPLAYER GAME",
    skills: [
      [socketIO, "Socket.io"],
      [react, "React"],
      [nodeJS, "Node.js"],
      [javascript_image, "JavaScript"],
      [netlify, "Netlify"],
      [html, "HTML"],
      [css, "Css"],
      [chakra, "Chakra"],
    ],
  },
  {
    title: "Kanban",
    image: kanban,
    github: "https://github.com/AbhishekOjha5972/kanban",
    deployment: "https://kanbanvisualizer.netlify.app/",
    description:
      "A Kanban board is a visual tool used to manage and track work in progress (WIP) in a project or process.",
    type: "WORK FLOW MANAGER",
    skills: [
      [react, "React"],
      [nodeJS, "Node.js"],
      [mongoDb, "MongoDB"],
      [redux, "Redux"],
      [javascript_image, "JavaScript"],
      [netlify, "Netlify"],
      [expressJS, "Express.js"],
      [html, "HTML"],
      [css, "Css"],
      [chakra, "Chakra"],
    ],
  },
  {
    title: "Rentish",
    image: rentish,
    github: "https://github.com/AbhishekOjha5972/rentish",
    deployment: "https://playful-kashata-5541e9.netlify.app/",
    description:
      "Rentish is India's largest marketplace for cars on rent. From short road trips to quick in-city drives for groceries, supply pick-up, food runs, we have the cheapest car rental options for all your needs! A hatchback for daily commute, a sedan for short trips, SUV for hills or a luxury car for a surprise.",
    type: "CAR RENTAL",
    skills: [
      [react, "React"],
      [nodeJS, "Node.js"],
      [mongoDb, "MongoDB"],
      [expressJS, "Express.js"],
      [redux, "Redux"],
      [javascript_image, "JavaScript"],
      [netlify, "Netlify"],
      [html, "HTML"],
      [css, "Css"],
      [chakra, "Chakra"],
    ],
  },
  {
    title: "Pablo Parking",
    image: pabloParking,
    github: "https://github.com/Vishwa9011/PabloParking",
    deployment: "https://pabloparking.netlify.app/",
    description:
      "This project bassed on hevicle parking system created based on LLD (Low Level Designing) concept. Here you can book a slot to park vehicle",
    type: "PARKING WEB APP",
    skills: [
      [html, "HTML"],
      [css, "Css"],
      [javascript_image, "JavaScript"]
    ],
  },
  {
    title: "Foodium",
    image: foodium,
    github: "https://github.com/AbhishekOjha5972/zonked-hall-6274",
    deployment: "https://foodium-project.netlify.app/",
    description:
      "Foodium is a meal delivery service that offers an array of chef-cooked, ready-to-eat meals with a special focus on healthy, balanced eating. The service's menu consists of a broad range of single-serve dishes, including low-carb, high-protein options to fit gluten-free, dairy-free, keto, and paleo diets",
    type: "FOOD SERVICE",
    skills: [
      [html, "HTML"],
      [css, "Css"],
      [javascript_image, "JavaScript"],
      [jquery, "JQuery"],
      [json, "JSon"],
    ],
  },
  {
    title: "Rentomojo",
    image: rentomojo,
    github: "https://github.com/AbhishekOjha5972/-hard-birds-9261",
    deployment: "https://rentomojoapp.netlify.app/",
    description:
      "Rentomojo is used to provide rental services which contain electronics and furniture items, And it also provide some packeges which contain complete house appliances",
    type: "RENTAL SERVICE",
    skills: [
      [html, "HTML"],
      [css, "Css"],
      [javascript_image, "JavaScript"],
      [jquery, "JQuery"],
    ],
  }
];

const tools = [
  { title: "Github", image_url: GitHub },
  { title: "VS Code", image_url: VSCode },
  { title: "Git", image_url: Git },
  { title: "Sandbox", image_url: Sandbox },
  { title: "CodePen", image_url: CodePen },
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
              <Box>
                <Text>
                  Nothing ever becomes real 'til it is experienced.― John Keats
                </Text>
              </Box>
              <Box>
                <Link
                  href="https://drive.google.com/u/0/uc?id=1zz2eOWRBcKxcl-jF0ZYMlvfUlBw9cxkF&export=download"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1zz2eOWRBcKxcl-jF0ZYMlvfUlBw9cxkF/view?usp=share_link"
                    );
                  }}
                >
                  Resume
                </Link>
              </Box>
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
                {/* A self-taught passionate Full Stack web developer including with
                1300+ hours of coding experience, who cares about the code and
                the people, A quick learner who can absorb new ideas and can
                communicate clearly and effectively. Capable of writing
                production- ready code using React.js, Redux.js, and CSS on the
                Front-end, and Node.js and Express.js on the Backend to build
                single-page applications. */}
                As a Full Stack Developer, I have 1200+ hours of coding experience and have solved over 700 DSA questions. My front-end development skills include React, Next.js, Redux, Chakra UI, JavaScript, and TypeScript. On the back-end, I am proficient in Node.js, Express.js, and WebSockets. I have experience working with databases such as MongoDB and Firebase. With my expertise in these technologies, I am capable of designing and developing complex web applications from start to finish
              </Text>
            </Box>
            <Box data-aos="zoom-out-left" data-aos-duration="1000">
              <Box>
                {/* <Image src={profile_image} /> */}
                <Image src={profile_pic} />
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

        <Box className="home-tools_container_css">
          <Box>
            <Text>Platforms</Text>
            <Text>&</Text>
            <Text>Tools</Text>
          </Box>
          <Box className="home-tools_child_container_css">
            {tools.map((ele) => {
              console.log(ele.title)
              return (
                <Box>
                  <Box>
                    <Image src={ele.image_url} />
                  </Box>
                  <Text>{ele.title}</Text>
                </Box>
              );
            })}
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
                    <Box>
                      <Text>{ele.title}</Text>
                      <Text>{ele.type}</Text>
                    </Box>
                    <Flex>
                      <Link href={ele.github} target="_blank">
                        <AiFillGithub />
                        GitHub
                      </Link>
                      <Link href={ele.deployment} target="_blank">
                        <FaOctopusDeploy /> Live Demo
                      </Link>
                    </Flex>
                    <Box data-aos="fade-down">
                      <Box>
                        <Button>Tech Stack</Button>
                        <Box>
                          {ele.skills.map((item, ind) => {
                            return (
                              <Box key={ind} >
                                <Image w="20px" h="20px" src={item[0]} />
                                <Text>{item[1]}</Text>
                              </Box>
                            );
                          })}
                        </Box>
                      </Box>
                      <Box>
                        <Button>Description</Button>
                        <Box fontSize="18px">
                          <Tooltip borderRadius="5px" label="For read the whole description please SCROLL UP.">{ele.description}</Tooltip>
                        </Box>
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
          <Box className="home-github_child_two">
            <Box data-aos="fade-right">
              <Image
                align="center"
                src="https://github-readme-streak-stats.herokuapp.com?user=AbhishekOjha5972&theme=radical&hide_border=true"
              />
            </Box>
            <Box data-aos="zoom-out">
              <Image
                align="center"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=AbhishekOjha5972&layout=compact&theme=radical&hide_border=true"
              />
            </Box>
            <Box data-aos="fade-left">
              <Image
                align="center"
                src="https://github-readme-stats.vercel.app/api?username=AbhishekOjha5972&theme=radical&show_icons=true&hide_border=true&bg_color=#674d89"
              />
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
                  href="https://www.linkedin.com/in/abhishek-ojha-03794b1aa/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin" aria-hidden="true"></i>
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
