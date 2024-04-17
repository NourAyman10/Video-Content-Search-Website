import React, { Fragment} from "react";
import radioButtonStyle from "./RadioButton.module.css";

const RadioButton = ({children, id_value, name_value, current_value, icon, onSearchStatusChange}) => {
    return (
        <Fragment>
            <label htmlFor={id_value} className={radioButtonStyle.container}>
                <input type="radio" id={id_value} name={name_value} value={current_value} onChange={onSearchStatusChange} />

                <span className={radioButtonStyle.radioButton}>
                    <div className={radioButtonStyle.biSearchType} icon={icon}></div>
                    <p className={radioButtonStyle.label}>{children}</p>
                </span>
            </label>
        </Fragment>
    )
}

export default RadioButton
