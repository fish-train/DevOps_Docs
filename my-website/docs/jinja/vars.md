---
sidebar_position: 2
---

# Использование переменных

## Задача

Логотип продукта в документации должен содержать ссылку на сайт компании. По умолчанию принажатии на логотип открывалась главная странциа документации.

## Шаблон по умолчанию

```html title="/_templates/sidebar/brand.html"
<a class="sidebar-brand{% if logo %} centered{% endif %}" href="{{ pathto(master_doc) }}">
  {% block brand_content %}
  {%- if logo_url %}
  <div class="sidebar-logo-container">
    <img class="sidebar-logo" src="{{ logo_url }}" alt="Logo"/>
  </div>
  {%- endif %}
  {%- if theme_light_logo and theme_dark_logo %}
  <div class="sidebar-logo-container">
    <img class="sidebar-logo only-light" src="{{ pathto('_static/' + theme_light_logo, 1) }}" alt="Light Logo"/>
    <img class="sidebar-logo only-dark" src="{{ pathto('_static/' + theme_dark_logo, 1) }}" alt="Dark Logo"/>
  </div>
  {%- endif %}
  {% if not theme_sidebar_hide_name %}
  <span class="sidebar-brand-text">{{ docstitle if docstitle else project }}</span>
  {%- endif %}
  {% endblock brand_content %}
</a>
```

## Решение

1. Добавьте в команду сборки документацию переменную `pflb` со значение *True*:

   ```bash
   sphinx-build -b dirhtml source build/html/en -d build/doctrees/en/ -A pflb=True
   ```

2. В файл `/_templates/sidebar/brand.html` добавьте переменную и условия дял ее использования. Если в команде сборки передается значение переменной, то в итоговом HTML ссылка в логотипе будет вести на сайт компании:

   ```html title="/_templates/sidebar/brand.html"
   // highlight-next-line
   {% set pflb_url = 'https://pflb.us/' %}

   // highlight-next-line
   <a class="sidebar-brand{% if logo %} {% endif %}" href="{%- if pflb %} {{ pflb_url }} {% else %} {{ pathto(master_doc) }} {%- endif %}">
     {% block brand_content %}
     {%- if logo_url %}
     <div class="sidebar-logo-container">
       <img class="sidebar-logo" src="{{ logo_url }}" alt="Logo"/>
     </div>
     {%- endif %}
     {%- if theme_light_logo and theme_dark_logo %}
     <div class="sidebar-logo-container">
       <img class="sidebar-logo only-light" src="{{ pathto('_static/' + theme_light_logo, 1) }}" alt="Light Logo"/>
       <img class="sidebar-logo only-dark" src="{{ pathto('_static/' + theme_dark_logo, 1) }}" alt="Dark Logo"/>
     </div>
     {%- endif %}
     {% if not theme_sidebar_hide_name %}
     <span class="sidebar-brand-text">{{ docstitle if docstitle else project }}</span>
     {%- endif %}
     {% endblock brand_content %}
   </a>
   ```