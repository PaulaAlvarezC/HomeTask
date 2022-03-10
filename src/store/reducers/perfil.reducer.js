import { ADD_PERFIL } from "./actions/perfil.actions"
import Perfil from "../../models/Perfil"

const initialState = {
    perfil: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PERFIL:
            const newPerfil = new Perfil(
                action.payload.id,
                action.payload.nombre, 
                action.payload.apellido,
                action.payload.edad,
                action.payload.image
            )
            return {
                ...state,
                perfil: state.perfil.concat(newPerfil)
            }
        
        default:
            return state
    }
}