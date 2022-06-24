import { RequestSignPayloadInput } from '@airgap/beacon-sdk'
import { char2Bytes } from '@taquito/utils'

export interface MessagePayloadData {
  dappUrl: string
  timestamp: string
  message: string
}

export interface SignInMessageData {
  dappUrl: string
  pkh: string
}

export const TEZOS_SIGNED_MESSAGE_PREFIX = 'Tezos Signed Message:'

export const constructSignPayload = ({ payload, pkh }: { payload: string; pkh: string }) => ({
  signingType: 'micheline',
  payload,
  sourceAddress: pkh,
} as RequestSignPayloadInput)

export const createMessagePayload = (dappUrl: string, pkh: string) => {
  const str = [
    TEZOS_SIGNED_MESSAGE_PREFIX,
    dappUrl,
    new Date().toISOString(),
    `${dappUrl} would like you to sign in with ${pkh}.`,
  ].join(' ');

  const bytes = char2Bytes(str);
  const payload = ['05', '01', bytes.length.toString(16).padStart(8, '0'), bytes].join('');
  return constructSignPayload({ payload, pkh });
}