import React from 'react'
import * as S from './style'

interface IMain {
  children: React.ReactNode
}

export const Main = ({ children }: IMain) => {
  return <S.MainStyled className="container"> {children} </S.MainStyled>
}
