---
layout: post
title: T-Phi Network (Star-Delta) Using Relays and Timer
categories: misc
tags: [delta connection, every circuit, miscellaneous, star connection, star delta motor]
---

## 1\. Introduction

In electric circuit star and delta circuit consist of 3 loads which in star circuit they are connected in form of a star while in delta circuit are connected in delta form as in Figure 1.

![Star and Delta Connection Diagram](https://farm6.staticflickr.com/5699/21416388852_05df519d1b_o_d.jpg)
Figure 1. Star and Delta Connection Diagram

The application is usually used in (Alternate Current) AC motor where it has to start slowly. Starting the motor through a high current immediately could blow the motor as the starting current equals to the normal current multiplied by v3 (=v3  x I). It’ll be fine if the current is 5A (ampere) (I_start=v3  x 5 A=8.66 A), what happens if it’s 50A it’ll be (I_start=v3  x 50 A=86.6 A). The difference between 50A and 86.6A is quite significant. Therefore a switch to initially start a motor through star condition (low current) is needed, then after a while controlled by a time change the circuit to delta (high current). Full diagram can be seen in Figure 2.

![Star and Delta Connection Diagram](https://farm6.staticflickr.com/5623/20804621194_2b94d3461f_o_d.jpg)
Figure 2. Star Delta Motor Diagram

## 2\. Simulation Design

For the experiment here we have limited resource, we don’t have the star-delta motor which made me think whether there’s an alternative to do the star-delta motor simulation. I got an idea of using a low voltage lamp or LED as an indicator by using the brightness of the lamp. Instead I’d use 3 resistors (1 K? for this experiment) to form both star and delta circuit. We’ll see the brightness of the lamp instar and delta circuit, and for this we’ll use Direct Current (DC). Since there’s only positive (+) and negative (-) for the source we need to figure out an alternate circuit (AC have 3 sources R-S-T). For star circuit is T circuit and for delta circuit is Pi circuit in DC as shown in Figure 3 (If I have time I’ll include the calculation).  Figure 3 shows that the current passed through T circuit is smaller which should be used as initial circuit, and Pi circuit passed larger current which should be switched later afterwards.

![Star and Delta Connection Diagram](https://farm6.staticflickr.com/5695/20806241573_0b224c59b2_o_d.jpg)
Figure 3. T (Star) Circuit (Left) andPi (Delta) Circuit (Right)

<div class="video-container"><iframe src="https://www.youtube.com/embed/aEjFKhszAGk" frameborder="0" allowfullscreen></iframe></div>

To realize this experiment we used:

* 24V DC adapter
* 3 1K resistor
* LEDs
* 2 relays
* Timer

An image of a simulation can be seen on Figure 4 where 1 relay as a switch to T circuit and the other one as a switch to Pi circuit. A simulation video using android application EveryCircuit is included on this same folder as this report excluding the timer. On the real application based on the ladder diagram on Figure 5 a timer will be set where initially will start the relay of T circuit (Pi circuit disconnected). After 2 seconds (or any set time) the timer will disconnect the relay of T circuit and connecting the relay of Pi circuit.

![Star-Delta Circuit Simulation (left: star, right: delta)](https://farm6.staticflickr.com/5785/20806240853_9849812a0e_o_d.jpg)
Figure 4. Star-Delta Circuit Simulation (left: star, right: delta)
<div class="video-container"><iframe src="https://www.youtube.com/embed/tBVHPCyPbYo" frameborder="0" allowfullscreen></iframe></div>
![Ladder diagram of star-delta motor](https://farm1.staticflickr.com/679/21416386042_07046146a6_o_d.jpg)
Figure 5. Ladder diagram of star-delta motor

## 3\. Experiment

![Realizing simulation](https://farm6.staticflickr.com/5836/21416385392_eece3c1fa6_o_d.jpg)
Figure 6. Realizing simulation

As in Figure 6 we came to realize the simulation design from Figure 4.

* 3 LEDs for the indicator,

* 3 resistors put parallel,

* 2 relays for switching (1 as star circuit, 1 as delta circuit),

* Not to forget 24V power source,

* And the device which was not drawn into the simulation is the timer.

The timer is also a switching method which doesn’t supply power, (a mistake I once made directly connecting both positive (+) and negative (-) to the timer) but acts a switch to the power source. So 1 cable from the relay should connect to the power source (either + or -) the other one should connect to the timer then to the power source. As for the experiment here the star circuit I connect the (-) directly to the source and the (+) to pin 1 on the timer on Figure 7, then pin 4 of timer connects to the (+) of the source. Pin 1 and pin 4 is normally close (NC) which means pin 1 and pin 4 will connect until the designated time when the timer is turned on (here is set for 5 seconds, after that pin 1 and pin 4 disconnect. While for delta circuit uses pin 8 and pin 6, which is normally open (NO), which means it will connect after the designated time (5 seconds on this experiment) and disconnected before then.

With this configuration we can realize the shift from star circuit to delta circuit. On the first 5 seconds the first relay for star circuit connects, and after 5 seconds it disconnects. The relay for delta circuit connects. The result is as in Figure 8 and Figure 9, initially will be star circuit which the LED shines no too bright, after 5 seconds it will change to Figure 9 to delta circuit which the LED shines brighter. The theory matches as per Figure 3 and Figure 4.


![Figure 7. Time Circuit Diagram](https://farm6.staticflickr.com/5783/20806250943_4bea87a857_o_d.jpg)
Figure 7. Time Circuit Diagram

![Figure 8. Condition in Star Circuit (dim)](https://farm1.staticflickr.com/741/21401068946_130de3cc5d_o_d.jpg)
Figure 8. Condition in Star Circuit (dim)

![Figure 9. Condition in Delta Circuit (bright)](https://farm1.staticflickr.com/741/21401068946_130de3cc5d_o_d.jpg)
Figure 9. Condition in Delta Circuit (bright)

## 4\. Conclusion

The simulation for this circuit succeeded and can be implemented to build a real star-delta motor. The motor will initially be slow, and then a few seconds the motor will be faster. This kind of design is used for devices which isn’t allowed to start at maximum power from the start (for example the motor could explode) since the initial current is v3 greater than the normal power thus a lower current is used when starting. But we want to use the device in its maximum power so a timer is needed to change the current to the maximum after passing the initial stage. Using relays and timers in terms of time we can create different conditions with just a few circuits. For example we can set the time of when we want the air conditioner to turn on or off (other machines as well).

<div class="video-container"><iframe src="https://www.youtube.com/embed/-ggfhEBfFCc" frameborder="0" allowfullscreen></iframe></div>

## Mirrors

*   [https://0fajarpurnama0.github.io/misc/2020/02/24/t-phi-network-using-relays-and-timer](https://0fajarpurnama0.github.io/misc/2020/02/24/t-phi-network-using-relays-and-timer)
*   [https://medium.com/@0fajarpurnama0/t-phi-network-star-delta-using-relays-and-timer-58eca8ef61ce](https://medium.com/@0fajarpurnama0/t-phi-network-star-delta-using-relays-and-timer-58eca8ef61ce)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/tmp/t-phi-network-using-relays-and-timer.html](https://hicc.cs.kumamoto-u.ac.jp/~fajar/tmp/t-phi-network-using-relays-and-timer.html)
*   [https://0fajarpurnama0.tumblr.com/post/612217467556790272/t-phi-network-star-delta-using-relays-and-timer](https://0fajarpurnama0.tumblr.com/post/612217467556790272/t-phi-network-star-delta-using-relays-and-timer)
*   [https://0darkking0.blogspot.com/2018/08/t-phi-network-star-delta-using-relays.html](https://0darkking0.blogspot.com/2018/08/t-phi-network-star-delta-using-relays.html)
*   [http://0fajarpurnama0.weebly.com/blog/t-phi-network-star-delta-using-relays-and-timer](http://0fajarpurnama0.weebly.com/blog/t-phi-network-star-delta-using-relays-and-timer)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/t-phi-network-star-delta-using-relays-and-timer](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/t-phi-network-star-delta-using-relays-and-timer)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/8-t-phi-network-star-delta-using-relays-and-timer](https://0fajarpurnama0.cloudaccess.host/index.php/uncategorised/8-t-phi-network-star-delta-using-relays-and-timer)
*   [http://www.teiii.cn/t-phi-network-star-delta-using-relays-and-timer](http://www.teiii.cn/t-phi-network-star-delta-using-relays-and-timer)