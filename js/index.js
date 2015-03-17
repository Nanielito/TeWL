
function index() {
	'use stric'

	var htmlEquipo = '', htmlPortafolio = '';

	var portafolio = [
		{name:'Report.IT', img:'icon.png'}
	]

	var equipo = [
		{
            name      : 'deyvid',
            img       : 'quienesomos/deyvid.png',
            page      : '',
            fullName  : 'Deyvid Martínez',
            position  : 'Lider - Desarrollador',
            facebook  : '',
            twitter   : '',
            instagram : '',
            linkedin  : '',
            github    : '',
        },
		{
            name      : 'daniel',
            img       : 'quienesomos/daniel.png',
            page      : '',
            fullName  : 'Daniel Ramírez',
            position  : 'Desarrollador',
            facebook  : '',
            twitter   : '',
            instagram : '',
            linkedin  : '',
            github    : '',
        },
		{
            name      :'enrique',
            img       :'quienesomos/enrique.png',
            page      :'EYT.html',
            fullName  :'Enrique Yépez',
            position  :'Desarrollador',
            facebook  : '',
            twitter   : '',
            instagram : '',
            linkedin  : '',
            github    : '',
        }
	]

	for(var i in equipo){
		
		htmlEquipo +=
			'<div class="col-md-4">' +
                '<a href="' + equipo[i].page + '" target="_blank" >' +
                    '<div>'+
                        '<figure>' +
                            '<div class="timeline-image">' +
                                '<img src="img/' + equipo[i].img + '" height="300" width="300" style="margin: 0 auto;" class="img-circle img-responsive" alt="">' +
                                '<figcaption></figcaption>' +
                            '</div>' +
                        '</figure>'+
                        '<br>' +
                        '<h5>' + equipo[i].fullName + '</h5>' +
                        '<p class="text-muted">'+ equipo[i].position + '</p>'+
                        '<ul class="social list-inline">' +
                            '<li><a target="_blank" href="' + equipo[i].facebook + '"><i class="fa fa-facebook"></i></a></li>' +  
                            '<li><a target="_blank" href="' + equipo[i].twitter + '"><i class="fa fa-twitter"></i></a></li>' +
                            '<li><a target="_blank" href="' + equipo[i].instagram + '"><i class="fa fa-instagram"></i></a></li>' +
                            '<li><a target="_blank" href="' + equipo[i].linkedin + '"><i class="fa fa-linkedin"></i></a></li>' +
                            '<li class="last-item"><a target="_blank" href="' + equipo[i].github + '"><i class="fa fa-github-alt"></i></a></li>' +
                        '</ul>' +
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