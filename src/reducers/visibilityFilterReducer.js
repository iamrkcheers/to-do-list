import { VisibilityFilters } from '../actions/filterValues';

export const visibilityFilterReducer = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER': {
      return action.filter;
    }

    default: {
      return state
    }
  }
}