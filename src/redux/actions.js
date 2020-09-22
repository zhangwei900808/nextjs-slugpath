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

