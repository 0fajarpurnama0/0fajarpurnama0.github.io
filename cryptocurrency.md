---
layout: post
title: Cryptocurrency
---

## Blockchain

A ledger system based on cryptography that is difficult to alter, therefore supporting the honesty of the ledger.

### Government Digital Blockchain Currency

*   Closed
*   Government Centralized / Controlled
*   Censorable

### Cryptocurrency Generally

*   Open
*   Decentralized
*   Uncensorable
*   Borderless

#### Bitcoin

The father of cryptocurrency and the first known blockchain technology.

#### Ethereum

One of the coins that supports decentralized application development.

#### Monero

One of the privacy coins

#### Other cryptocurrency with their own unique features.

{% for post in site.categories.cryptocurrency %}
**[{{ post.title }}]({{ post.url }})**

![{{ post.featuredimage }}]({{ post.featuredimage }})

{{ post.description }}

**Keywords:** {{ post.tags }}
{% endfor %}