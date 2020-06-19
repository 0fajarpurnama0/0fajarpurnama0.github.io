---
layout: post
title: AirSwap Basic Embed
category: cryptocurrency
---

<h2>Air Swap Instant</h2>

<p>Call the following JavaScript:</p>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://cdn.airswap.io/airswap-instant-widget.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
</pre></div>

<script src="https://cdn.airswap.io/airswap-instant-widget.js"></script>

<p>Call Air Swap Instant:</p>
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;myAirSwapInstant()&quot;</span><span style="color: #007700">&gt;</span>AirSwapInstant<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;script&gt;</span>
  <span style="color: #008800; font-weight: bold">function</span> myAirSwapInstant(){
    <span style="color: #007020">window</span>.AirSwapInstant.render(
      {
        onClose<span style="color: #333333">:</span> <span style="color: #008800; font-weight: bold">function</span> () {
          console.info(<span style="background-color: #fff0f0">&#39;Widget closed.&#39;</span>)
        },
      },
      <span style="background-color: #fff0f0">&#39;body&#39;</span>,
    )
  }
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>
<br />
<button onclick="myAirSwapInstant()">AirSwapInstant</button>
<script>
  function myAirSwapInstant(){
    window.AirSwapInstant.render(
      {
        onClose: function () {
          console.info('Widget closed.')
        },
      },
      'body',
    )
  }
</script>

<h2>Air Swap Trader</h2>

<p>Call the following JavaScript:</p>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://cdn.airswap.io/1.3.0/airswap-trader.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
</pre></div>

<script src="https://cdn.airswap.io/1.3.0/airswap-trader.js"></script>

<h2>Call Air Swap Trader</h2>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;myAirSwapTrader()&quot;</span><span style="color: #007700">&gt;</span>AirSwapInstant<span style="color: #007700">&lt;/button&gt;</span>
<span style="color: #007700">&lt;script&gt;</span>
  <span style="color: #008800; font-weight: bold">function</span> myAirSwapTrader(){
    <span style="color: #007020">window</span>.AirSwapTrader({
      onCreate<span style="color: #333333">:</span> (order, cid) <span style="color: #333333">=&gt;</span> {
        console.log(<span style="background-color: #fff0f0">&#39;Order created!&#39;</span>)
      },
      onClose<span style="color: #333333">:</span> (transactionHash) <span style="color: #333333">=&gt;</span> {
        console.log(<span style="background-color: #fff0f0">&#39;Widget closed&#39;</span>)
      },
  	}).render(<span style="background-color: #fff0f0">&#39;body&#39;</span>)
  }
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>
<br />
<button onclick="myAirSwapTrader()">AirSwapInstant</button>
<script>
  function myAirSwapTrader(){
    window.AirSwapTrader({
      onCreate: (order, cid) => {
        console.log('Order created!')
      },
      onClose: (transactionHash) => {
        console.log('Widget closed')
      },
  	}).render('body')
  }
</script>

<p>Source: <a href="https://docs.airswap.io/take-liquidity/embed-airswap">https://docs.airswap.io/take-liquidity/embed-airswap</a>