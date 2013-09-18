Number.prototype.times = function (block) {
  var len = this.valueOf();
  while (len--) {
    block(len);
  }
};
