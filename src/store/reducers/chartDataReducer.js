

const initialState = {
  chartdatas: [],
};

export default function chartDataReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_CHARTDATA_SUCCESS':
      return Object.assign({}, state, {
        chartdatas: action.result,
      });
    default:
      return state;
  }
}
