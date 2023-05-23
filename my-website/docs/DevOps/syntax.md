---
sidebar_position: 4
---

# Синтаксис

## Jenkins

Описание синтаксиса:

- [Pipeline Syntax ](https://www.jenkins.io/doc/book/pipeline/syntax/)
- [Jenkins pipelines с Groovy](https://habr.com/ru/companies/otus/articles/705240/)
- [Делаем Jenkins Pipeline: шаг за шагом](https://habr.com/ru/articles/654483/)

## TeamCity

В TeamCity можно создавать Pipelines двумя способами:

- [в интерфейсе](https://www.jetbrains.com/help/teamcity/configuring-build-steps.html)
- на языке Kotlin:
  - https://www.jetbrains.com/help/teamcity/kotlin-dsl.html
  - https://www.jetbrains.com/help/teamcity/kotlin-dsl-documentation/root/build-step/index.html

## GitLab CI

[Описание синтаксиса](https://docs.gitlab.com/ee/ci/yaml/)

## Circle CI

[Описание синтаксиса](https://circleci.com/docs/configuration-reference/)

## Примеры

<!-- import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="CICD">
  <TabItem value="jenkins" label="Jenkins">
    
    ```js
       console.log('Every repo must come with a mascot.');
    ```

  </TabItem>
  <TabItem value="teamcity" label="TeamCity">
    I am macOS.
  </TabItem>
  <TabItem value="gitlab" label="GitLab CI">
    I am Linux.
  </TabItem>
  <TabItem value="circle" label="Circle CI">
    I am Linux.
  </TabItem>
</Tabs> -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="gitlab" label="GitLab CI">

```yml
\\ Сборка сайта Docusaurus
image: node:15.12-alpine3.13

stages:
  - test
  - deploy

test:
  stage: test
  script:
  - cd website
  - yarn install
  - yarn build
  except:
    - master

pages:
  stage: deploy
  script:
  - cd website
  - yarn install
  - yarn build
  - mv ./build ../public
  artifacts:
    paths:
    - public
  only:
    - master
```

</TabItem>
<TabItem value="jenkins" label="Jenkins">

```groovy
pipeline {
    agent any
    stages {
        stage('Example') {
            steps {
                echo 'Hello World'

                script {
                    def browsers = ['chrome', 'firefox']
                    for (int i = 0; i < browsers.size(); ++i) {
                        echo "Testing the ${browsers[i]} browser"
                    }
                }
            }
        }
    }
}
```

</TabItem>
<TabItem value="teamcity" label="TeamCity">

```kotlin
import jetbrains.buildServer.configs.kotlin.*
import jetbrains.buildServer.configs.kotlin.buildSteps.script

version = "2022.04"

project {
  buildType {
    id("HelloWorld")
    name = "Hello world"
    steps {
        script {
            scriptContent = "echo 'Hello world!'"
        }
    }
  }
}
```

</TabItem>
<TabItem value="circle" label="Circle CI">

```yml
# Echo hello world in Windows

version: 2.1

orbs:
  win: circleci/windows@5.0.0 # The Windows orb gives you everything you need to start using the Windows executor.

jobs:
  hello-job:
    executor:
      name: win/default # executor type
      size: "medium" # resource class, can be "medium", "large", "xlarge", "2xlarge", defaults to "medium" if not specified

    steps:
      # Commands are run in a Windows virtual machine environment
      - checkout
      - run: Write-Host 'Hello, Windows'

workflows:
  my-workflow:
    jobs:
      - hello-job
```

</TabItem>
</Tabs>