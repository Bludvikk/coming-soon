"use client";

import { AiOutlineSearch } from "react-icons/ai";
import Container from "./Container";
import LoginModal from "./Login/Login";
import LogoInfo from "./Login/Login";
import Tabs from "./Tabs";

const NavigationBar = () => {
  return (
    <div className="fixed w-full self-stretch bg-white z-10">
      <div className="border-b-[1px]">
        <Container>
          <LogoInfo />
          <Tabs />
        </Container>
      </div>
    </div>
  );
};

export default NavigationBar;
