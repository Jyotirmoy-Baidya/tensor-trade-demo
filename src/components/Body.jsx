
import { Flex, Grid, GridItem, Heading, HStack, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react'

import NFTBox from './NFtBox';
import InfoBar from './InfoBar';
import BodyNav from './BodyNav';
import ConnectPopUp from './ConnectPopUp';
import CollectionBlock from './CollectionBlock';
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 11, 12, 13, 14, 15, 16, 17, 18, 19]

const Body = ({ collection, setCollection }) => {

    const [select, setSelect] = useState(0);
    const [connectPopUp, setConnectPopUp] = useState(false);

    const closePopUp = () => {
        setConnectPopUp(false);
    }

    const openPopUp = () => {
        setConnectPopUp(true);
        console.log("chde")
    }
    return (
        <HStack flex='1' overflow={'hidden'} spacing={0} maxWidth={'100vw'} flexGrow={1} alignItems={'start'}>
            {collection &&
                <CollectionBlock />
            }
            <Stack flex={1} height={'100%'} width={1} className='hide-scrollbar' direction={'column'}>
                <InfoBar collection={collection} setCollection={setCollection} />
                <BodyNav collection={collection} setCollection={setCollection} setSelect={setSelect} select={select} />
                <Grid flex={1} bg='black' px={2} py={1} flexGrow={1} MaxWidth={'100%'} overflowX={'hidden'} overflowY={'scroll'} className='design-scrollbar' templateColumns={{
                    base: 'repeat(2, 1fr)',
                    md: `${collection == true ? 'repeat(6, 1fr)' : 'repeat(6, 1fr)'}`,
                    lg: `${collection == true ? 'repeat(7, 1fr)' : 'repeat(9, 1fr)'}`,
                    xl: `${collection == true ? 'repeat(8, 1fr)' : 'repeat(11, 1fr)'}`,
                    '2xl': `${collection == true ? 'repeat(9, 1fr)' : 'repeat(12, 1fr)'}`
                }}>
                    {
                        arr.map((ele, i) => (
                            <GridItem w='100%' key={i}><NFTBox openPopUp={openPopUp} /></GridItem>
                        ))
                    }
                </Grid>
            </Stack>
            {connectPopUp && <ConnectPopUp closePopUp={closePopUp} />}
        </HStack >
    )
}

export default Body