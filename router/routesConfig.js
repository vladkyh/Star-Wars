import PeoplePage from '@containers/PeoplePage';
import HomePage from '@containers/HomePage';
import PersonPage from '@containers/PersonPage';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage';
import NotFoundPage from '@containers/NotFoundPage';
import FavoritePage from '@containers/FavoritePage/FavoritePage';


const routesConfig = [
    {
        path: '/',
        element: <HomePage/>

    },
    {
        path: '/people',
        element: <PeoplePage/>
    },
    {
        path: '*',
        element: <ErrorMessage/>
    },
    {
        path: '/notfound',
        element: <NotFoundPage/>
    },
    {

        path: '/people/:id',
        element: <PersonPage/>
       
    }, 
    {

        path: '/favorites',
        element: <FavoritePage/>
       
    }


]
export default routesConfig