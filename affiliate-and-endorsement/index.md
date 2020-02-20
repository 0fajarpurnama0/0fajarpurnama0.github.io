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