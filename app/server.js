const Web3 = require('web3') // Works with web3 1.0.0-beta27
const contractArtifact = require('../build/contracts/Jukebox.json')

const web3 = new Web3()
const providerUrl = 'ws://localhost:8545' // requires # https://github.com/trufflesuite/ganache-cli/releases/tag/v7.0.0-beta.0 or https://github.com/trufflesuite/ganache/releases/tag/v1.1.0-beta.0
const provider = new Web3.providers.WebsocketProvider(providerUrl)
web3.setProvider(provider)

web3.eth.net.getId()
  .then(networkId => {
    const contractAddr = contractArtifact.networks[networkId].address
    const Jukebox = new web3.eth.Contract(contractArtifact.abi, contractAddr)
    Jukebox.events.Transfer({fromBlock: 0},  function(error, event){ console.log(error) })
      .on('data', (log) => {
        let { returnValues: { _from, _to, _value }, blockNumber } = log
        console.log(`----BlockNumber (${blockNumber})----`)
        console.log(`from = ${_from}`)
        console.log(`to = ${_to}`)
        console.log(`value = ${_value}`)
        console.log(`----BlockNumber (${blockNumber})----`)
      })
      .on('changed', (log) => {
        console.log(`Changed: ${log}`)
      })
      .on('error', (log) => {
        console.log(`error:  ${log}`)
      })
  })

/*var jukebox_artifacts = require('../build/contracts/Jukebox.json')
var Web3 = require('web3')
var contract = require('truffle-contract')

var provider = new Web3.providers.HttpProvider("http://localhost:8545");

const providerUrl = 'ws://localhost:8545'
var Jukebox = contract(jukebox_artifacts);
Jukebox.setProvider(provider);

EventListener();

function EventListener() {
//console.log("starting User Review Event Listener");
console.log(Jukebox);
  var jukeboxEvent;
  Jukebox.deployed().then(function(i) {
    jukeboxEvent = i.Transfer({fromBlock: 0, toBlock: 'latest'})
    jukeboxEvent.watch(function(err, result) {
      if (err) {
        console.log(err)
        return;
      }
      console.log(result.args);

    });
  });
}


*/