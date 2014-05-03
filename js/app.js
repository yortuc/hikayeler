var app = function () {
		
	var self = this;

	self.limit = 250;

	self.hikaye = ko.observable(" ");

	self.hikayeler = ko.observableArray();

	self.birOnceki = ko.computed(function(){
		return self.hikayeler()[ self.hikayeler().length-1 ];
	});

	self.kaydet = function(){

		if( self.hikaye().length < 100 ){
			alert('En az 100 karakter yazmalısınız.');
			return;
		};

		self.hikayeler.push( self.hikaye() );
		self.hikaye(" ");

		console.log(self.hikayeler());
	};

	self.karistir = function shuffle(array) {
	  var currentIndex = array.length
	    , temporaryValue
	    , randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	};

	self.yapistir = function(){
		$("#carsaf").html(  self.karistir( self.hikayeler() ).join('<br/>') );
	};
}

ko.applyBindings(new app());