import axios from "axios";

export async function get_loan_record_service() {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const path =window.location.pathname.split('/')[3]
    const url = path?path:window.location.pathname.split('/')[2]
    const urls = window.location.href;
    const parsedUrl = new URL(urls);
    const page = parsedUrl.searchParams.get("page")??'1';
    const search = parsedUrl.searchParams.get("search");
    console.log('page',page)
    try {
        const res = await axios.get("/api/loan_record?status="+capitalizeFirstLetter(url)+'&page='+page+'&search='+search);
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_loan_record_by_id_service(id) {
    try {
        const res = await axios.get(`/api/loan_record/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_loan_record_service(data) {
    try {
        const res = await axios.post('/api/loan_record', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_loan_record_service(data) {
    try {
        const res = await axios.put(`/api/loan_record/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_loan_record_service(id) {
    try {
        const res = await axios.delete(`/api/loan_record/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function loan_change_status_service(data) {
    try {
        const res = await axios.post(`/api/loan_change_status`,data);
        return res;
    } catch (error) {
        return error;
    }
}