import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const alt = "Pollos a la Brasa | Authentic Peruvian Rotisserie Chicken | Eagle Rock, LA";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    let machuDataUrl = "";
    let logoDataUrl = "";

    try {
        const machuPath = path.join(process.cwd(), "public/images/machu-picchu.jpg");
        const logoPath = path.join(process.cwd(), "public/images/updated_logo.png");

        const machuBase64 = fs.readFileSync(machuPath).toString("base64");
        const logoBase64 = fs.readFileSync(logoPath).toString("base64");

        machuDataUrl = `data:image/jpeg;base64,${machuBase64}`;
        logoDataUrl = `data:image/png;base64,${logoBase64}`;
    } catch {
        // fallback
    }

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    backgroundColor: "#07090D",
                    overflow: "hidden",
                }}
            >
                {/* Background Machu Picchu Photo */}
                {machuDataUrl && (
                    <img
                        src={machuDataUrl}
                        alt="Machu Picchu Background"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                    />
                )}

                {/* Dark Cinematic Gradient Overlay Scrim */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background:
                            "linear-gradient(to bottom, rgba(7, 9, 13, 0.4) 0%, rgba(9, 12, 18, 0.72) 60%, rgba(6, 8, 12, 0.92) 100%)",
                    }}
                />

                {/* Ambient Glow */}
                <div
                    style={{
                        position: "absolute",
                        top: "30%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "500px",
                        height: "350px",
                        borderRadius: "50%",
                        background: "rgba(245, 158, 11, 0.18)",
                        filter: "blur(90px)",
                    }}
                />

                {/* Center Content Card */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        padding: "40px 60px",
                        position: "relative",
                        zIndex: 10,
                    }}
                >
                    {/* Logo */}
                    {logoDataUrl ? (
                        <img
                            src={logoDataUrl}
                            alt="Pollos a la Brasa Logo"
                            style={{
                                width: "130px",
                                height: "130px",
                                borderRadius: "50%",
                                border: "3px solid rgba(251, 191, 36, 0.75)",
                                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8)",
                                marginBottom: "16px",
                            }}
                        />
                    ) : (
                        <div
                            style={{
                                width: "120px",
                                height: "120px",
                                borderRadius: "50%",
                                border: "3px solid #FBBF24",
                                background: "#B91C1C",
                                color: "#FFF",
                                fontSize: "50px",
                                fontWeight: "bold",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: "16px",
                            }}
                        >
                            P
                        </div>
                    )}

                    {/* Heritage Badge */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "6px 20px",
                            borderRadius: "9999px",
                            fontSize: "14px",
                            fontWeight: 700,
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            color: "#FDE68A",
                            background: "rgba(13, 18, 27, 0.85)",
                            border: "1px solid rgba(251, 191, 36, 0.4)",
                            marginBottom: "14px",
                        }}
                    >
                        Eagle Rock · Los Angeles · Since 2020
                    </div>

                    {/* Main Title */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "66px",
                            fontWeight: 800,
                            fontFamily: "serif",
                            letterSpacing: "-0.02em",
                            marginBottom: "8px",
                            color: "#FFFFFF",
                            textShadow: "0 4px 20px rgba(0, 0, 0, 0.9)",
                        }}
                    >
                        <span>Pollos a la Brasa</span>
                    </div>

                    {/* Subtitle */}
                    <div
                        style={{
                            fontSize: "26px",
                            color: "#FEF3C7",
                            fontWeight: 600,
                            marginBottom: "18px",
                            letterSpacing: "0.02em",
                            textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)",
                        }}
                    >
                        Authentic Peruvian Rotisserie Chicken & Andean Flavors
                    </div>

                    {/* Info Pills */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "24px",
                            fontSize: "16px",
                            fontWeight: 600,
                            color: "#E2E8F0",
                            background: "rgba(13, 17, 26, 0.75)",
                            padding: "10px 28px",
                            borderRadius: "9999px",
                            border: "1px solid rgba(245, 158, 11, 0.25)",
                        }}
                    >
                        <div>📍 2161 Colorado Blvd, LA</div>
                        <div style={{ color: "#FBBF24" }}>•</div>
                        <div>📞 (323) 255-6322</div>
                        <div style={{ color: "#FBBF24" }}>•</div>
                        <div style={{ color: "#FBBF24" }}>Dine-in · Takeout · Delivery</div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
