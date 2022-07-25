import React from 'react'
import Image from 'next/image'
import * as S from './style'
import Link from 'next/link'

const headerLinks = [
  {
    name: 'Clube',
    link: '/clube',
  },
  {
    name: 'Loja',
    link: '/',
  },
  {
    name: 'Produtores',
    link: '/produores',
  },
  {
    name: 'Ofertas',
    link: '/ofertas',
  },
  {
    name: 'Eventos',
    link: '/eventos',
  },
]

const optionsIcons = [
  { name: 'Busca', url: '/search.svg' },
  { name: 'Conta', url: '/account.svg' },
  { name: 'Wine Box', url: '/wine-box.svg', hasCounter: true },
]

export const Header = () => {
  const [isCurrentPage, setIsCurrentPage] = React.useState<string>('')
  const [cartCounter, setCartCounter] = React.useState<number>(0)

  React.useEffect(() => {
    const currentPage = window.location.pathname

    setIsCurrentPage(currentPage)
  }, [])

  return (
    <S.HeaderStyled>
      <div className="container content">
        <div className="left">
          <Image src="/logo.svg" alt="Wine Logo" width="103px" height="31px" />
          <div className="links">
            <ul>
              {headerLinks.map((item) => {
                return (
                  <li key={item.name}>
                    <Link href={item.link}>
                      <S.ActiveLink isCurrentPage={isCurrentPage === item.link}>{item.name}</S.ActiveLink>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="options">
            <ul>
              {optionsIcons.map((icon) => {
                return (
                  <li key={icon.name}>
                    <Link href="/">
                      <Image src={icon.url} alt={icon.name} width="56px" height="56px" />
                    </Link>
                    {icon.hasCounter && <S.CounterStyled>0</S.CounterStyled>}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </S.HeaderStyled>
  )
}
