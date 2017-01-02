---
title: "Home"
hidetitle: "true"
---
Hi, I'm MPDieckmann!

I am a hobby web developer with basic knowledge in following (coding) languages:

* JavaScript (ECMAScript 2015)
* HyperText Markup Language (Version 5) (HTML5) and Cascading StyleSheet (Version 3) (CSS3)
* HyperText Preprocessor (PHP)

In projects I managed, I used following Content Management and Blogging Systems:

* [Contao](https://contao.org/)
* [WordPress](https://wordpress.org/)
* [Jekyll](https://jekyllrb.com/)

Feel free to visit my [repositories](https://github.com/MPDieckmann?tab=repositories)!

## Information
Each repository (if no other license is provided) is licensed under the [GPLv3](https://www.gnu.org/licenses/gpl-3.0.html)-License.

## Repositories
{% assign depth = 0 %}{% assign arr = "/" | split: "" %}{% assign currentMenu = "/" %}{% for item in site.repositories %}{% unless item.url contains currentMenu %}{% assign depth = depth | minus: 1 %}{% assign currentMenu = arr[depth] %}{% endunless %}{% if depth < 1 %}* [{% if item.icon %}<span class="icon icon-{{ item.icon }}"></span> {% endif %}{{ item.title | default: item.url }}]({% if item.url contains "http://" or item.url contains "https://" or item.url contains "//" %}{{ item.url }}{% else %}{{ item.url | relative_url }}{% endif %}){% endif %}{% if item.next and item.next.url contains item.url %}{% assign depth = depth | plus: 1 %}{% assign arr[depth] = item.url %}{% assign currentMenu = item.url %}{% endif %}{% endfor %}
