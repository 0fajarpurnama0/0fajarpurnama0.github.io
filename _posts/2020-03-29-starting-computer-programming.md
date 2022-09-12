---
layout: post
title: Starting Computer Programming
categories: internet
tags: [computer, programming, Internet, C, Pascal]
featuredimage: https://images.hive.blog/DQmNuc8kYiYp5vPe1K1VrMgiAG3fgCnuoMDgvPEgjHJXT9T/Figure%200.2%20I%20Speak%20Many%20Programming%20Language.png
description: This article introduces computer programming for those who would like to dive into the world of programming starting with Pascal and C lang.
canonicalurl: https://0fajarpurnama0.github.io/internet/2020/03/29/starting-computer-programming
---
<p>This section would like to introduce computer programming to starters, and for those who would like to dive into the world of programming. No advance topic will be covered here, instead focuses on wide of simple and easy programmings. We understand that you might not master the basics of programming after reading all the materials, but we expect you to have ideas of what materials you have read when you want to write a program. The author for example knows that he/she needs to use "if else" and "for" in his/her simple login program, but still searches on the Internet for the correct syntax in using those functions. Each programming language like Pascal, C, C++, Python,  and Ruby had their own form of syntax but the pattern is similar, more ever the idea is still the same.</p>

<h2 id="Course Outline">Course Outline</h2>
<h3 id="Course Overview and Introduction">Course Overview and Introduction</h3>
<p>This section would like to introduce computer programming to starters, and for those who would like to dive into the world of programming. No advance topic will be covered here, instead focuses on wide of simple and easy programmings. If you ever saw a program, or someone programming and it is hard, it's because you have never started in programming. It happens to me too, when someone just suddenly shows his program which hurts my eyes. I started learning programming which only contains 5 lines, then little by little increase the amount that I have wrote. The program that used to give me headache on Figure 1, now it's simple program that I could write.</p>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;html&gt;</span>
<span style="color: #007700">&lt;head&gt;</span>
<span style="color: #007700">&lt;title&gt;</span>Practice PHP<span style="color: #007700">&lt;/title&gt;</span>
<span style="color: #007700">&lt;/head&gt;</span>
<span style="color: #007700">&lt;body&gt;</span>

<span style="color: #007700">&lt;form</span> <span style="color: #0000CC">method=</span><span style="background-color: #fff0f0">&quot;post&quot;</span> <span style="color: #0000CC">action=</span><span style="background-color: #fff0f0">&quot;</span><span style="color: #557799">&lt;?php</span> <span style="color: #008800; font-weight: bold">echo</span> <span style="color: #996633">$_SERVER</span>[<span style="background-color: #fff0f0">&#39;PHP_SELF&#39;</span>];<span style="color: #557799">?&gt;</span><span style="background-color: #fff0f0">&quot;</span><span style="color: #007700">&gt;</span>
	Username: <span style="color: #007700">&lt;input</span> <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">&quot;text&quot;</span> <span style="color: #0000CC">name=</span><span style="background-color: #fff0f0">&quot;user&quot;</span><span style="color: #007700">&gt;&lt;br&gt;</span>
	Password: <span style="color: #007700">&lt;input</span> <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">&quot;text&quot;</span> <span style="color: #0000CC">name=</span><span style="background-color: #fff0f0">&quot;pass&quot;</span><span style="color: #007700">&gt;&lt;br&gt;</span>
	<span style="color: #007700">&lt;input</span> <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">&quot;submit&quot;</span><span style="color: #007700">&gt;</span>
<span style="color: #007700">&lt;/form&gt;</span>

<span style="color: #557799">&lt;?php</span> 
<span style="color: #996633">$username</span> <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">array</span>(<span style="background-color: #fff0f0">&quot;Fajar&quot;</span>,<span style="background-color: #fff0f0">&quot;John&quot;</span>,<span style="background-color: #fff0f0">&quot;emanresu&quot;</span>);
<span style="color: #996633">$password</span> <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">array</span>(<span style="background-color: #fff0f0">&quot;Purnama&quot;</span>,<span style="background-color: #fff0f0">&quot;Doe&quot;</span>,<span style="background-color: #fff0f0">&quot;drowssap&quot;</span>);

<span style="color: #008800; font-weight: bold">if</span> (<span style="color: #996633">$_SERVER</span>[<span style="background-color: #fff0f0">&quot;REQUEST_METHOD&quot;</span>] <span style="color: #333333">==</span> <span style="background-color: #fff0f0">&quot;POST&quot;</span>) {
<span style="color: #996633">$user</span> <span style="color: #333333">=</span> <span style="color: #996633">$_POST</span>[<span style="background-color: #fff0f0">&#39;user&#39;</span>];
<span style="color: #996633">$pass</span> <span style="color: #333333">=</span> <span style="color: #996633">$_POST</span>[<span style="background-color: #fff0f0">&#39;pass&#39;</span>];

<span style="color: #888888">//var_dump($username[0] == $user and $password[1] == $pass);</span>

<span style="color: #008800; font-weight: bold">for</span> (<span style="color: #996633">$c</span> <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>; <span style="color: #996633">$c</span> <span style="color: #333333">&lt;=</span> <span style="color: #007020">count</span>(<span style="color: #996633">$username</span>)<span style="color: #333333">-</span><span style="color: #0000DD; font-weight: bold">1</span>; <span style="color: #996633">$c</span><span style="color: #333333">++</span>) {

<span style="color: #008800; font-weight: bold">if</span> (<span style="color: #996633">$user</span> <span style="color: #333333">==</span> <span style="color: #996633">$username</span>[<span style="color: #996633">$c</span>] <span style="color: #008800; font-weight: bold">and</span> <span style="color: #996633">$pass</span> <span style="color: #333333">==</span> <span style="color: #996633">$password</span>[<span style="color: #996633">$c</span>]) {
<span style="color: #008800; font-weight: bold">echo</span> <span style="background-color: #fff0f0">&quot;Welcome!&quot;</span>;
<span style="color: #008800; font-weight: bold">break</span>;
} <span style="color: #008800; font-weight: bold">elseif</span> (<span style="color: #996633">$c</span> <span style="color: #333333">&lt;</span> <span style="color: #007020">count</span>(<span style="color: #996633">$username</span>)<span style="color: #333333">-</span><span style="color: #0000DD; font-weight: bold">1</span>) {
<span style="color: #008800; font-weight: bold">continue</span>;
} <span style="color: #008800; font-weight: bold">else</span> {
<span style="color: #008800; font-weight: bold">echo</span> <span style="background-color: #fff0f0">&quot;Wrong username or password&quot;</span>;
}
}
}

<span style="color: #557799">?&gt;</span>

<span style="color: #007700">&lt;/body&gt;</span>
<span style="color: #007700">&lt;/html&gt;</span>
</pre></div>

<p>Figure 0.1 My practice program in PHP</p>

<h3 id="Learning Objective">Learning Objective</h3>
<p>This topic would like to cover only the simple part of the technical in programming. We can simply express in Figure 2.
<ul>
	<li>It is hoped that you are able to write a simple program and it works.</li>
	<li>No need to do analysis of the algorithms (efficiency, structures, etc).</li>
	<li>You are only expected to solve mini problems by making a short script.</li>
	<li>Ultimately at the end of this course you will be familiar with programming and easily adapt with different programming languages.</li>
</ul>

<img src="https://images.hive.blog/DQmNuc8kYiYp5vPe1K1VrMgiAG3fgCnuoMDgvPEgjHJXT9T/Figure%200.2%20I%20Speak%20Many%20Programming%20Language.png" alt="C C++ Python Javascript Java Ruby Pascal PHP ..." />
<p>Figure 0.2 I speak many programming language</p>

<h3 id="Assessment and Measurement">Assessment and Measurement</h3>
<p>It's up to you of how to do this course but it is recommended to do the following:</p>
<ol>
	<li>Read the contents.</li>
	<li>Do the quizzes to enrich your understanding of the content.</li>
	<li>Submit assignments whether they are essays or scripts.</li>
	<li>Try your programs in virtual programming lab (VPL).</li>
	<li>We never meant to place difficult materials so aim for perfect scores before proceeding to the next material since attempting a grade is unlimited.</li>
</ol>
<p>Once again the top instructions are just our recommendation, do the course as you wish.</p>
<ul>
	<li>If your overall score is below 50% you should complete more materials or aim for higher grade.</li>
	<li>If it's above you are ready to dive into computer programming world.</li>
	<li>If you got 100% then you should have no problem in adapting or learning new programming languages.</li>
</ul>

<h2 id="1. About Computer Programming">1. About Computer Programming</h2>
<h3 id="1.1 Definition">1.1 Definition</h3>
<p>A program is a set of instructions to do certain tasks. On daily life for example a program to turn on a computer:</p>
<ol>
	<li>Plug the cable power.</li>
	<li>Turn on the computer.</li>
	<li>Turn on the display.</li>
	<li>Choose you operating system.</li>
	<li>Login.</li>
</ol>

<p>There are variety of ways to do stuffs, and it's same with a program. That's why there tends to be many programs out there but do similar tasks. Usually programs tends to be unique for each people writing them, since they have their own ways. For example eating at a food court, you can:</p>

<ol>
	<li>Pick a food.</li>
	<li>Eat food.</li>
	<li>Pay for the food.</li>
</ol>

<p>Or in KFC or McDonalds:</p>

<ol>
	<li>Pick a food.</li>
	<li>Pay for the food.</li>
	<li>Eat the food.</li>
</ol>

<p>So a computer program is defined as a set of instructions that does specific things when executed by a computer. For example command 'printf("Hello World!!")' in C language will output a text display "Hello World!!"</p>

<h3 id="1.2 Application">1.2 Application</h3>
<p>With computers today lots tasks are being helped by computers. They have done lots of things on our behalf for example on Figure 1.2.1 a calculator program that does calculation for us in a very short time. Figure 1.2.2 is an excel to perform tabulations where we can arrange our data or informations in form of tables. It can even perform calculations and other processes. Last example on Figure 1.2.3 is a web browser which is an application we used to surf the Internet for informations.</p>

<img src="https://images.hive.blog/DQmUY8ajxKWfvxQE3YTY5kZQPGmtBZb2hongey8MpLoM7Qn/Figure%201.2.1%20Calculator%20Application.png" alt="Windows Calculator Application" />
<p>Figure 1.2.1 Calculator Application</p>

<img src="https://images.hive.blog/DQmb4yY9m9tgNQfFT5ZPCi9wnMph4Q6KC1Y4HGcyKedfgPx/Figure%201.2.2%20Excel%20application%20example.png" alt="Libre Office Calc" />
<p>Figure 1.2.2 Excel application example</p>

<img src="https://images.hive.blog/DQmZd6kKBoE9cXCTa11djpzSYDapRNz9Z12pv6wqMWPP48m/Figure%201.2.3%20Excel%20application%20example.png" alt="Ice Weasel Browser" />
<p>Figure 1.2.3 Web Browser</p>

<h3 id="1.3 Popular Programming Languages">1.3 Popular Programming Languages</h3>
<p>Below is a list of todays popular programming language. I started with Pascal and C.</p>
<ul>
	<li>C</li>
	<li>C++</li>
	<li>C#</li>
	<li>Visual Basic</li>
	<li>Python</li>
	<li>R</li>
	<li>Ruby</li>
	<li>Perl</li>
	<li>PHP</li>
	<li>Java</li>
	<li>Javascript</li>
	<li>HTML</li>
	<li>CSS</li>
	<li>Ladder Logic</li>
	<li>Verilog HDL</li>
	<li>Assembly</li>
</ul>

<h2 id="2. Start Writing">2. Start Writing</h2>
<h3 id="2.1 Note">2.1 Note</h3>
<p>There are many tutorials already available online if you want to start learning a programming language, but here we will try to give you a point of where to start, provide a comfortable track until you become familiar with beginner programming. I started with Pascal then C, so this will be first example for every content. Examples are written in various programming language (in the future we would like to make it available in all programming language). If you want to start quickly I suggest viewing the content that had online compiler available (NOTE: Online compiler coming soon!!). (Python, PHP, Ruby, C++ coming soon)</p>

<p>Following suggest setting up environments if you want to do programming at you own computer but you may skip to next section if don't want the hassle and later on you may come back here. The programmings that will be cover are freeware or opensource so programming like Visual Basic or Matlab will not be covered here. What you need for this course are:</p>

<ol>
	<li><b>Operating System (OS):</b> we suggest using Linux because most of the compiler are installed by default, but you may use other like MAC or Windows.</li>
	<li><b>Text editor:</b> anything is ok even the simplest as notepad and wordpad, all that is needed is being able to write the script and save it. Some good example editors with color are VIM, GVIM, Notepad ++, or you may have an editor of certain programming language like Turbo Pascal and Codeblocks.</li>
	<li><b>Compiler:</b> this is the last thing you need, most Linux distribution already equipped with a compiler. If you don't know or don't have the compiler just search on the Internet for Pascal compiler for example. For Windows may asked you to download Turbo Pascal, for Linux mainly Ubuntu or Debian distribution may ask you to install by type "apt-get install fp-compiler". If you want C compiler search on the Internet for C compiler.</li>
</ol>

<h3 id="2.2 First Script in Pascal">2.2 First Script in Pascal</h3>
<p>Here's a link to one of online pascal compiler provided by <a href="http://www.tutorialspoint.com/compile_pascal_online.php">http://www.tutorialspoint.com/compile_pascal_online.php</a>. You can search the Internet for online compilers. The code for now is not colored, we suggest copy and pasting the code into an online compiler, or your editor if supports color like GVIM and Notepad ++. The "Hello World!" script is very famous in programming world to be as the first program to write. The goal of the program is to produce an output "Hello World!".</p>

<pre class="pascal" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">Program</span> HelloWorld<span style="color: #000066;">;</span>
<span style="color: #000000; font-weight: bold;">begin</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Hello, world!'</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
<span style="color: #000000; font-weight: bold;">end</span><span style="color: #000066;">.</span></pre>

<p>If you use the online compiler from tutorialspoint, overwrite the script, compile and execute. If you're using Linux save the file into "hello.pas" for example and write "fpc hello.pas". It will produce an executable file "hello" you type "./hello" to run the file.</p>

<p>The next lesson is using variables. We can define a variable as a boolean, number, string, and many other variables. It's recommended to copy, paste, run the script, and see its output first. That way is easier than thoroughly identifying the code first. The program example below is defining "firstname" and "lastname" as a string with the value of "firstname" is "Fajar" and "lastname" is Purnama. Then a variable from "a" to "g" is defined as integer with "a" and "b" initialized. Then we perform simple math operation.</p>

<pre class="pascal" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">program</span> variables<span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">var</span>
	firstname<span style="color: #000066;">,</span> lastname<span style="color: #000066;">:</span> <span style="color: #000066; font-weight: bold;">string</span><span style="color: #000066;">;</span>
	a<span style="color: #000066;">,</span>b<span style="color: #000066;">,</span>c<span style="color: #000066;">,</span>d<span style="color: #000066;">,</span>e<span style="color: #000066;">,</span>f<span style="color: #000066;">,</span>g <span style="color: #000066;">:</span> <span style="color: #000066; font-weight: bold;">integer</span><span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">begin</span>
	firstname <span style="color: #000066;">:</span><span style="color: #000066;">=</span> <span style="color: #ff0000;">'Fajar'</span><span style="color: #000066;">;</span>
	lastname <span style="color: #000066;">:</span><span style="color: #000066;">=</span> <span style="color: #ff0000;">'Purnama'</span><span style="color: #000066;">;</span>
&nbsp;
	<span style="color: #000066;">write</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Hi! My name is '</span><span style="color: #000066;">,</span> firstname<span style="color: #000066;">,</span> lastname<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span> <span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'I would like to perform simple math operation'</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
&nbsp;
	a <span style="color: #000066;">:</span><span style="color: #000066;">=</span> <span style="color: #cc66cc;">9</span><span style="color: #000066;">;</span>
	b <span style="color: #000066;">:</span><span style="color: #000066;">=</span> <span style="color: #cc66cc;">4</span><span style="color: #000066;">;</span>
	c <span style="color: #000066;">:</span><span style="color: #000066;">=</span> a<span style="color: #000066;">+</span>b<span style="color: #000066;">;</span>
	d <span style="color: #000066;">:</span><span style="color: #000066;">=</span> a<span style="color: #000066;">-</span>b<span style="color: #000066;">;</span>
	e <span style="color: #000066;">:</span><span style="color: #000066;">=</span> a<span style="color: #000066;">*</span>b<span style="color: #000066;">;</span>
	f <span style="color: #000066;">:</span><span style="color: #000066;">=</span> a <span style="color: #000000; font-weight: bold;">div</span> b<span style="color: #000066;">;</span>
	g <span style="color: #000066;">:</span><span style="color: #000066;">=</span> a <span style="color: #000000; font-weight: bold;">mod</span> b<span style="color: #000066;">;</span>
&nbsp;
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span>a<span style="color: #000066;">,</span><span style="color: #ff0000;">' + '</span><span style="color: #000066;">,</span>b<span style="color: #000066;">,</span><span style="color: #ff0000;">' = '</span><span style="color: #000066;">,</span>c<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span>b<span style="color: #000066;">,</span><span style="color: #ff0000;">' - '</span><span style="color: #000066;">,</span>a<span style="color: #000066;">,</span><span style="color: #ff0000;">' = '</span><span style="color: #000066;">,</span>d<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span>a<span style="color: #000066;">,</span><span style="color: #ff0000;">' * '</span><span style="color: #000066;">,</span>b<span style="color: #000066;">,</span><span style="color: #ff0000;">' = '</span><span style="color: #000066;">,</span>e<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span>b<span style="color: #000066;">,</span><span style="color: #ff0000;">' div '</span><span style="color: #000066;">,</span>a<span style="color: #000066;">,</span><span style="color: #ff0000;">' = '</span><span style="color: #000066;">,</span>f<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span>b<span style="color: #000066;">,</span><span style="color: #ff0000;">' mod '</span><span style="color: #000066;">,</span>a<span style="color: #000066;">,</span><span style="color: #ff0000;">' = '</span><span style="color: #000066;">,</span>g<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
<span style="color: #000000; font-weight: bold;">end</span><span style="color: #000066;">.</span></pre>

<p>The last of this section is using user input. If the previous script we manually define "firstname", "lastname", "a", and "b", next we let the user define them after the program is run. Simply use the syntax "read" or "readln".</p>

<pre class="pascal" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">program</span> variables<span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">var</span>
	firstname<span style="color: #000066;">,</span> lastname<span style="color: #000066;">:</span> <span style="color: #000066; font-weight: bold;">string</span><span style="color: #000066;">;</span>
	a<span style="color: #000066;">,</span>b<span style="color: #000066;">,</span>c<span style="color: #000066;">,</span>d<span style="color: #000066;">,</span>e <span style="color: #000066;">:</span> <span style="color: #000066; font-weight: bold;">integer</span><span style="color: #000066;">;</span>
	f <span style="color: #000066;">:</span> <span style="color: #000066; font-weight: bold;">real</span><span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">begin</span>
	<span style="color: #000066;">write</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'What is your firstname? '</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span> <span style="color: #000066;">readln</span><span style="color: #009900;">&#40;</span>firstname<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000066;">write</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'What is your lastname? '</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span> <span style="color: #000066;">readln</span><span style="color: #009900;">&#40;</span>lastname<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
&nbsp;
	<span style="color: #000066;">write</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Hi! My name is '</span><span style="color: #000066;">,</span> firstname<span style="color: #000066;">,</span> lastname<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span> <span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'. I would like to perform simple math operation'</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
&nbsp;
	<span style="color: #000066;">write</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Input first number: '</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span> <span style="color: #000066;">readln</span><span style="color: #009900;">&#40;</span>a<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000066;">write</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Input second number: '</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span> <span style="color: #000066;">readln</span><span style="color: #009900;">&#40;</span>b<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
&nbsp;
	c <span style="color: #000066;">:</span><span style="color: #000066;">=</span> a<span style="color: #000066;">+</span>b<span style="color: #000066;">;</span>
	d <span style="color: #000066;">:</span><span style="color: #000066;">=</span> a<span style="color: #000066;">-</span>b<span style="color: #000066;">;</span>
	e <span style="color: #000066;">:</span><span style="color: #000066;">=</span> a<span style="color: #000066;">*</span>b<span style="color: #000066;">;</span>
	f <span style="color: #000066;">:</span><span style="color: #000066;">=</span> a <span style="color: #000066;">/</span> b<span style="color: #000066;">;</span>
&nbsp;
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span>a<span style="color: #000066;">,</span><span style="color: #ff0000;">' + '</span><span style="color: #000066;">,</span>b<span style="color: #000066;">,</span><span style="color: #ff0000;">' = '</span><span style="color: #000066;">,</span>c<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span>a<span style="color: #000066;">,</span><span style="color: #ff0000;">' - '</span><span style="color: #000066;">,</span>b<span style="color: #000066;">,</span><span style="color: #ff0000;">' = '</span><span style="color: #000066;">,</span>d<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span>a<span style="color: #000066;">,</span><span style="color: #ff0000;">' * '</span><span style="color: #000066;">,</span>b<span style="color: #000066;">,</span><span style="color: #ff0000;">' = '</span><span style="color: #000066;">,</span>e<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span>a<span style="color: #000066;">,</span><span style="color: #ff0000;">' / '</span><span style="color: #000066;">,</span>b<span style="color: #000066;">,</span><span style="color: #ff0000;">' = '</span><span style="color: #000066;">,</span>f<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
<span style="color: #000000; font-weight: bold;">end</span><span style="color: #000066;">.</span></pre>

<h3 id="2.3 First Script in C">2.3 First Script in C</h3>

<p>Here's a link to one of online C compiler provided by http://www.tutorialspoint.com/compile_c_online.php. You can search the Internet for online compilers. The code for now is not colored, we suggest copy and pasting the code into an online compiler, or your editor if supports color like GVIM and Notepad ++. The "Hello World!" script is very famous in programming world to be as the first program to write. The goal of the program is to produce an output "Hello World!".</p>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">#include&lt;stdio.h&gt;</span>

<span style="color: #333399; font-weight: bold">int</span> <span style="color: #0066BB; font-weight: bold">main</span>() {
	printf(<span style="background-color: #fff0f0">&quot;Hello, World!&quot;</span>);
	<span style="color: #008800; font-weight: bold">return</span> <span style="color: #0000DD; font-weight: bold">0</span>;
	}
	</pre></div>

<p>If you use the online compiler from tutorialspoint, overwrite the script, compile and execute. If you're using Linux save the file into "hello.c" for example and write "gcc hello.c -o hello". It will produce an executable file "hello", then type "./hello" to run the file.</p>

<p>The next lesson is using variables. We can define a variable as a boolean, number, string, and many other variables. It's recommended to copy, paste, run the script, and see its output first. That way is easier than thoroughly identifying the code first. The program example below is defining "firstname" and "lastname" as a string with the value of "firstname" is "Fajar" and "lastname" is Purnama. Then a variable from "a" to "g" is defined as integer with "a" and "b" initialized. Then we perform simple math operation.</p>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">#include &lt;stdio.h&gt;</span>

<span style="color: #333399; font-weight: bold">int</span> <span style="color: #0066BB; font-weight: bold">main</span>() {

	<span style="color: #333399; font-weight: bold">char</span> <span style="color: #333333">*</span> firstname <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;Fajar&quot;</span>;
	<span style="color: #333399; font-weight: bold">char</span> <span style="color: #333333">*</span> lastname <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;Purnama&quot;</span>;
	
	printf(<span style="background-color: #fff0f0">&quot;Hi!, My name is %s %s.</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, firstname, lastname);
	printf(<span style="background-color: #fff0f0">&quot;I would like to do simple math calculation:</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>);
	
	<span style="color: #333399; font-weight: bold">int</span> a,b,c,d,e,f,g;
	
	a <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">6</span>;
	b <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">4</span>;
	c <span style="color: #333333">=</span> a <span style="color: #333333">+</span> b;
	d <span style="color: #333333">=</span> a <span style="color: #333333">-</span> b;
	e <span style="color: #333333">=</span> a <span style="color: #333333">*</span> b;
	f <span style="color: #333333">=</span> a <span style="color: #333333">/</span> b;
	g <span style="color: #333333">=</span> a <span style="color: #333333">%</span> b;
	
	printf(<span style="background-color: #fff0f0">&quot;%d + %d = %d</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, a, b, c);
	printf(<span style="background-color: #fff0f0">&quot;%d - %d = %d</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, a, b, d);
	printf(<span style="background-color: #fff0f0">&quot;%d * %d = %d</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, a, b, e);
	printf(<span style="background-color: #fff0f0">&quot;%d / %d = %d</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, a, b, f);
	printf(<span style="background-color: #fff0f0">&quot;%d mod %d = %d</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, a, b, g);
	
	<span style="color: #008800; font-weight: bold">return</span> <span style="color: #0000DD; font-weight: bold">0</span>;
	}
	</pre></div>

<p>The last of this section is using user input. If the previous script we manually define "firstname", "lastname", "a", and "b", next we let the user define them after the program is run. Simply use the syntax "scanf". For the numbers we have to change for "a" to "&a" and so. That's covered in advance topic for now.</p>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">#include &lt;stdio.h&gt;</span>

<span style="color: #333399; font-weight: bold">int</span> <span style="color: #0066BB; font-weight: bold">main</span> () {

	<span style="color: #333399; font-weight: bold">char</span> firstname[<span style="color: #0000DD; font-weight: bold">20</span>], lastname[<span style="color: #0000DD; font-weight: bold">20</span>];
	
	printf(<span style="background-color: #fff0f0">&quot;What is your first name? &quot;</span>); scanf(<span style="background-color: #fff0f0">&quot;%s&quot;</span>, firstname);
	printf(<span style="background-color: #fff0f0">&quot;What is your last name? &quot;</span>); scanf(<span style="background-color: #fff0f0">&quot;%s&quot;</span>, lastname);
	
	printf(<span style="background-color: #fff0f0">&quot;Hi!, My name is %s %s.</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, firstname, lastname);
	printf(<span style="background-color: #fff0f0">&quot;I would like to do simple math calculation:</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>);
	
	<span style="color: #333399; font-weight: bold">float</span> a,b,c,d,e,f;
	
	printf(<span style="background-color: #fff0f0">&quot;Input first number: &quot;</span>); scanf(<span style="background-color: #fff0f0">&quot;%f&quot;</span>, <span style="color: #333333">&amp;</span>a);
	printf(<span style="background-color: #fff0f0">&quot;Input second number: &quot;</span>); scanf(<span style="background-color: #fff0f0">&quot;%f&quot;</span>, <span style="color: #333333">&amp;</span>b);
	
	c <span style="color: #333333">=</span> a <span style="color: #333333">+</span> b;
	d <span style="color: #333333">=</span> a <span style="color: #333333">-</span> b;
	e <span style="color: #333333">=</span> a <span style="color: #333333">*</span> b;
	f <span style="color: #333333">=</span> a <span style="color: #333333">/</span> b;
	
	printf(<span style="background-color: #fff0f0">&quot;%f + %f = %f</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, a, b, c);
	printf(<span style="background-color: #fff0f0">&quot;%f - %f = %f</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, a, b, d);
	printf(<span style="background-color: #fff0f0">&quot;%f * %f = %f</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, a, b, e);
	printf(<span style="background-color: #fff0f0">&quot;%f / %f = %f</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, a, b, f);
	
	<span style="color: #008800; font-weight: bold">return</span> <span style="color: #0000DD; font-weight: bold">0</span>;
	}
	</pre></div>

<h2 id="3. Conditional and Functions">3. Conditional and Functions</h2>
<h3 id="3.1 In Pascal">3.1 In Pascal</h3>
<p>The following is the simplest conditional program. If the input is "John" it will output "Hello John", if not it will output "Wrong Username". We personally think that no need for more explanation, just try the programs. This course is designed simple, explanations are for more advance materials. In Pascal ":=" gives a value to a variable while "=" compares whether "a" is equal to "b". It will return TRUE if correct and FALSE if incorrect.</p>

<pre class="pascal" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">program</span> simple_login_1<span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">var</span>
	username<span style="color: #000066;">:</span> <span style="color: #000066; font-weight: bold;">string</span><span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">begin</span>
	<span style="color: #000066;">write</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'username: '</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span> <span style="color: #000066;">readln</span><span style="color: #009900;">&#40;</span>username<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
&nbsp;
	<span style="color: #000000; font-weight: bold;">if</span> username <span style="color: #000066;">=</span> <span style="color: #ff0000;">'John'</span> <span style="color: #000000; font-weight: bold;">then</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Hello '</span><span style="color: #000066;">,</span> username<span style="color: #009900;">&#41;</span>
	<span style="color: #000000; font-weight: bold;">else</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Wrong username'</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
&nbsp;
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Program terminate'</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
<span style="color: #000000; font-weight: bold;">end</span><span style="color: #000066;">.</span></pre>

<p>Next program if we want more conditions, say that Mary is included as a username:</p>

<pre class="pascal" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">program</span> simple_login_2<span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">var</span>
	username<span style="color: #000066;">:</span> <span style="color: #000066; font-weight: bold;">string</span><span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">begin</span>
	<span style="color: #000066;">write</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'username: '</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span> <span style="color: #000066;">readln</span><span style="color: #009900;">&#40;</span>username<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
&nbsp;
	<span style="color: #000000; font-weight: bold;">if</span> username <span style="color: #000066;">=</span> <span style="color: #ff0000;">'John'</span> <span style="color: #000000; font-weight: bold;">then</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Hello '</span><span style="color: #000066;">,</span> username<span style="color: #009900;">&#41;</span>
	<span style="color: #000000; font-weight: bold;">else</span> <span style="color: #000000; font-weight: bold;">if</span> username <span style="color: #000066;">=</span> <span style="color: #ff0000;">'Mary'</span> <span style="color: #000000; font-weight: bold;">then</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Hello '</span><span style="color: #000066;">,</span> username<span style="color: #009900;">&#41;</span>
	<span style="color: #000000; font-weight: bold;">else</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Wrong username'</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
&nbsp;
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Program terminate'</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
<span style="color: #000000; font-weight: bold;">end</span><span style="color: #000066;">.</span></pre>

<p>We can also use "or" for the above program:</p>

<pre class="pascal" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">program</span> simple_login_2<span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">var</span>
	username<span style="color: #000066;">,</span> password<span style="color: #000066;">:</span> <span style="color: #000066; font-weight: bold;">string</span><span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">begin</span>
	<span style="color: #000066;">write</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'username: '</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span> <span style="color: #000066;">readln</span><span style="color: #009900;">&#40;</span>username<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
&nbsp;
	<span style="color: #000000; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>username <span style="color: #000066;">=</span> <span style="color: #ff0000;">'John'</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">or</span> <span style="color: #009900;">&#40;</span>username <span style="color: #000066;">=</span> <span style="color: #ff0000;">'Mary'</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">then</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Hello '</span><span style="color: #000066;">,</span> username<span style="color: #009900;">&#41;</span>
	<span style="color: #000000; font-weight: bold;">else</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Wrong username'</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
&nbsp;
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Program terminate'</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
<span style="color: #000000; font-weight: bold;">end</span><span style="color: #000066;">.</span></pre>

<p>If we want to include password as well:</p>

<pre class="pascal" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">program</span> simple_login_4<span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">var</span>
	username<span style="color: #000066;">,</span> password<span style="color: #000066;">:</span> <span style="color: #000066; font-weight: bold;">string</span><span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">begin</span>
	<span style="color: #000066;">write</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'username: '</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span> <span style="color: #000066;">readln</span><span style="color: #009900;">&#40;</span>username<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000066;">write</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'password: '</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span> <span style="color: #000066;">readln</span><span style="color: #009900;">&#40;</span>password<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
&nbsp;
	<span style="color: #000000; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>username <span style="color: #000066;">=</span> <span style="color: #ff0000;">'John'</span><span style="color: #009900;">&#41;</span> <span style="color: #000066;">and</span> <span style="color: #009900;">&#40;</span>password <span style="color: #000066;">=</span> <span style="color: #ff0000;">'Doe'</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">then</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Hello '</span><span style="color: #000066;">,</span> username<span style="color: #000066;">,</span><span style="color: #ff0000;">' '</span><span style="color: #000066;">,</span> password<span style="color: #009900;">&#41;</span>
	<span style="color: #000000; font-weight: bold;">else</span> <span style="color: #000000; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>username <span style="color: #000066;">=</span> <span style="color: #ff0000;">'Mary'</span><span style="color: #009900;">&#41;</span> <span style="color: #000066;">and</span> <span style="color: #009900;">&#40;</span>password <span style="color: #000066;">=</span> <span style="color: #ff0000;">'Jane'</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">then</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Hello '</span><span style="color: #000066;">,</span> username<span style="color: #000066;">,</span><span style="color: #ff0000;">' '</span><span style="color: #000066;">,</span> password<span style="color: #009900;">&#41;</span>
	<span style="color: #000000; font-weight: bold;">else</span> <span style="color: #000000; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>username <span style="color: #000066;">=</span> <span style="color: #ff0000;">'Fajar'</span><span style="color: #009900;">&#41;</span> <span style="color: #000066;">and</span> <span style="color: #009900;">&#40;</span>password <span style="color: #000066;">=</span> <span style="color: #ff0000;">'Purnama'</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">then</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Hello '</span><span style="color: #000066;">,</span> username<span style="color: #000066;">,</span><span style="color: #ff0000;">' '</span><span style="color: #000066;">,</span> password<span style="color: #009900;">&#41;</span>
	<span style="color: #000000; font-weight: bold;">else</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Wrong username or password!'</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
&nbsp;
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Program terminate!'</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
<span style="color: #000000; font-weight: bold;">end</span><span style="color: #000066;">.</span></pre>

<p>Say this program is used on many pages or included in other programs. Should we paste the whole code? we can, but we prefer to refer this program as a procedure. There's another famous term called function, similar with only difference it returns a value.</p>

<pre class="pascal" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">program</span> simple_login_5<span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">var</span>
	username<span style="color: #000066;">,</span> password<span style="color: #000066;">:</span> <span style="color: #000066; font-weight: bold;">string</span><span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">procedure</span> simple_login<span style="color: #009900;">&#40;</span>username<span style="color: #000066;">:</span><span style="color: #000066; font-weight: bold;">string</span><span style="color: #000066;">;</span> password<span style="color: #000066;">:</span><span style="color: #000066; font-weight: bold;">string</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000000; font-weight: bold;">begin</span>
	<span style="color: #000000; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>username <span style="color: #000066;">=</span> <span style="color: #ff0000;">'John'</span><span style="color: #009900;">&#41;</span> <span style="color: #000066;">and</span> <span style="color: #009900;">&#40;</span>password <span style="color: #000066;">=</span> <span style="color: #ff0000;">'Doe'</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">then</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Hello '</span><span style="color: #000066;">,</span> username<span style="color: #000066;">,</span><span style="color: #ff0000;">' '</span><span style="color: #000066;">,</span> password<span style="color: #009900;">&#41;</span>
	<span style="color: #000000; font-weight: bold;">else</span> <span style="color: #000000; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>username <span style="color: #000066;">=</span> <span style="color: #ff0000;">'Mary'</span><span style="color: #009900;">&#41;</span> <span style="color: #000066;">and</span> <span style="color: #009900;">&#40;</span>password <span style="color: #000066;">=</span> <span style="color: #ff0000;">'Jane'</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">then</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Hello '</span><span style="color: #000066;">,</span> username<span style="color: #000066;">,</span><span style="color: #ff0000;">' '</span><span style="color: #000066;">,</span> password<span style="color: #009900;">&#41;</span>
	<span style="color: #000000; font-weight: bold;">else</span> <span style="color: #000000; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>username <span style="color: #000066;">=</span> <span style="color: #ff0000;">'Fajar'</span><span style="color: #009900;">&#41;</span> <span style="color: #000066;">and</span> <span style="color: #009900;">&#40;</span>password <span style="color: #000066;">=</span> <span style="color: #ff0000;">'Purnama'</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">then</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Hello '</span><span style="color: #000066;">,</span> username<span style="color: #000066;">,</span><span style="color: #ff0000;">' '</span><span style="color: #000066;">,</span> password<span style="color: #009900;">&#41;</span>
	<span style="color: #000000; font-weight: bold;">else</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Wrong username or password!'</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
&nbsp;
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Program terminate!'</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000000; font-weight: bold;">end</span><span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">begin</span>
	<span style="color: #000066;">write</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'username: '</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span> <span style="color: #000066;">readln</span><span style="color: #009900;">&#40;</span>username<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000066;">write</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'password: '</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span> <span style="color: #000066;">readln</span><span style="color: #009900;">&#40;</span>password<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	simple_login<span style="color: #009900;">&#40;</span>username<span style="color: #000066;">,</span> password<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
<span style="color: #000000; font-weight: bold;">end</span><span style="color: #000066;">.</span></pre>

<h3 id="3.2 In C">3.2 In C</h3>
<p>Doing the simple login on C is not as simple as Pascal because of the string factor, but first we want to show that the concept of if else remains the same. The program states if the user input "1" it will say "the value is 1", if not it will say "the value is not 1". At the end of the program we use the  function strncmp to compare strings since the usual method doesn't work. If the compare string is the same "string1 == test" then it will output 0. The final input in strncmp "20" is the max number of character, you may change it as you want.</p>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">#include &lt;stdio.h&gt;</span>

<span style="color: #333399; font-weight: bold">int</span> <span style="color: #0066BB; font-weight: bold">main</span>() {
	<span style="color: #333399; font-weight: bold">int</span> a,b;
	printf(<span style="background-color: #fff0f0">&quot;input a value: &quot;</span>); scanf(<span style="background-color: #fff0f0">&quot;%d&quot;</span>, <span style="color: #333333">&amp;</span>a);
	
	<span style="color: #008800; font-weight: bold">if</span> (a <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">1</span>) {
	printf(<span style="background-color: #fff0f0">&quot;a is equal 1</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>);
	} <span style="color: #008800; font-weight: bold">else</span> {
	printf(<span style="background-color: #fff0f0">&quot;a is not equal to 1</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>);
	}
	
	<span style="color: #333399; font-weight: bold">char</span> string1[] <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;test&quot;</span>;
	
	b <span style="color: #333333">=</span> strncmp(string1, <span style="background-color: #fff0f0">&quot;test&quot;</span>, <span style="color: #0000DD; font-weight: bold">20</span>);
	printf(<span style="background-color: #fff0f0">&quot;b is %d</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, b);
	printf(<span style="background-color: #fff0f0">&quot;is b == 0? %d(yes)&quot;</span>, b <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>);
	
	<span style="color: #008800; font-weight: bold">return</span> <span style="color: #0000DD; font-weight: bold">0</span>;
	}
	</pre></div>

<p>The following is the simplest conditional program. If the input is "John" it will output "Hello John", if not it will output "Wrong Username". We personally think that no need for more explanation, just try the programs. This course is designed simple, explanations are for more advance materials. In C "=" gives a value to a variable while "==" compares whether "a" is equal to "b". It will return "1" (TRUE) if correct and "0" (FALSE) if incorrect. C seems intimidating at first, but in our experience, if we learn C, we can easily adapt to different programming languages.</p>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">#include &lt;stdio.h&gt;</span>

<span style="color: #333399; font-weight: bold">int</span> <span style="color: #0066BB; font-weight: bold">main</span>() {

	<span style="color: #333399; font-weight: bold">char</span> username[<span style="color: #0000DD; font-weight: bold">20</span>];
	printf(<span style="background-color: #fff0f0">&quot;Username: &quot;</span>); scanf(<span style="background-color: #fff0f0">&quot;%s&quot;</span>, username);
	
	<span style="color: #008800; font-weight: bold">if</span> (strncmp(username, <span style="background-color: #fff0f0">&quot;John&quot;</span>, <span style="color: #0000DD; font-weight: bold">20</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>) {
		printf(<span style="background-color: #fff0f0">&quot;Hello %s.</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, username);
	} <span style="color: #008800; font-weight: bold">else</span> {
		printf(<span style="background-color: #fff0f0">&quot;Wrong username!</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>);
	}
	
	<span style="color: #008800; font-weight: bold">return</span> <span style="color: #0000DD; font-weight: bold">0</span>;
	}
	</pre></div>

<p>Next program if we want more conditions, say that Mary is included as a username:</p>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">#include &lt;stdio.h&gt;</span>

<span style="color: #333399; font-weight: bold">int</span> <span style="color: #0066BB; font-weight: bold">main</span>() {

	<span style="color: #333399; font-weight: bold">char</span> username[<span style="color: #0000DD; font-weight: bold">20</span>];
	printf(<span style="background-color: #fff0f0">&quot;Username: &quot;</span>); scanf(<span style="background-color: #fff0f0">&quot;%s&quot;</span>, username);
	
	<span style="color: #008800; font-weight: bold">if</span> (strncmp(username, <span style="background-color: #fff0f0">&quot;John&quot;</span>, <span style="color: #0000DD; font-weight: bold">20</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>) {
		printf(<span style="background-color: #fff0f0">&quot;Hello %s.</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, username);
	} <span style="color: #008800; font-weight: bold">else</span> <span style="color: #008800; font-weight: bold">if</span> (strncmp(username, <span style="background-color: #fff0f0">&quot;Mary&quot;</span>, <span style="color: #0000DD; font-weight: bold">20</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>) {
		printf(<span style="background-color: #fff0f0">&quot;Hello %s.</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, username);
	} <span style="color: #008800; font-weight: bold">else</span> {
		printf(<span style="background-color: #fff0f0">&quot;Wrong username!</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>);
	}
	
	<span style="color: #008800; font-weight: bold">return</span> <span style="color: #0000DD; font-weight: bold">0</span>;
	}
	</pre></div>

<p>We can also use "or"/"||" for the above program:</p>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">#include &lt;stdio.h&gt;</span>

<span style="color: #333399; font-weight: bold">int</span> <span style="color: #0066BB; font-weight: bold">main</span>() {

	<span style="color: #333399; font-weight: bold">char</span> username[<span style="color: #0000DD; font-weight: bold">20</span>];
	printf(<span style="background-color: #fff0f0">&quot;Username: &quot;</span>); scanf(<span style="background-color: #fff0f0">&quot;%s&quot;</span>, username);
	
	<span style="color: #008800; font-weight: bold">if</span> ((strncmp(username, <span style="background-color: #fff0f0">&quot;John&quot;</span>, <span style="color: #0000DD; font-weight: bold">20</span>) ) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span> <span style="color: #333333">||</span> (strncmp(username, <span style="background-color: #fff0f0">&quot;Mary&quot;</span>, <span style="color: #0000DD; font-weight: bold">20</span>)) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>) {
		printf(<span style="background-color: #fff0f0">&quot;Hello %s.</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, username);
	} <span style="color: #008800; font-weight: bold">else</span> {
		printf(<span style="background-color: #fff0f0">&quot;Wrong username!</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>);
	}
	
	<span style="color: #008800; font-weight: bold">return</span> <span style="color: #0000DD; font-weight: bold">0</span>;
	}
	</pre></div>

<p>If we want to include password as well:</p>
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">#include &lt;stdio.h&gt;</span>

<span style="color: #333399; font-weight: bold">int</span> <span style="color: #0066BB; font-weight: bold">main</span>() {

	<span style="color: #333399; font-weight: bold">char</span> username[<span style="color: #0000DD; font-weight: bold">20</span>], password[<span style="color: #0000DD; font-weight: bold">20</span>];
	
	printf(<span style="background-color: #fff0f0">&quot;Username: &quot;</span>); scanf(<span style="background-color: #fff0f0">&quot;%s&quot;</span>, username);
	printf(<span style="background-color: #fff0f0">&quot;Password: &quot;</span>); scanf(<span style="background-color: #fff0f0">&quot;%s&quot;</span>, password);
	
	<span style="color: #008800; font-weight: bold">if</span> ((strncmp(username, <span style="background-color: #fff0f0">&quot;John&quot;</span>, <span style="color: #0000DD; font-weight: bold">20</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>) <span style="color: #333333">&amp;&amp;</span> (strncmp(password, <span style="background-color: #fff0f0">&quot;Doe&quot;</span>, <span style="color: #0000DD; font-weight: bold">20</span>)) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>) {
		printf(<span style="background-color: #fff0f0">&quot;Hello %s %s.</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, username, password);
	} <span style="color: #008800; font-weight: bold">else</span> <span style="color: #008800; font-weight: bold">if</span> ((strncmp(username, <span style="background-color: #fff0f0">&quot;Mary&quot;</span>, <span style="color: #0000DD; font-weight: bold">20</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>) <span style="color: #333333">&amp;&amp;</span> (strncmp(password, <span style="background-color: #fff0f0">&quot;Jane&quot;</span>, <span style="color: #0000DD; font-weight: bold">20</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>)) {
		printf(<span style="background-color: #fff0f0">&quot;Hello %s %s.</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, username, password);
	} <span style="color: #008800; font-weight: bold">else</span> <span style="color: #008800; font-weight: bold">if</span> ((strncmp(username, <span style="background-color: #fff0f0">&quot;Fajar&quot;</span>, <span style="color: #0000DD; font-weight: bold">20</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>) <span style="color: #333333">&amp;&amp;</span> (strncmp(password, <span style="background-color: #fff0f0">&quot;Purnama&quot;</span>, <span style="color: #0000DD; font-weight: bold">20</span>)) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>) {
		printf(<span style="background-color: #fff0f0">&quot;Hello %s %s.</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, username, password);
	} <span style="color: #008800; font-weight: bold">else</span> {
		printf(<span style="background-color: #fff0f0">&quot;Wrong username or password!</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>);
	}
	
	<span style="color: #008800; font-weight: bold">return</span> <span style="color: #0000DD; font-weight: bold">0</span>;
	}
	</pre></div>

<p>Say this program is used on many pages or included in other programs. Should we paste the whole code? we can, but we prefer to refer this program as a void. There's another famous term called function, similar with only difference it returns a value.</p>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">#include &lt;stdio.h&gt;</span>

<span style="color: #333399; font-weight: bold">void</span> <span style="color: #0066BB; font-weight: bold">login</span>(<span style="color: #333399; font-weight: bold">char</span> username[<span style="color: #0000DD; font-weight: bold">20</span>], <span style="color: #333399; font-weight: bold">char</span> password[<span style="color: #0000DD; font-weight: bold">20</span>]) {

	<span style="color: #008800; font-weight: bold">if</span> ((strncmp(username, <span style="background-color: #fff0f0">&quot;John&quot;</span>, <span style="color: #0000DD; font-weight: bold">20</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>) <span style="color: #333333">&amp;&amp;</span> (strncmp(password, <span style="background-color: #fff0f0">&quot;Doe&quot;</span>, <span style="color: #0000DD; font-weight: bold">20</span>)) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>) {
		printf(<span style="background-color: #fff0f0">&quot;Hello %s %s.</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, username, password);
	} <span style="color: #008800; font-weight: bold">else</span> <span style="color: #008800; font-weight: bold">if</span> ((strncmp(username, <span style="background-color: #fff0f0">&quot;Mary&quot;</span>, <span style="color: #0000DD; font-weight: bold">20</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>) <span style="color: #333333">&amp;&amp;</span> (strncmp(password, <span style="background-color: #fff0f0">&quot;Jane&quot;</span>, <span style="color: #0000DD; font-weight: bold">20</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>)) {
		printf(<span style="background-color: #fff0f0">&quot;Hello %s %s.</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, username, password);
	} <span style="color: #008800; font-weight: bold">else</span> <span style="color: #008800; font-weight: bold">if</span> ((strncmp(username, <span style="background-color: #fff0f0">&quot;Fajar&quot;</span>, <span style="color: #0000DD; font-weight: bold">20</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>) <span style="color: #333333">&amp;&amp;</span> (strncmp(password, <span style="background-color: #fff0f0">&quot;Purnama&quot;</span>, <span style="color: #0000DD; font-weight: bold">20</span>)) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>) {
		printf(<span style="background-color: #fff0f0">&quot;Hello %s %s.</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, username, password);
	} <span style="color: #008800; font-weight: bold">else</span> {
		printf(<span style="background-color: #fff0f0">&quot;Wrong username or password!</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>);
	}
	}
	
	<span style="color: #333399; font-weight: bold">int</span> <span style="color: #0066BB; font-weight: bold">main</span>() {
	<span style="color: #333399; font-weight: bold">char</span> username[<span style="color: #0000DD; font-weight: bold">20</span>], password[<span style="color: #0000DD; font-weight: bold">20</span>];
	
	printf(<span style="background-color: #fff0f0">&quot;Username: &quot;</span>); scanf(<span style="background-color: #fff0f0">&quot;%s&quot;</span>, username);
	printf(<span style="background-color: #fff0f0">&quot;Password: &quot;</span>); scanf(<span style="background-color: #fff0f0">&quot;%s&quot;</span>, password);
	login(username, password);
	<span style="color: #008800; font-weight: bold">return</span> <span style="color: #0000DD; font-weight: bold">0</span>;
	}
	</pre></div>

<h2 id="4. Arrays and Loops">4. Arrays and Loops</h2>
<h3 id="4.1 In Pascal">4.1 In Pascal</h3>
<p>This is not a formal definition but we see array as place to store many values. If you assign a variable as an array it may store many numbers, names, values, etc. For example we store the username and password into the array first hand:</p>

<pre class="pascal" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">program</span> array1<span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">var</span>
	username <span style="color: #000066;">:</span> <span style="color: #000066; font-weight: bold;">array</span><span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">0</span><span style="color: #000066;">..</span><span style="color: #cc66cc;">5</span><span style="color: #009900;">&#93;</span> <span style="color: #000000; font-weight: bold;">of</span> <span style="color: #000066; font-weight: bold;">string</span> <span style="color: #000066;">=</span> <span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'John'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'Mary'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'Fajar'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'emanresu'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'root'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'admin'</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	password <span style="color: #000066;">:</span> <span style="color: #000066; font-weight: bold;">array</span><span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">0</span><span style="color: #000066;">..</span><span style="color: #cc66cc;">5</span><span style="color: #009900;">&#93;</span> <span style="color: #000000; font-weight: bold;">of</span> <span style="color: #000066; font-weight: bold;">string</span> <span style="color: #000066;">=</span> <span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Doe'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'Jane'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'Purnama'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'drowssap'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'toor'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'nimda'</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">begin</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span>username<span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">0</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span>username<span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">1</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span>username<span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">3</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span>password<span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">0</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span>password<span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">1</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span>password<span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">3</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">end</span><span style="color: #000066;">.</span></pre>

<p>Or you may fill them afterward:</p>

<pre class="pascal" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">program</span> array2<span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">var</span>
	username <span style="color: #000066;">:</span> <span style="color: #000066; font-weight: bold;">array</span><span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">0</span><span style="color: #000066;">..</span><span style="color: #cc66cc;">5</span><span style="color: #009900;">&#93;</span> <span style="color: #000000; font-weight: bold;">of</span> <span style="color: #000066; font-weight: bold;">string</span><span style="color: #000066;">;</span>
	password <span style="color: #000066;">:</span> <span style="color: #000066; font-weight: bold;">array</span><span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">0</span><span style="color: #000066;">..</span><span style="color: #cc66cc;">5</span><span style="color: #009900;">&#93;</span> <span style="color: #000000; font-weight: bold;">of</span> <span style="color: #000066; font-weight: bold;">string</span><span style="color: #000066;">;</span>
<span style="color: #000000; font-weight: bold;">begin</span>
	username<span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">0</span><span style="color: #009900;">&#93;</span> <span style="color: #000066;">:</span><span style="color: #000066;">=</span> <span style="color: #ff0000;">'Fajar'</span><span style="color: #000066;">;</span> password<span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">0</span><span style="color: #009900;">&#93;</span> <span style="color: #000066;">:</span><span style="color: #000066;">=</span> <span style="color: #ff0000;">'Purnama'</span><span style="color: #000066;">;</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span>username<span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">0</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span> <span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span>password<span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">0</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
<span style="color: #000000; font-weight: bold;">end</span><span style="color: #000066;">.</span></pre>

<p>If we have many username and password, and we want to write a login script as in section 3 it will be very difficult. Instead why not the machine do it program? In other words we write a program telling the machine to automatically write the script. Our method here is using the loop method as following.</p>

<pre class="pascal" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">program</span> for_loop<span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">var</span>
	username <span style="color: #000066;">:</span> <span style="color: #000066; font-weight: bold;">array</span><span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">0</span><span style="color: #000066;">..</span><span style="color: #cc66cc;">5</span><span style="color: #009900;">&#93;</span> <span style="color: #000000; font-weight: bold;">of</span> <span style="color: #000066; font-weight: bold;">string</span> <span style="color: #000066;">=</span> <span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'John'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'Mary'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'Fajar'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'emanresu'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'root'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'admin'</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	password <span style="color: #000066;">:</span> <span style="color: #000066; font-weight: bold;">array</span><span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">0</span><span style="color: #000066;">..</span><span style="color: #cc66cc;">5</span><span style="color: #009900;">&#93;</span> <span style="color: #000000; font-weight: bold;">of</span> <span style="color: #000066; font-weight: bold;">string</span> <span style="color: #000066;">=</span> <span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Doe'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'Jane'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'Purnama'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'drowssap'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'toor'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'nimda'</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	i<span style="color: #000066;">:</span> <span style="color: #000066; font-weight: bold;">integer</span><span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">begin</span>
	<span style="color: #000000; font-weight: bold;">for</span> i <span style="color: #000066;">:</span><span style="color: #000066;">=</span> <span style="color: #cc66cc;">0</span> <span style="color: #000000; font-weight: bold;">to</span> <span style="color: #cc66cc;">5</span> <span style="color: #000000; font-weight: bold;">do</span>
	<span style="color: #000000; font-weight: bold;">begin</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span>i<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000000; font-weight: bold;">end</span><span style="color: #000066;">;</span>
&nbsp;
	<span style="color: #000066;">writeln</span><span style="color: #000066;">;</span>
&nbsp;
	<span style="color: #000000; font-weight: bold;">for</span> i <span style="color: #000066;">:</span><span style="color: #000066;">=</span> <span style="color: #cc66cc;">0</span> <span style="color: #000000; font-weight: bold;">to</span> <span style="color: #cc66cc;">5</span> <span style="color: #000000; font-weight: bold;">do</span>
	<span style="color: #000000; font-weight: bold;">begin</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span>username<span style="color: #009900;">&#91;</span>i<span style="color: #009900;">&#93;</span><span style="color: #000066;">,</span> password<span style="color: #009900;">&#91;</span>i<span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000000; font-weight: bold;">end</span><span style="color: #000066;">;</span>
<span style="color: #000000; font-weight: bold;">end</span><span style="color: #000066;">.</span></pre>

<p>The program above uses for loop up to 6x (0-5), the first for loop shows that the value if "i" changes in order from 0 to 5 every iteration, and the next for loop shows we can call the username and password using shorter script. Next let's implement the section 3 login script (again copy, paste, and try the program first for easier approach).</p>

<pre class="pascal" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">program</span> many_login<span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">var</span>
	username <span style="color: #000066;">:</span> <span style="color: #000066; font-weight: bold;">array</span><span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">0</span><span style="color: #000066;">..</span><span style="color: #cc66cc;">5</span><span style="color: #009900;">&#93;</span> <span style="color: #000000; font-weight: bold;">of</span> <span style="color: #000066; font-weight: bold;">string</span> <span style="color: #000066;">=</span> <span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'John'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'Mary'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'Fajar'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'emanresu'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'root'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'admin'</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	password <span style="color: #000066;">:</span> <span style="color: #000066; font-weight: bold;">array</span><span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">0</span><span style="color: #000066;">..</span><span style="color: #cc66cc;">5</span><span style="color: #009900;">&#93;</span> <span style="color: #000000; font-weight: bold;">of</span> <span style="color: #000066; font-weight: bold;">string</span> <span style="color: #000066;">=</span> <span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Doe'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'Jane'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'Purnama'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'drowssap'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'toor'</span><span style="color: #000066;">,</span> <span style="color: #ff0000;">'nimda'</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	i<span style="color: #000066;">:</span> <span style="color: #000066; font-weight: bold;">integer</span><span style="color: #000066;">;</span>
	username_input<span style="color: #000066;">,</span> password_input<span style="color: #000066;">:</span> <span style="color: #000066; font-weight: bold;">string</span><span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">begin</span>
	<span style="color: #000066;">write</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Username: '</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span> <span style="color: #000066;">readln</span><span style="color: #009900;">&#40;</span>username_input<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000066;">write</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Password: '</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span> <span style="color: #000066;">readln</span><span style="color: #009900;">&#40;</span>password_input<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
&nbsp;
	<span style="color: #000000; font-weight: bold;">for</span> i <span style="color: #000066;">:</span><span style="color: #000066;">=</span> <span style="color: #cc66cc;">0</span> <span style="color: #000000; font-weight: bold;">to</span> <span style="color: #cc66cc;">5</span> <span style="color: #000000; font-weight: bold;">do</span>
	<span style="color: #000000; font-weight: bold;">begin</span>
&nbsp;
	<span style="color: #000000; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>username_input <span style="color: #000066;">=</span> username<span style="color: #009900;">&#91;</span>i<span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span> <span style="color: #000066;">and</span> <span style="color: #009900;">&#40;</span>password_input <span style="color: #000066;">=</span> password<span style="color: #009900;">&#91;</span>i<span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">then</span>
	<span style="color: #000000; font-weight: bold;">begin</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Hello '</span><span style="color: #000066;">,</span> username_input<span style="color: #000066;">,</span> <span style="color: #ff0000;">' '</span><span style="color: #000066;">,</span> password_input<span style="color: #000066;">,</span> <span style="color: #ff0000;">'!'</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000000; font-weight: bold;">break</span><span style="color: #000066;">;</span>
	<span style="color: #000000; font-weight: bold;">end</span>
	<span style="color: #000000; font-weight: bold;">else</span> <span style="color: #000000; font-weight: bold;">if</span> i <span style="color: #000066;">=</span> <span style="color: #cc66cc;">5</span> <span style="color: #000000; font-weight: bold;">then</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'Wrong username or password!'</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
&nbsp;
	<span style="color: #000000; font-weight: bold;">end</span><span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">end</span><span style="color: #000066;">.</span></pre>

<p>The code above uses "begin" and "end" if we want to put more statement inside the if else. The "break" function forcefully ends the for loop if the correct username and password has been found. On the other hand if the for loop already on it's last iteration "5" and no username and password had been found, it will write "Wrong username or password". Other than For there's also While, maybe more at other programming language. "For" specifies the number of iterations, while "while" sets a goal which the process will not stop until it reaches its goal.</p>

<pre class="pascal" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">program</span> while_test<span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">var</span>
	a<span style="color: #000066;">,</span>i<span style="color: #000066;">:</span> <span style="color: #000066; font-weight: bold;">integer</span><span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">begin</span>
	a <span style="color: #000066;">:</span><span style="color: #000066;">=</span> <span style="color: #cc66cc;">1</span><span style="color: #000066;">;</span>
	<span style="color: #000066;">write</span><span style="color: #009900;">&#40;</span><span style="color: #ff0000;">'How much do you want to count? Insert a number: '</span><span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span> <span style="color: #000066;">readln</span><span style="color: #009900;">&#40;</span>i<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	<span style="color: #000000; font-weight: bold;">while</span> a &lt;<span style="color: #000066;">=</span> i <span style="color: #000000; font-weight: bold;">do</span>
	<span style="color: #000000; font-weight: bold;">begin</span>
	<span style="color: #000066;">writeln</span><span style="color: #009900;">&#40;</span>a<span style="color: #009900;">&#41;</span><span style="color: #000066;">;</span>
	a <span style="color: #000066;">:</span><span style="color: #000066;">=</span> a <span style="color: #000066;">+</span> <span style="color: #cc66cc;">1</span><span style="color: #000066;">;</span>
	<span style="color: #000000; font-weight: bold;">end</span><span style="color: #000066;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">end</span><span style="color: #000066;">.</span></pre>

<h3 id="4.2 In C">4.2 In C</h3>
<p>This is not a formal definition but we see array as place to store many values. If you assign a variable as an array it may store many numbers, names, values, etc. For example we store the username and password into the array first hand:</p>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">#include &lt;stdio.h&gt;</span>

<span style="color: #333399; font-weight: bold">int</span> <span style="color: #0066BB; font-weight: bold">main</span>() {
	<span style="color: #008800; font-weight: bold">const</span> <span style="color: #333399; font-weight: bold">char</span> <span style="color: #333333">*</span> username[] <span style="color: #333333">=</span> {<span style="background-color: #fff0f0">&quot;John&quot;</span>, <span style="background-color: #fff0f0">&quot;Mary&quot;</span>};
	printf(<span style="background-color: #fff0f0">&quot;This is string array: %s %s</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, username[<span style="color: #0000DD; font-weight: bold">0</span>], username[<span style="color: #0000DD; font-weight: bold">1</span>]);
	
	<span style="color: #008800; font-weight: bold">const</span> <span style="color: #333399; font-weight: bold">char</span> <span style="color: #333333">*</span> password[] <span style="color: #333333">=</span> {<span style="background-color: #fff0f0">&quot;Doe&quot;</span>, <span style="background-color: #fff0f0">&quot;Jane&quot;</span>};
	printf(<span style="background-color: #fff0f0">&quot;This is string array: %s %s</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, password[<span style="color: #0000DD; font-weight: bold">0</span>], password[<span style="color: #0000DD; font-weight: bold">1</span>]);
	
	<span style="color: #333399; font-weight: bold">int</span> number[] <span style="color: #333333">=</span> {<span style="color: #0000DD; font-weight: bold">10</span>, <span style="color: #0000DD; font-weight: bold">7</span>, <span style="color: #0000DD; font-weight: bold">3</span>};
	printf(<span style="background-color: #fff0f0">&quot;This is integer array: %d %d %d</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, number[<span style="color: #0000DD; font-weight: bold">0</span>], number[<span style="color: #0000DD; font-weight: bold">1</span>], number[<span style="color: #0000DD; font-weight: bold">2</span>]);
	
	<span style="color: #008800; font-weight: bold">return</span> <span style="color: #0000DD; font-weight: bold">0</span>;
	}
	</pre></div>

<p>Or you may fill them afterward:</p>
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">#include &lt;stdio.h&gt;</span>

<span style="color: #333399; font-weight: bold">int</span> <span style="color: #0066BB; font-weight: bold">main</span>() {
	<span style="color: #008800; font-weight: bold">const</span> <span style="color: #333399; font-weight: bold">char</span> <span style="color: #333333">*</span> username[<span style="color: #0000DD; font-weight: bold">6</span>];
	username[<span style="color: #0000DD; font-weight: bold">0</span>] <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;John&quot;</span>;
	username[<span style="color: #0000DD; font-weight: bold">1</span>] <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;Mary&quot;</span>;
	printf(<span style="background-color: #fff0f0">&quot;This is string array: %s %s</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, username[<span style="color: #0000DD; font-weight: bold">0</span>], username[<span style="color: #0000DD; font-weight: bold">1</span>]);
	
	<span style="color: #008800; font-weight: bold">const</span> <span style="color: #333399; font-weight: bold">char</span> <span style="color: #333333">*</span> password[<span style="color: #0000DD; font-weight: bold">6</span>];
	password[<span style="color: #0000DD; font-weight: bold">0</span>] <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;Doe&quot;</span>;
	password[<span style="color: #0000DD; font-weight: bold">1</span>] <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;Jane&quot;</span>;
	printf(<span style="background-color: #fff0f0">&quot;This is string array: %s %s</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, password[<span style="color: #0000DD; font-weight: bold">0</span>], password[<span style="color: #0000DD; font-weight: bold">1</span>]);
	
	<span style="color: #333399; font-weight: bold">int</span> number[<span style="color: #0000DD; font-weight: bold">3</span>];
	number[<span style="color: #0000DD; font-weight: bold">0</span>] <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">10</span>;
	number[<span style="color: #0000DD; font-weight: bold">1</span>] <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">7</span>;
	number[<span style="color: #0000DD; font-weight: bold">2</span>] <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">4</span>;
	printf(<span style="background-color: #fff0f0">&quot;This is integer array: %d %d %d</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, number[<span style="color: #0000DD; font-weight: bold">0</span>], number[<span style="color: #0000DD; font-weight: bold">1</span>], number[<span style="color: #0000DD; font-weight: bold">2</span>]);
	
	<span style="color: #008800; font-weight: bold">return</span> <span style="color: #0000DD; font-weight: bold">0</span>;
	}
	</pre></div>

<p>If we have many username and password, and we want to write a login script as in section 3 it will be very difficult. Instead why not the machine do it program? In other words we write a program telling the machine to automatically write the script. Our method here is using the loop method as following.</p>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">#include &lt;stdio.h&gt;</span>

<span style="color: #333399; font-weight: bold">int</span> <span style="color: #0066BB; font-weight: bold">main</span>() {
	<span style="color: #008800; font-weight: bold">const</span> <span style="color: #333399; font-weight: bold">char</span> <span style="color: #333333">*</span> username[] <span style="color: #333333">=</span> {<span style="background-color: #fff0f0">&quot;John&quot;</span>, <span style="background-color: #fff0f0">&quot;Mary&quot;</span>, <span style="background-color: #fff0f0">&quot;Fajar&quot;</span>, <span style="background-color: #fff0f0">&quot;emanresu&quot;</span>, <span style="background-color: #fff0f0">&quot;root&quot;</span>, <span style="background-color: #fff0f0">&quot;admin&quot;</span>};
	
	<span style="color: #008800; font-weight: bold">const</span> <span style="color: #333399; font-weight: bold">char</span> <span style="color: #333333">*</span> password[] <span style="color: #333333">=</span> {<span style="background-color: #fff0f0">&quot;Doe&quot;</span>, <span style="background-color: #fff0f0">&quot;Jane&quot;</span>, <span style="background-color: #fff0f0">&quot;Purnama&quot;</span>, <span style="background-color: #fff0f0">&quot;drowssap&quot;</span>, <span style="background-color: #fff0f0">&quot;toor&quot;</span>, <span style="background-color: #fff0f0">&quot;nimda&quot;</span>};
	
	<span style="color: #333399; font-weight: bold">int</span> i;
	
	<span style="color: #008800; font-weight: bold">for</span>(i <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>; i <span style="color: #333333">&lt;=</span> <span style="color: #0000DD; font-weight: bold">5</span>; i<span style="color: #333333">++</span>){
		printf(<span style="background-color: #fff0f0">&quot;%d</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, i);
	}
	
	<span style="color: #008800; font-weight: bold">for</span>(i <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>; i <span style="color: #333333">&lt;=</span> <span style="color: #0000DD; font-weight: bold">5</span>; i<span style="color: #333333">++</span>){
		printf(<span style="background-color: #fff0f0">&quot;This is string array: %s %s</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, username[i], password[i]);
	}
	
	<span style="color: #008800; font-weight: bold">return</span> <span style="color: #0000DD; font-weight: bold">0</span>;
	}
	</pre></div>

<p>The program above uses for loop up to 6x (0-5), the first for loop shows that the value if "i" changes in order from 0 to 5 every iteration, and the next for loop shows we can call the username and password using shorter script. Next let's implement the section 3 login script (again copy, paste, and try the program first for easier approach).</p>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">#include &lt;stdio.h&gt;</span>

<span style="color: #333399; font-weight: bold">int</span> <span style="color: #0066BB; font-weight: bold">main</span>() {
	<span style="color: #008800; font-weight: bold">const</span> <span style="color: #333399; font-weight: bold">char</span> <span style="color: #333333">*</span> username[] <span style="color: #333333">=</span> {<span style="background-color: #fff0f0">&quot;John&quot;</span>, <span style="background-color: #fff0f0">&quot;Mary&quot;</span>, <span style="background-color: #fff0f0">&quot;Fajar&quot;</span>, <span style="background-color: #fff0f0">&quot;emanresu&quot;</span>, <span style="background-color: #fff0f0">&quot;root&quot;</span>, <span style="background-color: #fff0f0">&quot;admin&quot;</span>};
	
	<span style="color: #008800; font-weight: bold">const</span> <span style="color: #333399; font-weight: bold">char</span> <span style="color: #333333">*</span> password[] <span style="color: #333333">=</span> {<span style="background-color: #fff0f0">&quot;Doe&quot;</span>, <span style="background-color: #fff0f0">&quot;Jane&quot;</span>, <span style="background-color: #fff0f0">&quot;Purnama&quot;</span>, <span style="background-color: #fff0f0">&quot;drowssap&quot;</span>, <span style="background-color: #fff0f0">&quot;toor&quot;</span>, <span style="background-color: #fff0f0">&quot;nimda&quot;</span>};
	
	<span style="color: #333399; font-weight: bold">char</span> username_input[<span style="color: #0000DD; font-weight: bold">20</span>], password_input[<span style="color: #0000DD; font-weight: bold">20</span>];
	
	printf(<span style="background-color: #fff0f0">&quot;Username: &quot;</span>); scanf(<span style="background-color: #fff0f0">&quot;%s&quot;</span>, username_input);
	printf(<span style="background-color: #fff0f0">&quot;Password: &quot;</span>); scanf(<span style="background-color: #fff0f0">&quot;%s&quot;</span>, password_input);
	
	<span style="color: #333399; font-weight: bold">int</span> i;
	
	<span style="color: #008800; font-weight: bold">for</span>(i <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>; i <span style="color: #333333">&lt;=</span> <span style="color: #0000DD; font-weight: bold">5</span>; i<span style="color: #333333">++</span>){
		<span style="color: #008800; font-weight: bold">if</span>((strncmp(username_input, username[i], <span style="color: #0000DD; font-weight: bold">20</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>) <span style="color: #333333">&amp;&amp;</span> (strncmp(password_input, password[i], <span style="color: #0000DD; font-weight: bold">20</span>) <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>)){
		printf(<span style="background-color: #fff0f0">&quot;Hello %s %s</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, username_input, password_input);
		<span style="color: #008800; font-weight: bold">break</span>;
		} <span style="color: #008800; font-weight: bold">else</span> <span style="color: #008800; font-weight: bold">if</span>(i <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">5</span>) {
		printf(<span style="background-color: #fff0f0">&quot;Wrong username or password</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>);
		}
	}
	
	<span style="color: #008800; font-weight: bold">return</span> <span style="color: #0000DD; font-weight: bold">0</span>;
	}
	</pre></div>

<p>The "break" function forcefully ends the for loop if the correct username and password has been found. On the other hand if the for loop already on it's last iteration "5" and no username and password had been found, it will write "Wrong username or password". Other than For there's also While, maybe more at other programming language. "For" specifies the number of iterations, while "while" sets a goal which the process will not stop until it reaches its goal.</p>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">#include &lt;stdio.h&gt;</span>

<span style="color: #333399; font-weight: bold">int</span> <span style="color: #0066BB; font-weight: bold">main</span>() {
	<span style="color: #333399; font-weight: bold">int</span> i,a;
	a <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>;
	
	printf(<span style="background-color: #fff0f0">&quot;How much do you want to count? Insert a number: &quot;</span>); scanf(<span style="background-color: #fff0f0">&quot;%d&quot;</span>, <span style="color: #333333">&amp;</span>i);
	
	<span style="color: #008800; font-weight: bold">while</span>(a<span style="color: #333333">&lt;=</span>i){
		printf(<span style="background-color: #fff0f0">&quot;%d</span><span style="color: #666666; font-weight: bold; background-color: #fff0f0">\n</span><span style="background-color: #fff0f0">&quot;</span>, a);
		a<span style="color: #333333">++</span>;
	}
	
	<span style="color: #008800; font-weight: bold">return</span> <span style="color: #0000DD; font-weight: bold">0</span>;
	}
	</pre></div>

<h2 id="What's Next?">What's Next?</h2>
<p>Here's a list of programming tutorial website:</p>
<ul>
	<li><a href="www.learn-c.org">www.learn-c.org</a> for C programming.</li>
	<li><a href="wiki.freepascal.org">wiki.freepascal.org</a> for Pascal.</li>
	<li><a href="http://www.w3schools.com">http://www.w3schools.com</a> for web programming.</li>
	<li><a href="www.learnpython.org">www.learnpython.org</a> for python.</li>
	<li><a href="tryruby.org">tryruby.org</a> for ruby.</li>
</ul>

<p>Paste your code online:</p>

<ul>
	<li><a href="https://cloud.google.com/appengine">https://cloud.google.com/appengine</a></li>
	<li><a href="https://jsfiddle.net/user/0fajarpurnama0/fiddles/">https://jsfiddle.net/user/0fajarpurnama0/fiddles/</a></li>
	<li><a href="https://plnkr.co/">https://plnkr.co/</a></li>
	<li><a href="https://codepen.io/0fajarpurnama0/">https://codepen.io/0fajarpurnama0/</a></li>
	<li><a href="https://www.onlinegdb.com/">https://www.onlinegdb.com/</a></li>
	<li><a href="https://www.jdoodle.com/">https://www.jdoodle.com/</a></li>
</ul>

<p>Examples Online:</p>
<ul>
	<li><a href="http://eng-contact-109902.appspot.com">http://eng-contact-109902.appspot.com</a></li>
	<li><a href="http://phppractice-1103.appspot.com">http://phppractice-1103.appspot.com</a></li>
	<li><a href="http://simple-cashier-change.appspot.com">http://simple-cashier-change.appspot.com</a></li>
</ul>