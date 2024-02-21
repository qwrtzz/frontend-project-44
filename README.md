### Hexlet tests and linter status:
[![Actions Status](https://github.com/qwrtzz/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/qwrtzz/frontend-project-44/actions)

<a href="https://codeclimate.com/github/qwrtzz/frontend-project-44/maintainability"><img src="https://api.codeclimate.com/v1/badges/9cc9d012e2f05f32414b/maintainability" /></a>

Hexlet tests and linter status:

Actions Status
В этом проекте реализованны 5 простых игр запускаемых через терминал:

    brain-even. Программа дает одно случайное число от 0 до 100. Необходимо ответить является-ли число четным.
    brain-calc. Программа дает два числа от 0 до 100 и случайную операцию(+, - или *). Необходимо ответить на полученное матимачиское выражение.
    brain-gcd. Программа дает два случайных число от 0 до 100. Необходимо ответить какое число является их наибольшим общим делителем.
    brain-progression. Программа дает случайную арифметическую прогрессию от 0 до 100, со случайным началом, шагом и пропущенным элементом. Необходимо ответить какой элемент пропущен.
    brain-prime. Программа дает случайное число от 0 до 100. Необходимо ответить является-ли число простым.

Подготовка:

    Проверьте что у вас есть утилита make. Для проверки пропишите в терминале make -v, если ее нет, установите.
        Linux. Для установки пропишите в терминале sudo apt-get install make
        MacOS. Установка будет производиться через homebrew, если у вас его нет, для установки пропишите в терминале
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        Теперь пропишите brew install make
        Windows. Предлагаю воспользоваться менеджером пакетов Chocolatey, для его установки запустите терминал от имени администратора и пропишите следующую команду:
        Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-ObjectSystem.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
        Закройте и откройте терминал. Затем пропишите: choco install make

    Проверьте что ваша версия nodejs не ниже 20.5.1. Для проверки своей версии пропишите в терминале node -v, если она не соответствует требованию, обновите.
        Для обновления nodejs пропишите в терминале:
        sudo apt update
        sudo apt upgrade
        sudo apt install -y curl
        Это обновит вашу систему и установит curl. Далее пропишите curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
        И наконец пропишите sudo apt install -y nodejs, теперь можно прописать node -v, что бы убедиться что версия nodejs обновилась.

    Подключите зависимости с помощью команды make install

    Выдайте всем файлам в директории bin права на запуск. Для этого, в корне проекта, для каждой игры, пропишите chmod +x bin/brain-(game name).js

Запуск:

Если все шаги по подготовке выполнены, достаточно будет написать в терминале brain-(game name)
Аскинемы с демонстрацией работы каждой игры:

1. brain-even: https://asciinema.org/a/5BMYdGLb9Zads5hBlXEmzvwPH

2. brain-calc: https://asciinema.org/a/umUbtEUU2Fw4ucz9tjcKBYRLc

3. brain-gcd: https://asciinema.org/a/mIJJQL2ryNhNzFyKxYKPVERgu

4. brain-progression: https://asciinema.org/a/WSUglP0UGo6QtUnCpezCtrhHD

5. brain-prime: https://asciinema.org/a/2QmLxobFHcg7GMff185ScFTBd