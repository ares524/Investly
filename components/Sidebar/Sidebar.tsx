import React from 'react'
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  BoxProps,
  Image,
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import NavItem from './Module/NavItem'
import { Logo } from './Sidebar.module'
import DashboardIcon from '../Icons/DashboardIcon'
import AvailableUnitIcon from '../Icons/AvailableUnitIcon'
import InvoiceIcon from '../Icons/InvoiceIcon'
import WatchIcon from '../Icons/WatchIcon'
import ShareIcon from '../Icons/ShareIcon'
import ProjectIcon from '../Icons/ProjectIcon'
import BookmarkIcon from '../Icons/Bookmark'

interface SidebarProps extends BoxProps {
  onClose: () => void
}

interface LinkItemProps {
  name: string
  icon: IconType
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: DashboardIcon },
  { name: 'Available units', icon: AvailableUnitIcon },
  { name: 'Invoices', icon: InvoiceIcon },
  { name: 'Projects', icon: WatchIcon },
  { name: 'Social media', icon: ShareIcon },
  { name: 'Integrations', icon: ProjectIcon },
  { name: 'Documentation', icon: BookmarkIcon },
]

const Sidebar = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="center">
        <Image src="/images/Logo.png" />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

export default Sidebar
