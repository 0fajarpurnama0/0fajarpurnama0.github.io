---
layout: post
title: 	Is Zero Electricity Cost Cryptocurrency Mining Possible? Solar Power Bank on Single Board Computers 
categories: doctoral
tags: [cryptocurrency, litecoin, asus tinker board, single board computer, mining, arm, cpu, mali, gpu, futurebit moonlander 2, asic, usb, wattmeter, solar panel]
featuredimage: https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmQnn38BsWiJc9hbSsJiXZYNS8Pq2LYWHdTr65G1izLqUc/Solar-Power-Bank-Asus-Tinker-Board.jpg
description: The cost of electricity and internet remains a liability in households, but what if there is a method to zero electricity running cost?
canonicalurl: https://0fajarpurnama0.github.io/doctoral/2020/05/26/solar-powerbank-single-board-computer-mining
---

<iframe src="//www.slideshare.net/slideshow/embed_code/key/AFGWqYzmMBjh0j" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen=""></iframe>

<div style="margin-bottom:5px">**[Recruiting future backup cryptocurrency miners with solar power bank on single board computers](//www.slideshare.net/0DarkKing0/recruiting-future-backup-cryptocurrency-miners-with-solar-power-bank-on-single-board-computers "Recruiting future backup cryptocurrency miners with solar power bank on single board computers")** from **[Fajar Purnama](https://www.slideshare.net/0DarkKing0)**</div>

## Author

Fajar Purnama, Irwansyah, Muhammad Bagus Andra, and Tsuyoshi Usagawa

## Note

*   This paper was presented in _The 14th International Student Conference on Advanced Science and Technology (ICAST) at Kumamoto University, Japan, on 29th November 2019_ but was not published thus the copyright remained with me "Fajar Purnama" the main author where I have the authority to repost anywhere and I hereby declare to license it as _customized [CC-BY-SA](https://creativecommons.org/licenses/by-sa/4.0/)_ where you are also allowed to sell my contents but with a condition that you must mention that the free and open version is available here. In summary, the mention must contain the keyword "free" and "open" and the location such as the link to this content.
*   This is the original version of the paper. Due to my laboratory demand to emphasize education and a limitation of 2 A4 pages, some aspect related to the title were replaced with educational topics. If you want to see the modified one, it is available at [Reasearch Gate](https://www.researchgate.net/publication/337621315_Is_Zero_Electricity_Cost_Cryptocurrency_Mining_Possible_Solar_Power_Bank_on_Single_Board_Computers).
*   The presentation is available at [Slide Share](https://www.slideshare.net/0DarkKing0/recruiting-future-backup-cryptocurrency-miners-with-solar-power-bank-on-single-board-computers).

<div class="video-container"><iframe src="https://lbry.tv/$/embed/icast-2019-recruiting-future-backup/ba4f507b201baa7600c5909e008ad171da67b06c" alt="https://open.lbry.com/@0fajarpurnama0:e/icast-2019-recruiting-future-backup:b?r=HFYJXXYmtGXYyWB8pn7kxQLaYnk87aCF" allowfullscreen=""></iframe></div>

## Abstract

Bitcoin reaches $10000 per coins again, other cryptocurrency coins' value also drastically increases, but it does not mean that mining became profitable on personal level. The cost of electricity and internet remains a liability in households, but what if there is a method to zero that electricity running cost? The authors came up with an innovation of using solar panels to generate the electricity but even more so, a practical method that could easily be followed by average people. That method is the combination of solar panel, USB power bank, and USB powered computer devices which are usually smartphones and single board computers. The solar panel converts sun light into electricity and the power bank serves as the battery to store it which today's available power bank is able to power USB powered computer devices. This article contains a mixed short discussion of economics, environments, and innovative technologies.

## Introduction

It has been 11 years since Satoshi Nakamoto publish the bitcoin whitepaper [1]. Bitcoin made into the spotlight at the end of 2017 where the price of bitcoin peaked up to $20000 per coin. The bubble burst then which the price dropped down to $3000\. At the writing of this article, the price soars once again to $10000\. The rising price attracts many investors and the volatility attracts many traders. In other words, many people seek to own bitcoin and other cryptocurrency coins for profit.

Originally, these cryptocurrency coins were not meant as an investment instrument but a novel method for electronic transactions. While common electronic transaction needs a third party like banks and any other financial institutions to verify the transaction, cryptocurrency coins do not need a third party. However, this is a discussion for another time due to the limited space of this article.

Straight to the point, this article discusses methods to get profitability from mining. The technical detail is too much to be discussed on this article but financially, mining is the process of obtaining cryptocurrency coin by donating computational power to the network. Electricity cost is the biggest problem therefore, majority of miners seeks a renewable source of energy such as hydro, solar, and wind [3]. This article implements the solar energy for electricity generation but different from other, this work is scaled to household size and primarily target general public. Since the targets are households, the objective of this work is to assemble a solar powered mining machine where the materials are easy to get and the methods are easy to follow. This article innovation is a solar power bank USB powered computer devices, due to limited space of this article, only a single board computer brand Asus Tinker Board (ATB) is demonstrated. Further discussion is about how profitable this innovation is.

## Materials and Method

Table 1\. Materials necessary to execute the concept of this work.

<style type="text/css">.tg {border-collapse:collapse;border-spacing:0;} .tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px; overflow:hidden;padding:10px 5px;word-break:normal;} .tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px; font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;} .tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top} .tg .tg-amwm{font-weight:bold;text-align:center;vertical-align:top} .tg .tg-0lax{text-align:left;vertical-align:top}</style>

<table class="tg">

<thead>

<tr>

<th class="tg-amwm">Materials</th>

<th class="tg-amwm">Specification</th>

<th class="tg-amwm">Price</th>

</tr>

</thead>

<tbody>

<tr>

<td class="tg-1wig">Solar Panel</td>

<td class="tg-0lax">20W, 5V, 10 .56 cm<sup>2</sup></td>

<td class="tg-0lax">~ $ 15</td>

</tr>

<tr>

<td class="tg-1wig">Power Bank</td>

<td class="tg-0lax">5V, 1-2 A, 20 Ah</td>

<td class="tg-0lax">~ $ 20</td>

</tr>

<tr>

<td class="tg-1wig">Two Type C USB Cable</td>

<td class="tg-0lax"></td>

<td class="tg-0lax">~ $ 5</td>

</tr>

<tr>

<td class="tg-1wig">Internet Connection</td>

<td class="tg-0lax">~1MBps (3GB quota)</td>

<td class="tg-0lax">~ $ 8.95</td>

</tr>

<tr>

<td class="tg-1wig">USB Computer Devices</td>

<td class="tg-0lax">Asus Tinker Board (ATB)</td>

<td class="tg-0lax">~ $ 50</td>

</tr>

<tr>

<td class="tg-1wig">ASIC USB (additional)</td>

<td class="tg-0lax">Futurebit Moonlander 2</td>

<td class="tg-0lax">~ $ 60</td>

</tr>

</tbody>

</table>

The first step is to build the device. The materials necessary can be referred at Table 1 which can be bought at an electronic shop or online shop. Once the materials are available, they should be assembled as shown on Figure 1\. The solar panel is used to charge the power bank and should be exposed to sunlight. The power bank should be used to power the USB computer devices and the device that provides Internet connection if necessary.

![https://file.army/i/BzOyC4v](https://404store.com/2020/05/26/Solar-Power-Bank-Asus-Tinker-Board-min.jpg) 

Fig. 1 The Web Application Architecture, the client side is the representation interface which is an HTML page embedded with Javascript a client side programming language to capture the reading pattern of the user. The server side is the web API written using server side programming language to retrieve the captured data from the client and put them on the database. The web API can also show the data that is already on the database.

The second step is to build the software. Although other computers and accessories are not necessary during mining, they are necessary during building the software. Generally, there are four steps in building the software which are 1) installing the operating system, 2) installing the miner and its dependencies, 3) choose a coin to mine, 4) joining a pool or setup solo mining, and 5) creating a cryptocurrency wallet. The third step is mining which is the last step.

## Discussion

<div class="video-container"><iframe src="https://youtube.com/embed/Uiaj-Q9vR_0" alt="https://youtu.be/Uiaj-Q9vR_0" allowfullscreen=""></iframe></div>

Table 2\. Asus tinker board average resource consumption.

<style type="text/css">.tg {border-collapse:collapse;border-spacing:0;} .tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px; overflow:hidden;padding:10px 5px;word-break:normal;} .tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px; font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;} .tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top} .tg .tg-amwm{font-weight:bold;text-align:center;vertical-align:top} .tg .tg-0lax{text-align:left;vertical-align:top}</style>

<table class="tg">

<thead>

<tr>

<th class="tg-amwm">Device</th>

<th class="tg-amwm">CPU</th>

<th class="tg-amwm">RAM</th>

<th class="tg-amwm">Data Rate</th>

<th class="tg-amwm">Power</th>

</tr>

</thead>

<tbody>

<tr>

<td class="tg-1wig">ATB CPU</td>

<td class="tg-0lax">100 %</td>

<td class="tg-0lax">205 MB</td>

<td class="tg-0lax">0.626 kBps</td>

<td class="tg-0lax">3.55 w</td>

</tr>

<tr>

<td class="tg-1wig">ATB GPU</td>

<td class="tg-0lax">25 %</td>

<td class="tg-0lax">800 MB</td>

<td class="tg-0lax">0.53 kBps</td>

<td class="tg-0lax">4.29 w</td>

</tr>

<tr>

<td class="tg-1wig">ASIC USB</td>

<td class="tg-0lax">2 %</td>

<td class="tg-0lax">200 MB</td>

<td class="tg-0lax">1.064 kBps</td>

<td class="tg-0lax">8.21 w</td>

</tr>

</tbody>

</table>

This discussion contains the limit of the solar panel, the overall resource usage of mining, and the financial report. On Table 2, the power consumption shows that the power bank on Table 1 can last from 12 to 33 hours. The solar panel in average will take 30 hours for the power bank to fully charge. During mining, the power usage on Table 2 is larger than the generated power by the solar panel on Table 3 which makes charging on the fly less recommendable.

<div class="video-container"><iframe src="https://youtube.com/embed/f_tPb3wbXeg" alt="https://youtu.be/f_tPb3wbXeg" allowfullscreen=""></iframe></div>

Table 3\. Solar power generated daily.

<style type="text/css">.tg {border-collapse:collapse;border-spacing:0;} .tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px; overflow:hidden;padding:10px 5px;word-break:normal;} .tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px; font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;} .tg .tg-baqh{text-align:center;vertical-align:top} .tg .tg-amwm{font-weight:bold;text-align:center;vertical-align:top}</style>

<table class="tg">

<thead>

<tr>

<th class="tg-amwm">Average Input</th>

<th class="tg-amwm">Daily Sunlight</th>

<th class="tg-amwm">Electricity Daily</th>

</tr>

</thead>

<tbody>

<tr>

<td class="tg-baqh">3.825 watt (w)</td>

<td class="tg-baqh">12 hour (h)</td>

<td class="tg-baqh">45.9 watt hour (wh)</td>

</tr>

</tbody>

</table>

The financial report is the main interest for the public where the main question is how profitable this method is which is described on Table 4\. The only asset is the computer device itself which generates income while the others are liabilities which are the running cost where the popular ones are electricity and Internet cost. The variables that determines the mining income are described on Table 5 where all variables are dependent on the coin where on this case, Litecoin is used.

Table 4\. Profitability table.

<style type="text/css">.tg {border-collapse:collapse;border-spacing:0;} .tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px; overflow:hidden;padding:10px 5px;word-break:normal;} .tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px; font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;} .tg .tg-baqh{text-align:center;vertical-align:top} .tg .tg-amwm{font-weight:bold;text-align:center;vertical-align:top} .tg .tg-0lax{text-align:left;vertical-align:top}</style>

<table class="tg">

<thead>

<tr>

<th class="tg-amwm" colspan="2">Variable</th>

<th class="tg-amwm">Category</th>

<th class="tg-amwm">Value</th>

</tr>

</thead>

<tbody>

<tr>

<td class="tg-0lax" rowspan="3">Mining income:</td>

<td class="tg-0lax">ATB CPU</td>

<td class="tg-baqh" rowspan="3">Asset</td>

<td class="tg-0lax">LTC 10<sup>-12</sup> x17/s</td>

</tr>

<tr>

<td class="tg-0lax">ATB GPU</td>

<td class="tg-0lax">LTC 10<sup>-11</sup> x 2/s</td>

</tr>

<tr>

<td class="tg-0lax">ASIC USB</td>

<td class="tg-0lax">LTC 10<sup>-9</sup> x 12/s</td>

</tr>

<tr>

<td class="tg-0lax" colspan="2">Electricity</td>

<td class="tg-baqh">Liability</td>

<td class="tg-0lax">$ 0.18 / kwh [5]</td>

</tr>

<tr>

<td class="tg-0lax" colspan="2">Internet</td>

<td class="tg-baqh">Liability</td>

<td class="tg-0lax">$ 8.95 / month (3.1 GB)</td>

</tr>

</tbody>

</table>

Table 5\. Variables that affects mining income.

<style type="text/css">.tg {border-collapse:collapse;border-spacing:0;} .tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px; overflow:hidden;padding:10px 5px;word-break:normal;} .tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px; font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;} .tg .tg-amwm{font-weight:bold;text-align:center;vertical-align:top} .tg .tg-0lax{text-align:left;vertical-align:top}</style>

<table class="tg">

<thead>

<tr>

<th class="tg-amwm" colspan="2">Variable</th>

<th class="tg-amwm">Value</th>

</tr>

</thead>

<tbody>

<tr>

<td class="tg-0lax">Hash rate</td>

<td class="tg-0lax">Asus Tinker Board CPU</td>

<td class="tg-0lax">2.06 kH/s</td>

</tr>

<tr>

<td class="tg-0lax"></td>

<td class="tg-0lax">Asus Tinker Board GPU</td>

<td class="tg-0lax">24.2 kH/s</td>

</tr>

<tr>

<td class="tg-0lax"></td>

<td class="tg-0lax">Futurebit Moonlander 2</td>

<td class="tg-0lax">3.3 MH/s</td>

</tr>

<tr>

<td class="tg-0lax" colspan="2">Block difficulty</td>

<td class="tg-0lax">15,608,688</td>

</tr>

<tr>

<td class="tg-0lax" colspan="2">Block reward</td>

<td class="tg-0lax">LTC 25</td>

</tr>

<tr>

<td class="tg-0lax" colspan="2">Coin price</td>

<td class="tg-0lax">LTC 1 =$ 94.22</td>

</tr>

<tr>

<td class="tg-0lax" colspan="2">Current Profit</td>

<td class="tg-0lax">2.7809 USD/Day for 1 GHash/s</td>

</tr>

</tbody>

</table>

The hash rate is dependent on the hardware and software where higher hash rate means higher income. The block difficulty depends on the total miners but more accurately the total hash rate on the network. From financial point of view, the block difficulty represents the competition where the higher the block difficulty, the less the income. The block reward is the reward for solving blocks where higher reward means higher income. The coin value or coin price is a highly debated topic up to today. Discussing the correct value of coins is too much to be put on this article. For now, this article refers the coin price to united state dollars (USD). The formula to calculate the amount of bitcoin obtained from mining can be seen on Formula 1\. For other coins, the formula can be slightly different but should follow similar concept to Formula 1.

Expected Payout in BTC = HtB/2<sup>23</sup>D [3] (1)

H = hashrate, T = time, B = block reward, D = block difficulty

he main discussion of this article is about Table 6\. Table 6 shows how much money can be earned using this articles method, but the Internet cost is omitted for this article to limit complication because in reality the Internet is not only used for mining but also for all other activities. Additionally, the profit of regular mining by paying electricity is compared to using this article's method by generating own electricity with solar panel power bank. For regular mining instead is not a profit but a loss. For mining with this article's method is profitable but limited to the daily mining time because of the generated power on Table 3 is not enough to run the mining for the whole day. From the data on Table 2 and Table 3, it is possible to calculate the daily mining time on Table 6\. Thus, the daily income is the multiplication of Table 4 mining income converted in USD and the daily mining time on Table 6\. The overall financial result of mining using this article's method is that the method is able to reap profit where usually it is not profitable.

Table 6\. Income rate of mining with paying electricity versus getting electricity from solar panel.

<style type="text/css">.tg {border-collapse:collapse;border-spacing:0;} .tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px; overflow:hidden;padding:10px 5px;word-break:normal;} .tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px; font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;} .tg .tg-baqh{text-align:center;vertical-align:top} .tg .tg-amwm{font-weight:bold;text-align:center;vertical-align:top}</style>

<table class="tg">

<thead>

<tr>

<th class="tg-amwm">Device</th>

<th class="tg-amwm">Daily Income with Electricity</th>

<th class="tg-amwm">Daily Mining Time Solar</th>

<th class="tg-amwm">Daily Income with Solar Power Bank</th>

</tr>

</thead>

<tbody>

<tr>

<td class="tg-amwm">ATB CPU</td>

<td class="tg-baqh">$ -0.015322158</td>

<td class="tg-baqh">12 h 56 m</td>

<td class="tg-baqh">$ 0.000007456</td>

</tr>

<tr>

<td class="tg-amwm">ATB GPU</td>

<td class="tg-baqh">$ -0.018370232</td>

<td class="tg-baqh">10 h 42 m</td>

<td class="tg-baqh">$ 0.000072479</td>

</tr>

<tr>

<td class="tg-amwm">ASIC USB</td>

<td class="tg-baqh">$ -0.02596304</td>

<td class="tg-baqh">5 h 35 m</td>

<td class="tg-baqh">$ 0.002218685</td>

</tr>

</tbody>

</table>

## Conclusion

This article successfully implemented mining with a single board computer without paying electricity cost by harvesting solar energy. The method is well suited for households because the materials are affordable and easy to obtain, and the assembly process are not complicated. Although the financial report shows profit, but the profit is extremely small that it would take a year to obtain a dollar. The problem is Litecoin. In this work, Litecoin is chosen because it is mineable on all CPU, GPU, and ASIC. In reality, different hardware have different profitable coins for mining. For example mining Magicoin on CPU can profit $ 0.0026 a day which is 349 times more profitable that Litecoin. Other factors are speculative price of the coins, for example nobody predicted that the price of bitcoin could rise from $1 to $10000 in ten years. This work is only an introduction where many possibilities are not yet explored. Other than constantly searching and switching to the right coin to mine, device expansion may increase income. Also, there are other types of renewable energies that are still not utilized. Aside from financial, this innovation is good for education, cryptocurrency contribution, and hobby.

## Reference

1.  Nakamoto S. Bitcoin: A peer-to-peer electronic cash system, 2008.
2.  Bendiksen, C. Surprise: Majority of BTC Energy Sourced from Hydro / Wind / Solar ♻. Medium, CoinShares, 2019 June 06, medium.com/coinshares/surprise-majority-of-btc-energy-sourced-from-hydro-wind-solar-49f73839aec6.
3.  Rosenfeld M. Analysis of bitcoin pooled mining reward systems. arXiv preprint arXiv:1112.4980\. 2011 Dec 21.

<div class="video-container"><iframe src="https://lbry.tv/$/embed/recruiting-future-backup-cryptocurrency/f717c35a6fb9634251e8e147ecd157fa4d0e6bb8" alt="https://open.lbry.com/@0fajarpurnama0:e/recruiting-future-backup-cryptocurrency:f?r=HFYJXXYmtGXYyWB8pn7kxQLaYnk87aCF" allowfullscreen=""></iframe></div>

## Mirror

*   [https://www.publish0x.com/0fajarpurnama0/is-zero-electricity-cost-cryptocurrency-mining-possible-sola-xqokmvl?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/0fajarpurnama0/is-zero-electricity-cost-cryptocurrency-mining-possible-sola-xqokmvl?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/doctoral/2020/05/26/solar-powerbank-single-board-computer-mining](https://0fajarpurnama0.github.io/doctoral/2020/05/26/solar-powerbank-single-board-computer-mining)
*   [https://medium.com/@0fajarpurnama0/is-zero-electricity-cost-cryptocurrency-mining-possible-solar-power-bank-on-single-board-computers-39d9cf95d661](https://medium.com/@0fajarpurnama0/is-zero-electricity-cost-cryptocurrency-mining-possible-solar-power-bank-on-single-board-computers-39d9cf95d661)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/doctoral/solar-powerbank-single-board-computer-mining](https://hicc.cs.kumamoto-u.ac.jp/~fajar/doctoral/solar-powerbank-single-board-computer-mining)
*   [https://0fajarpurnama0.tumblr.com/post/619119411157155840/is-zero-electricity-cost-cryptocurrency-mining](https://0fajarpurnama0.tumblr.com/post/619119411157155840/is-zero-electricity-cost-cryptocurrency-mining)
*   [https://0darkking0.blogspot.com/2020/05/is-zero-electricity-cost-cryptocurrency.html](https://0darkking0.blogspot.com/2020/05/is-zero-electricity-cost-cryptocurrency.html)
*   [https://hive.blog/cryptocurrency/@fajar.purnama/is-zero-electricity-cost-cryptocurrency-mining-possible-solar-power-bank-on-single-board-computers?r=fajar.purnama](https://hive.blog/cryptocurrency/@fajar.purnama/is-zero-electricity-cost-cryptocurrency-mining-possible-solar-power-bank-on-single-board-computersr=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/43-is-zero-electricity-cost-cryptocurrency-mining-possible-solar-power-bank-on-single-board-computers](https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/43-is-zero-electricity-cost-cryptocurrency-mining-possible-solar-power-bank-on-single-board-computers)
*   [https://steemit.com/cryptocurrency/@fajar.purnama/is-zero-electricity-cost-cryptocurrency-mining-possible-solar-power-bank-on-single-board-computers?r=fajar.purnama](https://steemit.com/cryptocurrency/@fajar.purnama/is-zero-electricity-cost-cryptocurrency-mining-possible-solar-power-bank-on-single-board-computers?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/is-zero-electricity-cost-cryptocurrency-mining-possible-solar-power-bank-on-single-board-computers](http://0fajarpurnama0.weebly.com/blog/is-zero-electricity-cost-cryptocurrency-mining-possible-solar-power-bank-on-single-board-computers)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/is-zero-electricity-cost-cryptocurrency-mining-possible-solar-power-bank-on-single-board-computers](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/is-zero-electricity-cost-cryptocurrency-mining-possible-solar-power-bank-on-single-board-computers)
