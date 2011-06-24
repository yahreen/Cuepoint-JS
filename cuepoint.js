(function() {
  var Cuepoint, Utils, utils;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Utils = (function() {
    function Utils() {}
    Utils.prototype.log = function(args) {
      this.args = args;
      if (window.console) {
        return console.log(Array.prototype.slice.call(this, arguments));
      }
    };
    return Utils;
  })();
  Cuepoint = (function() {
    __extends(Cuepoint, Utils);
    function Cuepoint() {
      this.nativeKeys = Object.keys;
    }
    Cuepoint.prototype.init = function(slides) {
      var key, value;
      this.slides = slides;
      this.subtitles = document.getElementById("subtitles");
      this.video = document.getElementById("video");
      for (key in slides) {
        value = slides[key];
        this.addSlide(key, value);
      }
      return this.events.call;
    };
    Cuepoint.prototype.events = function() {};
    Cuepoint.prototype.currentTime = function() {
      return this.video.currentTime;
    };
    Cuepoint.prototype.update = function(html) {
      this.html = html;
      return this.subtitles.innerHTML = this.html;
    };
    Cuepoint.prototype.toString = function(html) {
      this.html = html;
    };
    Cuepoint.prototype.setTime = function(time) {
      this.time = time;
      this.video.currentTime = time;
      return this.video.play();
    };
    Cuepoint.prototype.addSlide = function(time, html) {
      var self;
      this.time = time;
      this.html = html;
      self = this;
      return this.video.addEventListener("timeupdate", function() {
        if (this.currentTime >= time && this.currentTime <= time + 0.3) {
          return self.update(html);
        }
      }, false);
    };
    Cuepoint.prototype.play = function() {
      return this.video.play();
    };
    Cuepoint.prototype.pause = function() {
      if (!this.video.paused) {
        return this.video.pause();
      }
    };
    return Cuepoint;
  })();
  utils = new Utils;
  window.cuepoint = new Cuepoint;
}).call(this);
