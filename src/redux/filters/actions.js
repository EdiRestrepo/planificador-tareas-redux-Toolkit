export const FILTER_ACTIONS = {
    update: "filters/updateFilter"
}

export const updateFilter = filter => {
    return {
      type: FILTER_ACTIONS.update,
      payload: filter,
    };
  };