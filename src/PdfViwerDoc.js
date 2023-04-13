import { CobrowseIO } from "cobrowse-sdk-js";
import { useEffect, useRef, useState } from "react";

export default function PdfViewerComponent() {
    const [file, setFile] = useState(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        let instance, PSPDFKit;
        const blob = new Blob([file], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);

        if (file) {
            (async function () {
                PSPDFKit = await import("pspdfkit");
                PSPDFKit.unload(container);
                instance = await PSPDFKit.load({
                    container,
                    document: url,
                    baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
                });
            })();
        }

        return () => PSPDFKit && PSPDFKit.unload(container);
    }, [file]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file.type === "application/pdf") {
            setFile(file);
        }
    };

    return (
        <>
            <input type="file" accept="application/pdf" onChange={handleFileChange} id="new_unique" style={{
                margin: "1rem",
                padding: "0.5rem 2rem",
                backgroundColor: "grey",
                borderRadius: "10px"
            }} />
            <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />
        </>
    );
}