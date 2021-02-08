<img src="https://charliekranz.github.io/Bread-Brew-Books-Banjos/assets/img/btb-examples.jpg">

# <center>Browse the Best: Bread, Brew, Books and Banjos</center>

Browse the Best: Bread, Brew, Books and Banjos allows you to “travel” anywhere in the world 
and explore the four most important things you can do in a city - the 4 B’s: eat Bread, drink Brew 
read Books and hear Banjos* (*music may or may not include Banjos). :)

Using the power of Google Places API, Browse the Best simplifies Place Searches functionality
making the experience both **wide** — by allowing for a variety of activities and interests all across the world but also **focused** by limiting the scope to four basic things a visitor would likely be interested in.

I considered the main things people often do in a city and: getting a coffee or a bite to eat,
browsing some books and hearing live music were all contenders. Also, each of these categories/activities lend themselves to solo and group associations, further expanding the usefulness of the functionality.

***

## UX (User Experience)

### User Stories
- #### First Time Visitor Goals
    1. As a First Time Visitor, I want to clearly understand the outlay and functionality of the website.
    2. As a First Time Visitor, I want to be able to quickly modify my searches by category and place.
    3. As a First Time Visitor, I want the UI to provide feedback reflecting my actions.
    4. As a First Time Visitor, I want to be able to search any city in the world without needing to use the Country filter dropdown.
    4. As a First Time Visitor, I want to have the option to delve further into the result specifics - website, locations, etc.
    5. As a First Time Visitor, I want to appreciate that the simplified process of Browse the Best offers ample information for
    visiting and exploring a city - both **virtually** and **physically**

 - #### Returning Visitor Goals
    1. As a Returning Visitor, I want to be able to perform searches quickly.
    2. As a Returning Visitor, I want to be able to explore the world and learn about other cities' offerings.
    3. As a Returning Visitor, I want to be able to restrict city searches to specific countries, allowing me to explore more specific regions and countries.

- #### Frequent User Goals
    1. As a Frequent User, I want to be able to refer others to the website.

## Design

- ### Branding 
    - Alliteration of the B sound in both website name and the Search Options: Bread, Brew, Books and Banjos
    - Clear iconography for the four categories

- ### Colours
    - Following the Green theme of the Google Places API, using green as the key Colour
    - Otherwise clean black and white allowing the Map and Results to stand out

- ### UI
    - Clean, simple UI
    - 2 column layout for side-by-side fuctionaity on larger screens
    - 1 column layout on smaller devices, allowing a Map-first ordering

- #### Typography
    - Poppins font for bolder, larger text
    - Open Sans for body and smaller text
    - Sans Serif as the fallback

- #### Imagery
    - Google Maps provides a literal window to the world through the Map
    - Using the optional Google Map UI and layer options so user can opt to look at topography and Street View.

- #### Wireframes
    - Wireframe 1: [View](https://charliekranz.github.io/Bread-Brew-Books-Banjos/assets/img/BBBB-wireframe-1.jpg)<br>
    - Wireframe 2:  [View](https://charliekranz.github.io//Bread-Brew-Books-Banjos/assets/img/BBBB-wireframe-2.jpg)<br>

## Features

* Intro Modal provides introduction, explaining the "pick a type" and "choose a location" steps.
* Modal is easily x-ed out or skipped via the Start Browsing button.
* Header - Identity, Type Buttons and Search field with optional Country Drop Down
* Country Dropdown allows for restricted city autocomplete by country
* Map - default and dynamic states, user can zoom and search within Map
* Listings results - allows user to move to location by clicking on markers
* Map Markers - allows user to additional information including url hyperlink to website (if available)
* Responsivity - Responsive across devices - allowing optimised one and two column layouts
* Google Map layers allows user to look at satelitte and Street View as well as simplified map view

<img src="/assets/img/pop-up.jpg" >


## Features which could be added 

* Would like to develop branding and ideally bring the FontAwesome icons as markers onto maps
* Would also like to explore a four-color code, similar to initial wireframes
* Refine some results - Google Places groups some establishments I'd rather filter out such as "bookmakers" for "book_stores"
* Likewise would look at adding explicit/coded keywords to expand to type categories 
* Would look at additional styling of map - https://mapstyle.withgoogle.com/
* May also bring some Places Photos images into the results table, and/or on the Map Marker Info Boxes
* Mult-language support
* I would also like to return to looking at integrating the search and select functions into an introductory modal.

## Development history
* I was intrigued by Google Places and Map API from the Code Institute module, however I found it difficult to integrate
initially. This project gave me ample opportunity to grapple with the Developer Console and Credentials and API key set-up and integration.
* I knew the API would have some excellent functionality and a wealth of data to access, so I chose to go forward with it for my project.
* Once I had the API working and results returning, I began to imagine a range of things I could do with it.
* I was happy that the simplification of the search types still allowed for an interesting searching experience. It truly
is amazing how much data Googe has on offer. 

## Debugging

* Undefined selection
    - The Google Places API defaulted to "lodging" type if a place was not specified
    - Initially I thought that by restricting the search from occurring until after a type was selected, that this could be avoided.
    - I had this hidden as a conditional, secondary step occurring in the modal (initially) and then on website itself
    - Once a category/type button had an active state, the city/country inputs appeared
    - However, I was still seeing occasional "lodging" results even after these implementations.
    - Upon investigation it was determined that this occurred when the selection had an "undefined" state - even though a button was active.
    - I got advice from a former colleague that by restricting the search function to only the four keyword type I wanted, this could be avoided. (cafe, bakery, book_store and night_club)

## Technologies Used

* HTML and CSS programming languages
* [Balsamiq](https://balsamiq.com/) - wireframing tool
* [Slack](https://slack.com/) - networking and communications
* [GitHub](https://github.com/) - code repository
* [GitPod](https://www.gitpod.io/) - cloud dev environment
* [Bootstrap](https://getbootstrap.com/) - responsive sourcetoolkit with components and Javascipt plugins
* [fontawesome](https://fontawesome.com/v4.7.0/) - vector icons customisable through CSS
* [Google Fonts](https://fonts.google.com/) - open source web font collection
* [Google Places API](https://cloud.google.com/maps-platform/places/) - to access and retrieve results data from Google's millions of Place Locations
* [Google Maps API](http://cloud.google.com/maps-platform/) - to display map
* [Google Developer](https://console.developers.google.com/) - to access Google APIs
* [jQuery](https://jquery.com/) - add state to button

## Testing 

- ## Modal
    * Loaded page to test that modal always appears
    * Tested that modal always closed using X-button and/or Get Started Button

- ## Type Selection Buttons
    * Clicked on each of the four category / type buttons to verify the corresponding hover and active states always appeared
    * Checked that Active State corresponded to the appropriate button clicked
    * Checked selection returned in Googe Chrome Console to assure that the appropriate selection type was returned on click

- ## City Search Field -
    * Checked city autocomplete to verify functionality
    * Checked autocomplete in ALL COUNTRIES mode to assure that the country restrictions did not come into effect
    * Checked autocomplete in SPECIFIC COUNTRY mode to assure that the specific country restriction were in effect

- ## Map Testing -
    * Ran searches to assure the Map was drawing the correctly specified coordinates
    * Tested Map functionality for zoom and scroll functionality
    * Tested Google functionality including Street View and Full Screen Mode, with ESC to close

- ## New Search with New coordinates
    * Zoomed and scrolled within Map, and re-ran searches to test Search function obeyed new coordinates

- ## Google Map UI Options
    * Tested that satelitte, Street View and Full Screen modes worked

- ## No Results -
    * Tested specific locations and coordinates which are known to lack specific category/type results to test that the No Results message always appeared

- TESTED:
    * Responsive devices on Google Developer Tools
    * iPhone 7, iPad Pro
    * OSX Browsers: Chrome, Safari

- TESTED with validation checks:
    * https://validator.w3.org/ - No errors or warnings to show.
    * https://html5.validator.nu/ - No errors or warnings to show.
    * https://color.a11y.com/Contrast/ - No automated color contrast issues found on the webpage tested
    * https://jigsaw.w3.org/css-validator/ - 2 errors and several warning but all occuring in Bootstrap CSS (https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css)
    * https://jshint.com/ - Only one issue reported, an unused variable initMap however I see that Google's own example code reports the same, so have left as is.

- ## Known issues:
    * There may be a browser/cache-related issue where the website fails to return results on the first attempt.
    * A re-run of the search has always rectified the issue. Still, I would like to further debug this.

## Deployment

Deployed on GitHub Pages and can be viewed at: <a href="https://charliekranz.github.io/Bread-Brew-Books-Banjos/" target="_blank">https://charliekranz.github.io/Bread-Brew-Books-Banjos/</a>

* I deployed the website by:
    * Selecting the repository in GitHub account
    * Clicked on Settings 
    * In GitHub Pages section, selected Master Branch as source
    * Clicked Save 
    * Shared the url of the published site

### Code
- <https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch#maps_places_autocomplete_hotelsearch-javascript> - Place Autocomplete Hotel Search as example of API implementation
- <https://stackoverflow.com/questions/57143671/how-to-add-class-to-buttons-on-click/57143989> Button class js example
- <https://getbootstrap.com/docs/4.0/components/modal/> Bootstrap Modal

#### README Hints
- <https://github.com/Code-Institute-Solutions/readme-template/blob/master/README.md>
- <https://www.markdownguide.org/basic-syntax/>

#### Bootstrap Hints
- <https://getbootstrap.com/docs/4.4/layout/grid/>
- <https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background>
- <https://hackerthemes.com/bootstrap-cheatsheet/>

#### Validation Tips
- Took advice from MS1 PREPARATION CALL pdf regarding Validation links

#### Hints 
- I took Add class to cicked buttons example form Stack Overflow link <https://stackoverflow.com/questions/57143671/how-to-add-class-to-buttons-on-click/57143989> and also referred to
<https://stackoverflow.com/questions/57143671/how-to-add-class-to-buttons-on-click/57143941>
- Integrating Google API - <https://developers.google.com/maps/documentation/javascript/adding-a-google-map#key>

### Acknowledgelments
* My mentor Ignatius and my friend and former colleague Damian both offered encouragement, hints and great insight
* The Code Institute MS2 Example Project "Holiday Planner" by Ben Hasselgren served as an example of using Google API for MS2 Project fulfillment

### Disclaimer
This website was created for educational purposes only. 