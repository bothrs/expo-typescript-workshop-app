import styled from 'styled-components/native'

import { PageView } from '../../../shared/components/page-view'

export const StPageView = styled(PageView)`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
`

export const StBackgroundImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
`
