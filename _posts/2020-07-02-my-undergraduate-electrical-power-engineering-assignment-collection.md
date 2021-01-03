---
layout: post
title: My Undergraduate Electrical Power Engineering Assignment Collection
categories: bachelor
tags: [Basic Electrical Power Engineering, conversion, transmission, distribution, generator, transformer, inverter, rectifier, assignment]
featuredimage: https://images.hive.blog/DQmQfZFm95cAGsYWT1awrACPWJtWsgEmZ46LbdqGRxHtWFW/4.inverter-rectifier-ups.png
description: This task covers the supply of electricity (generation, transmission, distribution), basic electrical theories, transformer, and generators.
canonicalurl: https://0fajarpurnama0.github.io/bachelor/2020/07/02/my-undergraduate-electrical-power-engineering-assignment-collection
---
## Note

This is a collection of my undergraduate assignments that I translated to English myself in the Basic Electrical Power Engineering course. This assignment has never been published anywhere and I, as the author and copyright holder, license this assignment customized CC-BY-SA where anyone can share, copy, republish, and sell on condition to state my name as the author and notify that the original and open version available here.

## General Electric Energy Supply Process

![1.Process of procuring electrical energy in general.png](https://images.hive.blog/DQmWDUWaXVP82U2PYZAq4Kn4BAdYJqsHKRoYSePsDgvanSa/1.Process%20of%20procuring%20electrical%20energy%20in%20general.png)

Process of supplying electrical energy in general: Conversion (generation) → Transmission → Distribution.



### Electrical Conversion

Conversion in the field of electric power is the conversion from other energy to electrical energy. This conversion is usually used to generate electricity, producing this electricity is called a generator, in other words as a producer. Here are example sources of electrical energy: Hydroelectric Power Plant, Steam Power Plant, Nuclear Power Plant, Gas Power Plant, and Diesel Power Plant. Other generators include: Solar Power, Wind Power, Chemical Reactions, Geothermal Energy and others.

Nuclear Energy etc → Reactor Converter etc → Alternate → Transformer Step Up; Reactor Converter etc → Generate

### Electric Transmission

Electric transmission is the process of sending electricity. The delivery goes through the power grid.

Step-Up Transformer → High Voltage Network → Step-Down Transformer → Medium Voltage Network → Factory

### Electricity Distribution

Electricity distribution is the process of sharing electricity to consumers.

Medium Voltage Network → Step-Down Transformer → Low Voltage Network → Consumer

![2.Direct-Current-Plot.jpg](https://images.hive.blog/DQmWAgZTV7Wqf9rit1FC5AvxJNYfiPAtf5USZchExRvxC1W/2.Direct-Current-Plot.jpg)

DC (Direct Current) electric graph, V(t) = 2 volt, V(0) = 0 volt

![3.Alternating-Current-Plot.jpg](https://images.hive.blog/DQmWbzcJ2BnVi3qmJfhckJgxuZZRWxz1kKRyRkJXfJsLFmP/3.Alternating-Current-Plot.jpg)

AC (Alternating Current) electric graph, V(t) = sin(wt)



## Basic Theories

### Ohm Law

Ohm law: V=IR, V = voltage (volt), I = current (ampere), R = resistance (ohm).

### Inverter, Rectifier, UPS

![4.inverter-rectifier-ups.png](https://images.hive.blog/DQmQfZFm95cAGsYWT1awrACPWJtWsgEmZ46LbdqGRxHtWFW/4.inverter-rectifier-ups.png)

AC (alternating current) electricity to DC, using a rectifier. DC (direct current) electricity to AC, using an inverter. If the electricity suddenly goes out, it can damage the computer, hardware and software (data). To anticipate this, a UPS was created. The UPS supplies AC power to the computer as well as stores electricity in DC form. If the power suddenly goes out, the computer will use the UPS stored power, at least giving it time to store data and shut down the computer safely.



### Transformator

Transformers are devices for changing the voltage. The step-down transformer lowers the voltage while the step-up transformer increases the voltage.

![5.trafo-step-down-dc.png](https://images.hive.blog/DQmPraPe6nNTtt1vGZrMWcuB2K3NageWT4kYxY1yPABxTLX/5.trafo-step-down-dc.png)

Example DC step-down transformer, DC step-up transformer when the circuit is reversed. V<sub>in</sub> = V<sub>1</sub>+V<sub>2</sub> = I<sub>1</sub> R<sub>1</sub>+I<sub>3</sub> R<sub>2</sub>. I<sub>1</sub> = I<sub>2</sub>+I<sub>3</sub>. V<sub>out</sub> = V<sub>2</sub> = V<sub>in</sub>-V<sub>1</sub>.

![6.trafo-ac.png](https://images.hive.blog/DQmPhNBwvzEx9xriGY4gFiY48KqgaSmMxpVEUTtzVCnPsrn/6.trafo-ac.png)

AC Transformator. V<sub>1</sub>/V<sub>2 <sub>= N<sub>1<sub>/N<sub>2 <sub>= I<sub>2<sub>/I<sub>1<sub>.</sub></sub></sub></sub></sub></sub></sub></sub></sub></sub>



### Magnetic Field

![7.right-hand-law.png](https://images.hive.blog/DQmefHuNSt91hB2r85KJ4owwVMSn3Ed2Apm4qxQkggxrWoh/7.right-hand-law.png)

If there is a current flowing I towards dl (long) then the magnetic field strength H.



dH = (IdI x a<sub>R</sub>)/(4πR<sup>2</sup>)(A/m), H = ∮(IdI x a<sub>R</sub>)/(4πR<sup>2</sup>)

I = current (A), dl = length, aR = vector, R = vector length.

Magnetic Field Flux

B = dΦ/ds = μH, Φ = ∮Bds

B = magnetic field flux density (weber/area), Φ=magnetic field flux (weber), ds = area (m2), H = magnetic field strength (A/m)

### Direct Current Generator Working Principle

The working principle of a direct current generator is based on Faraday's law: e = -N dΦ/dt

Where, N: number of turns, Φ: magnetic flux, e: induced voltage, emf (electromotive force).

![8.gaya-gerak-listrik.png](https://images.hive.blog/DQmbuEnDbs2ekQjEp1V3ZXA8aacCkQUb3WLQerzkweT9mLs/8.gaya-gerak-listrik.png)

The process of forming an emf on the side of the generator coil.

![9.komutator.png](https://images.hive.blog/DQmQB7NBVAC1H8t1e1pqHjcapgpt6FjTVPnzZxaT2GntdpQ/9.komutator.png)

The resulting voltage is an alternating current. Furthermore, the current will be rectified by the commutator.



The commutator functions as a switch. The commutator is in the form of a split ring attached to the end of the anchor. When the anchor rotates, the ring will rotate. When the coil has rotated half a turn, the brush will close the ring gap so that the voltage becomes zero. Because the ring continues to rotate, the gap will open again and create tension again. If the voltage period is the same as the ring rotation period, the voltage that arises is the full wave direct current voltage.

### Types of Direct Current Generators Viewed from its Field Winding

![10.Generator-DC-penguatan-terpisah.png](https://images.hive.blog/DQmYzMxSW79pVM3kX3swNxc5wvJvd8fx23WNrxm4T8BMS37/10.Generator-DC-penguatan-terpisah.png)

Separated gain DC generator. V<sub>f</sub> = I<sub>f</sub> R<sub>f</sub>, E<sub>a</sub> = V<sub>t</sub> + I<sub>a</sub> R<sub>a</sub>



#### Self-Strengthening Generator

![11.Generator-Penguatan-Sendiri-Seri.png](https://images.hive.blog/DQmRJQ2mi5TCcfmsUANrznYpX2MZPAYDJQvrs3pb4fGzLFq/11.Generator-Penguatan-Sendiri-Seri.png)

Series. V<sub>t</sub> = I<sub>a</sub> R<sub>a</sub>, E<sub>a</sub> = I<sub>a</sub> (R<sub>a</sub> + R<sub>f</sub>) + V<sub>t</sub> + < V<sub>si</sub>

![12.Generator-Penguatan-Sendiri-Shunt.png](https://images.hive.blog/DQmesJYaj9hBz74jS3dKU8Xx3nvzqMZDmAXHWQ1W4bf67cb/12.Generator-Penguatan-Sendiri-Shunt.png)

Shunt. V<sub>t</sub> = I<sub>f</sub> R<sub>f</sub>, E<sub>a</sub> = I<sub>a</sub> R<sub>a</sub> + V<sub>t</sub> + < V<sub>si</sub>



#### Compound

![13.Compound-Panjang.png](https://images.hive.blog/DQmUATSXnSdBgmvSe9GtYWUzjXA4FTXDZqrFe7urZfcCBQm/13.Compound-Panjang.png)

Long. I<sub>a</sub> = I<sub>f1</sub> = I<sub>L</sub> + I<sub>f2</sub>, E<sub>a</sub> = V<sub>t</sub> + I<sub>a</sub>(R<sub>a</sub> + R<sub>f1</sub>) + < V<sub>si</sub>

![14.Compound-Pendek.png](https://images.hive.blog/DQmddviNdWUFS1RKrd9ZfRNg8MG5rbf8Tp9kTv9He3Jk2x9/14.Compound-Pendek.png)

Short. I<sub>a</sub> = I<sub>f1</sub> + I<sub>f2</sub> = I<sub>L</sub> + I<sub>f2</sub>, E<sub>a</sub> = V<sub>t</sub> + I<sub>L</sub>R<sub>f1</sub> + I<sub>a</sub>R<sub>a</sub> + < V<sub>si</sub>



## Some Exercises

![15.generator-DC-kompon-panjang.png](https://images.hive.blog/DQmNj2kwgYGP2CWLrP3ZKeZTrDgUD2r2Y38LbLVkRzsVLyH/15.generator-DC-kompon-panjang.png)

![16.generator-DC-kompon-panjang-disederhanakan.png](https://images.hive.blog/DQmWWonsvfAgWuUeaZd1nnozM3rEh9DaKh3mohsQ1aQspvY/16.generator-DC-kompon-panjang-disederhanakan.png)

1\. A long compound DC generator provides 300 kW of power at a terminal voltage of 600V. The parallel field resistance is 75 the armature resistance, the brush resistance is 0.03, the field winding commutation resistance is 0.011Ω the series field resistance is 0.012Ω, the divertor resistance is 0.036\. When the generator is fully loaded calculate the voltage and power generated by the armature winding!



I<sub>sh</sub> = 600V/75Ω = 8A, I = 300000W/600V = 500A, I<sub>a</sub> = I<sub>sh</sub>+I = 8A+500A = 508A

∆V<sub>total</sub> = ∆V+∆V<sub>a</sub> = I<sub>a</sub> R+I<sub>a</sub> R<sub>a</sub> = I<sub>a</sub> (R+R<sub>a</sub>) = 508A(0.03Ω+0.02Ω) = 25.4V

emfV = V+∆V<sub>total</sub> = 600V+20.4V = 625.4V

emfP = (emfV)(I<sub>a</sub>) = (625.4V)(508A) = 317703.2W

2\. Transformer 1ɸ is given a 50 Hz supply step down 2200 V → 250 V with an area of 36 cm2 and a flux density of 6 wb/m2, look for the primary and secondary windings.

Known:

f = 50 Hz

E<sub>1</sub> = 2200 V

E<sub>2</sub> = 250 V

A = 0.0036 m<sup>2</sup>

B<sub>m</sub> = 6 wb/m<sup>2</sup>

Asked:

N1 and N2

Answer

Φ<sub>m</sub> = (Bm)(A)=(6 wb/m<sup>2</sup>)(0.0036 m<sup>2</sup>) = 0.0216 wb

E = (4.44)(f)(N)(Φ<sub>m</sub>) = (4.44)(f)(N)(Bm)(A)

Primary Winding = E<sub>1</sub>/((4.44)(f)(Φ<sub>m</sub>)) = 2200/((4.44)(50 Hz)(0.0216 wb)) = 458.79

Secondary Winding = E<sub>2</sub>/((4.44)(f)(Φ<sub>m</sub>)) = 250/((4.44)(50 Hz)(0.0216 wb)) = 52.135

3\. The power of the transformer 1ɸ is 25 KVI, the primary winding is 500, the secondary winding is 50, the primary winding is connected to a voltage of 3000 V with a frequency of 50 Hz. Find the load currents in the primary and secondary winding, secondary emf and maximum flux. (ignore the drop voltage)

Known

P = 25 VI

N<sub>1</sub> = 500

N<sub>2</sub> = 50

E<sub>1</sub> = 3000 V

f = 50 Hz

Asked

I<sub>1</sub>, I<sub>2</sub>, E<sub>2</sub> and Φ<sub>m</sub>

Answer

E = (4.44)(f)(N)(Φ<sub>m</sub>) = (4.44)(f)(N)(Bm)(A)

Φ<sub>m</sub> = (4.44)(f)(N<sub>1</sub>)/E<sub>1</sub> = (4.44)(50 Hz)(500)/(3000 V) = 37 wb

E<sub>2</sub>/E<sub>1</sub> = (4.44)(f)(N<sub>2</sub>)(Φ<sub>m</sub>)/(4.44)(f)(N<sub>1</sub>)(Φ<sub>m</sub>) = N<sub>2</sub>/N<sub>1</sub>

E<sub>2</sub>=N<sub>2</sub>/N<sub>1</sub> E<sub>1</sub> = 500/50 3000 V = 30000V

P=(V)(I)

I<sub>1</sub> = P/E<sub>1</sub> = (25 W)/(3000 V) = 8.3mA

I<sub>2</sub> = P/E<sub>2</sub> = (25 W)/(30000 V) = 0.83mA

## Mirror

*   [https://www.publish0x.com/fajar-purnama-academics/my-undergraduate-electrical-power-engineering-assignment-col-xerrpjq?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/my-undergraduate-electrical-power-engineering-assignment-col-xerrpjq?a=4oeEw0Yb0B&tid=github)
*   [https://0fajarpurnama0.github.io/bachelor/2020/07/02/my-undergraduate-electrical-power-engineering-assignment-collection](https://0fajarpurnama0.github.io/bachelor/2020/07/02/my-undergraduate-electrical-power-engineering-assignment-collection)
*   [https://0fajarpurnama0.medium.com/my-undergraduate-electrical-power-engineering-assignment-collection-6d01e0f78a5f](https://0fajarpurnama0.medium.com/my-undergraduate-electrical-power-engineering-assignment-collection-6d01e0f78a5f)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/my-undergraduate-electrical-power-engineering-assignment-collection](https://hicc.cs.kumamoto-u.ac.jp/~fajar/bachelor/my-undergraduate-electrical-power-engineering-assignment-collection)
*   [https://blurt.buzz/@fajar.purnama/my-undergraduate-electrical-power-engineering-assignment-collection?referral=fajar.purnama](https://blurt.buzz/@fajar.purnama/my-undergraduate-electrical-power-engineering-assignment-collection?referral=fajar.purnama)
*   [https://0darkking0.blogspot.com/2020/12/my-undergraduate-electrical-power.html](https://0darkking0.blogspot.com/2020/12/my-undergraduate-electrical-power.html)
*   [https://stemgeeks.net/technology/@fajar.purnama/my-undergraduate-electrical-power-engineering-assignment-collection?ref=fajar.purnama](https://stemgeeks.net/technology/@fajar.purnama/my-undergraduate-electrical-power-engineering-assignment-collection?ref=fajar.purnama)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/167-my-undergraduate-electrical-power-engineering-assignment-collection](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/167-my-undergraduate-electrical-power-engineering-assignment-collection)
*   [https://steemit.com/technology/@fajar.purnama/my-undergraduate-electrical-power-engineering-assignment-collection?r=fajar.purnama](https://steemit.com/technology/@fajar.purnama/my-undergraduate-electrical-power-engineering-assignment-collection?r=fajar.purnama)
*   [http://0fajarpurnama0.weebly.com/blog/my-undergraduate-electrical-power-engineering-assignment-collection](http://0fajarpurnama0.weebly.com/blog/my-undergraduate-electrical-power-engineering-assignment-collection)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/my-undergraduate-electrical-power-engineering-assignment-collection](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/my-undergraduate-electrical-power-engineering-assignment-collection)
*   [https://read.cash/@FajarPurnama/my-undergraduate-electrical-power-engineering-assignment-collection-0e040885](https://read.cash/@FajarPurnama/my-undergraduate-electrical-power-engineering-assignment-collection-0e040885)
*   [https://www.uptrennd.com/post-detail/my-undergraduate-electrical-power-engineering-assignment-collection~ODQxOTAx](https://www.uptrennd.com/post-detail/my-undergraduate-electrical-power-engineering-assignment-collection~ODQxOTAx)