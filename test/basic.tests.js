suite('basic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');

  teardown(function () {
    container.innerHTML = '';
  });

  /* TODO
  test('to do: tests', function(done) {
    var fixture = document.createElement('basic-framed-content');
    container.appendChild(fixture);
    flush(function() {
      done();
    });
  });
  */

});

