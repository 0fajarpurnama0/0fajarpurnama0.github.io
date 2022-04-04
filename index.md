---
layout: post
title: All Posts
description: All the post on this site.
---
<p>Welcome to my personal blog! Click the heading hyperlinks to list all posts under that category! Click anywhere inside the slideshow to open the featured article! You can also manually scroll to the slideshow through the left and right pointer buttons! Who am I? Check my [Curriculum Vitae](cv)!</p>

# Personal Careers

## [Cryptocurrency](cryptocurrency)

<div class="slideshow-container">
  {% for post in site.categories.cryptocurrency %}
  <div class="cryptocurrency fade">
    <a href="{{ post.url }}" target="_blank">
      <h3>{{ post.title }}</h3>
      <img src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" style="width:100%">
      <p>{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('cryptocurrency', -1)">&#10094;</a>
    <a class="next" onclick="changeSlides('cryptocurrency', 1)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Finance](finance)

<div class="slideshow-container">
  {% for post in site.categories.finance %}
  <div class="finance fade">
    <a href="{{ post.url }}" target="_blank">
      <h3>{{ post.title }}</h3>
      <img src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" style="width:100%">
      <p>{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('finance', -1)">&#10094;</a>
    <a class="next" onclick="changeSlides('finance', 1)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Income Reports](blogging-income)

<div class="slideshow-container">
  {% for post in site.tags.blogging %}
  <div class="blogging fade">
    <a href="{{ post.url }}" target="_blank">
      <h3>{{ post.title }}</h3>
      <img src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" style="width:100%">
      <p>{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('blogging', -1)">&#10094;</a>
    <a class="next" onclick="changeSlides('blogging', 1)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Computers and Internet](internet)

<div class="slideshow-container">
  {% for post in site.categories.internet %}
  <div class="internet fade">
    <a href="{{ post.url }}" target="_blank">
      <h3>{{ post.title }}</h3>
      <img src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" style="width:100%">
      <p>{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('internet', -1)">&#10094;</a>
    <a class="next" onclick="changeSlides('internet', 1)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Penetration Testing and Hacking](pentest)

<div class="slideshow-container">
  {% for post in site.categories.pentest %}
  <div class="pentest fade">
    <a href="{{ post.url }}" target="_blank">
      <h3>{{ post.title }}</h3>
      <img src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" style="width:100%">
      <p>{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('pentest', -1)">&#10094;</a>
    <a class="next" onclick="changeSlides('pentest', 1)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Trading Signals](tradingsignals)

<div class="slideshow-container">
  {% for post in site.categories.tradingsignals %}
  <div class="tradingsignals fade">
    <a href="{{ post.url }}" target="_blank">
      <h3>{{ post.title }}</h3>
      <img src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" style="width:100%">
      <p>{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('tradingsignals', -1)">&#10094;</a>
    <a class="next" onclick="changeSlides('tradingsignals', 1)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Goods and Services](service)

<div class="slideshow-container">
  {% for post in site.categories.service %}
  <div class="service fade">
    <a href="{{ post.url }}" target="_blank">
      <h3>{{ post.title }}</h3>
      <img src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" style="width:100%">
      <p>{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('service', -1)">&#10094;</a>
    <a class="next" onclick="changeSlides('service', 1)">&#10095;</a>
  </div>
  {% endfor %}
</div>

# Academic Careers

## [Bachelors](bachelor)

<div class="slideshow-container">
  {% for post in site.categories.bachelor %}
  <div class="bachelor fade">
    <a href="{{ post.url }}" target="_blank">
      <h3>{{ post.title }}</h3>
      <img src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" style="width:100%">
      <p>{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('bachelor', -1)">&#10094;</a>
    <a class="next" onclick="changeSlides('bachelor', 1)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Masters](masters)

<div class="slideshow-container">
  {% for post in site.categories.masters %}
  <div class="bachelor fade">
    <a href="{{ post.url }}" target="_blank">
      <h3>{{ post.title }}</h3>
      <img src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" style="width:100%">
      <p>{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('masters', -1)">&#10094;</a>
    <a class="next" onclick="changeSlides('masters', 1)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Doctoral](doctoral)

<div class="slideshow-container">
  {% for post in site.categories.doctoral %}
  <div class="doctoral fade">
    <a href="{{ post.url }}" target="_blank">
      <h3>{{ post.title }}</h3>
      <img src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" style="width:100%">
      <p>{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('doctoral', -1)">&#10094;</a>
    <a class="next" onclick="changeSlides('doctoral', 1)">&#10095;</a>
  </div>
  {% endfor %}
</div>

# Everything Else

## [Stories](story)

<div class="slideshow-container">
  {% for post in site.categories.story %}
  <div class="story fade">
    <a href="{{ post.url }}" target="_blank">
      <h3>{{ post.title }}</h3>
      <img src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" style="width:100%">
      <p>{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('story', -1)">&#10094;</a>
    <a class="next" onclick="changeSlides('story', 1)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Quotes](quote)

<div class="slideshow-container">
  {% for post in site.categories.quote %}
  <div class="quote fade">
    <a href="{{ post.url }}" target="_blank">
      <h3>{{ post.title }}</h3>
      <img src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" style="width:100%">
      <p>{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('quote', -1)">&#10094;</a>
    <a class="next" onclick="changeSlides('quote', 1)">&#10095;</a>
  </div>
  {% endfor %}
</div>

## [Miscellaneous](misc)

<div class="slideshow-container">
  {% for post in site.categories.misc %}
  <div class="misc fade">
    <a href="{{ post.url }}" target="_blank">
      <h3>{{ post.title }}</h3>
      <img src="{{ post.featuredimage }}" onerror="this.onerror=null;this.src='https://images.hive.blog/DQmZUkMewxN4U6i7gJQuyTUkGDVy2BY45mraGnBUQuxorv6/evm-rpc-list.png';" style="width:100%">
      <p>{{ post.description }}</p>
    </a>
    <a class="prev" onclick="changeSlides('misc', -1)">&#10094;</a>
    <a class="next" onclick="changeSlides('misc', 1)">&#10095;</a>
  </div>
  {% endfor %}
</div>

- [Cryptocurrency 101 For Users](cryptocurrency-101-user)
- [My Coding Lists](codinglist)
- [Get Good Deals](deals)
- [Affiliates Endorsements Referrals](referral)
- [To Do List](todolist)
- [My Twitter Timeline](0fajarpurnama0-twitter-timeline)
- [My Facebook Timeline](0fajarpurnama0-facebook-timeline)
- [My Instagram Timeline](0fajarpurnama0-instagram-timeline)
- [Sample Markdowns](sample)
- [Source code of this page](http://mellow.link/5rn2l)
- [Source code of these pages!](http://mellow.link/5oEot)

## [Contact Me](channel-and-website)

<script>
  let slideIndex = 0;
  let mySlides = ["cryptocurrency", "finance", "blogging", "internet", "pentest", "tradingsignals", "service", "bachelor", "masters", "doctoral", "story", "quote", "misc"]

  for (let i = 0; i < mySlides.length; i++) {
    showSlides(mySlides[i]);
  }

  function changeSlides(theslides, n){
    let slides = document.getElementsByClassName(theslides);
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex += n;
    if ((n > 0) && (slideIndex > slides.length)) {slideIndex = 1}
    if ((n < 0) && (slideIndex == 0)) {slideIndex = slides.length}
    slides[slideIndex-1].style.display = "block";  
  }

  function showSlides(theslides) {
    let slides = document.getElementsByClassName(theslides);
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(function() {showSlides(theslides);}, 2000);
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
</style>