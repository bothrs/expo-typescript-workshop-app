import styled from 'styled-components/native'

export const StContainer = styled.View<{
  insets: { top: number; bottom: number }
}>`
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
  padding: ${({ insets }) => insets.top}px 20px
    ${({ insets }) => insets.bottom}px 20px;
  display: flex;
  flex-direction: column;
  background: transparent;
`
