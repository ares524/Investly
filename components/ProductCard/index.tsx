import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Image,
  Icon,
} from '@chakra-ui/react'
import BusinessIcon from '../Icons/BusinessIcon'
import CarouselIcon from '../Icons/CarouselIcon'
import LocationIcon from '../Icons/LocationIcon'

import { StyledCard, BadgeWithIcon } from './index.module'

export default function ProductInfoCard() {
  return (
    <StyledCard
      mt={'24px'}
      maxW={'320px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'sm'}
      border="1px solid #EAECEE"
      rounded={'lg'}
      p={6}
    >
      <Image
        size={'xl'}
        src={'/images/products/1.jpg'}
        alt={'Product'}
        mb={4}
      />
      <Heading fontSize={'18px'} fontFamily={'body'} mb="8px">
        Boston family home
      </Heading>
      <Text fontSize={'12px'} color={useColorModeValue('gray.700', 'gray.400')}>
        A beautiful townhouse in the heart of Miami’s down town district. With 3
        bedrooms and a heated pool.
      </Text>

      <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
        <BadgeWithIcon>
          <Icon fontSize="16" as={LocationIcon} />
          <Text
            fontSize={'12px'}
            ml={2}
            color={useColorModeValue('gray.700', 'gray.400')}
          >
            Boston
          </Text>
        </BadgeWithIcon>
        <BadgeWithIcon>
          <Icon fontSize="16" as={CarouselIcon} />
          <Text
            fontSize={'12px'}
            ml={2}
            color={useColorModeValue('gray.700', 'gray.400')}
          >
            5 bedroom
          </Text>
        </BadgeWithIcon>
        <BadgeWithIcon>
          <Icon fontSize="16" as={BusinessIcon} />
          <Text
            fontSize={'12px'}
            ml={2}
            color={useColorModeValue('gray.700', 'gray.400')}
          >
            Villa
          </Text>
        </BadgeWithIcon>
      </Stack>

      <Stack mt={8} direction={'row'} spacing={4}>
        <Button
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          background="#FFFFFF"
          border={'1px solid #EAECEE'}
        >
          View listing details
        </Button>
      </Stack>
    </StyledCard>
  )
}
