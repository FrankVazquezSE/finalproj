import {useState} from 'react';
import {Alert} from "react-bootstrap";

export default function AlertDismiss({ message, varient, deleteAlert }) {
    const [show, setShow] = useState(true);

    if (show) {
        return(
            <Alert varient={varient} onClose={() => {
                deleteAlert(); setShow(false);
            }}
            dismissible> {message} </Alert>
        );
    } else {
        return null;
    }
}