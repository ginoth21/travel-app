const API_HOSTNAME = "http://localhost:8000"

//TODO: handle case where there may be no headers or payload - maybe have separate functions for GET/POST/etc
async function callAPI(endpoint: string, httpMethod: string, reqHeaders: HeadersInit, payload: string) {
    const res = await fetch(
        API_HOSTNAME + endpoint,
        {
        method: httpMethod,
        headers: reqHeaders,
        body: payload
    });
    return res.json();
}

export async function generateItinerary(destination: string, num_days: number) {
    var reqHeaders = { "Content-Type": "application/json" };
    var payload = JSON.stringify(
        {
            "destination": destination,
            "days": num_days + ""
        }
    );
    var data = await callAPI("/ai/generate", "POST", reqHeaders, payload);
    return data;
}