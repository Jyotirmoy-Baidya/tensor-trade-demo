import { Box, Image, Text, Stack, Button, Flex, Icon, IconButton, Popover, PopoverTrigger, PopoverContent, PopoverBody } from '@chakra-ui/react';
import { useState } from 'react';
import { RiCopperDiamondFill, RiVipDiamondFill } from "react-icons/ri";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import PopOverBlock from './PopOverBlock';
const NFTBox = ({ openPopUp }) => {
    const [isHovered, setIsHovered] = useState(false);


    return (
        <Flex p={1} width={'auto'}>
            <Box
                bg="gray.900"
                borderRadius="md"
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
                    <PopOverBlock div={
                        <Text cursor={'pointer'} zIndex={5} fontFamily={'mono'} color="white" fontWeight="bold">
                            26.12
                        </Text>
                    }
                        popoverBlock={
                            <Stack spacing={0} alignItems={'start'} cursor={'pointer'}>
                                <Text>Base: 28.08</Text>
                                <Text>Royalties: 0.00 [0.00%]</Text>
                                <Text>Taker Fee: 0.00 [0.00%]</Text>
                                <Text>Full [incl. fees/royalties]: 28.08</Text>
                            </Stack>
                        }
                    />

                    <Flex>
                        <PopOverBlock
                            div={
                                <Text cursor={'pointer'} zIndex={5} fontSize={'13px'} fontFamily={'mono'} color="gray.400">
                                    25.28
                                </Text>
                            }
                            popoverBlock={
                                <>Last sale at: 8/8/24, 10:34:10 PM</>
                            }
                        />


                        <Flex
                            borderRadius="md"
                            position='absolute'
                            height={'23px'}
                            minWidth={'30px'}
                            zIndex={5}
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
                    </Flex>
                </Stack>
                <Flex
                    borderRadius="full"
                    position='absolute'
                    height={'23px'}
                    minWidth={'23px'}
                    zIndex={5}
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
                                <Button width={10} height={5} bg="teal.400" fontFamily={'mono'} _hover={{ bg: 'teal.200' }} onClick={() => openPopUp()}>
                                    BUY
                                </Button>
                                <Button width={10} height={5} bg='yellow.400' fontFamily={'mono'} _hover={{ bg: 'yellow.200' }} onClick={() => openPopUp()}>
                                    BID
                                </Button>
                            </Box>

                        </Flex>
                    )
                }
            </Box>
        </Flex>
    );
}


export default NFTBox;