import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Box, Flex, Button, useColorMode, useColorModeValue, Heading, Circle } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Navbar = ({ title }) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue('blackAlpha.400','blackAlpha.700')
    const containerBackground = useColorModeValue('gray.200','gray.800')
    return ( 
        <Flex  width='full' justifyContent='center' background={ formBackground }boxShadow='md' h='70px'
            pos='sticky'
            top='0'
            zIndex='100'
        >
        <Head>
                <title>{ title } | Adazolhub</title>
                <meta name="description" content="Adazolhub Development Ground to Explore Web applications" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700&display=swap"
                />
                
        </Head>
        <Flex  px={6} py={3} justifyContent='space-between' alignItems='center' maxW='1200px' w='full'  >

        <Heading fontSize='md' fontWeight={100}  > ADAZOLHUB  |  { title }</Heading>
        <Flex onClick={ toggleColorMode }  w={9}  justifyContent= {colorMode === 'dark' ? 'flex-start' : 'flex-end'} rounded='full' border='1px solid gray' cursor='pointer'>
        <Circle variant='solid' rounded='full' w={6} h={5} p={2} bg={colorMode === 'dark' ? 'yellow.400' : 'green.400'} >
            {colorMode === 'dark' ? <MoonIcon fontSize={12} /> : <SunIcon fontSize={12} color='white'/>}
        </Circle>
        </Flex>
        </Flex>
        </Flex>
     );
}
 
export default Navbar;
