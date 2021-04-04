---
layout: single
title: Temas
permalink: /temas
toc: true
---

{% comment %}
{% for page in site.pages %}
{{ page.categories }} - {{ page.url }}
{% endfor %}
{% endcomment %}

{%- capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}
{% assign temas = site.categories["temas"] | sort %}

  {% for tema in temas %}
## Chapter {{ forloop.index }}: <a href="{{site.baseurl}}{{tema.url}}" title="{{ tema.hover }}">{{ tema.title }}</a>  
  
{%- capture tema_time %}{{ tema.date | date: '%s'}}{% endcapture %}

{% if tema_time < nowunix -%}

See classes starting at <a 
    href="{{site.baseurl}}/clases/{{ tema.date | date: "%Y/%m/%d" }}/leccion.html">
   {{ tema.date | date_to_string  }}
  </a>

{% endif %}


{% if tema.sections %}
    {% for section in tema.sections %}
    {% assign sectionmark = section.title | downcase | replace: " ", "-" |  replace: "?","" %}
### Section {{ forloop.index }}: <a href="{{site.baseurl}}{{tema.url}}#{{ sectionmark }}">{{ section.title }}</a>
  {% endfor %}

{% endif %}
   
{% endfor %}


