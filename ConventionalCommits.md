# Conventional Commits

## Важно

**Все сообщения коммитов должны быть написаны на английском языке.**

Это включает:

- Тип коммита (type)
- Область (scope)
- Тему (subject)
- Тело коммита (body)
- Футер (footer)

## Формат коммитов

Каждое сообщение коммита должно следовать формату:

```
<type>(<scope>): <subject>

<body>

<footer>
```

## Типы коммитов (type)

Все типы на английском:

- **feat**: Новая функциональность (feature)
- **fix**: Исправление бага (bug fix)
- **docs**: Изменения в документации (documentation)
- **style**: Изменения форматирования (пробелы, точки с запятой и т.д.), не влияющие на код
- **refactor**: Рефакторинг кода без изменения функциональности
- **perf**: Изменения для улучшения производительности (performance)
- **test**: Добавление или изменение тестов
- **build**: Изменения в системе сборки или внешних зависимостях
- **ci**: Изменения в CI/CD конфигурации
- **chore**: Другие изменения, не связанные с кодом (обновление зависимостей и т.д.)
- **revert**: Откат предыдущего коммита

## Область (scope)

Область указывает, какая часть кода затронута. Всегда на английском. Примеры:

- `auth` - авторизация
- `ui` - пользовательский интерфейс
- `theme` - тема/стили
- `api` - API
- `config` - конфигурация
- `router` - роутинг
- `login` - форма входа
- `register` - форма регистрации
- `task` - задачи

## Тема (subject)

- Используйте императив, настоящее время: "add" вместо "added" или "adds"
- Не начинайте с заглавной буквы
- Не ставьте точку в конце
- Максимум 50 символов

Примеры:

- ✅ `feat(auth): add login form`
- ✅ `fix(ui): correct button alignment`
- ❌ `feat(auth): добавить форму входа` (русский)
- ❌ `feat(auth): Added login form` (заглавная буква, прошедшее время)

## Тело (body)

- Описывает **что** и **почему**, а не **как**
- Отделяется от темы пустой строкой
- Каждая строка максимум 72 символа
- Можно использовать маркированный список

## Футер (footer)

- Ссылки на issues: `Closes #123`, `Fixes #456`
- Breaking changes: `BREAKING CHANGE: description of changes`

## Примеры

### Простой коммит

```
feat(auth): add login form
```

### Коммит с телом

```
feat(task): add task creation form

Implement task creation form with validation.
Add API integration for saving tasks.
```

### Коммит с breaking change

```
feat(api): change API response structure

BREAKING CHANGE: API response now returns object with `data` field
instead of direct array. Update code using the API.
```

### Коммит с несколькими типами

```
feat(ui): add theme toggle

fix(theme): fix colors in dark theme
```

## Правила

1. **Один коммит = одно изменение**

   - Не смешивайте несколько несвязанных изменений в одном коммите
   - Если нужно исправить баг, обнаруженный при разработке фичи, сделайте отдельный коммит

2. **Используйте понятные сообщения**

   - Избегайте абстрактных формулировок
   - Указывайте конкретные изменения

3. **Следуйте формату строго**

   - Это помогает автоматически генерировать changelog
   - Упрощает поиск по истории коммитов

4. **Используйте scope**
   - Помогает понять, какая часть проекта затронута
   - Облегчает навигацию по истории

## Примеры хороших коммитов

✅ **Хорошо:**

```
feat(auth): add email validation on registration
fix(ui): fix button display on mobile devices
refactor(theme): extract colors to separate config file
docs(readme): update installation instructions
feat(task): implement task creation feature
fix(api): handle error response correctly
```

❌ **Плохо:**

```
fix: исправление (русский язык)
update (нет типа и описания)
WIP (не информативно)
feat: добавил новую фичу (русский язык)
fix(ui): исправил баг в компоненте (русский язык, прошедшее время)
feat(auth): Added login form (заглавная буква)
```
