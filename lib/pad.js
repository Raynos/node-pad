// Generated by CoffeeScript 1.4.0

module.exports = function(string, size, char) {
  var i, pad, _i, _size;
  if (char == null) {
    char = ' ';
  }
  if (typeof string === 'number') {
    _size = size;
    size = string;
    string = _size;
  }
  string = string.toString();
  pad = '';
  size = size - string.length;
  for (i = _i = 0; 0 <= size ? _i < size : _i > size; i = 0 <= size ? ++_i : --_i) {
    pad += char;
  }
  if (_size) {
    return pad + string;
  } else {
    return string + pad;
  }
};
