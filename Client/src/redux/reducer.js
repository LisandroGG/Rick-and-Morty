import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-type";

const initialState = {
    myFavorites : [],
    allCharacters : []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return  {
                ...state, 
                myFavorites: action.payload, 
                allCharacters: action.payload 
            }
            case REMOVE_FAV:
            return { 
                ...state, 
                myFavorites: state.myFavorites.filter((fav) => fav.id !== action.payload),
            }
        case FILTER:
            let copyFilter = state.allCharacters.filter((character) => character.gender === action.payload)
            return{
                ...state,
                myFavorites: copyFilter,
            }
        case ORDER:
            const orderCharacter = state.allCharacters.sort((a, b) => {
                if(action.payload === "A") {
                    if(a.id < b.id) return -1
                    if(b.id < a.id) return 1
                    return 0
                } else {
                    if(a.id < b.id) return 1
                    if(b.id < a.id) return -1
                    return 0
                }
                
            })
            return{
                ...state,
                myFavorites: [...orderCharacter]
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;