import React from 'react'
import { Flex, Icon, Link, FlexProps, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { ReactText } from 'react'

interface NavItemProps extends FlexProps {
  icon: IconType
  children: ReactText
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#F7F7FB',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        <Text ml="4" color="#4F5B67">
          {children}
        </Text>
      </Flex>
    </Link>
  )
}

export default NavItem
