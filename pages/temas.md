---
layout: single
title: Temas
permalink: /temas
toc: false
---

{% comment %}
{% for page in site.pages %}
{{ page.categories }} - {{ page.url }}
{% endfor %}
{% endcomment %}

{% assign temas = site.categories["temas"] | sort %}
<ol>
  {% for tema in temas %}
<li>
  <a href="{{site.baseurl}}{{tema.url}}" title="{{ tema.hover }}">{{ tema.title }}</a>  {{ tema.date | date_to_string  }}
  {% if tema.sections %}
  <ol>
    {% for section in tema.sections %}
    {% assign sectionmark = section.title | downcase | replace: " ", "-" |  replace: "?","" %}
    <li><a href="{{site.baseurl}}{{tema.url}}#{{ sectionmark }}">{{ section.title }}</a>
    </li>
    {% endfor %}
  </ol>
  {% endif %}
   
</li>
  {% endfor %}
</ol>

