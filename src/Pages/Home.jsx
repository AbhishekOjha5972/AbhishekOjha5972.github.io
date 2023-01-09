import { Box, Container, Divider, Image, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import boy_svg from "../project_images/boy_image.svg";
import boy_svg1 from "../project_images/boy_image1.svg";
import profile_image from "../project_images/profile.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
                    <i  class="fa brands fa-html5" aria-hidden="true"></i>
                    <span> - Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i  class="fa brands fa-css3" aria-hidden="true"></i>
                    <span> - Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i  aria-hidden="true">
                      <img  src="https://img.icons8.com/ios/512/javascript-logo.png"/>
                    </i>
                    <span> - Google</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    <span> - Instagram</span>
                  </a>
                </li>
              </ul>
              </Box>

              <Box>
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                      <span> - Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                      <span> - Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-google-plus" aria-hidden="true"></i>
                      <span> - Google</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                      <span> - Instagram</span>
                    </a>
                  </li>
                </ul>
              </Box>


              <Box>
              <ul>
                <li>
                  <a href="#">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                    <span> - Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                    <span> - Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-google-plus" aria-hidden="true"></i>
                    <span> - Google</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    <span> - Instagram</span>
                  </a>
                </li>
              </ul>
              </Box>

            </Box>
            {/* SVG Box  */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
