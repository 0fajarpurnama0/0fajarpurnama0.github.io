---
layout: post
title: O3Swap Widget
description: A widget for O3Swap.
featuredimage: https://o3swap.com/assets/images/app/logo.png
category: tools
tags: [tools, widget, web, embed, html css, js, O3 Swap]
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/09/o3swap-widget
---
<!-- 1. Place this css tag on the <head> of your page: -->

<link rel="stylesheet" href="https://o3swap.com/widget/styles.css" />

<!-- 2. Place this script tag on the <head> of your page: -->

<script src="https://o3swap.com/widget/index.js"></script>

<!-- 3. Place this o3swap-widget tag at the location where the o3swap Widget will be: -->

<o3swap-widget
  language="en"
  direction="horizontal"
  amount="0.01"
  srcchain="1"
  srcasset="0x0000000000000000000000000000000000000000"
  dstchain=""
  dstasset=""
  theme="dark"
  colors='{
  "primary-color":"#AEFA61",
  "secondary-color":"#293D36"
  }'
>
</o3swap-widget>

{% highlight html %}
    <!-- 1. Place this css tag on the <head> of your page: -->

    <link rel="stylesheet" href="https://o3swap.com/widget/styles.css" />

    <!-- 2. Place this script tag on the <head> of your page: -->

    <script src="https://o3swap.com/widget/index.js"></script>

    <!-- 3. Place this o3swap-widget tag at the location where the o3swap Widget will be: -->

    <o3swap-widget
      language="en"
      direction="horizontal"
      amount="0.01"
      srcchain="1"
      srcasset="0x0000000000000000000000000000000000000000"
      dstchain=""
      dstasset=""
      theme="dark"
      colors='{
      "primary-color":"#AEFA61",
      "secondary-color":"#293D36"
      }'
    >
    </o3swap-widget>   
{% endhighlight %}