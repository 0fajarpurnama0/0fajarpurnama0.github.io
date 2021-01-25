---
layout: post
title: 7,4 Hamming Codes
categories: masters
tags: [math, binary, chaos, piecewise, hamming, assignment, markov, random, engineering, science, technology]
featuredimage: https://images.blurt.buzz/DQmPxBJQc6SbsjgFRE5Bg2GV28UusmDXqtTuMejgum5LgWe/Figure%200.%207,4%20Hamming%20Venn%20Diagram.png
description: First group 4 bits per block, and then obtain the 3 hamming bit codes from the 4 bits for each blocks and add them to make 7 bits per block.
canonicalurl: https://0fajarpurnama0.github.io/masters/2020/09/15/hamming-codes
---
![Figure 0. 7,4 Hamming Venn Diagram.png](https://images.blurt.buzz/DQmPxBJQc6SbsjgFRE5Bg2GV28UusmDXqtTuMejgum5LgWe/Figure%200.%207,4%20Hamming%20Venn%20Diagram.png)

Figure 0\. 7,4 Hamming Code Venn Diagram

## 0\. Note

This is the fifth assignment from my Masters Applied Digital Information Theory Course which has never been published anywhere and I, as the author and copyright holder, license this assignment customized CC-BY-SA where anyone can share, copy, republish, and sell on condition to state my name as the author and notify that the original and open version available here.

## 1\. Introduction

The [previous 4th assignment](https://0fajarpurnama0.github.io/masters/2020/09/14/single-parity-check-binary-sequence-skew-tent-pwl-map) demonstrate 1 bit error detection using 3,4 parity codes. On this assignment will be demonstrating 1 bit error correction using 7,4 hamming codes. On 3,4 parity codes we group 3 bits per block and perform exclusive or on each blocks to get a bit called the parity code bit and add it into the 4th bit of the blocks. A different approach for the 7,4 hamming codes we first group 4 bits per block, and then obtain the 3 hamming bit codes from the 4 bits for each blocks and add them which makes each blocks contained 7 bits. Suppose there are 4 bits as follows:

b1,b2,b3,b4

To get the hamming bit codes we do the following calculation:

b5=b1⊕b2⊕b3, b6=b1⊕b2⊕b4, b7=b1⊕b3⊕b4

Those bits will be added to the block:

b1,b2,b3,b4,b5,b6,b7

Following Table 1 are the complete list:

Table 1\. Coding Table

<table border="">

<thead>

<tr>

<th>Info</th>

<th>Code</th>

<th>Info</th>

<th>Code</th>

</tr>

</thead>

<tbody>

<tr>

<td>0000</td>

<td>0000**000**</td>

<td>1000</td>

<td>1000**110**</td>

</tr>

<tr>

<td>0001</td>

<td>0001**011**</td>

<td>1001</td>

<td>1001**101**</td>

</tr>

<tr>

<td>0010</td>

<td>0010**101**</td>

<td>1010</td>

<td>1010**011**</td>

</tr>

<tr>

<td>0011</td>

<td>0011**110**</td>

<td>1011</td>

<td>1011**000**</td>

</tr>

<tr>

<td>0100</td>

<td>0100**111**</td>

<td>1100</td>

<td>1100**001**</td>

</tr>

<tr>

<td>0101</td>

<td>0101**100**</td>

<td>1101</td>

<td>1101**010**</td>

</tr>

<tr>

<td>0110</td>

<td>0110**010**</td>

<td>1110</td>

<td>1110**100**</td>

</tr>

<tr>

<td>0111</td>

<td>0111**001**</td>

<td>1111</td>

<td>1111**111**</td>

</tr>

</tbody>

</table>

On the receiver side the hamming codes is also constructed using the received first 4 bits of each blocks, then compare them with the hamming codes produced on the receiver side. Since the hamming codes were produced using the above equation (each codes uses different elements) we can know on which bit the error occurs, and a correction is performed. For example if receiver's b5, b6, b7 is different from transmitter's then an error on b1, if b5, b6 is different then an error occur on b2, if b5,b7 is different then an error occur on b3, if b6, b7 then b4, if b5 only then b5, if b6 only then b6, if b7 only then b7\. Following Table 2 are the complete syndromes:

Table 2\. Syndrome and Correction List

<table border="">

<thead>

<tr>

<th>Syndrome</th>

<th>Correction</th>

<th>Syndrome</th>

<th>Correction</th>

<th>Syndrome</th>

<th>Correction</th>

<th>Syndrome</th>

<th>Correction</th>

</tr>

</thead>

<tbody>

<tr>

<td>No error</td>

<td>None</td>

<td>b6 error</td>

<td>b6⊕1</td>

<td>b6b7 error</td>

<td>b4⊕1</td>

<td>b5b6 error</td>

<td>b2⊕1</td>

</tr>

<tr>

<td>b7 error</td>

<td>b7⊕1</td>

<td>b5 error</td>

<td>b5⊕1</td>

<td>b5b7 error</td>

<td>b3⊕1</td>

<td>all error</td>

<td>b1⊕1</td>

</tr>

</tbody>

</table>

## 2\. Memoryless Errors (Skew Tent Map)

On this simulation we will (1) generate a chaotic binary sequence from memoryless source (2) perform hamming coding (3) simulate through a noisy channel (4) perform error correction on receiver. We will calculate the practical probabilities of incorrect decoding and compare them theoretically defined by P<sub>I</sub>=1–P<sub>C</sub> where P<sub>C</sub>=7p(1-p)<sup>6</sup> + (1-p)<sup>7</sup> is the probability of correct decoding. The formula is derived from the probability of 1 bit error out of all possible error. Also we will compare the error probability of the binary sequence before correction and after correction. We will use critical point of c=0.499999 for generating the memoryless source, while we use c=1-p for generating the error sequence, and initial chaotic value for both is x(1)=0.333333 and various error probability p for the error sequence (noise). Generating the source will be the same as assignment 2, and generating the hamming codes is similar to 4th assignment except we input 3 extra bits in each blocks based on the initial 4 bits, which will make 7 bits. Like the previous assignment we perform exclusive or between the generated memoryless source and the error sequence to obtain the received sequence. On Table 3 is the simulation result of 1000000 (million) blocks (N) (7000000 bits) with error probability up to 0.4.

Table 3\. simulation result of 1000000 (million) blocks (N) (7000000 bits) with error probability up to 0.4

<table border="">

<thead>

<tr>

<th>Error Probability</th>

<th>0.01</th>

<th>0.05</th>

<th>0.1</th>

<th>0.2</th>

<th>0.3</th>

<th>0.4</th>

</tr>

</thead>

<tbody>

<tr>

<td>Error Before Decoding</td>

<td>69185</td>

<td>310155</td>

<td>651846</td>

<td>1489329</td>

<td>2095701</td>

<td>2817931</td>

</tr>

<tr>

<td>Error After Decoding</td>

<td>5661</td>

<td>103819</td>

<td>413866</td>

<td>1456118</td>

<td>2253571</td>

<td>2871364</td>

</tr>

<tr>

<td>Probability Error Before Decoding</td>

<td>0.009884</td>

<td>0.044308</td>

<td>0.093121</td>

<td>0.212762</td>

<td>0.299386</td>

<td>0.402562</td>

</tr>

<tr>

<td>Probability Error After Decoding</td>

<td>0.008087</td>

<td>0.014831</td>

<td>0.059123</td>

<td>0.208017</td>

<td>0.321939</td>

<td>0.410195</td>

</tr>

<tr>

<td>Incorrect Decoding</td>

<td>1887</td>

<td>33173</td>

<td>132352</td>

<td>444091</td>

<td>672462</td>

<td>810696</td>

</tr>

<tr>

<td>Probability of Incorrect Decoding</td>

<td>0.001887</td>

<td>0.033173</td>

<td>0.132352</td>

<td>0.444091</td>

<td>0.672462</td>

<td>0.810696</td>

</tr>

<tr>

<td>Theoretical Probability of Incorrect Decoding</td>

<td>0.002031</td>

<td>0.044381</td>

<td>0.149695</td>

<td>0.423283</td>

<td>0.670583</td>

<td>0.841369</td>

</tr>

</tbody>

</table>

## 3\. Markov-type Errors (PWL Map)

Similar to section 2 but this time we generate the error sequence through Markov type or Piece Wise Linear (PWL) map. The theoretical incorrect error decoding is P<sub>I</sub>=1–P<sub>C</sub> and correct one:

P<sub>C = P(1)p<sub>2</sub> (1-p)<sup>5</sup> + 5P(0)p<sub>1</sub> p<sub>2</sub> (1-p<sub>1</sub>)<sup>4</sup> + P(0)(1-p<sub>1</sub>)<sup>5</sup> p<sub>1</sub> + P(0)(1-p<sub>1</sub>)<sup>6</sup></sub>

We use the same critical point and initial chaotic value. To generate the error sequence we use the PWL map with various p2 values and P<sub>1</sub> = (1-c)/c P<sub>2</sub>, with c=1-p. On Table 4 is the theoretical result of 1000000 (million) blocks (N) (7000000 bits) with error probability up to 0.4, Table 5 is the simulation result, Table 6 is error probability before decoding, Table 7 is error probability after decoding.

Table 4\. Theoretical Result

<table border="">

<thead>

<tr>

<th>p2\p</th>

<th>0.01</th>

<th>0.05</th>

<th>0.1</th>

<th>0.2</th>

<th>0.3</th>

<th>0.4</th>

</tr>

</thead>

<tbody>

<tr>

<td>0.1</td>

<td>0.013497</td>

<td>0.067421</td>

<td>0.134663</td>

<td>0.268465</td>

<td>0.400994</td>

<td>0.531546</td>

</tr>

<tr>

<td>0.2</td>

<td>0.015996</td>

<td>0.079888</td>

<td>0.159498</td>

<td>0.317444</td>

<td>0.472536</td>

<td>0.622384</td>

</tr>

<tr>

<td>0.3</td>

<td>0.017509</td>

<td>0.087704</td>

<td>0.175712</td>

<td>0.351731</td>

<td>0.525154</td>

<td>0.690342</td>

</tr>

<tr>

<td>0.4</td>

<td>0.018048</td>

<td>0.091159</td>

<td>0.184430</td>

<td>0.375393</td>

<td>0.566651</td>

<td>0.746271</td>

</tr>

</tbody>

</table>

Table 5 Simulation Result

<table border="">

<thead>

<tr>

<th>p2\p</th>

<th>0.01</th>

<th>0.05</th>

<th>0.1</th>

<th>0.2</th>

<th>0.3</th>

<th>0.4</th>

</tr>

</thead>

<tbody>

<tr>

<td>0.1</td>

<td>0.014407</td>

<td>0.074791</td>

<td>0.165392</td>

<td>0.288812</td>

<td>0.409343</td>

<td>0.518025</td>

</tr>

<tr>

<td>0.2</td>

<td>0.039309</td>

<td>0.084100</td>

<td>0.125731</td>

<td>0.363730</td>

<td>0.463654</td>

<td>0.633573</td>

</tr>

<tr>

<td>0.3</td>

<td>0.013653</td>

<td>0.083021</td>

<td>0.179077</td>

<td>0.365025</td>

<td>0.567390</td>

<td>0.702815</td>

</tr>

<tr>

<td>0.4</td>

<td>0.011958</td>

<td>0.100293</td>

<td>0.248337</td>

<td>0.361628</td>

<td>0.607297</td>

<td>0.741535</td>

</tr>

</tbody>

</table>

Table 6\. Error Probability Before Decoding

<table border="">

<thead>

<tr>

<th>p2\p</th>

<th>0.01</th>

<th>0.05</th>

<th>0.1</th>

<th>0.2</th>

<th>0.3</th>

<th>0.4</th>

</tr>

</thead>

<tbody>

<tr>

<td>0.1</td>

<td>0.019189</td>

<td>0.050632</td>

<td>0.121454</td>

<td>0.215809</td>

<td>0.310955</td>

<td>0.387244</td>

</tr>

<tr>

<td>0.2</td>

<td>0.0310312</td>

<td>0.050779</td>

<td>0.073711</td>

<td>0.239916</td>

<td>0.287656</td>

<td>0.390070</td>

</tr>

<tr>

<td>0.3</td>

<td>0.0064253</td>

<td>0.045953</td>

<td>0.095724</td>

<td>0.199656</td>

<td>0.351083</td>

<td>0.400005</td>

</tr>

<tr>

<td>0.4</td>

<td>0.0073853</td>

<td>0.051241</td>

<td>0.124822</td>

<td>0.196768</td>

<td>0.334634</td>

<td>0.393053</td>

</tr>

</tbody>

</table>

Table 7\. Error Probability After Decoding

<table border="">

<thead>

<tr>

<th>p2\p</th>

<th>0.01</th>

<th>0.05</th>

<th>0.1</th>

<th>0.2</th>

<th>0.3</th>

<th>0.4</th>

</tr>

</thead>

<tbody>

<tr>

<td>0.1</td>

<td>0.0182</td>

<td>0.050889</td>

<td>0.120800</td>

<td>0.215805</td>

<td>0.311266</td>

<td>0.387078</td>

</tr>

<tr>

<td>0.2</td>

<td>0.0310312</td>

<td>0.050020</td>

<td>0.071017</td>

<td>0.236854</td>

<td>0.285676</td>

<td>0.395473</td>

</tr>

<tr>

<td>0.3</td>

<td>0.0065111</td>

<td>0.044599</td>

<td>0.095300</td>

<td>0.196479</td>

<td>0.336207</td>

<td>0.407214</td>

</tr>

<tr>

<td>0.4</td>

<td>0.0055779</td>

<td>0.050823</td>

<td>0.127047</td>

<td>0.189369</td>

<td>0.317022</td>

<td>0.398460</td>

</tr>

</tbody>

</table>

## 4\. Results

On Figure 1 shows that the error probability before and after decoding fluctuates on different error probability values (p) and type of sources (memoryless and p2s), but had one thing in common that belowp < 0.3 the error after decoding decreases, and unfortunately rises above that. The incorrect coding for memoryless is preferable when p < 0.1 but not recommended when above. For PWL with p2=0.1 shows low incorrect decoding amongst other p2\. For other values there is a cutting point on p=0.2, below lower p2 shows lower incorrect decoding and viceversa.

![Figure 1. Error Probability vs Error Probability Before and After Decoding.png](https://images.blurt.buzz/DQmTN9LdJs591K7iGqzivtnjUWYPuCRVkyjWqPtbvH9vXxL/Figure%201.%20Error%20Probability%20vs%20Error%20Probability%20Before%20and%20After%20Decoding.png)

Figure 1\. Error vs Error Before and After Decoding

![Figure 2. Error Probability vs Incorrect Decoding Probability.png](https://images.blurt.buzz/DQmWn8MuQkimuhRhEKjjeAgGFS4zXhc1Kvfodd4Dsmz4622/Figure%202.%20Error%20Probability%20vs%20Incorrect%20Decoding%20Probability.png)

Figure 2\. Error vs Incorrect Decoding



## 5\. Source Code

The source code is written in Fortran95 which is said to be a good programming language for mathematics in the old days, the first one is for memoryless, and the first one is for PWL (markov).

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #008800; font-weight: bold">program </span><span style="color: #996633">Memoryless_Error_Hamming</span>

<span style="color: #888888">! For safe purposes</span>
 <span style="color: #008800; font-weight: bold">implicit none</span>

<span style="color: #888888">! Type declarations</span>
 <span style="color: #333399; font-weight: bold">integer</span> <span style="color: #008800; font-weight: bold">::</span> <span style="color: #996633">m</span>, <span style="color: #996633">n1</span>, <span style="color: #996633">n2</span>, <span style="color: #996633">i</span>, <span style="color: #996633">j</span>, <span style="color: #996633">s1</span>, <span style="color: #996633">s2</span>, <span style="color: #996633">s3</span>
 <span style="color: #333399; font-weight: bold">real</span> <span style="color: #008800; font-weight: bold">::</span> <span style="color: #996633">c</span>, <span style="color: #996633">c_error</span>, <span style="color: #996633">p</span>, <span style="color: #996633">practical_error_before</span>, <span style="color: #996633">p_practical_error_before</span>, <span style="color: #996633">practical_error_after</span>
 <span style="color: #333399; font-weight: bold">real</span> <span style="color: #008800; font-weight: bold">::</span> <span style="color: #996633">p_practical_error_after</span>, <span style="color: #996633">incorrect_decoding</span>, <span style="color: #996633">p_incorrect_decoding</span>
 <span style="color: #333399; font-weight: bold">real</span> <span style="color: #008800; font-weight: bold">::</span> <span style="color: #996633">p_theory_correct_decoding</span>, <span style="color: #996633">p_theory_incorrect_decoding</span>
 <span style="color: #333399; font-weight: bold">real</span>, <span style="color: #008800; font-weight: bold">dimension</span>(<span style="color: #0000DD; font-weight: bold">40000000</span>) <span style="color: #008800; font-weight: bold">::</span> <span style="color: #996633">x</span>
 <span style="color: #333399; font-weight: bold">integer</span>, <span style="color: #008800; font-weight: bold">dimension</span>(<span style="color: #0000DD; font-weight: bold">40000000</span>) <span style="color: #008800; font-weight: bold">::</span> <span style="color: #996633">bit</span>
 <span style="color: #333399; font-weight: bold">integer</span>, <span style="color: #008800; font-weight: bold">dimension</span>(<span style="color: #0000DD; font-weight: bold">70000000</span>) <span style="color: #008800; font-weight: bold">::</span> <span style="color: #996633">bit_hamming</span>, <span style="color: #996633">bit_error</span>, <span style="color: #996633">bit_receiver</span>, <span style="color: #996633">bit_hamming_uncorrected</span>, <span style="color: #996633">bit_corrected</span>
 <span style="color: #333399; font-weight: bold">character</span>(<span style="color: #007020">len</span><span style="color: #333333">=</span><span style="color: #0000DD; font-weight: bold">20</span>) <span style="color: #008800; font-weight: bold">::</span> <span style="color: #996633">firstname</span>, <span style="color: #996633">lastname</span>, <span style="color: #996633">text</span>
  
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="background-color: #fff0f0">&#39;(A)&#39;</span>,<span style="color: #996633">advance</span><span style="color: #333333">=</span><span style="background-color: #fff0f0">&#39;no&#39;</span>) <span style="background-color: #fff0f0">&#39;Enter number of blocks: &#39;</span>
 <span style="color: #008800; font-weight: bold">read</span> (<span style="color: #333333">*</span>,<span style="color: #333333">*</span>) <span style="color: #996633">m</span>
 <span style="color: #996633">n1</span> <span style="color: #333333">=</span> <span style="color: #996633">m</span><span style="color: #333333">*</span><span style="color: #0000DD; font-weight: bold">4</span>
 <span style="color: #996633">n2</span> <span style="color: #333333">=</span> <span style="color: #996633">m</span><span style="color: #333333">*</span><span style="color: #0000DD; font-weight: bold">7</span>
 <span style="color: #996633">c</span> <span style="color: #333333">=</span> <span style="color: #6600EE; font-weight: bold">0.499999</span>

<span style="color: #888888">! Memoryless Generated Source (here n is number of bits)</span>
 <span style="color: #996633">x</span>(<span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> <span style="color: #6600EE; font-weight: bold">0.333333</span>
 <span style="color: #008800; font-weight: bold">do </span><span style="color: #996633">i</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>, <span style="color: #996633">n1</span><span style="color: #333333">-</span><span style="color: #0000DD; font-weight: bold">1</span>
  <span style="color: #008800; font-weight: bold">if</span> (<span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&gt;=</span> <span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #000000; font-weight: bold">.and.</span> <span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&lt;</span> <span style="color: #996633">c</span>) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">x</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> <span style="color: #996633">x</span>(<span style="color: #996633">i</span>)<span style="color: #333333">/</span><span style="color: #996633">c</span>
   <span style="color: #996633">bit</span>(<span style="color: #996633">i</span>) <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>
  <span style="color: #008800; font-weight: bold">else</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">x</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> (<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">x</span>(<span style="color: #996633">i</span>))<span style="color: #333333">/</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">c</span>)
   <span style="color: #996633">bit</span>(<span style="color: #996633">i</span>) <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>
  <span style="color: #008800; font-weight: bold">end if</span>
<span style="color: #008800; font-weight: bold"> end do</span>

<span style="color: #888888">! Hamming Codes</span>
 <span style="color: #996633">j</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>
 <span style="color: #008800; font-weight: bold">do </span><span style="color: #996633">i</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>, <span style="color: #996633">n2</span>, <span style="color: #0000DD; font-weight: bold">7</span>
  <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span>) <span style="color: #333333">=</span> <span style="color: #996633">bit</span>(<span style="color: #996633">j</span>)
  <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> <span style="color: #996633">bit</span>(<span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>)
  <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>) <span style="color: #333333">=</span> <span style="color: #996633">bit</span>(<span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>)
  <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>) <span style="color: #333333">=</span> <span style="color: #996633">bit</span>(<span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>)
  <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #007020">xor</span>(<span style="color: #996633">bit</span>(<span style="color: #996633">j</span>),<span style="color: #996633">bit</span>(<span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>)),<span style="color: #996633">bit</span>(<span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>))
  <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #007020">xor</span>(<span style="color: #996633">bit</span>(<span style="color: #996633">j</span>),<span style="color: #996633">bit</span>(<span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>)),<span style="color: #996633">bit</span>(<span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>))
  <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #007020">xor</span>(<span style="color: #996633">bit</span>(<span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>),<span style="color: #996633">bit</span>(<span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>)),<span style="color: #996633">bit</span>(<span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>))
  <span style="color: #996633">j</span> <span style="color: #333333">=</span> <span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>
 <span style="color: #008800; font-weight: bold">end do</span>

<span style="color: #888888">! Error Sequence</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="background-color: #fff0f0">&#39;(A)&#39;</span>,<span style="color: #996633">advance</span><span style="color: #333333">=</span><span style="background-color: #fff0f0">&#39;no&#39;</span>) <span style="background-color: #fff0f0">&#39;Enter error probability: &#39;</span>
 <span style="color: #008800; font-weight: bold">read</span> (<span style="color: #333333">*</span>,<span style="color: #333333">*</span>) <span style="color: #996633">p</span>
 <span style="color: #996633">c_error</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span> <span style="color: #333333">-</span> <span style="color: #996633">p</span>
 <span style="color: #008800; font-weight: bold">do </span><span style="color: #996633">i</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>, <span style="color: #996633">n2</span>
  <span style="color: #008800; font-weight: bold">if</span> (<span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&gt;=</span> <span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #000000; font-weight: bold">.and.</span> <span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&lt;</span> <span style="color: #996633">c_error</span>) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">x</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> <span style="color: #996633">x</span>(<span style="color: #996633">i</span>)<span style="color: #333333">/</span><span style="color: #996633">c_error</span>
   <span style="color: #996633">bit_error</span>(<span style="color: #996633">i</span>) <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>
  <span style="color: #008800; font-weight: bold">else</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">x</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> (<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">x</span>(<span style="color: #996633">i</span>))<span style="color: #333333">/</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">c_error</span>)
   <span style="color: #996633">bit_error</span>(<span style="color: #996633">i</span>) <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>
  <span style="color: #008800; font-weight: bold">end if</span>
<span style="color: #008800; font-weight: bold"> end do</span>

<span style="color: #888888">! Receiver Side (hamming encoded sequence + error sequence), calculate error probability before decoding, prefill future corrected bits</span>
 <span style="color: #996633">practical_error_before</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>;
 <span style="color: #008800; font-weight: bold">do </span><span style="color: #996633">i</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>, <span style="color: #996633">n2</span>
  <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span>), <span style="color: #996633">bit_error</span>(<span style="color: #996633">i</span>))
  <span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span>) <span style="color: #333333">=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span>)
  <span style="color: #008800; font-weight: bold">if</span> (<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span>)) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">practical_error_before</span> <span style="color: #333333">=</span> <span style="color: #996633">practical_error_before</span> <span style="color: #333333">+</span> <span style="color: #0000DD; font-weight: bold">1</span>
  <span style="color: #008800; font-weight: bold">end if</span>
<span style="color: #008800; font-weight: bold"> end do</span>
<span style="color: #008800; font-weight: bold"> </span><span style="color: #996633">p_practical_error_before</span> <span style="color: #333333">=</span> <span style="color: #996633">practical_error_before</span><span style="color: #333333">/</span><span style="color: #996633">n2</span>
 
<span style="color: #888888">! Perform Hamming coding again on the received bits</span>
 <span style="color: #008800; font-weight: bold">do </span><span style="color: #996633">i</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>, <span style="color: #996633">n2</span>, <span style="color: #0000DD; font-weight: bold">7</span>
  <span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span>) <span style="color: #333333">=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span>)
  <span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>)
  <span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>) <span style="color: #333333">=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>)
  <span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>) <span style="color: #333333">=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>)
  <span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #007020">xor</span>(<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span>),<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>)),<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>))
  <span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #007020">xor</span>(<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span>),<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>)),<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>))
  <span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #007020">xor</span>(<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>),<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>)),<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>))
 <span style="color: #008800; font-weight: bold">end do</span>

<span style="color: #888888">! Error Correction based on symptoms, &quot;&amp;&quot; is placed to continue next line (fortran95 cannot read long lines)</span>
 <span style="color: #008800; font-weight: bold">do </span><span style="color: #996633">i</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>, <span style="color: #996633">n2</span>, <span style="color: #0000DD; font-weight: bold">7</span>
  <span style="color: #008800; font-weight: bold">if</span> ((<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>)) <span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>)) &amp;
<span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>))) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span>),<span style="color: #0000DD; font-weight: bold">1</span>)
  <span style="color: #008800; font-weight: bold">else if</span> ((<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>)) <span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>)) &amp;
<span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>) <span style="color: #333333">==</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>))) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>),<span style="color: #0000DD; font-weight: bold">1</span>)
  <span style="color: #008800; font-weight: bold">else if</span> ((<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>)) <span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>) <span style="color: #333333">==</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>)) &amp;
<span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>))) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>),<span style="color: #0000DD; font-weight: bold">1</span>)
  <span style="color: #008800; font-weight: bold">else if</span> ((<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>) <span style="color: #333333">==</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>)) <span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>)) &amp;
<span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>))) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>),<span style="color: #0000DD; font-weight: bold">1</span>)
  <span style="color: #008800; font-weight: bold">else if</span> ((<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>)) <span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>) <span style="color: #333333">==</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>)) &amp;
<span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>) <span style="color: #333333">==</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>))) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>),<span style="color: #0000DD; font-weight: bold">1</span>)
  <span style="color: #008800; font-weight: bold">else if</span> ((<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>) <span style="color: #333333">==</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>)) <span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>)) &amp;
<span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>) <span style="color: #333333">==</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>))) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>),<span style="color: #0000DD; font-weight: bold">1</span>)
  <span style="color: #008800; font-weight: bold">else if</span> ((<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>) <span style="color: #333333">==</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>)) <span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>) <span style="color: #333333">==</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>)) &amp;
<span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>))) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>),<span style="color: #0000DD; font-weight: bold">1</span>)  
  <span style="color: #008800; font-weight: bold">end if</span>
<span style="color: #008800; font-weight: bold"> end do</span>

<span style="color: #888888">! Error Probability After Decoding</span>
 <span style="color: #996633">practical_error_after</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>;
 <span style="color: #008800; font-weight: bold">do </span><span style="color: #996633">i</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>, <span style="color: #996633">n2</span>
  <span style="color: #008800; font-weight: bold">if</span> (<span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span>)) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">practical_error_after</span> <span style="color: #333333">=</span> <span style="color: #996633">practical_error_after</span> <span style="color: #333333">+</span> <span style="color: #0000DD; font-weight: bold">1</span>
  <span style="color: #008800; font-weight: bold">end if</span>
<span style="color: #008800; font-weight: bold"> end do</span>
<span style="color: #008800; font-weight: bold"> </span><span style="color: #996633">p_practical_error_after</span> <span style="color: #333333">=</span> <span style="color: #996633">practical_error_after</span><span style="color: #333333">/</span><span style="color: #996633">n2</span>

<span style="color: #888888">! Probability of Correct, and incorrect decoding</span>
 <span style="color: #996633">p_theory_correct_decoding</span> <span style="color: #333333">=</span> (<span style="color: #0000DD; font-weight: bold">7</span><span style="color: #333333">*</span><span style="color: #996633">p</span><span style="color: #333333">*</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">p</span>)<span style="color: #333333">*</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">p</span>)<span style="color: #333333">*</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">p</span>)<span style="color: #333333">*</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">p</span>)<span style="color: #333333">*</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">p</span>)<span style="color: #333333">*</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">p</span>))<span style="color: #333333">+</span>((<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">p</span>)<span style="color: #333333">*</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">p</span>)<span style="color: #333333">*</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">p</span>)<span style="color: #333333">*</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">p</span>)<span style="color: #333333">*</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">p</span>)<span style="color: #333333">*</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">p</span>)<span style="color: #333333">*</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">p</span>))
 <span style="color: #996633">p_theory_incorrect_decoding</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span> <span style="color: #333333">-</span> <span style="color: #996633">p_theory_correct_decoding</span>
 <span style="color: #996633">incorrect_decoding</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>
 <span style="color: #008800; font-weight: bold">do </span><span style="color: #996633">i</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>, <span style="color: #996633">n2</span>, <span style="color: #0000DD; font-weight: bold">7</span>
  <span style="color: #008800; font-weight: bold">if</span> ((<span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span>)) <span style="color: #000000; font-weight: bold">.or.</span> (<span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>)) <span style="color: #000000; font-weight: bold">.or.</span> &amp;
(<span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>)) <span style="color: #000000; font-weight: bold">.or.</span> (<span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>)) <span style="color: #000000; font-weight: bold">.or.</span> &amp;
(<span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>)) <span style="color: #000000; font-weight: bold">.or.</span> (<span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>)) <span style="color: #000000; font-weight: bold">.or.</span> &amp;
(<span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>))) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">incorrect_decoding</span> <span style="color: #333333">=</span> <span style="color: #996633">incorrect_decoding</span> <span style="color: #333333">+</span> <span style="color: #0000DD; font-weight: bold">1</span>
  <span style="color: #008800; font-weight: bold">end if</span>
<span style="color: #008800; font-weight: bold"> end do</span>
<span style="color: #008800; font-weight: bold"> </span><span style="color: #996633">p_incorrect_decoding</span> <span style="color: #333333">=</span> <span style="color: #996633">incorrect_decoding</span><span style="color: #333333">/</span><span style="color: #996633">m</span>

<span style="color: #888888">! Results</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="background-color: #fff0f0">&#39;(A)&#39;</span>,<span style="color: #996633">advance</span><span style="color: #333333">=</span><span style="background-color: #fff0f0">&#39;no&#39;</span>) <span style="background-color: #fff0f0">&#39;Practical error before decoding: &#39;</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="color: #333333">*</span>) <span style="color: #996633">practical_error_before</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="background-color: #fff0f0">&#39;(A)&#39;</span>,<span style="color: #996633">advance</span><span style="color: #333333">=</span><span style="background-color: #fff0f0">&#39;no&#39;</span>) <span style="background-color: #fff0f0">&#39;Practical error after decoding: &#39;</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="color: #333333">*</span>) <span style="color: #996633">practical_error_after</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="background-color: #fff0f0">&#39;(A)&#39;</span>,<span style="color: #996633">advance</span><span style="color: #333333">=</span><span style="background-color: #fff0f0">&#39;no&#39;</span>) <span style="background-color: #fff0f0">&#39;Probability practical error before decoding: &#39;</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="color: #333333">*</span>) <span style="color: #996633">p_practical_error_before</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="background-color: #fff0f0">&#39;(A)&#39;</span>,<span style="color: #996633">advance</span><span style="color: #333333">=</span><span style="background-color: #fff0f0">&#39;no&#39;</span>) <span style="background-color: #fff0f0">&#39;Probability practical error after decoding: &#39;</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="color: #333333">*</span>) <span style="color: #996633">p_practical_error_after</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="background-color: #fff0f0">&#39;(A)&#39;</span>,<span style="color: #996633">advance</span><span style="color: #333333">=</span><span style="background-color: #fff0f0">&#39;no&#39;</span>) <span style="background-color: #fff0f0">&#39;Incorrect decoding: &#39;</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="color: #333333">*</span>) <span style="color: #996633">incorrect_decoding</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="background-color: #fff0f0">&#39;(A)&#39;</span>,<span style="color: #996633">advance</span><span style="color: #333333">=</span><span style="background-color: #fff0f0">&#39;no&#39;</span>) <span style="background-color: #fff0f0">&#39;Probability of incorrect decoding: &#39;</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="color: #333333">*</span>) <span style="color: #996633">p_incorrect_decoding</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="background-color: #fff0f0">&#39;(A)&#39;</span>,<span style="color: #996633">advance</span><span style="color: #333333">=</span><span style="background-color: #fff0f0">&#39;no&#39;</span>) <span style="background-color: #fff0f0">&#39;Theoretical probability of incorrect decoding: &#39;</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="color: #333333">*</span>) <span style="color: #996633">p_theory_incorrect_decoding</span>


<span style="color: #888888">! Debugging purposes, uncomment them to see binary sequences, max 18 blocks</span>
<span style="color: #888888">! do i = 1, n2</span>
<span style="color: #888888">!  write(*,&#39;(1i1.1)&#39;,advance=&#39;no&#39;) bit_hamming(i)</span>
<span style="color: #888888">! end do</span>
<span style="color: #888888">! write (*,*) &#39; &#39;</span>
<span style="color: #888888">! do i = 1, n2</span>
<span style="color: #888888">!  write(*,&#39;(1i1.1)&#39;,advance=&#39;no&#39;) bit_error(i)</span>
<span style="color: #888888">! end do</span>
<span style="color: #888888">! write (*,*) &#39; &#39;</span>
<span style="color: #888888">! do i = 1, n2</span>
<span style="color: #888888">!  write(*,&#39;(1i1.1)&#39;,advance=&#39;no&#39;) bit_receiver(i)</span>
<span style="color: #888888">! end do</span>
<span style="color: #888888">!  write (*,*) &#39; &#39;</span>
<span style="color: #888888">!  do i = 1, n2</span>
<span style="color: #888888">!  write(*,&#39;(1i1.1)&#39;,advance=&#39;no&#39;) bit_corrected(i)</span>
<span style="color: #888888">! end do</span>
<span style="color: #888888">!  write (*,*) &#39; &#39;</span>

<span style="color: #008800; font-weight: bold">end program </span><span style="color: #996633">Memoryless_Error_Hamming</span>
</pre></div>


<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #008800; font-weight: bold">program </span><span style="color: #996633">Piece_Wise_Linear_Error</span>

<span style="color: #888888">! For safe purposes</span>
 <span style="color: #008800; font-weight: bold">implicit none</span>

<span style="color: #888888">! Type declarations</span>
 <span style="color: #333399; font-weight: bold">integer</span> <span style="color: #008800; font-weight: bold">::</span> <span style="color: #996633">m</span>, <span style="color: #996633">n1</span>, <span style="color: #996633">n2</span>, <span style="color: #996633">i</span>, <span style="color: #996633">j</span>, <span style="color: #996633">s1</span>, <span style="color: #996633">s2</span>, <span style="color: #996633">s3</span>
 <span style="color: #333399; font-weight: bold">real</span> <span style="color: #008800; font-weight: bold">::</span> <span style="color: #996633">c</span>, <span style="color: #996633">c_error</span>, <span style="color: #996633">p</span>, <span style="color: #996633">practical_error_before</span>, <span style="color: #996633">p_practical_error_before</span>, <span style="color: #996633">practical_error_after</span>
 <span style="color: #333399; font-weight: bold">real</span> <span style="color: #008800; font-weight: bold">::</span> <span style="color: #996633">p_practical_error_after</span>, <span style="color: #996633">incorrect_decoding</span>, <span style="color: #996633">p_incorrect_decoding</span>
 <span style="color: #333399; font-weight: bold">real</span> <span style="color: #008800; font-weight: bold">::</span> <span style="color: #996633">p_theory_correct_decoding</span>, <span style="color: #996633">p_theory_incorrect_decoding</span>
 <span style="color: #333399; font-weight: bold">real</span> <span style="color: #008800; font-weight: bold">::</span> <span style="color: #996633">p1</span>, <span style="color: #996633">p2</span>, <span style="color: #996633">a</span>, <span style="color: #996633">a1</span>, <span style="color: #996633">a2</span>, <span style="color: #996633">a3</span>, <span style="color: #996633">c1</span>, <span style="color: #996633">c2</span>, <span style="color: #996633">d1</span>, <span style="color: #996633">d2</span>
 <span style="color: #333399; font-weight: bold">real</span>, <span style="color: #008800; font-weight: bold">dimension</span>(<span style="color: #0000DD; font-weight: bold">40000000</span>) <span style="color: #008800; font-weight: bold">::</span> <span style="color: #996633">x</span>
 <span style="color: #333399; font-weight: bold">integer</span>, <span style="color: #008800; font-weight: bold">dimension</span>(<span style="color: #0000DD; font-weight: bold">40000000</span>) <span style="color: #008800; font-weight: bold">::</span> <span style="color: #996633">bit</span>
 <span style="color: #333399; font-weight: bold">integer</span>, <span style="color: #008800; font-weight: bold">dimension</span>(<span style="color: #0000DD; font-weight: bold">70000000</span>) <span style="color: #008800; font-weight: bold">::</span> <span style="color: #996633">bit_hamming</span>, <span style="color: #996633">bit_error</span>, <span style="color: #996633">bit_receiver</span>, <span style="color: #996633">bit_hamming_uncorrected</span>, <span style="color: #996633">bit_corrected</span>
 <span style="color: #333399; font-weight: bold">character</span>(<span style="color: #007020">len</span><span style="color: #333333">=</span><span style="color: #0000DD; font-weight: bold">20</span>) <span style="color: #008800; font-weight: bold">::</span> <span style="color: #996633">firstname</span>, <span style="color: #996633">lastname</span>, <span style="color: #996633">text</span>
  
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="background-color: #fff0f0">&#39;(A)&#39;</span>,<span style="color: #996633">advance</span><span style="color: #333333">=</span><span style="background-color: #fff0f0">&#39;no&#39;</span>) <span style="background-color: #fff0f0">&#39;Enter number of blocks: &#39;</span>
 <span style="color: #008800; font-weight: bold">read</span> (<span style="color: #333333">*</span>,<span style="color: #333333">*</span>) <span style="color: #996633">m</span>
 <span style="color: #996633">n1</span> <span style="color: #333333">=</span> <span style="color: #996633">m</span><span style="color: #333333">*</span><span style="color: #0000DD; font-weight: bold">4</span>
 <span style="color: #996633">n2</span> <span style="color: #333333">=</span> <span style="color: #996633">m</span><span style="color: #333333">*</span><span style="color: #0000DD; font-weight: bold">7</span>
 <span style="color: #996633">c</span> <span style="color: #333333">=</span> <span style="color: #6600EE; font-weight: bold">0.499999</span>
 <span style="color: #996633">x</span>(<span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> <span style="color: #6600EE; font-weight: bold">0.333333</span>

<span style="color: #888888">! Uncomment to use memoryless source</span>
<span style="color: #888888">! Memoryless Generated Source (here n is number of bits)</span>
<span style="color: #888888">! x(1) = 0.333333</span>
<span style="color: #888888">! do i = 1, n1-1</span>
<span style="color: #888888">!  if (x(i) &gt;= 0 .and. x(i) &lt; c) then</span>
<span style="color: #888888">!   x(i+1) = x(i)/c</span>
<span style="color: #888888">!   bit(i) = 0</span>
<span style="color: #888888">!  else</span>
<span style="color: #888888">!   x(i+1) = (1-x(i))/(1-c)</span>
<span style="color: #888888">!   bit(i) = 1</span>
<span style="color: #888888">!  end if</span>
<span style="color: #888888">! end do</span>

<span style="color: #888888">! PWL Generated Source</span>
 <span style="color: #996633">p1</span> <span style="color: #333333">=</span> (<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">c</span>)<span style="color: #333333">*</span><span style="color: #996633">p2</span><span style="color: #333333">/</span><span style="color: #996633">c</span>
 <span style="color: #996633">a</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">/</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>(<span style="color: #996633">p1</span><span style="color: #333333">+</span><span style="color: #996633">p2</span>))
 <span style="color: #008800; font-weight: bold">if</span> (<span style="color: #996633">p1</span><span style="color: #333333">+</span><span style="color: #996633">p2</span> <span style="color: #333333">&lt;</span> <span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">  </span><span style="color: #996633">c1</span> <span style="color: #333333">=</span> <span style="color: #996633">c</span><span style="color: #333333">-</span>(<span style="color: #996633">c</span><span style="color: #333333">/</span><span style="color: #996633">a</span>)
  <span style="color: #996633">c2</span> <span style="color: #333333">=</span> <span style="color: #996633">c</span><span style="color: #333333">+</span>((<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">c</span>)<span style="color: #333333">/</span><span style="color: #996633">a</span>)
  <span style="color: #996633">d1</span> <span style="color: #333333">=</span> <span style="color: #996633">c1</span><span style="color: #333333">*</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">c</span>)
  <span style="color: #996633">d2</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>((<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">c2</span>)<span style="color: #333333">*</span><span style="color: #996633">c</span>)
  <span style="color: #996633">a1</span> <span style="color: #333333">=</span> <span style="color: #333333">-</span><span style="color: #996633">c</span><span style="color: #333333">/</span>(<span style="color: #996633">c1</span><span style="color: #333333">-</span><span style="color: #996633">d1</span>)
  <span style="color: #996633">a2</span> <span style="color: #333333">=</span> <span style="color: #996633">a</span>
  <span style="color: #996633">a3</span> <span style="color: #333333">=</span> (<span style="color: #996633">c</span><span style="color: #333333">-</span><span style="color: #0000DD; font-weight: bold">1</span>)<span style="color: #333333">/</span>(<span style="color: #996633">d2</span><span style="color: #333333">-</span><span style="color: #996633">c2</span>)
  <span style="color: #008800; font-weight: bold">do </span><span style="color: #996633">i</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>, <span style="color: #996633">n2</span>
   <span style="color: #008800; font-weight: bold">if</span> (<span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&gt;=</span> <span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #000000; font-weight: bold">.and.</span> <span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&lt;</span> <span style="color: #996633">c1</span>) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">    </span><span style="color: #996633">x</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> (<span style="color: #996633">a1</span><span style="color: #333333">*</span>(<span style="color: #996633">x</span>(<span style="color: #996633">i</span>)<span style="color: #333333">-</span><span style="color: #996633">d1</span>))<span style="color: #333333">+</span><span style="color: #996633">c</span>
   <span style="color: #008800; font-weight: bold">else if</span> (<span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&gt;=</span> <span style="color: #996633">c1</span> <span style="color: #000000; font-weight: bold">.and.</span> <span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&lt;</span> <span style="color: #996633">c2</span>) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">    </span><span style="color: #996633">x</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> <span style="color: #996633">a2</span><span style="color: #333333">*</span>(<span style="color: #996633">x</span>(<span style="color: #996633">i</span>)<span style="color: #333333">-</span><span style="color: #996633">c1</span>)
   <span style="color: #008800; font-weight: bold">else</span>
<span style="color: #008800; font-weight: bold">    </span><span style="color: #996633">x</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> (<span style="color: #996633">a3</span><span style="color: #333333">*</span>(<span style="color: #996633">x</span>(<span style="color: #996633">i</span>)<span style="color: #333333">-</span><span style="color: #996633">c2</span>))<span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>
   <span style="color: #008800; font-weight: bold">end if</span>
<span style="color: #008800; font-weight: bold">   if</span> (<span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&gt;=</span> <span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #000000; font-weight: bold">.and.</span> <span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&lt;</span> <span style="color: #996633">c</span>) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">    </span><span style="color: #996633">bit</span>(<span style="color: #996633">i</span>) <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>
   <span style="color: #008800; font-weight: bold">else</span>
<span style="color: #008800; font-weight: bold">    </span><span style="color: #996633">bit</span>(<span style="color: #996633">i</span>) <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>
   <span style="color: #008800; font-weight: bold">end if</span>
<span style="color: #008800; font-weight: bold">  end do</span>
<span style="color: #008800; font-weight: bold"> else</span>
<span style="color: #008800; font-weight: bold">  </span><span style="color: #996633">c1</span> <span style="color: #333333">=</span> <span style="color: #996633">c</span><span style="color: #333333">-</span>((<span style="color: #996633">c</span><span style="color: #333333">-</span><span style="color: #0000DD; font-weight: bold">1</span>)<span style="color: #333333">/</span><span style="color: #996633">a</span>)
  <span style="color: #996633">c2</span> <span style="color: #333333">=</span> <span style="color: #996633">c</span><span style="color: #333333">-</span>(<span style="color: #996633">c</span><span style="color: #333333">/</span><span style="color: #996633">a</span>)
  <span style="color: #996633">d1</span> <span style="color: #333333">=</span> <span style="color: #996633">c1</span><span style="color: #333333">*</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">c</span>)
  <span style="color: #996633">d2</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>((<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">c2</span>)<span style="color: #333333">*</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">c</span>))
  <span style="color: #996633">a1</span> <span style="color: #333333">=</span> <span style="color: #333333">-</span><span style="color: #996633">c</span><span style="color: #333333">/</span>(<span style="color: #996633">c1</span><span style="color: #333333">-</span><span style="color: #996633">d1</span>)
  <span style="color: #996633">a2</span> <span style="color: #333333">=</span> <span style="color: #996633">a</span>
  <span style="color: #996633">a3</span> <span style="color: #333333">=</span> <span style="color: #996633">c</span><span style="color: #333333">/</span>(<span style="color: #996633">d2</span><span style="color: #333333">-</span><span style="color: #996633">c2</span>)
  <span style="color: #008800; font-weight: bold">do </span><span style="color: #996633">i</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>, <span style="color: #996633">n2</span>
   <span style="color: #008800; font-weight: bold">if</span> (<span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&gt;=</span> <span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #000000; font-weight: bold">.and.</span> <span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&lt;</span> <span style="color: #996633">c1</span>) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">    </span><span style="color: #996633">x</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> (<span style="color: #996633">a1</span><span style="color: #333333">*</span>(<span style="color: #996633">x</span>(<span style="color: #996633">i</span>)<span style="color: #333333">-</span><span style="color: #996633">d1</span>))<span style="color: #333333">+</span><span style="color: #996633">c</span>
   <span style="color: #008800; font-weight: bold">else if</span> (<span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&gt;=</span> <span style="color: #996633">c1</span> <span style="color: #000000; font-weight: bold">.and.</span> <span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&lt;</span> <span style="color: #996633">c2</span>) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">    </span><span style="color: #996633">x</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> (<span style="color: #996633">a2</span><span style="color: #333333">*</span>(<span style="color: #996633">x</span>(<span style="color: #996633">i</span>)<span style="color: #333333">-</span><span style="color: #996633">c1</span>))<span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>
   <span style="color: #008800; font-weight: bold">else</span>
<span style="color: #008800; font-weight: bold">    </span><span style="color: #996633">x</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> <span style="color: #996633">a3</span><span style="color: #333333">*</span>(<span style="color: #996633">x</span>(<span style="color: #996633">i</span>)<span style="color: #333333">-</span><span style="color: #996633">c2</span>)
   <span style="color: #008800; font-weight: bold">end if</span>
<span style="color: #008800; font-weight: bold">   if</span> (<span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&gt;=</span> <span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #000000; font-weight: bold">.and.</span> <span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&lt;</span> <span style="color: #996633">c</span>) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">    </span><span style="color: #996633">bit</span>(<span style="color: #996633">i</span>) <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>
   <span style="color: #008800; font-weight: bold">else</span>
<span style="color: #008800; font-weight: bold">    </span><span style="color: #996633">bit</span>(<span style="color: #996633">i</span>) <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>
   <span style="color: #008800; font-weight: bold">end if</span>
<span style="color: #008800; font-weight: bold">  end do</span>
<span style="color: #008800; font-weight: bold"> end if</span>

<span style="color: #888888">! Hamming Codes</span>
 <span style="color: #996633">j</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>
 <span style="color: #008800; font-weight: bold">do </span><span style="color: #996633">i</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>, <span style="color: #996633">n2</span>, <span style="color: #0000DD; font-weight: bold">7</span>
  <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span>) <span style="color: #333333">=</span> <span style="color: #996633">bit</span>(<span style="color: #996633">j</span>)
  <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> <span style="color: #996633">bit</span>(<span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>)
  <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>) <span style="color: #333333">=</span> <span style="color: #996633">bit</span>(<span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>)
  <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>) <span style="color: #333333">=</span> <span style="color: #996633">bit</span>(<span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>)
  <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #007020">xor</span>(<span style="color: #996633">bit</span>(<span style="color: #996633">j</span>),<span style="color: #996633">bit</span>(<span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>)),<span style="color: #996633">bit</span>(<span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>))
  <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #007020">xor</span>(<span style="color: #996633">bit</span>(<span style="color: #996633">j</span>),<span style="color: #996633">bit</span>(<span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>)),<span style="color: #996633">bit</span>(<span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>))
  <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #007020">xor</span>(<span style="color: #996633">bit</span>(<span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>),<span style="color: #996633">bit</span>(<span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>)),<span style="color: #996633">bit</span>(<span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>))
  <span style="color: #996633">j</span> <span style="color: #333333">=</span> <span style="color: #996633">j</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>
 <span style="color: #008800; font-weight: bold">end do</span>

<span style="color: #888888">! Error Sequence</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="background-color: #fff0f0">&#39;(A)&#39;</span>,<span style="color: #996633">advance</span><span style="color: #333333">=</span><span style="background-color: #fff0f0">&#39;no&#39;</span>) <span style="background-color: #fff0f0">&#39;Enter error probability: &#39;</span>
 <span style="color: #008800; font-weight: bold">read</span> (<span style="color: #333333">*</span>,<span style="color: #333333">*</span>) <span style="color: #996633">p</span>
 <span style="color: #996633">c_error</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span> <span style="color: #333333">-</span> <span style="color: #996633">p</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="background-color: #fff0f0">&#39;(A)&#39;</span>,<span style="color: #996633">advance</span><span style="color: #333333">=</span><span style="background-color: #fff0f0">&#39;no&#39;</span>) <span style="background-color: #fff0f0">&#39;Enter p2: &#39;</span>
 <span style="color: #008800; font-weight: bold">read</span> (<span style="color: #333333">*</span>,<span style="color: #333333">*</span>) <span style="color: #996633">p2</span>
 <span style="color: #996633">p1</span> <span style="color: #333333">=</span> (<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">c_error</span>)<span style="color: #333333">*</span><span style="color: #996633">p2</span><span style="color: #333333">/</span><span style="color: #996633">c_error</span>
 <span style="color: #996633">a</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">/</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>(<span style="color: #996633">p1</span><span style="color: #333333">+</span><span style="color: #996633">p2</span>))
 <span style="color: #008800; font-weight: bold">if</span> (<span style="color: #996633">p1</span><span style="color: #333333">+</span><span style="color: #996633">p2</span> <span style="color: #333333">&lt;</span> <span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">  </span><span style="color: #996633">c1</span> <span style="color: #333333">=</span> <span style="color: #996633">c_error</span><span style="color: #333333">-</span>(<span style="color: #996633">c_error</span><span style="color: #333333">/</span><span style="color: #996633">a</span>)
  <span style="color: #996633">c2</span> <span style="color: #333333">=</span> <span style="color: #996633">c_error</span><span style="color: #333333">+</span>((<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">c_error</span>)<span style="color: #333333">/</span><span style="color: #996633">a</span>)
  <span style="color: #996633">d1</span> <span style="color: #333333">=</span> <span style="color: #996633">c1</span><span style="color: #333333">*</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">c_error</span>)
  <span style="color: #996633">d2</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>((<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">c2</span>)<span style="color: #333333">*</span><span style="color: #996633">c_error</span>)
  <span style="color: #996633">a1</span> <span style="color: #333333">=</span> <span style="color: #333333">-</span><span style="color: #996633">c_error</span><span style="color: #333333">/</span>(<span style="color: #996633">c1</span><span style="color: #333333">-</span><span style="color: #996633">d1</span>)
  <span style="color: #996633">a2</span> <span style="color: #333333">=</span> <span style="color: #996633">a</span>
  <span style="color: #996633">a3</span> <span style="color: #333333">=</span> (<span style="color: #996633">c_error</span><span style="color: #333333">-</span><span style="color: #0000DD; font-weight: bold">1</span>)<span style="color: #333333">/</span>(<span style="color: #996633">d2</span><span style="color: #333333">-</span><span style="color: #996633">c2</span>)
  <span style="color: #008800; font-weight: bold">do </span><span style="color: #996633">i</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>, <span style="color: #996633">n2</span>
   <span style="color: #008800; font-weight: bold">if</span> (<span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&gt;=</span> <span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #000000; font-weight: bold">.and.</span> <span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&lt;</span> <span style="color: #996633">c1</span>) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">    </span><span style="color: #996633">x</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> (<span style="color: #996633">a1</span><span style="color: #333333">*</span>(<span style="color: #996633">x</span>(<span style="color: #996633">i</span>)<span style="color: #333333">-</span><span style="color: #996633">d1</span>))<span style="color: #333333">+</span><span style="color: #996633">c_error</span>
   <span style="color: #008800; font-weight: bold">else if</span> (<span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&gt;=</span> <span style="color: #996633">c1</span> <span style="color: #000000; font-weight: bold">.and.</span> <span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&lt;</span> <span style="color: #996633">c2</span>) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">    </span><span style="color: #996633">x</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> <span style="color: #996633">a2</span><span style="color: #333333">*</span>(<span style="color: #996633">x</span>(<span style="color: #996633">i</span>)<span style="color: #333333">-</span><span style="color: #996633">c1</span>)
   <span style="color: #008800; font-weight: bold">else</span>
<span style="color: #008800; font-weight: bold">    </span><span style="color: #996633">x</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> (<span style="color: #996633">a3</span><span style="color: #333333">*</span>(<span style="color: #996633">x</span>(<span style="color: #996633">i</span>)<span style="color: #333333">-</span><span style="color: #996633">c2</span>))<span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>
   <span style="color: #008800; font-weight: bold">end if</span>
<span style="color: #008800; font-weight: bold">   if</span> (<span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&gt;=</span> <span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #000000; font-weight: bold">.and.</span> <span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&lt;</span> <span style="color: #996633">c_error</span>) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">    </span><span style="color: #996633">bit_error</span>(<span style="color: #996633">i</span>) <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>
   <span style="color: #008800; font-weight: bold">else</span>
<span style="color: #008800; font-weight: bold">    </span><span style="color: #996633">bit_error</span>(<span style="color: #996633">i</span>) <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>
   <span style="color: #008800; font-weight: bold">end if</span>
<span style="color: #008800; font-weight: bold">  end do</span>
<span style="color: #008800; font-weight: bold"> else</span>
<span style="color: #008800; font-weight: bold">  </span><span style="color: #996633">c1</span> <span style="color: #333333">=</span> <span style="color: #996633">c_error</span><span style="color: #333333">-</span>((<span style="color: #996633">c_error</span><span style="color: #333333">-</span><span style="color: #0000DD; font-weight: bold">1</span>)<span style="color: #333333">/</span><span style="color: #996633">a</span>)
  <span style="color: #996633">c2</span> <span style="color: #333333">=</span> <span style="color: #996633">c_error</span><span style="color: #333333">-</span>(<span style="color: #996633">c_error</span><span style="color: #333333">/</span><span style="color: #996633">a</span>)
  <span style="color: #996633">d1</span> <span style="color: #333333">=</span> <span style="color: #996633">c1</span><span style="color: #333333">*</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">c_error</span>)
  <span style="color: #996633">d2</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span>((<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">c2</span>)<span style="color: #333333">*</span>(<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">c_error</span>))
  <span style="color: #996633">a1</span> <span style="color: #333333">=</span> <span style="color: #333333">-</span><span style="color: #996633">c_error</span><span style="color: #333333">/</span>(<span style="color: #996633">c1</span><span style="color: #333333">-</span><span style="color: #996633">d1</span>)
  <span style="color: #996633">a2</span> <span style="color: #333333">=</span> <span style="color: #996633">a</span>
  <span style="color: #996633">a3</span> <span style="color: #333333">=</span> <span style="color: #996633">c_error</span><span style="color: #333333">/</span>(<span style="color: #996633">d2</span><span style="color: #333333">-</span><span style="color: #996633">c2</span>)
  <span style="color: #008800; font-weight: bold">do </span><span style="color: #996633">i</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>, <span style="color: #996633">n2</span>
   <span style="color: #008800; font-weight: bold">if</span> (<span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&gt;=</span> <span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #000000; font-weight: bold">.and.</span> <span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&lt;</span> <span style="color: #996633">c1</span>) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">    </span><span style="color: #996633">x</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> (<span style="color: #996633">a1</span><span style="color: #333333">*</span>(<span style="color: #996633">x</span>(<span style="color: #996633">i</span>)<span style="color: #333333">-</span><span style="color: #996633">d1</span>))<span style="color: #333333">+</span><span style="color: #996633">c_error</span>
   <span style="color: #008800; font-weight: bold">else if</span> (<span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&gt;=</span> <span style="color: #996633">c1</span> <span style="color: #000000; font-weight: bold">.and.</span> <span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&lt;</span> <span style="color: #996633">c2</span>) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">    </span><span style="color: #996633">x</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> (<span style="color: #996633">a2</span><span style="color: #333333">*</span>(<span style="color: #996633">x</span>(<span style="color: #996633">i</span>)<span style="color: #333333">-</span><span style="color: #996633">c1</span>))<span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>
   <span style="color: #008800; font-weight: bold">else</span>
<span style="color: #008800; font-weight: bold">    </span><span style="color: #996633">x</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> <span style="color: #996633">a3</span><span style="color: #333333">*</span>(<span style="color: #996633">x</span>(<span style="color: #996633">i</span>)<span style="color: #333333">-</span><span style="color: #996633">c2</span>)
   <span style="color: #008800; font-weight: bold">end if</span>
<span style="color: #008800; font-weight: bold">   if</span> (<span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&gt;=</span> <span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #000000; font-weight: bold">.and.</span> <span style="color: #996633">x</span>(<span style="color: #996633">i</span>) <span style="color: #333333">&lt;</span> <span style="color: #996633">c_error</span>) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">    </span><span style="color: #996633">bit_error</span>(<span style="color: #996633">i</span>) <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>
   <span style="color: #008800; font-weight: bold">else</span>
<span style="color: #008800; font-weight: bold">    </span><span style="color: #996633">bit_error</span>(<span style="color: #996633">i</span>) <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>
   <span style="color: #008800; font-weight: bold">end if</span>
<span style="color: #008800; font-weight: bold">  end do</span>
<span style="color: #008800; font-weight: bold"> end if</span>

<span style="color: #888888">! Receiver Side (hamming encoded sequence + error sequence), calculate error probability before decoding, prefill future corrected bits</span>
 <span style="color: #996633">practical_error_before</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>;
 <span style="color: #008800; font-weight: bold">do </span><span style="color: #996633">i</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>, <span style="color: #996633">n2</span>
  <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span>), <span style="color: #996633">bit_error</span>(<span style="color: #996633">i</span>))
  <span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span>) <span style="color: #333333">=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span>)
  <span style="color: #008800; font-weight: bold">if</span> (<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span>)) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">practical_error_before</span> <span style="color: #333333">=</span> <span style="color: #996633">practical_error_before</span> <span style="color: #333333">+</span> <span style="color: #0000DD; font-weight: bold">1</span>
  <span style="color: #008800; font-weight: bold">end if</span>
<span style="color: #008800; font-weight: bold"> end do</span>
<span style="color: #008800; font-weight: bold"> </span><span style="color: #996633">p_practical_error_before</span> <span style="color: #333333">=</span> <span style="color: #996633">practical_error_before</span><span style="color: #333333">/</span><span style="color: #996633">n2</span>
 
<span style="color: #888888">! Perform Hamming coding again on the received bits</span>
  
 <span style="color: #008800; font-weight: bold">do </span><span style="color: #996633">i</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>, <span style="color: #996633">n2</span>, <span style="color: #0000DD; font-weight: bold">7</span>
  <span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span>) <span style="color: #333333">=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span>)
  <span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>)
  <span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>) <span style="color: #333333">=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>)
  <span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>) <span style="color: #333333">=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>)
  <span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #007020">xor</span>(<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span>),<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>)),<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>))
  <span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #007020">xor</span>(<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span>),<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>)),<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>))
  <span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #007020">xor</span>(<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>),<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>)),<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>))
 <span style="color: #008800; font-weight: bold">end do</span>

<span style="color: #888888">! Error Correction based on symptoms, &quot;&amp;&quot; is placed to continue next line (fortran95 cannot read long lines)</span>
 <span style="color: #008800; font-weight: bold">do </span><span style="color: #996633">i</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>, <span style="color: #996633">n2</span>, <span style="color: #0000DD; font-weight: bold">7</span>
  <span style="color: #008800; font-weight: bold">if</span> ((<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>)) <span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>)) &amp;
<span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>))) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span>),<span style="color: #0000DD; font-weight: bold">1</span>)
  <span style="color: #008800; font-weight: bold">else if</span> ((<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>)) <span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>)) &amp;
<span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>) <span style="color: #333333">==</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>))) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>),<span style="color: #0000DD; font-weight: bold">1</span>)
  <span style="color: #008800; font-weight: bold">else if</span> ((<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>)) <span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>) <span style="color: #333333">==</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>)) &amp;
<span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>))) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>),<span style="color: #0000DD; font-weight: bold">1</span>)
  <span style="color: #008800; font-weight: bold">else if</span> ((<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>) <span style="color: #333333">==</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>)) <span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>)) &amp;
<span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>))) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>),<span style="color: #0000DD; font-weight: bold">1</span>)
  <span style="color: #008800; font-weight: bold">else if</span> ((<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>)) <span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>) <span style="color: #333333">==</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>)) &amp;
<span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>) <span style="color: #333333">==</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>))) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>),<span style="color: #0000DD; font-weight: bold">1</span>)
  <span style="color: #008800; font-weight: bold">else if</span> ((<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>) <span style="color: #333333">==</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>)) <span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>)) &amp;
<span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>) <span style="color: #333333">==</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>))) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>),<span style="color: #0000DD; font-weight: bold">1</span>)
  <span style="color: #008800; font-weight: bold">else if</span> ((<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>) <span style="color: #333333">==</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>)) <span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>) <span style="color: #333333">==</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>)) &amp;
<span style="color: #000000; font-weight: bold">.and.</span> (<span style="color: #996633">bit_hamming_uncorrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>))) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>) <span style="color: #333333">=</span> <span style="color: #007020">xor</span>(<span style="color: #996633">bit_receiver</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>),<span style="color: #0000DD; font-weight: bold">1</span>)  
  <span style="color: #008800; font-weight: bold">end if</span>
<span style="color: #008800; font-weight: bold"> end do</span>

<span style="color: #888888">! Error Probability After Decoding</span>
 <span style="color: #996633">practical_error_after</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>;
 <span style="color: #008800; font-weight: bold">do </span><span style="color: #996633">i</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>, <span style="color: #996633">n2</span>
  <span style="color: #008800; font-weight: bold">if</span> (<span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span>)) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">practical_error_after</span> <span style="color: #333333">=</span> <span style="color: #996633">practical_error_after</span> <span style="color: #333333">+</span> <span style="color: #0000DD; font-weight: bold">1</span>
  <span style="color: #008800; font-weight: bold">end if</span>
<span style="color: #008800; font-weight: bold"> end do</span>
<span style="color: #008800; font-weight: bold"> </span><span style="color: #996633">p_practical_error_after</span> <span style="color: #333333">=</span> <span style="color: #996633">practical_error_after</span><span style="color: #333333">/</span><span style="color: #996633">n2</span>

<span style="color: #888888">! Probability of Correct, and incorrect decoding</span>
 <span style="color: #996633">p_theory_correct_decoding</span> <span style="color: #333333">=</span> (((<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">c_error</span>)<span style="color: #333333">*</span><span style="color: #996633">p2</span><span style="color: #333333">*</span>((<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">p1</span>)<span style="color: #333333">**</span><span style="color: #0000DD; font-weight: bold">5</span>)) <span style="color: #333333">+</span> (<span style="color: #0000DD; font-weight: bold">5</span><span style="color: #333333">*</span><span style="color: #996633">c_error</span><span style="color: #333333">*</span><span style="color: #996633">p1</span><span style="color: #333333">*</span><span style="color: #996633">p2</span><span style="color: #333333">*</span>((<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">p1</span>)<span style="color: #333333">**</span><span style="color: #0000DD; font-weight: bold">4</span>)) <span style="color: #333333">+</span> (<span style="color: #996633">c_error</span><span style="color: #333333">*</span>((<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">p1</span>)<span style="color: #333333">**</span><span style="color: #0000DD; font-weight: bold">5</span>)<span style="color: #333333">*</span><span style="color: #996633">p1</span>) <span style="color: #333333">+</span> &amp;
(<span style="color: #996633">c_error</span><span style="color: #333333">*</span>((<span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">-</span><span style="color: #996633">p1</span>)<span style="color: #333333">**</span><span style="color: #0000DD; font-weight: bold">6</span>)))
 <span style="color: #996633">p_theory_incorrect_decoding</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span> <span style="color: #333333">-</span> <span style="color: #996633">p_theory_correct_decoding</span>
 <span style="color: #996633">incorrect_decoding</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>
 <span style="color: #008800; font-weight: bold">do </span><span style="color: #996633">i</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>, <span style="color: #996633">n2</span>, <span style="color: #0000DD; font-weight: bold">7</span>
  <span style="color: #008800; font-weight: bold">if</span> ((<span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span>)) <span style="color: #000000; font-weight: bold">.or.</span> (<span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">1</span>)) <span style="color: #000000; font-weight: bold">.or.</span> &amp;
(<span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">2</span>)) <span style="color: #000000; font-weight: bold">.or.</span> (<span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">3</span>)) <span style="color: #000000; font-weight: bold">.or.</span> &amp;
(<span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">4</span>)) <span style="color: #000000; font-weight: bold">.or.</span> (<span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">5</span>)) <span style="color: #000000; font-weight: bold">.or.</span> &amp;
(<span style="color: #996633">bit_corrected</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>) <span style="color: #333333">/=</span> <span style="color: #996633">bit_hamming</span>(<span style="color: #996633">i</span><span style="color: #333333">+</span><span style="color: #0000DD; font-weight: bold">6</span>))) <span style="color: #008800; font-weight: bold">then</span>
<span style="color: #008800; font-weight: bold">   </span><span style="color: #996633">incorrect_decoding</span> <span style="color: #333333">=</span> <span style="color: #996633">incorrect_decoding</span> <span style="color: #333333">+</span> <span style="color: #0000DD; font-weight: bold">1</span>
  <span style="color: #008800; font-weight: bold">end if</span>
<span style="color: #008800; font-weight: bold"> end do</span>
<span style="color: #008800; font-weight: bold"> </span><span style="color: #996633">p_incorrect_decoding</span> <span style="color: #333333">=</span> <span style="color: #996633">incorrect_decoding</span><span style="color: #333333">/</span><span style="color: #996633">m</span>

<span style="color: #888888">! Results</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="background-color: #fff0f0">&#39;(A)&#39;</span>,<span style="color: #996633">advance</span><span style="color: #333333">=</span><span style="background-color: #fff0f0">&#39;no&#39;</span>) <span style="background-color: #fff0f0">&#39;Practical error before decoding: &#39;</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="color: #333333">*</span>) <span style="color: #996633">practical_error_before</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="background-color: #fff0f0">&#39;(A)&#39;</span>,<span style="color: #996633">advance</span><span style="color: #333333">=</span><span style="background-color: #fff0f0">&#39;no&#39;</span>) <span style="background-color: #fff0f0">&#39;Practical error after decoding: &#39;</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="color: #333333">*</span>) <span style="color: #996633">practical_error_after</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="background-color: #fff0f0">&#39;(A)&#39;</span>,<span style="color: #996633">advance</span><span style="color: #333333">=</span><span style="background-color: #fff0f0">&#39;no&#39;</span>) <span style="background-color: #fff0f0">&#39;Probability practical error before decoding: &#39;</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="color: #333333">*</span>) <span style="color: #996633">p_practical_error_before</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="background-color: #fff0f0">&#39;(A)&#39;</span>,<span style="color: #996633">advance</span><span style="color: #333333">=</span><span style="background-color: #fff0f0">&#39;no&#39;</span>) <span style="background-color: #fff0f0">&#39;Probability practical error after decoding: &#39;</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="color: #333333">*</span>) <span style="color: #996633">p_practical_error_after</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="background-color: #fff0f0">&#39;(A)&#39;</span>,<span style="color: #996633">advance</span><span style="color: #333333">=</span><span style="background-color: #fff0f0">&#39;no&#39;</span>) <span style="background-color: #fff0f0">&#39;Incorrect decoding: &#39;</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="color: #333333">*</span>) <span style="color: #996633">incorrect_decoding</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="background-color: #fff0f0">&#39;(A)&#39;</span>,<span style="color: #996633">advance</span><span style="color: #333333">=</span><span style="background-color: #fff0f0">&#39;no&#39;</span>) <span style="background-color: #fff0f0">&#39;Probability of incorrect decoding: &#39;</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="color: #333333">*</span>) <span style="color: #996633">p_incorrect_decoding</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="background-color: #fff0f0">&#39;(A)&#39;</span>,<span style="color: #996633">advance</span><span style="color: #333333">=</span><span style="background-color: #fff0f0">&#39;no&#39;</span>) <span style="background-color: #fff0f0">&#39;Theoretical probability of incorrect decoding: &#39;</span>
 <span style="color: #008800; font-weight: bold">write</span> (<span style="color: #333333">*</span>,<span style="color: #333333">*</span>) <span style="color: #996633">p_theory_incorrect_decoding</span>


<span style="color: #888888">! Debugging purposes, uncomment them to see binary sequences, max 18 blocks</span>
<span style="color: #888888">! do i = 1, n2</span>
<span style="color: #888888">!  write(*,&#39;(1i1.1)&#39;,advance=&#39;no&#39;) bit_hamming(i)</span>
<span style="color: #888888">! end do</span>
<span style="color: #888888">! write (*,*) &#39; &#39;</span>
<span style="color: #888888">! do i = 1, n2</span>
<span style="color: #888888">!  write(*,&#39;(1i1.1)&#39;,advance=&#39;no&#39;) bit_error(i)</span>
<span style="color: #888888">! end do</span>
<span style="color: #888888">! write (*,*) &#39; &#39;</span>
<span style="color: #888888">! do i = 1, n2</span>
<span style="color: #888888">!  write(*,&#39;(1i1.1)&#39;,advance=&#39;no&#39;) bit_receiver(i)</span>
<span style="color: #888888">! end do</span>
<span style="color: #888888">!  write (*,*) &#39; &#39;</span>
<span style="color: #888888">!  do i = 1, n2</span>
<span style="color: #888888">!  write(*,&#39;(1i1.1)&#39;,advance=&#39;no&#39;) bit_corrected(i)</span>
<span style="color: #888888">! end do</span>
<span style="color: #888888">!  write (*,*) &#39; &#39;</span>

<span style="color: #008800; font-weight: bold">end program </span><span style="color: #996633">Piece_Wise_Linear_Error</span>
</pre></div>

## Mirrors

*   [https://www.publish0x.com/fajar-purnama-academics/74-hamming-codes-xervrkp?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/74-hamming-codes-xervrkp?a=4oeEw0Yb0B&tid=github)
*   [https://0darkking0.blogspot.com/2021/01/74-hamming-codes.html](https://0darkking0.blogspot.com/2021/01/74-hamming-codes.html)
*   [https://0fajarpurnama0.medium.com/7-4-hamming-codes-218a9c933786](https://0fajarpurnama0.medium.com/7-4-hamming-codes-218a9c933786)
*   [https://0fajarpurnama0.github.io/masters/2020/09/15/hamming-codes](https://0fajarpurnama0.github.io/masters/2020/09/15/hamming-codes)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/hamming-codes](https://hicc.cs.kumamoto-u.ac.jp/~fajar/masters/hamming-codes)
*   [https://steemit.com/math/@fajar.purnama/7-4-hamming-codes?r=fajar.purnama](https://steemit.com/math/@fajar.purnama/7-4-hamming-codes?r=fajar.purnama)
*   [https://stemgeeks.net/math/@fajar.purnama/7-4-hamming-codes?ref=fajar.purnama](https://stemgeeks.net/math/@fajar.purnama/7-4-hamming-codes?ref=fajar.purnama)
*   [https://blurtter.com/blurtech/@fajar.purnama/7-4-hamming-codes?referral=fajar.purnama](https://blurtter.com/blurtech/@fajar.purnama/7-4-hamming-codes?referral=fajar.purnama)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/7-4-hamming-codes](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/7-4-hamming-codes)
*   [http://0fajarpurnama0.weebly.com/blog/74-hamming-codes](http://0fajarpurnama0.weebly.com/blog/74-hamming-codes)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/190-7-4-hamming-codes](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/190-7-4-hamming-codes)
*   [https://read.cash/@FajarPurnama/74-hamming-codes-b1213691](https://read.cash/@FajarPurnama/74-hamming-codes-b1213691)
*   [https://www.uptrennd.com/post-detail/7-4-hamming-codes~ODU1MjQy](https://www.uptrennd.com/post-detail/7-4-hamming-codes~ODU1MjQy)