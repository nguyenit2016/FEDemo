let initialState = {
  userList: [
    {
      id: 1,
      name: "Dinh Phuc Nguyen",
      userName: "dpnguyen",
      email: "dpnguyen@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP"
    },
    {
      id: 2,
      name: "Nguyen Dinh Phuc",
      userName: "nguyendp",
      email: "nguyendp@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP"
    }
  ],
  userEdit: null,
  keyword: ""
};

const actions = () => {
  const deleteUser = (state, action) => {
    let userList = [...state.userList];
    let indexOfUser = userList.findIndex(x => x.id === action.userId);
    if (indexOfUser !== -1) {
      userList.splice(indexOfUser, 1);
      state.userList = userList;
    }
  }

  const getUser = (state, action) => {
    state.userEdit = action.user;
  }

  const other = (state, action) => {
    // do something
  }

  return new Map([
    [{ type: 'DELETE' }, deleteUser],
    [{ type: 'GETUSER' }, getUser],
    [{ type: 'OTHER' }, other]
  ])
}

const userReducer = (state = initialState, action) => {
  let actionHandle = [...actions()].filter(([key, value]) => (key.type === action.type));
  actionHandle.forEach(([key, value]) => value.call(this, state, action));
  return { ...state };
}

// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'DELETE':
//       {
//         let userList = [...state.userList];
//         let indexOfUser = userList.findIndex(x => x.id === action.userId);
//         if (indexOfUser !== -1) {
//           userList.splice(indexOfUser, 1);
//           state.userList = userList;
//         }
//       }
//       return {...state};
//       break;
//     case 'GETUSER':
//       state.userEdit = action.user;
//       return {...state};
//       break;
//     default:
//       return { ...state };
//       break;
//   }
// };

export default userReducer;
