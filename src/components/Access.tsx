import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import moment from 'moment';
import {
  PlasmicAccess,
  DefaultAccessProps
} from './plasmic/acc_tez_wizard/PlasmicAccess';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import { DayPassToken } from '../config';
import useDayPass from '../hooks/useDayPass';
import { Loader } from '@mantine/core';
import useWallet from '../hooks/useWallet';
import { getTokenName } from '../utils';

export interface AccessProps extends DefaultAccessProps {}

function Access_(props: AccessProps, ref: HTMLElementRefOf<'div'>) {
  const history = useHistory();
  const { walletAddress } = useWallet();
  const { getTokenTime } = useDayPass();
  const [loading, setLoading] = useState(false);
  const [access, setAccess] = useState(false);
  const [tokenId, setTokenId] = useState<DayPassToken | null>(null);

  useEffect(() => {
    if (!walletAddress) {
      history.push('/');
    }
  }, [history, walletAddress]);

  const getTokenExpired = (tokenId: DayPassToken, createdAt: any) => {
    if (tokenId === DayPassToken.DayPass) {
      return moment(createdAt).add(1, 'days');
    }
    if (tokenId === DayPassToken.WeeklyPass) {
      return moment(createdAt).add(7, 'days');
    }
    if (tokenId === DayPassToken.YearlyPass) {
      return moment(createdAt).add(1, 'years');
    }
    if (tokenId === DayPassToken.SpecialEventPass) {
      return moment(createdAt).add(1, 'months');
    }
    return moment(createdAt);
  };

  const checkToken = async (tokenId: DayPassToken) => {
    console.log('tokenId', tokenId);
    setTokenId(tokenId);
    setLoading(true);

    try {
      const createdAt = await getTokenTime(tokenId);
      console.log('createdAt', moment(createdAt).format('YYYY-MM-DD hh:mm:ss'));
      if (createdAt) {
        const expired = getTokenExpired(tokenId, createdAt);
        console.log('expired', expired.format('YYYY-MM-DD hh:mm:ss'));
        const diff = moment(expired).diff(moment());
        console.log('diff', diff);
        setAccess(diff > 0);
      } else {
        setAccess(false);
      }
    } catch (error) {
      setAccess(false);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PlasmicAccess
      root={{ ref }}
      {...props}
      dayPassButton={{
        isDisabled: loading,
        onClick: () => checkToken(DayPassToken.DayPass)
      }}
      weeklyPassButton={{
        isDisabled: loading,
        onClick: () => checkToken(DayPassToken.WeeklyPass)
      }}
      yearlyPassButton={{
        isDisabled: loading,
        onClick: () => checkToken(DayPassToken.YearlyPass)
      }}
      specialPassButton={{
        isDisabled: loading,
        onClick: () => checkToken(DayPassToken.SpecialEventPass)
      }}
      restrictedContent={
        <>
          {loading && <Loader variant="bars" />}
          {!loading && !access && tokenId != null && (
            <div>
              This content is restricted. You can buy {getTokenName(tokenId)}{' '}
              Token from{' '} <NavLink to="/">here</NavLink>
            </div>
          )}
          {!loading && access && <div>You can access this content</div>}
        </>
      }
    />
  );
}

const Access = React.forwardRef(Access_);
export default Access;
