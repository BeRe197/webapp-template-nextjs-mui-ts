"use client";
import {useEffect} from "react";

const useEmailScript = () => {
    useEffect(() => {
        const script = document.createElement("script");

        script.type = "text/javascript";
        script.async = true;
        script.innerHTML =
            "function sendEmail(email) {window.location.href = 'mailto:' + email;}";

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
};

export default useEmailScript;
