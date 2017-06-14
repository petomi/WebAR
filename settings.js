//  Init config file  //

//  Prototype object which will be created from config file
function AugmentedObject(patternSource, contentType, contentSource, UrlOnClick, UrlDescription){
  this.patternSource = patternSource; //location of pattern data file for marker. These are generated using ARToolkit5/bin/mk_patt.exe
  this.contentType = contentType; //type of media overlaid on physical marker, choose "video" or "image"
  this.contentSource = contentSource; //path to media to overlay
  this.UrlOnClick = UrlOnClick; //url of window to open on click
  this.UrlDescrip = UrlDescription; //title of window that opens
  this.clickEvent = True; //whether to have a click event or not, defaults to true, can be overwritten using Augmentedobject.clickEvent = False;
}

//  ADD THE OBJECTS YOU WANT TO APPEAR IN THE EXPERIENCE BELOW FOLLOWING THIS PATTERN:
//  new AugmentedObject(PATH_TO_PATTERN_DATAFILE, CONTENT_TYPE, PATH_TO_CONTENT, URL_TO_OPEN_ON_CLICK, NAME_OF_OPENED_WINDOW)
var listOfObjects = [
  new AugmentedObject("data/data/patt.2", "video", "vid/tanvir.mp4", "https://catalogue.worldvision.ca/products/5196430", "Sponsor Tanvir"),
  new AugmentedObject("data/data/patt.3", "video", "vid/farzana.mp4", "https://catalogue.worldvision.ca/products/5770018", "Sponsor Farzana")
];
