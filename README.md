# 5G00EV06-3001-kaarnalehto-eero-projekti


Name:               Eero Kaarnalehto

Topic:              Web application that displays movies from The Movie Database (TMDB), using their own API. Features could be to list most popular movies and tv shows on the
                    homepage, searchbar to search for the movies you want, sorting by category, adding to favorites

API Documentation:  https://www.themoviedb.org/documentation/api

Heroku link: 


Release 1: 2021-11-15 features

* User is able to see trending movies on the homepage
* Responsive Navbar made using bootstrap
* User is able to search for movies/shows using the searchbar
* Clicking search redirects user to /results/query, implemented using useParams and useHistory hooks from react router
* Results page displays movies and shows found with the given search value
* Pagination bar created with package "react-paginate"
* User is able to see the most popular movies and shows by clicking the popular link in the navbar
