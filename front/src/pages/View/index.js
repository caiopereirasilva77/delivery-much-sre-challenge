import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ViewPage() {
    let { param } = useParams();

    const [preference, setPreference] = useState("");
    const [ip, setIp] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        axios.get("http://3.21.84.1/preferences/" + param).then(data => {
            setIp(data.data.ip)
            setId(data.data.id)
            setPreference(data.data.preference)
        })
    })

    return (
        <>
            <label>ID: {id}</label><br/>
            <label>IP: {ip}</label><br/>
            <label>Preference: {preference}</label><br/><br/>

            <a href="/"> Inicio </a>
        </>
    );
}

export default ViewPage;
