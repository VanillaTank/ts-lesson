//создаем класс-обертку для того, чтобы ограничить доступ к некоторым методам в целях безопасности


//В TS классы имеют двойную природу: они могут быть использованы для создания экземпляров этого класса и для ссылки на такой тип, например { User } - образец и тип. Здесь это не используется, так как юзаем interface Mapable 

import { User } from "User";
import { Company } from "Company";

//инструкия, как быть агрументом для addMarker()
export interface Mapable {
  location: {
    lat: number;
    lng: number;
  }
  markerContent():string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;
  private el =  document.getElementById('map') as HTMLElement
  constructor(mapDivId: string) {
    this.googleMap = new google.maps.Map(this.el, {
      zoom: 1, 
      center: { lat: 0, lng: 0 }
    })
  }

  // можем передавать в метод или объект класса User или объект класса Company
  // TS позволит использовать только общие свойства, в данном случае - location
  // но такой подход не масштабируется (например, если нам нужно передать 50 вариантов mapable )
  addMarker(mapable: Mapable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapable.location.lat,
        lng: mapable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content : 'Привет, мир!'
      })
      infoWindow.open(this.googleMap, marker);
    })
  }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     }
  //   })
  // }
}

