import { Reducer, useReducer } from "react";

const reducer: Reducer<
  | {
      status: "success";
      geolocation: GeolocationCoordinates;
    }
  | {
      status: "failed";
      error: GeolocationPositionError;
    }
  | {
      status: "idle" | "loading";
    },
  | { type: "SUCCESS"; payload: GeolocationCoordinates }
  | { type: "Failed"; payload: GeolocationPositionError }
  | { type: "LOADING" | "IDLE" }
> = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        status: "success",
        geolocation: action.payload,
      };
    case "Failed":
      return {
        status: "failed",
        error: action.payload,
      };
    case "LOADING":
      return {
        status: "loading",
      };
    case "IDLE":
      return {
        status: "idle",
      };
    default:
      return state;
  }
};

function useGeolocation() {
  const [state, dispatch] = useReducer(reducer, {
    status: "idle",
  });

  const requestLocation = () => {
    dispatch({ type: "LOADING" });

    return new Promise<GeolocationCoordinates>((res, rej) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          dispatch({ type: "SUCCESS", payload: coords });
          res(coords);
        },
        (err) => {
          dispatch({ type: "Failed", payload: err });
          rej(err);
        },
      );
    });
  };

  return [state, { requestLocation }] as const;
}

export default useGeolocation;
