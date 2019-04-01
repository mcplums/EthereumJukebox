pragma solidity >=0.4.21 <0.6.0;


// This is a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract Jukebox {

   event quarterEntered(uint _ethReceived, string _url );


    function insertQuarter(string memory _url) public payable {
    emit quarterEntered(msg.value, _url);
} 
}
