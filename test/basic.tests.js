suite('basic', function() {

  this.timeout(2000);

  var container = document.getElementById('container');

  teardown(function () {
    container.innerHTML = '';
  });

  test('instantiation', function(done) {
    var fixture = document.createElement('basic-framed-content');
    container.appendChild(fixture);
    flush(function() {
      assert(fixture);
      done();
    });
  });

  test('content changed', function(done) {
    var fixture = document.createElement('basic-framed-content');
    var contentDiv = document.getElementById('contentDiv');
    assert(contentDiv);
    container.appendChild(fixture);
    flush(function() {
      fixture.innerHTML = contentDiv.innerHTML;
      // We must use setTimeout rather than flush since the
      // basic-framed-content code sets a timeout tick of 1 to
      // allow the browser to re-render.
      setTimeout(function() {
        var computedHeight = parseFloat(window.getComputedStyle(fixture, null).getPropertyValue("height"));
        computedHeight = Math.floor(computedHeight);
        assert(fixture._lastHeight > 1);
        assert.equal(fixture._lastHeight, computedHeight);
        done();
      }, 10);
    });
  });

});

