{% assign practicas = site.categories["practicas"] %}

<ol reversed>
{%- for practica in practicas %}
<li> <a href="{{site.baseurl}}{{ practica.url }}">{{ practica.title }}</a> 
  <ul>
    {% if practica.rubrica %}<li><a href="{{ practica.url }}#rubrica">rubrica</a></li>{% endif %}
    <li> Veánse las clases empezando en 
    <a href="{{site.baseurl}}/clases/{{ practica.date | date: "%Y/%m/%d" }}/leccion.html">
    {{practica.date | date_to_long_string }}</a>
    </li>
  </ul>
</li>
{%- endfor %}
</ol>
