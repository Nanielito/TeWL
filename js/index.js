
function index(){
	'use stric'

	var htmlEquipo = '', htmlPortafolio = '';

	var portafolio = [
		{name:'Report.IT', img:'icon.png'}
	]

	var equipo = [
		{name:'deyvid', img:'deyvid.png', page:'', fullName:'Deyvid Martínez', responsable: 'Lider - Desarrollador'},
		{name:'daniel', img:'daniel.png', page:'',fullName:'Daniel Ramírez', responsable: 'Desarrollador'},
		{name:'enrique', img:'eyt.jpg', page:'EYT.html',fullName:'Enrique Yépez', responsable: 'Desarrollador'}
	]

	for(var i in equipo){
		
		htmlEquipo +=
			'<div class="col-md-4">'+
                '<a href="'+equipo[i].page+'" target="_blank" >'+
                  '<div>'+
                    '<figure>'+
                    	'<div class="timeline-image">' +
                            '<img src="img/'+equipo[i].img+'" style="margin: 0 auto;" class="img-circle img-responsive" alt="">'+
                        	'<figcaption></figcaption>'+
                        '</div>' +
                    '</figure>'+
                     '<h4>'+equipo[i].fullName+'</h4>'+
	                    '<p class="text-muted">'+equipo[i].responsable+'</p>'+
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