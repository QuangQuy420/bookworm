import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch} from "react-redux";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import * as authServices from "../../apiServices/authServices";
import "./style.scss";

function LogIn(props) {
    const { showLogin, signIn } = props;
    const [failLogin, setFailLogin] = useState(false)
    const [modal, setModal] = useState(showLogin ? showLogin : false);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        try {
            const result = await authServices.logIn("/login", data);
            localStorage.setItem("token", JSON.stringify(result.token));
            localStorage.setItem("name_user", JSON.stringify(result.first_name + result.last_name));
            setModal(!modal);
            window.location.reload();
        } catch (error) {
            setFailLogin(true)
            setTimeout(() => {
                setFailLogin(false)
            }, 3000);
        }

        const result = await authServices.logIn("/login", data);
        console.log(result);
        localStorage.setItem("token", JSON.stringify(result.token));
        localStorage.setItem("name_user", JSON.stringify(result.first_name + result.last_name));
        setModal(!modal);
        window.location.reload();
    };

    const toggle = () => {
        setModal(!modal);
    };

    return (
        <div>
            <span onClick={toggle}>{signIn}</span>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>LOG IN</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="login__user">
                            <label htmlFor="email">User Name</label>
                            <input
                                id="email"
                                {...register("email", { required: true })}
                                type="text"
                            />
                            {errors.email && (
                                <span className="login-message">
                                    This field is required
                                </span>
                            )}
                        </div>

                        <div className="login__password">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                {...register("password", { required: true })}
                                type="password"
                            />
                            {errors.password && (
                                <span className="login-message">
                                    This field is required
                                </span>
                            )}
                        </div>
                        {failLogin ? (
                            <span className="login-fail">
                                Email or Password not correct
                            </span>
                        ) : ''}
                        <input className="login__submit" type="submit"/>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default LogIn;
