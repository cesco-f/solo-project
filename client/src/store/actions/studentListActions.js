import * as actionTypes from './actionTypes';
import * as studentAPI from '../../studentAPI';

export const fetchStudents = () => {
  return dispatch => {
    studentAPI.getStudents()
      .then(data => dispatch({type: actionTypes.GET_STUDENTS, payload: data}));
  };
};

// export const fetchStudent = () => {
//   return dispatch => {
//     studentAPI.getStudent('6005b2f93ead6669af3b1fe7')
//       .then(data => dispatch({type: actionTypes.GET_STUDENT, payload: data}));
//   };
// };
export const fetchStudent = (name) => {
  return dispatch => {
    studentAPI.getStudent(name)
      .then(data => dispatch({type: actionTypes.GET_STUDENT, payload: data}));
  };
};

export const updateStudentResults = (ssid, status, testResults) => {
  return dispatch => {
    studentAPI.updateStudentTests(ssid, status, testResults)
      .then(data => {
        dispatch({type: actionTypes.GET_STUDENT, payload: data});
        dispatch({type: actionTypes.RESET_PROGRESS});
      });
  }
};

export const updateStudentsPendingTests = (testid, status, studentsList) => {
  return dispatch => {
    studentAPI.updateStudentTests(testid, status, studentsList)
      .then(data => {
        dispatch({type: actionTypes.GET_STUDENTS, payload: data});
      });
  }
};

export const importStudents = (newSs) => {
  return dispatch => {
    studentAPI.importStudents(newSs)
      .then(data => {
        dispatch({type: actionTypes.POST_STUDENTS, payload: data});
      });
  }
};

// export const deleteStudent = (id) => {
//   return dispatch => {
//     studentAPI.deleteStudent(id)
//       .then(data => dispatch({type: actionTypes.DELETE_STUDENT, payload: id}));
//   };
// };
