import { useRef, useState } from "react";
// const onSubmitProp = (data) => {
//     console.log('data', data)
// }

function Signin({ onSubmitProp }) {
    const formRef = useRef(null)
    const [inputs, setInputs] = useState(
        {
            email: '',
            password: '',
        }
    )
    console.log("inputs", inputs)

    const handelChange = (event) => {
        setInputs((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        })

        )

    }

    const handelSubmit = (event) => {
        event.preventDefault();
        console.log("submit", inputs)
        onSubmitProp(inputs)
        formRef.current.reset()
        setInputs({})
    }


    return (
        <div>
            <form
                ref={formRef}
                onChange={handelChange}
                onSubmit={handelSubmit}
            >
                <input
                    name="email"
                    placeholder="емайл"
                    type="email" />

                <input
                    name="password"
                    placeholder="пароль"
                    type="password" />
                <button type="submit">войти</button>

            </form>

        </div>
    );
}
export default Signin