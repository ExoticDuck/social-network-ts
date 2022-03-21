import React from "react";
import loader2 from "../../img/loader2.gif"
import s from "./Preloader.module.css"

type PreloaderPropsType = {

}

const Preloader = (props: PreloaderPropsType) => {
    return(
        <div>
            <img className={s.Loader} src={loader2} alt="loader" />
        </div>
    )
}

export default Preloader;