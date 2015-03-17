
function index(){
	'use stric'

	var htmlEquipo = '', htmlPortafolio = '';

	var portafolio = [
		{name:'Report.IT', img:'icon.png'}
	]

	var equipo = [
		{name:'deyvid', img:'deyvid.png', page:''},
		{name:'daniel', img:'daniel.png', page:''},
		{name:'enrique', img:'eyt.jpg', page:'EYT.html'}
	]

	for(var i in equipo){
		
		htmlEquipo +=
			'<div class="col-md-4">'+
                '<a href="'+equipo[i].page+'">'+
                  '<div>'+
                    '<figure>'+
                        '<img src="img/'+equipo[i].img+'" target="_blank" style="margin: 0 auto;" class="img-responsive" alt="">'+
                        '<figcaption>'+equipo[i].name+'</figcaption>'+
                    '</figure>'+
                  '</div>'+
                '</a>'+
            '</div>'
	}

	for(var i in portafolio){
		htmlPortafolio += 
			'<div class="col-sm-3 portfolio-item">' +
                '<a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">' +
                    '<div class="caption">' +
                        '<div class="caption-content">'+ 
                            '<i class="fa fa-search-plus fa-3x"></i>'+
                        '</div>'+
                    '</div>'+
                    '<figure>'+
                        '<img src="img/'+portafolio[i].img+'" style="margin: 0 auto;" class="img-responsive" alt="">'+
                        '<figcaption>'+portafolio[i].name+'</figcaption>'+
                    '</figure>'+
                '</a>'+
            '</div>'
	}

	$('section#portafolio .row:eq(1)', 'body').append(htmlPortafolio);
	$('section#about .row:eq(1)', 'body').append(htmlEquipo);

};

$(document).on('ready', index)