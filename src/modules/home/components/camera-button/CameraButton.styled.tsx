import styled from 'styled-components/native'

import { CameraIcon } from '../../../shared/icons/CameraIcon'

// TODO: Style container
export const StContainer = styled.Pressable`
  height: 179px;
  /* left: 36px; */
  /* top: 629px; */

  /* Action/Accent */

  background: #9e00ff;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

// TODO: Style icon
export const StCameraIcon = styled(CameraIcon)`
  /* Action/Dark */

  color: #380855;
`
