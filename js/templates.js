(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['aboutimage'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<img src=\"img/headshot.jpg\">";
},"useData":true});
templates['abouttext'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p>I’m currently a student at Carnegie Mellon University pursuing my Bachelor’s Degree in Architecture as well as a passion for the beauty of experience and detail. I strongly believe in the process of design and its applications to situations outside of architecture and design, and am looking forward to ways I can improve human experience, expand my skillset, and develop new methods of approach to design.</p>";
},"useData":true});
templates['navigation'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\" style=\"margin-right: 10px;\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span>MENU</span>\n      </button>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"pull-left hidden-xs\"><a class=\"navbar-brand logo\" href=\"all.html\"><img class=\"navlogo\" src=\"img/logoblack.svg\"><img class=\"navlogo\" src=\"img/logohover.svg\"></a></li>\n        <li class=\""
    + alias4(((helper = (helper = helpers.navlinkoptionall || (depth0 != null ? depth0.navlinkoptionall : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"navlinkoptionall","hash":{},"data":data}) : helper)))
    + "\"><a href=\"all.html\">all</a></li>\n        <li class=\""
    + alias4(((helper = (helper = helpers.navlinkoptionarchitecture || (depth0 != null ? depth0.navlinkoptionarchitecture : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"navlinkoptionarchitecture","hash":{},"data":data}) : helper)))
    + "\"><a href=\"architecture.html\">architecture</a></li>\n        <li class=\""
    + alias4(((helper = (helper = helpers.navlinkoptionuidesign || (depth0 != null ? depth0.navlinkoptionuidesign : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"navlinkoptionuidesign","hash":{},"data":data}) : helper)))
    + "\"><a href=\"uidesign.html\">ui design</a></li>\n        <li class=\""
    + alias4(((helper = (helper = helpers.navlinkoptionfun || (depth0 != null ? depth0.navlinkoptionfun : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"navlinkoptionfun","hash":{},"data":data}) : helper)))
    + "\"><a href=\"fun.html\">fun</a></li>\n        <li class=\""
    + alias4(((helper = (helper = helpers.navlinkoptionabout || (depth0 != null ? depth0.navlinkoptionabout : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"navlinkoptionabout","hash":{},"data":data}) : helper)))
    + "\"><a href=\"about.html\">about</a></li>\n        <li class=\"navlink pull-right hidden-xs\"><a class=\"exiticon\" href=\"index.html\"><img class=\"exiticonsvg\" src=\"img/exitblack.svg\"><img class=\"exiticonsvg\" src=\"img/exithover.svg\"></a></li>\n      </ul>\n    </div>\n  </div>\n</nav>";
},"useData":true});
templates['pagename'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h1>"
    + container.escapeExpression(((helper = (helper = helpers.pagename || (depth0 != null ? depth0.pagename : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"pagename","hash":{},"data":data}) : helper)))
    + "</h1>";
},"useData":true});
templates['person'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"entry\">\n  <h1>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n  <div class=\"body\">\n    "
    + alias4(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper)))
    + "\n  </div>\n</div>\n";
},"useData":true});
templates['projectbannerimage'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<img class=\"thumbnailimg\" src="
    + container.escapeExpression(((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"source","hash":{},"data":data}) : helper)))
    + ">";
},"useData":true});
templates['projectdescription'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<p>"
    + alias4(((helper = (helper = helpers.goal || (depth0 != null ? depth0.goal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"goal","hash":{},"data":data}) : helper)))
    + "</p>\n<p>"
    + alias4(((helper = (helper = helpers.description1 || (depth0 != null ? depth0.description1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description1","hash":{},"data":data}) : helper)))
    + "</p>\n<p>"
    + alias4(((helper = (helper = helpers.description2 || (depth0 != null ? depth0.description2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description2","hash":{},"data":data}) : helper)))
    + "</p>\n<p>"
    + alias4(((helper = (helper = helpers.partner || (depth0 != null ? depth0.partner : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"partner","hash":{},"data":data}) : helper)))
    + "</p>";
},"useData":true});
templates['projectpagename'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h1>"
    + alias4(((helper = (helper = helpers.pagename || (depth0 != null ? depth0.pagename : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pagename","hash":{},"data":data}) : helper)))
    + "</h1>\n<hr>\n<p>"
    + alias4(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data}) : helper)))
    + "</p>\n<p>"
    + alias4(((helper = (helper = helpers.schoolyear || (depth0 != null ? depth0.schoolyear : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"schoolyear","hash":{},"data":data}) : helper)))
    + "  |  "
    + alias4(((helper = (helper = helpers.semester || (depth0 != null ? depth0.semester : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"semester","hash":{},"data":data}) : helper)))
    + "</p>";
},"useData":true});
templates['thumbnail'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href="
    + alias4(((helper = (helper = helpers.filesource || (depth0 != null ? depth0.filesource : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"filesource","hash":{},"data":data}) : helper)))
    + "><div class=\"image\">\n<img class=\"thumbnailimg\" src="
    + alias4(((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"source","hash":{},"data":data}) : helper)))
    + "></div></a>\n\n<p>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>";
},"useData":true});
})();