---
sidebar_position: 2
---

# Работа с виртуальными окружением

Виртуальное окружение дает возможность локальной установки модулей, экспорта рабочей среды и выполнения программы Python внутри этого окружения.

Виртуальное окружение можно создать, например, с помощью:

- **venv** - встроенный модуль;
- **virtualenv** - пакет, который необходимо установить.

## venv

Чтобы создать виртуальное окружение с помощью venv:

1. Создайте окружение:

   ```bash
   python -m venv /path/to/new/virtual/environment
   ```

2. Перейдите в папку виртульного окружения:

   ```bash
   cd /path/to/new/virtual/environment
   ```

3. Активируйте виртуальное окружение:

   ```bash
   \Scripts\activate.bat
   ```

[Документация venv](https://docs.python.org/3/library/venv.html)

## virtualenv

Чтобы создать виртуальное окружение с помощью virtualenv:

1. Установите пакет:

   ```bash
   python -m pip install virtualenv
   ```

2. Создайте окружение:

   ```bash
   virtualenv env_name
   ```

3. Активируйте виртуальное окружение:

   ```bash
   .\env_name\Scripts\activate.bat
   ```

[Документация virtualenv](https://virtualenv.pypa.io/en/latest/index.html)