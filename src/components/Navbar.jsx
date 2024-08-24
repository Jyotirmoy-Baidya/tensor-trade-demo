import { ChevronDownIcon, Search2Icon, StarIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Flex, Image, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from '@chakra-ui/react';
import { color } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@chakra-ui/react';
import { BiCategoryAlt } from 'react-icons/bi'

const Navbar = () => {
    return (
        <Flex
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
                    <Button color='gray.300' p='0px' fontSize={'sm'} bg="black" fontWeight="semibold" cursor={'pointer'} _hover={{
                        color: 'cyan.200',
                        textShadow: "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)"
                    }}>
                        <Link href="/collections">
                            COLLECTIONS
                        </Link>
                    </Button>
                </Flex>

                {/* Trade */}
                <Flex align='center' ml='20px'>
                    <Button color='cyan.200' p='0px' fontSize={'sm'} bg="black" fontWeight="semibold" cursor={'pointer'} textShadow="0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7)"
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

                {/* price lock  */}
                <Flex align='center'>
                    <Button color='gray.200' ml='20px' p='0px' fontSize={'sm'} bg="black" fontWeight="semibold" cursor={'pointer'} _hover={{
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

                {/* Rewards  */}
                <Flex align='center'>
                    <Button color='rgb(255, 138, 173)' ml='20px' p='0px' fontSize={'sm'} bg="black" fontWeight="semibold" cursor={'pointer'}
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
                <ChevronDownIcon
                    w={4}
                    h={4}
                    ml={3}
                />
            </Flex>
        </Flex>
    );
}

export default Navbar;
