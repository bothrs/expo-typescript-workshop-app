import Svg, { Path } from 'react-native-svg'

import type { SvgProps } from 'react-native-svg'

export const CrossIcon = (props: SvgProps) => (
  <Svg width={22} height={21} fill="none" {...props}>
    <Path
      d="M20.375 17.625c.813.75.813 2.063 0 2.813A1.939 1.939 0 0 1 19 21c-.563 0-1.063-.188-1.438-.563L11 13.875l-6.625 6.563A1.939 1.939 0 0 1 3 21c-.563 0-1.063-.188-1.438-.563a1.927 1.927 0 0 1 0-2.812L8.125 11 1.562 4.437a1.927 1.927 0 0 1 0-2.812 1.927 1.927 0 0 1 2.813 0L11 8.188l6.563-6.563a1.927 1.927 0 0 1 2.812 0c.813.75.813 2.063 0 2.813l-6.563 6.625 6.563 6.562Z"
      fill="#F9F9F9"
    />
  </Svg>
)
