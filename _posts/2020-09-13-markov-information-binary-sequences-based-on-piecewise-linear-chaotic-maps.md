---
layout: post
title: Markov Information Binary Sequences Based on Piecewise Linear Chaotic Maps
categories: masters
tags: [math, binary, chaos, piecewise, markov, assignment, random, engineering, science, technology]
featuredimage: https://steemitimages.com/640x0/https://images.blurt.buzz/DQmZNo7vmJhBrC73MyvUvSgHADPnEHGCjKQdwe4YiEmWnU1/Figure%203b.%20map%20p1%20=%200.9%20and%20p2%20=%200.8%20edit.png
description: Uses piecewise linear chaotic binary sequence which is more complex than skew tent map but allows various map design for chaotic sequences.
canonicalurl: https://0fajarpurnama0.github.io/masters/2020/09/13/markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps
---
#### 0\. Note

This is the third assignment from my Masters Applied Digital Information Theory Course which has never been published anywhere and I, as the author and copyright holder, license this assignment customized CC-BY-SA where anyone can share, copy, republish, and sell on condition to state my name as the author and notify that the original and open version available here.

## 1\. Introduction

On the [first assignment](https://0fajarpurnama0.github.io/masters/2020/09/11/chaotic-real-valued-sequences-by-skew-tent-map) we produced a chaotic sequence based skew tent map by showing that output sequence is uncontrollable as on the chaos theory. A large sequence produced by skew tent map is uniformly distributed. On the [second assignment](https://0fajarpurnama0.github.io/masters/2020/09/12/chaotic-and-memoryless-binary-sequences-based-on-skew-tent-maps) we produce a memoryless binary sequence based on the first assignment's skew tent map based chaotic sequence. The probability of 0, 1, 00, 01, 10, 11, and the Markov chain is analyze. Finally the entropy is calculated based on the critical points of each data and find the correlation between the entropy and expected compression ratio. This time the same method on assignment 2 is used but change the assignment 1 of not using skew tent map but piecewise linear map.

## 2\. Piecewise Linear Chaotic Map

![Markov's Chain](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmSbHzMM8BVha1nY8dzgDqgZ6RNC8Fp5iovR4ECiUp5wGu/Figure%203.%20Markov's%20Chain.PNG)

Figure 1\. Markov's Chain



The design procedure of Markov Source we choose 4 values p1, and p2 based on Figure 1\. Then can obtain the value c (steady state probability) with the formula c=P(0)=P2/(P1+P2), and then we can find the slope a=1/(1-(p1+p2)). The limitation here is we cannot choose the value that satisfy p1+p2 = 1\. We are now ready to design the chaotic map. Basic knowledge on line equation is necessary here the one that refers to the equation y = ax + d where a is the slope that we calculated. There will be 3 lines and at least a positive and negative must be use. Each line we calculate its slope. For Figure 2 we calculate slope a = (y2 – y1)/(x2 – x1). For a=(c-0)/(c-c1)from point x,y of (c1,0) and (c,c). From the equation we can define c1=c-c/a. There's also another slope for a=(1-c)/(c2-c)from point (c,c) and (c2,1) which then we can define c2=c+(1-c)/a. With the first line as negative slope the length proportion of c1:d1 = 1:1-c thus d1 = c1(1-c), and for the third line also negative slope 1-c2:1-d2 = 1:c which we can define d2 = 1+(1-c)c. That's almost all the equation we need, next is to find slope a1 and a2.

![Figure 2a. map p1 = 0.8 and p2 = 0.1 edit +.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmb4t4oNhb791AYHv84o7rh1XxQMp1dGiyWrNndGaimdmi/Figure%202a.%20map%20p1%20=%200.8%20and%20p2%20=%200.1%20edit%20+.png)

Figure 2a. Plot of p1 = 0.8 , p2 = 0.1

![Figure 2b. map p1 = 0.1 and p2 = 0.8 edit.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmZ6wJHeiuZZ1Swee42L8eS6UHqFP5ercM3bjj9696CTrR/Figure%202b.%20map%20p1%20=%200.1%20and%20p2%20=%200.8%20edit.png)

Figure 2b. Plot of p1 = 0.1, p2 = 0.8



For both figure the method to find a1 and a3 is the same which is by using 2 points (x1,y1) and (x2,y2) with calculation slope = (y2 – y1)/(x2 – x1). We use point (d1,c) and (c1,0) for a1\. a1=(0-c)/(c1-d1), as for a3 we use (c2,1) and (d2,c) a3=(c-1)/(d2-c2). Finally we can form each line y1, y2, and y3, using equation y – y1 = a(x – x1), but for the map y is regarded as t (it'll be t = a(x-x1) + y1). We then use the following equation to generate the chaotic sequence of p1+p2 < 1.

t = (a1(x-d1))+c for (0⩽x < c1)

t = a(x-c1) for (c1⩽x < c2)

t= a3(x-c2)+1 for (c2⩽x < 1)

For p1+p2 < 1 on the other hand have to change some equation to do the slope a is negative.

![Figure 3a. map p1 = 0.5 and p2 = 0.6 edit.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmQT1YCLsmLgw92grjNJY3G8BSPJCrET4io1XjhJq5JU8w/Figure%203a.%20map%20p1%20=%200.5%20and%20p2%20=%200.6%20edit.png)

Figure 3a. Plot of p1 = 0.5 , p2 = 0.6

![Figure 3b. map p1 = 0.9 and p2 = 0.8 edit.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmZNo7vmJhBrC73MyvUvSgHADPnEHGCjKQdwe4YiEmWnU1/Figure%203b.%20map%20p1%20=%200.9%20and%20p2%20=%200.8%20edit.png)

Figure 3b. Plot of p1 = 0.9, p2 = 0.8



On Figure 3 we change one slope for it to be positive, and here we chose a3\. Since the slope a2 changes to negative the equation c1 and c2 changes as well, a = (y2 – y1)/(x2 – x1) a=(c-1)/(c-c1)from point x,y of (c1,1) and (c,c). From the equation we can define c1=c-(c-1)/a. C2 changes as well a=(0-c)/(c2-c) from point (c2,0) and (c,c) which then we can define c2=c-c/a. The slope on a1 is still negative, so no changes for d1, but third line we change to positive slope 1-c2:1-d2 = 1:1-c which we can define d2 = 1-(1-c2)(1-c). The last change is on a3=(c-0)/(d2-dc) using point (c2,0) and (d2,c). Not to forget a changes slop recently so t had to be modified based on t = a(x-x1)+y1, the equation then becomes:

t = (a1(x-d1))+c for (0⩽x < c1)

t = a(x-c1)+1 for (c1⩽x < c2)

t = a3(x-c2) for (c2⩽x < 1)

Now we can generate the chaotic sequence on Figure 4\. We can see that for p1+p2 < 1 seems more periodic. Lastly on this section we would like to show that the distribution is uniform on Figure 5.

![Figure 4a. chaos sequence p1 = 0.8 and p2 = 0.1 also p1 = 0.1 and p2 = 0.8.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmNaeLrL4XtR4B89Eoey57VnDGX2jEXepCy9DbfJY28cAv/Figure%204a.%20chaos%20sequence%20p1%20=%200.8%20and%20p2%20=%200.1%20also%20p1%20=%200.1%20and%20p2%20=%200.8.png)

Figure 4a. Generated chaotic sequence of p1 = 0.8 p2 = 0.1 and p1 = 0.1 p2 = 0.8

![Figure 4b. chaos sequence p1 = 0.9 and p2 = 0.8 also p1 = 0.5 and p2 = 0.6.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmW4oiNphr1KdB5HL1ZHDunmeitxx6RnbumCU3iKGBjp6S/Figure%204b.%20chaos%20sequence%20p1%20=%200.9%20and%20p2%20=%200.8%20also%20p1%20=%200.5%20and%20p2%20=%200.6.png)

Figure 4b. Generated chaotic sequence of p1 = 0.5 p2 = 0.6 and p1 = 0.9 p2 = 0.8

![Figure 5a. Distribution of p1=0.1 p2=0.8 N=1000000.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmav7LkBdnuTRwF1qBz1PGiiNWxnAW7KyonvWnubwDW9hL/Figure%205a.%20Distribution%20of%20p1=0.1%20p2=0.8%20N=1000000.png)

Figure 5a. Uniform distribution of p1 = 0.1 p2 = 0.8 N = 1000000

![Figure 5b. Distribution of p1=0.9 p2=0.8 N=1000000.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmXmX8CRsjxyMHDQmnftwHXp9VV1FViDBivnHZ3gQgJFCn/Figure%205b.%20Distribution%20of%20p1=0.9%20p2=0.8%20N=1000000.png)

Figure 5b. Uniform distribution of p1 =0.9 p2 = 0.8 N = 1000000



## 3\. Binary Sequences

After that we do the same as assignment 2, generating the binary sequences and counting the 0s and 1s. The result below are as the theory where P(0)=c, P(1)=1-c, P(0|0)=1-p1, P(0|1)=p1, P(1|0)=p2, P(1|1)=1-p2, P(00)=P(0|0)*P(0), P(01)=P(0|1)*P(1), P(10)=P(1|0)*P(1), P(11)=P(1|1)*P(1).

<table border="">

<thead>

<tr>

<th>P1 = 0.1p2 = 0.8</th>

<th>Theory</th>

<th>Practice</th>

<th>P1 = 0.8p2 = 0.1</th>

<th>Theory</th>

<th>Practice</th>

</tr>

</thead>

<tbody>

<tr>

<td>0s</td>

<td>-</td>

<td>888925</td>

<td>0s</td>

<td>-</td>

<td>110631</td>

</tr>

<tr>

<td>1s</td>

<td>-</td>

<td>111076</td>

<td>1s</td>

<td>-</td>

<td>889370</td>

</tr>

<tr>

<td>00s</td>

<td>-</td>

<td>800154</td>

<td>00s</td>

<td>-</td>

<td>21997</td>

</tr>

<tr>

<td>01s</td>

<td>-</td>

<td>88770</td>

<td>01s</td>

<td>-</td>

<td>88634</td>

</tr>

<tr>

<td>10s</td>

<td>-</td>

<td>88770</td>

<td>10s</td>

<td>-</td>

<td>88634</td>

</tr>

<tr>

<td>11s</td>

<td>-</td>

<td>22306</td>

<td>11s</td>

<td>-</td>

<td>800735</td>

</tr>

<tr>

<td>P(0)</td>

<td>0.888889</td>

<td>0.888924</td>

<td>P(0)</td>

<td>0.111111</td>

<td>0.110631</td>

</tr>

<tr>

<td>P(1)</td>

<td>0.111111</td>

<td>0.111076</td>

<td>P(1)</td>

<td>0.888889</td>

<td>0.889369</td>

</tr>

<tr>

<td>P(00)</td>

<td>0.800000</td>

<td>0.800153</td>

<td>P(00)</td>

<td>0.022222</td>

<td>0.021997</td>

</tr>

<tr>

<td>P(01)</td>

<td>0.088889</td>

<td>0.088770</td>

<td>P(01)</td>

<td>0.088889</td>

<td>0.088634</td>

</tr>

<tr>

<td>P(10)</td>

<td>0.088889</td>

<td>0.088770</td>

<td>P(10)</td>

<td>0.088889</td>

<td>0.088634</td>

</tr>

<tr>

<td>P(11)</td>

<td>0.022222</td>

<td>0.022306</td>

<td>P(11)</td>

<td>0.800000</td>

<td>0.800734</td>

</tr>

<tr>

<td>P(0|0)</td>

<td>0.900000</td>

<td>0.900137</td>

<td>P(0|0)</td>

<td>0.200000</td>

<td>0.198832</td>

</tr>

<tr>

<td>P(0|1)</td>

<td>0.800000</td>

<td>0.799183</td>

<td>P(0|1)</td>

<td>0.100000</td>

<td>0.099659</td>

</tr>

<tr>

<td>P(1|0)</td>

<td>0.100000</td>

<td>0.099862</td>

<td>P(1|0)</td>

<td>0.800000</td>

<td>0.801168</td>

</tr>

<tr>

<td>P(1|1)</td>

<td>0.200000</td>

<td>0.200817</td>

<td>P(1|1)</td>

<td>0.900000</td>

<td>0.900340</td>

</tr>

<tr>

<td>Entrophy</td>

<td>0.497099</td>

<td>0.496884</td>

<td>Entrophy</td>

<td>0.497099</td>

<td>0.495759</td>

</tr>

<tr>

<td>Filesize (Byte)</td>

<td colspan="2">1,000,000</td>

<td>Filesize (Byte)</td>

<td colspan="2">1,000,000</td>

</tr>

<tr>

<td>Compressed File</td>

<td colspan="2">100296</td>

<td>Compressed File</td>

<td colspan="2">100037</td>

</tr>

<tr>

<td>Compression Rate</td>

<td colspan="2">0.1</td>

<td>Compression Rate</td>

<td colspan="2">0.1</td>

</tr>

<tr>

<td>P1 = 0.5p2 = 0.6</td>

<td>Theory</td>

<td>Practice</td>

<td>P1 = 0.9p2 = 0.8</td>

<td>Theory</td>

<td>Practice</td>

</tr>

<tr>

<td>0s</td>

<td>-</td>

<td>544416</td>

<td>0s</td>

<td>-</td>

<td>529516</td>

</tr>

<tr>

<td>1s</td>

<td>-</td>

<td>455585</td>

<td>1s</td>

<td>-</td>

<td>470485</td>

</tr>

<tr>

<td>00s</td>

<td>-</td>

<td>271392</td>

<td>00s</td>

<td>-</td>

<td>106222</td>

</tr>

<tr>

<td>01s</td>

<td>-</td>

<td>273024</td>

<td>01s</td>

<td>-</td>

<td>423294</td>

</tr>

<tr>

<td>10s</td>

<td>-</td>

<td>273024</td>

<td>10s</td>

<td>-</td>

<td>423293</td>

</tr>

<tr>

<td>11s</td>

<td>-</td>

<td>182561</td>

<td>11s</td>

<td>-</td>

<td>47191</td>

</tr>

<tr>

<td>P(0)</td>

<td>0.545455</td>

<td>0.544415</td>

<td>P(0)</td>

<td>0.529412</td>

<td>0.529515</td>

</tr>

<tr>

<td>P(1)</td>

<td>0.454545</td>

<td>0.455585</td>

<td>P(1)</td>

<td>0.470588</td>

<td>0.470485</td>

</tr>

<tr>

<td>P(00)</td>

<td>0.272727</td>

<td>0.271392</td>

<td>P(00)</td>

<td>0.105882</td>

<td>0.106222</td>

</tr>

<tr>

<td>P(01)</td>

<td>0.272727</td>

<td>0.273024</td>

<td>P(01)</td>

<td>0.423529</td>

<td>0.423294</td>

</tr>

<tr>

<td>P(10)</td>

<td>0.272727</td>

<td>0.273023</td>

<td>P(10)</td>

<td>0.423529</td>

<td>0.423293</td>

</tr>

<tr>

<td>P(11)</td>

<td>0.181818</td>

<td>0.182561</td>

<td>P(11)</td>

<td>0.047059</td>

<td>0.047191</td>

</tr>

<tr>

<td>P(0|0)</td>

<td>0.500000</td>

<td>0.498501</td>

<td>P(0|0)</td>

<td>0.200000</td>

<td>0.200602</td>

</tr>

<tr>

<td>P(0|1)</td>

<td>0.600000</td>

<td>0.599282</td>

<td>P(0|1)</td>

<td>0.900000</td>

<td>0.899697</td>

</tr>

<tr>

<td>P(1|0)</td>

<td>0.500000</td>

<td>0.501497</td>

<td>P(1|0)</td>

<td>0.800000</td>

<td>0.799396</td>

</tr>

<tr>

<td>P(1|1)</td>

<td>0.400000</td>

<td>0.400718</td>

<td>P(1|1)</td>

<td>0.100000</td>

<td>0.100303</td>

</tr>

<tr>

<td>Entropy</td>

<td>0.986796</td>

<td>0.986953</td>

<td>Entropy</td>

<td>0.602901</td>

<td>0.604017</td>

</tr>

<tr>

<td>Filesize (Byte)</td>

<td colspan="2">1,000,000</td>

<td>Filesize (Byte)</td>

<td colspan="2">1,000,000</td>

</tr>

<tr>

<td>Compressed File</td>

<td colspan="2">159550</td>

<td>Compressed File</td>

<td colspan="2">110189</td>

</tr>

<tr>

<td>Compression Rate</td>

<td colspan="2">0.16</td>

<td>Compression Rate</td>

<td colspan="2">0.11</td>

</tr>

</tbody>

</table>

We also perform entropy calculation of the generated binary sequence. We chose to compress the file into format “.tar.gz” one of famous compression in Linux, but this time we use the reversed formula of the second assignment for the compression rate CompressionRate=CompressedFile/OriginalFile thus got the reversed graph, although the meaning is still the same. The lower the compression rate the greater the compressed file, thus higher entropy limits the how far a file can be compressed as on Figure 6.

![Figure 6. Entrophy VS Compression Rate.png](https://steemitimages.com/640x0/https://images.blurt.buzz/DQmbviuLKrjgaPMHdQAqBPuYcf3FRfUjbs7zUxPjfT2Jbd2/Figure%206.%20Entrophy%20VS%20Compression%20Rate.png)

Figure 6\. Entropy Vs Compression Ratio



## 4\. Conclusion

Just as the second assignment the probability of 0s and 1s generated matched the theory. We use reversed equation for compression rate and the as expected the graph become backward thought it is the same thing that lower entropy allows greater compression. The difference in this assignment is that we used piecewise linear chaotic binary sequence which is more complex than skew tent map but allows various map design. This opens possibility to produce different kinds of sequences.

## 5\. Source Code

The source code again is written in Octave and Matlab type language. The script this time is manual so better edit the script and change the values of you want to use it. Next time I might consider uploading the program to available online.

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">close all
clear
clc

x = <span style="color: #0000DD; font-weight: bold">0</span>:.<span style="color: #0000DD; font-weight: bold">001</span>:<span style="color: #0000DD; font-weight: bold">1</span>;

p1 = <span style="color: #6600EE; font-weight: bold">0.9</span>; p2 = <span style="color: #6600EE; font-weight: bold">0.8</span>;
c = p2<span style="color: #333333">/</span>(p1<span style="color: #333333">+</span>p2);
a = <span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">/</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>(p1<span style="color: #333333">+</span>p2));

<span style="color: #008800; font-weight: bold">if</span> p1<span style="color: #333333">+</span>p2 <span style="color: #333333">&lt;</span> <span style="color: #0000DD; font-weight: bold">1</span> <span style="color: #888888">%positive slope</span>
 c1 = c<span style="color: #333333">-</span>(c<span style="color: #333333">/</span>a);
 c2 = c<span style="color: #333333">+</span>((<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>c)<span style="color: #333333">/</span>a );
 d1 = c1<span style="color: #333333">*</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>c); <span style="color: #888888">%(we chose negative slope)</span>
 d2 = <span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>((<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>c2)<span style="color: #333333">*</span>c); <span style="color: #888888">%(we chose negative slope)</span>
 
 a1 = <span style="color: #333333">-</span>c<span style="color: #333333">/</span>(c1<span style="color: #333333">-</span>d1); <span style="color: #888888">%slope a = y2 - y1 / x2 - x1 (we chose negative)</span>
 a2 = a; <span style="color: #888888">%positive slope</span>
 a3 = (c<span style="color: #333333">-</span><span style="color: #0000DD; font-weight: bold">1</span>)<span style="color: #333333">/</span>(d2<span style="color: #333333">-</span>c2); <span style="color: #888888">% (we chose negative slope)</span>
 
 <span style="color: #007020">i</span> = <span style="color: #0000DD; font-weight: bold">0</span>;
 
 <span style="color: #008800; font-weight: bold">for</span> <span style="color: #007020">i</span> = <span style="color: #0000DD; font-weight: bold">1</span>:<span style="color: #007020">length</span>(x)
  <span style="color: #008800; font-weight: bold">if</span> x(<span style="color: #007020">i</span>) <span style="color: #333333">&gt;</span>= <span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #333333">&amp;&amp;</span> x(<span style="color: #007020">i</span>) <span style="color: #333333">&lt;</span> c1
   t(<span style="color: #007020">i</span>) = (a1<span style="color: #333333">*</span>(x(<span style="color: #007020">i</span>)<span style="color: #333333">-</span>d1))<span style="color: #333333">+</span>c;
  <span style="color: #008800; font-weight: bold">elseif</span> x(<span style="color: #007020">i</span>) <span style="color: #333333">&gt;</span>= c1 <span style="color: #333333">&amp;&amp;</span> x(<span style="color: #007020">i</span>) <span style="color: #333333">&lt;</span> c2
   t(<span style="color: #007020">i</span>)  = a2<span style="color: #333333">*</span>(x(<span style="color: #007020">i</span>)<span style="color: #333333">-</span>c1);
  <span style="color: #008800; font-weight: bold">else</span>
   t(<span style="color: #007020">i</span>) = (a3<span style="color: #333333">*</span>(x(<span style="color: #007020">i</span>)<span style="color: #333333">-</span>c2))<span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>;
  <span style="color: #008800; font-weight: bold">end</span>
 <span style="color: #008800; font-weight: bold">end</span>
 figure
 plot(x,x,x,t,<span style="color: #0000DD; font-weight: bold">0</span>,c,c,<span style="color: #0000DD; font-weight: bold">0</span>,d1,<span style="color: #0000DD; font-weight: bold">0</span>,c1,<span style="color: #0000DD; font-weight: bold">0</span>,c2,<span style="color: #0000DD; font-weight: bold">0</span>,d2,<span style="color: #0000DD; font-weight: bold">0</span>);
 grid on;
 <span style="color: #888888">%title(&#39;p1 = 0.1 and p2 = 0.8&#39;);</span>
 xlabel(<span style="background-color: #fff0f0">&#39;x&#39;</span>);
 ylabel(<span style="background-color: #fff0f0">&#39;t&#39;</span>);
 <span style="color: #888888">%legend(&#39;reference&#39;, &#39;plot&#39;, &#39;c&#39;, &#39;c&#39;, &#39;d1&#39;, &#39;c1&#39;, &#39;c2&#39;, &#39;d2&#39;);</span>
 ylim([<span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #0000DD; font-weight: bold">1</span>]);
 
 N = <span style="color: #0000DD; font-weight: bold">1000000</span>;
 X(<span style="color: #0000DD; font-weight: bold">1</span>) = <span style="color: #6600EE; font-weight: bold">0.3</span>;
 
 <span style="color: #008800; font-weight: bold">for</span> <span style="color: #007020">i</span> = <span style="color: #0000DD; font-weight: bold">1</span>:N
  <span style="color: #008800; font-weight: bold">if</span> X(<span style="color: #007020">i</span>) <span style="color: #333333">&gt;</span>= <span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #333333">&amp;&amp;</span> X(<span style="color: #007020">i</span>) <span style="color: #333333">&lt;</span> c1
   X(<span style="color: #007020">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) = (a1<span style="color: #333333">*</span>(X(<span style="color: #007020">i</span>)<span style="color: #333333">-</span>d1))<span style="color: #333333">+</span>c;
  <span style="color: #008800; font-weight: bold">elseif</span> X(<span style="color: #007020">i</span>) <span style="color: #333333">&gt;</span>= c1 <span style="color: #333333">&amp;&amp;</span> X(<span style="color: #007020">i</span>) <span style="color: #333333">&lt;</span> c2
   X(<span style="color: #007020">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>)  = a2<span style="color: #333333">*</span>(X(<span style="color: #007020">i</span>)<span style="color: #333333">-</span>c1);
  <span style="color: #008800; font-weight: bold">else</span>
   X(<span style="color: #007020">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) = (a3<span style="color: #333333">*</span>(X(<span style="color: #007020">i</span>)<span style="color: #333333">-</span>c2))<span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>;
  <span style="color: #008800; font-weight: bold">end</span>
 <span style="color: #008800; font-weight: bold">end</span>

 figure
 plot(<span style="color: #0000DD; font-weight: bold">0</span>:<span style="color: #007020">length</span>(X)<span style="color: #333333">-</span><span style="color: #0000DD; font-weight: bold">1</span>,X);

 figure
 hist(X,x,<span style="color: #007020">length</span>(x));
 <span style="color: #888888">%title(&#39;p1=0.1 p2=0.8 N=1000000&#39;);</span>
 xlim([<span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #0000DD; font-weight: bold">1</span>]);
 ylim([<span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #0000DD; font-weight: bold">2</span>]);
 
 P0_theory = c;
 P1_theory = <span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>c;
 P1l0_theory = p1;
 P0l1_theory = p2;
 P0l0_theory = <span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>p1;
 P1l1_theory = <span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>p2;
 P01_theory = P0l1_theory<span style="color: #333333">*</span>P1_theory;
 P10_theory = P1l0_theory<span style="color: #333333">*</span>P0_theory;
 P00_theory = P0l0_theory<span style="color: #333333">*</span>P0_theory;
 P11_theory = P1l1_theory<span style="color: #333333">*</span>P1_theory;
 H_theory = ((p2<span style="color: #333333">/</span>(p1<span style="color: #333333">+</span>p2))<span style="color: #333333">*</span>((<span style="color: #333333">-</span>p1<span style="color: #333333">*</span><span style="color: #007020">log2</span>(p1))<span style="color: #333333">-</span>((<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>p1)<span style="color: #333333">*</span><span style="color: #007020">log2</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>p1)))) <span style="color: #333333">+</span> ((p1<span style="color: #333333">/</span>(p1<span style="color: #333333">+</span>p2))<span style="color: #333333">*</span>((<span style="color: #333333">-</span>p2<span style="color: #333333">*</span><span style="color: #007020">log2</span>(p2))<span style="color: #333333">-</span>((<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>p2)<span style="color: #333333">*</span><span style="color: #007020">log2</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>p2))));
 
 fprintf(<span style="background-color: #fff0f0">&#39;P(0) in theory is %f\n&#39;</span>, P0_theory);
 fprintf(<span style="background-color: #fff0f0">&#39;P(1) in theory is %f\n&#39;</span>, P1_theory);
 fprintf(<span style="background-color: #fff0f0">&#39;P(00) in theory is %f\n&#39;</span>, P00_theory);
 fprintf(<span style="background-color: #fff0f0">&#39;P(01) in theory is %f\n&#39;</span>, P01_theory);
 fprintf(<span style="background-color: #fff0f0">&#39;P(10) in theory is %f\n&#39;</span>, P10_theory);
 fprintf(<span style="background-color: #fff0f0">&#39;P(11) in theory is %f\n&#39;</span>, P11_theory);
 fprintf(<span style="background-color: #fff0f0">&#39;P(0|0) in theory is %f\n&#39;</span>, P0l0_theory);  
 fprintf(<span style="background-color: #fff0f0">&#39;P(0|1) in theory is %f\n&#39;</span>, P0l1_theory);
 fprintf(<span style="background-color: #fff0f0">&#39;P(1|0) in theory is %f\n&#39;</span>, P1l0_theory);
 fprintf(<span style="background-color: #fff0f0">&#39;P(1|1) in theory is %f\n&#39;</span>, P1l1_theory);  
 fprintf(<span style="background-color: #fff0f0">&#39;Entropy in theory is %f\n\n&#39;</span>, H_theory);
 t = c;
 binary = X <span style="color: #333333">&gt;</span>= t;
 save(&quot;binary_sequence.dat&quot;, &quot;binary&quot;);
 
 P0_practical = P1_practical = P00_practical = P01_practical = P10_practical = P11_practical = <span style="color: #0000DD; font-weight: bold">0</span>;
 
 <span style="color: #008800; font-weight: bold">for</span> <span style="color: #007020">i</span> = <span style="color: #0000DD; font-weight: bold">1</span>:<span style="color: #007020">length</span>(binary)
  <span style="color: #008800; font-weight: bold">if</span> binary(<span style="color: #007020">i</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>
   P0_practical <span style="color: #333333">+</span>= <span style="color: #0000DD; font-weight: bold">1</span>;
  <span style="color: #008800; font-weight: bold">else</span>
   P1_practical <span style="color: #333333">+</span>= <span style="color: #0000DD; font-weight: bold">1</span>;
  <span style="color: #008800; font-weight: bold">end</span>
  
  <span style="color: #008800; font-weight: bold">if</span> <span style="color: #007020">i</span> <span style="color: #333333">==</span> <span style="color: #007020">length</span>(binary)
   <span style="color: #008800; font-weight: bold">break</span>;
  <span style="color: #008800; font-weight: bold">end</span>
  
  <span style="color: #008800; font-weight: bold">if</span> binary(<span style="color: #007020">i</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #333333">&amp;&amp;</span> binary(<span style="color: #007020">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>
   P00_practical <span style="color: #333333">+</span>= <span style="color: #0000DD; font-weight: bold">1</span>;
  <span style="color: #008800; font-weight: bold">elseif</span> binary(<span style="color: #007020">i</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #333333">&amp;&amp;</span> binary(<span style="color: #007020">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">1</span>
   P01_practical <span style="color: #333333">+</span>= <span style="color: #0000DD; font-weight: bold">1</span>;
  <span style="color: #008800; font-weight: bold">elseif</span> binary(<span style="color: #007020">i</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">1</span> <span style="color: #333333">&amp;&amp;</span> binary(<span style="color: #007020">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>
   P10_practical <span style="color: #333333">+</span>= <span style="color: #0000DD; font-weight: bold">1</span>;
  <span style="color: #008800; font-weight: bold">else</span>
   P11_practical <span style="color: #333333">+</span>= <span style="color: #0000DD; font-weight: bold">1</span>;
  <span style="color: #008800; font-weight: bold">end</span>
 <span style="color: #008800; font-weight: bold">end</span>
 
 P0l0_practical = ((P00_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary))<span style="color: #333333">/</span>(P0_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary)));
 P0l1_practical = ((P01_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary))<span style="color: #333333">/</span>(P1_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary)));
 P1l0_practical = ((P10_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary))<span style="color: #333333">/</span>(P0_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary)));
 P1l1_practical = ((P11_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary))<span style="color: #333333">/</span>(P1_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary)));
 H_pratical = ((P0l1_practical<span style="color: #333333">/</span>(P1l0_practical<span style="color: #333333">+</span>P0l1_practical))<span style="color: #333333">*</span>((<span style="color: #333333">-</span>P1l0_practical<span style="color: #333333">*</span><span style="color: #007020">log2</span>(P1l0_practical))<span style="color: #333333">-</span>((P0l0_practical)<span style="color: #333333">*</span><span style="color: #007020">log2</span>(P0l0_practical)))) <span style="color: #333333">+</span> ((P1l0_practical<span style="color: #333333">/</span>(P1l0_practical<span style="color: #333333">+</span>P0l1_practical))<span style="color: #333333">*</span>((<span style="color: #333333">-</span>P0l1_practical<span style="color: #333333">*</span><span style="color: #007020">log2</span>(P0l1_practical))<span style="color: #333333">-</span>((P1l1_practical)<span style="color: #333333">*</span><span style="color: #007020">log2</span>(P1l1_practical))));
 
 fprintf(<span style="background-color: #fff0f0">&#39;The number of 0s = %d, P(0) in practice is %f\n&#39;</span>, P0_practical, P0_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary));
 fprintf(<span style="background-color: #fff0f0">&#39;The number of 1s = %d, P(1) in practice is %f\n&#39;</span>, P1_practical, P1_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary));
 fprintf(<span style="background-color: #fff0f0">&#39;The number of 00s = %d, P(00) in practice is %f\n&#39;</span>, P00_practical, P00_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary));
 fprintf(<span style="background-color: #fff0f0">&#39;The number of 01s = %d, P(01) in practice is %f\n&#39;</span>, P01_practical, P01_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary));
 fprintf(<span style="background-color: #fff0f0">&#39;The number of 10s = %d, P(10) in practice is %f\n&#39;</span>, P10_practical, P10_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary));
 fprintf(<span style="background-color: #fff0f0">&#39;The number of 11s = %d, P(11) in practice is %f\n&#39;</span>, P11_practical, P11_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary));
 fprintf(<span style="background-color: #fff0f0">&#39;P(0|0) in practice is %f\n&#39;</span>, P0l0_practical);  
 fprintf(<span style="background-color: #fff0f0">&#39;P(0|1) in practice is %f\n&#39;</span>, P0l1_practical);
 fprintf(<span style="background-color: #fff0f0">&#39;P(1|0) in practice is %f\n&#39;</span>, P1l0_practical);
 fprintf(<span style="background-color: #fff0f0">&#39;P(1|1) in practice is %f\n&#39;</span>, P1l1_practical);
 fprintf(<span style="background-color: #fff0f0">&#39;Entropy in practice is %f\n\n&#39;</span>, H_pratical);
 
<span style="color: #008800; font-weight: bold">elseif</span> p1<span style="color: #333333">+</span>p2 <span style="color: #333333">&gt;</span> <span style="color: #0000DD; font-weight: bold">1</span> <span style="color: #888888">% negative lope</span>
 c1 = c<span style="color: #333333">-</span>((c<span style="color: #333333">-</span><span style="color: #0000DD; font-weight: bold">1</span>)<span style="color: #333333">/</span>a);
 c2 = c<span style="color: #333333">-</span>(c<span style="color: #333333">/</span>a);

 d1 = c1<span style="color: #333333">*</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>c); <span style="color: #888888">% we chose negative slope</span>
 d2 = <span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>((<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>c2)<span style="color: #333333">*</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>c)); <span style="color: #888888">% we chose positive slope</span>

 a1 = <span style="color: #333333">-</span>c<span style="color: #333333">/</span>(c1<span style="color: #333333">-</span>d1); <span style="color: #888888">%slope a = y2 - y1 / x2 - x1 (we chose negative)</span>
 a2 = a; <span style="color: #888888">% negative lope</span>
 a3 = c<span style="color: #333333">/</span>(d2<span style="color: #333333">-</span>c2); <span style="color: #888888">%(we chose negative)</span>

 <span style="color: #008800; font-weight: bold">for</span> <span style="color: #007020">i</span> = <span style="color: #0000DD; font-weight: bold">1</span>:<span style="color: #007020">length</span>(x)
  <span style="color: #008800; font-weight: bold">if</span> x(<span style="color: #007020">i</span>) <span style="color: #333333">&gt;</span>= <span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #333333">&amp;&amp;</span> x(<span style="color: #007020">i</span>) <span style="color: #333333">&lt;</span> c1
   t(<span style="color: #007020">i</span>) = (a1<span style="color: #333333">*</span>(x(<span style="color: #007020">i</span>)<span style="color: #333333">-</span>d1))<span style="color: #333333">+</span>c;
  <span style="color: #008800; font-weight: bold">elseif</span> x(<span style="color: #007020">i</span>) <span style="color: #333333">&gt;</span>= c1 <span style="color: #333333">&amp;&amp;</span> x(<span style="color: #007020">i</span>) <span style="color: #333333">&lt;</span> c2
   t(<span style="color: #007020">i</span>)  =(a2<span style="color: #333333">*</span>(x(<span style="color: #007020">i</span>)<span style="color: #333333">-</span>c1))<span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>;
  <span style="color: #008800; font-weight: bold">else</span>
   t(<span style="color: #007020">i</span>) = a3<span style="color: #333333">*</span>(x(<span style="color: #007020">i</span>)<span style="color: #333333">-</span>c2);
  <span style="color: #008800; font-weight: bold">end</span>
 <span style="color: #008800; font-weight: bold">end</span>
 figure
 plot(x,x,x,t,<span style="color: #0000DD; font-weight: bold">0</span>,c,c,<span style="color: #0000DD; font-weight: bold">0</span>,d1,<span style="color: #0000DD; font-weight: bold">0</span>,c1,<span style="color: #0000DD; font-weight: bold">0</span>,c2,<span style="color: #0000DD; font-weight: bold">0</span>,d2,<span style="color: #0000DD; font-weight: bold">0</span>);
 grid on;
 <span style="color: #888888">%title(&#39;p1 = 0.9 and p2 = 0.8&#39;);</span>
 xlabel(<span style="background-color: #fff0f0">&#39;x&#39;</span>);
 ylabel(<span style="background-color: #fff0f0">&#39;t&#39;</span>);
 <span style="color: #888888">%legend(&#39;reference&#39;, &#39;plot&#39;, &#39;c&#39;, &#39;c&#39;, &#39;d1&#39;, &#39;c1&#39;, &#39;c2&#39;, &#39;d2&#39;);</span>
 ylim([<span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #0000DD; font-weight: bold">1</span>]);
 
 N = <span style="color: #0000DD; font-weight: bold">1000000</span>;
 X(<span style="color: #0000DD; font-weight: bold">1</span>) = <span style="color: #6600EE; font-weight: bold">0.3</span>;

 <span style="color: #008800; font-weight: bold">for</span> <span style="color: #007020">i</span> = <span style="color: #0000DD; font-weight: bold">1</span>:N
  <span style="color: #008800; font-weight: bold">if</span> X(<span style="color: #007020">i</span>) <span style="color: #333333">&gt;</span>= <span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #333333">&amp;&amp;</span> X(<span style="color: #007020">i</span>) <span style="color: #333333">&lt;</span> c1
   X(<span style="color: #007020">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) = (a1<span style="color: #333333">*</span>(X(<span style="color: #007020">i</span>)<span style="color: #333333">-</span>d1))<span style="color: #333333">+</span>c;
  <span style="color: #008800; font-weight: bold">elseif</span> X(<span style="color: #007020">i</span>) <span style="color: #333333">&gt;</span>= c1 <span style="color: #333333">&amp;&amp;</span> X(<span style="color: #007020">i</span>) <span style="color: #333333">&lt;</span> c2
    X(<span style="color: #007020">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>)  =(a2<span style="color: #333333">*</span>(X(<span style="color: #007020">i</span>)<span style="color: #333333">-</span>c1))<span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>;
  <span style="color: #008800; font-weight: bold">else</span>
     X(<span style="color: #007020">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) = a3<span style="color: #333333">*</span>(X(<span style="color: #007020">i</span>)<span style="color: #333333">-</span>c2);
  <span style="color: #008800; font-weight: bold">end</span>
 <span style="color: #008800; font-weight: bold">end</span>

 figure
 plot(<span style="color: #0000DD; font-weight: bold">0</span>:<span style="color: #007020">length</span>(X)<span style="color: #333333">-</span><span style="color: #0000DD; font-weight: bold">1</span>,X);

 figure
 hist(X,x,<span style="color: #007020">length</span>(x));
 <span style="color: #888888">%title(&#39;p1=0.9 p2=0.8 N=1000000&#39;);</span>
 xlim([<span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #0000DD; font-weight: bold">1</span>]);
 ylim([<span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #0000DD; font-weight: bold">2</span>]);
  
 P0_theory = c;
 P1_theory = <span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>c;
 P1l0_theory = p1;
 P0l1_theory = p2;
 P0l0_theory = <span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>p1;
 P1l1_theory = <span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>p2;
 P01_theory = P0l1_theory<span style="color: #333333">*</span>P1_theory;
 P10_theory = P1l0_theory<span style="color: #333333">*</span>P0_theory;
 P00_theory = P0l0_theory<span style="color: #333333">*</span>P0_theory;
 P11_theory = P1l1_theory<span style="color: #333333">*</span>P1_theory;
 H_theory = ((p2<span style="color: #333333">/</span>(p1<span style="color: #333333">+</span>p2))<span style="color: #333333">*</span>((<span style="color: #333333">-</span>p1<span style="color: #333333">*</span><span style="color: #007020">log2</span>(p1))<span style="color: #333333">-</span>((<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>p1)<span style="color: #333333">*</span><span style="color: #007020">log2</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>p1)))) <span style="color: #333333">+</span> ((p1<span style="color: #333333">/</span>(p1<span style="color: #333333">+</span>p2))<span style="color: #333333">*</span>((<span style="color: #333333">-</span>p2<span style="color: #333333">*</span><span style="color: #007020">log2</span>(p2))<span style="color: #333333">-</span>((<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>p2)<span style="color: #333333">*</span><span style="color: #007020">log2</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>p2))));
 
 fprintf(<span style="background-color: #fff0f0">&#39;P(0) in theory is %f\n&#39;</span>, P0_theory);
 fprintf(<span style="background-color: #fff0f0">&#39;P(1) in theory is %f\n&#39;</span>, P1_theory);
 fprintf(<span style="background-color: #fff0f0">&#39;P(00) in theory is %f\n&#39;</span>, P00_theory);
 fprintf(<span style="background-color: #fff0f0">&#39;P(01) in theory is %f\n&#39;</span>, P01_theory);
 fprintf(<span style="background-color: #fff0f0">&#39;P(10) in theory is %f\n&#39;</span>, P10_theory);
 fprintf(<span style="background-color: #fff0f0">&#39;P(11) in theory is %f\n&#39;</span>, P11_theory);
 fprintf(<span style="background-color: #fff0f0">&#39;P(0|0) in theory is %f\n&#39;</span>, P0l0_theory);  
 fprintf(<span style="background-color: #fff0f0">&#39;P(0|1) in theory is %f\n&#39;</span>, P0l1_theory);
 fprintf(<span style="background-color: #fff0f0">&#39;P(1|0) in theory is %f\n&#39;</span>, P1l0_theory);
 fprintf(<span style="background-color: #fff0f0">&#39;P(1|1) in theory is %f\n&#39;</span>, P1l1_theory);  
 fprintf(<span style="background-color: #fff0f0">&#39;Entropy in theory is %f\n\n&#39;</span>, H_theory);
 t = c;
 binary = X <span style="color: #333333">&gt;</span>= t;
 save(&quot;binary_sequence.dat&quot;, &quot;binary&quot;);
 
 P0_practical = P1_practical = P00_practical = P01_practical = P10_practical = P11_practical = <span style="color: #0000DD; font-weight: bold">0</span>;
 
 <span style="color: #008800; font-weight: bold">for</span> <span style="color: #007020">i</span> = <span style="color: #0000DD; font-weight: bold">1</span>:<span style="color: #007020">length</span>(binary)
  <span style="color: #008800; font-weight: bold">if</span> binary(<span style="color: #007020">i</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>
   P0_practical <span style="color: #333333">+</span>= <span style="color: #0000DD; font-weight: bold">1</span>;
  <span style="color: #008800; font-weight: bold">else</span>
   P1_practical <span style="color: #333333">+</span>= <span style="color: #0000DD; font-weight: bold">1</span>;
  <span style="color: #008800; font-weight: bold">end</span>
  
  <span style="color: #008800; font-weight: bold">if</span> <span style="color: #007020">i</span> <span style="color: #333333">==</span> <span style="color: #007020">length</span>(binary)
   <span style="color: #008800; font-weight: bold">break</span>;
  <span style="color: #008800; font-weight: bold">end</span>
  
  <span style="color: #008800; font-weight: bold">if</span> binary(<span style="color: #007020">i</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #333333">&amp;&amp;</span> binary(<span style="color: #007020">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>
   P00_practical <span style="color: #333333">+</span>= <span style="color: #0000DD; font-weight: bold">1</span>;
  <span style="color: #008800; font-weight: bold">elseif</span> binary(<span style="color: #007020">i</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #333333">&amp;&amp;</span> binary(<span style="color: #007020">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">1</span>
   P01_practical <span style="color: #333333">+</span>= <span style="color: #0000DD; font-weight: bold">1</span>;
  <span style="color: #008800; font-weight: bold">elseif</span> binary(<span style="color: #007020">i</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">1</span> <span style="color: #333333">&amp;&amp;</span> binary(<span style="color: #007020">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>
   P10_practical <span style="color: #333333">+</span>= <span style="color: #0000DD; font-weight: bold">1</span>;
  <span style="color: #008800; font-weight: bold">else</span>
   P11_practical <span style="color: #333333">+</span>= <span style="color: #0000DD; font-weight: bold">1</span>;
  <span style="color: #008800; font-weight: bold">end</span>
 <span style="color: #008800; font-weight: bold">end</span>
 
 P0l0_practical = ((P00_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary))<span style="color: #333333">/</span>(P0_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary)));
 P0l1_practical = ((P01_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary))<span style="color: #333333">/</span>(P1_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary)));
 P1l0_practical = ((P10_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary))<span style="color: #333333">/</span>(P0_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary)));
 P1l1_practical = ((P11_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary))<span style="color: #333333">/</span>(P1_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary)));
 H_pratical = ((P0l1_practical<span style="color: #333333">/</span>(P1l0_practical<span style="color: #333333">+</span>P0l1_practical))<span style="color: #333333">*</span>((<span style="color: #333333">-</span>P1l0_practical<span style="color: #333333">*</span><span style="color: #007020">log2</span>(P1l0_practical))<span style="color: #333333">-</span>((P0l0_practical)<span style="color: #333333">*</span><span style="color: #007020">log2</span>(P0l0_practical)))) <span style="color: #333333">+</span> ((P1l0_practical<span style="color: #333333">/</span>(P1l0_practical<span style="color: #333333">+</span>P0l1_practical))<span style="color: #333333">*</span>((<span style="color: #333333">-</span>P0l1_practical<span style="color: #333333">*</span><span style="color: #007020">log2</span>(P0l1_practical))<span style="color: #333333">-</span>((P1l1_practical)<span style="color: #333333">*</span><span style="color: #007020">log2</span>(P1l1_practical))));
 
 fprintf(<span style="background-color: #fff0f0">&#39;The number of 0s = %d, P(0) in practice is %f\n&#39;</span>, P0_practical, P0_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary));
 fprintf(<span style="background-color: #fff0f0">&#39;The number of 1s = %d, P(1) in practice is %f\n&#39;</span>, P1_practical, P1_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary));
 fprintf(<span style="background-color: #fff0f0">&#39;The number of 00s = %d, P(00) in practice is %f\n&#39;</span>, P00_practical, P00_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary));
 fprintf(<span style="background-color: #fff0f0">&#39;The number of 01s = %d, P(01) in practice is %f\n&#39;</span>, P01_practical, P01_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary));
 fprintf(<span style="background-color: #fff0f0">&#39;The number of 10s = %d, P(10) in practice is %f\n&#39;</span>, P10_practical, P10_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary));
 fprintf(<span style="background-color: #fff0f0">&#39;The number of 11s = %d, P(11) in practice is %f\n&#39;</span>, P11_practical, P11_practical<span style="color: #333333">/</span><span style="color: #007020">length</span>(binary));
 fprintf(<span style="background-color: #fff0f0">&#39;P(0|0) in practice is %f\n&#39;</span>, P0l0_practical);  
 fprintf(<span style="background-color: #fff0f0">&#39;P(0|1) in practice is %f\n&#39;</span>, P0l1_practical);
 fprintf(<span style="background-color: #fff0f0">&#39;P(1|0) in practice is %f\n&#39;</span>, P1l0_practical);
 fprintf(<span style="background-color: #fff0f0">&#39;P(1|1) in practice is %f\n&#39;</span>, P1l1_practical);
 fprintf(<span style="background-color: #fff0f0">&#39;Entropy in practice is %f\n\n&#39;</span>, H_pratical);
<span style="color: #008800; font-weight: bold">else</span>
 fprintf(<span style="background-color: #fff0f0">&#39;you cannot do this&#39;</span>);
<span style="color: #008800; font-weight: bold">end</span>
</pre></div>

## Mirrors

*   [https://www.publish0x.com/fajar-purnama-academics/markov-information-binary-sequences-based-on-piecewise-linea-xomqgpp?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/markov-information-binary-sequences-based-on-piecewise-linea-xomqgpp?a=4oeEw0Yb0B&tid=github)
*   [https://0darkking0.blogspot.com/2021/01/markov-information-binary-sequences.html](https://0darkking0.blogspot.com/2021/01/markov-information-binary-sequences.html)
*   [https://0fajarpurnama0.medium.com/markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps-a7646ca95e36](https://0fajarpurnama0.medium.com/markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps-a7646ca95e36)
*   [https://0fajarpurnama0.github.io/masters/2020/09/13/markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps](https://0fajarpurnama0.github.io/masters/2020/09/13/markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps)
*   [https://steemit.com/math/@fajar.purnama/markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps?r=fajar.purnama](https://steemit.com/math/@fajar.purnama/markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps?r=fajar.purnama)
*   [https://stemgeeks.net/math/@fajar.purnama/markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps?ref=fajar.purnama](https://stemgeeks.net/math/@fajar.purnama/markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps?ref=fajar.purnama)
*   [https://blurtter.com/blurtech/@fajar.purnama/markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps?referral=fajar.purnama](https://blurtter.com/blurtech/@fajar.purnama/markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps?referral=fajar.purnama)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps)
*   [http://0fajarpurnama0.weebly.com/blog/markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps](http://0fajarpurnama0.weebly.com/blog/markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/188-markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/188-markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps)
*   [https://read.cash/@FajarPurnama/markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps-29b47fc9](https://read.cash/@FajarPurnama/markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps-29b47fc9)
*   [https://www.uptrennd.com/post-detail/markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps~ODU0NzMy](https://www.uptrennd.com/post-detail/markov-information-binary-sequences-based-on-piecewise-linear-chaotic-maps~ODU0NzMy)