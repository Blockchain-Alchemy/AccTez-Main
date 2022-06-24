import { useCallback } from 'react'
import moment from 'moment'
import { Contracts, DayPassToken } from '../config'
import { useTezosContext } from './useTezosContext'

const contractAddress = Contracts.DayPass

const useDayPass = () => {
  const { tezos, walletAddress } = useTezosContext()!

  const mintToken = useCallback(
    (tokenId: DayPassToken) => {
      console.log('mintToken', tokenId)
      if (tezos && walletAddress) {
        const params = [
          {
            amount: 1,
            to_: walletAddress,
            token: {
              existing: tokenId,
            },
          },
        ]
        return tezos.wallet
          .at(contractAddress)
          .then((contract) => {
            return contract.methods.mint_token(params).send()
          })
          .then((op) => op.confirmation())
          .then((result) => {
            console.log('Mint result:', result)
            return result
          })
      } else {
        return Promise.reject('Please connect your wallet')
      }
    },
    [tezos, walletAddress]
  )

  const getTokenTime = useCallback(
    (tokenId: DayPassToken) => {
      console.log(`checkTokenTime, tokenId=${tokenId}, wallet=${walletAddress}`)
      if (tezos && walletAddress) {
        return tezos.wallet
          .at(contractAddress)
          .then((contract) => {
            return contract.storage()
          })
          .then((storage: any) => {
            return storage.token_times.get({ 0: walletAddress, 1: tokenId })
          })
          .then((token) => {
            console.log('token', token)
            return token ? moment(token) : null
          })
      } else {
        return Promise.reject('Please connect your wallet')
      }
    },
    [tezos, walletAddress]
  )

  return {
    mintToken,
    getTokenTime,
  }
}

export default useDayPass
