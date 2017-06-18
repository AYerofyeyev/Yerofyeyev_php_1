import React from "react";
import "./registrationForm.scss";

class RegistrationForm extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div class="registration-form">
                <h2>Регистрация</h2>
                <form action="index.html" method="get">
                    <input type="text" name="username" value="" placeholder="Username" autofocus />
                    <input type="text" name="name" value="" placeholder="Name" />
                    <input type="text" name="surname" value="" placeholder="Surname" />
                    <input type="email" name="email" value="" placeholder="e-mail" />
                    <input type="submit" value="Зарегистрироваться" />
                </form>
            </div>
        );
    }
}

export default RegistrationForm;
