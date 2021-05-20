import { Flex, useColorModeValue, Img, Image, Text } from '@chakra-ui/react'
import Footer from './Footer'
import Navbar from './Navbar'
import Contents from './Contents'
import HeroBanner from '../Banner/HeroBanner'
import NextImage from 'next/image'
import { bgWrap, bgText } from '../../styles/Home.module.css'


export default function Layout({ title, children }) {
    const containerBackground = useColorModeValue('gray.200','gray.800')

    return (
        <Flex width='full' justifyContent='center' alignItems='center' direction='column' bg={ containerBackground }>
            <Navbar title={ title }/>
                <HeroBanner>
                    <div className={ bgWrap }>
                    <Image src='/Images/bg-image-02.jpg' alt='name' width='full' height='full'    align='right'
                        fit='cover'
                        quality={60} />

                    </div>
                    <Flex className={ bgText } mx={{ base:'80px', md: '100px', lg: '200px', xl: '300px' }}>
                            <Text fontSize={{ base:'sm', md: 'md', lg: 'xl', xl: '2xl' }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi sequi qui deleniti atque ea labore aliquam consequuntur, ut repellat quod impedit eaque doloremque sunt repudiandae reiciendis, accusamus nisi pariatur tempora soluta non voluptates explicabo? Eligendi repellendus quisquam, quibusdam id, dolores aliquid in nostrum quis ratione aperiam ducimus. Ipsa, voluptatum.</Text>
                        </Flex>
                </HeroBanner>
                <Contents> 
                    {children}
                </Contents>
            <Footer/>
        </Flex>
    )
}


// import Navbar from './Navbar';
// import Footer from './Footer';
// import { Head } from 'next/head'


// const Layout = ({ title, children }) => {
//     return ( 
//         <div className="content">
//             <Head>
                // <title>{ title }</title>
                // <meta name="description" content="Adazolhub Development Ground to Explore Web applications" />
                // <link rel="icon" href="/favicon.ico" />
                // <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                // <link
                // rel="stylesheet"
                // href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700&display=swap"
                // />
//             </Head>
//             <Navbar/>
//             { children }
//             <Footer/>
//         </div>
//      );
// }
 
// export default Layout;