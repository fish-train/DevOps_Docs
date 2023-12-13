---
sidebar_position: 1
---

# Ansible

Ansible — программное решение с открытым кодом для удаленного управления конфигурациями, реализованное на языке
Python. Ansible берет на себя всю работу по приведению удаленных серверов в необходимое состояние посредством ssh
протокола, необходимо лишь описать, как достичь этого состояния с помощью сценариев playbooks, выполненных в формате yaml.

С помощью Ansible можно решать различные задачи, например:

- Установка/удаление СПО.
- Конфигурирование СПО.
- Создание/удаление пользователей.
- Хранение пользовательских паролей/ключей в защищенном виде (Ansible Vault).
- Развертывание кода вашего ППО.
- Запуск скриптов авто-тестирования в сторонних системах.
- Управление системой создание/удаление контейнеров/виртуальных машин.

## Преимущества Ansible

- Низкий порог вхождения. Обучиться работе с Ansible можно за очень короткие сроки.
- На управляемые узлы не нужно устанавливать никакого дополнительного ПО. Все работает через SSH.
- Код программы, написанный на Python, очень прост. Разработка дополнительных модулей не составляет особого труда.
- Декларативный язык yaml, на котором пишутся сценарии, также предельно прост.
- Встроенная возможность безопасного хранения чувствительной информации (пароли, ключи и тд) — Ansible Vault.
- Подробная и весьма просто написанная официальная документация. Она регулярно обновляется. Ее можно найти на официальном сайте.
- Ansible работает не только в режиме push, но и pull, как это делают большинство систем управления (Puppet, Chef).
- Имеется возможность последовательного обновления состояния узлов (rolling update).
- Сама структура инструмента позволяет создавать отдельные модули - роли, которые могут быть использованы разными командами в процессе  поставки своего ПО. У нас имеется возможность централизованно хранить эти модули и обеспечить их использование разными командами на разных проектах.

## Недостатки Ansible

Неосведомленность о состоянии управляемого узла до подключения к нему, что заставляет более тщательно составлять и тестировать playbooks.

## Установка

1. Установите [пакеты EPEL](https://docs.fedoraproject.org/en-US/epel/#_quickstart):

   ```
   sudo yum install epel-release
   ```

2. Установите dnf:
   
   ```
   yum install dnf
   ```

3. Установите Ansible:

   ```
   sudo dnf install ansible
   ```

## Проверка соединения контроллера и целевой системы

```
ansible target1 -m ping -i inventory
```

## Запуск tasks

```
ansible <hosts> -a command

ansible all -a "/sbin/reboot"
```

## Inventory

[Inventory](https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html) - файл, который содержит информацию о целевых системах. По умолчанию расположен в папке `/etc/ansible/hosts`.

Пример файла:

```ini
mail.example.com

[webservers]
foo.example.com
bar.example.com

[dbservers]
one.example.com
two.example.com
three.example.com
```

### Использование алиасов

```ini
app ansible_host=server1.domain.com
db  ansible_host=server2.domain.com
```

### Подключение к серверам на Linux и Windows

```ini
web1 ansible_host=server1.domain.com ansible_connection=ssh ansible_user=root ansible_ssh_pass=Password123!
web2 ansible_host=server2.domain.com ansible_connection=ssh ansible_user=root ansible_ssh_pass=Password123!
web3 ansible_host=server3.domain.com ansible_connection=ssh ansible_user=root ansible_ssh_pass=Password123!
db1 ansible_host=server4.domain.com ansible_connection=winrm ansible_user=administrator ansible_password=Password123!
```

### Группировка серверов

```ini
# Sample Inventory File

# Web Servers
web1 ansible_host=server1.domain.com ansible_connection=ssh ansible_user=root ansible_ssh_pass=Password123!
web2 ansible_host=server2.domain.com ansible_connection=ssh ansible_user=root ansible_ssh_pass=Password123!
web3 ansible_host=server3.domain.com ansible_connection=ssh ansible_user=root ansible_ssh_pass=Password123!

# Database Servers
db1 ansible_host=server4.domain.com ansible_connection=winrm ansible_user=administrator ansible_password=Password123!


[web_servers]
web1
web2
web3

[db_servers]
db1

[all_servers:children]
web_servers
db_servers
```

### Еще один пример

```ini
# Sample Inventory File

# Web Servers
web_node1 ansible_host=web01.xyz.com ansible_connection=winrm ansible_user=administrator ansible_password=Win$Pass
web_node2 ansible_host=web02.xyz.com ansible_connection=winrm ansible_user=administrator ansible_password=Win$Pass
web_node3 ansible_host=web03.xyz.com ansible_connection=winrm ansible_user=administrator ansible_password=Win$Pass

# DB Servers
sql_db1 ansible_host=sql01.xyz.com ansible_connection=ssh ansible_user=root ansible_ssh_pass=Lin$Pass
sql_db2 ansible_host=sql02.xyz.com ansible_connection=ssh ansible_user=root ansible_ssh_pass=Lin$Pass

# Groups
[db_nodes]
sql_db1
sql_db2

[web_nodes]
web_node1
web_node2
web_node3

[boston_nodes]
sql_db1
web_node1

[dallas_nodes]
sql_db2
web_node2
web_node3

[us_nodes:children]
boston_nodes
dallas_nodes
```

## Playbooks

Playbook — отдельный YAML файл, который содержит список plays.

Play — набор активностей, которые будут выполнены на одном или группе хостов.

Task — отдельное, атомарное действие, которое будет произведено с хостом.

Примеры tasks:

- выполнить команду или скрипт на хосте
- установить пакет на хосте
- выполнить перезагрузку или выключение машины

### Запуск playbooks

```
ansible-playbook <playbook_name>

ansible-playbook web-servers.yml

ansible-playbook playbook-ping.yml -i inventory
```

### Запуск playbooks в режиме отладки

Количество `v` в ключе соответствует уровню отображения информации, например:

```
ansible-playbook playbook-ping.yml -i inventory -vv
```

Вывод:

```
ansible-playbook 2.9.27
  config file = /etc/ansible/ansible.cfg
  configured module search path = [u'/home/osboxes/.ansible/plugins/modules', u'/usr/share/ansible/plugins/modules']
  ansible python module location = /usr/lib/python2.7/site-packages/ansible
  executable location = /usr/bin/ansible-playbook
  python version = 2.7.5 (default, Oct 14 2020, 14:45:30) [GCC 4.8.5 20150623 (Red Hat 4.8.5-44)]
Using /etc/ansible/ansible.cfg as config file
Skipping callback 'actionable', as we already have a stdout callback.
Skipping callback 'counter_enabled', as we already have a stdout callback.
Skipping callback 'debug', as we already have a stdout callback.
Skipping callback 'dense', as we already have a stdout callback.
Skipping callback 'dense', as we already have a stdout callback.
Skipping callback 'full_skip', as we already have a stdout callback.
Skipping callback 'json', as we already have a stdout callback.
Skipping callback 'minimal', as we already have a stdout callback.
Skipping callback 'null', as we already have a stdout callback.
Skipping callback 'oneline', as we already have a stdout callback.
Skipping callback 'selective', as we already have a stdout callback.
Skipping callback 'skippy', as we already have a stdout callback.
Skipping callback 'stderr', as we already have a stdout callback.
Skipping callback 'unixy', as we already have a stdout callback.
Skipping callback 'yaml', as we already have a stdout callback.

PLAYBOOK: playbook-ping.yml **********************************************************************************************************************************
1 plays in playbook-ping.yml

PLAY [Test connection to linux targets] **********************************************************************************************************************

TASK [Gathering Facts] ***************************************************************************************************************************************
task path: /home/osboxes/project/playbook-ping.yml:2
ok: [target2]
ok: [target1]
META: ran handlers

TASK [Ping test] *********************************************************************************************************************************************
task path: /home/osboxes/project/playbook-ping.yml:5
ok: [target1] => {"changed": false, "ping": "pong"}
ok: [target2] => {"changed": false, "ping": "pong"}
META: ran handlers
META: ran handlers

PLAY RECAP ***************************************************************************************************************************************************
target1                    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
target2                    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
```

### Пример 1

```yml
-
    name: Execute a date command on localhost
    hosts: localhost
    tasks:
        -
            name: 'Execute a date command'
            command: date
-
    name: 'Execute a command to display hosts file on localhost'
    hosts: localhost
    tasks:
        -
            name: 'Execute a command to display hosts file'
            command: cat /etc/hosts
```

### Пример 2

```yml
-
    name: 'Execute two commands on localhost'
    hosts: localhost
    tasks:
        -
            name: 'Execute a date command'
            command: date
        -
            name: 'Execute a command to display hosts file'
            command: cat /etc/hosts
```

### Пример 3

```yml
-
    name: 'Stop the web services on web server nodes'
    hosts: web_nodes
    tasks:
        -
            name: 'Stop the web services on web server nodes'
            command: 'service httpd stop'
-
    name: 'Stop the db services on db nodes'
    hosts: db_nodes
    tasks:
        -
            name: 'Stop the db services on db nodes'
            command: 'service mysql stop'
-
    name: 'Restart all nodes'
    hosts: all_nodes
    tasks:
        -
            name: 'Restart all nodes'
            command: '/sbin/shutdown -r'
-
    name: 'Start the db services on db nodes'
    hosts: db_nodes
    tasks:
        -
            name: 'Start the db services on db nodes'
            command: 'service mysql start'
-
    name: 'Start the web services on web server nodes'
    hosts: web_nodes
    tasks:
        -
            name: 'Start the web services on web server nodes'
            command: 'service httpd start'
```

### Пример 4

```yml

-
  name: Test connection to linux targets
  hosts: linux
  tasks:
    - name: Ping test
      ping:
```

## Modules

[Ansible-модули](https://docs.ansible.com/ansible/latest/collections/index_module.html) делятся на различные группы в зависимости от их функциональности.

### System

Системные модули — действия, которые будут выполняться в задачах, связанных с конфигурированием систем управляемых хостов. Это задания вроде изменения iptables, конфигураций файрволла, работа с группами логических томов, операции монтирования или работа со службами целевых машин. Хороший пример для этого - запуск, остановка или перезапуск служб в системе.

### Command

Командные модули используются для выполнения команд или скриптов на хосте.

### Scripts

Модуль [script](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/script_module.html) выполняет скрипт, который в начале находится локально на компьютере контроллера Ansible и появляется на одном или нескольких удаленных узлах после его передачи. Чтобы запустить скрипт на одном или сотнях серверов, нам действительно не нужно копировать его на все серверы, Ansible позаботится о том, чтобы автоматически скопировать скрипт на удаленный узел и затем выполнить его на в этих удаленных системах. Используй название модуля script и укажи расположение скрипта на компьютере-контроллере Ansible и необходимые аргументы.

```yml
-
  name: Execute a script on all web server nodes
  hosts: web_nodes
  tasks:
    - name: Execute a script on all web server nodes
      script: /tmp/install_script.sh
```

### Files

Файловые модули помогают работать с файлами. Например, используй модуль `ACL` для установки и получения информации access-control lists для файлов. Используй модули `archive` и `unarchive` для сжатия и распаковки файлов. Используй модули `find`, `lineinfile` и `replace`, чтобы изменить содержимое существующего файла.

### Database

Модули баз данных помогают в работе с такими базами данных, как MongoDB, MySQL, MSSQL или PostgreSQL. Ты можешь использовать их как для добавления или удаления баз данных, так и изменения конфигураций самих СУБД.

### Cloud

В облачном разделе есть обширная коллекция модулей для различных облачных провайдеров, таких как Amazon, Azure, Docker, Google, OpenStack и VMware, которых там на самом деле гораздо больше.

Для каждого из них доступен ряд модулей, которые позволяют выполнять различные задачи, такие как создание и уничтожение инстансов, изменение конфигурации сети, конфигурирование инструментов безопасности клауд-вендора, управление контейнерами, центрами обработки данных, кластерами, виртуальными сетями, VSAN и многое другое.

### Windows

Кроме того, есть модули Windows, которые помогают использовать Ansible в среде Windows. Некоторые из них: win_chocolatey неплохой пакетный менеджер для установки программного обеспечения, win_copy для копирования файлов, win_command для выполнения команды на компьютере с Windows и множество других модулей, доступных для работы с файлами в Windows, создания веб-сайтов на IIS, внесения изменений в реестр с помощью regedit и управления службами, обновлениями и пользователями в Windows.

### Service

Модуль [service](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/service_module.html) используется для менеджмента служб в управляемой системе, таких как запуск, остановка или перезапуск сервиса. Этот сценарий Ansible используется для запуска различных служб в определенном порядке. Сначала мы запускаем службу базы данных с помощью этого модуля.

Модуль `service`не имеет ввода free_form. Мы должны передавать ввод в формате пары ключ-значение. Мы используем параметр name, чтобы указать имя службы, которую мы хотим запустить, в данном случае postgresql, а параметр state указывает целевое состояние службы, которого мы хотим добиться, в этом случае started.

```yml
-
    name: 'Run httpd'
    hosts: web_nodes
    tasks:
        -
            name: 'Run httpd'
            service: 
                name: httpd
                state: started
```

### lineinfile

Модуль [lineinfile](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/lineinfile_module.html) используется для поиска строки в файле и ее замены или добавления, если такой строки еще не существует.

Например, нам дается задача добавить новый DNS-сервер в файл `/etc/resolv.conf`. Этот простой playbook Ansible с использованием модуля `lineinfile` в tasks добавит новую информацию о неймсервере в файл `/etc/resolv.conf`. Помни, что модуль `lineinfile` идемпотентен.

```yml
-
    name: 'Execute a script on all web server nodes'
    hosts: web_nodes
    tasks:
        -
            name: Add string to the file
            lineinfile:
                path: /etc/resolv.conf 
                line: nameserver 10.1.250.10
        -
            name: 'Execute a script'
            script: /tmp/install_script.sh
        -
            name: 'Start httpd service'
            service:
                name: httpd
                state: present
```

### User

Модуль для управления пользователями.

Пример создания пользователя:

```yml
-
    name: 'Execute a script on all web server nodes and start httpd service'
    hosts: web_nodes
    tasks:
        -
            name: 'Update entry into /etc/resolv.conf'
            lineinfile:
                path: /etc/resolv.conf
                line: 'nameserver 10.1.250.10'
        -
            name: 'Create user'
            user:
                name: web_user
                uid: 1040
                group: developers
```

## Variables

Переменные используются для хранения значений, которые будут разные для различных элементов или наборов
элементов.

### Использование переменных из inventory

```yml
-
    name: 'Update nameserver entry into resolv.conf file on localhost'
    hosts: localhost
    tasks:
        -
            name: 'Update nameserver entry into resolv.conf file'
            lineinfile:
                path: /etc/resolv.conf
                line: 'nameserver {{nameserver_ip}}'
```

```ini
# Sample Inventory File

localhost ansible_connection=localhost nameserver_ip=10.1.250.10
```

### Использование переменных в playbook

```yml
-
    name: 'Update nameserver entry into resolv.conf file on localhost'
    hosts: localhost
    vars:
        car_model: BMW M3
        country_name: USA
        title: Systems Engineer
    tasks:
        -
            name: 'Print my car model'
            command: 'echo "My car''s model is {{car_model}}"'
        -
            name: 'Print my country'
            command: 'echo "I live in the {{country_name}}"'
        -
            name: 'Print my title'
            command: 'echo "I work as a {{title}}"'
```

### Использование переменных через отдельный файл

variables-web.yml:

```yml
http_port: 8081
snmp_port: 161-162
inter_ip_range: 192.0.2.0
```

playbook.yml:

```yml
-
   name: Set firewall configurations
   hosts: web
   tasks:
      - firewallid:
         service: https
         permanent: true
         state: enabled
      - firewallid:
         port: '{{ http_port }}'
         permanent: true
         state: disabled
      - firewallid:
         port: '{{ snmp_port }}'/udp
         permanent: true
         state: disabled
      - firewallid:
         port: '{{ inter_ip_range }}'/24
         permanent: true
         state: enabled
   vars_files:
      - variables-web.yml
```

## Механика Ansible

### Conditionals

Условия (conditionals) похожи на условные операторы в языках программирования и помогают нам создавать более сложную логику в своих playbooks.

#### When

Запустить task в случае, если ansible_host является сервером баз данных:

```yml
-
    name: 'Execute a script on all web server nodes'
    hosts: all_servers
    tasks:
        -
            service: 'name=mysql state=started'
            when: ansible_host == "server4.company.com"
```

Используй условия when, чтобы в зависимости от переменной age выполнялся нужный task:

```yml
-
    name: 'Am I an Adult or a Child?'
    hosts: localhost
    vars:
        age: 25
    tasks:
        -
            command: 'echo "I am a Child"'
            when: age < 18
        -
            command: 'echo "I am an Adult"'
            when: age >= 18
```

Проверять, есть ли в файле IP-адрес, и если его нет - добавлть строку в файл:

```yml
-
    name: 'Add name server entry if not already entered'
    hosts: localhost
    tasks:
        -
            shell: 'cat /etc/resolv.conf'
            register: command_output
        -
            shell: 'echo "nameserver 10.0.250.10" >> /etc/resolv.conf'
            when: command_output.stdout.find('10.0.250.10') == -1
```

#### Loops

Loop - это директива цикла, которая выполняет одну и ту же задачу несколько раз.

Примени цикл (директиву with_items) в этом task, чтобы отобразились все фрукты из списка преременной fruits:

```yml
-
    name: 'Print list of fruits'
    hosts: localhost
    vars:
        fruits:
            - Apple
            - Banana
            - Grapes
            - Orange
    tasks:
        -
            command: 'echo "{{item}}"'
            with_items:
                "{{fruits}}"
```

Установить модули из списка:

```yml
-
    name: 'Install required packages'
    hosts: localhost
    vars:
        packages:
            - httpd
            - binutils
            - glibc
            - ksh
            - libaio
            - libXext
            - gcc
            - make
            - sysstat
            - unixODBC
            - mongodb
            - nodejs
            - grunt
    tasks:
        -
            yum: 'name={{item}} state=present'
            with_items: 
                '{{packages}}'
```