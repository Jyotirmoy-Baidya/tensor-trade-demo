'use client'
import Navbar from "@/components/Navbar";
import { Flex } from "@chakra-ui/react";
import './globals.css'
import Image from "next/image";

export default function Home() {
  return (
    <div bg="black" height='100px'>
      <Navbar />
      <Flex bg='black' direction="column" align="center" justify="center" h="100vh">
        Jyoti
      </Flex>
    </div>
  );
}
