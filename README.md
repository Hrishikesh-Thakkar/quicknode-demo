# QuickNode Sample Faucet Contract

This project demonstrates a basic Faucet Contract which has time restrictions to prevent a single account from draining the entire supply. This uses QuickNode RPC to Deploy to the Goerli TestNet.

## How to Set up QuickNode
1. Select Ethereum Chain
<img width="1507" alt="Screenshot 2022-11-10 at 7 34 43 PM" src="https://user-images.githubusercontent.com/25359325/201206358-034f4076-5eea-4355-a53a-34defa0d76ba.png">
2. Select Ethereum Network in this case Goerli
<img width="1253" alt="Screenshot 2022-11-10 at 7 35 02 PM" src="https://user-images.githubusercontent.com/25359325/201206391-f94e8db9-2c44-4006-ae50-010c0860d791.png">
3. Select the Plan as Discover
<img width="622" alt="Screenshot 2022-11-10 at 7 35 57 PM" src="https://user-images.githubusercontent.com/25359325/201206397-46d45f01-d4e1-455f-a233-faccf4ddbc39.png">
4. Use the URL from the dashboard
<img width="929" alt="Screenshot 2022-11-11 at 2 45 54 AM" src="https://user-images.githubusercontent.com/25359325/201207557-76563295-280d-4a7a-8d92-64e22f0544e7.png">

## Steps To Run The Project
```
1. git clone this repository
2. npm install
3. touch .env
4. Add API_KEY and GOERLI_PRIVATE_KEY in .env file
```
## Contract Address
Contract Deployed At: [0x65930D7192497aBA7424c739A44B32D099A23D25](https://goerli.etherscan.io/address/0x65930D7192497aBA7424c739A44B32D099A23D25) (Goerli)  
Time Taken to Deploy Using QuickNode: 11.381 seconds  
Time Taken to Deploy Using Infura: 18.241 seconds

## Conclusion
Using Quicknode is drastically faster at deployment nearly 38% more than the other.
