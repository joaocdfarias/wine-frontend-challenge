import { render } from '@testing-library/react'
import { Header } from '../Header'

describe('Header', () => {
  it('should render correctly', () => {
    const { baseElement } = render(<Header />)

    expect(baseElement).toMatchSnapshot()
  })
})
