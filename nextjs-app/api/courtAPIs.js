import { BaseURL, EPs } from "./endpoints.json";
import axios from 'axios';

const base = axios.create({
    baseURL: BaseURL
})

export const getCourtAll = async () => {
    try {
        const response = await base.get(EPs.courtAll)
        return response.data;
    } catch (e) {
        console.error(e.toString());
        return [];
    }
}

export const getCourtInfo = async (courtId) => {
    const params = {
        courtId
    }

    try {
        const response = await base.get(EPs.courtInfo, { params });
        return response.data;
    } catch (e) {
        console.error(e.toString());
        return [];
    }
}

export const postCourtCheckIn = async (courtId) => {
    try {
        const response = await base.post(EPs.courtCheckIn, { courtId });
        return true;
    } catch (e) {
        return false;
    }
}