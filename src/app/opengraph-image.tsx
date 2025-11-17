import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'IKHWA INVESTMENTS - Your Trusted Partner for Investment in Morocco';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 60,
                    background: 'linear-gradient(to bottom right, #1a1a1a, #2d2d2d)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'sans-serif',
                    padding: '40px',
                }}
            >
                <div
                    style={{
                        fontSize: 80,
                        fontWeight: 'bold',
                        marginBottom: 20,
                        textAlign: 'center',
                    }}
                >
                    IKHWA INVESTMENTS
                </div>
                <div
                    style={{
                        fontSize: 40,
                        color: '#e0e0e0',
                        textAlign: 'center',
                        marginTop: 20,
                    }}
                >
                    Your Trusted Partner for Investment in Morocco
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
