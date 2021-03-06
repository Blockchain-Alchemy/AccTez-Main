import TezosProvider from './components/TezosContext/Provider'
import type { TezosProviderProps } from './components/TezosContext/Provider'
import type { NetworkOptions } from './components/TezosContext/types'
import useWallet from './hooks/useWallet'
import useDayPass from './hooks/useDayPass'
import { DayPassToken } from './config';

export type { TezosProviderProps, NetworkOptions }

export { TezosProvider, useWallet, useDayPass, DayPassToken }
