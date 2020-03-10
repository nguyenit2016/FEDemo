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
  keyWord: ""
};

const actions = () => {
  const deleteUser = (state, action) => {
    let userList = [...state.userList];
    let indexOfUser = userList.findIndex(u => u.id === action.userId);
    if (indexOfUser !== -1) {
      userList.splice(indexOfUser, 1);
      state.userList = userList;
    }
  }

  const getUser = (state, action) => {
    state.userEdit = action.user;
  }

  const search = (state, action) => {
    state.keyWord = action.keyWord;
  }

  const changeValue = (state, action) => {
    let name = action.target.name;
    let value = action.target.value;
    let user = { ...state.userEdit };
    if (user) {
      user[name] = value;
      state.userEdit = user;
    }
  }

  const submitUser = (state, action) => {
    action.event.preventDefault();
    let user = state.userEdit;
    if (user.id) {
      let userListTemp = state.userList;
      let indexOfUser = userListTemp.findIndex(u => u.id === user.id);
      if (indexOfUser !== -1) {
        userListTemp[indexOfUser] = user;
        state.userList = [...userListTemp];
        state.userEdit = user;
      }
    } else {
      user.id = Math.floor(Math.random() * 100);
      state.userList = [...state.userList, user];
    }
  }

  const addUser = (state, action) => {
    state.userEdit = {
      id: '',
      userName: '',
      name: '',
      email: '',
      phoneNumber: '',
      type: 'USER'
    };
  }

  return new Map([
    [{ type: 'DELETE' }, deleteUser],
    [{ type: 'GETUSER' }, getUser],
    [{ type: 'SEARCH' }, search],
    [{ type: 'CHANGEVALUE' }, changeValue],
    [{ type: 'SUBMITUSER' }, submitUser],
    [{ type: 'ADDUSER' }, addUser]
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
