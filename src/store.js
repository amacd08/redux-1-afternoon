import {createStore} from 'redux'
const initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipeList: []
}

export const UPDATE_RECIPE_NAME = 'UPDATE_RECIPE_NAME'
export const UPDATE_RECIPE_CATEGORY = 'UPDATE_RECIPE_CATEGORY'
export const UPDATE_AUTHOR_LAST = 'UPDATE_AUTHOR_LAST'
export const UPDATE_AUTHOR_FIRST = 'UPDATE_AUTHOR_FIRST'
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS'
export const ADD_INSTRUCTIONS = 'ADD_INSTRUCTIONS'
export const ADD_RECIPE_LIST = 'ADD_RECIPE_LIST'
export const RESET_RECIPE_INFO = 'RESET_RECIPE_INFO'

function reducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case UPDATE_RECIPE_NAME:
            return {
                ...state,
                name: payload
            }
        case UPDATE_RECIPE_CATEGORY:
            return {
                ...state,
                category:payload
            }
        case UPDATE_AUTHOR_FIRST:
            return {
                ...state,
                authorFirst:payload
            }
        case UPDATE_AUTHOR_LAST:
            return {
                ...state,
                authorLast:payload
            }
        case ADD_INGREDIENTS:
            const newIngredients = [...state.ingredients, payload]
            return { ...state, ingredients: newIngredients}
        case ADD_INSTRUCTIONS:
            const newInstructions = [...state.instructions, payload]
            return {...state, instructions: newInstructions}
        case ADD_RECIPE_LIST:
            //Deconstructing state into variables
            const {
                recipeName,
                recipeCategory,
                authorFirst,
                authorLast,
                ingredients,
                instructions
            } = state;
            //Applying variables to recipe
            const recipe = {
                recipeName,
                recipeCategory,
                authorFirst,
                authorLast,
                ingredients,
                instructions
            }
            const newRecipes = [...state.recipeList, recipe]
            return { ...state, recipeList: newRecipes}
        case RESET_RECIPE_INFO:   
            console.log('hitting reset')             
            return {
                ...state,
                recipeName: '',
                recipeCategory: '',
                authorFirst: '',
                authorLast: '',
                ingredients: [],
                instructions: [],
                recipeList: state.recipeList
            }
        default:
            return state
    }
}

export default createStore(reducer)