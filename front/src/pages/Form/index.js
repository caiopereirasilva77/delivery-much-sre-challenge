import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FormPage() {
    const [preference, setPreference] = useState("");
    const [ip, setIp] = useState("");

    useEffect(() => {
        axios.get("https://api.ipify.org/?format=json").then(data => setIp(data.data.ip))
    })

    const submit = () => {
        axios({
            method: 'post',
            url: 'http://3.21.84.1/preferences/store',
            data: {
                ip,
                preference
            }
        }).then(data => {
            window.location.href = '/view/' + data.data
        })
    }

    return (
        <>
            <input type="hidden" id="ip" name="ip" value="" />
            <input type="radio" id="nginx" name="preference" value="nginx" onChange={() => setPreference("nginx")} />
            <label for="nginx">nginx</label><br/>
            <input type="radio" id="apache" name="preference" value="apache" onChange={() => setPreference("apache")} />
            <label for="apache">apache</label><br/>
            <input type="radio" id="lighttpd" name="preference" value="lighttpd" onChange={() => setPreference("lighttpd")} />
            <label for="lighttpd">lighttpd</label><br/><br/>
            <button type="button" onClick={submit} >Submit </button>
        </>
    );
}

export default FormPage;
