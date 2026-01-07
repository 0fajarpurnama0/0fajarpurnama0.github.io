---
layout: telegram_mini_apps
title: Cryptocurrency Dashboard
category: telegram_mini_app
tags: [telegram mini app, tools, widget, web, blog, crypto, defi, blockchain, news, information, dashboard]
featuredimage: /assets/images/icon/logo-0FP0.png
description: Dashboard to dive into cryptoccurency for my entertainment and hopefully others can enjoy as well.
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/09/30/cryptocurrency-dashboard
---
<style>
  .wrapper {
    display: flex;
  }

  .wrapper > * {
    width: 100%;
  }

  .grid-container-6-3 {
    display: grid;
    grid-template-columns: auto auto;
    background-color: black;
    padding: 5px;
  }

  @media screen and (min-width: 1000px) {
	  .grid-container-6-3 {
		  display: grid;
		  grid-template-columns: auto auto auto auto auto auto;
	  }
  }

  @media screen and (min-width: 800px) and (max-width: 1000px) {
	  .grid-container-6-3 {
		  display: grid;
		  grid-template-columns: auto auto auto auto auto;
	  }
  }

  @media screen and (min-width: 600px) and (max-width: 800px) {
	  .grid-container-6-3 {
		  display: grid;
		  grid-template-columns: auto auto auto auto;
	  }
  }

  @media screen and (min-width: 400px) and (max-width: 600px) {
	  .grid-container-6-3 {
		  display: grid;
		  grid-template-columns: auto auto auto;
	  }
  }

  .grid-item-6-3 {
    background-color: lightgreen;
    border: 2px solid black;
  }

  .grid-item-6-3 > figure > figcaption {
    text-align: center;
  }

  .grid-item-6-3 > figure > img {
    max-height:1.5em;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .grid-item-6-3:hover {
    background-color: yellow;
  }
</style>

<!-- List of Crypto Information With Daily Login Start -->
<h2>Information With Daily Logins Reward</h2>
<div class="grid-container-6-3">
  {% for item in site.data.cryptocurrency_dashboard.daily_login %}
  <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
    <figure>
      <img src="{{ item.icon }}" alt="{{ item.description }}" />
      <figcaption>{{ item.name }}</figcaption>
    </figure>
  </a>
  {% endfor %}
</div>
<!-- List of Crypto Information With Daily Login End -->

<!-- List of crypto project database Start -->
<h2>Crypto Project Database</h2>
<div class="grid-container-6-3">
  {% for item in site.data.cryptocurrency_dashboard.crypto_project_database %}
  <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
    <figure>
    <img src="{{ item.icon }}" alt="{{ item.description }}" />
    <figcaption>{{ item.name }}</figcaption>
    </figure>
  </a>
  {% endfor %}
</div>
<br />
<!-- List of crypto project database End -->

<!-- List of Telegram Applications Start -->
<h2>Telegram Applications</h2>
<div class="grid-container-6-3">
  {% for item in site.data.cryptocurrency_dashboard.telegram_apps %}
  <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
    <figure>
    <img src="{{ item.icon }}" alt="{{ item.description }}"/>
    <figcaption>{{ item.name }}</figcaption>
    </figure>
  </a>
  {% endfor %}
</div>
<br />
<!-- List of Telegram Applications End -->

<!-- List of crypto wallet Start -->
<h2>Crypto Wallet</h2>
<div class="grid-container-6-3">
  {% for item in site.data.cryptocurrency_dashboard.crypto_wallets %}
  <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
    <figure>
    <img src="{{ item.icon }}" alt="{{ item.description }}" />
    <figcaption>{{ item.name }}</figcaption>
    </figure>
  </a>
  {% endfor %}
</div>
<br />
<!-- List of crypto wallet End -->

<!-- List of crypto portfolio dashboard Start -->
<h2>Crypto Portfolio Dashboard</h2>
<div class="grid-container-6-3">
  {% for item in site.data.cryptocurrency_dashboard.portfolio_dashboards %}
    <a href="{{ item[1].website }}" target="_blank" class="grid-item-6-3">
      <figure>
      <img src="{{ item[1].icon }}" alt="{{ item[1].description }}" />
      <figcaption>{{ item[1].name }}</figcaption>
      </figure>
    </a>
  {% endfor %}
</div>
<br />
<!-- List of crypto portfolio dashboard End -->

<!-- List of crypto blockchain explorers Start -->
<h2>Crypto Blockchain Explorers</h2>
<div class="grid-container-6-3">
  {% for item in site.data.cryptocurrency_dashboard.blockchain_explorers %}
    <a href="{{ item[1].website }}" target="_blank" class="grid-item-6-3">
      <figure>
      <img src="{{ item[1].icon }}" alt="{{ item[1].description }}" />
      <figcaption>{{ item[1].name }}</figcaption>
      </figure>
    </a>
  {% endfor %}
</div>
<br />
<!-- List of crypto blockchain explorers End -->

<!-- List of crypto social media Start -->
<h2>Crypto Social Medias</h2>
<div class="grid-container-6-3">
  {% for item in site.data.cryptocurrency_dashboard.crypto_social_media %}
  <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
    <figure>
    <img src="{{ item.icon }}" alt="{{ item.description }}" />
    <figcaption>{{ item.name }}</figcaption>
    </figure>
  </a>
  {% endfor %}
</div>
<br />
<!-- List of crypto social media End -->

<!-- List of crypto centralized exchanges Start -->
<h2>Crypto Centralized Exchanges</h2>
<div class="grid-container-6-3">
  {% for item in site.data.cryptocurrency_dashboard.crypto_cexs %}
  <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
    <figure>
    <img src="{{ item.icon }}" alt="{{ item.description }}" />
    <figcaption>{{ item.name }}</figcaption>
    </figure>
  </a>
  {% endfor %}
</div>
<br />
<!-- List of crypto centralized exchanges End -->

<!-- List of testnet faucets Start -->
<h2>Testnet Faucets</h2>
<div class="grid-container-6-3">
  {% for item in site.data.cryptocurrency_dashboard.testnet_faucets %}
  <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
    <figure>
    <img src="{{ item.icon }}" alt="{{ item.description }}" />
    <figcaption>{{ item.name }}</figcaption>
    </figure>
  </a>
  {% endfor %}
</div>
<br />
<!-- List of testnet faucets End -->

<!-- List of Other Cryptos Start -->
<h2>Other Cryptos</h2>
<div class="grid-container-6-3">
  {% for item in site.data.cryptocurrency_dashboard.crypto_others %}
  <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
    <figure>
    <img src="{{ item.icon }}" alt="{{ item.description }}" />
    <figcaption>{{ item.name }}</figcaption>
    </figure>
  </a>
  {% endfor %}
</div>
<br />
<!-- List of Other Cryptos End -->