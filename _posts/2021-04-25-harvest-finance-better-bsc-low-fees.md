---
layout: post
title: Why Harvest Finance is Better even though Binance Smart Chain Low Fees
categories: cryptocurrency
tags: [cryptocurrency, DeFi, yield farming, Harvest Finance, BinanceFARMer, Binance Smart Chain, decentralized finance]
featuredimage: https://images.hive.blog/DQmck7xasDKyRLFxG58M3Pqtdh6ZpRmJj3FozgytBPQLWq9/bsc-portfolio-early-2021.png
description: In Binance Smart Chain, Harvest Finance saves around a hundred dollar assuming auto compounding everyday, then how much saved on Ethereum?
canonicalurl: https://0fajarpurnama0.github.io/cryptocurrency/2021/04/25/harvest-finance-better-bsc-low-fees
---
![harvest-finance-bsc-summary.PNG](https://images.hive.blog/DQmTpDGUXVe6pRMrbeucB7EPBqZ5SFFZ3tyDKLKvANSM6vu/harvest-finance-bsc-summary.PNG)

With the release of other smart chains, yield farming becomes more affordable for average users. Although Binance Smart Chain was not the first to follow Ethereum's path, it was the spark for the new farming craziness because of cheap fees in average ¢10 per transaction. Still, do you know that using Harvest Finance is better than farming directly?

## Compounding

While in [my first article about Harvest Finance](https://hive.blog/defi/@fajar.purnama/the-crops-utilities-a-homework-for-defi-farming?ref=fajar.purnama), I wrote the difference between annual per rate (APR) and annual per yield (APY). To review it simply, APR is the interest generated annually while APY includes all the interest generated by investing previously generated interest. In traditional certificate of deposit, we may choose to claim interest montly and in APY we deposit those interest as well to earn more interests. While in my first post about Harvest Finance I covered the concept of APY but did not relate it to decentralized finance (DeFi) technicality yet.

Executing smart contract costs gas fees and the two gas fees that we definitely cannot avoid are approving contract and depositing assets to farms. Other gas fees can actually be avoided by automating the process, in other words include the process in a single smart contract and not separate. Let's take a look a three scenarios of an example that we want to reinvest our earned interest everyday:

### The Legacy Process

![cake-pool-legacy.png](https://images.hive.blog/DQmdKWWTQ5gihVsL3uySiEoWMAmyoi74qapaV5Jc4oCzii3/cake-pool-legacy.png)

1.  Harvesting the interest cost $0.1 gas fee.
2.  Reinvesting the interest cost $0.1 gas fee.

Everyday costs $0.1 * 2 = $0.2 gas fee to reinvest. In a year, will cost $0.2 * 365 = $73 gas fees.

### The Current Process

![cake-pool.PNG](https://images.hive.blog/DQmNPsbhi1GHNxthPND9ab6fH6d6ynxgX1T6UrE4LoZQEy7/cake-pool.PNG)

1.  Reinvesting the interest cost $0.1 gas fee.

Today, almost every farming platform have the "compound" button where we no longer need to spend fee to harvest before reinvesting. Everyday costs $0.1 gas fee to reinvest. In a year, will cost $0.1 * 365 = $36.5 gas fees which reduces the costs by half.

### Auto Compounding

Let us say the the smart contract auto harvest and reinvest our interest daily. Therefore, no need to spend gas fees which reduces the costs to zero. This auto compounding the basic feature that is available in Harvest Finance though I have not read yet every when the smart contract harvest and reinvest.

## More Strategies

If I am not wrong or assuming this is the case in this article as it does change the logic of the explanation, let us say that highest amount CAKE token are given to those who provided liquidity between BNB and CAKE with APR at the time of this writing is 82% * 40 in [Pancake Swap](https://pancakeswap.finance/). After this exists 3 approaches:

### Compound To CAKE Pool

1.  Harvesting CAKE cost $0.1 gas fee.
2.  Reinvesting CAKE cost $0.1 gas fee.

Doing this cost $0.2 gas fee for reinvesting the CAKE into CAKE pool of 92% APR.

### Compound To BNB-CAKE Pool

![bnb-cake.PNG](https://images.hive.blog/DQmZYpbj5tU6kRXBmybhktgtTAndYs2YZhSiWKozeK1Pmv8/bnb-cake.PNG)

1.  Harvesting CAKE cost $0.1 gas fee.
2.  Selling half of the CAKE to BNB cost $0.1 gas fee.
3.  Providing another BNB-CAKE liquidity cost $0.1 gas fee.
4.  Reinvesting BNB-CAKE LP token to farm cost $0.1 gas fee.

Doing this cost two times the gas fee $0.4 than the more simple staking the harvested CAKE into CAKE pool but note that this strategy can be more profitable because BNB-CAKE pool has an APR of 82% * 40 while CAKE POOL only has 92% APR.

### Trading Strategy

1.  Farm another asset that will go up in value cost $0.1 gas fee
2.  Harvest asset cost $0.1 gas fee
3.  Sell asset cost $0.1 gas fee
4.  repeat

In [my second article about Harvest Finance](https://leofinance.io/@fajar.purnama/should-we-farm-my-yield-farming-theoretical-calculation-opinion?ref=fajar.purnama), I emphasized the value of assets. Generally we want to farm an asset that is stable or better goes up in value. What I did not write is that the APR or APY dynamically changes when the asset value changes if the token emission rate does not change. A token that spikes up in value will also cause a spike in the APR and APY indicator.

## Why Harvest Finance is Better

![harvest-finance-bsc.PNG](https://images.hive.blog/DQmR47qs9P3p76Ptv5xgxacoFsGzdYsX4yZonr5UqpAAUaz/harvest-finance-bsc.PNG)

Harvest Finance provides auto compounding and high yield strategies. Not only that, we are also rewarded with FARM tokens for using Harvest Finance. Look forward as Harvest Finance is always researching better strategies.

## Finally Understand The Significance On Ethereum Farms

I never farmed on Ethereum because it is expensive and only knew the process theoretically. With [many cheaper smart chains](https://leofinance.io/@fajar.purnama/list-of-decentralized-exchanges-that-emerged-in-early-2021-outside-of-ethereum-with-affordable-fees?ref=fajar.purnama) today, [I finally started farming myself](https://leofinance.io/@fajar.purnama/list-of-yield-farming-craziness-dex-on-bsc-early-2021?ref=fajar.purnama) and learned the details that I missed when I was only reading articles. In Binance Smart Chain, Harvest Finance saves us around a hundred dollar assuming auto compounding everyday. Now let us go back to the old days why Harvest Finance was very valuable. In Binance Smart Chain, the average gas fee is $0.1 while in Ethereum the average gas fee is $50\. How about if we change the narrative of this article to Ethereum?

*   Daily liquidity process (BNB-CAKE equivalent strategy) a year costs $50 * 4 * 365 = $73000
*   Daily legacy process a year costs $50 * 2 * 365 = $36500
*   Daily current process a year costs $50 * 365 = $18250

Would you look at that, in Ethereum Harvest Finance potentially saves tens of thousands of dollars or the above strategy was never possible manually where farmers compound not daily but monthly or even longer and with Harvest Finance, higher APY was possible because of fee eliminations.

## This article was first published on [Publish0x](https://www.publish0x.com/0fajarpurnama0/why-harvest-finance-is-better-even-though-binance-smart-chai-xxwqnow?a=4oeEw0Yb0B&tid=github) and mirrored below:

*   [https://www.publish0x.com/0fajarpurnama0/why-harvest-finance-is-better-even-though-binance-smart-chai-xxwqnow?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/why-harvest-finance-is-better-even-though-binance-smart-chai-xxwqnow?a=4oeEw0Yb0B&tid=github)
*   [https://0darkking0.blogspot.com/2021/04/why-harvest-finance-is-better-even.html](https://0darkking0.blogspot.com/2021/04/why-harvest-finance-is-better-even.html)
*   [https://0fajarpurnama0.medium.com/why-harvest-finance-is-better-even-though-binance-smart-chain-low-fees-f40119731d8a](https://0fajarpurnama0.medium.com/why-harvest-finance-is-better-even-though-binance-smart-chain-low-fees-f40119731d8a)
*   [https://0fajarpurnama0.github.io/cryptocurrency/2021/04/25/harvest-finance-better-bsc-low-fees](https://0fajarpurnama0.github.io/cryptocurrency/2021/04/25/harvest-finance-better-bsc-low-fees)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/cryptocurrency/harvest-finance-better-bsc-low-fees](https://hicc.cs.kumamoto-u.ac.jp/~fajar/cryptocurrency/harvest-finance-better-bsc-low-fees)
*   [https://steemit.com/cryptocurrency/@fajar.purnama/why-harvest-finance-is-better-even-though-binance-smart-chain-low-fees?r=fajar.purnama](https://steemit.com/cryptocurrency/@fajar.purnama/why-harvest-finance-is-better-even-though-binance-smart-chain-low-fees?r=fajar.purnama)
*   [https://leofinance.io/@fajar.purnama/why-harvest-finance-is-better-even-though-binance-smart-chain-low-fees?ref=fajar.purnama](https://leofinance.io/@fajar.purnama/why-harvest-finance-is-better-even-though-binance-smart-chain-low-fees?ref=fajar.purnama)
*   [https://blurtter.com/cryptocurrency/@fajar.purnama/why-harvest-finance-is-better-even-though-binance-smart-chain-low-fees?referral=fajar.purnama](https://blurtter.com/cryptocurrency/@fajar.purnama/why-harvest-finance-is-better-even-though-binance-smart-chain-low-fees?referral=fajar.purnama)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/why-harvest-finance-is-better-even-though-binance-smart-chain-low-fees](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/why-harvest-finance-is-better-even-though-binance-smart-chain-low-fees)
*   [http://0fajarpurnama0.weebly.com/blog/why-harvest-finance-is-better-even-though-binance-smart-chain-low-fees](http://0fajarpurnama0.weebly.com/blog/why-harvest-finance-is-better-even-though-binance-smart-chain-low-fees)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/11-cryptocurrency/228-why-harvest-finance-is-better-even-though-binance-smart-chain-low-fees](https://0fajarpurnama0.cloudaccess.host/index.php/11-cryptocurrency/228-why-harvest-finance-is-better-even-though-binance-smart-chain-low-fees)
*   [https://read.cash/@FajarPurnama/why-harvest-finance-is-better-even-though-binance-smart-chain-low-fees-a6af7725](https://read.cash/@FajarPurnama/why-harvest-finance-is-better-even-though-binance-smart-chain-low-fees-a6af7725)
*   [https://www.uptrennd.com/post-detail/why-harvest-finance-is-better-even-though-binance-smart-chain-low-fees~ODg5NDAw](https://www.uptrennd.com/post-detail/why-harvest-finance-is-better-even-though-binance-smart-chain-low-fees~ODg5NDAw)
*   [https://trybe.one/why-harvest-finance-is-better-even-though-binance-smart-chain-low-fees](https://trybe.one/why-harvest-finance-is-better-even-though-binance-smart-chain-low-fees)
*   [https://www.floyx.com/article/0fajarpurnama0/why-harvest-finance-is-better-even-though-binance-0001c298d6](https://www.floyx.com/article/0fajarpurnama0/why-harvest-finance-is-better-even-though-binance-0001c298d6)
*   [https://markethive.com/0fajarpurnama0/blog/whyharvestfinanceisbettereventhoughbinancesmartchainlowfees](https://markethive.com/0fajarpurnama0/blog/whyharvestfinanceisbettereventhoughbinancesmartchainlowfees)