---
layout: docs
title: Affiliate and Endorsement
---

docs: {{ docs.categories }}
docs loop:
{% for i in docs.categories.referral %}
* [{{ i.url }}]({{ i.title }})
{% endfor %}

page: {{ page.categories }}
page loop:
{% for i in page.categories.referral %}
* [{{ i.url }}]({{ i.title }})
{% endfor %}

site: {{ site.categories }}
site loop:
{% for i in site.categories.referral %}
* [{{ i.url }}]({{ i.title }})
{% endfor %}

sitepages: {{ site.pages }}
sitedocuments: {{ site.documents }}

<script>
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    document.getElementById("name").innerHTML = data.referral[0].name;
  }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();
</script>

<p id="name"></p>