---
layout: post
title: All Post Compressed
description: All post slideshow of each categories.
permalink: /compressed
---
<p>Welcome to my personal blog! Click the heading hyperlinks to list all posts under that category! Click anywhere inside the slideshow to open the featured article! You can also manually scroll to the slideshow through the left and right pointer buttons! Who am I? Check my Curriculum Vitae!</p>

<script>
  let slideIndex = [];
  let mySlides = []
</script>
{% for category in site.categories %}
  <script>
    slideIndex.push(0);
    mySlides.push("{{ category[0] }}");
    document.querySelectorAll('.{{ category[0] }}').style.display = "none";
  </script>
{% endfor %}

{% for category in site.categories %}
## [{{ category[0] }}]({{ category[0] }})
<div class="slideshow-container">
  {% for post in category[1] %}
  <div class="{{ category[0] }} fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('{{ category[0] }}', -1, 0)">&#10094;</a>
    <a class="next" onclick="changeSlides('{{ category[0] }}', 1, 0)">&#10095;</a>
  </div>
  {% endfor %}
</div>
{% endfor %}

<script>
  for (let i = 0; i < mySlides.length; i++) {
    showSlides(mySlides[i], i);
  }

  function changeSlides(theslides, n, j){
    let slides = document.getElementsByClassName(theslides);
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex[j] += n;
    if ((n > 0) && (slideIndex[j] > slides.length)) {slideIndex[j] = 1}
    if ((n < 0) && (slideIndex[j] == 0)) {slideIndex[j] = slides.length}
    slides[slideIndex[j]-1].style.display = "block";  
  }

  function showSlides(theslides, j) {
    let slides = document.getElementsByClassName(theslides);
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex[j]++;
    if (slideIndex[j] > slides.length) {slideIndex[j] = 1}    
    slides[slideIndex[j]-1].style.display = "block";  
    setTimeout(function() {showSlides(theslides, j);}, 2000);
    // Change image every 2 seconds
  }
</script>

<style>
  * {box-sizing: border-box;}
  body {font-family: Verdana, sans-serif;}
  img {vertical-align: middle;}

  /* Slideshow container */
  .slideshow-container {
    max-width: 100%;
    position: relative;
    margin: auto;
  }

  .active {
    background-color: #717171;
  }

  /* Fading animation */
  .fade {
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
  }

  /* Next & previous buttons */
  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    color: yellow;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }

  /* Position the "next button" to the right */
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .prev {
    left: 0;
    border-radius: 3px 0 0 3px;
  }

  /* On hover, add a grey background color */
  .prev:hover, .next:hover {
    background-color: #f1f1f1;
    color: black;
  }

  h1, h2, h3 {
    text-align: center;
  }

  .post-title {
    height: 3em;
  }

  .post-description {
    height: 4em;
  }

  .featured-image {
    height: 50vh;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .random-quotes-widget {
    display: none;
  }
</style>

- [Cryptocurrency 101 For Users](cryptocurrency-101-user)
- [Get Good Deals](deals)
- [Affiliates Endorsements Referrals](referral)
- [To Do List](todolist)
- [Sample Markdowns](sample)
- [Source code of this page](http://mellow.link/5rn2l)
- [Source code of these pages!](http://mellow.link/5oEot)

<!-- 
# Personal Careers

## [Cryptocurrency](cryptocurrency)

<div class="slideshow-container">
  {% for post in site.categories.cryptocurrency %}
  <div class="cryptocurrency fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('cryptocurrency', -1, 0)">&#10094;</a>
    <a class="next" onclick="changeSlides('cryptocurrency', 1, 0)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Finance](finance)

<div class="slideshow-container">
  {% for post in site.categories.finance %}
  <div class="finance fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('finance', -1, 1)">&#10094;</a>
    <a class="next" onclick="changeSlides('finance', 1, 1)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Income Reports](blogging-income)

<div class="slideshow-container">
  {% for post in site.tags.blogging %}
  <div class="blogging fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('blogging', -1, 2)">&#10094;</a>
    <a class="next" onclick="changeSlides('blogging', 1, 2)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Computers and Internet](internet)

<div class="slideshow-container">
  {% for post in site.categories.internet %}
  <div class="internet fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('internet', -1, 3)">&#10094;</a>
    <a class="next" onclick="changeSlides('internet', 1, 3)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Penetration Testing and Hacking](pentest)

<div class="slideshow-container">
  {% for post in site.categories.pentest %}
  <div class="pentest fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('pentest', -1, 4)">&#10094;</a>
    <a class="next" onclick="changeSlides('pentest', 1, 4)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Trading Signals](tradingsignals)

<div class="slideshow-container">
  {% for post in site.categories.tradingsignals %}
  <div class="tradingsignals fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('tradingsignals', -1, 5)">&#10094;</a>
    <a class="next" onclick="changeSlides('tradingsignals', 1, 5)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Goods and Services](service)

<div class="slideshow-container">
  {% for post in site.categories.service %}
  <div class="service fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('service', -1, 6)">&#10094;</a>
    <a class="next" onclick="changeSlides('service', 1, 6)">&#10095;</a>
  </div>
  {% endfor %}
</div>

# Academic Careers

## [Bachelors](bachelor)

<div class="slideshow-container">
  {% for post in site.categories.bachelor %}
  <div class="bachelor fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('bachelor', -1, 7)">&#10094;</a>
    <a class="next" onclick="changeSlides('bachelor', 1, 7)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Masters](masters)

<div class="slideshow-container">
  {% for post in site.categories.masters %}
  <div class="masters fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('masters', -1, 8)">&#10094;</a>
    <a class="next" onclick="changeSlides('masters', 1, 8)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Doctoral](doctoral)

<div class="slideshow-container">
  {% for post in site.categories.doctoral %}
  <div class="doctoral fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('doctoral', -1, 9)">&#10094;</a>
    <a class="next" onclick="changeSlides('doctoral', 1, 9)">&#10095;</a>
  </div>
  {% endfor %}
</div>

# Everything Else

## [Stories](story)

<div class="slideshow-container">
  {% for post in site.categories.story %}
  <div class="story fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('story', -1, 10)">&#10094;</a>
    <a class="next" onclick="changeSlides('story', 1, 10)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Quotes](quote)

<div class="slideshow-container">
  {% for post in site.categories.quote %}
  <div class="quote fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('quote', -1, 11)">&#10094;</a>
    <a class="next" onclick="changeSlides('quote', 1, 11)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Miscellaneous](misc)

<div class="slideshow-container">
  {% for post in site.categories.misc %}
  <div class="misc fade">
    <a href="{{ post.url }}" target="_blank">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="featured-image" src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" />
      <p class="post-description">{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('misc', -1, 12)">&#10094;</a>
    <a class="next" onclick="changeSlides('misc', 1, 12)">&#10095;</a>
  </div>
  {% endfor %}
</div>

- [Cryptocurrency 101 For Users](cryptocurrency-101-user)
- [Get Good Deals](deals)
- [Affiliates Endorsements Referrals](referral)
- [To Do List](todolist)
- [Sample Markdowns](sample)
- [Source code of this page](http://mellow.link/5rn2l)
- [Source code of these pages!](http://mellow.link/5oEot)

## [Contact Me](channel-and-website)

<script>
  let slideIndex = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let mySlides = ["cryptocurrency", "finance", "blogging", "internet", "pentest", "tradingsignals", "service", "bachelor", "masters", "doctoral", "story", "quote", "misc"]

  for (let i = 0; i < mySlides.length; i++) {
    showSlides(mySlides[i], i);
  }

  function changeSlides(theslides, n, j){
    let slides = document.getElementsByClassName(theslides);
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex[j] += n;
    if ((n > 0) && (slideIndex[j] > slides.length)) {slideIndex[j] = 1}
    if ((n < 0) && (slideIndex[j] == 0)) {slideIndex[j] = slides.length}
    slides[slideIndex[j]-1].style.display = "block";  
  }

  function showSlides(theslides, j) {
    let slides = document.getElementsByClassName(theslides);
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex[j]++;
    if (slideIndex[j] > slides.length) {slideIndex[j] = 1}    
    slides[slideIndex[j]-1].style.display = "block";  
    setTimeout(function() {showSlides(theslides, j);}, 2000);
    // Change image every 2 seconds
  }
</script>

<style>
  * {box-sizing: border-box;}
  body {font-family: Verdana, sans-serif;}
  .cryptocurrency, .finance, .blogging, .internet, .pentest, .tradingsignals, .service, .bachelor, .masters, .doctoral, .story, .quote, .misc {display: none;}
  img {vertical-align: middle;}

  /* Slideshow container */
  .slideshow-container {
    max-width: 100%;
    position: relative;
    margin: auto;
  }

  .active {
    background-color: #717171;
  }

  /* Fading animation */
  .fade {
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
  }

  /* Next & previous buttons */
  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    color: yellow;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }

  /* Position the "next button" to the right */
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .prev {
    left: 0;
    border-radius: 3px 0 0 3px;
  }

  /* On hover, add a grey background color */
  .prev:hover, .next:hover {
    background-color: #f1f1f1;
    color: black;
  }

  h1, h2, h3 {
    text-align: center;
  }

  .post-title {
    height: 3em;
  }

  .post-description {
    height: 4em;
  }

  .featured-image {
    height: 50vh;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .random-quotes-widget {
    display: none;
  }
</style>
-->