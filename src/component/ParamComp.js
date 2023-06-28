import { useParams } from 'react-router-dom';

function ParamComp() {
    const params = useParams();
    const {name} = params;
    return (
        <div>
            <h1>
                Param Component {name}
            </h1>
        </div>
    )
}

export default ParamComp;