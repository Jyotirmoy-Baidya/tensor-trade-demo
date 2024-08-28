import { ChevronDownIcon, Search2Icon, StarIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Divider, Flex, HStack, Image, Input, InputGroup, InputLeftElement, InputRightElement, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Icon } from '@chakra-ui/react';
import { BiCategoryAlt } from 'react-icons/bi'
import { VscDebugDisconnect } from "react-icons/vsc";
import { IoMdSettings } from "react-icons/io";
import NavItems from './NavItems';
import MobileNavDrawer from './MobileNavDrawer';
import ConnectWalletNavItem from './ConnectWalletNavItem';

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
            height={'50px'}
            zIndex={20}
        >
            <Flex bg="black" color="gray.900" height='40px' alignItems="center">
                <Flex height="32px" width={'32px'}>
                    <Image src="/logo.jpg" margin={'0px'} alt="Logo" />
                </Flex>
                <Flex display={{ base: 'none', lg: 'flex' }} height={'100%'}>
                    <NavItems />
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
            <Flex display={{ base: 'none', lg: 'flex' }} height='8' align={'center'}>
                <ConnectWalletNavItem />
            </Flex>

            <Flex display={{ base: 'flex', lg: 'none' }} height={'8'} align={'center'}>
                <MobileNavDrawer />
            </Flex>
        </Flex >
    );
}

export default Navbar;
