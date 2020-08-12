import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import {
  ModelData,
  DistrictTalukPinCode,
  ApiResponse,
  RequestInput,
  ApiResponseArray,
  ViewAdmissionRequestArray,HospitalSearchResponseDTO
} from "../model/modeldata";

import { FormsModule, FormArray, ReactiveFormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { DataserviceService } from "../service/dataservice.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {



hosRegnNo:String = null;

facilitiesForm:FormGroup;

hospitalSearchResponseDTO:HospitalSearchResponseDTO = new HospitalSearchResponseDTO();
response:String="";
  constructor( private formBuilder: FormBuilder,
    private dataService: DataserviceService,) { }

  ngOnInit() {
    sessionStorage.getItem("userName")
//this.initializeForm();
this.dataService.viewFacilities(sessionStorage.getItem("userName")).subscribe(data=>{
  this.hospitalSearchResponseDTO = data;
})
  }
initializeForm(){
    this.facilitiesForm = this.formBuilder.group({
    hospitalRegnNo: [this.hospitalSearchResponseDTO.hospitalRegnNo],
    hospitalName: [this.hospitalSearchResponseDTO.hospitalName],
    contactNumber: [this.hospitalSearchResponseDTO.contactNumber],
    hospitalType: [this.hospitalSearchResponseDTO.hospitalType],
    email: [this.hospitalSearchResponseDTO.email],
    address: [this.hospitalSearchResponseDTO.address],
    city: [this.hospitalSearchResponseDTO.city],
    pincode: [this.hospitalSearchResponseDTO.pincode],
    state: [this.hospitalSearchResponseDTO.state],
    country: [this.hospitalSearchResponseDTO.country],
    latitude: [this.hospitalSearchResponseDTO.latitude],
    longitude: [this.hospitalSearchResponseDTO.longitude],
    multiSpeciality: [this.hospitalSearchResponseDTO.multiSpeciality],
    ambulanceAvailability: [this.hospitalSearchResponseDTO.ambulanceAvailability],
    bloodBankAvailability: [this.hospitalSearchResponseDTO.bloodBankAvailability],
    scanAvailability: [this.hospitalSearchResponseDTO.scanAvailability],
    insuranceAvailability: [this.hospitalSearchResponseDTO.insuranceAvailability],
    bedCapacity: [this.hospitalSearchResponseDTO.bedCapacity],
    bedAvailable: [this.hospitalSearchResponseDTO.bedAvailable],
    ventilatorFacility: [this.hospitalSearchResponseDTO.ventilatorFacility],
    ventilatorCapacity: [this.hospitalSearchResponseDTO.ventilatorCapacity],
    ventilatorAvailable: [this.hospitalSearchResponseDTO.ventilatorAvailable],
    covidSpeciality: [this.hospitalSearchResponseDTO.covidSpeciality],
    heartSpeciality: [this.hospitalSearchResponseDTO.heartSpeciality],
    accidentSpeciality: [this.hospitalSearchResponseDTO.accidentSpeciality],
    orthoSpeciality: [this.hospitalSearchResponseDTO.orthoSpeciality],
    neuroSpeciality: [this.hospitalSearchResponseDTO.neuroSpeciality]
  });
}
updatefacility(){
//this.hospitalSearchResponseDTO.hospitalRegnNo = this.facilitiesForm.get('hospitalRegnNo').value;
    this.hospitalSearchResponseDTO.hospitalRegnNo= this.facilitiesForm.get('hospitalRegnNo').value;
    this.hospitalSearchResponseDTO.hospitalName= this.facilitiesForm.get('hospitalName').value;
    this.hospitalSearchResponseDTO.contactNumber= this.facilitiesForm.get('contactNumber').value;
    this.hospitalSearchResponseDTO.hospitalType= this.facilitiesForm.get('hospitalType').value;
    this.hospitalSearchResponseDTO.email= this.facilitiesForm.get('email').value;
    this.hospitalSearchResponseDTO.address= this.facilitiesForm.get('address').value;
    this.hospitalSearchResponseDTO.city= this.facilitiesForm.get('city').value;
    this.hospitalSearchResponseDTO.pincode= this.facilitiesForm.get('pincode').value;
    this.hospitalSearchResponseDTO.state= this.facilitiesForm.get('state').value;
    this.hospitalSearchResponseDTO.country= this.facilitiesForm.get('country').value;
    this.hospitalSearchResponseDTO.latitude= this.facilitiesForm.get('latitude').value;
    this.hospitalSearchResponseDTO.longitude= this.facilitiesForm.get('longitude').value;
    this.hospitalSearchResponseDTO.multiSpeciality= this.facilitiesForm.get('multiSpeciality').value;
    this.hospitalSearchResponseDTO.ambulanceAvailability= this.facilitiesForm.get('ambulanceAvailability').value;
    this.hospitalSearchResponseDTO.bloodBankAvailability= this.facilitiesForm.get('bloodBankAvailability').value;
    this.hospitalSearchResponseDTO.scanAvailability= this.facilitiesForm.get('scanAvailability').value;
    this.hospitalSearchResponseDTO.insuranceAvailability= this.facilitiesForm.get('insuranceAvailability').value;
    this.hospitalSearchResponseDTO.bedCapacity= this.facilitiesForm.get('bedCapacity').value;
    this.hospitalSearchResponseDTO.bedAvailable= this.facilitiesForm.get('bedAvailable').value;
    this.hospitalSearchResponseDTO.ventilatorFacility= this.facilitiesForm.get('ventilatorFacility').value;
    this.hospitalSearchResponseDTO.ventilatorCapacity= this.facilitiesForm.get('ventilatorCapacity').value;
    this.hospitalSearchResponseDTO.ventilatorAvailable= this.facilitiesForm.get('ventilatorAvailable').value;
    this.hospitalSearchResponseDTO.covidSpeciality= this.facilitiesForm.get('covidSpeciality').value;
    this.hospitalSearchResponseDTO.heartSpeciality= this.facilitiesForm.get('heartSpeciality').value;
    this.hospitalSearchResponseDTO.accidentSpeciality= this.facilitiesForm.get('accidentSpeciality').value;
    this.hospitalSearchResponseDTO.orthoSpeciality= this.facilitiesForm.get('orthoSpeciality').value;
    this.hospitalSearchResponseDTO.neuroSpeciality= this.facilitiesForm.get('neuroSpeciality').value;

    this.dataService.updateFacilities(this.hospitalSearchResponseDTO).subscribe(data=>{
      //get the response from service and display in UI

    })
}
}
