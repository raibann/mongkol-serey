declare namespace Commune {
  interface ICommune {
    id: string;
    administrative_unit: Administrativeunit;
    name_km: string;
    name_latin: string;
    name_en: string;
    full_name_km: string;
    full_name_latin: string;
    full_name_en: string;
    district_id: string;
    province_id: string;
    address_km: string;
    address_latin: string;
    address_en: string;
  }

  interface Administrativeunit {
    name_km: string;
    name_latin: string;
    name_en: string;
  }
}
