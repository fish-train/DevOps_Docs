---
sidebar_position: 3
---

# Конвертация RST -> PDF

## docx2pdf

Библиотека docx2pdf конвертирует DOCX-файлы в формат PDF с помощью Microsoft Word.

### Подготовка к работе

1. Установите [расширение Docxbuilder](https://github.com/amedama41/docxbuilder).
2. В проекте Sphinx в файле conf.py добавьте:

   ```python
   extensions = ['docxbuilder']
   ```

3. В файле conf.py добавьте настройки документа:

   ```python
	docx_documents = [
	('index', 'docxbuilder.docx', {
	     'title': project,
	     'creator': author,
	     'subject': 'A manual of docxbuilder',
	 }, True),
	]
	docx_style = 'path/to/custom_style.docx'
	docx_pagebreak_before_section = 1
   ```

   Подробнее см. статью [Usage](https://docxbuilder.readthedocs.io/en/latest/docxbuilder.html#usage).
3. Установите Microsoft Word.
4. Установите конвертер docx2pdf:

   ```bash
   pip install docx2pdf
   ```

### Создание PDF-файлов

1. В консоли перейдите в папку с DOCX-файлом:

   ```bash
   cd build/docx
   ```

2. Выполните команду:

   ```bash
   docx2pdf myfile.docx
   ```

### Python-скрипт для создания PDF-файлов

```python
# coding : utf-8
 
import subprocess
from docx2pdf import convert
 
# Сборка DOCX
def make_docx():
    # Собрать DOCX
    cmd = "make docx"
    # Выполнить команду CMD
    subprocess.Popen(cmd, shell = True)
 
# Конвертация DOCX в PDF
def make_pdf():
    # Конвертировать DOCX в PDF
    convert("build/docx/sphinx-test.docx")
 
make_docx() # Собрать DOCX
make_pdf()  # Конвертировать DOCX в PDF
```

## rst2pdf

### Подготовка к работе

1. Установите [rst2pdf](https://github.com/rst2pdf/rst2pdf):

   ```bash
   pip install rst2pdf
   ```

2. В проекте Sphinx в файле conf.py добавьте:

   ```python
   extensions = [
       # ...
       'rst2pdf.pdfbuilder',
   ]

   # Grouping the document tree into PDF files. List of tuples
   # (source start file, target name, title, author, options).
   pdf_documents = [
       ('index', 'MyProject', 'My Project', 'Author Name'),
   ]
   ```

### Создание PDF-файлов

Выполните одну из команд:

- `make pdf` 
- `sphinx-build -b pdf ...`