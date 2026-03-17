import { useRef, useState } from "react";
import Input from "./Input/Input";
// import styled from "styled-components"

function Signap({ onSubmitProp }) {
    const formRef = useRef(null)
    const [inputs, setInputs] = useState(
        {
            name: '',
            nick: '',
            sex: '',
            email: '',
            password: '',
            returnPassword: ''
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
                onSubmit={handelSubmit}>

                <Input
                    label="имя"
                    name="name"
                    placeholder="имя"
                    type="text" />
                <Input
                    label="введите ник"
                    name="nick"
                    placeholder="ник"
                    type="text" />

                <Input
                    name="sex"
                    placeholder="пол"
                    type="radio"
                    label="sex" />

                <Input
                    label="введите почту"
                    name="email"
                    placeholder="емайл"
                    type="email" />

                <Input
                label="введите пaроль "
                    name="password"
                    placeholder="пароль"
                    type="password" />
                <Input
                label="повторите пароль"
                    name="returnPassword"
                    placeholder="повторите пароль"
                    type="password" />
                <button type="submit">войти</button>

            </form>

        </div>
    );
}
export default Signap

// = styled(SignapContainer)`
//  margin: ${({ margin = "0" }) => margin};
//   / font-family: Graphik LCG;
// font-weight: 900;
// font-size: 36px;
//   letter-spacing: 0%;
// `