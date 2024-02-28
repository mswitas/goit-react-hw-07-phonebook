import { useSelector } from "react-redux"
import { selectError } from "../../redux/selectors"

export const ErrorMessage = () => {
    const message = useSelector(selectError);
    
    return (
        <div>{message}</div>
    );
}
