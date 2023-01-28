const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers")
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs")
const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("Lock", function () {
    async function deployOneYearLockFixture() {
        const [owner, otherAccount] = await ethers.getSigners()

        const Proxy = await ethers.getContractFactory("Proxy")
        const proxy = await Proxy.deploy()

        const Logic1 = await ethers.getContractFactory("logic1")
        const logic1 = await Logic1.deploy()

        const Logic2 = await ethers.getContractFactory("logic2")
        const logic2 = await Logic2.deploy()

        const proxyAsLogic1 = await ethers.getContractAt(proxy.address, "logic1")
        const proxyAsLogic2 = await ethers.getContractAt(proxy.address, "logic2")

        return { proxy, logic1, logic2, proxyAsLogic1, proxyAsLogic2, owner, otherAccount }
    }

    describe("Deployment", function () {
        it("Should work with logic 1", async function () {
            const { proxy, logic1 } = await loadFixture(deployOneYearLockFixture)

            proxy.changeImplementation(logic1.address)

            assert.equal()
        })

        it("Should work with logic 2", async function () {
            const { proxy, owner } = await loadFixture(deployOneYearLockFixture)

            proxy.changeImplementation(logic2.address)

            assert.equal()
        })

        it("Should work with upgrades", async function () {
            const { lock, lockedAmount } = await loadFixture(deployOneYearLockFixture)

            expect(await ethers.provider.getBalance(lock.address)).to.equal(lockedAmount)
        })
    })
})
