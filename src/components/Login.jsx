import React from 'react';
import { Button } from '@mantine/core';
import useWallet from '../hooks/useWallet';
import { createMessagePayload } from '../service/siwt';
import { login } from '../service/http';

const Login = () => {
  const { requestSignPayload, connectWallet, walletAddress, publicKey } = useWallet();
  const handleLogin = async () => {
    console.log('handleLogin', walletAddress)

    const messagePayload = createMessagePayload('siwt.stakenow.fi', walletAddress)
    console.log('messagePayload', messagePayload)

    const signedPayload = await requestSignPayload(messagePayload)
    console.log('signedPayload', signedPayload)

    const payload = {
      pk: publicKey,
      pkh: walletAddress,
      message: messagePayload.payload,
      signature: signedPayload.signature,
    }
    login(payload)
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