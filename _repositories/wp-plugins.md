---
title: "WordPress Plugins"
subtitle: "Developed by <a href=\"https://github.com/MPDieckmann/\">MPDieckmann</a>"
branch: "https://github.com/MPDieckmann/wp-plugins/tree/master"
icon: "extension"
---
I want to emphasize that I am not liable for any damage or loss of data!

Each plugin, developed by [MPDieckmann](https://github.com/MPDieckmann), is (if no other license is provided) available under the [GPLv3](https://www.gnu.org/licenses/gpl-3.0.html)-License.

Have fun with my WordPress-Plugins!

## Information

Each WordPress-Plugin has its own branch in this repository except this "[master](https://github.com/MPDieckmann/wp-plugins/tree/master)" branch.

## List of published plugins
{% for item in site.repositories %}
{% if item.url contains page.url and item.url != page.url %}
* [{{ item.title }}]({{ item.url | relative_url }}) *([Branch]({{ item.branch }}))*
{% endif %}
{% endfor %}
