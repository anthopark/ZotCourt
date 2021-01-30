import Socket from "./socket";
import { herokuUrl, EPs } from "../endpoints.json";

async function getCourtInfo() {
    const payLoad = {

    };

    const options = {
        baseURL: herokuUrl, // Base URL
        url: EPs.courtInfoEP, // Path of URL
        data: payLoad // Data to send in Body
    }

    return await Socket.GET(options);
}


async function postCheckIn() {
    const payLoad = {
        courtId: ,
        a

    };

    const options = {
        baseURL: herokuUrl, // Base URL
        url: EPs.checkInEP, // Path of URL
        data: payLoad // Data to send in Body
    }

    return await Socket.POST(options);
}

