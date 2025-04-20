import { Activity } from "../types";

export type ActivityActions =
  | { type: "save-activity"; payload: { newActivity: Activity } }
  | { type: "delete-activity"; payload: { id: string } }
  | { type: "update-activity"; payload: { id: string; updatedActivity: Activity } }
  | { type: "set-active-activity"; payload: { id: string } };

export type ActivityState = {
  activities: Activity[];
  activeId: string;
};

export const initialState: ActivityState = {
  activities: [],
  activeId: "",
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
): ActivityState => {
  if (action.type === "save-activity") {
    let updatedActivities: Activity[] = [];

    if (state.activeId) {
      // Modo edición: reemplaza la actividad con activeId
      updatedActivities = state.activities.map((activity) =>
        activity.id === state.activeId
          ? action.payload.newActivity
          : activity
      );
    } else {
      // Modo creación: agrega nueva actividad
      updatedActivities = [...state.activities, action.payload.newActivity];
    }

    return {
      ...state,
      activities: updatedActivities,
      activeId: "", // se limpia el ID activo después de guardar
    };
  }

  if (action.type === "set-active-activity") {
    return {
      ...state,
      activeId: action.payload.id,
    };
  }

  if(action.type === "delete-activity") {
    return {
      ...state,
      activities:  state.activities.filter(activity => activity.id !== action.payload.id)
    };
}

  return state; // fallback por defecto
};
