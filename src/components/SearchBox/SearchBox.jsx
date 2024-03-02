import { useId } from "react";
import css from './SearchBox.module.css';
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";

export const SearchBox = () => {
    const filter = useId();
    const dispatch = useDispatch();
    const searchValue = useSelector(state => state.filters.name)

    return (
            <form>
                <label htmlFor={filter} className={css.form}>Find contacts by name
                    <input type="text" id={filter} value={searchValue} onChange={evt => dispatch(changeFilter(evt.target.value))} className={css.input}></input>
                </label>
            </form>
    )
}