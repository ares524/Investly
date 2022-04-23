import {
  SimpleGrid,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'

import Link from 'next/link'
import { Nav, Links, Icons, Logo, MobileCollapseMenu } from './Header.module'
import { FadeInDown } from '../../animations'
import HomeIcon from '../Icons/HomeIcon'
import LightIcon from '../Icons/LightIcon'
import PlusIcon from '../Icons/PlusIcon'
import CompassIcon from '../Icons/CompassIcon'
import HeartIcon from '../Icons/HeartIcon'
import AvatarIcon from '../Icons/AvatarIcon'

const Navbar = () => {
  return (
    <Nav>
      <Container maxW="container.xl">
        <FadeInDown>
          <SimpleGrid columns={{ base: 2, md: 2, lg: 3 }}>
            <Link href="/" passHref>
              <Logo>
                <img src="/images/Logo.png" alt="LOGO" />
              </Logo>
            </Link>
            <Links className="text-2 search-input">
              <SimpleGrid spacing={10}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    // eslint-disable-next-line react/no-children-prop
                    children={<SearchIcon color="gray.300" />}
                  />
                  <Input placeholder="Search" size="md" />
                </InputGroup>
              </SimpleGrid>
            </Links>
            <Icons>
              <HomeIcon />
              <LightIcon />
              <PlusIcon />
              <CompassIcon />
              <HeartIcon size='sm' />
              <AvatarIcon />
            </Icons>
            <MobileCollapseMenu>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon w={6} h={6} />}
                />

                <MenuList className="text-2 mobile-menu-icon">
                  <HomeIcon />
                  <LightIcon />
                  <PlusIcon />
                  <CompassIcon />
                  <HeartIcon size='sm' />
                </MenuList>
              </Menu>
            </MobileCollapseMenu>
          </SimpleGrid>
        </FadeInDown>
      </Container>
    </Nav>
  )
}

export default Navbar
