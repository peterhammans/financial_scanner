import * as mixins from 'src/design-system/mixins';
import { Props } from './Box';
import { makeStyles, Theme } from '@material-ui/core/styles';

type StyleProps = Pick<Props, 'marginRight' | 'marginBottom' | 'marginLeft'>;

const useStyles = makeStyles((theme: Theme) => ({
  box: ({ marginRight, marginBottom, marginLeft }: StyleProps) => ({
    ...mixins.spacings(theme)(
      { marginRight, marginBottom, marginLeft }
    )
  })
}));

export default useStyles;

