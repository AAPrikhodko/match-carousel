Dear User, \
Welcome to the application **"Sport Carousel"** !

You can find it here:
- link: https://sport-carousel.netlify.app/
- code: https://github.com/AAPrikhodko/match-carousel


**List files/folders in the src/ folder with short description:**

- **App.tsx** - main component. It renders header and two tabs. You can specify tabsParameters. It is an array of tabs. Every tab array has array of carousels where you can put needed sportId and max parameters for every carousel. This approach allows the app to be scalable and add any numbers of tabs or carousels by changing tabsParameters only. 
- **App.module.scss** - styles for App component
- **api/matches.ts** - request methods for data with Axios
- **assets/img** - all needed images for backgrounds
- **components/Card/Card.tsx** - card component, could be reused any number of times in any carousel. If the team crest doesn't exist, you will see some common logo 
- **components/Card/Card.module.scss** - styles for card component
- **components/Card/MatchCarousel.tsx** - MatchCarousel component, could be reused any number of times in any tab
- **components/Card/MatchCarousel.module.scss** - styles for MatchCarousel component
- **hooks/useTabData** - custom hook returns necessary data for the carousel with given parameters for each carousel in the tab (sportId max)
- **languages/en.json** - english version of used words in the project
- **services/constants.ts** - some constants used in the project 
- **services/types.ts** - some types/interfaces used in the project
- **services/utils.ts** - some useful functions used in the project

**Known Issues**
- I used adaptive height for the carousel. As the next step I would think about the fixing height

**Notes optimization**

I see several options to optimize:
- For the moment when user arrives to the tab, app requests the server, receives all the information needed for rendering the carousel within this particular tab and prepares the slick-list with all the images. That is very "expensive" and I would suggest do some lazy loading here
- For the moment every time user changes the tab - app requests the server for updating data. In order to reduce numbers of requests, it is possible to add another custom hook, which could returns all the necessary information for all the tabs. But, I decided not to do it, because it is very important to have up-to-date information when user changes the tab. And because the information could be changed from the time user is on the one tab to the time he changed the tab

**Some notes about the application:**

1. The carousels have 2 parameters:
    - sportId – Integer – if set display only matches for particular sport.
      Defaults to none
    - max – Integer – maximum no. of matches displayed in carousel. Defaults
      to 10.
2. UIX behavior:
    - Carousel cycles through available items automatically with 3 seconds delay
      per item.
    - Carousel provides a standard navigation element rendered as dots below
      the match card items. Clicking a dot navigates to particular card. Clicking a
      dot also resets the auto-play timer but doesn't stop the auto-play.
3. In this application you can find 2 tabs
    - Tab1 displays single MatchCarousel with max number of matches
      being 10. The carousel with the parameter: max = 10
    - Tab 2 displays two MatchCarousel components. One for sport 1
      and one for sport 2.
4. The application has a responsive layout. It supports screen resolutions up to 375px (iPhone SE)
5. About stack technology. This app was created based on:
    - React library
    - React Query
    - Type Script
    - Ant Design library
    - SCSS preprocessor

Thank you for using "Sport Carousel" app!