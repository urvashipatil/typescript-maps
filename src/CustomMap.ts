
import { Company } from "./Company";
import { User } from "./User";

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string){

    this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
      zoom: 1,      
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }


    addMarker(mappleObject: Mappable ): void {
      const marker = new google.maps.Marker({
        map: this.googleMap,
        position: {
          lat: mappleObject.location.lat,
          lng: mappleObject.location.lng,
        },
      }); 

      marker.addListener("click",()=>{
        // alert("Marker is clicked");
        const infoWindow = new google.maps.InfoWindow({
          content: mappleObject.markerContent()
        })

        infoWindow.open(this.googleMap,marker);

      })
    }

    // addCompanyMarker(company: Company): void {
    //   const marker = new google.maps.Marker({
    //     map: this.googleMap,
    //     position: {
    //       lat: company.location.lat,
    //       lng: company.location.lng,
    //     },
    //   }); 
    // }
  
}