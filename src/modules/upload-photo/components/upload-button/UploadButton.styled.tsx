import styled from 'styled-components/native'

import { Label } from '../../../shared/components/label'
import { PlusIcon } from '../../../shared/icons/PlusIcon'

export const StContainer = styled.Pressable`
  background-color: #9e00ff;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 80px;
  overflow: hidden;
`

export const StProgress = styled.View`
  background-color: #380855;
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 0%;
  left: 0px;
  top: 0px;
`

export const StPlusIcon = styled(PlusIcon)`
  color: #380855;
  z-index: 5;
`

export const StLabel = styled(Label)`
  z-index: 5;
`
