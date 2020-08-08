---
layout: post
title: Punishing Whale Transaction Through Algorithmic and Mathematical Fee
categories: cryptocurrency
tags: [cryptocurrency, whale, transaction fee, algorithm, mathematic]
---

<h2 id="algomathfee">Algorithmic and Mathematical Fee</h2>
<p>Transaction fees configured using algorithm and mathematic are able to control transactional behavior. Specifically in this concept, algorithm and mathematic are used to discourage whale transaction. One way to discourage whale transaction is to use exponential transaction fee:</p>

<ol>
    <li>Determine a cut off percentage fee for example in this case above 10% of total transaction is labeled as expensive and will be the cut off.</li>
    <li>Determine a cut off of the transaction amount for example in this case above 100 coins is labeled as whale transaction.</li>
    <li>Determine an exponential value that meets the above criteria where in this case is 1.0232.</li>
    <li>Fee = (transaction amount)<sup>1.0232</sup> % of transaction amount.</li>
</ol>

<figure>
    <img src="https://404store.com/2020/08/09/exponential.png" alt="https://file.army/i/BziRec7" />
    <figcaption>When a transaction is 100 coins the fee is 10% and it gets exponentially larger when the transaction amount increases. Quickly, it will reach 100% and an algorithm can be set that the maximum  transaction fee is 100%.</figcaption>
</figure>

<p>If this is satisfying then the configuration ends here. If not then more algorithm can be added. For example, we want to end the exponential punishment when the fee reaches 50%. We can stop it by putting a maximum fee of 50% or lighten punishment by changing the fee equation to linear or even lighter logarithmic when reaching 50%.</p>

<figure>
    <img src="https://404store.com/2020/08/09/exponentiallinearlogarithmic1.png" alt="https://file.army/i/BziRS1l" />
    <figcaption>For example, when the fee reaches 50%, the punishment is lighten using linear equation Fee = (transaction amount)*0.29 % of transaction amount or greatly lighten using logarithmic equation Fee = log<sub>1.108</sub>(transaction amount) % of transaction amount.</figcaption>
</figure>

<figure><img src="https://404store.com/2020/08/09/exponentiallinearlogarithmic2.png" alt="https://file.army/i/BziRIzs" />
    <figcaption>The possibility is endless for example the punishment is lighten to linear equation of (transaction amount)*0.29 of transaction amount when fee reaches 50% and further lighten when fee reaches 80% to logarithmic equation of log<sub>1.0736</sub>(transaction amount) % of transaction amount. Therefore calling all mathematician to contribute.</figcaption>
</figure>

<h2 id="timefee">Time Accumulation Fee</h2>
<p>Algorithmic and mathematical fee is not enough to prevent whale transaction because whales can just perform multiple small transaction. The only way to prevent this now is accumulation. The equation for this is Fee = equation(current transaction amount + all previous transaction amount) - previous fee or any better equation where the total fee should equal to the fee when all transactions are treated as single transaction.</p>

<p>If this rule is applied forever then it is the same as limiting the amount of transaction forever. Therefore, a time limit must be agreed upon. For example, the accumulation resets after one day. The longer the time, the more resilient to whale transaction but also the more the restriction. Calling all mathematician once again.</p>

<h2 id="thefee">What to do with the fee?</h2>
<p>The fees can either be:</p>
<ol>
    <li>distribute to all the holders</li>
    <li>distribute to certain holders only</li>
    <li>burned or deflated</li>
</ol>
<p>If distribution is chosed, the amount and method of distribution are also open for many possibilities.</p>
