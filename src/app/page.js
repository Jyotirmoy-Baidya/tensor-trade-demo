'use client'
import Navbar from "@/components/Navbar";
import { Flex, Text } from "@chakra-ui/react";
import './globals.css'
import Image from "next/image";
import Body from "@/components/Body";

const Home = () => {
  return (
    <Flex bg="black" direction={'column'} height={'100vh'}>
      <Navbar />
      <Body />
    </Flex>
  );
}

export default Home;
