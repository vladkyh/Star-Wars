import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from "../consts/actionTypes"

// export const setPersonToFavorite = person  => ({
//     type: ADD_PERSON_TO_FAVORITE,
//     payload: person
// })
export const setPersonToFavorite = person  => ({
    type: ADD_PERSON_TO_FAVORITE,
    payload: person
   
})
export const removePersonToFavorite = peopleId => ({
    type: REMOVE_PERSON_FROM_FAVORITE,
    payload: peopleId
})
// export const removePersonToFavorite = ( ) => ({
//     type: REMOVE_PERSON_FROM_FAVORITE,
//     payload: person
// })