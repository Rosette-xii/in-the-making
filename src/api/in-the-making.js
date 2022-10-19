import request from "./request.js"

export const uploadData = params => request.post('in-the-makings', params);
export const totalData = () => request.get('in-the-makings/count');
export const listData = params => request.get('in-the-makings', params);

