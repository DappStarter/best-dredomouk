require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle food elbow crawl museum unit hunt prize slot gate'; 
let testAccounts = [
"0x869ab7ec770e0bbc8bc227c124d4982db60272118bb14c0f99c3cea6456465ff",
"0x6ea209dd68083ccfe592647e6229f406bfc39ccf482c2f871b85f7bd6f46727f",
"0x7bf01470aa61f358979893e33cc2b8da296d8b302a433d693cfb419df20242df",
"0x455a2f8ca9670f3cb8e60dce6536806dd87cb49f8cd5c70d33ea10852539178e",
"0x267b870281859e3ca3ed49bc4f23bdfe338564d810411fa163322700349c8f8c",
"0x4f0dcdad337659c65b3942cbb7375af0e49258077eb49589e8c4ebeecf0f1544",
"0x375fc4cebba1ccf49e8fdac16cc602d7592cadcc07220c97012762163810d8fc",
"0x33d83376a6b0c8a841e0ca11579bbc42e0522537e97cab6f2fda63626aef93e1",
"0x5cb102c8f78aec5d540539926700e51b2749e409b7b7f541ce609733c0e43d21",
"0xff44514250ceadaa61fd83ecf03b72b01d624ed3f75f3e75696edd4aa6b2fd5a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
