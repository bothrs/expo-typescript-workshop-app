import Svg, { Path } from 'react-native-svg'

import type { SvgProps } from 'react-native-svg'

export const PlusIcon = (props: SvgProps) => (
  <Svg width={62} height={63} fill="none" {...props}>
    <Path
      d="M0 31.75c0-17.074 13.805-31 31-31 17.074 0 31 13.926 31 31 0 17.195-13.926 31-31 31-17.195 0-31-13.805-31-31Zm31 13.563c1.574 0 2.906-1.211 2.906-2.907v-7.75h7.75c1.575 0 2.907-1.21 2.907-2.906 0-1.574-1.333-2.906-2.907-2.906h-7.75v-7.75c0-1.575-1.332-2.907-2.906-2.907-1.695 0-2.906 1.332-2.906 2.907v7.75h-7.75c-1.696 0-2.907 1.332-2.907 2.906 0 1.695 1.211 2.906 2.907 2.906h7.75v7.75c0 1.696 1.21 2.907 2.906 2.907Z"
      fill="currentColor"
    />
  </Svg>
)
