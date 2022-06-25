import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  PlasmicHomepage,
  DefaultHomepageProps
} from './plasmic/acc_tez_wizard/PlasmicHomepage';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import { updateLessonStateAction } from '../store/actions';

export interface HomepageProps extends DefaultHomepageProps {}

function Homepage_(props: HomepageProps, ref: HTMLElementRefOf<'div'>) {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <PlasmicHomepage
      root={{ ref }}
      {...props}
      nextButton={{
        onClick: () => {
          dispatch(updateLessonStateAction(0));
          history.push('/wallet');
        }
      }}
    />
  );
}

const Homepage = React.forwardRef(Homepage_);
export default Homepage;
