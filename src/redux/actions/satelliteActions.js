import { ActionTypes } from "../constants/action-types"
import axios from 'axios';
import { get, post } from './apiService';

export const createSatelliteEvent = (postdata) => {
  return async (dispatch) => {
    try {

      // Format the date in postdata
      if (postdata.date) {
        console.log("before format methd");
        console.log(postdata.date);
        postdata.date = formatDate(new Date(postdata.date));
      }
      const jsonData = {
        date: postdata.date,
        description: postdata.description,
        priority: postdata.priority,
        satelliteName: postdata.satelliteName,        
      }
      console.log(postdata.date);
      const response = await post('/events/create', jsonData);
      
      dispatch({ type: ActionTypes.CREATE_SATELLITE_EVENT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ActionTypes.CREATE_SATELLITE_EVENT_FAILURE, payload: error });
    }
  };
};

  export const getSatelliteList = () => {
    return async (dispatch) => {
      try {
        const response = await get('/satellites/list');
        dispatch({ type: ActionTypes.GET_SATELLITE_LIST, payload: response.data });
      } catch (error) {
        dispatch({ type: ActionTypes.GET_SATELLITE_LIST_ERROR, error });
      }
    };
  };

  export const showAllEvents = () => async dispatch => {
    dispatch({ type: ActionTypes.SHOW_ALL_EVENTS });
    try {
      const response = await get('/events/list');
      dispatch({ type: ActionTypes.SHOW_ALL_EVENTS, payload: response.data });
    } catch (error) {
      dispatch({ type: ActionTypes.SHOW_ALL_EVENTS_FAILURE, error });
    }
  };


  export const showTleInformation = (satelliteName) => async (dispatch) => {
    try {
      var response = await axios.get(`https://celestrak.org/NORAD/elements/gp.php?NAME=${satelliteName}`);
      const data = response.data.trim().split('\n');
      
      const satelliteData = {
        name: data[0].trim(),
        line1: data[1].trim(),
        line2: data[2].trim()
      };      
      dispatch({ type: ActionTypes.SHOW_TLE_INFO, payload: satelliteData });
    } catch (error) {
      dispatch({ type: ActionTypes.SHOW_TLE_INFO_FAILURE, payload: error.message });
      var response = await get(`/tle/satellite/${satelliteName}`);
      //const data = response.data.trim().split('\n');
      
      dispatch({ type: ActionTypes.SHOW_TLE_INFO_FROM_DB, payload: response.data });
    }
  };
      
     

            const formatDate = (date) => {
              const pad = (num) => (num < 10 ? '0' + num : num);
            
              const year = date.getFullYear();
              const month = pad(date.getMonth() + 1);
              const day = pad(date.getDate());
              const hours = pad(date.getHours());
              const minutes = pad(date.getMinutes());
              const seconds = pad(date.getSeconds());
            
              return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
            };
            
        
  

            
            