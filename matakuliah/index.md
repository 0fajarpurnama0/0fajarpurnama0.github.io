---
layout: post
title: Jadwal Saya dan Daftar Mata Kuliah Yang Pernah Saya Ajar
---
<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FMakassar&title=Fajar%20Purnama%20Fixed%20Working%20Schedule%20(login%20to%20your%20unud.ac.id%20calendar%20first%20then%20click%20the%20link%20below%20to%20see%20details)&src=ZmFqYXJwdXJuYW1hQHVudWQuYWMuaWQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kb25lc2lhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%2333B679&color=%230B8043" style="border:solid 1px #777; width: 100%; height: 100vh;" frameborder="0" scrolling="no"></iframe>
<a href="https://calendar.google.com/calendar/embed?src=fajarpurnama%40unud.ac.id&ctz=Asia%2FMakassar">https://calendar.google.com/calendar/embed?src=fajarpurnama%40unud.ac.id&ctz=Asia%2FMakassar</a>

<ul>
  {% assign current_dir = page.path | remove: "index.md" %}

  {% assign pages = site.pages | sort: 'title' %}

  {% for item in pages %}
    {% if item.path contains current_dir and item.path != page.path %}

      {% assign relative_path = item.path | remove_first: current_dir %}
      
      {% assign slash_count = relative_path | split: '/' | size %}

      {% if relative_path contains '/index.md' %}
        {% if slash_count == 2 %}
           <li>
             <strong>📂 <a href="{{ item.url }}">{{ item.title | default: item.path }}</a></strong>
           </li>
        {% endif %}
      
      {% elsif slash_count == 1 %}
        <li>
          📄 <a href="{{ item.url }}">{{ item.title | default: item.path }}</a>
        </li>
      {% endif %}

    {% endif %}
  {% endfor %}
</ul>
