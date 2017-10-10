import {
  LOAD_PROGRAMMES_SUCCESS,
  CREATE_PROGRAMMES_SUCCESS,
  DELETE_PROGRAMMES_SUCCESS
} from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import ProgrammeApi from '../api/ProgrammeApi';

export const loadProgrammesSuccess = programmes => ({
  type: LOAD_PROGRAMMES_SUCCESS,
  programmes
});

export const createProgrammeSuccess = programmes => ({
  type: CREATE_PROGRAMMES_SUCCESS,
  programmes
});

export const deteleProgrammeSuccess = () => ({
  type: DELETE_PROGRAMMES_SUCCESS,
  programmes: []
});

export const createProgrammes = data => async (dispatch) => {
  dispatch(beginAjaxCall());

  try {
    const programmes = await ProgrammeApi.create(data);

    dispatch(createProgrammeSuccess(programmes));    
  } catch (error) {
    dispatch(ajaxCallError());
    throw (error);
  }
};

export const loadProgrammes = () => async (dispatch) => {
  dispatch(beginAjaxCall());
  
  try {
    const programmes = await ProgrammeApi.readAll({ populate: 'channel' });

    dispatch(loadProgrammesSuccess(programmes));    
  } catch (error) {
    dispatch(ajaxCallError());
    throw (error);
  }
};


export const deleteProgrammes = () => async (dispatch) => {
  dispatch(beginAjaxCall());
  
  try {
    await ProgrammeApi.delete();
    dispatch(deteleProgrammeSuccess());    
  } catch (error) {
    dispatch(ajaxCallError());
    throw (error);
  }
};
