import {User}  from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const customMap =  new CustomMap("map"); //map - id of Div
customMap.addMarker(user);

customMap.addMarker(company);

// customMap.addMarker({
//   location:{
//     lat:11,
//     lng:11
//   }
// })

// customMap.addCompanyMarker(company);

