var el = document.getElementsByTagName('dd');
console.log(el);
for (var i = 0; i < el.length; i++) {
  var process = el[i].dataset.process;
  var span_el = el[i].querySelector('span');
  span_el.setAttribute('style', 'width:' + process + '%')
}