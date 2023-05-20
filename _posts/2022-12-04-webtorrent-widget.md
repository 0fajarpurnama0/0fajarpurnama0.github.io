---
layout: post
title: Webtorrent Widget
category: tools
tags: [tools, widget, web, webtorrent, html css js]
featuredimage: https://www.linuxadictos.com/wp-content/uploads/webtorrent-desktop-.jpg
description: Webtorrent widget in html, css, and js.
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/04/webtorrent-widget
---
<h2>Download files using the WebTorrent protocol (BitTorrent over WebRTC).</h2>

<form>
  <label for="torrentId">Download from a magnet link: </label>
  <input name="torrentId", placeholder="magnet:" value="magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent">
  <button type="submit">Download</button>
</form>

<h3>Download Log</h3>
<div class="downloadlog"></div>

<h2>WebTorrent Seeding Example</h2>

<input type="file" id="file-input">
<button id="seed-button">Seed File</button>

<h3>Upload Log</h3>
<div class="uploadlog"></div>

<p>Reference: <a href="https://webtorrent.io/intro">Get Started with WebTorrent</a></p>
<p>Official Example: <a href="https://instant.io/">Instant.io Streaming file transfer over WebTorrent (torrents on the web)</a></p>

<!-- Start This Source Code -->
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">&lt;!doctype html&gt;</span>
<span style="color: #007700">&lt;html&gt;</span>
<span style="color: #007700">&lt;body&gt;</span>
<span style="color: #007700">&lt;h1&gt;</span>Download files using the WebTorrent protocol (BitTorrent over WebRTC).<span style="color: #007700">&lt;/h1&gt;</span>

<span style="color: #007700">&lt;form&gt;</span>
  <span style="color: #007700">&lt;label</span> <span style="color: #0000CC">for=</span><span style="background-color: #fff0f0">&quot;torrentId&quot;</span><span style="color: #007700">&gt;</span>Download from a magnet link: <span style="color: #007700">&lt;/label&gt;</span>
  <span style="color: #007700">&lt;input</span> <span style="color: #0000CC">name=</span><span style="background-color: #fff0f0">&quot;torrentId&quot;</span><span style="color: #FF0000; background-color: #FFAAAA">,</span> <span style="color: #0000CC">placeholder=</span><span style="background-color: #fff0f0">&quot;magnet:&quot;</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&amp;dn=Sintel&amp;tr=udp%3A%2F%2Fexplodie.org%3A6969&amp;tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&amp;tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&amp;tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&amp;tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&amp;tr=wss%3A%2F%2Ftracker.btorrent.xyz&amp;tr=wss%3A%2F%2Ftracker.fastcast.nz&amp;tr=wss%3A%2F%2Ftracker.openwebtorrent.com&amp;ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&amp;xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent&quot;</span><span style="color: #007700">&gt;</span>
  <span style="color: #007700">&lt;button</span> <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">&quot;submit&quot;</span><span style="color: #007700">&gt;</span>Download<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;/form&gt;</span>

<span style="color: #007700">&lt;h2&gt;</span>Download Log<span style="color: #007700">&lt;/h2&gt;</span>
<span style="color: #007700">&lt;div</span> <span style="color: #0000CC">class=</span><span style="background-color: #fff0f0">&quot;downloadlog&quot;</span><span style="color: #007700">&gt;&lt;/div&gt;</span>

<span style="color: #007700">&lt;h1&gt;</span>WebTorrent Seeding Example<span style="color: #007700">&lt;/h1&gt;</span>

<span style="color: #007700">&lt;input</span> <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">&quot;file&quot;</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;file-input&quot;</span><span style="color: #007700">&gt;</span>
<span style="color: #007700">&lt;button</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;seed-button&quot;</span><span style="color: #007700">&gt;</span>Seed File<span style="color: #007700">&lt;/button&gt;</span>

<span style="color: #007700">&lt;h2&gt;</span>Upload Log<span style="color: #007700">&lt;/h2&gt;</span>
<span style="color: #007700">&lt;div</span> <span style="color: #0000CC">class=</span><span style="background-color: #fff0f0">&quot;uploadlog&quot;</span><span style="color: #007700">&gt;&lt;/div&gt;</span>

<span style="color: #888888">&lt;!-- Include the latest version of WebTorrent --&gt;</span>
<span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://cdn.jsdelivr.net/npm/webtorrent@latest/webtorrent.min.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
  <span style="color: #888888">/* start download */</span>
  <span style="color: #008800; font-weight: bold">const</span> client <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> WebTorrent()

  client.on(<span style="background-color: #fff0f0">&#39;error&#39;</span>, <span style="color: #008800; font-weight: bold">function</span> (err) {
    console.error(<span style="background-color: #fff0f0">&#39;ERROR: &#39;</span> <span style="color: #333333">+</span> err.message)
  })

  <span style="color: #007020">document</span>.querySelector(<span style="background-color: #fff0f0">&#39;form&#39;</span>).addEventListener(<span style="background-color: #fff0f0">&#39;submit&#39;</span>, <span style="color: #008800; font-weight: bold">function</span> (e) {
    e.preventDefault() <span style="color: #888888">// Prevent page refresh</span>

    <span style="color: #008800; font-weight: bold">const</span> torrentId <span style="color: #333333">=</span> <span style="color: #007020">document</span>.querySelector(<span style="background-color: #fff0f0">&#39;form input[name=torrentId]&#39;</span>).value
    log(<span style="background-color: #fff0f0">&#39;Adding &#39;</span> <span style="color: #333333">+</span> torrentId, <span style="background-color: #fff0f0">&#39;.downloadlog&#39;</span>)
    client.add(torrentId, onTorrent)
  })

  <span style="color: #008800; font-weight: bold">function</span> onTorrent (torrent) {
    log(<span style="background-color: #fff0f0">&#39;Got torrent metadata!&#39;</span>, <span style="background-color: #fff0f0">&#39;.downloadlog&#39;</span>)
    log(
      <span style="background-color: #fff0f0">&#39;Torrent info hash: &#39;</span> <span style="color: #333333">+</span> torrent.infoHash <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&#39; &#39;</span> <span style="color: #333333">+</span>
      <span style="background-color: #fff0f0">&#39;&lt;a href=&quot;&#39;</span> <span style="color: #333333">+</span> torrent.magnetURI <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&#39;&quot; target=&quot;_blank&quot;&gt;[Magnet URI]&lt;/a&gt; &#39;</span> <span style="color: #333333">+</span>
      <span style="background-color: #fff0f0">&#39;&lt;a href=&quot;&#39;</span> <span style="color: #333333">+</span> torrent.torrentFileBlobURL <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&#39;&quot; target=&quot;_blank&quot; download=&quot;&#39;</span> <span style="color: #333333">+</span> torrent.name <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&#39;.torrent&quot;&gt;[Download .torrent]&lt;/a&gt;&#39;</span>, <span style="background-color: #fff0f0">&#39;.downloadlog&#39;</span>
    )

    <span style="color: #888888">// Print out progress every 5 seconds</span>
    <span style="color: #008800; font-weight: bold">const</span> interval <span style="color: #333333">=</span> setInterval(<span style="color: #008800; font-weight: bold">function</span> () {
      log(<span style="background-color: #fff0f0">&#39;Progress: &#39;</span> <span style="color: #333333">+</span> (torrent.progress <span style="color: #333333">*</span> <span style="color: #0000DD; font-weight: bold">100</span>).toFixed(<span style="color: #0000DD; font-weight: bold">1</span>) <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&#39;%&#39;</span>, <span style="background-color: #fff0f0">&#39;.downloadlog&#39;</span>)
    }, <span style="color: #0000DD; font-weight: bold">5000</span>)

    torrent.on(<span style="background-color: #fff0f0">&#39;done&#39;</span>, <span style="color: #008800; font-weight: bold">function</span> () {
      log(<span style="background-color: #fff0f0">&#39;Progress: 100%&#39;</span>, <span style="background-color: #fff0f0">&#39;.downloadlog&#39;</span>)
      clearInterval(interval)
    })

    <span style="color: #888888">// Render all files into to the page</span>
    torrent.files.forEach(<span style="color: #008800; font-weight: bold">function</span> (file) {
      file.appendTo(<span style="background-color: #fff0f0">&#39;.downloadlog&#39;</span>)
      log(<span style="background-color: #fff0f0">&#39;(Blob URLs only work if the file is loaded from a server. &quot;http//localhost&quot; works. &quot;file://&quot; does not.)&#39;</span>, <span style="background-color: #fff0f0">&#39;.downloadlog&#39;</span>)
      file.getBlobURL(<span style="color: #008800; font-weight: bold">function</span> (err, url) {
        <span style="color: #008800; font-weight: bold">if</span> (err) <span style="color: #008800; font-weight: bold">return</span> log(err.message)
        log(<span style="background-color: #fff0f0">&#39;File done.&#39;</span>, <span style="background-color: #fff0f0">&#39;.downloadlog&#39;</span>)
        log(<span style="background-color: #fff0f0">&#39;&lt;a href=&quot;&#39;</span> <span style="color: #333333">+</span> url <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&#39;&quot;&gt;Download full file: &#39;</span> <span style="color: #333333">+</span> file.name <span style="color: #333333">+</span> <span style="background-color: #fff0f0">&#39;&lt;/a&gt;&#39;</span>, <span style="background-color: #fff0f0">&#39;.downloadlog&#39;</span>)
      })
    })
  }

  <span style="color: #008800; font-weight: bold">function</span> log (str, selector) {
    <span style="color: #008800; font-weight: bold">const</span> p <span style="color: #333333">=</span> <span style="color: #007020">document</span>.createElement(<span style="background-color: #fff0f0">&#39;p&#39;</span>)
    p.innerHTML <span style="color: #333333">=</span> str
    <span style="color: #007020">document</span>.querySelector(selector).appendChild(p)
  }
  
  <span style="color: #888888">/* end download */</span>
  
  <span style="color: #888888">/* start upload */</span>
  <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;seed-button&#39;</span>).addEventListener(<span style="background-color: #fff0f0">&#39;click&#39;</span>, <span style="color: #008800; font-weight: bold">function</span>() {
  <span style="color: #008800; font-weight: bold">var</span> fileInput <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;file-input&#39;</span>);
  <span style="color: #008800; font-weight: bold">var</span> file <span style="color: #333333">=</span> fileInput.files[<span style="color: #0000DD; font-weight: bold">0</span>];

  <span style="color: #008800; font-weight: bold">if</span> (file) {
    <span style="color: #888888">//var client = new WebTorrent(); // Note it is already declared above</span>

    client.seed(file, <span style="color: #008800; font-weight: bold">function</span>(torrent) {
      <span style="color: #008800; font-weight: bold">var</span> infoHash <span style="color: #333333">=</span> torrent.infoHash;
      <span style="color: #008800; font-weight: bold">var</span> magnetURI <span style="color: #333333">=</span> torrent.magnetURI;

      log(<span style="background-color: #fff0f0">&#39;File is being seeded with Info Hash: &#39;</span> <span style="color: #333333">+</span> infoHash, <span style="background-color: #fff0f0">&#39;.uploadlog&#39;</span>);
      log(<span style="background-color: #fff0f0">&#39;Magnet URI: &#39;</span> <span style="color: #333333">+</span> magnetURI, <span style="background-color: #fff0f0">&#39;.uploadlog&#39;</span>);

      <span style="color: #888888">// Perform additional actions if needed</span>

      <span style="color: #888888">//client.destroy(); // Clean up the WebTorrent client</span>
    });
  }
});
  
  <span style="color: #888888">/* end upload */</span>
<span style="color: #007700">&lt;/script&gt;</span>
<span style="color: #007700">&lt;/body&gt;</span>
<span style="color: #007700">&lt;/html&gt;</span>
</pre></div>
<!-- End This Source Code -->

<!-- Include the latest version of WebTorrent -->
<script src="https://cdn.jsdelivr.net/npm/webtorrent@latest/webtorrent.min.js"></script>

<script>
  /* start download */
  const client = new WebTorrent()

  client.on('error', function (err) {
    console.error('ERROR: ' + err.message)
  })

  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault() // Prevent page refresh

    const torrentId = document.querySelector('form input[name=torrentId]').value
    log('Adding ' + torrentId, '.downloadlog')
    client.add(torrentId, onTorrent)
  })

  function onTorrent (torrent) {
    log('Got torrent metadata!', '.downloadlog')
    log(
      'Torrent info hash: ' + torrent.infoHash + ' ' +
      '<a href="' + torrent.magnetURI + '" target="_blank">[Magnet URI]</a> ' +
      '<a href="' + torrent.torrentFileBlobURL + '" target="_blank" download="' + torrent.name + '.torrent">[Download .torrent]</a>', '.downloadlog'
    )

    // Print out progress every 5 seconds
    const interval = setInterval(function () {
      log('Progress: ' + (torrent.progress * 100).toFixed(1) + '%', '.downloadlog')
    }, 5000)

    torrent.on('done', function () {
      log('Progress: 100%', '.downloadlog')
      clearInterval(interval)
    })

    // Render all files into to the page
    torrent.files.forEach(function (file) {
      file.appendTo('.downloadlog')
      log('(Blob URLs only work if the file is loaded from a server. "http//localhost" works. "file://" does not.)', '.downloadlog')
      file.getBlobURL(function (err, url) {
        if (err) return log(err.message)
        log('File done.', '.downloadlog')
        log('<a href="' + url + '">Download full file: ' + file.name + '</a>', '.downloadlog')
      })
    })
  }

  function log (str, selector) {
    const p = document.createElement('p')
    p.innerHTML = str
    document.querySelector(selector).appendChild(p)
  }
  
  /* end download */
  
  /* start upload */
  document.getElementById('seed-button').addEventListener('click', function() {
  var fileInput = document.getElementById('file-input');
  var file = fileInput.files[0];

  if (file) {
    //var client = new WebTorrent(); // Note it is already declared above

    client.seed(file, function(torrent) {
      var infoHash = torrent.infoHash;
      var magnetURI = torrent.magnetURI;

      log('File is being seeded with Info Hash: ' + infoHash, '.uploadlog');
      log('Magnet URI: ' + magnetURI, '.uploadlog');

      // Perform additional actions if needed

      //client.destroy(); // Clean up the WebTorrent client
    });
  }
});
  
  /* end upload */
</script>