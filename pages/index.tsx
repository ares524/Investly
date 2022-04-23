import {
  Container,
  Box,
  SimpleGrid,
  Stat as ChakraStat,
  useColorModeValue as mode,
  Image,
  Flex,
  Spacer,
  Stack,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { FadeInDown } from '../animations'
import Footer from '../components/Footer/Footer'
import DetailIcon from '../components/Icons/DetailIcon'
import EmojiIcon from '../components/Icons/EmojiIcon'
import FavIcon from '../components/Icons/FavIcon'
import HeartIcon from '../components/Icons/HeartIcon'
import MessageIcon from '../components/Icons/MessageIcon'
import TelegramIcon from '../components/Icons/TelegramIcon'

const Home: NextPage = () => {
  const [cardNumber, setCardNumber] = useState(8)

  useEffect(() => {
    setCardNumberFunc()
    window.addEventListener('resize', function (event) {
      setCardNumberFunc()
    })
  }, [])

  const setCardNumberFunc = () => {
    if (document.body.clientWidth >= 992) {
      setCardNumber(8)
    }
    if (document.body.clientWidth < 992 && document.body.clientWidth >= 576) {
      setCardNumber(4)
    }
    if (document.body.clientWidth < 576) {
      setCardNumber(2)
    }
  }

  return (
    <div>
      <Head>
        <title>Investly</title>
        {/* Meta Tags */}
      </Head>
      <Container maxW="container.xl" py="27">
        <FadeInDown></FadeInDown>
      </Container>
    </div>
  )
}

export default Home
