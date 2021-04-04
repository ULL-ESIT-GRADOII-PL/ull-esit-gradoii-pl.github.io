{% assign practicas = site.categories["practicas"] %}
{%- capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}
{%- for practica in practicas -%}
  {%- capture practica_time %}{{ practica.date | date: '%s' }}{% endcapture -%}
  {%- capture yearmonthday %}{{ practica.date | date: "%Y/%m/%d" }}{% endcapture %}

### <a href="{{site.baseurl}}{{ practica.url }}">{{ practica.title }}</a> 

{%- if practica_time >= nowunix %}
* Coming! Expected class date (aprox): <a href="{{site.baseurl}}/clases/{{ yearmonthday }}/leccion.html">{{practica.date | date_to_long_string }}</a> 
  {%- else %}
 * Veánse las clases empezando en <a href="{{site.baseurl}}/clases/{{ yearmonthday }}/leccion.html"> {{practica.date | date_to_long_string }}</a> 
 {%- endif -%}
{%- if practica.rubrica %}
* <a href="{{ practica.url }}#rubrica">rubrica</a>
{%- endif %}
{%- endfor %}

