import { Box, Container, Divider, Image, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import boy_svg from "../project_images/boy_image.svg";
import boy_svg1 from "../project_images/boy_image1.svg";
import profile_image from "../project_images/profile.jpg";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Home = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
      <Navbar />
      <Box className="home_css">
        {/* Top section */}
        <Box id="#home">
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

        <Box className="home-about_me_css">
          <Box id="about_me">
            <Text>About</Text>
            <Text>Me</Text>
          </Box>

          <Box>
            <Box  data-aos="zoom-out-right">
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
            <Box data-aos="zoom-out-left">
              <Box >
              <Image src={profile_image} />
              </Box>
             
              <Text
               data-aos="fade-down"
               data-aos-easing="linear"
               data-aos-duration="1000"
              >Abhishek Ojha</Text>
              
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
