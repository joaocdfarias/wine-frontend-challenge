import React from 'react'
import * as S from './style'

interface IPriceFilter {
  id: number
  text: string
  min: number
  max: number
  defaultChecked?: boolean
}

const priceFilter: IPriceFilter[] = [
  {
    id: 0,
    text: 'Até R$40',
    min: 0,
    max: 40,
    defaultChecked: true,
  },
  {
    id: 1,
    text: 'R$ 40 A R$60',
    min: 40,
    max: 60,
  },
  {
    id: 2,
    text: 'R$100 A R$200',
    min: 100,
    max: 200,
  },
  {
    id: 3,
    text: 'R$200 A R$500',
    min: 200,
    max: 500,
  },
  {
    id: 4,
    text: 'Acima de R$500',
    min: 500,
    max: Infinity,
  },
]

export const Filter = () => {
  const [filterValue, setFilterValue] = React.useState({
    min: 0,
    max: 40,
  })

  const handleFilterValue = (min: number, max: number) => {
    setFilterValue({ min: min, max: max })
  }

  return (
    <S.Aside>
      <p className="title">Refine sua busca</p>
      <div className="subtitle">
        <p>Por preço</p>
        <ul>
          {priceFilter.map((price) => {
            return (
              <li key={price.id}>
                <input
                  onChange={() => handleFilterValue(price.min, price.max)}
                  type="radio"
                  name="price"
                  id={'price-' + price.id}
                  value={price.max}
                  defaultChecked={filterValue.min === price.min}
                />
                <label htmlFor={'price-' + price.id}>{price.text}</label>
              </li>
            )
          })}
        </ul>
      </div>
    </S.Aside>
  )
}
