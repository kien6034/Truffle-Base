const myERC721 = artifacts.require("myERC721");
contract("myERC721", accounts =>{
    
    let instance = null;
    before(async()=>{
        instance = await myERC721.deployed()
    })

    it("owner should be accounts[0]", async() =>{
        let owner = await instance.owner();
        assert.equal(owner, accounts[0]);
    })

    it("white list can be added properly", async()=>{
        instance.addWhitelistAddress(accounts[1]);
        assert(instance.checkIfWhiteListed(accounts[1]));
    })
})