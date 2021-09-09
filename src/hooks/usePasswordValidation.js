import { useState, useEffect } from "react";

const usePasswordValidation = ({ newPassword = "", confirmNewPassword = "" }) => {
    const [validLength, setValidLength] = useState(null);
    const [hasNumber, setHasNumber] = useState(null);
    const [upperCase, setUpperCase] = useState(null);
    const [lowerCase, setLowerCase] = useState(null);
    const [specialChar, setSpecialChar] = useState(null);
    const [match, setMatch] = useState(null);

    useEffect(() => {
        setValidLength(newPassword.length >= 8 ? true : false);
        setUpperCase(newPassword.toLowerCase() !== newPassword);
        setLowerCase(newPassword.toUpperCase() !== newPassword);
        setHasNumber(/\d/.test(newPassword));
        setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(newPassword));
        setMatch(newPassword && newPassword === confirmNewPassword);
    }, [newPassword, confirmNewPassword]);
    return [validLength, hasNumber, upperCase, lowerCase, match, specialChar];
}

export default usePasswordValidation;