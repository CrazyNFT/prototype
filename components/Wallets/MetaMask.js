import Web3 from "web3";
let connected=false
const MetaMask = async () => {
  
  if (window.ethereum) {
    await window.ethereum.send('eth_requestAccounts');
    window.web3 = new Web3(window.ethereum);
    connected = true;
    return true;
  }
  return false;
}
export default MetaMask