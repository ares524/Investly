import React from 'react'
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  ChakraProvider,
  extendTheme,
  ThemeConfig,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

const SidebarWithNoSSR = dynamic(import('../components/Sidebar/Sidebar'), {
  ssr: false,
})

function MyApp({ Component, pageProps }: AppProps) {
  const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }

  const theme = extendTheme({ config })
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh">
        <SidebarWithNoSSR
          onClose={() => onClose}
          display={{ base: 'none', md: 'block' }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarWithNoSSR onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <Box ml={{ base: 0, md: 3 }} p="4">
          <Component {...pageProps} />
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
