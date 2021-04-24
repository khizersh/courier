import {serviceData} from "./serviceDetail"


export const getServiceByName = (name) => {
   let data = serviceData.filter(f => f.name == name)[0]
   return data;
}