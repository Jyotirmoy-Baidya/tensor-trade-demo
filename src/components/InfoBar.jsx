import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Image, IconButton, Link, HStack, Stack, Icon } from "@chakra-ui/react";
import { CiStar } from "react-icons/ci";
import { FaGlobe, FaDiscord, FaTwitter, FaSync } from "react-icons/fa";

const InfoBar = () => {
    return (
        <Flex
            borderBottom={'1px'}
            borderColor={'gray.800'}
            overflowX="scroll"
            height="80px"
            bg='black'
            gap={1}
            color="white"
            alignItems={'center'}
            fontFamily={'mono'}
            className="hide-scrollbar"
            whiteSpace="nowrap"
        >
            <Flex
                alignItems="center"
                minWidth={'14rem'}
                flexGrow={1}
                // height="100%"
                px={4}
                className="d">
                <Image
                    src="https://prod-image-cdn.tensor.trade/images/slug=solana_monkey_business/400x400/freeze=false/https%3A%2F%2Farweave.net%2Fy9Ly2GhTBmVzkbyEpr37F507de3DTmp-SNb6dfsqS7Q"
                    alt="NFT Avatar"
                    boxSize="50px"
                    borderRadius="full"
                    mr={4}
                />
                <Stack spacing={0}>
                    <Flex alignItems={'center'}>
                        <Icon as={CiStar} h={5} mr={2} />
                        <Text mb={1} fontWeight="bold" fontSize="lg" mr={2} whiteSpace="nowrap">
                            SMB GEN2
                            <Box as="span" fontSize="sm" ml={1} mr={4}>👑</Box>
                        </Text>
                    </Flex>
                    {/* Icons section */}
                    <Flex alignItems="center" ml={1} h={4} gap={3}>
                        <Link href="#">
                            <Icon as={FaGlobe} h={3} />
                        </Link>
                        <Link href="#">
                            <Icon as={FaDiscord} h={3} />
                        </Link>
                        <Link href="#">
                            <Icon as={FaTwitter} h={3} />
                        </Link>
                        <Link href="#">
                            <Icon as={FaSync} h={3} />
                        </Link>
                    </Flex>
                </Stack>

            </Flex>


            {/* Pricing section */}
            <Flex ml={4} gap={0} direction={'column'} width={'10rem'} alignItems="center" justifyContent={'start'}>
                <Text fontSize="" color={'green.200'} fontWeight="bold" mr={2}>
                    27.39
                </Text>
                <Text fontSize={'sm'} color="gray.400" mr={2}>
                    BUY NOW
                </Text>
            </Flex>
            <Flex ml={4} gap={0} direction={'column'} width={'14rem'} alignItems="center" justifyContent={'start'}>
                <Text fontWeight="bold" color={'pink.300'} mr={2} whiteSpace={'nowrap'}>
                    26.07 [-5%]
                </Text>
                <Text fontSize={'sm'} color="gray.400" mr={2}>
                    SELL NOW
                </Text>

            </Flex>

            {/* Additional information */}
            <Flex ml={4} gap={0} direction={'column'} width={'14rem'} alignItems="center" justifyContent={'start'}>
                <Text fontWeight="bold" color={'white'} mr={2} whiteSpace={'nowrap'}>
                    333/4,993 [6.67%]
                </Text>
                <Text fontSize={'sm'} color="gray.400" mr={2}>
                    LISTED/SUPPLY
                </Text>

            </Flex>

            <Flex ml={4} gap={0} direction={'column'} width={'14rem'} alignItems="center" justifyContent={'start'}>
                <Text fontWeight="bold" color={'white'} mr={2} whiteSpace={'nowrap'}>
                    2,518,285
                </Text>
                <Text fontSize={'sm'} color="gray.400" mr={2}>
                    VOLUME [ALL]
                </Text>

            </Flex>


            <Flex>
                <Text mr={4}>22,900 SALES [ALL]</Text>
                <Text mr={4}>136,723 MARKET CAP</Text>
            </Flex>
            <Flex>
                <Text>5.32% PRICE Δ [24H]</Text>
            </Flex>
        </Flex>
    );
};

export default InfoBar;
