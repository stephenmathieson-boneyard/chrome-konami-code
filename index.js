
var konami = require('konami-code');
var body = document.body;
var timeout = null;

konami(function () {
  if (document.getElementById('konami-wrapper') || timeout) return;

  var wrapper = document.createElement('div');
  wrapper.id = 'konami-wrapper';

  var payload = document.createElement('div');
  payload.id = 'konami-payload';

  body.insertBefore(wrapper, body.firstChild);
  wrapper.appendChild(payload);

  timeout = setTimeout(function () {
    body.removeChild(wrapper);
    timeout = null;
  }, 4000);
});
