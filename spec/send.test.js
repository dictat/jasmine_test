jest.dontMock('../public/js/send.js');

describe('AJAX send ', function() {
  it('calls into $.ajax with the correct params', function() {
    var $ = require('jquery');
    var fetchCurrentUser = require('../public/js/send');
    // Call into the function we want to test
    function dummyCallback() {}
    fetchCurrentUser(dummyCallback);
    // Now make sure that $.ajax was properly called during the previous
    // 2 lines
    expect($.ajax).toBeCalledWith({
      type: 'GET',
      url: 'http://www.yahoo.co.jp/send',
      success: jasmine.any(Function)
    });
      });
});