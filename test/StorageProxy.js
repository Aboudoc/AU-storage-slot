const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers")
const { assert } = require("chai")
const { ethers } = require("hardhat")

describe("StorageProxy", function () {
    async function deployFixture() {
        const [owner, otherAccount] = await ethers.getSigners()

        const Proxy = await ethers.getContractFactory("Proxy")
        const proxy = await Proxy.deploy()

        const Logic1 = await ethers.getContractFactory("Logic1")
        const logic1 = await Logic1.deploy()

        const Logic2 = await ethers.getContractFactory("Logic2")
        const logic2 = await Logic2.deploy()

        const proxyAsLogic1 = await ethers.getContractAt("Logic1", proxy.address)
        const proxyAsLogic2 = await ethers.getContractAt("Logic2", proxy.address)

        return { proxy, logic1, logic2, proxyAsLogic1, proxyAsLogic2, owner, otherAccount }
    }

    describe("Deployment", function () {
        it("Should work with logic 1", async function () {
            const { proxy, logic1 } = await loadFixture(deployFixture)

            proxy.changeImplementation(logic1.address)

            assert.equal(await logic1.x(), 0)
        })

        it("Should work with logic 2", async function () {
            const { proxy, logic2 } = await loadFixture(deployFixture)

            proxy.changeImplementation(logic2.address)

            assert.equal(await logic2.x(), 0)
        })

        // it("Should work with upgrades", async function () {
        //     const { lock, lockedAmount } = await loadFixture(deployOneYearLockFixture)

        //     expect(await ethers.provider.getBalance(lock.address)).to.equal(lockedAmount)
        // })
    })
})
