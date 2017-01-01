---
title: "WordPress Plugins"
branch: "https://github.com/MPDieckmann/wp-plugins/tree/master"
parent: true
---
I want to emphasize that I am not liable for any damage or loss of data!

Each plugin, developed by [MPDieckmann](https://github.com/MPDieckmann), is (if no other license is provided) available under the [GPLv3](https://www.gnu.org/licenses/gpl-3.0.html)-License

Have fun with my WordPress-Plugins!

## Information

Each WordPress-Plugin has its own branch in this repository except this "[master](https://github.com/MPDieckmann/wp-plugins/tree/master)" branch which is used to display and manage [https://mpdieckmann.github.io/wp-plugins](https://mpdieckmann.github.io/wp-plugins).

Here is a list to some plugins
{% for item in site.repositories %}
{% if item.url contains page.url and item.url != page.url %}
* [{{ item.title }}]({{ item.url | absolute_url }}) *([Branch]({{ item.branch }}))*
{% endif %}
{% endfor %}
