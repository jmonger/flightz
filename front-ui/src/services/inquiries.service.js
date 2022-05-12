import http from "../http-common";

const create = data => {
    return http.post("/inquiries/", data);
};

const InquiryDataService = {
    create
};

export default InquiryDataService;