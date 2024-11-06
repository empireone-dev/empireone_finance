import axios from "axios";

export async function get_loan_record_payments_service() {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const path =window.location.pathname.split('/')[3]
    const url = path?path:window.location.pathname.split('/')[2]
    try {
        const res = await axios.get("/api/loan_record_payments?status="+capitalizeFirstLetter(url));
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_loan_record_payments_by_id_service(id) {
    try {
        const res = await axios.get(`/api/loan_record_payments/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_loan_record_payments_service(data) {
    try {
        const res = await axios.post('/api/loan_record_payments', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_loan_record_payments_service(data) {
    try {
        const res = await axios.put(`/api/loan_record_payments/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_loan_record_payments_service(id) {
    try {
        const res = await axios.delete(`/api/loan_record_payments/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}


export async function pay_loan_record_service(data) {
    try {
        const res = await axios.post(`/api/pay_loan_record`,data);
        return res;
    } catch (error) {
        return error;
    }
}

