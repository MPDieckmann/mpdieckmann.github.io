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
{% assign collection = "" | split: "" %}{% for item in site.repositories %}{% if item.url contains page.url and item.url != page.url %}{% assign collection = collection | push: item %}{% endif %}{% endfor %}<ul class="menu">{% assign path = "" | split: "" %}{% assign currentPath = path | last %}{% for item in collection %}{% for i in path %}{% if item.url contains currentPath %}{% break %}{% endif %}{% assign tmp_path = "" | split: "" %}{% assign tmp_limit = path | size | minus: 2 %}{% for j in path offset: 1 limit: tmp_limit %}{% assign tmp_path = tmp_path | push: j %}{% endfor %}{% assign path = tmp_path %}{% assign currentPath = path | last %}</ul></li>{% endfor %}{% if item.next and item.next.url contains item.url %}{% assign path = path | push: item.url %}{% assign currentPath = path | last %}<li class="menu-item{% if page.url == item.url %} current-menu-item{% elsif page.url contains item.url and item.url != "/" %} current-menu{% endif %}"><a href="{% if item.url contains "http://" or item.url contains "https://" or item.url contains "//" %}{{ item.url }}{% else %}{{ item.url | relative_url }}{% endif %}">{% if item.icon %}<span class="icon icon-{{ item.icon }}"></span> {% endif %}{{ item.title | default: item.url }}</a><ul class="menu">{% else  %}<li class="menu-item{% if page.url == item.url %} current-menu-item{% elsif page.url contains item.url and item.url != "/" %} current-menu{% endif %}"><a href="{% if item.url contains "http://" or item.url contains "https://" or item.url contains "//" %}{{ item.url }}{% else %}{{ item.url | relative_url }}{% endif %}">{% if item.icon %}<span class="icon icon-{{ item.icon }}"></span> {% endif %}{{ item.title | default: item.url }}</a></li>{% endif %}{% endfor %}{% for i in path offset: 1 %}</ul></li>{% endfor %}</ul>
