---
themecolor: "#800"
title: "Collection Test"
subtitle: "Tests with jekyll collections"
---

Script for working with Jekyll-Collections to produce a powerfull navigation panel

Server-Time: {{ site.time }}

<script>
{% assign path = "" | split: "" %}
{% assign currentPath = path | last %}
{% capture output %}[{% endcapture %}
{% capture output2 %}<ul>{% endcapture %}

{% for item in site.repositories %}
console.group("{{ item.url }}");

console.log("before", {{ path | jsonify }}, "{{ currentPath }}");
  {% for i in path %}
    {% if item.url contains currentPath %}
      {% break %}
    {% endif %}
    {% assign tmp_path = "" | split: "" %}
    {% assign tmp_limit = path | size | minus: 2 %}
    {% for j in path offset: 1 limit: tmp_limit %}
      {% assign tmp_path = tmp_path | push: j %}
    {% endfor %}
    {% assign path = tmp_path %}
    {% assign currentPath = path | last %}
    {% capture output %}{{ output }}null]},{% endcapture %}
    {% capture output2 %}{{ output2 }}</ul></li>{% endcapture %}
  {% endfor %}
console.log("after", {{ path | jsonify }}, "{{ currentPath }}");

  {% if item.next and item.next.url contains item.url %}
    {% assign path = path | push: item.url %}
    {% assign currentPath = path | last %}
    {% capture output %}{{ output }}{"title":"{{ item.title }}","url":"{{ item.url }}","children":[{% endcapture %}
    {% capture output2 %}{{ output2 }}<li><a href="{{ item.url }}">{{ item.title }}</a><ul>{% endcapture %}
  {% else  %}
    {% capture output %}{{ output }}{"title":"{{ item.title }}","url":"{{ item.url }}"},{% endcapture %}
    {% capture output2 %}{{ output2 }}<li><a href="{{ item.url }}">{{ item.title }}</a></li>{% endcapture %}
  {% endif %}

console.groupEnd();
{% endfor %}
{% for i in path offset: 1 %}
  {% capture output %}{{ output }}null]},{% endcapture %}
  {% capture output2 %}{{ output2 }}</ul></li>{% endcapture %}
{% endfor %}
{% capture output %}{{ output }}null]{% endcapture %}
{% capture output2 %}{{ output2 }}</ul>{% endcapture %}

console.log({{ output }});
</script>
{{ output2 }}
