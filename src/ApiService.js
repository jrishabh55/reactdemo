import * as axios from 'axios';

export class ApiService {
    constructor() {
        this.apiToken = "e0004d01c7fa98354ecf7258d8e70672";
        this.orgId = "649199458";
        this.base = "https://books.zoho.com/api/v3/";
    }

    contacts() {
        return this.request('contacts');
    }

    buildUrl(url) {
        return this.base + url;
    }

    request(url) {
        url = this.buildUrl(url);
        return axios.get(url, {
            params: {
                organization_id : this.orgId
            },
            headers: {
                Authorization: `Zoho-authtoken ${this.apiToken}`
            }
        });
    }

}

export default (new ApiService());
