import { Box, Text, VStack, HStack, Button, IconButton, Collapse, useDisclosure, Flex, Icon, Grid } from '@chakra-ui/react';
import { FaWallet, FaGoogle, FaLock, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { GiDuffelBag } from 'react-icons/gi';

const ConnectPopUp = ({ closePopUp }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Flex zIndex={20} position={'fixed'} top={0} left={0} height={'100vh'} width={'100vw'} bg={'#00000040'} justifyContent={'center'} fontFamily={'mono'} alignItems={'center'} onClick={() => closePopUp()}>
            <Flex direction={'column'} onClick={(e) => e.stopPropagation()} width={'23rem'} bg="gray.800" color="white" borderRadius="md" maxHeight={'80%'}>
                {/* Header */}
                <VStack borderBottom={'1px'} py={5} px={4} spacing={'1px'} mb={4} align="start">
                    <Text fontSize="lg" fontWeight="bold">Connect Wallet</Text>
                    <Text fontSize="sm" color="gray.400" fontWeight={'bold'}>You need to connect a Solana wallet.</Text>
                </VStack>
                <VStack width={'full'} flex={1} overflowY={'auto'} className='hide-scrollbar design-scrollbar' px={4}>

                    {/* Recommended Wallets */}
                    <VStack align="start" w='full' spacing={2}>
                        <Text fontWeight="bold" fontSize={'sm'}>Recommended Wallets</Text>
                        <VStack spacing={0} w="full" p={4} borderRadius="md" border={'1px'} borderColor={'gray.400'} bg={'transparent'} _hover={{ bg: 'gray.700' }}>
                            <Icon p={0} as={GiDuffelBag} fontSize={'30px'} h={10} color={'red.600'} />
                            <Text fontSize={'14px'} fontWeight={'bold'} letterSpacing={1}>Backpack</Text>
                        </VStack>
                    </VStack>

                    {/* Installed Wallets */}
                    <VStack align="start" w='full' py={3} spacing={2}>
                        <Text fontWeight="bold" fontSize={'sm'}>Installed Wallets</Text>
                        <VStack spacing={1} w={'40%'} p={4} borderRadius="md" border={'1px'} borderColor={'gray.400'} bg={'transparent'} _hover={{ bg: 'gray.700' }}>
                            <Icon p={0} as={FaGoogle} fontSize={'25px'} h={10} color={'blue.600'} />
                            <Text fontSize={'14px'} fontWeight={'bold'} letterSpacing={1}>Google via TipLink</Text>
                        </VStack>
                    </VStack>


                    {/* More Wallets */}
                    <VStack mb={5} align="start" w='full' spacing={4} mt={6}>
                        <Flex justifyContent="space-between" alignItems={'center'} w="full">
                            <Text fontWeight="bold">More wallets</Text>
                            <IconButton
                                icon={isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                aria-label="Toggle more wallets"
                                variant="ghost"
                                color="white"
                                onClick={onToggle}
                            />
                        </Flex>
                        <Collapse in={isOpen} animateOpacity>
                            <Grid templateColumns={'repeat(2, 1fr)'} spacing={2} align="start">
                                <HStack spacing={0} w="full" p={4} borderRadius="md" border={'1px'} borderColor={'gray.400'} gap={2} bg={'transparent'} _hover={{ bg: 'gray.700' }}>
                                    <Icon p={0} as={FaWallet} fontSize={'30px'} h={10} color={'yellow.600'} />
                                    <Text fontSize={'14px'} fontWeight={'bold'} letterSpacing={1}>Solflare</Text>
                                </HStack>
                                <Button leftIcon={<FaWallet />} w="full" justifyContent="flex-start" variant="ghost">
                                    Solflare
                                </Button>
                                <Button leftIcon={<FaWallet />} w="full" justifyContent="flex-start" variant="ghost">
                                    Phantom
                                </Button>
                                <Button leftIcon={<FaWallet />} w="full" justifyContent="flex-start" variant="ghost">
                                    Torus
                                </Button>
                                <Button leftIcon={<FaLock />} w="full" justifyContent="flex-start" variant="ghost">
                                    Trezor
                                </Button>
                            </Grid>
                        </Collapse>
                    </VStack>
                </VStack>
            </Flex>
        </Flex>
    );
};

export default ConnectPopUp;
