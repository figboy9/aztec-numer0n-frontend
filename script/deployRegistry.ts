
import { AccountWalletWithPrivateKey, createPXEClient, getSandboxAccountsWallets, waitForSandbox } from "@aztec/aztec.js";
import { RegisryContract } from "../src/artifacts/Regisry";

(async () => {
    const pxe = createPXEClient("http://localhost:8080");
    // Wait for sandbox to be ready
    await waitForSandbox(pxe)
    const nodeInfo = await pxe.getNodeInfo();
    console.log('Aztec Sandbox Info ', nodeInfo);
    // logger()
    // format
    const [deployer]: AccountWalletWithPrivateKey[] = await getSandboxAccountsWallets(pxe);
    const tx  = await RegisryContract.deploy(deployer).send().wait()
    console.log("RegisryContract deployed at: ", tx)
})()