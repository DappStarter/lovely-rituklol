require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name rice place modify hidden gloom swallow giant'; 
let testAccounts = [
"0x19019ed7c83300ac009030e81f6a3c3dc736783f995a847ecee3c22636bb6424",
"0xd92a42ea0e91f2b8bafd78979a6a63264199b7866dcd236a3fa744124d07cccd",
"0x5e18095354d1ea01bfd63db4c73123799fb593605bcb21efd870a03676e9fc4a",
"0x68e4fde99c7002c4d4924561c55f9815a31c1690efa7d16852e158f67680d81c",
"0x066e1f7c84accbd1a77cd8b8e3f3bb703f5332764ff496e63fe29f3aa3efb3d3",
"0x0a25748a09cd0742eb691046f91b9eebd8d9056cd79cdec5a63ccd33b4c10e3c",
"0x8120ba0cf0c73a957f5754f45409cde50c65fecd62e2f8295fc2b2d4a39c7482",
"0xa980bddc96f60afe037412be706f8918246224b7af28e889d2e2b9206e02f3ce",
"0x5705b183d6ed2d43561657b072d6f8f6cd6dd1624c9ca3b2117f060e52b00d98",
"0xeb056f1771e61a25552da6ac93adbffe04012e9ced70e6332a4fafc20dfe5bd8"
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
