import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Divider, Flex, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Icon } from '@chakra-ui/react';
import { VscDebugDisconnect } from "react-icons/vsc";
import { IoMdSettings } from "react-icons/io";


const ConnectWalletNavItem = () => {
    return (
        <>
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
                        color={'white'}
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
        </>
    )
}

export default ConnectWalletNavItem