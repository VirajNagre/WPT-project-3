import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { BASE_URL, EVENT_ENDPOINT } from "../Constants/Constants";
import EventList from "./AdminComponents/EventList.js";
import { getToken } from "../Services/userServices.js";
import toast, { Toaster } from "react-hot-toast";
import ConfirmationModal from './ConfirmationModal.js';

export const AdminPanel = () => {
    const [allEvents, setAllEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [eventIdToDelete, setEventIdToDelete] = useState(null);

    const handleShow = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    let content = {
        heading: "Delete Event",
        body: "This will delete the event, sure to go ahead?",
        deny: "No",
        accept: "Yes"
    };

    useEffect(() => {
        axios
            .get(`${BASE_URL}/${EVENT_ENDPOINT}/`)
            .then((response) => {
                setAllEvents(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleDelete = (id) => {
        setEventIdToDelete(id);
        handleShow();
    };

    const confirmDelete = () => {
        const url = `${BASE_URL}/${EVENT_ENDPOINT}/delete-event`;
        axios
            .delete(url, {
                data: { delId: eventIdToDelete },
                headers: { Authorization: `Bearer ${getToken()}` },
            })
            .then((response) => {
                if (response) {
                    setAllEvents(allEvents.filter((event) => event._id !== eventIdToDelete));
                    toast.success(response?.data?.message);
                }
            })
            .catch((error) => {
                toast.error(error?.data?.message || "Not deleted");
                console.log(error);
            })
            .finally(() => {
                handleClose(); 
            });
    };

    return (
        <Container>
            <h2>Admin Panel</h2>
            <ConfirmationModal
                show={showModal}
                handleClose={handleClose}
                handleConfirm={confirmDelete}
                content={content}
            />
            <Toaster />
            <EventList events={allEvents} onDelete={handleDelete} />
        </Container>
    );
};

export default AdminPanel;
