import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Text,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box className="navbar_css">
      <Box>
        <Box>
          <Text fontSize={["20px", "24px", "26px"]}>Abhishek</Text>
          <Image
            src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/512/external-coding-advertising-xnimrodx-lineal-color-xnimrodx-2.png"
            w={["20px", "24px", "26px"]}
            h={["20px", "24px", "26px"]}
          />
        </Box>
        <Box
          display={["none", "none", "flex"]}
          w={["50%", "50%", "76%", "60%"]}
        >
          <Box>
            <Link href="#home">Home</Link>
          </Box>
          <Box>
            <Link href="#about_me">About Me</Link>
          </Box>
          <Box>
            <Link href="#skills">Skills</Link>
          </Box>
          <Box>
            <Link href="#projects">Projects</Link>
          </Box>
          <Box>
            <Link href="#resume">Resume</Link>
          </Box>
          <Box>
            <Link href="#Contact Me">Contact Me</Link>
          </Box>
        </Box>
        <Box display={["block", "block", "none"]} className="navBar_SideBar">
          <Button
            bg="rgb(43,42,42)"
            onClick={() => {
              onOpen();
            }}
          >
            <GiHamburgerMenu />
          </Button>

          <Drawer onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent className="drawer">
              <DrawerCloseButton />

              <DrawerBody>
                <Link href="#" onClick={() => onClose()}>
                  <button>Home</button>
                </Link>
                <Link href="#" onClick={() => onClose()}>
                  <button>About</button>
                </Link>
                <Link href="#" onClick={() => onClose()}>
                  <button>Skills</button>
                </Link>
                <Link href="#" onClick={() => onClose()}>
                  <button>Projects</button>
                </Link>
                <Link href="#" onClick={() => onClose()}>
                  <button>Resume</button>
                </Link>
                <Link href="#" onClick={() => onClose()}>
                  <button>Contact</button>
                </Link>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
