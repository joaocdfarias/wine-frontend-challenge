import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Filter } from '../Filter'

describe('Filter', () => {
  it('should render correctly', () => {
    const { baseElement } = render(<Filter />)

    expect(baseElement).toMatchSnapshot()
  })

  it('should select radio button correclty', async () => {
    render(<Filter />)

    const radio = screen.getByRole('radio', { name: 'R$ 40 A R$60' })
    await userEvent.click(radio)
    await waitFor(() => expect(radio).toHaveProperty('checked'))
  })
})
