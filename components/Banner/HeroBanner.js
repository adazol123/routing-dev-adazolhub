import { Flex, useColorModeValue } from '@chakra-ui/react'

export default function HeroBanner({ children }) {
    const containerBackground = useColorModeValue('gray.200','gray.800')

    return (
            <Flex justifyContent='center' alignItems='center' direction='column'  w='full' >
                {children}
            </Flex>
    )
}