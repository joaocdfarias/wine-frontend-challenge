import Link from 'next/link'
import styled from 'styled-components'

interface ActiveLinkProps {
  isCurrentPage: boolean
}

export const HeaderStyled = styled.header`
  width: 100%;
  background: #fff;
  padding: 16px;
  box-shadow: 0px 2px 5px 0px #cccccc;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 84px;
  }

  img {
    max-width: 103px;
  }

  ul {
    display: flex;
  }

  .links ul {
    gap: 48px;
  }

  .options ul {
    gap: 42px;
  }

  .options li {
    position: relative;
  }
`
export const ActiveLink = styled.a<ActiveLinkProps>`
  color: ${(props) => (props.isCurrentPage ? '#D14B8F' : '#555555')};
  position: relative;
  font-size: 18px;
  font-weight: 400;

  &::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: -34px;
    background-color: #d14b8f;
    display: ${(props) => (props.isCurrentPage ? 'block' : 'none')};
  }

  cursor: pointer;
`

export const CounterStyled = styled.span`
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  color: #4fbfa5;
  position: absolute;
  right: -5px;
  bottom: 5px;
  box-shadow: 0px 2px 5px 0px #cccccc;
  text-align: center;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 700;
`
