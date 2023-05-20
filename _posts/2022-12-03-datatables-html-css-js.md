---
layout: post
title: Datatables HTML CSS Js
category: tools
tags: [tools, widget, web, datatables, html css js]
featuredimage: https://upload.wikimedia.org/wikipedia/commons/a/a4/Datatables_logo_square.png
description: A widget for live preview of datatables in html, css, and js.
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/03/datatables-html-css-js
---
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.24/css/jquery.dataTables.min.css">

<h1><a href="https://datatables.net/">DataTables</a> Example</h1>

<table id="myTable">
  <thead>
    <tr>
      <th>Name</th>
      <th>Position</th>
      <th>Office</th>
      <th>Age</th>
      <th>Start Date</th>
      <th>Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tiger Nixon</td>
      <td>System Architect</td>
      <td>Edinburgh</td>
      <td>61</td>
      <td>2011/04/25</td>
      <td>$320,800</td>
    </tr>
    <!-- Randomly generated rows -->
    <tr>
      <td>John Doe</td>
      <td>Developer</td>
      <td>New York</td>
      <td>35</td>
      <td>2015/01/15</td>
      <td>$80,000</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>Designer</td>
      <td>London</td>
      <td>28</td>
      <td>2018/06/10</td>
      <td>$65,000</td>
    </tr>
    <tr>
      <td>Tiger Nixon</td>
      <td>System Architect</td>
      <td>Edinburgh</td>
      <td>61</td>
      <td>2011/04/25</td>
      <td>$320,800</td>
    </tr>
    <!-- Randomly generated rows -->
    <tr>
      <td>John Doe</td>
      <td>Developer</td>
      <td>New York</td>
      <td>35</td>
      <td>2015/01/15</td>
      <td>$80,000</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>Designer</td>
      <td>London</td>
      <td>28</td>
      <td>2018/06/10</td>
      <td>$65,000</td>
    </tr>
    <tr>
      <td>Tiger Nixon</td>
      <td>System Architect</td>
      <td>Edinburgh</td>
      <td>61</td>
      <td>2011/04/25</td>
      <td>$320,800</td>
    </tr>
    <!-- Randomly generated rows -->
    <tr>
      <td>John Doe</td>
      <td>Developer</td>
      <td>New York</td>
      <td>35</td>
      <td>2015/01/15</td>
      <td>$80,000</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>Designer</td>
      <td>London</td>
      <td>28</td>
      <td>2018/06/10</td>
      <td>$65,000</td>
    </tr>
    <tr>
      <td>Tiger Nixon</td>
      <td>System Architect</td>
      <td>Edinburgh</td>
      <td>61</td>
      <td>2011/04/25</td>
      <td>$320,800</td>
    </tr>
    <!-- Randomly generated rows -->
    <tr>
      <td>John Doe</td>
      <td>Developer</td>
      <td>New York</td>
      <td>35</td>
      <td>2015/01/15</td>
      <td>$80,000</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>Designer</td>
      <td>London</td>
      <td>28</td>
      <td>2018/06/10</td>
      <td>$65,000</td>
    </tr>
    <tr>
      <td>Tiger Nixon</td>
      <td>System Architect</td>
      <td>Edinburgh</td>
      <td>61</td>
      <td>2011/04/25</td>
      <td>$320,800</td>
    </tr>
    <!-- Randomly generated rows -->
    <tr>
      <td>John Doe</td>
      <td>Developer</td>
      <td>New York</td>
      <td>35</td>
      <td>2015/01/15</td>
      <td>$80,000</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>Designer</td>
      <td>London</td>
      <td>28</td>
      <td>2018/06/10</td>
      <td>$65,000</td>
    </tr>
  </tbody>
</table>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js"></script>

<script>
  $(document).ready(function() {
    $('#myTable').DataTable();
  });
</script>

<br>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">&lt;!DOCTYPE html&gt;</span>
<span style="color: #007700">&lt;html&gt;</span>
<span style="color: #007700">&lt;head&gt;</span>
  <span style="color: #007700">&lt;title&gt;</span>DataTables Example<span style="color: #007700">&lt;/title&gt;</span>
  <span style="color: #007700">&lt;link</span> <span style="color: #0000CC">rel=</span><span style="background-color: #fff0f0">&quot;stylesheet&quot;</span> <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">&quot;text/css&quot;</span> <span style="color: #0000CC">href=</span><span style="background-color: #fff0f0">&quot;https://cdn.datatables.net/1.10.24/css/jquery.dataTables.min.css&quot;</span><span style="color: #007700">&gt;</span>
<span style="color: #007700">&lt;/head&gt;</span>
<span style="color: #007700">&lt;body&gt;</span>
  <span style="color: #007700">&lt;h1&gt;</span>DataTables Example<span style="color: #007700">&lt;/h1&gt;</span>

  <span style="color: #007700">&lt;table</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;myTable&quot;</span><span style="color: #007700">&gt;</span>
    <span style="color: #007700">&lt;thead&gt;</span>
      <span style="color: #007700">&lt;tr&gt;</span>
        <span style="color: #007700">&lt;th&gt;</span>Name<span style="color: #007700">&lt;/th&gt;</span>
        <span style="color: #007700">&lt;th&gt;</span>Position<span style="color: #007700">&lt;/th&gt;</span>
        <span style="color: #007700">&lt;th&gt;</span>Office<span style="color: #007700">&lt;/th&gt;</span>
        <span style="color: #007700">&lt;th&gt;</span>Age<span style="color: #007700">&lt;/th&gt;</span>
        <span style="color: #007700">&lt;th&gt;</span>Start Date<span style="color: #007700">&lt;/th&gt;</span>
        <span style="color: #007700">&lt;th&gt;</span>Salary<span style="color: #007700">&lt;/th&gt;</span>
      <span style="color: #007700">&lt;/tr&gt;</span>
    <span style="color: #007700">&lt;/thead&gt;</span>
    <span style="color: #007700">&lt;tbody&gt;</span>
      <span style="color: #007700">&lt;tr&gt;</span>
        <span style="color: #007700">&lt;td&gt;</span>Tiger Nixon<span style="color: #007700">&lt;/td&gt;</span>
        <span style="color: #007700">&lt;td&gt;</span>System Architect<span style="color: #007700">&lt;/td&gt;</span>
        <span style="color: #007700">&lt;td&gt;</span>Edinburgh<span style="color: #007700">&lt;/td&gt;</span>
        <span style="color: #007700">&lt;td&gt;</span>61<span style="color: #007700">&lt;/td&gt;</span>
        <span style="color: #007700">&lt;td&gt;</span>2011/04/25<span style="color: #007700">&lt;/td&gt;</span>
        <span style="color: #007700">&lt;td&gt;</span>$320,800<span style="color: #007700">&lt;/td&gt;</span>
      <span style="color: #007700">&lt;/tr&gt;</span>
      <span style="color: #888888">&lt;!-- Randomly generated rows --&gt;</span>
      <span style="color: #007700">&lt;tr&gt;</span>
        <span style="color: #007700">&lt;td&gt;</span>John Doe<span style="color: #007700">&lt;/td&gt;</span>
        <span style="color: #007700">&lt;td&gt;</span>Developer<span style="color: #007700">&lt;/td&gt;</span>
        <span style="color: #007700">&lt;td&gt;</span>New York<span style="color: #007700">&lt;/td&gt;</span>
        <span style="color: #007700">&lt;td&gt;</span>35<span style="color: #007700">&lt;/td&gt;</span>
        <span style="color: #007700">&lt;td&gt;</span>2015/01/15<span style="color: #007700">&lt;/td&gt;</span>
        <span style="color: #007700">&lt;td&gt;</span>$80,000<span style="color: #007700">&lt;/td&gt;</span>
      <span style="color: #007700">&lt;/tr&gt;</span>
      <span style="color: #007700">&lt;tr&gt;</span>
        <span style="color: #007700">&lt;td&gt;</span>Jane Smith<span style="color: #007700">&lt;/td&gt;</span>
        <span style="color: #007700">&lt;td&gt;</span>Designer<span style="color: #007700">&lt;/td&gt;</span>
        <span style="color: #007700">&lt;td&gt;</span>London<span style="color: #007700">&lt;/td&gt;</span>
        <span style="color: #007700">&lt;td&gt;</span>28<span style="color: #007700">&lt;/td&gt;</span>
        <span style="color: #007700">&lt;td&gt;</span>2018/06/10<span style="color: #007700">&lt;/td&gt;</span>
        <span style="color: #007700">&lt;td&gt;</span>$65,000<span style="color: #007700">&lt;/td&gt;</span>
      <span style="color: #007700">&lt;/tr&gt;</span>
      <span style="color: #888888">&lt;!-- Add more random rows here --&gt;</span>
    <span style="color: #007700">&lt;/tbody&gt;</span>
  <span style="color: #007700">&lt;/table&gt;</span>

  <span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://code.jquery.com/jquery-3.6.0.min.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
  <span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>

  <span style="color: #007700">&lt;script&gt;</span>
    $(<span style="color: #007020">document</span>).ready(<span style="color: #008800; font-weight: bold">function</span>() {
      $(<span style="background-color: #fff0f0">&#39;#myTable&#39;</span>).DataTable();
    });
  <span style="color: #007700">&lt;/script&gt;</span>
<span style="color: #007700">&lt;/body&gt;</span>
<span style="color: #007700">&lt;/html&gt;</span>
</pre></div>