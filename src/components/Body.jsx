import { Search2Icon, StarIcon } from '@chakra-ui/icons';
import { Flex, Grid, GridItem, Heading, HStack, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { BiCategoryAlt } from 'react-icons/bi';
import { IoFunnelOutline } from "react-icons/io5";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import NFTBox from './NFtBox';
import InfoBar from './InfoBar';
import BodyNav from './BodyNav';
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

const Body = () => {
    const [collection, setCollection] = useState(false);

    const [select, setSelect] = useState(0);
    return (
        <HStack maxWidth={'100vw'} spacing={0} flexGrow={1} alignItems={'start'}>
            {collection &&
                <Flex borderRight={'1px'} borderColor={'gray.800'} bg='black' height={'100%'} minWidth={'370px'} width={'370px'} p={3} direction={'column'}>
                    <Heading color={'white'} paddingBottom={3} letterSpacing={1} fontWeight='800' size={'sm'} textTransform={'uppercase'}>
                        Collections
                    </Heading>
                    {/* Collection block search  */}
                    <HStack width="100%">
                        <InputGroup>
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
                                placeholder="Filter by collection"
                                fontFamily="mono"
                                borderRadius="8px"
                                _hover={{
                                    borderColor: '#EDF2F7',
                                }}

                            />

                        </InputGroup>
                        <Icon as={IoFunnelOutline} me={2} color={'white'} />
                    </HStack>
                    <TableContainer width={'100%'} height={'100%'}>
                        <Table color={'white'} fontFamily={'mono'} size={'sm'} display={'flex'} flexDirection={'column'} MaxWidth={'100%'} variant='simple'>
                            <Thead display={'flex'}>
                                <Tr display={'flex'} alignItems={'center'} width={'100%'}>
                                    <Td px={0} py={1} display={'flex'} alignItems={'center'}>
                                        <StarIcon h={4} />
                                    </Td>
                                    <Th py={1} px={1} fontFamily={'mono'} fontSize={'15px'} color={'gray.300'} flexGrow={1}>NAME</Th>
                                    <Th py={1} px={1} fontFamily={'mono'} fontSize={'15px'} width={'60px'} textAlign={'right'} color={'gray.300'}>FLOOR</Th>
                                    <Th py={1} px={1} fontFamily={'mono'} fontSize={'15px'} width={'60px'} textAlign={'right'} color={'gray.300'}>24H</Th>
                                    <Th py={1} px={1} fontFamily={'mono'} fontSize={'15px'} width={'60px'} textAlign={'right'} color={'gray.300'}>VOL</Th>
                                </Tr>
                            </Thead>
                            <Tbody >
                                <Tr display={'flex'}>
                                    <Td border={0} p={0} display={'flex'} alignItems={'center'}>
                                        <StarIcon h={4} />
                                    </Td>
                                    <Td border={0} fontWeight={'bold'} fontSize={'13px'} p={1} flexGrow={1}>SMB Gen2</Td>

                                    <Td border={0} fontWeight={'400'} fontSize={'13px'} p={1} width={'60px'} textAlign={'right'} color={'green.300'}>28.09</Td>
                                    <Td border={0} fontSize={'13px'} p={1} width={'60px'} textAlign={'right'} color={'green.300'}>6.25%</Td>
                                    <Td border={0} fontSize={'13px'} p={1} width={'60px'} textAlign={'right'}>3.552</Td>
                                </Tr>
                            </Tbody>

                        </Table>
                    </TableContainer>
                </Flex>
            }
            <Stack width="100%" overflowX="auto" direction={'column'}>
                <InfoBar collection={collection} setCollection={setCollection} />
                <BodyNav collection={collection} setCollection={setCollection} setSelect={setSelect} select={select} />
                <Grid bg='black' height={'fit-content'} templateColumns={{
                    base: 'repeat(2, 1fr)', lg: `${collection == true ? 'repeat(8, 1fr)' : 'repeat(11, 1fr)'}`
                }}>
                    {
                        arr.map((ele, i) => (
                            <GridItem w='100%' key={i}><NFTBox /></GridItem>
                        ))
                    }
                </Grid>
            </Stack>
        </HStack>
    )
}

export default Body