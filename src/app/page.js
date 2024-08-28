'use client'
import Navbar from "@/components/Navbar";
import { Flex, Text } from "@chakra-ui/react";
import './globals.css'
import Image from "next/image";
import Body from "@/components/Body";
import MobileFooterNav from "@/components/MobileFooterNav";
import { useState } from "react";

const Home = () => {

  const [collection, setCollection] = useState(false);
  const [mobileSelect, setMobileSelect] = useState(1);
  return (
    <Flex bg="black" direction={'column'} height={'100vh'}>
      <Navbar />
      <Body collection={collection} setCollection={setCollection} />
      <MobileFooterNav mobileSelect={mobileSelect} setMobileSelect={setMobileSelect} setCollection={setCollection} />
    </Flex>
  );
}

export default Home;
