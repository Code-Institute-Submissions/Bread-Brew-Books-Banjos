<img src="#">

# <center>Browse the Best: Bread, Brew, Books and Banjos</center>

Browse the Best: Bread, Brew, Books and Banjos allows you to “travel” anywhere in the world 
and explore the four most important things you can do in a city - the 4 B’s:
• eat Bread
• drink Brew 
• read Books
• listen to Banjos* (*music may or may not include Banjos)

Using the power of Google Places API, Browse the Best simplifies Place Searches functionality
making the experience both **wide**, allowing for a variety of activities and inetrests, but
also **focused** in that a user can limit the results shown to a specific Place type.

Each of these categories/activities lend themselves to solo and group associations, further expanding the usefulness of the functionality.

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
Alliteration of the B sound - Browse the Best to frame the offering, that the user will get to dynamically search for and explore offerings
Reinforced by the further B alliteration of the four "B" categories which offer variety and specificity

- ### Colours

- ### UI

- #### Typography

- #### Imagery

- #### Wireframes

## Features

* Intro Module
* Header - Identity
* Four B Buttons - Category Selections
* Map - default and dynamic states
* Search results
* Responsivity - Responsive across devices - allowing same experience, two column layout

## Development history
Get places input working on modal
get active state as toggle regardless of focus
add favico
styling 
readme

## Debugging

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


## Testing

- NEED TO TEST using:
    * Responsive devices on Google Developer Tools
    * iPhone 5S & 6 and iPad Pro
    * OSX Browsers: Chrome, Safari, Firefox, Opera, Edge
    * Windows Browsers: Chrome, Edge, Explorer, Firefox

- Testing included looking at each section and functionality (anchor links, external links, galleries and forms) to ensure all is working optimally and properly

- NEED TO TEST with validation checks:
    * https://validator.w3.org/ - 
    * https://html5.validator.nu/ - 
    * https://color.a11y.com/Contrast/ -
    * https://jigsaw.w3.org/css-validator/ -

## Deployment

This was deployed on GitHub Pages and can be viewed at: <a href="https://charliekranz.github.io/Bread-Brew-Books-Banjos/" target="_blank">https://charliekranz.github.io/Bread-Brew-Books-Banjos/</a>

* Before my mid-point meeting I deployed the website by:
    * Selecting the repository in GitHub account
    * Clicked on Settings 
    * In GitHub Pages section, selected Master Branch as source
    * Clicked Save 
    * Shared the url of the published site

## Credits

### Content

### Code

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
- 
- 

### Acknowledgelmets
* 

### Disclaimer
This website was created for educational purposes only. 

<https://developers.google.com/maps/documentation/javascript/adding-a-google-map#key>
<https://www.tutorialrepublic.com/codelab.php?topic=faq&file=show-bootstrap-modal-on-page-load>


not using searchBox as want the buttons to do the work of sorting type and simplifying experience
so search is just where and button os the What

may us type and keyword for results so as to capture live music, etc.

trying to restyle the map, have it hooked-up but not seeing the updated style. will se aside -https://mapstyle.withgoogle.com/

need to adjust countries and categories
set defaults to ireland
expand country default locations
add country maps

try and filter out bookmakers, if I can integrate keyword
need to add a modal for "no reults" and that clears the markers

TESTING - hardcoded the Google Place keywords to determine they were correctly displaying by searching and checking that the returns represented the type used


moved js to bottom of page and removed defer text

show and hide modal <https://css-tricks.com/snippets/javascript/showhide-element/>

Trying to hget button active to stay 
- $(".four-buttons > .btn-lg").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});


Future pla - code (place.website) so that it is dynamic and clickable