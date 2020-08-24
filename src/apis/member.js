import BaseService from './baseService';
const config = require("../configs/config.json").member;

const MemberApis = {
    create(data) {
        console.log(data)
        return BaseService.post(config.create_member_apiendpoint, data);
    },
    getAllByCompany(companyId, data) {
        return BaseService.get(`${config.get_member_list_apiendpoint}/${companyId}`, data);
    },
    getMemberDetail(data) {
        return BaseService.get(`${config.get_member_detail_apiendpoint}/${data}`);
    },
    update(data) {
        return BaseService.put(config.update_member_apiendpoint, data);
    },
    deleteMember(data) {
        return BaseService.delete(`${config.delete_member_apiendpoint}/${data}`, data);
    }
};

export default MemberApis