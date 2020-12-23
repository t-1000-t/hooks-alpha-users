import React, { useState, useEffect } from "react";
import routes from "../../routes/routes";
import { useDispatch } from "react-redux";
import axios from "axios";
import letters from "../../json/letters.json";
import "./employees.css";
import Symbol from "../Symbol/Symbol";
import Birthday from "../Birthday/Birthday";

let counter = 1;

export default function Employees() {
  const [isOpen, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  function sortArray(arr) {
    dispatch({
      type: "SORT_ARRAY",
      payload: arr
    });
  }

  const cancelTokenSource = axios.CancelToken.source();
  console.log(counter++);
  useEffect(() => {
    setLoading(true);
    axios
      .get(routes.URL, {
        cancelToken: cancelTokenSource.token
      })
      .then(res =>
        res.data.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        })
      )
      .then(result => {
        let arr = [];
        // eslint-disable-next-line array-callback-return
        letters.map(x => {
          // eslint-disable-next-line array-callback-return
          result.map(y => {
            if (y["title"][0].toLowerCase().includes(x)) {
              arr.push(Object.assign({ ...y, alpha: x }));
            }
          });
        });
        return arr;
      })
      .then(data => sortArray(data))
      .catch(err => console.error(err))
      .finally(setLoading(false));

    return () => {
      cancelTokenSource.cancel("Operation canceled by the user.");
    };
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <button onClick={() => setOpen(!isOpen)}>Press</button>
          <div className="empContainer">
            {isOpen && (
              <div className="flex row">
                <div className="flex wrap">
                  {letters.map((s, idx) => (
                    <Symbol key={idx} sym={s} />
                  ))}
                </div>
                <Birthday />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
