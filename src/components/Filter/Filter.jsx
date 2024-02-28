import { useDispatch } from "react-redux";
import css from "./Filter.module.css";
import { setFilter } from "../../redux/filterSlice";



export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = (e) => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <div className={css.filter}>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" id="filter" name="filter" onChange={handleFilter} />
    </div>
  );
}

