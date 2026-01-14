---
layout: post
title: Fajar Purnama Training Plan
categories: opinion
tags: [opinion, training, practice, reality, between, fiction]
---
<div class="filter-controls" style="margin-bottom: 20px;">
  <label for="visibilityFilter">Filter by Visibility:</label>
  <select id="visibilityFilter" onchange="filterTraining()">
    <option value="all">Show All</option>
    
    {% assign all_visibilities = site.data.training_module.mytrainingmodule | map: "visibility" | uniq %}
    {% for v in all_visibilities %}
      <option value="{{ v }}">{{ v | capitalize }}</option>
    {% endfor %}
  </select>
</div>

<div class="grid-post-all" id="trainingGrid">
{% for item in site.data.training_module.mytrainingmodule %}
    <div class="grid-post-item" data-visibility="{{ item.visibility }}">
        <h3><a href="{{ item.link }}">{{ item.title }}</a></h3>
        <p>Tier: {{ item.tier }}</p>
        <p>Visibility: {{ item.visibility }}</p>
    </div>
{% endfor %}
</div>

<script>
function filterTraining() {
  // 1. Get the selected value from dropdown
  var dropdown = document.getElementById("visibilityFilter");
  var selectedValue = dropdown.value;

  // 2. Get all grid items
  var items = document.querySelectorAll(".grid-post-item");

  // 3. Loop through them and hide/show based on match
  items.forEach(function(item) {
    var itemVisibility = item.getAttribute("data-visibility");

    if (selectedValue === "all" || itemVisibility === selectedValue) {
      item.style.display = ""; // Reset to default (show)
    } else {
      item.style.display = "none"; // Hide
    }
  });
}
</script>