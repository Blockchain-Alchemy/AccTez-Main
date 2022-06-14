# AccTez-Main
open-source framework for issuing tickets on the Tezos blockchain as tokens

## Apple Wallet
https://developer.apple.com/wallet/

### Generate Apple Certificates  
**FYI: Need to join the Apple Developer Program for $99 if you don't have one already** 

Follow the steps to generate your certificate.
https://github.com/alexandercerutti/passkit-generator/wiki/Generating-Certificates

Customize your event pass in src/event.pass by using [PassKit Package Format Reference](https://apple.co/2MUHsm0)


Build your pass
```
node src/pass.js
```

