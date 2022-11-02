import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import * as authServices from '../../apiServices/authServices';
import { setNameUser } from "../../Actions/bookActions";

import "./style.scss";

function LogIn(props) {
    const { active, onShow, onNameInfo } = props;
    const [modal, setModal] = useState(active);
    // const [nameUser, setNameUser] = useState("")
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch()

    const token = JSON.parse(localStorage.getItem("token"))

    useEffect(() => {
        if(token) {
            setModal(false)
        }
    }, [])

    const onSubmit = async (data) => {
        const result = await authServices.logIn('/login', data);
        localStorage.setItem("token", JSON.stringify(result.token));
        localStorage.setItem("name_user", JSON.stringify(result.first_name + result.last_name));
        dispatch(setNameUser(result.first_name + result.last_name))
        setModal(!modal);
    };

    const toggle = () => {
        setModal(!modal);
        onShow(modal);
    };

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>LOG IN</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="login__user">
                            <label htmlFor="email">User Name</label>
                            <input
                            value={'quy'}
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
                                value={'password'}

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
                        <input className="login__submit" type="submit" />
                    </form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default LogIn;
