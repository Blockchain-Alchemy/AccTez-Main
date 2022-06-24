import React from 'react';
import { Button } from '@mantine/core';
import useWallet from '../hooks/useWallet';
import { createMessagePayload } from '../service/siwt';

const Login = () => {
  const { requestSignPayload, connectWallet, walletAddress } = useWallet();
  const handleLogin = async () => {
    console.log('handleLogin', walletAddress)

    const messagePayload = createMessagePayload('siwt.stakenow.fi', walletAddress)
    console.log('messagePayload', messagePayload)

    const signedPayload = await requestSignPayload(messagePayload)
    console.log('signedPayload', signedPayload)
  }

  return (
    <>
      Login with Pass Token

      <Button onClick={connectWallet}>
        Connect Wallet
      </Button>

      <Button onClick={handleLogin}>
        Login
      </Button>
    </>
  )
}

export default Login;