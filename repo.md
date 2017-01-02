---
layout: null
---
[
{% assign depth = 0 %}
{% assign arr = "/" | split: "" %}
{% assign currentMenu = "/" %}
{% for item in site.repositories %}
  {% unless item.url contains currentMenu %}
    {% assign depth = depth | minus: 1 %}
    {% assign currentMenu = arr[depth] %}
null]}
  {% endunless %}
  {% if item.next and item.next.url contains item.url %}
    {% assign depth = depth | plus: 1 %}
    {% assign arr[depth] = item.url %}
    {% assign currentMenu = item.url %}
    {
      "title": "{{ item.title }}",
      "items": [
  {% elsif item.url contains currentMenu %}
    {
      "title": "{{ item.title }}"
    },
  {% else %}
    {
      "type": "ERROR",
      "title": "{{ item.title }}"
    },
  {% endif %}
{% endfor %}
{% for i in arr %}
  {% unless forloop.index0 > depth %}
]
  {% endunless %}
{% endfor %}
