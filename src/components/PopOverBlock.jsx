import { Popover, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react'
import React from 'react'

const PopOverBlock = ({ placement = 'bottom', div, popoverBlock }) => {
    return (
        <Popover placement={placement} trigger="hover">
            <PopoverTrigger>
                {div}
            </PopoverTrigger>
            <PopoverContent bg='black'
                zIndex={10}
                borderRadius={'md'}
                filter="drop-shadow(2px 2px 6px rgba(255, 255, 255, 0.6))" width={'fit-content'} border={0}>
                <PopoverBody fontSize={'sm'} fontWeight={'bold'} color={'white'} fontFamily={'mono'} borderRadius={'inherit'} textAlign={'center'} width={'fit-content'} px={4} py={2}>
                    {popoverBlock}
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default PopOverBlock