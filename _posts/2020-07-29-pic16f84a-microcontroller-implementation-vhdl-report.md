---
layout: post
title: My Report about PIC16F84A Microcontroller Implementation on Verilog Hardware Description Language
categories: doctoral
tags: [engineering, computers, FPGA, VHDL, assignment, technology, science, math]
featuredimage: https://cdn.steemitimages.com/DQmP3d49LHEa1f4sjAGtgv3WVjkYhFXsFu8hct4tMk8v3JJ/Figure%2017.%20Nexys4%20DDR%20board.jpg
description: This report is about designing our own PIC16F84A microcontroller system on an Nexys4 FPGA board using Verilog Hardware Description Language.
canonicalurl: https://0fajarpurnama0.github.io/doctoral/2020/07/29/pic16f84a-microcontroller-implementation-vhdl-report
---
## Note

This is one of my Doctoral assignment from Advanced Computer Architecture II Course which has never been published anywhere and I, as the author and copyright holder, license this assignment customized CC-BY-SA where anyone can share, copy, republish, and sell on condition to state my name as the author and notify that the original and open version available here.

## 1\. Introduction

Peripheral interface controller (PIC) is a family of microcontrollers made by Microchip Technology. A microcontroller is a one chip computer that include microprocessors, memories, and peripherals. PIC devices are popular with both industrial developers and hobbyists due to their low cost, wide availability, large user base, extensive collection of application notes, availability of low cost or free development tools, serial programming, and re-programmable Flash-memory capability. They can be programmed to be timers, to control a production line, to control light and sound intensity by involving few sensors, and to perform other kind of tasks. The PIC microcontroller have five basic instruction cycle which are fetch, decode, execute, memory, and write (FDEMW) . [1]

## 2\. Verilog HDL Design

![Figure 1. This report's design.png](https://cdn.steemitimages.com/DQmahHYwTouoBaDtEBCbHfxBWh5Q5ew5h6XtgQ2EHeKcXpQ/Figure%201.%20This%20report%E2%80%99s%20design.png)

Figure 1\. This report's design [2]

On the verilog hardware description language (HDL) design is based on Figure 1\. This sections starts by constructing the arithmetic logic unit (ALU), bitmask, and W register. Then continue to design the program counter and return stack which its values to be sent to the instruction register where there is also decode and control behavior. Next is the design of special register, although the effective addressing is discussed in early part. After that the built module have to be connected to the firstly created ALU, bitmask, and W register. Lastly implement sleep and tristate buffer.

### 2.1 Arithmetic Logic Unit


![Figure 2. ALU diagram.png](https://cdn.steemitimages.com/DQmSKu1Fk6WbRyPU5cxhmZUezHa3YYaMdSikGmNeDwv9ros/Figure%202.%20ALU%20diagram.png)

Figure 2\. ALU diagram [2]

Code 1\. Input and output of ALU

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #008800; font-weight: bold">module</span> alu ( <span style="color: #003366; font-weight: bold">CLK</span>, <span style="color: #003366; font-weight: bold">CB</span>, <span style="color: #003366; font-weight: bold">WE</span>, <span style="color: #003366; font-weight: bold">B</span>, <span style="color: #003366; font-weight: bold">FI</span>, <span style="color: #003366; font-weight: bold">FO</span>, <span style="color: #003366; font-weight: bold">CI</span>, <span style="color: #003366; font-weight: bold">CO</span>, <span style="color: #003366; font-weight: bold">DC</span>, <span style="color: #003366; font-weight: bold">Z</span> );
<span style="color: #008800; font-weight: bold">input</span> <span style="color: #003366; font-weight: bold">CLK</span>;<span style="color: #888888">// Clock</span>
<span style="color: #008800; font-weight: bold">input</span> [<span style="color: #005588; font-weight: bold">4</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">CB</span>; <span style="color: #888888">// operation code</span>
<span style="color: #008800; font-weight: bold">input</span> <span style="color: #003366; font-weight: bold">WE</span>; <span style="color: #888888">// Write enable for W register</span>
<span style="color: #008800; font-weight: bold">input</span> [<span style="color: #005588; font-weight: bold">2</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">B</span>; <span style="color: #888888">// bit position</span>
<span style="color: #008800; font-weight: bold">input</span> [<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">FI</span>; <span style="color: #888888">// operand</span>
<span style="color: #008800; font-weight: bold">input</span> <span style="color: #003366; font-weight: bold">CI</span>; <span style="color: #888888">// Carry in</span>
<span style="color: #008800; font-weight: bold">output</span> [<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">FO</span>; <span style="color: #888888">// dest bus</span>
<span style="color: #008800; font-weight: bold">output</span> <span style="color: #003366; font-weight: bold">CO</span>; <span style="color: #888888">// Carry out</span>
<span style="color: #008800; font-weight: bold">output</span> <span style="color: #003366; font-weight: bold">DC</span>; <span style="color: #888888">// Half carry</span>
<span style="color: #008800; font-weight: bold">output</span> <span style="color: #003366; font-weight: bold">Z</span>; <span style="color: #888888">// Zero</span>
<span style="color: #333399; font-weight: bold">reg</span> <span style="color: #003366; font-weight: bold">HC</span>; <span style="color: #888888">// half carry</span>
<span style="color: #333399; font-weight: bold">reg</span> [<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">W</span>;
<span style="color: #333399; font-weight: bold">reg</span> [<span style="color: #005588; font-weight: bold">8</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] tmp;
<span style="color: #333399; font-weight: bold">reg</span> [<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] bit_mask;
<span style="color: #333399; font-weight: bold">wire</span> sub;
<span style="color: #008800; font-weight: bold">assign</span> sub <span style="color: #333333">=</span> ( <span style="color: #003366; font-weight: bold">CB</span> <span style="color: #333333">==</span> <span style="color: #003366; font-weight: bold">`ISUB</span> );
</pre></div>

Code 2.\ Bitmask

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #008800; font-weight: bold">always</span> @( <span style="color: #003366; font-weight: bold">B</span> )
<span style="color: #008800; font-weight: bold">case</span>( <span style="color: #003366; font-weight: bold">B</span> )
<span style="color: #005588; font-weight: bold">3&#39;b000</span><span style="color: #333333">:</span> bit_mask <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">8&#39;b0000</span>_0001;
<span style="color: #005588; font-weight: bold">3&#39;b001</span><span style="color: #333333">:</span> bit_mask <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">8&#39;b0000</span>_0010;
<span style="color: #005588; font-weight: bold">3&#39;b010</span><span style="color: #333333">:</span> bit_mask <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">8&#39;b0000</span>_0100;
<span style="color: #005588; font-weight: bold">3&#39;b011</span><span style="color: #333333">:</span> bit_mask <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">8&#39;b0000</span>_1000;
<span style="color: #005588; font-weight: bold">3&#39;b100</span><span style="color: #333333">:</span> bit_mask <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">8&#39;b0001</span>_0000;
<span style="color: #005588; font-weight: bold">3&#39;b101</span><span style="color: #333333">:</span> bit_mask <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">8&#39;b0010</span>_0000;
<span style="color: #005588; font-weight: bold">3&#39;b110</span><span style="color: #333333">:</span> bit_mask <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">8&#39;b0100</span>_0000;
<span style="color: #005588; font-weight: bold">3&#39;b111</span><span style="color: #333333">:</span> bit_mask <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">8&#39;b1000</span>_0000;
<span style="color: #008800; font-weight: bold">default</span><span style="color: #333333">:</span> bit_mask <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">8</span>&#39;bxxxx_xxxx; 
<span style="color: #008800; font-weight: bold">endcase</span>
</pre></div>

![Figure 3. ALU add sub.png](https://cdn.steemitimages.com/DQmUWrD1DwVnjXxCnNEmmK3pzkBzMuxWRwG2tnQaZJi35cx/Figure%203.%20ALU%20add%20sub.png)

Figure 3\. ALU add sub [2]

Code 3\. Up to add and sub

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #008800; font-weight: bold">always</span> @( <span style="color: #003366; font-weight: bold">CB</span> <span style="color: #008800; font-weight: bold">or</span> <span style="color: #003366; font-weight: bold">FI</span> <span style="color: #008800; font-weight: bold">or</span> <span style="color: #003366; font-weight: bold">W</span> <span style="color: #008800; font-weight: bold">or</span> <span style="color: #003366; font-weight: bold">HC</span> <span style="color: #008800; font-weight: bold">or</span> <span style="color: #003366; font-weight: bold">CI</span> <span style="color: #008800; font-weight: bold">or</span> bit_mask <span style="color: #008800; font-weight: bold">or</span> sub )
<span style="color: #008800; font-weight: bold">begin</span>
  <span style="color: #003366; font-weight: bold">HC</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">1&#39;b0</span>;
  <span style="color: #008800; font-weight: bold">casex</span>( <span style="color: #003366; font-weight: bold">CB</span> ) <span style="color: #FF0000; background-color: #FFAAAA">`</span>
    <span style="color: #997700; font-weight: bold">IPSW:</span> tmp <span style="color: #333333">=</span> { <span style="color: #005588; font-weight: bold">1&#39;b0</span>, <span style="color: #003366; font-weight: bold">W</span> }; <span style="color: #888888">// Pass W register value</span>
    <span style="color: #003366; font-weight: bold">`ICLR</span><span style="color: #333333">:</span> tmp <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">9&#39;b0</span>_0000_0000; <span style="color: #888888">// Clear</span>
    <span style="color: #003366; font-weight: bold">`IADD</span>, <span style="color: #003366; font-weight: bold">`ISUB</span><span style="color: #333333">:</span>
    <span style="color: #008800; font-weight: bold">begin</span> { <span style="color: #003366; font-weight: bold">HC</span>, tmp[<span style="color: #005588; font-weight: bold">3</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] }<span style="color: #333333">=</span> {<span style="color: #005588; font-weight: bold">1&#39;b0</span>,<span style="color: #003366; font-weight: bold">FI</span>[<span style="color: #005588; font-weight: bold">3</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>]} <span style="color: #333333">+</span> {<span style="color: #005588; font-weight: bold">1&#39;b0</span>, sub<span style="color: #333333">?</span> <span style="color: #333333">~</span><span style="color: #003366; font-weight: bold">W</span>[<span style="color: #005588; font-weight: bold">3</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>]<span style="color: #333333">:</span><span style="color: #003366; font-weight: bold">W</span>[<span style="color: #005588; font-weight: bold">3</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>]} <span style="color: #333333">+</span> sub;
                 tmp[<span style="color: #005588; font-weight: bold">8</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">4</span>] <span style="color: #333333">=</span> {<span style="color: #005588; font-weight: bold">1&#39;b0</span>,<span style="color: #003366; font-weight: bold">FI</span>[<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">4</span>]} <span style="color: #333333">+</span> {<span style="color: #005588; font-weight: bold">1&#39;b0</span>, sub<span style="color: #333333">?</span> <span style="color: #333333">~</span><span style="color: #003366; font-weight: bold">W</span>[<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">4</span>]<span style="color: #333333">:</span><span style="color: #003366; font-weight: bold">W</span>[<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">4</span>]} <span style="color: #333333">+</span> <span style="color: #003366; font-weight: bold">HC</span>; 
	<span style="color: #008800; font-weight: bold">end</span>
</pre></div>

The verilog design of the ALU is based on the diagram on Figure 2\. The input, output, and process looks clear which was implemented on Code 1, however the detail operation within the bitmask, ALU, and w register should be examined on Code 2, Code 3, and Code 4\. The ALU operates between the value on the W register and the current input FI. For addition and subtraction, Code 3 should follow the diagram on Figure 3, while for other operations are not as complicated which is on Code 4\. After that, the output can be written on Code 5\. The operation definitions are available on Code 6 which the bit opcode from 2nd to 6th from left to right is used.

Code 4\. Other Operations

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #003366; font-weight: bold">`IDEC1</span>, <span style="color: #003366; font-weight: bold">`IDEC2</span><span style="color: #333333">:</span> tmp <span style="color: #333333">=</span> { <span style="color: #005588; font-weight: bold">1&#39;b0</span>, <span style="color: #003366; font-weight: bold">FI</span> } <span style="color: #333333">-</span> <span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #888888">// Decrement, Decrement and skip if 0</span>
<span style="color: #003366; font-weight: bold">`IOR</span> <span style="color: #333333">:</span> tmp <span style="color: #333333">=</span> { <span style="color: #005588; font-weight: bold">1&#39;b0</span>, <span style="color: #003366; font-weight: bold">FI</span> } <span style="color: #333333">|</span> { <span style="color: #005588; font-weight: bold">1&#39;b0</span>, <span style="color: #003366; font-weight: bold">W</span> } ; <span style="color: #888888">// Logical OR</span>
<span style="color: #003366; font-weight: bold">`IAND</span><span style="color: #333333">:</span> tmp <span style="color: #333333">=</span> { <span style="color: #005588; font-weight: bold">1&#39;b0</span>, <span style="color: #003366; font-weight: bold">FI</span> } <span style="color: #333333">&amp;</span> { <span style="color: #005588; font-weight: bold">1&#39;b0</span>, <span style="color: #003366; font-weight: bold">W</span> } ; <span style="color: #888888">// Logical AND</span>
<span style="color: #003366; font-weight: bold">`IXOR</span><span style="color: #333333">:</span> tmp <span style="color: #333333">=</span> { <span style="color: #005588; font-weight: bold">1&#39;b0</span>, <span style="color: #003366; font-weight: bold">FI</span> } <span style="color: #333333">^</span> { <span style="color: #005588; font-weight: bold">1&#39;b0</span>, <span style="color: #003366; font-weight: bold">W</span> } ; <span style="color: #888888">// Logical Exclusive OR</span>
<span style="color: #003366; font-weight: bold">`IPSF</span><span style="color: #333333">:</span> tmp <span style="color: #333333">=</span> { <span style="color: #005588; font-weight: bold">1&#39;b0</span>, <span style="color: #003366; font-weight: bold">FI</span> } ; <span style="color: #888888">// Pass FI</span>
<span style="color: #003366; font-weight: bold">`INTF</span><span style="color: #333333">:</span> tmp <span style="color: #333333">=</span> { <span style="color: #005588; font-weight: bold">1&#39;b0</span>, <span style="color: #333333">~</span><span style="color: #003366; font-weight: bold">FI</span> } ; <span style="color: #888888">// Complement FI</span>
<span style="color: #003366; font-weight: bold">`IINC1</span>, <span style="color: #003366; font-weight: bold">`IINC2</span><span style="color: #333333">:</span> tmp <span style="color: #333333">=</span> { <span style="color: #005588; font-weight: bold">1&#39;b0</span>, <span style="color: #003366; font-weight: bold">FI</span> } <span style="color: #333333">+</span> <span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #888888">// Increment, Increment and skip if 0</span>
<span style="color: #003366; font-weight: bold">`IRRF</span><span style="color: #333333">:</span> tmp <span style="color: #333333">=</span> {<span style="color: #003366; font-weight: bold">FI</span>[<span style="color: #005588; font-weight: bold">0</span>], <span style="color: #003366; font-weight: bold">CI</span>, <span style="color: #003366; font-weight: bold">FI</span>[<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">1</span>]} ; <span style="color: #888888">// Rotate Right through Carry</span>
<span style="color: #003366; font-weight: bold">`IRLF</span><span style="color: #333333">:</span> tmp <span style="color: #333333">=</span> {<span style="color: #003366; font-weight: bold">FI</span>, <span style="color: #003366; font-weight: bold">CI</span>} ; <span style="color: #888888">// Rotate Left through Carry</span>
<span style="color: #003366; font-weight: bold">`ISWP</span><span style="color: #333333">:</span> tmp <span style="color: #333333">=</span> {<span style="color: #005588; font-weight: bold">1&#39;b0</span>, <span style="color: #003366; font-weight: bold">FI</span>[<span style="color: #005588; font-weight: bold">3</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>], <span style="color: #003366; font-weight: bold">FI</span>[<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">4</span>]}; <span style="color: #888888">// nibble swap</span>
<span style="color: #003366; font-weight: bold">`IBCF</span><span style="color: #333333">:</span> tmp <span style="color: #333333">=</span> {<span style="color: #005588; font-weight: bold">1&#39;b0</span>, <span style="color: #003366; font-weight: bold">FI</span>} <span style="color: #333333">&amp;</span> {<span style="color: #005588; font-weight: bold">1&#39;b0</span>,<span style="color: #333333">~</span>bit_mask} ; <span style="color: #888888">// bit clear</span>
<span style="color: #003366; font-weight: bold">`IBSF</span><span style="color: #333333">:</span> tmp <span style="color: #333333">=</span> {<span style="color: #005588; font-weight: bold">1&#39;b0</span>, <span style="color: #003366; font-weight: bold">FI</span>} <span style="color: #333333">|</span> {<span style="color: #005588; font-weight: bold">1&#39;b0</span>, bit_mask} ; <span style="color: #888888">// bit set</span>
<span style="color: #003366; font-weight: bold">`IBTF</span><span style="color: #333333">:</span> tmp <span style="color: #333333">=</span> {<span style="color: #005588; font-weight: bold">1&#39;b0</span>, <span style="color: #003366; font-weight: bold">FI</span>} <span style="color: #333333">&amp;</span> {<span style="color: #005588; font-weight: bold">1&#39;b0</span>, bit_mask} ; <span style="color: #888888">// bit test</span>
<span style="color: #008800; font-weight: bold">default</span><span style="color: #333333">:</span> tmp <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">9</span>&#39;bx_xxxx_xxxx;
<span style="color: #008800; font-weight: bold">end</span> <span style="color: #008800; font-weight: bold">case</span>
<span style="color: #008800; font-weight: bold">end</span>
</pre></div>


Code 5\. Output, W Register, and Flags

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #888888">// FO</span>
<span style="color: #008800; font-weight: bold">assign</span> <span style="color: #003366; font-weight: bold">FO</span> <span style="color: #333333">=</span> tmp[<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] ;
<span style="color: #888888">// W Register</span>
<span style="color: #008800; font-weight: bold">always</span> @( <span style="color: #008800; font-weight: bold">posedge</span> <span style="color: #003366; font-weight: bold">CLK</span> )
<span style="color: #008800; font-weight: bold">if</span>( <span style="color: #003366; font-weight: bold">WE</span> ) <span style="color: #003366; font-weight: bold">W</span> <span style="color: #333333">&lt;=</span> tmp[<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] ; <span style="color: #888888">// Flag</span>
<span style="color: #008800; font-weight: bold">assign</span> <span style="color: #003366; font-weight: bold">CO</span> <span style="color: #333333">=</span> tmp[<span style="color: #005588; font-weight: bold">8</span>] ; <span style="color: #888888">// Carry Borrow flag</span>
<span style="color: #008800; font-weight: bold">assign</span> <span style="color: #003366; font-weight: bold">DC</span> <span style="color: #333333">=</span> <span style="color: #003366; font-weight: bold">HC</span> ; <span style="color: #888888">// Half carry flag</span>
<span style="color: #008800; font-weight: bold">assign</span> <span style="color: #003366; font-weight: bold">Z</span> <span style="color: #333333">=</span> (tmp[<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #333333">==</span> <span style="color: #005588; font-weight: bold">0</span>) ; <span style="color: #888888">// Zero flag</span>
<span style="color: #008800; font-weight: bold">endmodule</span>
</pre></div>

Code 6\. ALU Operation Definition

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">`define IPSW 5&#39;b00000 </span><span style="color: #888888">// Pass W</span>
<span style="color: #557799">`define ICLR 5&#39;b00001 </span><span style="color: #888888">// Clear</span>
<span style="color: #557799">`define ISUB 5&#39;b00010 </span><span style="color: #888888">// Sub</span>
<span style="color: #557799">`define IDEC1 5&#39;b00011 </span><span style="color: #888888">// Dec</span>
<span style="color: #557799">`define IOR 5&#39;b00100 </span><span style="color: #888888">// Or</span>
<span style="color: #557799">`define IAND 5&#39;b00101 </span><span style="color: #888888">// And</span>
<span style="color: #557799">`define IXOR 5&#39;b00110 </span><span style="color: #888888">// Xor</span>
<span style="color: #557799">`define IADD 5&#39;b00111 </span><span style="color: #888888">// Add</span>
<span style="color: #557799">`define IPSF 5&#39;b01000 </span><span style="color: #888888">// Pass F</span>
<span style="color: #557799">`define INTF 5&#39;b01001 </span><span style="color: #888888">// Not</span>
<span style="color: #557799">`define IINC1 5&#39;b01010 </span><span style="color: #888888">// Inc</span>
<span style="color: #557799">`define IDEC2 5&#39;b01011 </span><span style="color: #888888">// Dec</span>
<span style="color: #557799">`define IRRF 5&#39;b01100 </span><span style="color: #888888">// Rotate Right with carry</span>
<span style="color: #557799">`define IRLF 5&#39;b01101 </span><span style="color: #888888">// Rotate Left with carry</span>
<span style="color: #557799">`define ISWP 5&#39;b01110 </span><span style="color: #888888">// Nibble swap</span>
<span style="color: #557799">`define IINC2 5&#39;b01111 </span><span style="color: #888888">// Inc</span>
<span style="color: #557799">`define IBCF 5&#39;b100?? </span><span style="color: #888888">// Bit Clear F</span>
<span style="color: #557799">`define IBSF 5&#39;b101?? </span><span style="color: #888888">// Bit Set F</span>
<span style="color: #557799">`define IBTF 5&#39;b11??? </span><span style="color: #888888">// Bit Test F</span>
</pre></div>

### 2.2 Core Input, Output, and Register

![Figure 4. Data Memory Map.png](https://cdn.steemitimages.com/DQmUWz5sUg9otonpJAVJ5acKbykg61uNgwedkj8VoexeCDc/Figure%204.%20Data%20Memory%20Map.png)

Figure 4\. Data Memory Map [2] [3]

Code 7\. Input, Output, and Register for Core Module

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #888888">// STATUS Register</span>
<span style="color: #557799">`define STATUS { IRP, RP, nTO, nPD, Z, DC, C }</span>
<span style="color: #888888">// IR</span>
<span style="color: #557799">`define IRB IR[ 9:7]</span>
<span style="color: #557799">`define IRK IR[ 7:0]</span>
<span style="color: #557799">`define IRF IR[ 6:0]</span>
<span style="color: #557799">`define IRA IR[10:0]</span>
<span style="color: #888888">// Memory Address</span>
<span style="color: #557799">`define A_INDF 7&#39;b000_0000</span>
<span style="color: #557799">`define A_PCL 7&#39;b000_0010</span>

<span style="color: #008800; font-weight: bold">module</span> pic16core ( <span style="color: #003366; font-weight: bold">CLK</span>, <span style="color: #003366; font-weight: bold">RST</span>, <span style="color: #003366; font-weight: bold">RA</span>, <span style="color: #003366; font-weight: bold">RB</span> );
<span style="color: #008800; font-weight: bold">input</span> <span style="color: #003366; font-weight: bold">CLK</span>;
<span style="color: #008800; font-weight: bold">input</span> <span style="color: #003366; font-weight: bold">RST</span>;
<span style="color: #008800; font-weight: bold">inout</span> [<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">RA</span>;
<span style="color: #008800; font-weight: bold">inout</span> [<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">RB</span>;

<span style="color: #008800; font-weight: bold">parameter</span> <span style="color: #003366; font-weight: bold">PROG</span> <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;program.mem&quot;</span>;

<span style="color: #888888">// Special Register</span>
<span style="color: #333399; font-weight: bold">reg</span> <span style="color: #003366; font-weight: bold">IRP</span>;
<span style="color: #333399; font-weight: bold">reg</span> [<span style="color: #005588; font-weight: bold">1</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">RP</span>;
<span style="color: #333399; font-weight: bold">reg</span> nTO, nPD, <span style="color: #003366; font-weight: bold">Z</span>, <span style="color: #003366; font-weight: bold">DC</span>, <span style="color: #003366; font-weight: bold">C</span>; <span style="color: #888888">// 03 83 // STATUS</span>
<span style="color: #333399; font-weight: bold">reg</span> [<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">FSR</span>; <span style="color: #888888">// 04 84</span>
<span style="color: #333399; font-weight: bold">reg</span> [<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">PORTA</span>, <span style="color: #003366; font-weight: bold">TRISA</span>; <span style="color: #888888">// 05 85</span>
<span style="color: #333399; font-weight: bold">reg</span> [<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">PORTB</span>, <span style="color: #003366; font-weight: bold">TRISB</span>; <span style="color: #888888">// 06 86</span>
<span style="color: #333399; font-weight: bold">reg</span> [<span style="color: #005588; font-weight: bold">4</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">PCLATH</span>; <span style="color: #888888">// 0A 8A</span>
<span style="color: #333399; font-weight: bold">reg</span> [<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">RAM</span>[ <span style="color: #005588; font-weight: bold">12</span> <span style="color: #333333">:</span> <span style="color: #005588; font-weight: bold">127</span> ]; <span style="color: #888888">// 0C-7F // DATA bus</span>
<span style="color: #333399; font-weight: bold">reg</span> [<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">SDATA</span>; <span style="color: #888888">// for special register</span>
<span style="color: #333399; font-weight: bold">reg</span> [<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">RDATA</span>; <span style="color: #888888">// for ALU operand</span>
<span style="color: #333399; font-weight: bold">wire</span> [<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">WDATA</span>; <span style="color: #888888">// for ALU result</span>
<span style="color: #333399; font-weight: bold">wire</span> [<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">DDATA</span>; <span style="color: #888888">// for Data RAM Read Data</span>

<span style="color: #888888">// Flag data from ALU to Flag register</span>
<span style="color: #333399; font-weight: bold">wire</span> <span style="color: #003366; font-weight: bold">CO</span>, <span style="color: #003366; font-weight: bold">DCO</span>, <span style="color: #003366; font-weight: bold">ZO</span>; <span style="color: #888888">// Control Signal</span>
<span style="color: #333399; font-weight: bold">reg</span> <span style="color: #003366; font-weight: bold">NOP_S</span>; <span style="color: #888888">// Fetch cancel on CALL, GOTO</span>
<span style="color: #333399; font-weight: bold">reg</span> [<span style="color: #005588; font-weight: bold">4</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">ALU_CB</span>; <span style="color: #888888">// ALU control</span>
<span style="color: #333399; font-weight: bold">reg</span> <span style="color: #003366; font-weight: bold">W_W</span>; <span style="color: #888888">// Write enable for W register</span>
<span style="color: #333399; font-weight: bold">reg</span> <span style="color: #003366; font-weight: bold">C_W</span>, <span style="color: #003366; font-weight: bold">DC_W</span>, <span style="color: #003366; font-weight: bold">Z_W</span>; <span style="color: #888888">// Write enable for Flag register (STATUS[2:0])</span>
<span style="color: #333399; font-weight: bold">reg</span> <span style="color: #003366; font-weight: bold">F_W</span>; <span style="color: #888888">// Write enable for Data memory</span>
<span style="color: #333399; font-weight: bold">reg</span> <span style="color: #003366; font-weight: bold">WDT_C</span>; <span style="color: #888888">// WDT clear</span>
<span style="color: #333399; font-weight: bold">reg</span> nTO_S, nTO_C; <span style="color: #888888">// nTO set and clear</span>
<span style="color: #333399; font-weight: bold">reg</span> nPD_S, nPD_C; <span style="color: #888888">// nPD set and clear</span>
<span style="color: #333399; font-weight: bold">reg</span> <span style="color: #003366; font-weight: bold">SLEEP</span>; <span style="color: #888888">// Sleep mode</span>
<span style="color: #333399; font-weight: bold">reg</span> <span style="color: #003366; font-weight: bold">SLP_S</span>; <span style="color: #888888">// Sleep mode set // Register</span>
<span style="color: #333399; font-weight: bold">reg</span> [<span style="color: #005588; font-weight: bold">12</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">PC</span>; <span style="color: #888888">// Program Counter { PCH, PCL }</span>
<span style="color: #333399; font-weight: bold">reg</span> [<span style="color: #005588; font-weight: bold">13</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">IR</span>; <span style="color: #888888">// Instruction Register</span>

<span style="color: #888888">// Register</span>
<span style="color: #333399; font-weight: bold">reg</span> [<span style="color: #005588; font-weight: bold">12</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">PC</span>; <span style="color: #888888">// Program Counter { PCH, PCL }</span>
<span style="color: #333399; font-weight: bold">reg</span> [<span style="color: #005588; font-weight: bold">13</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">IR</span>; <span style="color: #888888">// Instruction Register</span>
</pre></div>


### 2.3 Effective Addressing

![Figure 5. Direct and indirect addressing diagram.png](https://cdn.steemitimages.com/DQmXV4MRtPMduaCALj64BcZd8kWdEdJhC6aqXA9HmtXKHZ7/Figure%205.%20Direct%20and%20indirect%20addressing%20diagram.png)

Figure 5\. Direct and indirect addressing diagram [2] [3]

Based on Figure 5, Code 8 should write to RP if direct addressing, otherwise if indirect addressing IRP should be FSR.

Code 8\. Affective addressing for core module

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #888888">// Effective Address</span>
<span style="color: #333399; font-weight: bold">wire</span> [ <span style="color: #005588; font-weight: bold">8</span> <span style="color: #333333">:</span> <span style="color: #005588; font-weight: bold">0</span> ] <span style="color: #003366; font-weight: bold">EA</span>;
<span style="color: #008800; font-weight: bold">assign</span> <span style="color: #003366; font-weight: bold">EA</span> <span style="color: #333333">=</span> ( <span style="color: #003366; font-weight: bold">`IRF</span> <span style="color: #333333">==</span> <span style="color: #005588; font-weight: bold">0</span> ) <span style="color: #333333">?</span> { <span style="color: #003366; font-weight: bold">IRP</span> , <span style="color: #003366; font-weight: bold">FSR</span> [<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] } <span style="color: #333333">:</span> { <span style="color: #003366; font-weight: bold">RP</span> , <span style="color: #003366; font-weight: bold">`IRF</span>};
</pre></div>


### 2.4 Program Counter and Return Stack

![Figure 6.a PC loading.png](https://cdn.steemitimages.com/DQmPofZVHbWP2B5Y4RKXqXssjGcinp1gchhDjz7i2CMvL5X/Figure%206.a%20PC%20loading.png)

![Figure 6.b return stack.png](https://cdn.steemitimages.com/DQmZ1N1LdFVMq4LZe9pHhD7Y4S3WJHwmNrQ9d8VovgFeStg/Figure%206.b%20return%20stack.png)

Figure 6\. PC loading and return stack [2] [3]

For Code 9 about program counter and return stack, the value of PC is based the left diagram of Figure 6\. When operation call, then the stack is pushed, and when operation return, then the stack is popped. The value of STKP should be based on the right diagram of Figure 6.

Code 9\. Program counter and return stack

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #888888">// Program Counter &amp; Return Stack</span>
<span style="color: #333399; font-weight: bold">reg</span> [ <span style="color: #005588; font-weight: bold">12</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">8</span> ] <span style="color: #003366; font-weight: bold">STK</span>[<span style="color: #005588; font-weight: bold">0</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">7</span>]; <span style="color: #888888">// Return Stack depth 8</span>
<span style="color: #333399; font-weight: bold">reg</span> [ <span style="color: #005588; font-weight: bold">2</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #003366; font-weight: bold">STKP</span>; <span style="color: #888888">// Return stack pointer 4 bit</span>
<span style="color: #333399; font-weight: bold">reg</span> <span style="color: #003366; font-weight: bold">STK_PU</span>; <span style="color: #888888">// Stack Push enable</span>
<span style="color: #333399; font-weight: bold">reg</span> <span style="color: #003366; font-weight: bold">STK_PO</span>; <span style="color: #888888">// Stack Pop enable</span>
<span style="color: #333399; font-weight: bold">reg</span> <span style="color: #003366; font-weight: bold">PC_W</span>; <span style="color: #888888">// Write enable for CALL, GOTO</span>

<span style="color: #888888">// Program Counter</span>
<span style="color: #008800; font-weight: bold">always</span> @( <span style="color: #008800; font-weight: bold">posedge</span> <span style="color: #003366; font-weight: bold">CLK</span> )
<span style="color: #008800; font-weight: bold">if</span>( <span style="color: #003366; font-weight: bold">RST</span> ) <span style="color: #003366; font-weight: bold">PC</span> <span style="color: #333333">&lt;=</span> <span style="color: #005588; font-weight: bold">0</span>; <span style="color: #008800; font-weight: bold">else</span> <span style="color: #888888">// RESET</span>
<span style="color: #008800; font-weight: bold">if</span>( <span style="color: #003366; font-weight: bold">PC_W</span> ) <span style="color: #003366; font-weight: bold">PC</span> <span style="color: #333333">&lt;=</span> {<span style="color: #003366; font-weight: bold">PCLATH</span>[<span style="color: #005588; font-weight: bold">4</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">3</span>],<span style="color: #003366; font-weight: bold">IR</span>[<span style="color: #005588; font-weight: bold">10</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] }; <span style="color: #008800; font-weight: bold">else</span> <span style="color: #888888">// CALL, GOTO</span>
<span style="color: #008800; font-weight: bold">if</span>( <span style="color: #003366; font-weight: bold">F_W</span> <span style="color: #333333">&amp;&amp;</span> <span style="color: #003366; font-weight: bold">EA</span> [<span style="color: #005588; font-weight: bold">6</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #333333">==</span> <span style="color: #003366; font-weight: bold">`A_PCL</span> ) <span style="color: #003366; font-weight: bold">PC</span> <span style="color: #333333">&lt;=</span> { <span style="color: #003366; font-weight: bold">PCLATH</span>[<span style="color: #005588; font-weight: bold">4</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">3</span>], <span style="color: #003366; font-weight: bold">WDATA</span>[<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] }; <span style="color: #008800; font-weight: bold">else</span> <span style="color: #888888">// write PCL register if( STK_PO ) PC &lt;= STK[ STKP-1 ]; else // RETURN, RETLW</span>
<span style="color: #008800; font-weight: bold">if</span>( <span style="color: #003366; font-weight: bold">SLEEP</span> <span style="color: #333333">||</span> <span style="color: #003366; font-weight: bold">SLP_S</span> ) <span style="color: #003366; font-weight: bold">PC</span> <span style="color: #333333">&lt;=</span> <span style="color: #003366; font-weight: bold">PC</span> ; <span style="color: #008800; font-weight: bold">else</span> <span style="color: #888888">// SLEEP mode</span>
<span style="color: #003366; font-weight: bold">PC</span> <span style="color: #333333">&lt;=</span> <span style="color: #003366; font-weight: bold">PC</span> <span style="color: #333333">+</span> <span style="color: #005588; font-weight: bold">1</span>;

<span style="color: #888888">// Return Stack</span>
<span style="color: #008800; font-weight: bold">always</span> @( <span style="color: #008800; font-weight: bold">posedge</span> <span style="color: #003366; font-weight: bold">CLK</span> )
<span style="color: #008800; font-weight: bold">begin</span>
<span style="color: #008800; font-weight: bold">if</span>( <span style="color: #003366; font-weight: bold">RST</span> ) <span style="color: #003366; font-weight: bold">STKP</span><span style="color: #333333">&lt;=</span> <span style="color: #005588; font-weight: bold">0</span> ; <span style="color: #008800; font-weight: bold">else</span> <span style="color: #888888">// for Empty</span>
<span style="color: #008800; font-weight: bold">if</span>( <span style="color: #003366; font-weight: bold">STK_PU</span> ) <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">STK</span>[ <span style="color: #003366; font-weight: bold">STKP</span> ] <span style="color: #333333">&lt;=</span> <span style="color: #003366; font-weight: bold">PC</span> ; <span style="color: #003366; font-weight: bold">STKP</span><span style="color: #333333">&lt;=</span> <span style="color: #003366; font-weight: bold">STKP</span><span style="color: #333333">+</span><span style="color: #005588; font-weight: bold">1</span>; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #008800; font-weight: bold">else</span> <span style="color: #888888">// for CALL</span>
<span style="color: #008800; font-weight: bold">if</span>( <span style="color: #003366; font-weight: bold">STK_PO</span> ) <span style="color: #003366; font-weight: bold">STKP</span><span style="color: #333333">&lt;=</span> <span style="color: #003366; font-weight: bold">STKP</span><span style="color: #333333">-</span><span style="color: #005588; font-weight: bold">1</span>; <span style="color: #888888">// for RETxx</span>
<span style="color: #008800; font-weight: bold">end</span>
</pre></div>


### 2.5 Instruction Memory and Register

![Figure 7.a instruction register.png](https://cdn.steemitimages.com/DQmUouGNjPotcrNi9T57Xcyx1kwG3pQMVFJU4oYBegDVQxE/Figure%207.a%20instruction%20register.png)

![Figure 7.b shared memory.png](https://cdn.steemitimages.com/DQmb8zTpGyvLcDohsaNLNLN4N97vytgiJpiofHRkQfUwtKs/Figure%207.b%20shared%20memory.png)

Figure 7\. Left image is about instruction register and right image is about shared memory [2]

Code 10\. Instruction memory and Register

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #888888">// Instruction Memory (8k word)</span>
<span style="color: #333399; font-weight: bold">reg</span> [ <span style="color: #005588; font-weight: bold">13</span> <span style="color: #333333">:</span> <span style="color: #005588; font-weight: bold">0</span> ] <span style="color: #003366; font-weight: bold">IMEM</span>[ <span style="color: #005588; font-weight: bold">0</span> <span style="color: #333333">:</span> <span style="color: #005588; font-weight: bold">8195</span> ];
<span style="color: #008800; font-weight: bold">initial</span>
<span style="color: #008800; font-weight: bold">begin</span>
<span style="color: #007020">$readmemh</span>( <span style="color: #003366; font-weight: bold">PROG</span>, <span style="color: #003366; font-weight: bold">IMEM</span> );
<span style="color: #008800; font-weight: bold">end</span>

<span style="color: #888888">// Instruction Register</span>
<span style="color: #008800; font-weight: bold">always</span> @( <span style="color: #008800; font-weight: bold">posedge</span> <span style="color: #003366; font-weight: bold">CLK</span> )
<span style="color: #008800; font-weight: bold">if</span>( <span style="color: #003366; font-weight: bold">NOP_S</span> <span style="color: #333333">||</span> <span style="color: #003366; font-weight: bold">PC_W</span> <span style="color: #333333">||</span> <span style="color: #003366; font-weight: bold">STK_PO</span> <span style="color: #333333">||</span> <span style="color: #003366; font-weight: bold">RST</span> )
<span style="color: #003366; font-weight: bold">IR</span> <span style="color: #333333">&lt;=</span> <span style="color: #005588; font-weight: bold">14&#39;b00</span>_0000_0000_0000 ; <span style="color: #008800; font-weight: bold">else</span> <span style="color: #888888">// if CALL, RET, cond.SKIP</span>
<span style="color: #003366; font-weight: bold">IR</span> <span style="color: #333333">&lt;=</span> <span style="color: #003366; font-weight: bold">IMEM</span>[<span style="color: #003366; font-weight: bold">PC</span>] ; <span style="color: #888888">// Instruction fetch</span>
</pre></div>


### 2.6 Decode and Control

To write Code 11, the instruction table and instruction details on the datasheet [3] should be referred. Code 11 is written starting from first two bits of the instructions then the next 4 bits of the instructions. Refer again to the datasheet [3] of which status are affected. Unfortunately, sleep here is a repeat NOP.

Code 11\. Decode and control

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #888888">// Decode &amp; Control</span>
<span style="color: #008800; font-weight: bold">always</span> @( <span style="color: #003366; font-weight: bold">IR</span> <span style="color: #008800; font-weight: bold">or</span> <span style="color: #003366; font-weight: bold">ZO</span> )
  <span style="color: #008800; font-weight: bold">begin</span>
    <span style="color: #003366; font-weight: bold">ALU_CB</span><span style="color: #333333">=</span><span style="color: #003366; font-weight: bold">IR</span>[ <span style="color: #005588; font-weight: bold">12</span> <span style="color: #333333">:</span> <span style="color: #005588; font-weight: bold">8</span> ];
    <span style="color: #003366; font-weight: bold">F_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">0</span>; <span style="color: #003366; font-weight: bold">W_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">0</span>; <span style="color: #003366; font-weight: bold">Z_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">0</span>; <span style="color: #003366; font-weight: bold">DC_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">0</span>; <span style="color: #003366; font-weight: bold">C_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">0</span>; nTO_S<span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">0</span>; nTO_C<span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">0</span>; nPD_S<span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">0</span>; nPD_C<span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">0</span>; <span style="color: #003366; font-weight: bold">STK_PU</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">0</span>;
    <span style="color: #003366; font-weight: bold">STK_PO</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">0</span>; <span style="color: #003366; font-weight: bold">NOP_S</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">0</span>; <span style="color: #003366; font-weight: bold">PC_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">0</span>; <span style="color: #003366; font-weight: bold">WDT_C</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">0</span>; <span style="color: #003366; font-weight: bold">SLP_S</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">0</span>;
    <span style="color: #008800; font-weight: bold">case</span>( <span style="color: #003366; font-weight: bold">IR</span>[ <span style="color: #005588; font-weight: bold">13</span> <span style="color: #333333">:</span> <span style="color: #005588; font-weight: bold">12</span>] )
      <span style="color: #005588; font-weight: bold">2&#39;b00</span> <span style="color: #333333">:</span>
        <span style="color: #008800; font-weight: bold">begin</span>
          <span style="color: #003366; font-weight: bold">W_W</span> <span style="color: #333333">=</span> <span style="color: #333333">~</span><span style="color: #003366; font-weight: bold">IR</span>[<span style="color: #005588; font-weight: bold">7</span>] <span style="color: #333333">&amp;&amp;</span> <span style="color: #003366; font-weight: bold">IR</span>[<span style="color: #005588; font-weight: bold">11</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">8</span>] <span style="color: #333333">!=</span> <span style="color: #005588; font-weight: bold">4&#39;b0000</span> ;
          <span style="color: #003366; font-weight: bold">F_W</span> <span style="color: #333333">=</span> <span style="color: #003366; font-weight: bold">IR</span>[<span style="color: #005588; font-weight: bold">7</span>]; <span style="color: #888888">//same with W_W = IR[7] &amp;&amp; |IR[11:8] meaning bit 8 is 1 and bit 9-12 isn`t 0</span>
          <span style="color: #008800; font-weight: bold">case</span>( <span style="color: #003366; font-weight: bold">IR</span>[ <span style="color: #005588; font-weight: bold">11</span> <span style="color: #333333">:</span> <span style="color: #005588; font-weight: bold">8</span> ] )
            <span style="color: #005588; font-weight: bold">4&#39;b0000</span><span style="color: #333333">:</span>
              <span style="color: #008800; font-weight: bold">case</span>( <span style="color: #003366; font-weight: bold">IR</span>[<span style="color: #005588; font-weight: bold">7</span>] )
                <span style="color: #005588; font-weight: bold">1&#39;b0</span><span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">case</span>( <span style="color: #003366; font-weight: bold">IR</span>[ <span style="color: #005588; font-weight: bold">6</span> <span style="color: #333333">:</span> <span style="color: #005588; font-weight: bold">0</span> ] )
                  <span style="color: #005588; font-weight: bold">7&#39;b000</span>_1000 <span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">NOP_S</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #003366; font-weight: bold">STK_PO</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// RETURN</span>
               <span style="color: #888888">// 7&#39;b000_1001: ; // RETFIE</span>
                  <span style="color: #005588; font-weight: bold">7&#39;b110</span>_0011 <span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> nTO_S<span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span>; nPD_S<span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span>; <span style="color: #003366; font-weight: bold">WDT_C</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span>; <span style="color: #003366; font-weight: bold">SLP_S</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #003366; font-weight: bold">NOP_S</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// SLEEP</span>
               <span style="color: #888888">// 7&#39;b110_0100: ; // CLRWDT</span>
                  <span style="color: #008800; font-weight: bold">default</span><span style="color: #333333">:</span> ; <span style="color: #888888">// NOP</span>
                  <span style="color: #008800; font-weight: bold">endcase</span>
                <span style="color: #005588; font-weight: bold">1&#39;b1</span><span style="color: #333333">:</span> ; <span style="color: #888888">// MOVWF f</span>
              <span style="color: #008800; font-weight: bold">endcase</span>
            <span style="color: #005588; font-weight: bold">4&#39;b0001</span><span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">Z_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// CLRW, CLRF</span>
            <span style="color: #005588; font-weight: bold">4&#39;b0010</span><span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">C_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #003366; font-weight: bold">DC_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #003366; font-weight: bold">Z_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// SUBWF</span>
            <span style="color: #005588; font-weight: bold">4&#39;b0011</span><span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">Z_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// DECF</span>
            <span style="color: #005588; font-weight: bold">4&#39;b0100</span><span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">Z_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// IORWF</span>
            <span style="color: #005588; font-weight: bold">4&#39;b0101</span><span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">Z_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// ANDWF</span>
            <span style="color: #005588; font-weight: bold">4&#39;b0110</span><span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">Z_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// XORWF</span>
            <span style="color: #005588; font-weight: bold">4&#39;b0111</span><span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">C_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #003366; font-weight: bold">DC_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #003366; font-weight: bold">Z_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// ADDWF</span>
            <span style="color: #005588; font-weight: bold">4&#39;b1000</span><span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">Z_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// MOVF</span>
            <span style="color: #005588; font-weight: bold">4&#39;b1001</span><span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">Z_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// COMF</span>
            <span style="color: #005588; font-weight: bold">4&#39;b1010</span><span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">Z_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// INCF</span>
            <span style="color: #005588; font-weight: bold">4&#39;b1011</span><span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">NOP_S</span><span style="color: #333333">=</span> (<span style="color: #003366; font-weight: bold">ZO</span><span style="color: #333333">==</span><span style="color: #005588; font-weight: bold">1</span>) <span style="color: #333333">?</span> <span style="color: #005588; font-weight: bold">1</span> <span style="color: #333333">:</span> <span style="color: #005588; font-weight: bold">0</span> ; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// DECFSZ</span>
            <span style="color: #005588; font-weight: bold">4&#39;b1100</span><span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">C_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// RRF</span>
            <span style="color: #005588; font-weight: bold">4&#39;b1101</span><span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">C_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// RLF</span>
            <span style="color: #005588; font-weight: bold">4&#39;b1110</span><span style="color: #333333">:</span> ; <span style="color: #888888">// SWPF</span>
            <span style="color: #005588; font-weight: bold">4&#39;b1111</span><span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">NOP_S</span><span style="color: #333333">=</span><span style="color: #003366; font-weight: bold">ZO</span> ; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// INCFSZ</span>
          <span style="color: #008800; font-weight: bold">endcase</span> <span style="color: #888888">//IR</span>
        <span style="color: #008800; font-weight: bold">end</span>
        <span style="color: #005588; font-weight: bold">2&#39;b01</span> <span style="color: #333333">:</span>
        <span style="color: #008800; font-weight: bold">begin</span>
          <span style="color: #008800; font-weight: bold">case</span>( <span style="color: #003366; font-weight: bold">IR</span>[ <span style="color: #005588; font-weight: bold">11</span> <span style="color: #333333">:</span> <span style="color: #005588; font-weight: bold">10</span> ] )
            <span style="color: #005588; font-weight: bold">2&#39;b00</span> <span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">F_W</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #888888">// BCF f, b</span>
            <span style="color: #005588; font-weight: bold">2&#39;b01</span> <span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">F_W</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #888888">// BSF f, b</span>
            <span style="color: #005588; font-weight: bold">2&#39;b10</span> <span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">NOP_S</span><span style="color: #333333">=</span><span style="color: #003366; font-weight: bold">ZO</span> ; <span style="color: #888888">// BTFSC f, b</span>
            <span style="color: #005588; font-weight: bold">2&#39;b11</span> <span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">NOP_S</span><span style="color: #333333">=~</span><span style="color: #003366; font-weight: bold">ZO</span> ; <span style="color: #888888">// BTFSS f, b</span>
          <span style="color: #008800; font-weight: bold">endcase</span>
        <span style="color: #008800; font-weight: bold">end</span>
        <span style="color: #005588; font-weight: bold">2&#39;b10</span> <span style="color: #333333">:</span>
            <span style="color: #008800; font-weight: bold">begin</span>
              <span style="color: #003366; font-weight: bold">PC_W</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #003366; font-weight: bold">NOP_S</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">1</span> ;
                <span style="color: #008800; font-weight: bold">case</span>( <span style="color: #003366; font-weight: bold">IR</span>[ <span style="color: #005588; font-weight: bold">11</span> ] )
                  <span style="color: #005588; font-weight: bold">1&#39;b0</span> <span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">STK_PU</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #888888">// CALL</span>
                  <span style="color: #005588; font-weight: bold">1&#39;b1</span> <span style="color: #333333">:</span> ; <span style="color: #888888">// GOTO</span>
                <span style="color: #008800; font-weight: bold">endcase</span>
              <span style="color: #008800; font-weight: bold">end</span>
              <span style="color: #005588; font-weight: bold">2&#39;b11</span> <span style="color: #333333">:</span>
              <span style="color: #008800; font-weight: bold">begin</span>
                <span style="color: #003366; font-weight: bold">W_W</span><span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">1</span> ;
                <span style="color: #008800; font-weight: bold">casex</span>( <span style="color: #003366; font-weight: bold">IR</span>[ <span style="color: #005588; font-weight: bold">11</span> <span style="color: #333333">:</span> <span style="color: #005588; font-weight: bold">8</span> ] )
                  <span style="color: #005588; font-weight: bold">4&#39;b00</span>xx <span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">ALU_CB</span><span style="color: #333333">=</span><span style="color: #003366; font-weight: bold">`IPSF</span> ; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// MOVLW k //--&gt; pass in ALU to W //</span>
                  <span style="color: #005588; font-weight: bold">4&#39;b01</span>xx <span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">ALU_CB</span><span style="color: #333333">=</span><span style="color: #003366; font-weight: bold">`IPSF</span> ; <span style="color: #003366; font-weight: bold">STK_PO</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #003366; font-weight: bold">NOP_S</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">1</span>; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// RETLW k</span>
                  <span style="color: #005588; font-weight: bold">4&#39;b1000</span> <span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">ALU_CB</span><span style="color: #333333">=</span><span style="color: #003366; font-weight: bold">`IOR</span> ; <span style="color: #003366; font-weight: bold">Z_W</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// IORLW k</span>
                  <span style="color: #005588; font-weight: bold">4&#39;b1001</span> <span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">ALU_CB</span><span style="color: #333333">=</span><span style="color: #003366; font-weight: bold">`IAND</span> ; <span style="color: #003366; font-weight: bold">Z_W</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// ANDLW k</span>
                  <span style="color: #005588; font-weight: bold">4&#39;b1010</span> <span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">ALU_CB</span><span style="color: #333333">=</span><span style="color: #003366; font-weight: bold">`IXOR</span> ; <span style="color: #003366; font-weight: bold">Z_W</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// XORLW k</span>
                  <span style="color: #005588; font-weight: bold">4&#39;b110</span>x <span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">ALU_CB</span><span style="color: #333333">=</span><span style="color: #003366; font-weight: bold">`ISUB</span> ; <span style="color: #003366; font-weight: bold">C_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #003366; font-weight: bold">DC_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #003366; font-weight: bold">Z_W</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// SUBLW k</span>
                  <span style="color: #005588; font-weight: bold">4&#39;b111</span>x <span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">ALU_CB</span><span style="color: #333333">=</span><span style="color: #003366; font-weight: bold">`IADD</span> ; <span style="color: #003366; font-weight: bold">C_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #003366; font-weight: bold">DC_W</span><span style="color: #333333">=</span><span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #003366; font-weight: bold">Z_W</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// ADDLW k</span>
                <span style="color: #008800; font-weight: bold">endcase</span>
              <span style="color: #008800; font-weight: bold">end</span>
            <span style="color: #008800; font-weight: bold">endcase</span>
          <span style="color: #008800; font-weight: bold">end</span> <span style="color: #888888">// always @ ( IR or ZO )</span>
</pre></div>


### 2.7 Special Register

![Figure 8. Special register.png](https://cdn.steemitimages.com/DQmSiueKqMHDT2TPg1t2aQHHzs7aWxEDqaJUfWcK2uphDXb/Figure%208.%20Special%20register.png)

Figure 8\. Special register [3]

Code 12 about special register is based on Figure 3 memory map for the written bits and Figure 8 about special register itself for its values.

Code 12\. Special register

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #888888">// Special Register</span>
<span style="color: #888888">// Write</span>
<span style="color: #008800; font-weight: bold">always</span> @( <span style="color: #008800; font-weight: bold">posedge</span> <span style="color: #003366; font-weight: bold">CLK</span> <span style="color: #008800; font-weight: bold">or</span> <span style="color: #008800; font-weight: bold">posedge</span> <span style="color: #003366; font-weight: bold">RST</span> )
  <span style="color: #008800; font-weight: bold">begin</span>
    <span style="color: #008800; font-weight: bold">if</span>( <span style="color: #003366; font-weight: bold">RST</span> )
      <span style="color: #008800; font-weight: bold">begin</span>
        <span style="color: #003366; font-weight: bold">C</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">0</span> ;
        <span style="color: #003366; font-weight: bold">DC</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">0</span> ;
        <span style="color: #003366; font-weight: bold">Z</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">0</span> ;
        <span style="color: #003366; font-weight: bold">IRP</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">0</span> ;
        <span style="color: #003366; font-weight: bold">RP</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">2&#39;b00</span> ;
        nTO <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #888888">// nTO=1 on Power-on</span>
        nPD <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">1</span> ; <span style="color: #888888">// nPD=1 on Power-on</span>
        <span style="color: #003366; font-weight: bold">FSR</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">0</span> ; <span style="color: #003366; font-weight: bold">PCLATH</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">5&#39;b00000</span> ;
        <span style="color: #003366; font-weight: bold">PORTA</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">8&#39;b0000</span>_0000 ;
        <span style="color: #003366; font-weight: bold">TRISA</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">8&#39;b1111</span>_1111 ; <span style="color: #888888">// All ports for input</span>
        <span style="color: #003366; font-weight: bold">PORTB</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">8&#39;b0000</span>_0000 ;
        <span style="color: #003366; font-weight: bold">TRISB</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">8&#39;b1111</span>_1111 ; <span style="color: #888888">// Table page 18-20</span>
      <span style="color: #888888">// All ports for input</span>
         <span style="color: #008800; font-weight: bold">end</span>
       <span style="color: #008800; font-weight: bold">else</span>
         <span style="color: #008800; font-weight: bold">begin</span>
           <span style="color: #888888">// STATUS</span>
           <span style="color: #008800; font-weight: bold">if</span>( <span style="color: #003366; font-weight: bold">C_W</span> ) <span style="color: #003366; font-weight: bold">C</span> <span style="color: #333333">=</span> <span style="color: #003366; font-weight: bold">CO</span> ;
           <span style="color: #008800; font-weight: bold">if</span>( <span style="color: #003366; font-weight: bold">DC_W</span> ) <span style="color: #003366; font-weight: bold">DC</span> <span style="color: #333333">=</span> <span style="color: #003366; font-weight: bold">DCO</span> ;
           <span style="color: #008800; font-weight: bold">if</span>( <span style="color: #003366; font-weight: bold">Z_W</span> ) <span style="color: #003366; font-weight: bold">Z</span> <span style="color: #333333">=</span> <span style="color: #003366; font-weight: bold">ZO</span> ;
           <span style="color: #008800; font-weight: bold">if</span>( nPD_S ) nPD <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">1&#39;b1</span>;
           <span style="color: #008800; font-weight: bold">if</span>( nPD_C ) nPD <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">1&#39;b0</span>;
           <span style="color: #008800; font-weight: bold">if</span>( nTO_S ) nTO <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">1&#39;b1</span>;
           <span style="color: #008800; font-weight: bold">if</span>( nTO_C ) nTO <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">1&#39;b0</span>;
           <span style="color: #888888">// Register Write</span>
           <span style="color: #008800; font-weight: bold">if</span>( <span style="color: #003366; font-weight: bold">F_W</span> ) <span style="color: #888888">//pic16_behaviour page 41</span>
             <span style="color: #008800; font-weight: bold">casex</span>( <span style="color: #003366; font-weight: bold">EA</span> ) <span style="color: #888888">//effective address</span>
           <span style="color: #888888">// 9&#39;b?0_000_0001: TMR0 = WDATA; // 01 101 Described TMR0 part //find in address table</span>
           <span style="color: #888888">// 9&#39;b?1_000_0001:`OPTION = WDATA; // 81 181</span>
           <span style="color: #888888">// 9&#39;b??_000_0010: PCL = WDATA; // 02 82 102 182 Described PC part</span>
              <span style="color: #005588; font-weight: bold">9</span>&#39;b<span style="color: #333333">??</span><span style="color: #997700; font-weight: bold">_000_0011:</span><span style="color: #003366; font-weight: bold">`STATUS</span> <span style="color: #333333">=</span> <span style="color: #003366; font-weight: bold">WDATA</span>; <span style="color: #888888">// 03 83 103 183</span>
              <span style="color: #005588; font-weight: bold">9</span>&#39;b<span style="color: #333333">??</span><span style="color: #997700; font-weight: bold">_000_0100:</span> <span style="color: #003366; font-weight: bold">FSR</span> <span style="color: #333333">=</span> <span style="color: #003366; font-weight: bold">WDATA</span>; <span style="color: #888888">// 04 84 104 184</span>
              <span style="color: #005588; font-weight: bold">9&#39;b00</span><span style="color: #997700; font-weight: bold">_000_0101:</span> <span style="color: #003366; font-weight: bold">PORTA</span> <span style="color: #333333">=</span> <span style="color: #003366; font-weight: bold">WDATA</span>; <span style="color: #888888">// 05</span>
              <span style="color: #005588; font-weight: bold">9&#39;b01</span><span style="color: #997700; font-weight: bold">_000_0101:</span> <span style="color: #003366; font-weight: bold">TRISA</span> <span style="color: #333333">=</span> <span style="color: #003366; font-weight: bold">WDATA</span>; <span style="color: #888888">// 85</span>
              <span style="color: #005588; font-weight: bold">9</span>&#39;b<span style="color: #333333">?</span><span style="color: #005588; font-weight: bold">0</span><span style="color: #997700; font-weight: bold">_000_0110:</span> <span style="color: #003366; font-weight: bold">PORTB</span> <span style="color: #333333">=</span> <span style="color: #003366; font-weight: bold">WDATA</span>; <span style="color: #888888">// 06 106</span>
              <span style="color: #005588; font-weight: bold">9</span>&#39;b<span style="color: #333333">?</span><span style="color: #005588; font-weight: bold">1</span><span style="color: #997700; font-weight: bold">_000_0110:</span> <span style="color: #003366; font-weight: bold">TRISB</span> <span style="color: #333333">=</span> <span style="color: #003366; font-weight: bold">WDATA</span>; <span style="color: #888888">// 86 186</span>
              <span style="color: #888888">// 9&#39;b??_000_0111: ; // 07</span>
              <span style="color: #888888">// 9&#39;b??_000_1000: ; // 08 EEDATA not implement</span>
              <span style="color: #888888">// 9&#39;b??_000_1001: ; // 09 EEADR not implement</span>
              <span style="color: #005588; font-weight: bold">9</span>&#39;b<span style="color: #333333">??</span><span style="color: #997700; font-weight: bold">_000_1010:</span> <span style="color: #003366; font-weight: bold">PCLATH</span> <span style="color: #333333">=</span> <span style="color: #003366; font-weight: bold">WDATA</span>[<span style="color: #005588; font-weight: bold">4</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>]; <span style="color: #888888">// 0A 8A 10A 18A</span>
              <span style="color: #888888">// 9&#39;b??_000_1011:`INTCON = WDATA; // 0B 8B 10B 18B</span>
            <span style="color: #008800; font-weight: bold">endcase</span>
          <span style="color: #008800; font-weight: bold">end</span>
        <span style="color: #008800; font-weight: bold">end</span>
</pre></div>


Code 13\. Data RAM

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #888888">// Data RAM (Write)</span>
<span style="color: #008800; font-weight: bold">always</span> @( <span style="color: #008800; font-weight: bold">posedge</span> <span style="color: #003366; font-weight: bold">CLK</span> )
  <span style="color: #008800; font-weight: bold">begin</span>
    <span style="color: #008800; font-weight: bold">if</span>( <span style="color: #003366; font-weight: bold">F_W</span> <span style="color: #333333">&amp;&amp;</span> ( <span style="color: #003366; font-weight: bold">EA</span>[<span style="color: #005588; font-weight: bold">6</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] <span style="color: #333333">&gt;=</span> <span style="color: #005588; font-weight: bold">7&#39;b001</span>_1000 ) ) <span style="color: #003366; font-weight: bold">RAM</span>[ <span style="color: #003366; font-weight: bold">EA</span>[<span style="color: #005588; font-weight: bold">6</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] ] <span style="color: #333333">&lt;=</span> <span style="color: #003366; font-weight: bold">WDATA</span> ; <span style="color: #888888">//12-127 PIC16 behaviour p.46 //light behaviour p.41 //Effective Address only 7bit not 9bit start from 12 //store RAM to WDATA</span>
  <span style="color: #008800; font-weight: bold">end</span>
<span style="color: #888888">// Selecter for Special Register</span>
<span style="color: #008800; font-weight: bold">always</span> @( <span style="color: #003366; font-weight: bold">IR</span> <span style="color: #008800; font-weight: bold">or</span> <span style="color: #003366; font-weight: bold">PC</span> <span style="color: #008800; font-weight: bold">or</span> <span style="color: #003366; font-weight: bold">EA</span> <span style="color: #008800; font-weight: bold">or</span> <span style="color: #003366; font-weight: bold">IRP</span> <span style="color: #008800; font-weight: bold">or</span> <span style="color: #003366; font-weight: bold">RP</span> <span style="color: #008800; font-weight: bold">or</span> nTO <span style="color: #008800; font-weight: bold">or</span> nPD <span style="color: #008800; font-weight: bold">or</span> <span style="color: #003366; font-weight: bold">Z</span> <span style="color: #008800; font-weight: bold">or</span> <span style="color: #003366; font-weight: bold">DC</span> <span style="color: #008800; font-weight: bold">or</span> <span style="color: #003366; font-weight: bold">C</span> <span style="color: #888888">// STATUS</span>
                  <span style="color: #008800; font-weight: bold">or</span> <span style="color: #003366; font-weight: bold">FSR</span> <span style="color: #008800; font-weight: bold">or</span> <span style="color: #003366; font-weight: bold">RA</span> <span style="color: #008800; font-weight: bold">or</span> <span style="color: #003366; font-weight: bold">TRISA</span> <span style="color: #008800; font-weight: bold">or</span> <span style="color: #003366; font-weight: bold">RB</span> <span style="color: #008800; font-weight: bold">or</span> <span style="color: #003366; font-weight: bold">TRISB</span> <span style="color: #008800; font-weight: bold">or</span> <span style="color: #003366; font-weight: bold">PCLATH</span> )
  <span style="color: #008800; font-weight: bold">casex</span>( <span style="color: #003366; font-weight: bold">EA</span> )
    <span style="color: #888888">// 9&#39;b?0_000_0001: SDATA = TMR0;</span>
    <span style="color: #888888">// 9&#39;b?1_000_0001: SDATA =`OPTION;</span>
    <span style="color: #005588; font-weight: bold">9</span>&#39;b<span style="color: #333333">??</span><span style="color: #997700; font-weight: bold">_000_0010:</span> <span style="color: #003366; font-weight: bold">SDATA</span> <span style="color: #333333">=</span> <span style="color: #003366; font-weight: bold">PC</span>[<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>] ; <span style="color: #888888">// PCL</span>
    <span style="color: #005588; font-weight: bold">9</span>&#39;b<span style="color: #333333">??</span><span style="color: #997700; font-weight: bold">_000_0011:</span> <span style="color: #003366; font-weight: bold">SDATA</span> <span style="color: #333333">=</span><span style="color: #003366; font-weight: bold">`STATUS</span> ; <span style="color: #888888">// STATUS</span>
    <span style="color: #005588; font-weight: bold">9</span>&#39;b<span style="color: #333333">??</span><span style="color: #997700; font-weight: bold">_000_0100:</span> <span style="color: #003366; font-weight: bold">SDATA</span> <span style="color: #333333">=</span> <span style="color: #003366; font-weight: bold">FSR</span> ; <span style="color: #888888">// FSR</span>
    <span style="color: #005588; font-weight: bold">9&#39;b00</span><span style="color: #997700; font-weight: bold">_000_0101:</span> <span style="color: #003366; font-weight: bold">SDATA</span> <span style="color: #333333">=</span> <span style="color: #003366; font-weight: bold">PORTA</span> ; <span style="color: #888888">// RA</span>
    <span style="color: #005588; font-weight: bold">9&#39;b01</span><span style="color: #997700; font-weight: bold">_000_0101:</span> <span style="color: #003366; font-weight: bold">SDATA</span> <span style="color: #333333">=</span> <span style="color: #003366; font-weight: bold">TRISA</span> ; <span style="color: #888888">// TRISA</span>
    <span style="color: #005588; font-weight: bold">9</span>&#39;b<span style="color: #333333">?</span><span style="color: #005588; font-weight: bold">0</span><span style="color: #997700; font-weight: bold">_000_0110:</span> <span style="color: #003366; font-weight: bold">SDATA</span> <span style="color: #333333">=</span> <span style="color: #003366; font-weight: bold">PORTB</span> ; <span style="color: #888888">// RB</span>
    <span style="color: #005588; font-weight: bold">9</span>&#39;b<span style="color: #333333">?</span><span style="color: #005588; font-weight: bold">1</span><span style="color: #997700; font-weight: bold">_000_0110:</span> <span style="color: #003366; font-weight: bold">SDATA</span> <span style="color: #333333">=</span> <span style="color: #003366; font-weight: bold">TRISB</span> ; <span style="color: #888888">// TRISB</span>
    <span style="color: #005588; font-weight: bold">9</span>&#39;b<span style="color: #333333">??</span><span style="color: #997700; font-weight: bold">_000_1010:</span> <span style="color: #003366; font-weight: bold">SDATA</span> <span style="color: #333333">=</span> {<span style="color: #005588; font-weight: bold">3&#39;b000</span>, <span style="color: #003366; font-weight: bold">PCLATH</span> }; <span style="color: #888888">// PCLATH //because SDATA is 9 bit and PCLATH is only 6 bit, we need to add 3 bit before PCLATH // 9&#39;b??_000_1011: SDATA =`INTCON;</span>
    <span style="color: #008800; font-weight: bold">default</span><span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">SDATA</span> <span style="color: #333333">=</span> <span style="color: #005588; font-weight: bold">8</span>&#39;bxxxx_xxxx;
  <span style="color: #008800; font-weight: bold">endcase</span>
<span style="color: #888888">// Data RAM Read</span>
<span style="color: #008800; font-weight: bold">assign</span> <span style="color: #003366; font-weight: bold">DDATA</span> <span style="color: #333333">=</span> <span style="color: #003366; font-weight: bold">RAM</span>[<span style="color: #003366; font-weight: bold">EA</span>[<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>]] ;
</pre></div>


### 2.8 Data Path

![Figure 9. Data path to ALU.png](https://cdn.steemitimages.com/DQmUVgNyoBp2Sy3Wqxu4MGMJ7pkYaCgJRRoBCtV59UDYyT6/Figure%209.%20Data%20path%20to%20ALU.png)

Figure 9\. Data path to ALU [2]

Code 14\. Data selector for ALU

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #888888">// Data selector for ALU operand</span>
<span style="color: #008800; font-weight: bold">always</span> @( <span style="color: #003366; font-weight: bold">IR</span> <span style="color: #008800; font-weight: bold">or</span> <span style="color: #003366; font-weight: bold">EA</span> <span style="color: #008800; font-weight: bold">or</span> <span style="color: #003366; font-weight: bold">DDATA</span> <span style="color: #008800; font-weight: bold">or</span> <span style="color: #003366; font-weight: bold">SDATA</span> )
  <span style="color: #008800; font-weight: bold">begin</span> <span style="color: #003366; font-weight: bold">RDATA</span> <span style="color: #333333">&lt;=</span> <span style="color: #005588; font-weight: bold">8</span>&#39;bxxxx_xxxx ;
  <span style="color: #008800; font-weight: bold">if</span>( <span style="color: #333333">&amp;</span><span style="color: #003366; font-weight: bold">IR</span>[<span style="color: #005588; font-weight: bold">13</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">12</span>] ) <span style="color: #003366; font-weight: bold">RDATA</span> <span style="color: #333333">&lt;=</span> <span style="color: #003366; font-weight: bold">`IRK</span> ; <span style="color: #008800; font-weight: bold">else</span> <span style="color: #888888">//</span>
    <span style="color: #008800; font-weight: bold">casex</span>( <span style="color: #003366; font-weight: bold">EA</span> )
      <span style="color: #005588; font-weight: bold">9</span>&#39;b<span style="color: #333333">??</span><span style="color: #997700; font-weight: bold">_000_0010:</span> <span style="color: #003366; font-weight: bold">RDATA</span> <span style="color: #333333">&lt;=</span> <span style="color: #003366; font-weight: bold">SDATA</span> ; <span style="color: #888888">// PCL</span>
      <span style="color: #005588; font-weight: bold">9</span>&#39;b<span style="color: #333333">??</span><span style="color: #997700; font-weight: bold">_000_0011:</span> <span style="color: #003366; font-weight: bold">RDATA</span> <span style="color: #333333">&lt;=</span> <span style="color: #003366; font-weight: bold">SDATA</span> ; <span style="color: #888888">// STATUS</span>
      <span style="color: #005588; font-weight: bold">9</span>&#39;b<span style="color: #333333">??</span><span style="color: #997700; font-weight: bold">_000_0100:</span> <span style="color: #003366; font-weight: bold">RDATA</span> <span style="color: #333333">&lt;=</span> <span style="color: #003366; font-weight: bold">SDATA</span> ; <span style="color: #888888">// FSR</span>
      <span style="color: #005588; font-weight: bold">9&#39;b0</span><span style="color: #333333">?</span><span style="color: #997700; font-weight: bold">_000_0101:</span> <span style="color: #003366; font-weight: bold">RDATA</span> <span style="color: #333333">&lt;=</span> <span style="color: #003366; font-weight: bold">SDATA</span> ; <span style="color: #888888">// PORTA, TRISA</span>
      <span style="color: #005588; font-weight: bold">9&#39;b0</span><span style="color: #333333">?</span><span style="color: #997700; font-weight: bold">_000_0110:</span> <span style="color: #003366; font-weight: bold">RDATA</span> <span style="color: #333333">&lt;=</span> <span style="color: #003366; font-weight: bold">SDATA</span> ; <span style="color: #888888">// PORTB, TRISB</span>
      <span style="color: #005588; font-weight: bold">9</span>&#39;b<span style="color: #333333">??</span><span style="color: #997700; font-weight: bold">_000_1010:</span> <span style="color: #003366; font-weight: bold">RDATA</span> <span style="color: #333333">&lt;=</span> <span style="color: #003366; font-weight: bold">SDATA</span> ; <span style="color: #888888">// PCLATH</span>
      <span style="color: #008800; font-weight: bold">default</span><span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">RDATA</span> <span style="color: #333333">&lt;=</span> <span style="color: #003366; font-weight: bold">RAM</span>[<span style="color: #003366; font-weight: bold">EA</span>[<span style="color: #005588; font-weight: bold">7</span><span style="color: #333333">:</span><span style="color: #005588; font-weight: bold">0</span>]] ; <span style="color: #888888">// Shared memory</span>
    <span style="color: #008800; font-weight: bold">endcase</span>
  <span style="color: #008800; font-weight: bold">end</span>
</pre></div>


### 2.9 ALU Initiate

![Figure 10. ALU initiate diagram.png](https://cdn.steemitimages.com/DQmT9ZBaGH5dqx9mfzsZXSoq5ZtXovJ2HgHB9uZaBu7Epcc/Figure%2010.%20ALU%20initiate%20diagram.png)

Figure 10\. ALU initiate diagram [2]

Code 15\. ALU initiate code

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #888888">// Execute</span>
   alu i_alu ( .<span style="color: #003366; font-weight: bold">CLK</span>(<span style="color: #003366; font-weight: bold">CLK</span>), .<span style="color: #003366; font-weight: bold">CB</span>(<span style="color: #003366; font-weight: bold">ALU_CB</span>), .<span style="color: #003366; font-weight: bold">WE</span>(<span style="color: #003366; font-weight: bold">W_W</span>), .<span style="color: #003366; font-weight: bold">B</span>(<span style="color: #003366; font-weight: bold">`IRB</span>),
	       .<span style="color: #003366; font-weight: bold">FI</span>(<span style="color: #003366; font-weight: bold">RDATA</span>),
	       .<span style="color: #003366; font-weight: bold">FO</span>(<span style="color: #003366; font-weight: bold">WDATA</span>),
	       .<span style="color: #003366; font-weight: bold">CI</span>(<span style="color: #003366; font-weight: bold">C</span>), .<span style="color: #003366; font-weight: bold">CO</span>(<span style="color: #003366; font-weight: bold">CO</span>), .<span style="color: #003366; font-weight: bold">DC</span>(<span style="color: #003366; font-weight: bold">DCO</span>), .<span style="color: #003366; font-weight: bold">Z</span>(<span style="color: #003366; font-weight: bold">ZO</span>) );
</pre></div>


### 2.10 Sleep

Back on Code 11, sleep is a repeat NOP. Here on Figure 9, waking up from sleep is not implemented, sleep forever but can be reset.

![Figure 11. Sleep diagram.png](https://cdn.steemitimages.com/DQmbfthvwUDhZzA2MZtnmWLRpQB8Es9EWF87Lxu8P7iy2c6/Figure%2011.%20Sleep%20diagram.png)

Figure 11\. Sleep diagram [2]

Code 16\. Sleep implementation

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #888888">// Sleep mode</span>
<span style="color: #008800; font-weight: bold">always</span> @( <span style="color: #008800; font-weight: bold">posedge</span> <span style="color: #003366; font-weight: bold">CLK</span> <span style="color: #008800; font-weight: bold">or</span> <span style="color: #008800; font-weight: bold">posedge</span> <span style="color: #003366; font-weight: bold">RST</span> )
<span style="color: #008800; font-weight: bold">begin</span>
  <span style="color: #008800; font-weight: bold">if</span>(<span style="color: #003366; font-weight: bold">RST</span>) <span style="color: #003366; font-weight: bold">SLEEP</span> <span style="color: #333333">&lt;=</span> <span style="color: #005588; font-weight: bold">0</span>; <span style="color: #008800; font-weight: bold">else</span> <span style="color: #888888">//0 mean run</span>
  <span style="color: #008800; font-weight: bold">if</span>(<span style="color: #003366; font-weight: bold">SLP_S</span>) <span style="color: #003366; font-weight: bold">SLEEP</span> <span style="color: #333333">&lt;=</span> <span style="color: #005588; font-weight: bold">1</span>; <span style="color: #888888">//1 mean execute the sleep mode</span>
<span style="color: #008800; font-weight: bold">end</span>
</pre></div>


### 2.11 Tristate Buffer

![Figure 12. Tristate buffer diagram.png](https://cdn.steemitimages.com/DQmZygTVxe8M5qxD7ZMgDsmk3UWvm6N2c4DDhRs5j9abhMW/Figure%2012.%20Tristate%20buffer%20diagram.png)

Figure 12\. Tristate buffer diagram [2]

Code 17\. Tristate buffer implementation

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #888888">// Tristate buffer for GPIO</span>
<span style="color: #008800; font-weight: bold">assign</span> <span style="color: #003366; font-weight: bold">RA</span>[<span style="color: #005588; font-weight: bold">0</span>] <span style="color: #333333">=</span> ( <span style="color: #003366; font-weight: bold">TRISA</span>[<span style="color: #005588; font-weight: bold">0</span>] ) <span style="color: #333333">?</span> <span style="color: #005588; font-weight: bold">1</span>&#39;bZ <span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">PORTA</span>[<span style="color: #005588; font-weight: bold">0</span>];
<span style="color: #008800; font-weight: bold">assign</span> <span style="color: #003366; font-weight: bold">RA</span>[<span style="color: #005588; font-weight: bold">1</span>] <span style="color: #333333">=</span> ( <span style="color: #003366; font-weight: bold">TRISA</span>[<span style="color: #005588; font-weight: bold">1</span>] ) <span style="color: #333333">?</span> <span style="color: #005588; font-weight: bold">1</span>&#39;bZ <span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">PORTA</span>[<span style="color: #005588; font-weight: bold">1</span>];
<span style="color: #008800; font-weight: bold">assign</span> <span style="color: #003366; font-weight: bold">RA</span>[<span style="color: #005588; font-weight: bold">2</span>] <span style="color: #333333">=</span> ( <span style="color: #003366; font-weight: bold">TRISA</span>[<span style="color: #005588; font-weight: bold">2</span>] ) <span style="color: #333333">?</span> <span style="color: #005588; font-weight: bold">1</span>&#39;bZ <span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">PORTA</span>[<span style="color: #005588; font-weight: bold">2</span>];
<span style="color: #008800; font-weight: bold">assign</span> <span style="color: #003366; font-weight: bold">RA</span>[<span style="color: #005588; font-weight: bold">3</span>] <span style="color: #333333">=</span> ( <span style="color: #003366; font-weight: bold">TRISA</span>[<span style="color: #005588; font-weight: bold">3</span>] ) <span style="color: #333333">?</span> <span style="color: #005588; font-weight: bold">1</span>&#39;bZ <span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">PORTA</span>[<span style="color: #005588; font-weight: bold">3</span>];
<span style="color: #008800; font-weight: bold">assign</span> <span style="color: #003366; font-weight: bold">RA</span>[<span style="color: #005588; font-weight: bold">4</span>] <span style="color: #333333">=</span> ( <span style="color: #003366; font-weight: bold">TRISA</span>[<span style="color: #005588; font-weight: bold">4</span>] ) <span style="color: #333333">?</span> <span style="color: #005588; font-weight: bold">1</span>&#39;bZ <span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">PORTA</span>[<span style="color: #005588; font-weight: bold">4</span>];
<span style="color: #008800; font-weight: bold">assign</span> <span style="color: #003366; font-weight: bold">RA</span>[<span style="color: #005588; font-weight: bold">5</span>] <span style="color: #333333">=</span> ( <span style="color: #003366; font-weight: bold">TRISA</span>[<span style="color: #005588; font-weight: bold">5</span>] ) <span style="color: #333333">?</span> <span style="color: #005588; font-weight: bold">1</span>&#39;bZ <span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">PORTA</span>[<span style="color: #005588; font-weight: bold">5</span>];
<span style="color: #008800; font-weight: bold">assign</span> <span style="color: #003366; font-weight: bold">RA</span>[<span style="color: #005588; font-weight: bold">6</span>] <span style="color: #333333">=</span> ( <span style="color: #003366; font-weight: bold">TRISA</span>[<span style="color: #005588; font-weight: bold">6</span>] ) <span style="color: #333333">?</span> <span style="color: #005588; font-weight: bold">1</span>&#39;bZ <span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">PORTA</span>[<span style="color: #005588; font-weight: bold">6</span>];
<span style="color: #008800; font-weight: bold">assign</span> <span style="color: #003366; font-weight: bold">RA</span>[<span style="color: #005588; font-weight: bold">7</span>] <span style="color: #333333">=</span> ( <span style="color: #003366; font-weight: bold">TRISA</span>[<span style="color: #005588; font-weight: bold">7</span>] ) <span style="color: #333333">?</span> <span style="color: #005588; font-weight: bold">1</span>&#39;bZ <span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">PORTA</span>[<span style="color: #005588; font-weight: bold">7</span>];
<span style="color: #008800; font-weight: bold">assign</span> <span style="color: #003366; font-weight: bold">RB</span>[<span style="color: #005588; font-weight: bold">0</span>] <span style="color: #333333">=</span> ( <span style="color: #003366; font-weight: bold">TRISB</span>[<span style="color: #005588; font-weight: bold">0</span>] ) <span style="color: #333333">?</span> <span style="color: #005588; font-weight: bold">1</span>&#39;bZ <span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">PORTB</span>[<span style="color: #005588; font-weight: bold">0</span>];
<span style="color: #008800; font-weight: bold">assign</span> <span style="color: #003366; font-weight: bold">RB</span>[<span style="color: #005588; font-weight: bold">1</span>] <span style="color: #333333">=</span> ( <span style="color: #003366; font-weight: bold">TRISB</span>[<span style="color: #005588; font-weight: bold">1</span>] ) <span style="color: #333333">?</span> <span style="color: #005588; font-weight: bold">1</span>&#39;bZ <span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">PORTB</span>[<span style="color: #005588; font-weight: bold">1</span>];
<span style="color: #008800; font-weight: bold">assign</span> <span style="color: #003366; font-weight: bold">RB</span>[<span style="color: #005588; font-weight: bold">2</span>] <span style="color: #333333">=</span> ( <span style="color: #003366; font-weight: bold">TRISB</span>[<span style="color: #005588; font-weight: bold">2</span>] ) <span style="color: #333333">?</span> <span style="color: #005588; font-weight: bold">1</span>&#39;bZ <span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">PORTB</span>[<span style="color: #005588; font-weight: bold">2</span>];
<span style="color: #008800; font-weight: bold">assign</span> <span style="color: #003366; font-weight: bold">RB</span>[<span style="color: #005588; font-weight: bold">3</span>] <span style="color: #333333">=</span> ( <span style="color: #003366; font-weight: bold">TRISB</span>[<span style="color: #005588; font-weight: bold">3</span>] ) <span style="color: #333333">?</span> <span style="color: #005588; font-weight: bold">1</span>&#39;bZ <span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">PORTB</span>[<span style="color: #005588; font-weight: bold">3</span>];
<span style="color: #008800; font-weight: bold">assign</span> <span style="color: #003366; font-weight: bold">RB</span>[<span style="color: #005588; font-weight: bold">4</span>] <span style="color: #333333">=</span> ( <span style="color: #003366; font-weight: bold">TRISB</span>[<span style="color: #005588; font-weight: bold">4</span>] ) <span style="color: #333333">?</span> <span style="color: #005588; font-weight: bold">1</span>&#39;bZ <span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">PORTB</span>[<span style="color: #005588; font-weight: bold">4</span>];
<span style="color: #008800; font-weight: bold">assign</span> <span style="color: #003366; font-weight: bold">RB</span>[<span style="color: #005588; font-weight: bold">5</span>] <span style="color: #333333">=</span> ( <span style="color: #003366; font-weight: bold">TRISB</span>[<span style="color: #005588; font-weight: bold">5</span>] ) <span style="color: #333333">?</span> <span style="color: #005588; font-weight: bold">1</span>&#39;bZ <span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">PORTB</span>[<span style="color: #005588; font-weight: bold">5</span>];
<span style="color: #008800; font-weight: bold">assign</span> <span style="color: #003366; font-weight: bold">RB</span>[<span style="color: #005588; font-weight: bold">6</span>] <span style="color: #333333">=</span> ( <span style="color: #003366; font-weight: bold">TRISB</span>[<span style="color: #005588; font-weight: bold">6</span>] ) <span style="color: #333333">?</span> <span style="color: #005588; font-weight: bold">1</span>&#39;bZ <span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">PORTB</span>[<span style="color: #005588; font-weight: bold">6</span>];
<span style="color: #008800; font-weight: bold">assign</span> <span style="color: #003366; font-weight: bold">RB</span>[<span style="color: #005588; font-weight: bold">7</span>] <span style="color: #333333">=</span> ( <span style="color: #003366; font-weight: bold">TRISB</span>[<span style="color: #005588; font-weight: bold">7</span>] ) <span style="color: #333333">?</span> <span style="color: #005588; font-weight: bold">1</span>&#39;bZ <span style="color: #333333">:</span> <span style="color: #003366; font-weight: bold">PORTB</span>[<span style="color: #005588; font-weight: bold">7</span>];
<span style="color: #008800; font-weight: bold">endmodule</span>
</pre></div>


## 3\. Simulation

![Figure 13. Test simulation of the ALU code.png](https://cdn.steemitimages.com/DQmVR4bx1UQr1RhvdYXv1YnDt3Xe1uznQ1Vmai6DLU8v9Kq/Figure%2013.%20Test%20simulation%20of%20the%20ALU%20code.png)

Figure 13\. Test simulation of the ALU code [2]

![Figure 14. Waveform in simvision for ALU.png](https://cdn.steemitimages.com/DQmWSgGYPBV7RRPKUyCbf9BUPhHVgQR1mYyptzst9YTHb2W/Figure%2014.%20Waveform%20in%20simvision%20for%20ALU.png)

Figure 14\. Waveform in simvision for ALU [2]

All the codes to conduct the simulation are available online [4]. For solely testing the ALU, follow Figure 11 which are about generating the clock, and testing operations starting from PASSF, subtraction, until bit test. Figure 13 compiles the test sequence from text format into verilog HDL format using make_vector.pl binary. Then these files including Code 1-6 is compiled using verilog binary. The waves can be examined using simvision which can be shown on Figure 14\. All the wave values are shown in hexadecimals. CB shows the executed operation. It is seen the W register becomes 1 when performed an increment operation, and reduced to 0 when subtract operation was performed, note that HC and CO has started to become affected. After that is logical operation where the result can be seen on FO as well. In the ends of this simulation is where the bit manipulation operations are performed where the B and bitmask variables are affected.

![Figure 15. Test simulation of PIC core.png](https://cdn.steemitimages.com/DQmWgc7rhHwcFzkmW4DkoRRpyQahGnPuNjoFDxrn9e2X3QB/Figure%2015.%20Test%20simulation%20of%20PIC%20core.png)

Figure 15\. Test simulation of PIC core [2]

![Figure 16. Waveform in simvision for PIC core.png](https://cdn.steemitimages.com/DQmSvSvuHPZ2NHqKqyTzpan5NE26nLCCmZ5EpbNFwq8avE6/Figure%2016.%20Waveform%20in%20simvision%20for%20PIC%20core.png)

Figure 16\. Waveform in simvision for PIC core [2]

Figure 15 shows the diagram of testing the PIC16 core. The program.asm shows that only 10 operations are tested [4]. Next it have to be converted into an assembly file using gpasm which then the format have to be converted. After that the PIC16 core whole files [4] can be compiled using verilog and the waves can be seen using simvision on Figure 16\. The first part of the test should bitset the RP, clear W, set TRISB to 00h, bitclear RP. The next operations are to do ten times addition of ten. DData, RData, and WData should look consistent. First the value should be 0A which is hexadecimal of 10, then it should increase to 1B and everytime added by 10\. Note that the decrements are also shown from 0A until 01\. In the end the result is 37 and will be transferred to PORTB. The last operation is sleep. Note that the design on this report does not implement everything from the original as shown on Table 1.

Table 1\. Original PIC16 versus this report's design

<table>
<thead>
	<tr>
		<th></th>
		<th>PIC16Original</th>
		<th>ThisReport's Design</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>Pipeline</td>
		<td>4 cycles /1 stage</td>
		<td>1 cycle / 1stage</td>
	</tr>
	<tr>
		<td>Clock</td>
		<td>Selectable</td>
		<td>Externalonly</td>
	</tr>
	<tr>
		<td>Sleep mode</td>
		<td>Low powermode</td>
		<td>Repeat NOP</td>
	</tr>
	<tr>
		<td>Watch DogTimer</td>
		<td>Available</td>
		<td>None</td>
	</tr>
	<tr>
		<td>Timer</td>
		<td>Available</td>
		<td>None</td>
	</tr>
	<tr>
		<td>Prescaler</td>
		<td>Available</td>
		<td>None</td>
	</tr>
	<tr>
		<td>Interrupt</td>
		<td>Available</td>
		<td>None</td>
	</tr>
	<tr>
		<td>Flashmemory</td>
		<td>Available</td>
		<td>None</td>
	</tr>
</tbody>
</table>

## 4\. Implementation

The verilog HDL codes can be implemented in FPGA. On this report Nexys4 DDR board is used on Figure 15 and Vivado software is used to synthesize the code. The LED should show 110111(2) which is 37 that is the result of the addition.

![Figure 17. Nexys4 DDR board.jpg](https://cdn.steemitimages.com/DQmP3d49LHEa1f4sjAGtgv3WVjkYhFXsFu8hct4tMk8v3JJ/Figure%2017.%20Nexys4%20DDR%20board.jpg)

Figure 17\. Nexys4 DDR board

## 5\. Reference

1.  [https://en.wikipedia.org/wiki/PIC_microcontroller](https://en.wikipedia.org/wiki/PIC_microcontroller)
2.  M. Kuga, “PIC_behavior20180124”, Supplied Course Material, 24-01-2018.
3.  Microchip, “16F84A-35007b”, PIC16F84A Data Sheet , 2001.
4.  [https://github.com/0fajarpurnama0/Programming-Practice/tree/master/verilog/PIC16](https://github.com/0fajarpurnama0/Programming-Practice/tree/master/verilog/PIC16)

## Mirrors

*   [https://www.publish0x.com/fajar-purnama-academics/my-report-about-pic16f84a-microcontroller-implementation-on-xerdnyr?a=4oeEw0Yb0B&tid=github](https://www.publish0x.com/fajar-purnama-academics/my-report-about-pic16f84a-microcontroller-implementation-on-xerdnyr?a=4oeEw0Yb0B&tid=github)
*   [https://0darkking0.blogspot.com/2021/03/my-report-about-pic16f84a.html](https://0darkking0.blogspot.com/2021/03/my-report-about-pic16f84a.html)
*   [https://0fajarpurnama0.medium.com/my-report-about-pic16f84a-microcontroller-implementation-on-verilog-hardware-description-language-be0a7d7dea15](https://0fajarpurnama0.medium.com/my-report-about-pic16f84a-microcontroller-implementation-on-verilog-hardware-description-language-be0a7d7dea15)
*   [https://0fajarpurnama0.github.io/doctoral/2020/07/29/pic16f84a-microcontroller-implementation-vhdl-report](https://0fajarpurnama0.github.io/doctoral/2020/07/29/pic16f84a-microcontroller-implementation-vhdl-report)
*   [https://hicc.cs.kumamoto-u.ac.jp/~fajar/doctoral/pic16f84a-microcontroller-implementation-vhdl-report](https://hicc.cs.kumamoto-u.ac.jp/~fajar/doctoral/pic16f84a-microcontroller-implementation-vhdl-report)
*   [https://steemit.com/engineering/@fajar.purnama/my-report-about-pic16f84a-microcontroller-implementation-on-verilog-hardware-description-language?r=fajar.purnama](https://steemit.com/engineering/@fajar.purnama/my-report-about-pic16f84a-microcontroller-implementation-on-verilog-hardware-description-language?r=fajar.purnama)
*   [https://stemgeeks.net/engineering/@fajar.purnama/my-report-about-pic16f84a-microcontroller-implementation-on-verilog-hardware-description-language?ref=fajar.purnama](https://stemgeeks.net/engineering/@fajar.purnama/my-report-about-pic16f84a-microcontroller-implementation-on-verilog-hardware-description-language?ref=fajar.purnama)
*   [https://blurtter.com/blurtech/@fajar.purnama/my-report-about-pic16f84a-microcontroller-implementation-on-verilog-hardware-description-language?referral=fajar.purnama](https://blurtter.com/blurtech/@fajar.purnama/my-report-about-pic16f84a-microcontroller-implementation-on-verilog-hardware-description-language?referral=fajar.purnama)
*   [https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/my-report-about-pic16f84a-microcontroller-implementation-on-verilog-hardware-description-language](https://0fajarpurnama0.wixsite.com/0fajarpurnama0/post/my-report-about-pic16f84a-microcontroller-implementation-on-verilog-hardware-description-language)
*   [http://0fajarpurnama0.weebly.com/blog/my-report-about-pic16f84a-microcontroller-implementation-on-verilog-hardware-description-language](http://0fajarpurnama0.weebly.com/blog/my-report-about-pic16f84a-microcontroller-implementation-on-verilog-hardware-description-language)
*   [https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/221-my-report-about-pic16f84a-microcontroller-implementation-on-verilog-hardware-description-language](https://0fajarpurnama0.cloudaccess.host/index.php/9-fajar-purnama-academics/221-my-report-about-pic16f84a-microcontroller-implementation-on-verilog-hardware-description-language)
*   [https://read.cash/@FajarPurnama/my-report-about-pic16f84a-microcontroller-implementation-on-verilog-hardware-description-language-91d6a43a](https://read.cash/@FajarPurnama/my-report-about-pic16f84a-microcontroller-implementation-on-verilog-hardware-description-language-91d6a43a)
*   [https://www.uptrennd.com/post-detail/my-report-about-pic16f84a-microcontroller-implementation-on-verilog-hardware-description-language~ODc2MzQw](https://www.uptrennd.com/post-detail/my-report-about-pic16f84a-microcontroller-implementation-on-verilog-hardware-description-language~ODc2MzQw)
*   [https://markethive.com/0fajarpurnama0/blog/myreportaboutpic16f84amicrocontrollerimplementationonveriloghardwaredescriptionlanguage](https://markethive.com/0fajarpurnama0/blog/myreportaboutpic16f84amicrocontrollerimplementationonveriloghardwaredescriptionlanguage)
*   [https://trybe.one/my-report-about-pic16f84a-microcontroller-implementation-on-verilog-hardware-description-language](https://trybe.one/my-report-about-pic16f84a-microcontroller-implementation-on-verilog-hardware-description-language)