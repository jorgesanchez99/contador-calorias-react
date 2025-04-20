import { Activity } from "../types";

export type AcitivityActions = {
    type: 'save-activity' | 'delete-activity' | 'edit-activity';
    payload: {newActivity : Activity }; 
}

type ActivityState = {
    activities: Activity[];
}

export const initialState: ActivityState = {
    activities: [],
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: AcitivityActions
    )=> {

        if(action.type === 'save-activity') {
            return {
                ...state,
                activities: [...state.activities, action.payload.newActivity]
            }
        }
};