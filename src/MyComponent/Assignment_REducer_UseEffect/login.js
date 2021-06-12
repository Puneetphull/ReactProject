import React, { useReducer } from "react";
export default function Login(props) {
  const initialvalue = {
    email: "",
    password: "",
    IsloggedIn: false,
  };
  const reducer = (state, action) => {
    if (action.type === "InputEmail") {
      return { ...state, email: action.value };
    }
    if (action.type === "InputPassword") {
      return { ...state, password: action.value };
    }
  };

  const [value, dispatch] = useReducer(reducer, initialvalue);
  const submit = (e) => {
    e.preventDefault();
    localStorage.setItem("IsloggedIn", "1");
    dispatch({ IsloggedIn: true });
    props.func(value.IsloggedIn);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(event) =>
              dispatch({ type: "InputEmail", value: event.target.value })
            }
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(event) =>
              dispatch({ type: "InputPassword", value: event.target.value })
            }
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
