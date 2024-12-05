import { Box, Button } from "@mui/material";
import React, { useRef } from "react";
import { useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";

export default function SignatureSection({ onNext, data, setForm }) {
    const sigPadRef = useRef(null);

    useEffect(() => {
        if (data.signature && sigPadRef.current) {
            sigPadRef.current.fromDataURL(data.signature);
        }
    }, [data.signature]);

    const clearSignature = () => {
        sigPadRef.current.clear();
    };

    const saveSignature = () => {
        const dataURL = sigPadRef.current.toDataURL();
        setForm({
            ...data,
            signature: dataURL,
        });
        onNext();
    };

    return (
        <>
            <h2>Signature Pad</h2>
            <Box sx={{ border: 2, borderRadius: "5px" }}>
                <SignatureCanvas
                    className="w-full"
                    ref={sigPadRef}
                    penColor="black"
                    canvasProps={{
                        style: { width: "100%", height: "300px" },
                        className: "signature-canvas",
                    }}
                />
            </Box>
            <br />
            <Button variant="outlined" color="error" onClick={clearSignature}>
                Clear
            </Button>
            {/* <button onClick={saveSignature}>Save</button> */}
            <Button
                className="w-full"
                variant="contained"
                onClick={saveSignature}
                sx={{
                    mt: 1,
                    mr: 1,
                }}
            >
                Continue
            </Button>
        </>
    );
}
