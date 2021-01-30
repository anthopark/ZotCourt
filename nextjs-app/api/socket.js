import Axios from "axios";

async function GET(props) {
    return await sendHTTP("GET", props);
}

async function POST(props) {
    return await sendHTTP("POST", props);
}

async function sendHTTP(method, props) {
    const options = {
        ...props,
        method: method
    }

    return Axios.request(options)
}

export default {
    GET,
    POST,
};