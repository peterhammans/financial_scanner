import * as mixins from "src/design-system/mixins";
import { ThProps } from "./Th";
import { TdProps } from "./Td";
import { createUseStyles, Styles } from "react-jss";
import { Theme } from "src/design-system/types";

type StyleClassNames = 'table' | 'th' | 'td' | 'trMobile'| 'tdMobile';

const useStyles = createUseStyles<Theme, StyleClassNames>(
  (theme: Theme): Styles<StyleClassNames> => ({
    table: () => ({
      borderCollapse: 'collapse'
    }),
    th: ({ textAlign, padding, noBorder }: Pick<ThProps, 'padding' | 'textAlign' | 'noBorder'>) => ({
      ...mixins.spacings(theme)({
        padding
      }),
      textAlign,
      ...!noBorder && { borderBottom: `1px solid ${theme.colors.grey20}` },
      textTransform: 'uppercase',
      weight: 'normal'
    }),
    td: ({ textAlign, padding, noBorder }: Pick<TdProps, 'padding' | 'textAlign' | 'noBorder'>) => ({
      ...mixins.spacings(theme)({
        padding
      }),
      textAlign,
      ...!noBorder && { borderBottom: `1px solid ${theme.colors.grey20}` }
    }),
    tdMobile: ({ padding }: Pick<TdProps, 'padding'>) => ({
      ...mixins.spacings(theme)({
        padding
      })
    }),
    trMobile: ({ noBorder }: Pick<TdProps, 'noBorder'>) => ({
      ...(!noBorder && { borderBottom: `1px solid ${theme.colors.grey20}` })
    })
  })
);

export default useStyles;
