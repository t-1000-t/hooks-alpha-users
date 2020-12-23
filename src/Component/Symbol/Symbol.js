import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Symbol({ sym }) {
  const [isOpen, setOpen] = useState(false);
  const { sortMixArr } = useSelector(state => ({
    ...state.arrayUsersReducer
  }));
  const [symbolFilter, setSymbolFilter] = useState([]);

  function handlerOpenBlock() {
    setOpen(!isOpen);
    setSymbolFilter(
      sortMixArr.filter(elem => elem.alpha.toLowerCase() === sym.toLowerCase())
    );
  }

  return (
    <>
      <button onClick={() => handlerOpenBlock()}>{sym}</button>
      <div>
        {isOpen &&
          symbolFilter.map(item => <div key={item.id}>{item.title}</div>)}
      </div>
    </>
  );
}
