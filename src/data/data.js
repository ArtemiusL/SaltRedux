export const data = [
  {
    name: 'name',
    label: 'Имя',
    text: '',
    type: 'text',
    validation: '^[А-Яё]+$',
    validationText: 'Имя должно быть написано русскими буквами'
  },
  {
    name: 'lastName',
    label:'Фамилия',
    text: '',
    type: 'text',
    validation: '^[А-Яё]+$',
    validationText: 'Фамилия должна быть написана русскими буквами'
  },
  {
    name: 'patronymic',
    label:'Отчество',
    text: '',
    type: 'text',
    validation: '^[А-Яё]+$',
    validationText: 'Отчество должно быть написано русскими буквами'
  },
  {
    name: 'dateDay',
    label: 'День рождения',
    text: '',
    lowerLimit: 1,
    upperLimit: 31,
    reverse: false,
    variant: null
  },
  {
    name: 'dateMonth',
    label: 'Месяц рождения',
    text: '',
    variant: ['Января', 'Феварля', 'Март', 'Апреля', 'Май','Июня',
    'Июля', 'Август', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
    lowerLimit: null,
    upperLimit: null
  },
  {
    name: 'dateYear',
    label: 'Год рождения',
    text: '',
    lowerLimit: 1941,
    upperLimit: 1998,
    reverse: true,
    variant: null
  },
  {
    name: 'tel',
    label:'Мобильный телефон',
    text: '',
    type: 'tel',
    validation: '^[0-9]{11}$',
    validationText: 'Телефон указан неверно. Должно быть 11 цифр, например: 89011234567'
  },
  {
    name: 'city',
    label:'Город проживания',
    text: ' ',
    type: 'text',
    validation: '^[А-Я]+$',
    validationText: 'Город должен быть написан русскими буквами'
  },
  {
    name: 'email',
    label:'Email',
    text: ' ',
    type: 'email',
    validation: '^[a-z0-9]+?@[a-z0-9]+?\\.[a-z]{2,6}$',
    validationText: 'Укажите корректный email. Например: name@mail.ru'
  },
  {
    name: 'credit',
    label: 'Кредитная история',
    text: ' ',
    variant: ['Есть кредит, были просрочки платежа', 'Есть текущая просроченная задолженность',
     'Есть кредит, просрочек нет', 'Никогда не брал кредит',
     'Кредит погашен, были просрочки','Кредит погашен, просрочек не было'],
    lowerLimit: null,
    upperLimit: null
  },
]
