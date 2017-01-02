---
layout: null
---
{% highlight html %}
{% assign depth = 0 %}
{% assign arr = "/" | split: "" %}
{% assign currentMenu = "/" %}
{% for item in site.repositories %}
  {% unless item.url contains currentMenu %}
    {% assign depth = depth | minus: 1 %}
    {% assign currentMenu = arr[depth] %}
    </ul></li>
  {% endunless %}
  {% if item.next and item.next.url contains item.url %}
    {% assign depth = depth | plus: 1 %}
    {% assign arr[depth] = item.url %}
    {% assign currentMenu = item.url %}
    <li>
      {{ item.title }}
      <ul class="menu">
  {% elsif item.url contains currentMenu %}
    <li>
      {{ item.title }}
    </li>
  {% else %}
    <li> Doesn't fit
      {{ item.title }}
    </li>
  {% endif %}
{% endfor %}
{% for i in arr %}
  {% unless forloop.index0 > depth %}
    </ul></li>
  {% endunless %}
{% endfor %}
{% endhighlight %}
