---
description: Configure a new network and a new token in your wallet
---

# Mission 2

In this mission, we will understand what the different networks are and learn how to visualize the amount of tokens we have in our Metamask wallet. This is the first step for you to start managing the token balance you have available to use.

To proceed with this quest you must have completed Mission 1, so I'm assuming you've already installed Metamask and received your reward.

So let's go!

{% hint style="info" %}
This mission screenshots were taken from Metamask’s computer version, so if you’re using your mobile phone, the screens will not be identical but the interface is very similar and you will be able to perform all actions without any problem.
{% endhint %}

The crypto world works with a technology called blockchain. Blockchain is a database that holds information about all transactions that have been carried out so far. The blockchain is not inside a server (computer) in a single place. It is distributed to thousands of computers, which through consensus mechanisms guarantee the integrity of operations.

The first blockchain that ever existed was that of Bitcoin, and soon after, several other blockchains emerged, such as Ethereum, for example. Each blockchain is a different database and has different transactions. So in practice, whenever you receive a token, you are receiving it on a specific blockchain, or on a specific "chain" or on a specific "network". These are the names used for the blockchain.

When you transact Bitcoin (BTC), you are transacting on Bitcoin’s database. When you transact Ether (ETH) you are transacting on Ethereum’s database. It is not natively possible (experts, excuse me here for a minute) to move BTC from Bitcoin’s network to the Ethereum network.

Each blockchain has a different wallet format and software to handle the tokens in your wallet. The Metamask wallet you installed in Mission 1 is the software for managing the Ethereum blockchain wallet, and blockchains that were derived from Ethereum. You are not able to view a Bitcoin (BTC) balance through Metamask, for example.

When we open the Metamask screen, we see the following:

![](../.gitbook/assets/Screenshot\_29\_01\_22\_16\_29.png)

{% hint style="info" %}
On my screen it sometimes shows Account 1 or Account 2, but on yours it will always show Account 1, so don't worry about that.
{% endhint %}

Right at the top it says **Ethereum Mainnet** and that shows which blockchain your wallet is currently connected to. As Metamask was made for Ethereum, it is this blockchain that appears by default. Mainnet means it is the main network. That's because there are also so-called Testnets that exist only for developers to perform tests before putting their systems to run on the main network.

In the center you can see 0 ETH, which represents the balance in ETH that you have in that wallet. As nothing has been done so far, your balance will be zero. Since ETH is Ethereum's default currency, it is this currency that appears in the middle.

Further down you can see the listing of tokens you have in this wallet. As there is nothing yet, it only shows the already configured ETH, as it is the default currency and the balance is zero, because you haven't received anything yet.

Well then! If you've already received your reward of $MELKs, why don't they show up there?

There are two reasons why you cannot see your MELK tokens yet. The first reason is that the MELK token is not an Ethereum network token and the second reason is that you have not yet included the token in the listing for it to appear there.

The tokens you receive are not stored in the Metamask software. A token transfer is a transaction that takes place on the blockchain database and results in a balance in your wallet. All transaction and balance information is recorded on the blockchain and not on your computer.

In other words, when I transfer you a token, I don't send any files to your computer. So if you format your computer, you don't lose your tokens as long as you have saved the seed words.

You lose your tokens if you ever lose your seed words. Because the seed words are the key for you to be able to send a transaction to the blockchain that handles the tokens in your wallet.

f it gets confusing and you have any questions about this mechanism, just ask over there on [Discord’s web3dev community help channel](https://discord.gg/w8smrfEpN4).

As stated before, the MELK token is not an Ethereum network token, it is a Polygon network token. Polygon is a different blockchain from Bitcoin and Ethereum and it was derived from Ethereum, therefore can be manipulated by Metamask.

Let's now follow the steps to configure Polygon's network in Metamask.

### 1. Configuring the Polygon network

#### 1.1. Open your Metamask and click on the current network “Ethereum Mainnet”

![](../.gitbook/assets/Screenshot\_29\_01\_22\_16\_33.png)

#### 1.2. Click “Add Network”

![](<../.gitbook/assets/Screenshot\_29\_01\_22\_16\_34 (1).png>)

#### 1.3. Fill in Polygon’s network data

Metamask will open a form for you to fill in your Polygon network data. Below are the data you need to fill in the form:

|                    |                                                              |
| ------------------ | ------------------------------------------------------------ |
| Network Name       | Polygon Mainnet                                              |
| New RPC URL        | [https://polygonscan-rpc.com/](https://polygonscan-rpc.com/) |
| Chain ID           | 137                                                          |
| Currency Symbol    | MATIC                                                        |
| Block Explorer URL | [https://polygonscan.com](https://polygonscan.com)           |

{% hint style="info" %}
The RPC URL may give an error when importing from the Polygon network. For this reason, we have provided some alternative RPC URLs to solve this problem. These links are taken directly from the [Polygon Network Documentation.](https://docs.polygon.technology/docs/develop/network-details/network/)

[https://rpc-mainnet.matic.network](https://rpc-mainnet.matic.network)

[https://matic-mainnet.chainstacklabs.com](https://matic-mainnet.chainstacklabs.com)

[https://rpc-mainnet.maticvigil.com](https://rpc-mainnet.maticvigil.com)

[https://rpc-mainnet.matic.quiknode.pro](https://rpc-mainnet.matic.quiknode.pro)
{% endhint %}

{% hint style="warning" %}
A malicious network provider can lie about the state of the blockchain and record your network activity. Only add networks you trust.
{% endhint %}

Pay attention to capitalization. The form will look like this:

![](../.gitbook/assets/Screenshot\_29\_01\_22\_16\_47.png)

Click “Save”

#### 1.4. All ready! You have already registered the Polygon network in your Metamask

The metamask will return to the wallet screen with a success message.

![](../.gitbook/assets/Screenshot\_29\_01\_22\_16\_49.png)

You can now see that the Polygon network will be selected and because of that, in the middle of the screen, you no longer see 0 ETH but 0 MATIC. That's because MATIC is Polygon’s network default currency.

Also note that in the token list only the MATIC token appears with a zero balance. You no longer see the ETH token. That is because this token is only configured in your Ethereum network wallet.

![](<../.gitbook/assets/Screenshot\_29\_01\_22\_16\_49 (1).png>)

Since Polygon’s network was derived from the Ethereum network, the same public wallet address and the same private key with the same seed words work for both networks.

If you look at the address just below your account name, you will notice that it remains the same public address that was present on the Ethereum network.

You can change networks at any time by clicking on the current network at the top of the screen.

### 2. Adding the MELK token

Now let's add the MELK token to be able to view its available balance. Given that you have already received the reward from the previous mission, your wallet will have a balance of this token.

As I mentioned before, the token does not stay on your computer as a file, it is the result of transactions that take place in the blockchain. Your Metamask doesn't know what happened there, you need to let it know that you want to query a certain token to see how much of this token your wallet has in balance. To do this, follow the steps below.

#### 2.1. Click “Import Tokens”

![](<../.gitbook/assets/Screenshot\_29\_01\_22\_16\_49 (2).png>)

#### 2.2. Fill in the token data

Every token is a smart contract, that is, a software, a programming code that is in the blockchain. Each contract has an address which is a code similar to your public wallet address. To import a token you need to know the token address.

Following are the data of the MELK token.

|                        |                                              |
| ---------------------- | -------------------------------------------- |
| Token contract address | `0x9fd41f6f67d4438f0e3dc3951eae0ad2093492dd` |
| Token Ticker           | MELK                                         |
| Token Decimal          | 18                                           |

Fill in the token contract address field with the value below:

`0x9fd41f6f67d4438f0e3dc3951eae0ad2093492dd`

After filling in the address, Metamask queries the blockchain and retrieves the symbol and decimal of the token.

![](../.gitbook/assets/Screenshot\_29\_01\_22\_17\_03.png)

After clicking “Add Custom Token”, you will be able to see your MELK balance!

#### 2.3. Click “Import Token”

![](../.gitbook/assets/Screenshot\_29\_01\_22\_17\_05.png)

After importing the token, Metamask will show the token screen with your balance right in the middle. You can then click the little arrow to go back to the account screen which will show the imported token.

![](../.gitbook/assets/Screenshot\_29\_01\_22\_17\_08.png) ![](../.gitbook/assets/Screenshot\_29\_01\_22\_17\_07.png)

#### 2.4. Congratulations! You imported the MELK token!

All done, you can now track your MELK balance. As you can see, I received 1003 MELK tokens for completing mission 1.

But wait there. Wasn't 1 token the reward for mission 1? Yes that's true! But in reality I gave you a little more, just so that we could validate this mission 2 :)

### 3. Send your MELK balance to discord to receive the reward for this mission

Head over to the [MELK Experiment Mission 2 channel on discord](https://discord.gg/uDyHmwBw6E) and post the exact amount you received as a reward for the previous mission. Write it exactly as it appears at Metamask, that is, the value with 3 decimal places and using a period as the delimiter. In my case, the message I would have to send would be this:

> 1.003

Any questions, feel free to say something on the help channel.

{% hint style="info" %}
In this mission we learned 2 lessons:

1. The first one was about the different networks and how to configure a new network in Metamask and;
2. The second was about setting up a new token in Metamask.
{% endhint %}

