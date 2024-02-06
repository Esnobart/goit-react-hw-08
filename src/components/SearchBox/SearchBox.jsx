import { useId } from "react";
import css from './SearchBox.module.css';

export const SearchBox = ({ searchValue, onSearchChange}) => {
    const filter = useId();

    return (
            <form>
                <label htmlFor={filter} className={css.form}>Find contacts by name
                    <input type="text" id={filter} value={searchValue} onChange={evt => onSearchChange(evt.target.value)} className={css.input}></input>
                </label>
            </form>
    )
}