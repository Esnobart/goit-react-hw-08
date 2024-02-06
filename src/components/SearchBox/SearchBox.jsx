import { useId } from "react";
import css from './SearchBox.module.css';

export const SearchBox = ({ val, funct}) => {
    const filter = useId();

    const resetInfo = evt => {
        evt.preventDefault();
        evt.target.reset();
    }

    return (
            <form onSubmit={resetInfo}>
                <label htmlFor={filter} className={css.form}>Find contacts by name
                    <input type="text" id={filter} value={val} onChange={evt => funct(evt.target.value)} className={css.input}></input>
                </label>
            </form>
    )
}