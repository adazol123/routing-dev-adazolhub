import { Flex, useColorModeValue } from '@chakra-ui/react'

export default function Contents({ children }) {
    const containerBackground = useColorModeValue('gray.200','gray.800')

    return (
            <Flex justifyContent='center' alignItems='center' direction='column' maxW='1200px' w='full' bg='green.400' >
                {children}
            </Flex>
    )
}