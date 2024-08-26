import { Box, Image, Text, Stack, Button, Flex, Icon, IconButton, Popover, PopoverTrigger, PopoverContent, PopoverBody } from '@chakra-ui/react';
import { useState } from 'react';
import { RiCopperDiamondFill, RiVipDiamondFill } from "react-icons/ri";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
export default function NFTBox() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Flex p={1}>
            <Box
                bg="gray.900"
                borderRadius="md"
                overflow="hidden"
                boxShadow="md"
                position="relative"
                transition="transform 0.2s, box-shadow 0.2s"
                _hover={{ boxShadow: 'xl' }}

                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Image
                    src="https://prod-image-cdn.tensor.trade/images/slug=solana_monkey_business/400x400/freeze=false/https%3A%2F%2Farweave.net%2Fy9Ly2GhTBmVzkbyEpr37F507de3DTmp-SNb6dfsqS7Q"
                    alt="NFT Avatar"
                    borderRadius="md"
                    width={'100%'}
                />
                <Stack spacing={'2px'} p={2}>
                    {/* <Popover placement='bottom' trigger="hover">
                        <PopoverTrigger>
                            <Flex>
                                <Text zIndex={20} fontFamily={'mono'} color="white" fontWeight="bold">
                                    26.12
                                </Text>
                            </Flex>
                        </PopoverTrigger>
                        <PopoverContent bg='black'
                            zIndex={30}
                            borderRadius={'md'}
                            filter="drop-shadow(2px 2px 6px rgba(255, 255, 255, 0.6))" width={'fit-content'} border={0}>
                            <PopoverBody fontSize={'sm'} fontWeight={'bold'} color={'white'} fontFamily={'mono'} borderRadius={'inherit'} textAlign={'center'} width={'fit-content'} px={4} py={2}>Collection Stats</PopoverBody>
                        </PopoverContent>
                    </Popover> */}
                    <Text zIndex={10} fontFamily={'mono'} color="white" fontWeight="bold">
                        26.12
                    </Text>
                    <Text zIndex={20} fontSize={'13px'} fontFamily={'mono'} color="gray.400">
                        25.28
                    </Text>
                    <Box
                        bg="gray.700"
                        borderRadius="full"
                        d="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                    </Box>
                </Stack>
                <Flex
                    borderRadius="full"
                    position='absolute'
                    height={'23px'}
                    minWidth={'23px'}
                    zIndex={10}
                    justifyContent={'center'}
                    alignItems={'center'}
                    fontSize={'12px'}
                    top={1}
                    left={1}
                    color={'black'}
                    bg="green.600"
                    _hover={{ bg: 'red.300' }}>
                    <Icon
                        as={RiVipDiamondFill}
                    />
                </Flex>

                <Flex
                    borderRadius="md"
                    position='absolute'
                    height={'23px'}
                    minWidth={'30px'}
                    zIndex={20}
                    fontSize={'12px'}
                    justifyContent={'center'}
                    alignItems={'end'}
                    bottom={1}
                    right={1}
                    color={'white'}
                    border={'1px'}
                    borderColor={'gray.400'}
                    cursor={'pointer'}
                    bg="transparent"
                    _hover={{ bg: 'cyan.200', color: 'black' }}>
                    <Icon
                        as={IoEllipsisHorizontalOutline}
                    />
                </Flex>






                {
                    isHovered && (
                        <Flex position="absolute"
                            top={0}
                            left={0}
                            zIndex={1}
                            height={'100%'}
                            width={'100%'}
                            bg={'#00000062'}
                            borderRadius={'inherit'}>
                            <Box

                                position="absolute"
                                top={'50%'}
                                left={'50%'}
                                transform="translate(-50%, -50%)"


                                display="flex"
                                gap={2}
                            >
                                <Button width={10} height={5} bg="teal.400" fontFamily={'mono'} _hover={{ bg: 'teal.200' }}>
                                    BUY
                                </Button>
                                <Button width={10} height={5} bg='yellow.400' fontFamily={'mono'} _hover={{ bg: 'yellow.200' }}>
                                    BID
                                </Button>
                            </Box>

                        </Flex>
                    )
                }
            </Box >
        </Flex >
    );
}
