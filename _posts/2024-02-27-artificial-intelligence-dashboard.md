---
layout: post
title: Artificial Intelligence Dashboard
category: tools
tags: [tools, widget, web, artificial intelligence, ai, applications]
featuredimage: https://pbs.twimg.com/media/F3t_GsCboAADF_m?format=png
description: Collection of AI tools to help us.
canonicalurl: https://0fajarpurnama0.github.io/tools/2024/02/27/artificial-intelligence-dashboard
---
<!-- List of Artificial Intelligence Applications Start -->
<h2>Artificial Intelligence Applications</h2>
<div class="app-dashboard-grid">
  {% for item in site.data.artificial_intelligence_dashboard.applications %}
  <a href="{{ item.link }}" target="_blank" class="grid-item-6-3">
    <figure>
      <img src="{{ item.icon }}" alt="{{ item.description }}" />
      <figcaption>{{ item.name }}</figcaption>
    </figure>
  </a>
  {% endfor %}
</div>
<!-- List of Artificial Intelligence Applications End -->