import { FallingLines } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader = () => {
    return (
        <div className={css.Loader}>
            <FallingLines
                color="#800080"
                width="100"
                visible={true}
                ariaLabel="falling-circles-loading"
            />
        </div>
    );
}
