import {
  Container,
  Stat as ChakraStat,
  useColorModeValue as mode,
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { SearchIcon as ChakraSearchIcon } from '@chakra-ui/icons'
import { FadeInDown } from '../animations'
import {
  NotificationHeader,
  DashboardInfoCardContainer,
  FavoriteHeader,
  ProductInfoCardContainer,
} from './index.module'
import NotificationIcon from '../components/Icons/NotiifcationIcon'
import { IconType } from 'react-icons'
import TrendingUpIcon from '../components/Icons/TrendingUpIcon'
import SearchIcon from '../components/Icons/SearchIcon'
import TrendingDownIcon from '../components/Icons/TrendingDownIcon'
import TrendingFlatIcon from '../components/Icons/TrendingFlatIcon'
import NotificationCard from '../components/NotificationCard'
import ProductInfoCard from '../components/ProductCard'

interface NotificationCardInfoProps {
  name: string
  color: string
  count: number
  percent: number
  icon: IconType
}

const notificationCardInfo: Array<NotificationCardInfoProps> = [
  {
    name: 'Todays sales',
    count: 2456,
    icon: TrendingUpIcon,
    percent: 60,
    color: '#44C13C',
  },
  {
    name: 'New Products',
    count: 221,
    icon: TrendingFlatIcon,
    percent: 80,
    color: '#4040F2',
  },
  {
    name: 'Inventory',
    count: 1425,
    icon: TrendingDownIcon,
    percent: 50,
    color: '#FF513A',
  },
]

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Investly</title>
        {/* Meta Tags */}
      </Head>
      <Container maxW="container.xl" pl="60" py="27">
        <FadeInDown>
          <Box>
            <NotificationHeader>
              <p className="dashboard-text">Your dashboard</p>
              <div className="feature-icon-section">
                <NotificationIcon />
                <SearchIcon />
              </div>
            </NotificationHeader>
            <DashboardInfoCardContainer>
              {notificationCardInfo.map((info, index) => {
                return (
                  <NotificationCard
                    key={index}
                    name={info.name}
                    count={info.count}
                    color={info.color}
                    percent={info.percent}
                    icon={info.icon}
                  />
                )
              })}
            </DashboardInfoCardContainer>
          </Box>
          <Box>
            <FavoriteHeader>
              <p className="favorite-text">Your favorites</p>
              <div className="search-bar">
                <InputGroup>
                  <InputRightElement
                    pointerEvents="none"
                    // eslint-disable-next-line react/no-children-prop
                    children={<ChakraSearchIcon color="gray.300" />}
                  />
                  <Input placeholder="Try 'Miami beachhouse'" size="md" />
                </InputGroup>
              </div>
            </FavoriteHeader>
            <ProductInfoCardContainer>
              <ProductInfoCard />
              <ProductInfoCard />
              <ProductInfoCard />
              <ProductInfoCard />
            </ProductInfoCardContainer>
          </Box>
        </FadeInDown>
      </Container>
    </div>
  )
}

export default Home
