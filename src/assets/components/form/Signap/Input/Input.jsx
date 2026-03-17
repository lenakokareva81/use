export default function Input({ type, name, placeholder, label, icon }) {

    return (<>
        <div style={{ margin: "15px 5px" }}>
            {name === "sex" ?
                <><legend>введите пол</legend>

                    <div>
                        <input type="radio" id="femail" name={name} value="мужской" />
                        <label for="femail"> мужской</label>
                    </div>

                    <div>
                        <input type="radio" id="femail" name={name} value="женский" />
                        <label for="femail">женский</label>
                    </div>
                </>

                :
                <label >
                    {label}
                    <div style={{ border: "1px solid", margin: "5px" }}>
                        {name === "nick" ? <input
                            type="button"
                            style={{ border: "none", background: "white" }}
                            value={icon ? `{icon}` : "@"} /> : <></>}

                        <input

                            style={{ border: "none" }}
                            name={name}
                            placeholder={placeholder}
                            type={type}>

                        </input>
                    </div>


                </label>

            }



        </div >

    </>)

}