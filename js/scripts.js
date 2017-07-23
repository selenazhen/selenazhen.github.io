
var contexttwist = {source: "img/logobgorange.jpg", title: "twist", filesource: "twist.html"}
var contextcitra = {source: "img/logobgpurple.jpg", title: "citra"} 
var contextwrap = {source: "img/logo_red.svg", title: "wrap"}
var contexthell = {source: "img/logo_red.svg", title: "hell"}  

var contextnavigationall = {navlinkoptionall: "navlink active", navlinkoptionarchitecture: "navlink", navlinkoptionuidesign: "navlink", navlinkoptionartandphoto: "navlink", navlinkoptionabout: "navlink"} 
var contextnavigationarchitecture = {navlinkoptionall: "navlink", navlinkoptionarchitecture: "navlink active", navlinkoptionuidesign: "navlink", navlinkoptionartandphoto: "navlink", navlinkoptionabout: "navlink"} 
var contextnavigationuidesign = {navlinkoptionall: "navlink", navlinkoptionarchitecture: "navlink", navlinkoptionuidesign: "navlink active", navlinkoptionartandphoto: "navlink", navlinkoptionabout: "navlink"} 
var contextnavigationartandphoto = {navlinkoptionall: "navlink", navlinkoptionarchitecture: "navlink", navlinkoptionuidesign: "navlink", navlinkoptionartandphoto: "navlink active", navlinkoptionabout: "navlink"} 
var contextnavigationabout = {navlinkoptionall: "navlink", navlinkoptionarchitecture: "navlink", navlinkoptionuidesign: "navlink", navlinkoptionartandphoto: "navlink", navlinkoptionabout: "navlink active"} 

var contextpagenameall = {pagename: "all projects"} 
var contextpagenamearchitecture = {pagename: "architecture"} 
var contextpagenameuidesign = {pagename: "ui design"} 
var contextpagenameartandphoto = {pagename: "art and photo"} 
var contextpagenameabout = {pagename: "selena zhen"} 

var contextprojectpagenametwist = {pagename: "twist - span", location: "Carnegie Mellon University", schoolyear: "First Year", semester: "Fall 2016"} 

var contextprojectbannerimagetwist = {source: "img/architecture/twist/photo_elevation_long.jpg"}

var contextprojectdescriptiontwist = {description: "GOAL: to collaborate with a partner to design and build a full-scale, furniture-sized wood structure spanning between two supports that can carry substantial loads from above (e.g. a small person). It needed to focus on creative and tectonic expression, as well as efficiency, structural performance, and stability."}
 
var contextabouttext = {} 
var contextaboutimage = {} 


// -------------


var resulttwist = Handlebars.templates.thumbnail(contexttwist);
var resultcitra = Handlebars.templates.thumbnail(contextcitra);
var resultwrap = Handlebars.templates.thumbnail(contextwrap);
var resulthell = Handlebars.templates.thumbnail(contexthell);

var resultnavigationall = Handlebars.templates.navigation(contextnavigationall);
var resultnavigationarchitecture = Handlebars.templates.navigation(contextnavigationarchitecture);
var resultnavigationuidesign = Handlebars.templates.navigation(contextnavigationuidesign);
var resultnavigationartandphoto = Handlebars.templates.navigation(contextnavigationartandphoto);
var resultnavigationabout = Handlebars.templates.navigation(contextnavigationabout);

var resultpagenameall = Handlebars.templates.pagename(contextpagenameall);
var resultpagenamearchitecture = Handlebars.templates.pagename(contextpagenamearchitecture);
var resultpagenameuidesign = Handlebars.templates.pagename(contextpagenameuidesign);
var resultpagenameartandphoto = Handlebars.templates.pagename(contextpagenameartandphoto);
var resultpagenameabout = Handlebars.templates.pagename(contextpagenameabout);

var resultprojectpagenametwist = Handlebars.templates.projectpagename(contextprojectpagenametwist);

var resultprojectbannerimagetwist = Handlebars.templates.projectbannerimage(contextprojectbannerimagetwist);

var resultprojectdescriptiontwist = Handlebars.templates.projectdescription(contextprojectdescriptiontwist);

var resultabouttext = Handlebars.templates.abouttext(contextabouttext);
var resultaboutimage = Handlebars.templates.aboutimage(contextaboutimage);


// -------------


$(function() {
  $("#thumbnail_twist").html(resulttwist);
});
$(function() {
  $("#thumbnail_citra").html(resultcitra);
});    
$(function() {
  $("#thumbnail_wrap").html(resultwrap);
});
$(function() {
  $("#thumbnail_hell").html(resulthell);
});   

$(function() {
  $("#navigationall").html(resultnavigationall);
});
$(function() {
  $("#navigationarchitecture").html(resultnavigationarchitecture);
});
$(function() {
  $("#navigationuidesign").html(resultnavigationuidesign);
});
$(function() {
  $("#navigationartandphoto").html(resultnavigationartandphoto);
});
$(function() {
  $("#navigationabout").html(resultnavigationabout);
});

$(function() {
  $("#pagenameall").html(resultpagenameall);
});
$(function() {
  $("#pagenamearchitecture").html(resultpagenamearchitecture);
});
$(function() {
  $("#pagenameuidesign").html(resultpagenameuidesign);
});
$(function() {
  $("#pagenameartandphoto").html(resultpagenameartandphoto);
});
$(function() {
  $("#pagenameabout").html(resultpagenameabout);
});

$(function() {
  $("#projectpagenametwist").html(resultprojectpagenametwist);
});

$(function() {
  $("#projectbannerimagetwist").html(resultprojectbannerimagetwist);
});

$(function() {
  $("#projectdescriptiontwist").html(resultprojectdescriptiontwist);
});

$(function() {
  $("#abouttext").html(resultabouttext);
});
$(function() {
  $("#aboutimage").html(resultaboutimage);
});





