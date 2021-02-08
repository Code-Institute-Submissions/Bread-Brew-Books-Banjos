<img src="#">

# <center>Browse the Best: Bread, Brew, Books and Banjos</center>

Browse the Best: Bread, Brew, Books and Banjos allows you to “travel” anywhere in the world 
and explore the four most important things you can do in a city - the 4 B’s: eat Bread, drink Brew 
read Books and hear Banjos* (*music may or may not include Banjos). :)

Using the power of Google Places API, Browse the Best simplifies Place Searches functionality
making the experience both **wide** — by allowing for a variety of activities and interests, but also **focused** 
by limitting the scope to four basic things a visitor would likely be interested in.

Essentially, I tried to think of the main things peole might like to do in a city and getting a coffee and a bite to eat,
browsing some books and hearing live music were the top things to do. Also, Each of these categories/activities lend themselves to solo and group associations, further expanding the usefulness of the functionality.

***

## UX (User Experience)

### User Stories
- #### First Time Visitor Goals
    1. As a First Time Visitor, I want to clearly understand the outlay and functionality of the website.
    2. As a First Time Visitor, I want to be able to quickly modify my searches by category and place.
    3. As a First Time Visitor, I want the UI to reflect my process and experience.
    4. As a First Time Visitor, I want to be able to search any city in the world without needing to use the Country filter dropdown.
    4. As a First Time Visitor, I want to have the option to delve further into the result specifics - website, locations, etc.
    5. As a First Time Visitor, I want to appreciate that the simplified process of Browse the Best offers ample information for
    visiting and exploring a city - both **virtually** and **physically**

 - #### Returning Visitor Goals
    1. As a Returning Visitor, I want to be able to perform searches quickly.
    2. As a Returning Visitor, I want to be able to explore the world and learn about other cities offerings.
    3. As a Returning Visitor, I want to be able to restricy city searches to specific countries, allowing me to explore regions and countries.

- #### Frequent User Goals
    1. As a Frequent User, I want to be able to refer others to the website.
    2. As a Frequent User, I want to appreciate that the simplified scope of Browse the Bests four place type categories offers a
    full experience and allows me to imagine and plan enjoyable visits which

## Design

- ### Branding 
    - Alliteration of the B sound in both website name and the Search Options: Browse the Best, Bread, Brew, Books and Banjos
    - Clean, simple - using iconography for the four categories

- ### Colours
    - Following the Green theme of the Google Places API, using green as the key Colour
    - Otherwise clean black and white allowing the Map and Results to stand out

- ### UI
    - Clean, simple UI
    - 2 column layout for Map and results on larger screens
    - 1 column layout on smaller devices

- #### Typography
    - Poppins font for bolder, larger text
    - Open Sans for body and smaller text.
    - Sans Serif as the fallback if fonts aren't imported correctly.

- #### Imagery
    - Google Maps provides literally a window to the world through the Map
    - Using the optional Google Map UI and layer options so user can opt to look at topography

- #### Wireframes
    - 
    -

## Features

* Intro Modal provides introduction, explaining the "pick a type" and "choose a location" steps.
* Modal is easily x-ed out or skipped vis the Start Browsing button.
* Header - Identity, Type Buttons and Search field with optiona Country Drop Down
* Country Dropdown allows for restricted city autocomplete by country
* Map - default and dynamic states, user can zoom and search within Map
* Search results - allow user to move to location by clicking on markers
* Map Markers - allow user to see more information on result including url hyperlink to website (if available)
* Responsivity - Responsive across devices - allowing one and two column layouts
* Google Map layers allows user to looka t satelitte as well as simplified map view

## Features to be added 

* Would like to develop branding and ideally bring the FontAwesome icons as makers onto maps
* Would also like to explore a four-color code, similar to initial wireframes
* Refine some results - Google Places groups some establishments I'd rather filter out such as "bookmakers" for "book_stores"
* Likewise would add explicit keywords to types and search function
* Would look at additional styling of map - https://mapstyle.withgoogle.com/
* May also bring some Places Photos images into the results table, and/or on the Map Marker Info Boxes
* I would also like to return to looking at integrating the search and select functions into an introductory modal.

## Development history
* I was intrigued by Google Places and Map API from the Code Institute module, however I found it difficult to integrate.
* I knew the API would have some excellent functionality and a wealth of data to access, so I chose to go forward with it for my project.
* Once I had the API working and results returning, I began to imagine a range of things I could do with it.
* I was happy that the simplification of the search types still allowed for an interesting searching experience

## Debugging

* Autocomplete
    - The initial plan was to ask user to choose a type and location on the modal. 
    - However, the autocomplete function could not be re-used in two places, so I reconfigured back into the main app.

* Undefined selection
    - The Google Places API defaulted to "lodging" type if a place was not specified
    - Initially I thought that by restricting the search from occurring until after one of our four types, this could be avoided.
    - I had this secondary step occurring in the modal initially, and then on index when modal was removed.
    - I hid the city/country inputs until after a button had an active state.
    - However, I was still seeing occassional "lodging" results.
    - Upon investigation it was determined that this occurred when the selection had an "undefined" state - even though a button was active.
    - I got advice from a former colleague that by restricting the search function to only the four keyword type I wanyed, this could be avoided. (cafe, bakery, book_store and night_club)

## Technologies Used

* HTML and CSS programming languages
* [Balsamiq](https://balsamiq.com/) - wireframing tool
* [Slack](https://slack.com/) - networking and communications
* [GitHub](https://github.com/) - code repository
* [GitPod](https://www.gitpod.io/) - cloud dev environment
* [Bootstrap](https://getbootstrap.com/) - responsive sourcetoolkit with components and Javascipt plugins
* [fontawesome](https://fontawesome.com/v4.7.0/) - vector icons customisable through CSS
* [Google Fonts](https://fonts.google.com/) - open source web font collection
* [Google Maps](https://www.google.com/maps) - online mapping resource with embed code
* [Favicon.ico](https://favicon.io/favicon-converter/) - website for creating favicon 
* [Google Places API](https://cloud.google.com/maps-platform/places/) - to access and retrieve results data from Google's millions of Place Locations
* [Google Maps API](http://cloud.google.com/maps-platform/) - to display map
* [Google Developer](https://console.developers.google.com/) - to access Google APIs


## Testing

- ## Modal
    * Loaded page to test that modal always appears
    * Tested that modal always closed using X-button and/or Get Started Button

- ## Type Selection Buttons
    * Clicked on each of the four Type buttons to verify the corresponding hover and active states always appear
    * Checked selection returned in Googe Chrome Console to assure that the appropriate selection type alwaysreturned on click

- ## City Search Field -
    * Checked city autocomplete to verify functionality
    * Checked autocomplete in ALL COUNTRIES mode to assure that the country restrictions were not in effect
    * Checked autocomplete in SPECIFIC COUNTRY mode to assure that the specific country restriction WERE in effect

- ## Map Testing -
    * Ran and re-ran searches to assure the Map was drawing the correct coordinates
    * Tested Map functionality for zoom and scroll functionality
    * Tested Google functionality including Street View and Full Screen Mode, with ESC to close

- ## New Search with New coordinates
    * Zoomed and scrolled within Map, and re-ran searches to test Search function obeyed new coordinates

- ## No Results -
    * Tested specific locations/coordinates which are known to lack results to test that the No Results message always appeared

- CURRENTKY TESTING using:
    * Responsive devices on Google Developer Tools
    * iPhone 5S & 6 and iPad Pro
    * OSX Browsers: Chrome, Safari, Firefox, Opera, Edge
    * Windows Browsers: Chrome, Edge, Explorer, Firefox
    (some styling yweaks still needed for Galaxy Fold)

- NEED TO RE-TEST with validation checks - initial tests passed but code has been altered:
    * https://validator.w3.org/ - 
    * https://html5.validator.nu/ - 
    * https://color.a11y.com/Contrast/ -
    * https://jigsaw.w3.org/css-validator/ -
    * https://jshint.com/ - Only one issue reported, an unused variable initMap however I see that Google's own example code reports the same, so have left as is.

- ## Known issues:
    * There may be a browser/cache-related issue where the website fails to return results on the first attempt.
    * A re-attempt click of the Type Button has always rectified the issue. Still, I would like to further debug this.

## Deployment

This WILL BE deployed on GitHub Pages and can be viewed at: <a href="https://charliekranz.github.io/Bread-Brew-Books-Banjos/" target="_blank">https://charliekranz.github.io/Bread-Brew-Books-Banjos/</a>

* Before my mid-point meeting I deployed the website by:
    * Selecting the repository in GitHub account
    * Clicked on Settings 
    * In GitHub Pages section, selected Master Branch as source
    * Clicked Save 
    * Shared the url of the published site

### Code
- <https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch#maps_places_autocomplete_hotelsearch-javascript> - Place Autocomplete Hotel Search as example of API implementation
- <https://stackoverflow.com/questions/57143671/how-to-add-class-to-buttons-on-click/57143989> Button class js example
- <https://getbootstrap.com/docs/4.0/components/modal/> Bootstrap Modal
- 

#### README
- <https://github.com/Code-Institute-Solutions/readme-template/blob/master/README.md>
- <https://www.markdownguide.org/basic-syntax/>

#### Bootstrap
- <https://getbootstrap.com/docs/4.4/layout/grid/>
- <https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background>
- <https://hackerthemes.com/bootstrap-cheatsheet/>

#### Google Fonts
- <https://www.gyanblog.com/gyan/how-to-use-google-fonts-website-bootstrap/>


#### Validation Tips
- Took advice from MS1 PREPARATION CALL pdf regarding Validation links

#### Hints 
- Took Add class to cicked buttons example form Stack Overflow link <https://stackoverflow.com/questions/57143671/how-to-add-class-to-buttons-on-click/57143989> and also referred to
<https://stackoverflow.com/questions/57143671/how-to-add-class-to-buttons-on-click/57143941>
- Integrating Googel API - <https://developers.google.com/maps/documentation/javascript/adding-a-google-map#key>

### Acknowledgelments
* My mentor Ignatius and my friend and former colleague Damian both offered encouragement, hints and great insight
* The Code Institute MS2 Example Project "Holiday Planner" by Ben Hasselgren served as an example of using Google API for MS2 Project fulfillment

### Disclaimer
This website was created for educational purposes only. 