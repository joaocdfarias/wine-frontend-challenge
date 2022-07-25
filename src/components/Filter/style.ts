import styled from 'styled-components'

export const Aside = styled.aside`
  max-width: 256px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  .title {
    font-size: 20px;
    font-weight: 700;
    color: #000000;
  }

  .subtitle {
    p {
      font-size: 18px;
      font-weight: 700;
      color: #333333;
      margin-bottom: 16px;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    li {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    input[type='radio'] {
      width: 16px;
      height: 16px;
    }
  }
`
