// Score
console.log('Score: 85/150');

console.log('1. Часы и календарь: 15/15');
console.log('[x] время выводится в 24-часовом формате, например: 21:01:00 +5');
console.log('[x] время обновляется каждую секунду - часы идут. Когда меняется одна из цифр, остальные при этом не меняют своё положение на странице (время не дёргается) +5');
console.log('[x] выводится день недели, число, месяц, например: "Воскресенье, 16 мая" / "Sunday, May 16" / "Нядзеля, 16 траўня" +5\nЯзык и формат вывода даты определяется языком приложения.');
console.log('[x] при изменении дня недели, даты, месяца эти данные меняются в приложении (в ходе кросс-чека этот пункт не проверяется)');
console.log('');

console.log('2. Приветствие: 10/10');
console.log('[x] текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь) +5\nс 6:00 до 11:59 - Good morning / Доброе утро / Добрай раніцы\nс 12:00 до 17:59 - Good afternoon / Добрый день / Добры дзень\nс 18:00 до 23:59 - Good evening / Добрый вечер / Добры вечар\nс 00:00 до 5:59 - Good night / Доброй/Спокойной ночи / Дабранач');
console.log('[x] при изменении дня недели, даты, месяца эти данные меняются в приложении (в ходе кросс-чека этот пункт не проверяется)');
console.log('[x] пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется, данные о нём хранятся в local storage +5');
console.log('');

console.log('3. Смена фонового изображения: 20/20')
console.log('[x] ссылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения (от 01 до 20) +5');
console.log('[x] изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана.');
console.log('[x] изображения перелистываются последовательно - после 18 изображения идёт 19 (клик по правой стрелке), перед 18 изображением идёт 17 (клик по левой стрелке) +5');
console.log('[x] изображения перелистываются по кругу: после двадцатого изображения идёт первое (клик по правой стрелке), перед 1 изображением идёт 20 (клик по левой стрелке) +5');
console.log('[x] при смене слайдов важно обеспечить плавную смену фоновых изображений. Не должно быть состояний, когда пользователь видит частично загрузившееся изображение или страницу без фонового изображения. Плавную смену фоновых изображений не проверяем: 1) при загрузке и перезагрузке страницы 2) при открытой консоли браузера 3) при слишком частых кликах по стрелкам для смены изображения +5');
console.log('');

console.log('4. Виджет погоды : 15/15')
console.log('[-] город по умолчанию - Минск, пока пользователь не ввёл другой город');
console.log('[x] при перезагрузке страницы приложения указанный пользователем город сохраняется, данные о нём хранятся в local storage +5');
console.log('[x] для указанного пользователем населённого пункта выводятся данные о погоде, если их возвращает API');
console.log('[x] данные о погоде включают в себя: иконку погоды, описание погоды, температуру в °C, скорость ветра в м/с, относительную влажность воздуха в %. Числовые параметры погоды округляются до целых чисел +5');
console.log('[x] выводится уведомление об ошибке при вводе некорректных значений, для которых API не возвращает погоду (пустая строка или бессмысленный набор символов) +5');
console.log('');

console.log('5. Виджет цитата дня: 10/10')
console.log('[x] при загрузке страницы приложения отображается рандомная цитата и её автор +5');
console.log('[x] при перезагрузке страницы цитата обновляется (заменяется на другую). Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +5');
console.log('');

console.log('6. Аудиоплеер : 15/15')
console.log('[x] при клике по кнопке Play/Pause проигрывается первый трек из блока play-list, иконка кнопки меняется на Pause +3');
console.log('[x] при клике по кнопке Play/Pause во время проигрывания трека, останавливается проигрывание трека, иконка кнопки меняется на Play +3');
console.log('[x] треки можно пролистывать кнопками Play-next и Play-prev');
console.log('[x] треки пролистываются по кругу - после последнего идёт первый (клик по кнопке Play-next), перед первым - последний (клик по кнопке Play-prev) +3');
console.log('[x] трек, который в данный момент проигрывается, в блоке Play-list выделяется стилем +3');
console.log('[x] после окончания проигрывания первого трека, автоматически запускается проигрывание следующего. Треки проигрываются по кругу: после последнего снова проигрывается первый. +3');
console.log('[x] плейлист генерируется средствами JavaScript (в ходе кросс-чека этот пункт не проверяется)');
console.log('');




console.log('7. Продвинутый аудиоплеер: 0/20')
console.log('8. Перевод приложения на два языка: 0/15')
console.log('9. Получение фонового изображения от API: 0/10')
console.log('10. Настройки приложения: 0/20')
console.log('11. Дополнительный функционал на выбор: 0/10')






// 
