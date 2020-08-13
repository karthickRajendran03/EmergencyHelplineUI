import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import {
  ModelData,
  DistrictTalukPinCode,
  ApiResponse,Login,
  ApiResponseArray,ViewAdmissionRequestArray,SubmitAdmissionResponse,
  ViewAdmissionHospitalRequestArray,HospitalSearchResponseDTO
} from "../model/modeldata";
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }


   public getHospitalSearchResult(requestInput){
      const headers = {
      'Content-type': 'application/json'
    }
      return this.http.post<ApiResponseArray>('https://hospitalmanagementservice-dev-karthick3.sandbox-ocp43-one-176292-be5b1ee812fa4041cc73b6bbf969fc88-0000.eu-gb.containers.appdomain.cloud/hospital/searchHospitals', requestInput, {headers});
    }

  public getSubmittedRequests(mobNumber){
    const headers = {
    'Content-type': 'application/json'
  }
    return this.http.get<ViewAdmissionRequestArray>('https://patientservice-dev-karthick3.sandbox-ocp43-one-176292-be5b1ee812fa4041cc73b6bbf969fc88-0000.eu-gb.containers.appdomain.cloud/patient/viewAdmission/' + mobNumber, {headers});
  }

  public viewHospitalSubmittedRequests(hospitalRegnNo){
    const headers = {
    'Content-type': 'application/json'
  }
    return this.http.get<ViewAdmissionHospitalRequestArray>('https://hospitalmanagementservice-dev-karthick3.sandbox-ocp43-one-176292-be5b1ee812fa4041cc73b6bbf969fc88-0000.eu-gb.containers.appdomain.cloud/hospital/viewAdmission/' + hospitalRegnNo, {headers});
  }

  public submitRequest(submitAdmissionRequest){
    const headers = {
    'Content-type': 'application/json'
  }
    console.log(JSON.stringify(submitAdmissionRequest))
    return this.http.post<SubmitAdmissionResponse>('https://patientservice-dev-karthick3.sandbox-ocp43-one-176292-be5b1ee812fa4041cc73b6bbf969fc88-0000.eu-gb.containers.appdomain.cloud/patient/submitAdmission', submitAdmissionRequest, {headers});
  }

  public submitHospitalRequest(submitAdmissionRequest){
    const headers = {
    'Content-type': 'application/json'
  }
    console.log(JSON.stringify(submitAdmissionRequest))
    return this.http.post<SubmitAdmissionResponse>('https://patientservice-dev-karthick3.sandbox-ocp43-one-176292-be5b1ee812fa4041cc73b6bbf969fc88-0000.eu-gb.containers.appdomain.cloud/patient/submitAdmission', submitAdmissionRequest, {headers});
  }

  public authService(user){
    const headers = {
      'Authorization': 'Basic ' + btoa('cognizant:hackathon'),
       'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
       'Access-Control-Allow-Headers' : '*',
    	  'Access-Control-Allow-Origin': '*',
    	  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    	  'Access-Control-Max-Age': '3600'
    }
    return this.http.post<any>("https://authenticationservice-dev-karthick3.sandbox-ocp43-one-176292-be5b1ee812fa4041cc73b6bbf969fc88-0000.eu-gb.containers.appdomain.cloud/oauth/token", user, {headers});
}

public getUsers(userName) {
  const httpHeaders ={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
    return this.http.get<any>("https://authenticationservice-dev-karthick3.sandbox-ocp43-one-176292-be5b1ee812fa4041cc73b6bbf969fc88-0000.eu-gb.containers.appdomain.cloud/getUserData/"+userName, httpHeaders);
  }

public registerUser(user){
  const httpHeaders ={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  console.log(user)
return this.http.post<any>("https://authenticationservice-dev-karthick3.sandbox-ocp43-one-176292-be5b1ee812fa4041cc73b6bbf969fc88-0000.eu-gb.containers.appdomain.cloud/authentication/register", user, httpHeaders);
}

public viewFacilities(regno){
const httpHeaders ={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  return this.http.post<HospitalSearchResponseDTO>("https://hospitalmanagementservice-dev-karthick3.sandbox-ocp43-one-176292-be5b1ee812fa4041cc73b6bbf969fc88-0000.eu-gb.containers.appdomain.cloud/hospital/viewFacility/" + regno,httpHeaders);
}
public updateFacilities(hospitalSearchResponseDTO){
const httpHeaders ={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  return this.http.post<HospitalSearchResponseDTO>("https://hospitalmanagementservice-dev-karthick3.sandbox-ocp43-one-176292-be5b1ee812fa4041cc73b6bbf969fc88-0000.eu-gb.containers.appdomain.cloud/hospital/updateFacility",hospitalSearchResponseDTO,httpHeaders);
}

}
