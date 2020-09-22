export const actionTypes = {
  CHANGENAME: 'CHANGENAME',
  CHANGENAME_SUCCESS: 'CHANGENAME_SUCCESS'
}


export function changename(name) {
  return {
    type: actionTypes.CHANGENAME,
    name
  }
}

export function changename_success(data) {
  return {
    type: actionTypes.CHANGENAME_SUCCESS,
    data
  }
}

