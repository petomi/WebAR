//  Init config file  //

//  Prototype object which will be created from config file
function AugmentedObject(patternSource, contentType, contentSource, UrlOnClick, UrlDescription, clickEvent){
  this.patternSource = patternSource; //location of pattern data file for marker. THESE ARE GENERATED USING ARToolkit5/bin/mk_patt.exe
  this.contentType = contentType; //type of media overlaid on physical marker, choose "video" or "image"
  this.contentSource = contentSource; //path to media to overlay
  this.UrlOnClick = UrlOnClick; //url of window to open on click
  this.UrlDescription = UrlDescription; //title of window that opens
  this.clickEvent = clickEvent; //whether to have a click event or not, default should be true, can be overwritten using Augmentedobject.clickEvent = false;
}

/*  Append a new AugmentedObject for each one you want in the scene. Follows this pattern:

    new AugmentedObject(
      PATH_TO_PATTERN_DATAFILE,
      CONTENT_TYPE,
      PATH_TO_CONTENT,
      URL_TO_OPEN_ON_CLICK,
      NAME_OF_OPENED_WINDOW,
      WHETHER_TO_OPEN_SOMETHING_ON_CLICK
    )
*/

var listOfObjects = [
  new AugmentedObject(
    "data/data/patt.coffee",
    "video",
    "vid/coffee.mp4",
    "https://nochildforsale.ca/resource/coffee/",
    "Coffee",
    true
  ),
  new AugmentedObject(
    "data/data/patt.needle",
    "video",
    "vid/sweatshop.mp4",
    "https://nochildforsale.ca/resource/the-issue-cotton-and-child-labour/",
    "Sweatshop",
    true
  ),
  new AugmentedObject(
    "data/data/patt.chocolate",
    "video",
    "vid/chocolate.mp4",
    "https://nochildforsale.ca/resource/infographic-chocolate/",
    "Chocolate",
    true
  )
];
