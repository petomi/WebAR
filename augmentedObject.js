function AugmentedObject(datafromcfgfile){
  this.patternSource = ''; //location of pattern data for marker
  this.contentType = ''; //type of media overlaid on physical marker
  this.contentSource = ''; //path to media to overlay
  this.clickEvent = ''; //whether to have a click event or not
  this.UrlOnClick = ''; //url of window to open on click
  this.UrlDescrip = ''; //title of window that opens
}

//called using:
var AugObj1 = new AugmentedObject("patternSource", "contentType", "contentSource", clickEventTrueFalse, "UrlOnClick", "UrlDescrip");
