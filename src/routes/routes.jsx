import EventLists from '../pages/EventList/EventLists';
import FilterEvents from '../pages/FilterEvents/FilterEvents';
import EventDetails from '../pages/EventDetails/EventDetails';


export const routes = [
  {path:'/',element:<EventLists/>},
  {path:'find-events',element:<FilterEvents/>},
  {path:'/events/:id',element:<EventDetails/>}
]