import styled from '@emotion/styled'

export const NotificationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;

  .dashboard-text {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 120%;
    color: #242D35;
  }

  .feature-icon-section {
    display: flex;
    align-items: center;
  }

  svg {
    background: #FFFFFF;
    border: 1px solid #EAECEE;
    box-sizing: border-box;
    border-radius: 32px;
    cursor: pointer;
    margin-right: 8px;
    padding: 4px;
  }
`

export const DashboardInfoCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const FavoriteHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 36px;

  .favorite-text {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 120%;
    color: #242D35;
  }
`