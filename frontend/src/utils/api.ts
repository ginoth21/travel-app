const API_HOSTNAME = "http://localhost:8000"

export async function getMessage(endpoint: string) {
    const res = await fetch(API_HOSTNAME + endpoint);
    return res.json();
}

