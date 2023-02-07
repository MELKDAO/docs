---
description: Learning to Swap Tokens!
---

# Mission 7

In the last mission we learned how to buy MATIC. Today we are going to learn how to swap tokens on a decentralized exchange (DEX).

### 1. What a Swap is?

Today we are going to introduce the concept of swap, which is basically exchanging one token for another. For example, if I have 10 MATIC and I want to trade for ETH, I would swap my 10 MATIC for ETH.

This process can be done in a centralized exchange (CEX), using an order book, where people define their selling and purchase price and the exchange is in charge of processing the purchase and sale transactions. In the case of decentralized exchanges, this can be done through Smart Contracts, which are protocols, that is, computer programs that are in charge of carrying out the operation safely. In today's class, we will focus on decentralized exchanges and use [Uniswap](https://app.uniswap.org/#/swap?chain=mainnet).

### 2. Uniswap

Uniswap is the best known DEX and one of the most used, as it was one of the first. Its protocol was implemented on the Ethereum network, which was the first network that enabled Smart Contracts.

As other networks evolved, Uniswap implemented its protocol in other networks and today it is called multi-chain, that is, multi-networks.

Uniswap has turned into an ecosystem of various decentralized applications. In addition to the swap it also has protocols for investments, loans and almost everything related to Decentralized Finance (DeFi).

To learn more about Uniswap’s ecosystem, click on this [nesse link](https://uniswap.org/).

### 3. Swapping MATIC

{% hint style="info" %}
**Important**! Perform the missions with the same values described in this tutorial and in the screenshots, as validation also takes place on transaction values.

In this case the swap needs to be AT LEAST 1.5 MATIC.

As shown on the screen, the value of 1.5 MATIC has been converted to 1 USDC, but this may vary depending on the value of MATIC at the time you are running the experiment, so check the resulting amount of MATIC before swapping.
{% endhint %}

For today's mission, we are going to swap a part of the MATIC that is left in our wallet after the previous missions. Like other operations, swaps also cost gas, as they interact with smart contracts to switch from one token to another. So let’s go!

Go to Uniswap’s website at [https://uniswap.org/](https://uniswap.org/)

![](<../.gitbook/assets/image (6) (1).png>)

Click the “Launch App” button in the upper right corner. Your screen should look like this:

![](<../.gitbook/assets/image (36).png>)

The interface is very simple. We have two buttons where we will select the tokens to be swapped and a button to connect the wallet. Note that the default conversion currency is Ethereum, but for today's mission our currency will be MATIC, which runs on the Polygon network, as seen in mission 2.

As Uniswap is multi-chain, it supports multiple networks. There in the top right corner you will see a selection list with Ethereum selected. Let's switch to Polygon which is the network we want to use.

![](<../.gitbook/assets/image (76).png>)

As you can see, the background color has changed :)

Let's now connect the wallet. Click the `Connect to Wallet` button.

![](<../.gitbook/assets/image (100).png>)

Here we have several options for wallets, but just like in the previous missions, we will use Metamask.

![](<../.gitbook/assets/image (11).png>)

The website screen will look like the one above and the Metamask extension will open on your screen. The Metamask screen will look like this:

![](<../.gitbook/assets/image (89).png>)

Choose the account being used for the experiment and click `Next`:

![](<../.gitbook/assets/image (5).png>)

Here you will find the permissions you will be giving to the site, similar to those in mission 5. These are basic permissions for reading, balance and activity, in addition to the permission to start a transaction (with your confirmation).

After connecting the wallet, the website will look like this:

![](<../.gitbook/assets/image (104).png>)

We can see several things in this interface. The token to be swapped, our MATIC balance, our wallet address and the conversion values. Your balance will appear under the MATIC token, flagged below. Now, on the left side of MATIC, enter the value of tokens to be swapped. For this mission, the value will be 1.5 MATIC.

![](<../.gitbook/assets/image (83).png>)

Now, let's choose which token we will convert our MATIC to. For today's mission, we will be using USDC. USDC is a stablecoin.

But what is that?

A stablecoin is nothing more than a cryptocurrency with a fixed value in some fiat currency. The USDC, as the name implies, has its value pegged to the dollar. Therefore, 1 USDC is equal to 1 dollar.

There are several stablecoins pegged to the dollar, such as USDT, BUSD, USDD, DAI. We do not recommend using USDT due to rumors that there is no real dollar backing. Also, we find USDC safer.

Continuing, click on “Select a token” (in blue) and choose USDC:

![](<../.gitbook/assets/image (6).png>)

After choosing, your screen should look like this:

![](<../.gitbook/assets/image (61).png>)

In order to carry out the swap, this MATIC - USDC pair must have liquidity on the exchange. As both currencies are widely used, we do not need to worry about the liquidity of this pair. When you do this exercise, there will certainly be liquidity for you to swap.

On this screen we can see approximately how many USDC this conversion will result in, our balance in both currencies and the value of 1 USDC compared to 1 MATIC. Please note that the USDC value is the same as represented in dollars as it is a stablecoin.

Basically the amount of USDC you will receive will be 1.5 times the price of MATIC.

Click “Convert” to perform the operation.

{% hint style="danger" %}
**Heads up!** You are currently selling part of your MATIC balance. When we sell, we have to believe that the price of the currency will not go up, as this would mean a loss in the value of our total portfolio balance.

As we are just learning here and we are not concerned with the appreciation of the MATIC we buy, we can proceed with peace of mind.

In other cases, you need to be pretty sure what you're doing.
{% endhint %}

![](<../.gitbook/assets/image (1).png>)

Here we have the service and network fee amounts and some currency conversion details. It is possible to notice that we may have a small loss of tokens (due to the price change while the operation is happening + fees). In this case, the loss is minimal, of cents at most. Go ahead and confirm the conversion:

![](<../.gitbook/assets/image (42) (1).png>)

The screen will continue to load and Metamask will open in your browser as Uniswap needs your confirmation to proceed with the operation. Your screen will look like this:

![](../.gitbook/assets/meta.jpg)

Here we have the total transaction amount, including the gas fee.

{% hint style="warning" %}
This is a moment of greater attention. You need to check the amount that will come out of your wallet.
{% endhint %}

This is not the case with Uniswap, but malicious websites may command greater MATIC output from your wallet at this point. The Metamask screen is what guarantees what will actually happen. Note that the value of 1.5 MATIC being sent to Uniswap to perform the conversion appears in larger letters.

The gas fee is already estimated by Metamask, but it can be changed by you if you click on “Edit”. Only do this when you are more familiar with gas prices. Note that in this example the suggested gas cost was 0.005516 MATIC, which at the price of 0.68 per MATIC (as of the date I write this tutorial) represents 0.02 (two cents of BRL).

Click “Confirm” to complete the operation:

![](<../.gitbook/assets/image (4).png>)

The operation is complete!

{% hint style="warning" %}
Do not leave this screen before completing the transaction. It is important to click on “View in Explorer” so that you can copy the transaction hash as this is the proof of the task you will be submitting on Discord.
{% endhint %}

Click “ View in Explorer” to see the transaction:

![](<../.gitbook/assets/image (95).png>)

Great! We successfully swapped MATIC to USDC!

### 4. Importing the USDC token

Now let's import the USDC token into our wallet so we can see our balance.

Enter your metamask and click on "Import tokens", right below where your MATIC tokens are. We've done this before in mission 2, when we imported the MATIC token.

![](<../.gitbook/assets/addtoken (1).jpg>)

Now copy the address below and paste it into the “Token Contract Address” field:

> 0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174

The other fields will be filled in automatically. Then click on “Add Custom Token”.

Confirm the USDC import and note that the balance will already appear. This balance will be the value of the swap we did in the previous mission (approximately 1 USDC at the current price).

### 5. All ready! Now send the transaction hash to discord!

Congratulations on completing the mission!

We're making a lot of progress! We learned to swap tokens and understood what a stablecoin and Uniswap is! These basic skills are very useful in the web3 world as they allow us to use all the decentralized services that we are building.

To receive your reward, submit the transaction hash on the Discord channel for mission 7. My hash for example starts with 0x40d84ef.

When sending the message, do not write anything other than the transaction hash!
