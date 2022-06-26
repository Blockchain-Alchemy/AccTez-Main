import * as React from 'react';
import { useSelector } from 'react-redux';
import {
  PlasmicCountdown,
  DefaultCountdownProps
} from './plasmic/acc_tez_wizard/PlasmicCountdown';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import moment from 'moment';
import { useInterval } from "../hooks/useInterval"

export interface CountdownProps extends DefaultCountdownProps {}

function Countdown_(props: CountdownProps, ref: HTMLElementRefOf<'div'>) {
  const mainState = useSelector((state: any) => state.MainState);
  const { walletTokens } = mainState;
  const [remainTime, setRemainTime] = React.useState(0);

  React.useEffect(() => {
    if (walletTokens) {
      let selected = null;
      for (let token of walletTokens) {
        if (!selected) {
          selected = moment(token.expired);
        } else if (moment(token.expired).diff(selected) > 0) {
          selected = moment(token.expired);
        }
      }
      if (selected) {
        const remainTime = moment(selected).diff(moment(), 'seconds');
        setRemainTime(remainTime > 0 ? remainTime : 0);
        return;
      }
    }
    setRemainTime(0);
  }, [walletTokens]);

  useInterval(() => {
    if (remainTime > 0) {
      setRemainTime(remainTime - 1);
    }
  }, 1000)

  const formatTime = (seconds: number) => {
    const times = moment.utc(seconds * 1000).format('HH:mm:ss');
    const days = moment.duration(seconds, 'seconds').asDays();
    if (days >= 1) {
      return `${Math.floor(days)} days ${times}`
    }
    return times;
  }

  return (
    <PlasmicCountdown
      root={{ ref }}
      {...props}
      remainTime={
        <div style={{fontSize: '20px', fontWeight: 700}}>
          {formatTime(remainTime)}
        </div>
      }
    />
  );
}

const Countdown = React.forwardRef(Countdown_);
export default Countdown;
