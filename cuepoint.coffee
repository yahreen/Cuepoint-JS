#Cuepoint Coffee. A library for HTML5 Video Subtitles
class Utils
	log: (@args) ->
		console.log arguments.slice if window.console 

class Cuepoint extends Utils
	constructor: ->
	  @nativeKeys = Object.keys
	init: (@slides) ->
	    #We need a reference to the basic elements we're using
		@subtitles = document.getElementById "subtitles"
		@video = document.getElementById "video" 
		for key, value of slides
			this.addSlide key, value
		this.events.call
		
	events: ->
		#Make cue point links if needed. Reqires underscore.js.
		
	currentTime: ->
		@video.currentTime
		
	update: (@html) ->
	    @subtitles.innerHTML = @html
	
	toString: (@html) ->
		
	addSlide: (@time, @html) ->
		self = this
		@video.addEventListener "timeupdate", ->
				if this.currentTime >= time and this.currentTime <= time + 0.3
					self.update html
		, false
	play: ->
		@video.play()
	pause: ->
		if not @video.paused
			@video.pause()
	
utils = new Utils
window.cuepoint = new Cuepoint
		

	


