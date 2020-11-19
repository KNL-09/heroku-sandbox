let str = [{
  key: '(emploi)',
  value: 'Développeur front-end confirmé (H/F)'
}, {
  key: '(reference)',
  value: '&middot; Ref TLSDEVFRONT'
}, {
  key: '(competences)',
  value: 'développement, référent technique, mises en place de bonnes pratiques...'
}, {
  key: '(company)',
  value: 'ACTIVUS'
}, {
  key: '(adress)',
  value: 'Bat E  &middot; 1 chemin du Pigeonnier de la Cépière'
}, {
  key: '(adress2)',
  value: '31100 TOULOUSE'
}, {
  key: '(when)',
  value: 'Fait à Tournefeuille, le 06/05/2020'
}
]
str = [{
  key: '(emploi)',
  value: 'Développeur front-end Senior (H/F)'
}, {
  key: '(reference)',
  value: '&middot; Ref IT01331'
}, {
  key: '(competences)',
  value: 'développement, référent technique, mises en place de bonnes pratiques...'
}, {
  key: '(company)',
  value: 'TAlENTS-RH'
}, {
  key: '(adress)',
  value: 'TOUOUSE'
}, {
  key: '(adress2)',
  value: ''
}, {
  key: '(when)',
  value: 'Fait à Tournefeuille, le 06/05/2020'
}
]
str = [{
  key: '(emploi)',
  value: 'Expert Front-End'
}, {
  key: '(reference)',
  value: ''
}, {
  key: '(competences)',
  value: 'développement, référent technique, mises en place de bonnes pratiques, veille technologique, évolution...'
}, {
  key: '(company)',
  value: 'Monkey Patch'
}, {
  key: '(adress)',
  value: 'TOUOUSE'
}, {
  key: '(adress2)',
  value: ''
}, {
  key: '(when)',
  value: 'Fait à Tournefeuille, le 29/06/2020'
}
]

let letter = document.querySelector('.js-letter');
str.forEach(item => {
  while(letter.innerHTML.indexOf(item.key) > 0)
    letter.innerHTML = letter.innerHTML.replace(item.key, item.value);
});
