import { Button, Flex, IconButton } from '@chakra-ui/react';
import React from 'react'
import { FiMenu, FiShoppingCart, FiTrendingUp, FiHeart, FiActivity, FiMessageCircle } from 'react-icons/fi';
const items = [<FiMenu />, <FiShoppingCart />, <FiTrendingUp />, <FiHeart />, <FiActivity />, <FiMessageCircle />];


const MobileFooterNav = ({ setCollection, mobileSelect, setMobileSelect }) => {
    return (
        <Flex display={{ base: 'flex', lg: 'none' }} width='100vw'>
            {
                items.map((ele, i) => (
                    <IconButton flexGrow={1} key={i} borderRadius={0} color={mobileSelect == i ? 'cyan.200' : 'gray.300'} textShadow={`${mobileSelect == i ? "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)" : ''}`}
                        px={3} py={'2px'} fontSize={'sm'} bg="black" fontWeight="bold" letterSpacing={1} cursor={'pointer'} borderColor={'gray.200'} borderBottom={`${mobileSelect == i ? '4px' : '0'}`} onClick={() => {
                            setMobileSelect(i);
                            if (i == 0) {
                                setCollection(true);
                            }
                            else {
                                setCollection(false);
                            }
                        }} _active={{ bg: 'tranparent' }} _hover={{
                            color: 'cyan.200',
                            textShadow: "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)"
                        }}>
                        {ele}
                    </IconButton>
                ))
            }
        </Flex>
    )
}

export default MobileFooterNav