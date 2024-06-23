import { ActionTypes } from "../constants/action-types";

const initialState = {
    events: [],
    loadingEvents: false,
    loadedTle: false,
    loadTleFailure: false,
    tleData: null,
    createEventSucess: false,
    successMessage: "",
    satelliteList: []
}

export const satelliteEventReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ActionTypes.GET_SATELLITE_LIST:
            return { 
                ...state, 
                satelliteList: payload 
            };

        case ActionTypes.CREATE_SATELLITE_EVENT_START:
            return { ...state, events: payload };

        case ActionTypes.CREATE_SATELLITE_EVENT:
            return { ...state, events: payload };

        case ActionTypes.CREATE_SATELLITE_EVENT_SUCCESS:
                return { ...state, 
                    events: payload,
                    createEventSucess: true,
                    successMessage: "Event created Successfully"
                    };

        case ActionTypes.CREATE_SATELLITE_EVENT_FAILURE:
            return { ...state, events: payload };

        case ActionTypes.SHOW_ALL_EVENTS:
            return { ...state, 
                loading: true,
                events: payload,
            };

        case ActionTypes.SHOW_SELECTED_SATELLITE:
            return { ...state, events: payload };

        case ActionTypes.SHOW_TLE_INFO:
            return {
                ...state,
                loadedTle: true,
                tleData: payload,
            };

        case ActionTypes.SHOW_TLE_INFO_FAILURE:
            return {
                ...state,
                loadedTle: false,
                loadTleFailure: true,
            };

            case ActionTypes.SHOW_TLE_INFO_FROM_DB:
            return {
                ...state,
                loadedTle: true,
                loadTleFailure: false,
                tleData: payload,
            };

        default:
            return state;
    }
}

export default satelliteEventReducer;