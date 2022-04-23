import React from 'react'
import { Box, Icon, useColorModeValue } from '@chakra-ui/react'
import { StyledCard } from './index.module'
import { IconType } from 'react-icons'
import TrendingUpIcon from '../Icons/TrendingUpIcon'

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

interface NotificationCardProps {
  icon: IconType
  name: string
  count: number
  color: string
  percent: number
}

const NotificationCard = (props: NotificationCardProps) => {
  const { name, count, percent, color, icon } = props
  return (
    <StyledCard>
      <div className="text-view">
        <p className="name">{name}</p>
        <p className="count">{count}</p>
      </div>
      <div className="graph-view">
        <div className="view-section">
          <CircularProgressbarWithChildren
            value={percent}
            styles={buildStyles({
              pathColor: color,
            })}
          >
            <div>
              <Icon fontSize="16" as={icon} />
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </StyledCard>
  )
}

export default NotificationCard
