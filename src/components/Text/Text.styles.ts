import * as mixins from 'src/design-system/mixins';
import { Props } from './Text';
import { makeStyles, Theme } from '@material-ui/core/styles';

type StyleProps = Pick<Props, 'color' | 'marginRight' | 'marginBottom' | 'marginLeft' | 'fontSize'>;

const useStyles = makeStyles((theme: Theme) => ({
  text: ({ marginRight, marginBottom, marginLeft, fontSize }: StyleProps) => ({
    ...mixins.spacings(theme)(
      { marginRight, marginBottom, marginLeft }
    ),
    ...mixins.responsive(theme)(theme.responsive.typography.sizes, { fontSize }),
  }),
}));

export default useStyles;

