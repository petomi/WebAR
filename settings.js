//  Init config file  //

//  Prototype object which will be created from config file
function AugmentedObject(patternSource, contentType, contentSource, UrlOnClick, UrlDescription, clickEvent){
  this.patternSource = patternSource; //location of pattern data file for marker. These are generated using ARToolkit5/bin/mk_patt.exe
  this.contentType = contentType; //type of media overlaid on physical marker, choose "video" or "image"
  this.contentSource = contentSource; //path to media to overlay
  this.UrlOnClick = UrlOnClick; //url of window to open on click
  this.UrlDescription = UrlDescription; //title of window that opens
  this.clickEvent = clickEvent; //whether to have a click event or not, default should be true, can be overwritten using Augmentedobject.clickEvent = false;
}

//  ADD THE OBJECTS YOU WANT TO APPEAR IN THE EXPERIENCE BELOW FOLLOWING THIS PATTERN:
//  new AugmentedObject(PATH_TO_PATTERN_DATAFILE, CONTENT_TYPE, PATH_TO_CONTENT, URL_TO_OPEN_ON_CLICK, NAME_OF_OPENED_WINDOW, WHETHER_TO_OPEN_SOMETHING_ON_CLICK)
var listOfObjects = [
  new AugmentedObject("data/data/patt.2", "video", "vid/tanvir.mp4", "https://catalogue.worldvision.ca/products/5196430", "Sponsor Tanvir", true),
  new AugmentedObject("data/data/patt.3", "video", "vid/farzana.mp4", "https://catalogue.worldvision.ca/products/5770018", "Sponsor Farzana", true)
];
