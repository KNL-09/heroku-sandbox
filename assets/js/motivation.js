let str = [{
  key: '(emploi)',
  value: 'JOB'
}, {
  key: '(reference)',
  value: '&middot; REF'
}, {
  key: '(competences)',
  value: 'SKILLS'
}, {
  key: '(company)',
  value: 'COMPANY'
}, {
  key: '(adress)',
  value: 'ADDRESS'
}, {
  key: '(adress2)',
  value: 'ZIP CITY'
}, {
  key: '(when)',
  value: 'DO WHEN'
}
]

let letter = document.querySelector('.js-letter');
str.forEach(item => {
  while(letter.innerHTML.indexOf(item.key) > 0)
    letter.innerHTML = letter.innerHTML.replace(item.key, item.value);
});
