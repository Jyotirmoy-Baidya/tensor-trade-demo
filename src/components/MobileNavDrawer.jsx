import { Button, Flex, IconButton, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import NavItems from './NavItems'
import ConnectWalletNavItem from './ConnectWalletNavItem'
const MobileNavDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <>
            <IconButton ref={btnRef} color='white' bg='transparent' onClick={onOpen}>
                <FaBars />
            </IconButton>
            <Drawer
                size={'sm'}
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent bg='black'>
                    <DrawerCloseButton color={'white'} />
                    <DrawerBody>
                        <Flex direction={'column'} alignItems={'center'}>
                            <Flex height='8' align={'center'}>
                                <ConnectWalletNavItem />
                            </Flex>
                            <NavItems />
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MobileNavDrawer