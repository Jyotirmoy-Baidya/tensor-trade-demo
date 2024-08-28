import { Flex, IconButton, Text, Button, HStack, Icon, InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { FiMenu, FiShoppingCart, FiFilter, FiTrendingUp, FiHeart, FiActivity, FiMessageCircle } from 'react-icons/fi';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'
import { useState } from 'react';
import { VscDebugDisconnect } from 'react-icons/vsc';
import Link from 'next/link';
import { Search2Icon } from '@chakra-ui/icons';
import { IoFunnelOutline } from 'react-icons/io5';
import PopOverBlock from './PopOverBlock';

const options = ['ITEMS', "BIDS", "ORDERS", "PRICE LOCK", "TRAITS", "HOOLERS"]
const BodyNav = ({ select, setSelect, collection, setCollection }) => {
    return (
        <Flex
            // justifyContent="space-between"
            // alignItems="center"
            bg="black"
            color="white"
            padding="0 4px"
            gap={2}
            height={'75px'}
            direction={'column'}
            position={'sticky'}
        >
            <HStack>
                <HStack spacing={1}>
                    <Flex display={{ base: 'none', lg: 'flex' }} >
                        <PopOverBlock
                            div={
                                <IconButton
                                    icon={<FiMenu />}
                                    aria-label="Menu"
                                    borderRadius="md"
                                    bg={`${collection ? 'cyan.200' : 'gray.800'}`}
                                    height={8}
                                    width={8}
                                    color={`${collection ? 'black' : 'white'}`}
                                    _hover={{ bg: 'cyan.200', color: 'black' }}
                                    onClick={() => setCollection(!collection)}
                                />
                            }
                            popoverBlock={
                                <>Collection Stats</>
                            }
                        />
                        <PopOverBlock
                            div={
                                <IconButton
                                    icon={<FiShoppingCart />}
                                    aria-label="Cart"
                                    borderRadius="md"
                                    bg="gray.800"
                                    color={'white'}
                                    height={8}
                                    width={8}
                                    _hover={{ bg: 'cyan.200', color: 'black' }}
                                />
                            }
                            popoverBlock={
                                <>Checkout</>
                            }
                        />
                        <PopOverBlock
                            div={
                                <IconButton
                                    icon={<FiFilter />}
                                    aria-label="Filter"
                                    borderRadius="md"
                                    bg="gray.800"
                                    height={8}
                                    width={8}
                                    color={'white'}
                                    _hover={{ bg: 'cyan.200', color: 'black' }}
                                />
                            }
                            popoverBlock={
                                <>Filter</>
                            }
                        />
                    </Flex>

                    <Flex overflowX={'scroll'} alignItems={'end'}>
                        {
                            options.map((ele, i) => (
                                <Button key={i} borderRadius={0} color={select == i ? 'cyan.200' : 'gray.300'} textShadow={`${select == i ? "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)" : ''}`}
                                    px={3} py={'2px'} fontSize={'sm'} bg="black" fontWeight="bold" letterSpacing={1} cursor={'pointer'} borderColor={'gray.200'} borderBottom={`${select == i ? '4px' : '0'}`} onClick={() => setSelect(i)} _active={{ bg: 'tranparent' }} _hover={{
                                        color: 'cyan.200',
                                        textShadow: "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)"
                                    }}>
                                    <Text fontFamily={'mono'}>
                                        {ele}
                                    </Text>
                                </Button>
                            ))
                        }

                    </Flex>
                    <Button display={{ base: 'none', lg: 'flex' }} ml='3' px='2' py={'1px'} fontSize={'12px'} fontFamily={'mono'} height={6} bg='skyblue' fontWeight='bold' color='black' _hover={{
                        bg: 'cyan.300'
                    }}>
                        COLLECTION BID
                    </Button>
                </HStack>
                <HStack display={{ base: 'none', lg: 'flex' }} ms={'auto'} spacing={1}>
                    <PopOverBlock
                        div={
                            <IconButton
                                icon={<FiTrendingUp />}
                                aria-label="Trending"
                                borderRadius="md"
                                bg="gray.800"
                                height={8}
                                width={8}
                                color={'white'}
                                _hover={{ bg: 'cyan.200', color: 'black' }}
                            />
                        }
                        popoverBlock={
                            <>Show floor price chart</>
                        }
                    />
                    <PopOverBlock
                        div={
                            <IconButton
                                icon={<FiHeart />}
                                aria-label="Favorites"
                                borderRadius="md"
                                bg="gray.800"
                                height={8}
                                width={8}
                                color={'white'}
                                _hover={{ bg: 'cyan.200', color: 'black' }}
                            />
                        }
                        popoverBlock={
                            <>Show rarity price chart</>
                        }
                    />

                    <PopOverBlock
                        div={
                            <IconButton
                                icon={<FiActivity />}
                                aria-label="Activity"
                                borderRadius="md"
                                bg="gray.800"
                                height={8}
                                width={8}
                                color={'white'}
                                _hover={{ bg: 'cyan.200', color: 'black' }}
                            />
                        }
                        popoverBlock={
                            <>Activity & Order Book</>
                        }
                    />
                    <PopOverBlock
                        div={
                            <IconButton
                                icon={<FiMessageCircle />}
                                aria-label="Messages"
                                borderRadius="md"
                                bg="gray.800"
                                height={8}
                                width={8}
                                color={'white'}
                                _hover={{ bg: 'cyan.200', color: 'black' }}
                            />
                        }
                        popoverBlock={
                            <>Trollbox</>
                        }
                    />
                </HStack>
            </HStack>
            <HStack width="40%">
                <InputGroup>
                    <InputLeftElement height={'26px'} pointerEvents="none" color="gray.300" fontSize="1.2em">
                        <Search2Icon
                            h={4}
                            w={4}
                        />
                    </InputLeftElement>
                    <Input
                        height={'26px'}
                        borderColor='#4A5568'
                        // border={'1px'}
                        placeholder="Search NFT by name"
                        fontFamily="mono"
                        borderRadius="8px"
                        fontSize={'15px'}
                        _hover={{
                            borderColor: '#EDF2F7',
                        }}

                    />

                </InputGroup>
            </HStack>
        </Flex >
    );
}

export default BodyNav;
