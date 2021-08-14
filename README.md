# mytarget-api-client

## Инициализация
```
npm install
```

## Сбор данных

Для получения токена нужно пройти [инструкции](https://target.my.com/help/advertisers/api_access/ru)

## Подстановка

Файл **src/auth.example.js** нужно переименовать в **src/auth.js**. В нём есть объект auth_data, в котороместь поле token в него нужно записать полученный токен.

## Создание рекламы

Создание рекламы делается в несколько шагов:

1. Создаётся ссылка

Для этого нужно на адрес
<pre>
https://target-sandbox.my.com/api/v2/urls.json
</pre>
Отправить объект вида:
<pre>
{
    "url":"https://www.youtube.com/"
}
</pre>
И токен.
В ответе прийдёт ID ссылки.

2. Создаются видео или изображение

2.1 Изображение

Для этого нужно на адрес
<pre>
https://target-sandbox.my.com/api/v2/content/static.json
</pre>

Отправить файл в поле file и data с объектом вида {"width":500, "height":500}

По итогу будет примерно так
|Параметр      |Значение                   |
|--------------|---------------------------|
|file          |file                       |
|data          |{"width":500, "height":500}|

2.2 Видео

Для этого нужно на адрес
<pre>
https://target-sandbox.my.com/api/v2/content/video.json
</pre>

Отправить файл в поле file и data с объектом вида {"width":500, "height":500}

По итогу будет примерно так
|Параметр      |Значение                   |
|--------------|---------------------------|
|file          |file                       |
|data          |{"width":800, "height":360}|

3. Создаётся реклама с видео или изображением
**В примерах будут использовать объекты из файла *examples.js***
3.1 С изображением

Для этого на адрес
<pre>
https://target-sandbox.my.com/api/v2/campaigns.json
</pre>

Нужно отправить объект campaignImage, в котором в поле banners.urls.primary.id нужно указать id ссылки, полученной после её создания; content.image_600x600.id id изображения.

3.2 С видео

Для этого на адрес 
<pre>
https://target-sandbox.my.com/api/v2/campaigns.json
</pre>

Нужно отправить объект campaignImage, в котором в поле banners.urls.primary.id нужно указать id ссылки, полученной после её создания; content.video_landscape_30s.id id видео.

**Также в обоих примерах используется группа ретаргетинга, инстуркции ниже**

##  Подключение ретаргетинговой группы

Делается это в три этапа:
1. Создаётся user_list

Для этого на адрес
<pre>
https://target-sandbox.my.com/api/v2/remarketing/users_lists.json
</pre>
нужно отправить параметры file, data и токен

Рабочий пример параметров:

| Параметры | Значение                          |
| ----------|:----------------------------------|
| file      | file.csv                          |
| data      | {"name": "Name", "type": "phones"}|

2. Нужно создать сегмент

Для этого на адрес
<pre>
https://target-sandbox.my.com/api/v2/remarketing/segments.json
</pre>
нужно отправить
<pre>
  {
    "name": "сегмент",
    "pass_condition": 1,
    "relations": [
        {
            "object_type":"remarketing_users_list",
            "params":{
                "source_id":USER_LIST_ID,
                "type":"positive"
            }
        }
      ]
  }
</pre>

3. Подключить её к рекламе

Для в поле targetings.segments любой из типов кампаний нужно указать [SEGEMNT_ID] (в фигурных скобках)


Документация по всем ресурсам api находится [здесь](https://target.my.com/doc/api/ru/resource/AudienceScoreStats)