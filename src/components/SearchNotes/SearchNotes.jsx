import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice.js";

export const SearchNotes = () => {
  const filters = useSelector(selectNameFilter);

  const dispatch = useDispatch();
  const searchId = useId();
  return (
    <div>
      <label htmlFor={searchId}>Find notes by title</label>
      <input
        type="name"
        id={searchId}
        value={filters}
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </div>
  );
};
