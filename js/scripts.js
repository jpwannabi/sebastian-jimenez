// JavaScript Document

$(window).load(function(){
	//Flexslider
	$('#slider-noticias-recientes').flexslider({
		animation: "slide",
	});
  
  $('#slider-produtos-home').flexslider({
  		animation: "slide",
  		controlNav: false, 
  	});
  
  
	//masonry
	var container = document.querySelector('#notas');
	var msnry = new Masonry( container, {
	// options
	singleMode:true,
	itemSelector: '.item'
	});
	
	
	

	
	/*$(".rand-color").each(function() {
		var colors = ["#55c3e3","#58dcce","#e46161","#72bef4","#5792c9","#ffbf74"];
		var rand = Math.floor(Math.random()*colors.length);
		 $(this).css("background-color", colors[rand]);
	});*/
	
	// Create the dropdown base
	$("<select />").appendTo("nav");
	// Create default option "Go to..."
	$("<option />", {
	   "selected": "selected",
	   "value"   : "",
	   "text"    : "Menú"
	}).appendTo("nav select");
	
	// Populate dropdown with menu items
	$("nav a").each(function() {
	 var el = $(this);
	 $("<option />", {
		 "value"   : el.attr("href"),
		 "text"    : el.text()
	 }).appendTo("nav select");
	});
	$("nav select").change(function() {
		window.location = $(this).find("option:selected").val();
	});
	
	
  
	$('#animales  input:checkbox').change(function(){
	  var tempAnimalesValue='';
	  tempAnimalesValue=$('#animales  input:checkbox').map(function(n){
		  if(this.checked){
				return  this.value;
			  };
	   }).get().join('&nbsp;-&nbsp;');
	console.log(tempAnimalesValue);
	   $('#animales-seleccionados').html(tempAnimalesValue);
	})

	$('#especialidad  input:checkbox').change(function(){
	  var tempEspecialidadValue='';
	  tempEspecialidadValue=$('#especialidad  input:checkbox').map(function(n){
		  if(this.checked){
				return  this.value;
			  };
	   }).get().join('&nbsp;-&nbsp;');
	console.log(tempEspecialidadValue);
	   $('#especialidad-seleccionada').html('&nbsp;-&nbsp;'+tempEspecialidadValue);
	})
	
	$('#ubicacion  input:checkbox').change(function(){
	  var tempEspecialidadValue='';
	  tempEspecialidadValue=$('#ubicacion  input:checkbox').map(function(n){
		  if(this.checked){
				return  this.value;
			  };
	   }).get().join('&nbsp;-&nbsp;');
	console.log(tempEspecialidadValue);
	   $('#ubicacion-seleccionada').html('&nbsp;-&nbsp;'+tempEspecialidadValue);
	})
	
	//function displayVals() {
		//var singleValues = $( "#single" ).val();
		//var multipleValues = $( "#multiple" ).val() || [];
		//$( "#ubicacion-seleccionada" ).html( /*"&nbsp;-&nbsp;<b>Ciudad:&nbsp;</b> " + singleValues +*/
		//" <b>Comuna(s):&nbsp;</b> " + multipleValues.join( ", " ) );
	//}
	
	//$( "#ubicacion select" ).change( displayVals );
	//displayVals();


  
  $('#MainMenu a.item').click(function () {
  		$('#MainMenu a.item').not(this).removeClass('active');
  		$(this).addClass('active');
  	});	
  
  	
  	// maginficador de fotos
  		$('.my-foto').imagezoomsl({ 
  	
  			  innerzoommagnifier: true,
  			  classmagnifier: window.external ? window.navigator.vendor === 'Yandex' ? "" : 'round-loope' : "", // fix для Opera, Safary, Yandex
  			  magnifierborder: "5px solid #F0F0F0",                 // fix для Opera, Safary, Yandex		  
  			  zoomrange: [2, 8],
  			  zoomstart: 2,
  			  magnifiersize: [200, 200]	
  		});  
  
  
  
});

