import * as mixins from "src/design-system/mixins";
import { LoadingProps, LoadingSize } from "./Loading";
import { createUseStyles, Styles } from "react-jss";
import { Theme } from "src/design-system/types";
import { CSS } from 'src/helpers';

type StyleProps = Pick<
  LoadingProps,
  'size' | 'color'
>;

type StyleClassNames = 'loading' | '@keyframes pulse';

const sizeMap: Record<LoadingSize, number> = {
  small: 20,
  normal: 50,
  big: 80
}

function useAnimatedStyle<T extends Theme | null>(props: StyleProps & { theme: T }) {
  const { size, color, theme } = props;

  return createUseStyles<T, StyleClassNames>(
    (theme: T): Styles<StyleClassNames> => ({
      '@keyframes pulse': {
        '0%': {
          top: CSS.px((sizeMap[size] / 2) - 4),
          left: CSS.px((sizeMap[size] / 2) - 4),
          width: 0,
          height: 0,
          opacity: 1
        },
        '100%': {
          top: 0,
          left: 0,
          width: CSS.px(sizeMap[size] - 8),
          height: CSS.px(sizeMap[size] - 8),
          opacity: 0
        }
      },
      loading: () => ({
        height: CSS.px(sizeMap[size]),
        width: CSS.px(sizeMap[size]),
        display: 'inline-block',
        position: 'relative',
        '& div': {
          position: 'absolute',
          border: `4px solid ${theme.colors[color]}`,
          opacity: 1,
          borderRadius: '50%',
          animation: '$pulse 1s cubic-bezier(0, 0.2, 0.8, 1) infinite',
          '&:nth-child(2)': {
            animationDelay: '-0.5s'
          }
        }
      })
    })
  )({ theme });
}

export default useAnimatedStyle;
