//Init config file//
//TODO: open and parse config file, load results into object



//Prototype object which will be created from config file
function AugmentedObject(patternSource, contentType, contentSource, UrlOnClick, UrlDescription){
  this.patternSource = patternSource; //location of pattern data for marker
  this.contentType = contentType; //type of media overlaid on physical marker
  this.contentSource = contentSource; //path to media to overlay
  //this.clickEvent = clickEvent; //whether to have a click event or not
  this.UrlOnClick = UrlOnClick; //url of window to open on click
  this.UrlDescrip = UrlDescription; //title of window that opens
}

  //TODO: DOCUMENT THIS SOMEWHERE For each marker, run ARToolkit5/bin/mk_patt.exe and create a patt file for your marker. Then link it below.
var listOfObjects = [
  new AugmentedObject("data/data/patt.2", "video", "vid/tanvir.mp4", "https://catalogue.worldvision.ca/products/5196430", "Sponsor Tanvir"),
  new AugmentedObject("data/data/patt.3", "video", "vid/farzana.mp4", "https://catalogue.worldvision.ca/products/5770018", "Sponsor Farzana")
];
