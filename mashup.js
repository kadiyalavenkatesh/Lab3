<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=8" />
    
    <title>360Cities.net</title>
    <script type="text/javascript" src="//www.google.com/jsapi"></script>
    <script>google.load('maps','3', {other_params: "sensor=false&key=AIzaSyCShWBGzLDYp5o1duUqbS0Z-Qtxf9TZHPs"});</script>
    <link href="/stylesheets/cache/map_layout_common-1.15.css?1378367395" media="screen" rel="stylesheet" type="text/css" /><script src="/javascripts/cache/map_layout_common-1.15.js?1378367398" type="text/javascript"></script>    <script type="text/javascript" src="/javascripts/dynamic/translation_texts.js"></script>

    <style media="all" type="text/css"></style>
    <!--[if lte IE 6]>
        <link rel="stylesheet" type="text/css" href="/stylesheets/ie5-6.css" />
    <![endif]-->
    <!--[if IE 7]>
        <link rel="stylesheet" type="text/css" href="/stylesheets/ie7.css" />
    <![endif]-->

    <link rel="icon" href="/favicon.png" type="image/png"/>
<link href="https://plus.google.com/114583890393620648845" rel="publisher" />
    <script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-245913-4']);
  _gaq.push(['_trackPageview']);
  _gaq.push(['_trackPageLoadTime']);


  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
  </head>
  <body id="city">

    <!-- Search result info box, to pop up when a search result is rolled over -->
    <div id="resultInfo" class="popup">
    </div>
    <!-- ////////  END  ////////// -->
    

<div id="header">
  <div id="headerContainer">
    <a href="http://www.360cities.net/">
      <img id="logo" src="/images/logo/360cities_logo.91x42.png" alt="360Cities logo" />
    </a>
          <ul class="menu pos">
        <li><a href="/mobile-app?utm_source=360cities&utm_medium=link&utm_content=header&utm_campaign=mapp_campaign" onclick="_gaq.push(['_trackEvent', 'MappCampaign', 'GoToLandingPage', 'header']);" id='menu-blog'><span class="left"></span><span class="right"></span>Mobile App</a></li>
        <li><a id="menu-map" href="http://www.360cities.net/map">World Map</a></li>
        <li><a id="menu-back-to-map" href="http://www.360cities.net/map" style="display: none;">Back to Map</a></li>
        <li><a id="menu-howto" href='http://help.360cities.net/taking-panoramic-pictures/how-to-get-started'><span class="left"></span><span class="right"></span>How To</a></li>
        <li><a id="menu-gigapix" href='/commission-gigapixel'><span class="left"></span><span class="right"></span>Gigapixels</a></li>
        <li><a id="menu-license" href='/panorama-licensing'><span class="left"></span><span class="right"></span>Licensing</a></li>
      </ul>
      <form id="headerOptions" action="">
        <fieldset>
          <ul>
            <li id="loggedInName">
              

  <a href="/account/login" title="Log in to your 360cities.net account">Sign In</a>
  /
  <a class="join" href="/signup" title="Become a photographer on 360Cities.net">Sign Up</a>

            </li>
                                                                                                                                                            <li><input type="text" value="Search" id="search_field"/></li>
          </ul>
        </fieldset>
      </form>
      </div>
</div>
<script>
  var currentFocus = null;
  jQuery('#search_field').focus(function(){
    jQuery(this).val('');
    currentFocus = 'search_field';
  }).blur( function() {
    currentFocus = null;
  });
  //set up form like behavior for enter key press when search field has focus
  jQuery(document).keydown( function( e ) {
    if( e.which == 13 && currentFocus == 'search_field' ) {
      document.location = '/search/'+jQuery('#search_field').val().replace(/ /g,'-');
      return false;
    }
  });
      jQuery.get('/ajax/1/_logged_in_name',{},function(data,textStatus) {
      $('#loggedInName').html(data['logged_in_name']);
    }, "json");
  </script>

    <div id="markerWindow">
  <div id="markerWindowHeader">
    <a href="#" id="markerWindowClose">&nbsp;</a>
    <p id="markerWindowTitle">
    <a href="#" id="markerWindowZoom">Zoom in to see <span id="markerWindowPanoCount"></span> more panoramas.</a>
    </p>
  </div>

  <div id="markerWindowMain" class="markerWindowSingle">
    <div id="markerWindowMainImage">
    </div>
  </div>

  <div id="markerWindowFooter">
  </div>
</div>

<ul id="locationTrail"></ul>

<div id="map_canvas">
</div>


<div id="searchBar">
  <input name="searchWhere" id="searchWhere" type="text" value="" placeholder="Enter a place"/>
  <input name="search" id="search" type="submit" value="go" class="button" />
</div>
<div id="searchMessage">&nbsp;</div>

</div>

<div id="map_mapp_campaign" style="width: 100%; bottom: 25px; position: absolute; text-align: center; z-index: 4;">
  <a href="/mobile-app?utm_source=360cities&utm_medium=link&utm_content=MapBannerRedV1&utm_campaign=mapp_campaign" onclick="_gaq.push(['_trackEvent', 'MappCampaign', 'GoToLandingPage', 'MapBannerRedV1']);" >    <img src="/images/mapp_campaign/b3.png" alt="360Cities iPhone Application" />
  </a>
  <span style="top: -60px; left: -25px; position: relative; cursor: pointer;" onclick="jQuery('#map_mapp_campaign').hide();">
    &nbsp; &nbsp; &nbsp;
  </span>
  <script type="text/javascript">
    jQuery(document).ready(function($) {
      _gaq.push(['_trackEvent', 'MappCampaign', 'MapBannerDisplayed', 'MapBannerRedV1']);
    });
  </script>
</div>


    <a id='modalTrigger' class='modalPopup hidden' title='infoWindow' href='/map/mp_template.html'>hidden</a>
  </body>
</html>
