import { ChevronDownIcon, Search2Icon, StarIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Divider, Flex, Image, Input, InputGroup, InputLeftElement, InputRightElement, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Stack, Text } from '@chakra-ui/react';
import { color } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@chakra-ui/react';
import { BiCategoryAlt } from 'react-icons/bi'
import { GiRayGun, GiUnicorn } from "react-icons/gi";
import { CiBank, CiPen } from "react-icons/ci";
import { PiLockKey } from "react-icons/pi";
import { FaPiggyBank } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { RiCalculatorLine } from "react-icons/ri";
import { TbActivityHeartbeat } from "react-icons/tb";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { MdOutlineLeaderboard } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { PiHandshakeLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { VscDebugDisconnect } from "react-icons/vsc";
import { IoMdSettings } from "react-icons/io";

const Navbar = () => {
    return (
        <Flex
            borderBottom={'1px'}
            borderColor={'gray.800'}
            as="nav"
            width="full"
            py={1}
            px={3}
            align="center"
            letterSpacing="wide"
            color="white"

            bg='black'
        >
            <Flex bg="black" color="gray.900" height='40px' alignItems="center">
                <Flex height="32px" width={'32px'}>
                    <Image src="/logo.jpg" margin={'0px'} alt="Logo" />
                </Flex>
                <Flex ml='20px'>
                    <Button color='gray.300' p='0px' fontSize={'sm'} bg="black" fontWeight="bold" letterSpacing={1} cursor={'pointer'} _hover={{
                        color: 'cyan.200',
                        textShadow: "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)"
                    }}>
                        <Link fontFamily={'mono'}
                            href="/collections">
                            COLLECTIONS
                        </Link>
                    </Button>
                </Flex>

                {/* Trade */}
                <Popover trigger="hover" placement="bottom">
                    <PopoverTrigger>
                        <Flex align='center' ml='20px'>
                            <Button color='cyan.200' p='0px' fontSize={'sm'} bg="black" fontWeight="bold" letterSpacing={1} cursor={'pointer'} textShadow="0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)"
                                _hover={{
                                    color: 'cyan.200',
                                    textShadow: "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)"
                                }}>
                                <Link href="/trade/default">
                                    TRADE
                                </Link>
                            </Button>
                            <ChevronDownIcon
                                color="cyan.200"
                                w={4}
                                h={4}
                                ml={2}
                            />
                        </Flex>
                    </PopoverTrigger>
                    <PopoverContent
                        bg='black'
                        border="none"
                        width={'200px'}
                        // boxShadow="1px 1px 10px 2px rgba(255, 255, 255, 0.2)"
                        filter="drop-shadow(2px 2px 6px rgba(255, 255, 255, 0.6))"
                    >
                        <PopoverArrow bg='black' borderTopColor={'black'} borderRightColor={'black'} />
                        <PopoverBody
                            px={5}
                            py={2}
                            height={'84px'}
                            width={'200px'}
                        >
                            <Stack alignItems={'start'} height={'68px'}>
                                <Button height={'32px'}
                                    color='cyan.200'
                                    display={'flex'}
                                    gap={2}
                                    letterSpacing={1}
                                    p='0px'
                                    fontSize={'sm'}
                                    bg="black"
                                    fontWeight="bold"
                                    cursor={'pointer'}
                                    textShadow="0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)"
                                    _hover={{
                                        color: 'cyan.200',
                                        textShadow: "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)"
                                    }}>
                                    <Icon as={GiUnicorn} />
                                    <Link href="/trade/default">
                                        NFT
                                    </Link>
                                </Button>
                                <Button height={'32px'}
                                    display={'flex'}
                                    gap={2}
                                    letterSpacing={1}
                                    justifyContent={'start'}
                                    p='0px'
                                    fontSize={'sm'}
                                    bg="black"
                                    fontWeight="bold"
                                    cursor={'pointer'}
                                    color="gray.200"

                                    _hover={{
                                        color: "#f0b848",
                                        textShadow: "0 0 5px #f0b848, 0 0 10px #f0b848, 0 0 20px #f0b848, 0 0 40px #f0b848, 0 0 80px #f0b848"

                                    }}>
                                    <Icon as={CiPen} />
                                    <Link href="/trade/default">
                                        COLLECTION
                                    </Link>
                                </Button>
                            </Stack>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>



                {/* price lock  */}
                <Popover trigger="hover" placement="bottom">
                    <PopoverTrigger>
                        <Flex align='center'>
                            <Button color='gray.200' ml='20px' p='0px' fontSize={'sm'} bg="black" fontWeight="bold" cursor={'pointer'} _hover={{
                                color: 'cyan.200',
                                textShadow: "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)"
                            }}>
                                <Link href="/lock/purchase">
                                    PRICE LOCK
                                </Link>
                                <ChevronDownIcon
                                    w={4}
                                    h={4}
                                    ml={2}
                                />
                            </Button>
                        </Flex>
                    </PopoverTrigger>
                    <PopoverContent
                        bg='black'
                        border="none"
                        width={'200px'}
                        // boxShadow="1px 1px 10px 2px rgba(255, 255, 255, 0.2)"
                        filter="drop-shadow(2px 2px 6px rgba(255, 255, 255, 0.6))"
                    >
                        <PopoverArrow bg='black' borderTopColor={'black'} borderRightColor={'black'} />
                        <PopoverBody
                            px={5}
                            py={2}
                            width={'200px'}
                        >
                            <Stack alignItems={'start'}>
                                <Button height={'32px'}
                                    color='gray.200'
                                    display={'flex'}
                                    gap={2}
                                    letterSpacing={1}
                                    p='0px'
                                    fontSize={'sm'}
                                    bg="black"
                                    cursor={'pointer'}
                                    _hover={{
                                        color: 'cyan.200',
                                        textShadow: "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)"
                                    }}>
                                    <Icon as={PiLockKey} />
                                    <Link href="/trade/default">
                                        PURCHASE LOCK
                                    </Link>
                                </Button>
                                <Button height={'32px'}
                                    display={'flex'}
                                    gap={2}
                                    letterSpacing={1}
                                    justifyContent={'start'}
                                    p='0px'
                                    fontSize={'sm'}
                                    bg="black"
                                    cursor={'pointer'}
                                    color="gray.200"

                                    _hover={{
                                        color: 'cyan.200',
                                        textShadow: "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)"

                                    }}>
                                    <Icon as={FaPiggyBank} />
                                    <Link href="/trade/default">
                                        FUNDS LOCK
                                    </Link>
                                </Button>
                                <Button height={'32px'}
                                    display={'flex'}
                                    gap={2}
                                    letterSpacing={1}
                                    justifyContent={'start'}
                                    p='0px'
                                    fontSize={'sm'}
                                    bg="black"
                                    cursor={'pointer'}
                                    color="gray.200"

                                    _hover={{
                                        color: 'cyan.200',
                                        textShadow: "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)"

                                    }}>
                                    <Icon as={IoPerson} />
                                    <Link href="/trade/default">
                                        YOUR LOCKS
                                    </Link>
                                </Button>
                                <Button height={'32px'}
                                    display={'flex'}
                                    gap={2}
                                    letterSpacing={1}
                                    justifyContent={'start'}
                                    p='0px'
                                    fontSize={'sm'}
                                    bg="black"
                                    cursor={'pointer'}
                                    color="gray.200"

                                    _hover={{
                                        color: 'cyan.200',
                                        textShadow: "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)"

                                    }}>
                                    <Icon as={RiCalculatorLine} />
                                    <Link href="/trade/default">
                                        CALCULATOR
                                    </Link>
                                </Button>
                                <Button height={'32px'}
                                    display={'flex'}
                                    gap={2}
                                    letterSpacing={1}
                                    justifyContent={'start'}
                                    p='0px'
                                    fontSize={'sm'}
                                    bg="black"
                                    cursor={'pointer'}
                                    color="gray.200"
                                    fontFamily={'mono'}
                                    _hover={{
                                        color: 'cyan.200',
                                        textShadow: "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)"

                                    }}>
                                    <Icon as={TbActivityHeartbeat} />
                                    <Link href="/trade/default">
                                        LOCK FEED
                                    </Link>
                                </Button>
                            </Stack>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>


                {/* Rewards  */}
                <Popover trigger="hover" placement="bottom">
                    <PopoverTrigger>
                        <Flex align='center'>
                            <Button color='rgb(255, 138, 173)' ml='20px' p='0px' fontSize={'sm'} bg="black" fontWeight="bold" cursor={'pointer'}
                                textShadow='rgb(255, 138, 173) 0px 0px 8px'
                                _hover={{
                                    textShadow: 'rgb(255, 138, 173) 0px 0px 8px'
                                }}>
                                <StarIcon
                                    w={3}
                                    h={3}
                                    mr={2}
                                    color='rgb(255, 138, 173)'
                                    filter="drop-shadow(0px 2px 4px rgb(255, 138, 173))"
                                />
                                <Link href="/trade/default" filter="drop-shadow(0px 0px 10px pink) drop-shadow(0px 0px 20px pink)"
                                    textShadow='rgb(255, 138, 173) 0px 0px 8px'
                                    _hover={{
                                        textShadow: 'rgb(255, 138, 173) 0px 0px 8px'
                                    }}>
                                    REWARDS
                                </Link>
                                <ChevronDownIcon
                                    color='rgb(255, 138, 173)'
                                    w={5}
                                    h={5}
                                    ml={2}
                                    filter="drop-shadow(0px 0px 6px pink)"
                                />
                            </Button>
                        </Flex>
                    </PopoverTrigger>
                    <PopoverContent
                        bg='black'
                        border="none"
                        width={'200px'}
                        // boxShadow="1px 1px 10px 2px rgba(255, 255, 255, 0.2)"
                        filter="drop-shadow(2px 2px 6px rgba(255, 255, 255, 0.6))"
                    >
                        <PopoverArrow bg='black' borderTopColor={'black'} borderRightColor={'black'} />
                        <PopoverBody
                            px={5}
                            py={2}
                            width={'200px'}
                        >
                            <Stack alignItems={'start'}>
                                <Button height={'32px'}
                                    color='gray.200'
                                    display={'flex'}
                                    gap={2}
                                    letterSpacing={1}
                                    p='0px'
                                    fontSize={'sm'}
                                    bg="black"
                                    fontWeight="semibold"
                                    cursor={'pointer'}
                                    _hover={{
                                        color: 'cyan.200',
                                        textShadow: "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)"
                                    }}>
                                    <Icon as={HiOutlineLightningBolt} />
                                    <Link href="/trade/default">
                                        TENSORIANS
                                    </Link>
                                </Button>
                                <Button height={'32px'}
                                    display={'flex'}
                                    gap={2}
                                    letterSpacing={1}
                                    justifyContent={'start'}
                                    p='0px'
                                    fontSize={'sm'}
                                    bg="black"
                                    fontWeight="semibold"
                                    cursor={'pointer'}
                                    color="gray.200"

                                    _hover={{
                                        color: 'cyan.200',
                                        textShadow: "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)"

                                    }}>
                                    <Icon as={MdOutlineLeaderboard} />
                                    <Link href="/trade/default">
                                        LEADERBOARD
                                    </Link>
                                </Button>
                                <Button height={'32px'}
                                    display={'flex'}
                                    gap={2}
                                    letterSpacing={1}
                                    justifyContent={'start'}
                                    p='0px'
                                    fontSize={'sm'}
                                    bg="black"
                                    fontWeight="semibold"
                                    cursor={'pointer'}
                                    color="gray.200"

                                    _hover={{
                                        color: 'cyan.200',
                                        textShadow: "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)"

                                    }}>
                                    <Icon as={CiStar} />
                                    <Link href="/trade/default">
                                        EARN POINTS
                                    </Link>
                                </Button>
                                <Button height={'32px'}
                                    display={'flex'}
                                    gap={2}
                                    letterSpacing={1}
                                    justifyContent={'start'}
                                    p='0px'
                                    fontSize={'sm'}
                                    bg="black"
                                    fontWeight="semibold"
                                    cursor={'pointer'}
                                    color="gray.200"

                                    _hover={{
                                        color: 'cyan.200',
                                        textShadow: "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)"

                                    }}>
                                    <Icon as={PiHandshakeLight} />
                                    <Link href="/trade/default">
                                        REFERRALS
                                    </Link>
                                </Button>
                                <Button height={'32px'}
                                    display={'flex'}
                                    gap={2}
                                    letterSpacing={1}
                                    justifyContent={'start'}
                                    p='0px'
                                    fontSize={'sm'}
                                    bg="black"
                                    fontWeight="semibold"
                                    cursor={'pointer'}
                                    color="gray.200"

                                    _hover={{
                                        color: 'cyan.200',
                                        textShadow: "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)"

                                    }}>
                                    <Icon as={CiHeart} />
                                    <Link href="/trade/default">
                                        BIB BACK
                                    </Link>
                                </Button>
                            </Stack>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>


            </Flex>

            {/* Search group  */}
            <Flex ml={3} mr={3} width="100%" height={'32px'} justify="center">
                <Stack width="100%" maxW="600px">
                    <InputGroup _hover={{

                    }}>
                        <InputLeftElement height={'32px'} pointerEvents="none" color="gray.300" fontSize="1.2em">
                            <Search2Icon
                                h={4}
                                w={4}
                            />
                        </InputLeftElement>
                        <Input
                            height={'32px'}
                            borderColor='#4A5568'
                            // border={'1px'}
                            placeholder="Search collection / wallet"
                            fontFamily="mono"
                            borderRadius="8px"
                            _hover={{
                                borderColor: '#EDF2F7',
                            }}

                        />
                        <InputRightElement height={'32px'} pointerEvents="none" color="gray.300" fontSize="1.2em">
                            <Icon as={BiCategoryAlt} color='green.500' />
                        </InputRightElement>
                    </InputGroup>
                </Stack>
            </Flex>

            {/* Connect Wallet button */}
            <Flex height='8' align={'center'}>
                <Button ml='5' pl='3' pr='3' fontSize={'smaller'} height={8} bg='skyblue' fontWeight='bold' color='black' _hover={{
                    bg: 'cyan.300'
                }}>
                    CONNECT WALLET
                </Button>
                <Popover trigger="hover" placement="bottom">
                    <PopoverTrigger>
                        <ChevronDownIcon
                            w={4}
                            h={4}
                            ml={3}
                        />
                    </PopoverTrigger>
                    <PopoverContent
                        bg='black'
                        border="none"
                        width={'200px'}
                        // boxShadow="1px 1px 10px 2px rgba(255, 255, 255, 0.2)"
                        filter="drop-shadow(2px 2px 6px rgba(255, 255, 255, 0.6))"
                    >
                        <PopoverArrow bg='black' borderTopColor={'black'} borderRightColor={'black'} />
                        <PopoverBody
                            px={5}
                            py={2}
                            width={'200px'}
                        >
                            <Stack alignItems={'start'}>
                                <Button height={'32px'}
                                    display={'flex'}
                                    gap={2}
                                    letterSpacing={1}
                                    justifyContent={'start'}
                                    p='0px'
                                    fontSize={'sm'}
                                    bg="black"
                                    fontWeight="semibold"
                                    cursor={'pointer'}
                                    color="gray.200"

                                    _hover={{
                                        color: 'cyan.200',
                                        textShadow: "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)"

                                    }}>
                                    <Icon as={VscDebugDisconnect} />
                                    <Link href="/trade/default">
                                        CONNECT WALLET
                                    </Link>
                                </Button>
                                <Button height={'32px'}
                                    display={'flex'}
                                    gap={2}
                                    letterSpacing={1}
                                    justifyContent={'start'}
                                    p='0px'
                                    fontSize={'sm'}
                                    bg="black"
                                    fontWeight="semibold"
                                    cursor={'pointer'}
                                    color="gray.200"

                                    _hover={{
                                        color: 'cyan.200',
                                        textShadow: "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)"

                                    }}>
                                    <Icon as={IoMdSettings} />
                                    <Link href="/trade/default">
                                        APP SETTINGS
                                    </Link>
                                </Button>

                                <Divider colorScheme={'gray.200'} border={1} />
                                <Box fontSize={'xx-small'}>

                                    <Link href="/trade/default" color={'gray.200'} >
                                        LIST COLLECTION
                                    </Link>
                                </Box>
                            </Stack>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>


            </Flex>
        </Flex >
    );
}

export default Navbar;
