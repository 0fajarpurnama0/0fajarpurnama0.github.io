---
layout: post
title: Python Cheat Sheet
category: internet
tags: [programming, python, cheatsheet, computer, big data]
featuredimage: https://images.hive.blog/DQmWzyHXwhpQqEU6vEph5QR8ixCGwBYSc1WyvsXFUQ9Wbyz/Noting%20Our%20Own%20Cheatsheet.jpg
description: This is a cheatsheet for Python programming language that will be constantly updated.
canonicalurl: https://0fajarpurnama0.github.io/internet/2022/07/18/python-cheat-sheet.html
---
<img src="https://images.hive.blog/DQmWzyHXwhpQqEU6vEph5QR8ixCGwBYSc1WyvsXFUQ9Wbyz/Noting%20Our%20Own%20Cheatsheet.jpg" alt="Why cheatsheet for programming languages?" />

<h2 id="tableofcontents">Table Of Contents</h2>
<ul>
	<li><a href="#tableofcontents">Table Of Contents</a></li>
	<li><a href="#FrequentlyUsedInAnyProgramming">Frequently Used In Any Programming</a></li>
	<li><a href="#NavigateIndependently">Navigate Independently</a></li>
	<li><a href="#References">References</a></li>
</ul>

<h2 id="FrequentlyUsedInAnyProgramming">Frequently Used In Any Programming</h2>

<h3>Print</h3>
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020">print</span>(<span style="background-color: #fff0f0">&quot;Hello, World!&quot;</span>)
</pre></div>

<h3>Comments</h3>
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #888888"># This is a comment.</span>
</pre></div>

<h3>Variables</h3>
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">x <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>
y <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">2</span>
<span style="color: #007020">print</span>(x, y)
</pre></div>

<h3>Data Types</h3>
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">x <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span> <span style="color: #888888">#integer</span>
y <span style="color: #333333">=</span> <span style="color: #6600EE; font-weight: bold">2.5</span> <span style="color: #888888">#float</span>
z <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;My numbers are:&quot;</span> <span style="color: #888888">#string </span>
<span style="color: #007020">print</span>(z, x, <span style="background-color: #fff0f0">&quot;and&quot;</span>, y)
</pre></div>

<h3>Operators</h3>
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">x <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">5</span>
y <span style="color: #333333">=</span> <span style="color: #6600EE; font-weight: bold">2.5</span>

z <span style="color: #333333">=</span> x <span style="color: #333333">+</span> y <span style="color: #888888">#addition</span>
<span style="color: #007020">print</span>(<span style="background-color: #fff0f0">&quot;x + y =&quot;</span>, z)

z <span style="color: #333333">=</span> x <span style="color: #333333">-</span> y <span style="color: #888888">#substraction</span>
<span style="color: #007020">print</span>(<span style="background-color: #fff0f0">&quot;x - y =&quot;</span>, z)

z <span style="color: #333333">=</span> x <span style="color: #333333">*</span> y <span style="color: #888888">#multiplication</span>
<span style="color: #007020">print</span>(<span style="background-color: #fff0f0">&quot;x * y =&quot;</span>, z)

z <span style="color: #333333">=</span> x <span style="color: #333333">/</span> y <span style="color: #888888">#division</span>
<span style="color: #007020">print</span>(<span style="background-color: #fff0f0">&quot;x / y =&quot;</span>, z)

z <span style="color: #333333">=</span> x <span style="color: #333333">%</span> y <span style="color: #888888">#mod</span>
<span style="color: #007020">print</span>(<span style="background-color: #fff0f0">&quot;x % y =&quot;</span>, z)
</pre></div>

<h3>Input</h3>
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020">print</span>(<span style="background-color: #fff0f0">&#39;Enter your name:&#39;</span>)
x <span style="color: #333333">=</span> <span style="color: #007020">input</span>()
<span style="color: #007020">print</span>(<span style="background-color: #fff0f0">&#39;Hello, &#39;</span> <span style="color: #333333">+</span> x)
</pre></div>
    
<h3>Boolean</h3>
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">x <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>;
y <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">2</span>;
z <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;hello&quot;</span>

<span style="color: #888888"># more than?</span>
v <span style="color: #333333">=</span> x <span style="color: #333333">&gt;</span> y
<span style="color: #007020">print</span>(x, <span style="background-color: #fff0f0">&quot;&gt;&quot;</span>, y, <span style="background-color: #fff0f0">&quot;:&quot;</span>, v)

<span style="color: #888888"># less than?</span>
v <span style="color: #333333">=</span> x <span style="color: #333333">&lt;</span> y
<span style="color: #007020">print</span>(x, <span style="background-color: #fff0f0">&quot;&lt;&quot;</span>, y, <span style="background-color: #fff0f0">&quot;:&quot;</span>, v)

<span style="color: #888888"># equal?</span>
<span style="color: #007020">print</span>(<span style="background-color: #fff0f0">&quot;hello =&quot;</span>, z, <span style="background-color: #fff0f0">&quot;:&quot;</span>, (<span style="background-color: #fff0f0">&quot;hello&quot;</span> <span style="color: #333333">==</span> z))
</pre></div>

<h3>Conditional</h3>
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">grade <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">75</span>

<span style="color: #008800; font-weight: bold">if</span> grade <span style="color: #333333">&gt;</span> <span style="color: #0000DD; font-weight: bold">60</span>:
  <span style="color: #007020">print</span>(<span style="background-color: #fff0f0">&quot;pass&quot;</span>)

<span style="color: #008800; font-weight: bold">if</span> grade <span style="color: #333333">&lt;</span> <span style="color: #0000DD; font-weight: bold">60</span>:
  <span style="color: #007020">print</span>(<span style="background-color: #fff0f0">&quot;fail&quot;</span>)
<span style="color: #008800; font-weight: bold">else</span>:
  <span style="color: #007020">print</span>(<span style="background-color: #fff0f0">&quot;pass&quot;</span>)

<span style="color: #008800; font-weight: bold">if</span> grade <span style="color: #333333">&lt;=</span> <span style="color: #0000DD; font-weight: bold">0</span>:
  <span style="color: #007020">print</span>(<span style="background-color: #fff0f0">&quot;F&quot;</span>)
<span style="color: #008800; font-weight: bold">elif</span> grade <span style="color: #333333">&lt;=</span> <span style="color: #0000DD; font-weight: bold">20</span>:
  <span style="color: #007020">print</span>(<span style="background-color: #fff0f0">&quot;E&quot;</span>)
<span style="color: #008800; font-weight: bold">elif</span> grade <span style="color: #333333">&lt;=</span> <span style="color: #0000DD; font-weight: bold">40</span>:
  <span style="color: #007020">print</span>(<span style="background-color: #fff0f0">&quot;D&quot;</span>)
<span style="color: #008800; font-weight: bold">elif</span> grade <span style="color: #333333">&lt;=</span> <span style="color: #0000DD; font-weight: bold">60</span>:
  <span style="color: #007020">print</span>(<span style="background-color: #fff0f0">&quot;C&quot;</span>)
<span style="color: #008800; font-weight: bold">elif</span> grade <span style="color: #333333">&lt;=</span> <span style="color: #0000DD; font-weight: bold">80</span>:
  <span style="color: #007020">print</span>(<span style="background-color: #fff0f0">&quot;B&quot;</span>)
<span style="color: #008800; font-weight: bold">elif</span> grade <span style="color: #333333">&lt;=</span> <span style="color: #0000DD; font-weight: bold">100</span>:
  <span style="color: #007020">print</span>(<span style="background-color: #fff0f0">&quot;A&quot;</span>)
<span style="color: #008800; font-weight: bold">else</span>:
  <span style="color: #007020">print</span>(<span style="background-color: #fff0f0">&quot;Not a Number&quot;</span>)
</pre></div>

<h3>Loop</h3>
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #008800; font-weight: bold">for</span> x <span style="color: #000000; font-weight: bold">in</span> [<span style="color: #0000DD; font-weight: bold">0</span>, <span style="color: #0000DD; font-weight: bold">1</span>, <span style="color: #0000DD; font-weight: bold">2</span>, <span style="color: #0000DD; font-weight: bold">5</span>, <span style="color: #0000DD; font-weight: bold">8</span>]:
  <span style="color: #007020">print</span>(<span style="background-color: #fff0f0">&quot;interation:&quot;</span>, x)

<span style="color: #008800; font-weight: bold">for</span> x <span style="color: #000000; font-weight: bold">in</span> <span style="color: #007020">range</span>(<span style="color: #0000DD; font-weight: bold">0</span>, <span style="color: #0000DD; font-weight: bold">4</span>):
  <span style="color: #007020">print</span>(x)

<span style="color: #008800; font-weight: bold">for</span> x <span style="color: #000000; font-weight: bold">in</span> <span style="color: #007020">range</span>(<span style="color: #0000DD; font-weight: bold">0</span>, <span style="color: #0000DD; font-weight: bold">4</span>):
  <span style="color: #007020">print</span>(<span style="background-color: #fff0f0">&quot;hello&quot;</span>)

y <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">1</span>
z <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>

<span style="color: #888888"># Find y + y + y + y!</span>

<span style="color: #008800; font-weight: bold">for</span> x <span style="color: #000000; font-weight: bold">in</span> <span style="color: #007020">range</span>(<span style="color: #0000DD; font-weight: bold">0</span>, <span style="color: #0000DD; font-weight: bold">4</span>):
  z <span style="color: #333333">+=</span> y
	
<span style="color: #007020">print</span>(z)
</pre></div>

<h3>List (Array)</h3>
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">colors <span style="color: #333333">=</span> [<span style="background-color: #fff0f0">&quot;black&quot;</span>, <span style="background-color: #fff0f0">&quot;white&quot;</span>, <span style="background-color: #fff0f0">&quot;red&quot;</span>, <span style="background-color: #fff0f0">&quot;green&quot;</span>, <span style="background-color: #fff0f0">&quot;blue&quot;</span>]

<span style="color: #007020">print</span>(colors[<span style="color: #0000DD; font-weight: bold">0</span>])
<span style="color: #007020">print</span>(colors[<span style="color: #0000DD; font-weight: bold">2</span>])
<span style="color: #007020">print</span>(colors[<span style="color: #0000DD; font-weight: bold">4</span>])
<span style="color: #007020">print</span>(<span style="color: #007020">len</span>(colors))

<span style="color: #008800; font-weight: bold">for</span> x <span style="color: #000000; font-weight: bold">in</span> <span style="color: #007020">range</span>(<span style="color: #0000DD; font-weight: bold">0</span>, <span style="color: #007020">len</span>(colors)):
  <span style="color: #007020">print</span>(colors[x])
</pre></div>
	
<h3>Dictionaries (objects)</h3>
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">profile <span style="color: #333333">=</span> {
  <span style="background-color: #fff0f0">&quot;Name&quot;</span>: <span style="background-color: #fff0f0">&quot;Fajar Purnama&quot;</span>,
  <span style="background-color: #fff0f0">&quot;Age&quot;</span>: <span style="color: #0000DD; font-weight: bold">30</span>,
  <span style="background-color: #fff0f0">&quot;Nationality&quot;</span>: <span style="background-color: #fff0f0">&quot;Indonesian&quot;</span>,
  <span style="background-color: #fff0f0">&quot;Occupation&quot;</span>: <span style="background-color: #fff0f0">&quot;Lecturer&quot;</span>
}

<span style="color: #007020">print</span>(profile)

<span style="color: #007020">print</span>(profile[<span style="background-color: #fff0f0">&quot;Name&quot;</span>])
<span style="color: #007020">print</span>(profile[<span style="background-color: #fff0f0">&quot;Nationality&quot;</span>])

<span style="color: #008800; font-weight: bold">for</span> x <span style="color: #000000; font-weight: bold">in</span> profile:
  <span style="color: #007020">print</span>(x, <span style="background-color: #fff0f0">&quot;:&quot;</span>, profile[x])
</pre></div>

<h2 id="NavigateIndependently">Navigate Independently</h2>

<h3>Show available built in functions</h3>
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020">dir</span>(__builtins__)
</pre></div>

<h3>Show description of a function</h3>
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">help(<span style="background-color: #fff0f0">&quot;print&quot;</span>)
</pre></div>

<h3>Show available modules</h3>
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">help(<span style="background-color: #fff0f0">&#39;modules&#39;</span>)
</pre></div>

<h3>List functions available in a module</h3>
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020">dir</span>(<span style="background-color: #fff0f0">&quot;pandas&quot;</span>)
</pre></div>

<h3>Install modules</h3>
<pre>!pip install pydataset</pre>

<h2 id="References">References</h2>
<ul>
	<li>Python Official Website: <a href="https://www.python.org/">https://www.python.org/</a></li>
	<li>Jupyter Notebook: <a href="https://jupyter.org/">https://jupyter.org/</a></li>
	<li>Google Colaboratory: <a href="https://colab.research.google.com/">https://colab.research.google.com/</a></li>
	<li>W3Schools Python Tutorial: <a href="https://www.w3schools.com/python/default.asp">https://www.w3schools.com/python/default.asp</a></li>
	<li>Tutorialspoint Python Tutorial: <a href="https://www.tutorialspoint.com/python/index.htm">https://www.tutorialspoint.com/python/index.htm</a></li>
	<li>Javatpoint Python Tutorial: <a href="https://www.javatpoint.com/python-tutorial">https://www.javatpoint.com/python-tutorial</a></li>
	<li>Kaggle Dataset: <a href="https://www.kaggle.com/">https://www.kaggle.com/</a></li>
	<li>Mendeley Dataset: <a href="https://data.mendeley.com/">https://data.mendeley.com/</a></li>
	<li>Google Scholar Publications: <a href="https://scholar.google.com/">https://scholar.google.com/</a></li>
	<li><a href="https://www.google.com/search?q=big+data+python+library&sxsrf=ALiCzsYC-kvtkx778lbtAohopklYe3Bi_Q%3A1658227246048&ei=LorWYqy6Arq-z7sPrcKr4As&oq=big+data+python+li&gs_lcp=Cgdnd3Mtd2l6EAMYADIFCAAQgAQyBQgAEIYDMgUIABCGAzIFCAAQhgMyBQgAEIYDMgUIABCGAzoHCAAQRxCwAzoHCAAQsAMQQzoKCAAQ5AIQsAMYAToSCC4QxwEQ0QMQyAMQsAMQQxgCOgwILhDIAxCwAxBDGAI6BggAEB4QFkoECEEYAEoECEYYAVCIBljhC2C8EmgBcAF4AIAB5gOIAbAGkgEHMC4yLjQtMZgBAKABAcgBEsABAdoBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz">Search Google for Big Data Using Python Libraries</a></li>
	<li>0fajarpurnama0 AI Course: <a href="https://0fajarpurnama0.github.io/matakuliah/kecerdasan-buatan/">https://www.https://0fajarpurnama0.github.io/matakuliah/kecerdasan-buatan/</a></li>
	<li>0fajarpurnama0 ML Course: <a href="https://0fajarpurnama0.github.io/matakuliah/pembelajaran-mesin/">https://0fajarpurnama0.github.io/matakuliah/pembelajaran-mesin/</a></li>
	<li>This Cheatsheet: <a href="https://0fajarpurnama0.github.io/internet/2022/07/18/python-cheat-sheet.html">https://0fajarpurnama0.github.io/internet/2022/07/18/python-cheat-sheet.html</a></li>
</ul>