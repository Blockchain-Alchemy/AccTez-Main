const { PKPass } = require("passkit-generator")
const { env } = require('dotenv').config({path: './.env'})
  
  async function start() {

    try {
     /** Each, but last, can be either a string or a Buffer. See API Documentation for more */
      const fs = require("fs")
      const path = require("path")
      
      const { wwdr, signerCert, signerKey, signerKeyPassphrase } = {
          wwdr : fs.readFileSync(path.join(__dirname, '../certs/AppleWWDRCA.pem')), 
          signerCert : fs.readFileSync(path.join(__dirname, '../certs/signerCert.pem')), 
          signerKey : fs.readFileSync(path.join(__dirname, '../certs/signerKey.pem')), 
          signerKeyPassphrase : process.env.REACT_SIGNERKEYPASSPHRASE
      }
     
     
     const pass = await PKPass.from({
       /**
        * Note: .pass extension is enforced when reading a
        * model from FS, even if not specified here below
        */
       model: path.join(__dirname, 'event.pass'),
       certificates: {
         wwdr,
         signerCert,
         signerKey,
         signerKeyPassphrase
       },
     }, {
       // keys to be added or overridden
       serialNumber: "AAGH44625236dddaffbda"
     });
 
     // Adding some settings to be written inside pass.json
     // pass.localize("en", { ... });
     pass.setBarcodes("1278105430"); // Random value
 
     // Generate the stream .pkpass file stream
     const stream = pass.getAsStream();
    
     // doSomethingWithTheStream(stream);
     const output = path.join(__dirname, '../output/acctez.pkpass');
     stream.pipe(fs.createWriteStream(output));
    
     // or
 
     // const buffer = pass.getAsBuffer();
     // doSomethingWithTheBuffer(buffer);
 
   } catch (err) {
     console.log(err)
     // doSomethingWithTheError(err);
   }
 
 }
 
 start()
 
 
 