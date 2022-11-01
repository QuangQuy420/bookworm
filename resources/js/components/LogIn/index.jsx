import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import "./style.scss";

function LogIn(props) {
    const { active, onShow } = props;
    const [modal, setModal] = useState(active);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
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
                            <label htmlFor="userName">User Name</label>
                            <input
                                id="userName"
                                {...register("userName", { required: true })}
                                type="text"
                            />
                            {errors.userName && (
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
                        <input className="login__submit" type="submit" />
                    </form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default LogIn;
