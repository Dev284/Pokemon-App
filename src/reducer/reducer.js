const initialState = {
    loading:false,
    data:[],
    errorMsg:'',
    num:'',
};

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        // case "POKEMON_MULTIPLE_LOADING":
        //     return {
        //         ...state,
        //         loading: true,
        //         errorMsg: ""
        //     }
        // case "POKEMON_MULTIPLE_FAIL":
        //     return {
        //         ...state,
        //         loading: false,
        //         errorMsg: "Unable to find Data"
        //     }
        case "POKEMON_MULTIPLE_SUCCESS":
                state.data = action.payload
                // console.log(action.payload.order,"dev")
                return {
                    ...state,
                    loading: false,
                    data: action.payload,
                    num : action.pokemonName
                }
            
        default :
        return state
    }
    
}

export default pokemonReducer;