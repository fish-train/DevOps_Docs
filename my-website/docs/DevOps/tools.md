---
sidebar_position: 2
---

# Практики и инструменты DevOps

CI/CD – подход к разработке, при котором задачи сборки, публикации, тестирования продукта полностью или частично автоматизированы.

Основные практики DevOps (CI/CD), связанные в циклический автоматизированный процесс:

- Непрерывная интеграция
- Непрерывная доставка
- Непрерывное развертывание
 
![devops-practics](/img/devops-practics.png)

Практики CI/CD помогают автоматизировать процессы при создании программного продукта, ускорить время релиза приложения, обнаруживать ошибки на ранней стадии разработки, повысить стабильность и обеспечить бесперебойную работу приложения.

## Непрерывная интеграция (CI, Continuous Integration)

Непрерывная интеграция (CI, Continuous Integration) —  практика разработки программного обеспечения, которая заключается в выполнении частых автоматизированных сборок для скорейшего выявления ошибок. Это позволяет постоянно быть уверенным в том, что код находится в рабочем состоянии.

Переход к непрерывной интеграции позволяет снизить трудоемкость интеграции изменений кода с существующей базой исходных кодов и сделать её более предсказуемой за счет наиболее раннего обнаружения и устранения ошибок и противоречий, сделать процесс разработки прозрачным для всех участников команды.

Практика может включать в себя:

- хранение кода в системе контроля версий;
- ручное code review;
- частые автоматизированные сборки;
- автоматизированное модульное тестирование (unit tests);
- статическую проверку качества кода;
- анализ кода на безопасность;
- автоматизированное развертывание на среды разработки;
- проверки работоспособности системы после развертывания;
- автоматизированное тестирование сборки (Build Acceptance Tests) на стендах разработки.

![continious integration](/img/continious_integration.png)

## Непрерывная доставка ПО

Непрерывная поставка (CDL, Continuous delivery) – практика разработки программного обеспечения, гарантирующая то, что программное обеспечение постоянно готово к развертыванию в промышленную эксплуатацию. 

Практика включает в себя автоматизацию развертывания на тестовые среды, автоматизацию тестирования успешности развертывания на уровне администраторов (технические и функциональные тесты развертывания), а также интеграцию с процессами автоматизированного функционального, нагрузочного тестирования и динамического тестирования на безопасность.

Практика может включать в себя:

- Хранение инсталляционного пакета (дистрибутива) в централизованном хранилище.
- Гарантирование того, что единый дистрибутив пройдет все циклы тестирования.
- Хранение конфигураций тестовых сред в централизованном версионном хранилище.
- Автоматизацию развертывания приложения на среды тестирования.
- Автоматические проверки успешности процесса развертывания.
- Интеграцию с инструментами тестирования функционального, нагрузочного и динамического тестирования на безопасность.
- Тесное сотрудничество команды разработки, команды тестирования и команды эксплуатации.

## Непрерывное развертывание

Непрерывное развертывание (CDP, Continuous deployment) – практика разработки программного обеспечения, направленная на полную автоматизацию поставки от среды разработки в промышленную среду. Является дальнейшим развитием процесса Непрерывной поставки. Характеризуется тесным взаимодействием разработки и эксплуатации.

Практика может включать в себя:

- Хранение инсталляционного пакета (дистрибутива) в централизованном хранилище.
- Гарантирование того, что единый дистрибутив пройдет все циклы тестирования.
- Хранение конфигураций среды ПСИ и промышленных сред в централизованном версионном хранилище.
- Автоматизация развертывания приложения на среды ПСИ и ПРОМ.
- Автоматические проверки успешности процесса развертывания.
- Обеспечение безопасного автоматического отката до предыдущей версии приложения, либо организацию принципа blue green развертывания.
- Тесное сотрудничество команды разработки, команды тестирования и команды эксплуатации.

## Инструменты

![periodic tanble of devops tools](/img/periodic_tanble_of_devops_tools.png)

[38 лучших CI/CD-инструментов в 2022 году](https://habr.com/ru/companies/southbridge/articles/706646/)

### Jenkins

Jenkins — программная система с открытым исходным кодом на Java, предназначенная для обеспечения процесса непрерывной интеграции программного обеспечения.

- [Документация Jenkins](https://www.jenkins.io/doc/)

### TeamCity

TeamCity — серверное программное обеспечение от компании JetBrains, написанное на языке Java, билд-сервер для обеспечения непрерывной интеграции.

- [Документация TeamCity](https://www.jetbrains.com/help/teamcity/teamcity-documentation.html)
- [Руководство по CI/CD в TeamCity](https://www.jetbrains.com/ru-ru/teamcity/ci-cd-guide/)
- [TeamCity: настраиваем CI/CD в вашей команде](https://habr.com/ru/companies/tinkoff/articles/532546/)

### GitLab CI

GitLab CI — инструмент, встроенный в GitLab для автоматизации рутинных задач, возникающих в процессе разработки программного обеспечения. 

- [Документация GitLab CI/CD](https://docs.gitlab.com/ee/ci/)
- [Дока о GitLab CI/CD](https://doka.guide/tools/gitlab-ci-cd/)

### Circle CI

CircleCI — это платформа непрерывной интеграции и непрерывной доставки.

- [Документация CircleCI](https://circleci.com/docs/)