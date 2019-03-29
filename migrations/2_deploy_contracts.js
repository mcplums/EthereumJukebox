const ConvertLib = artifacts.require("ConvertLib");
const Jukebox = artifacts.require("Jukebox");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, Jukebox);
  deployer.deploy(Jukebox);
};
