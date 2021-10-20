//создаем класс-обертку для того, чтобы ограничить доступ к некоторым методам в целях безопасности
import { User } from "User";
import { Company } from "Company";

//В TS классы имеют двойную природу: они могут быть использованы для создания экземпляров этого класса и для ссылки на такой тип, например { User } - образец и тип 

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
  addMarker(mapable: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapable.location.lat,
        lng: mapable.location.lng
      }
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

