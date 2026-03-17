import Signin from "./Signin/Signin";
import Signap from "./Signap/Signap";

const onSubmitProp = (data) => {
    console.log('data', data)
}

function Form() {

    return (
        <div>
            <Signin onSubmitProp={onSubmitProp} />
            <Signap onSubmitProp={onSubmitProp} />
        </div>
    );
}
export default Form