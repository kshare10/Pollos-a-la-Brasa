import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Pollos a la Brasa - Authentic Peruvian Rotisserie";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "#1E201E", // charcoal
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "20px",
                    }}
                >
                    {/* Logo Circle */}
                    <div
                        style={{
                            width: "120px",
                            height: "120px",
                            borderRadius: "50%",
                            border: "4px solid #D5A021", // gold
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                            marginRight: "30px",
                        }}
                    >
                        {/* We can't use next/image here or local files easily in edge runtime without reading them. 
                For simplicity, we'll use a text representation or a colored circle. 
                Ideally, we'd fetch the logo URL if strictly needed, but text is safer for initial setup. */}
                        <div
                            style={{
                                fontSize: "60px",
                                background: "#D5A021",
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#1E201E",
                            }}
                        >
                            P
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div
                            style={{
                                fontSize: "70px",
                                color: "#D5A021", // gold
                                fontWeight: "bold",
                                marginBottom: "10px",
                            }}
                        >
                            Pollos a la Brasa
                        </div>
                        <div
                            style={{
                                fontSize: "30px",
                                color: "#ECEDEE", // stone-light
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                            }}
                        >
                            Authentic Peruvian Cuisine
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        gap: "40px",
                        marginTop: "40px",
                        fontSize: "24px",
                        color: "#A0A0A0",
                    }}
                >
                    <div>Eagle Rock, Los Angeles</div>
                    <div>•</div>
                    <div>Est. 2020</div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
