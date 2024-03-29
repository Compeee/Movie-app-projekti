# 5G00EV06-3001-kaarnalehto-eero-projekti

Name: Eero Kaarnalehto

Topic: Web application that displays movies from The Movie Database (TMDB), using their own API. Features could be to list most popular movies and tv shows on the
homepage, searchbar to search for the movies you want, sorting by category, adding to favorites

API Documentation: https://www.themoviedb.org/documentation/api

Link to app: https://movie-app-test-vgjg.onrender.com/

Screencast: https://www.youtube.com/watch?v=oHOPB_gLwzM

**Release 1: 2021-11-15 features**

- User is able to see trending movies on the homepage
- User is able to use the responsive navbar on different screensizes
- User is able to search for movies/shows using the searchbar
- User is able to click search which redirects user to /results/"query" page
- User is able to see results of the search on the results page
- User is able to use the react-paginate pagination bar
- User is able to see the most popular movies and shows by clicking the popular link in the navbar
- User is able to hover over movies and shows to see their overviews
- User is able to add movies to watchlist, which are saved into localstorage, no way for the user to see them yet.

**Release 2: 2021-11-29 features**

- User is able to go on the watchlist page from the link in navbar
- User is able to see all the contents of the watchlist
- User is able to remove items from the watchlist
- User is able to go on the upcoming page from the link in navbar
- User is able to see upcoming movies on the page
- User is able to go through all the movies by clicking the movies link in the navbar, sorted by popularity
- User is able to go through all the shows by clicking the shows link in the navbar, sorted by popularity
- User is able to filter movies and shows by category by selecting the categories they want

**Known Bugs**
- Not really a bug, but TMDB API's upcoming movies api call returns some movies that have released months ago.
