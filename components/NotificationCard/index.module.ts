import styled from '@emotion/styled'
import {
  Text,
} from '@chakra-ui/react';

export const StyledCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #EAECEE;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  width: 320px;
  height: 159px;
  padding: 24px;
  justify-content: space-between;

  .text-view {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Work Sans';

    .name {
      font-size: 18px;
      font-weight: 600;
    }
    .count {
      font-size: 28px;
      font-weight: 600;
    }
  }
  .graph-view {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .view-section {
      width: 80px;
    }
  }
`;
