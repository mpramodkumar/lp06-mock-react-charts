
import serverFetch from '../utils/serverFetch';

export function loadChartDataSuccess(result) {
  return { type: 'LOAD_CHARTDATA_SUCCESS', result };
}

export function loadChartData(newValue) {
  return function(dispatch) {
    serverFetch('/chartData', 'POST', {
      medicinecode: newValue,
    })
      .then(function(response) {
        if (response.statusCode === 200) {
          if (response === undefined) {
            response.ChartData = [];
          }
          dispatch(loadChartDataSuccess(response));
        } else {
          response.ChartData = [response];
          dispatch(loadChartDataSuccess(response.ChartData));
        }
      })
      .catch(error => {
        throw error;
      });
  };
}
