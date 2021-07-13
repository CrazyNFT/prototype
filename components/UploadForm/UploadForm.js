import React from "react";

const IPFS = require('ipfs-mini')
const ipfs = new IPFS({host: 'ipfs.infura.io', post: 5001, protocol: 'https'});
const buffer = require('buffer');
const fetch = require("node-fetch");
const ethers = require('ethers');



//let fs = require('fs');
//a06d8729936a97db15004d7727f31b67f65bce14


import {
  Container,
  Grid,
  Segment,
  Header,
  Icon,
  Form,
  Message,
  Image,
} from "semantic-ui-react";
import { useForm, Controller } from "react-hook-form";
import styles from "@/styles/UploadForm.module.css";



async function fetchAsync (url) {
  
  
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
// Dummy user data
const user = {
  uid: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  userName: "johnDoe",
  userEmail: "john.doe@gmail.com",
};
function base64ArrayBuffer(arrayBuffer) {
  let base64 = '';
  const encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  const bytes = new Uint8Array(arrayBuffer);
  const byteLength = bytes.byteLength;
  const byteRemainder = byteLength % 3;
  const mainLength = byteLength - byteRemainder;

  let a;
  let b;
  let c;
  let d;
  let chunk;

  // Main loop deals with bytes in chunks of 3
  for (let i = 0; i < mainLength; i += 3) {
    // Combine the three bytes into a single integer
    chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];

    // Use bitmasks to extract 6-bit segments from the triplet
    a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
    b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
    c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
    d = chunk & 63; // 63       = 2^6 - 1

    // Convert the raw binary segments to the appropriate ASCII encoding
    base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
  }

  // Deal with the remaining bytes and padding
  if (byteRemainder === 1) {
    chunk = bytes[mainLength];

    a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2

    // Set the 4 least significant bits to zero
    b = (chunk & 3) << 4; // 3   = 2^2 - 1

    base64 += `${encodings[a]}${encodings[b]}==`;
  } else if (byteRemainder === 2) {
    chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];

    a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
    b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4

    // Set the 2 least significant bits to zero
    c = (chunk & 15) << 2; // 15    = 2^4 - 1

    base64 += `${encodings[a]}${encodings[b]}${encodings[c]}=`;
  }

  return base64;
}

export default function UploadForm() {
  
  const { handleSubmit, control } = useForm();
  let provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
  let signer = provider.getSigner();
  const [file, setFile] = React.useState({
    obj: "",
    error: false,
    errorMessage: "",
  });
  const [success, setSuccess] = React.useState(false);
  const validFileTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

  async function getVoucher(tokenId, uri, minPrice=0, signer){
    const chainId = "80001";
        const domain = {
          name: "LazyNFT-Voucher",
          version: "1",
          verifyingContract: "0x138fFdDd2efCa4992AE8bBB8C8d74Ced6Db2AF4F",
          chainId,
        }
    
    
        const voucher = { tokenId, uri, minPrice }
        
        const types = {
          NFTVoucher: [
            {name: "tokenId", type: "uint256"},
            {name: "minPrice", type: "uint256"},
            {name: "uri", type: "string"},  
          ]
        }
        const signature = await signer._signTypedData(domain, types, voucher)
        return signature;
    
        // console.log( {
        //   ...voucher,
        //   signature,
        // })
    }

  const handleFile = (event) => {
    
    if (event.target.files.length === 0) {
      setFile({ obj: "", error: true, errorMessage: "Media required" });
    } else if (!validFileTypes.includes(event.target.files[0].type)) {
      setFile({
        obj: "",
        error: true,
        errorMessage: "Only Jpg, Jpeg, Png and GIF allowed",
      });
    } else if (event.target.files[0].size > 8388608) {
      setFile({
        obj: "",
        error: true,
        errorMessage: "max: 8Mb size exceeded",
      });
    } else {
      var reader = new FileReader();
      reader.onload = function (e) {
        let imgNode = document.getElementById("preview-img");
        imgNode.src = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      setFile({
        obj: event.target.files[0],
        error: false,
        errorMessage: "",
      });
      
    //   const prefix = `data:${event.target.files[0].type};base64,`;
    //  const buf = buffer.Buffer(String(reader.result));
    //  const base64buf = prefix + base64ArrayBuffer(buf);
      // ipfs.add(base64buf, (err, hash) => {
      //   if(err){
      //     return console.log(err);
      //   }
      //   const imgHash = hash;
      // })
  
      //console.info(cid)
        }
  };



// TODO: retrive the json file from "ipfs://{hash} by using the passed hash value, and append it to @/components/extras/listed.json"
// let append = async(hash) => {}




  return (
    <Container>
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column className={styles.formGridCol}>
          <Form
            onSubmit={handleSubmit((data) => {
              const prefix = `data:${file.obj.type};base64,`;
              const buf = buffer.Buffer(String(file.obj));
              const base64buf = prefix + base64ArrayBuffer(buf);
              ipfs.add(base64buf, (err, hash) => {
                if(err){
                  return console.log(err);
                }
                const NFT = {
                  ...data,
                  nftFile: hash,
                  author: user.userName,
                  authorId: user.uid,
                };
                console.log(NFT);
                //append(hash);
                ipfs.add(Buffer.from(JSON.stringify(NFT)), (err, hash) => {
                  if(err){
                    return console.log(err);
                  }
                  // window.web3.eth.getAccounts().then(function(result){
                  //   console.log(result)
                  // })
                  
                  window.web3.eth.getAccounts().then(function(account){
                    fetchAsync(`https://crazynft.herokuapp.com/createvoucher.php?uri=${hash}&price=${data["nftPrice"]}&address=${account[0]}`).then(function(idresult){
                    const id = idresult["id"]

                    console.log(idresult);
                    if(idresult.hasOwnProperty('id')){
                    getVoucher(1, hash, 0, signer).then(function(result){
                      console.log(result);
                      fetchAsync(`https://crazynft.herokuapp.com/addvoucher.php?id=${id}&voucher=${result}`).then(function(final){
                      console.log(final)
                  
                  }
                  )
                    });
                  } else {
                    console.log("Voucher Already exists");
                  }
                    
                  }
                  )
                  })
                  
                  
                  
                  
                  
                });
                
              })
              
              
              //console.log(NFT);
              setSuccess(true);
            })}
            size="large"
            success={success}
          >
            <Segment raised style={{ maxWidth: "inherit" }}>
              <Segment
                placeholder
                style={{ maxWidth: "inherit", maxHeight: "18em" }}
              >
                {!!file.obj ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    id="preview-img"
                    src=""
                    alt={"NFT image"}
                    className={styles.preview}
                  />
                ) : (
                  <Header icon>
                    <Icon name="image file" style={{ height: 70 }} />
                    NFT Preview will be shown on Upload
                  </Header>
                )}
              </Segment>
              <Form.Input
                type="file"
                onChange={handleFile}
                error={!!file.error ? file.errorMessage : false}
              >
                <input />
                <div className={styles.fileInpLabel}>
                  Jpg / Jpeg / Png / GIF
                </div>
              </Form.Input>
              <Controller
                name="nftName"
                control={control}
                rules={{
                  required: { value: true, message: "NFT name required" },
                  maxLength: {
                    value: 100,
                    message: "max: 100 character limit exceeded",
                  },
                }}
                render={({ field, fieldState }) => (
                  <Form.Input
                    placeholder="NFT Name"
                    onChange={field.onChange}
                    error={fieldState.error ? fieldState.error.message : false}
                  />
                )}
              />
              <Controller
                name="nftDescription"
                control={control}
                rules={{
                  maxLength: {
                    value: 300,
                    message: "max: 300 character limit exceeded",
                  },
                }}
                render={({ field, fieldState }) => (
                  <Form.TextArea
                    placeholder="NFT Description (Max: 300 characters)"
                    onChange={field.onChange}
                    error={fieldState.error ? fieldState.error.message : false}
                  ></Form.TextArea>
                )}
              />
              <Controller
                name="nftPrice"
                control={control}
                rules={{
                  required: { value: true, message: "NFT price required" },
                  min: { value: 0, message: "negative values not allowed" },
                }}
                render={({ field, fieldState }) => (
                  <Form.Input
                    placeholder="NFT Price"
                    min={0}
                    type="number"
                    step="any"
                    onChange={field.onChange}
                    error={fieldState.error ? fieldState.error.message : false}
                  ></Form.Input>
                )}
              />
              <Form.Button primary type="submit" fluid disabled={!file.obj}>
                Approve
              </Form.Button>
              <Message
                success
                header="Success"
                content={"Your NFT has been submitted for Approval, check the console for hash"}
              />
              
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </Container>
  );
}