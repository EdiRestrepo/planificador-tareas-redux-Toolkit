// Importamos el hook
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../redux/filters/slice";
import { statusFilters } from "../redux/constants";
import { selectFiltersStatus } from "../redux/selectors";
// Importamos el objeto del valor del filtro

const StatusFilter = () => {
  // Obtenemos el valor del filtro del estado de Redux
  const filter = useSelector(selectFiltersStatus);
  const dispatch = useDispatch();

  const handleClick = (filter) => {
    dispatch(updateFilter(filter));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3>Current: {filter}</h3>
      <div>
        <button onClick={() => handleClick(statusFilters.all)}>All</button>
        <button onClick={() => handleClick(statusFilters.active)}>
          Active
        </button>
        <button onClick={() => handleClick(statusFilters.completed)}>
          Completed
        </button>
      </div>
    </div>
  );
};

export default StatusFilter;
