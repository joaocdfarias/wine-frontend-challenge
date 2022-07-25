import { render } from '@testing-library/react'
import { Main } from '../Main'

describe('Main', () => {
  it('should render correctly', () => {
    const { baseElement } = render(
      <Main>
        <p>Teste</p>
      </Main>
    )

    expect(baseElement).toMatchSnapshot()
  })
})
