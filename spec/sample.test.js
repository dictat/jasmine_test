const sampleDom = require('./../public/js/sample')
const $ = require('jquery');

function changeTitle() {
  $("#title").text("Sample Page")
}
test('change title', () => {
  document.body.innerHTML = sampleDom;
  changeTitle()
  expect($('#title').text()).toEqual('Sample Page');
})

