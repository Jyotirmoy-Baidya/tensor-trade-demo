import React from 'react'
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
    TableContainer
} from '@chakra-ui/react'

import { Flex, Heading, HStack, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Search2Icon, StarIcon } from '@chakra-ui/icons';
const CollectionBlock = () => {
    return (
        <Flex borderRight={'1px'} borderColor={'gray.800'} bg='black' height={'100%'} minWidth={'370px'}
            width={{ base: '100vw', lg: '370px' }}
            p={3} direction={'column'} >
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
        </Flex >
    )
}

export default CollectionBlock