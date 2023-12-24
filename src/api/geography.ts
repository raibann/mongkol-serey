import HttpUtil from 'utils/http-util';
import { ROUTE_API } from 'utils/route-util';

const GEO_API = {
  getProvince: async () => {
    const res: IGeography.Province[] = await HttpUtil.get(ROUTE_API.province);
    return res;
  },
  getDistrict: async (provinceId: string) => {
    const res: IGeography.District[] = await HttpUtil.get(
      ROUTE_API.district.replace(':id', provinceId)
    );
    return res;
  },
  getCommune: async (districtId: string) => {
    const res: IGeography.Commune[] = await HttpUtil.get(
      ROUTE_API.commune.replace(':id', districtId)
    );
    return res;
  },
};
export default GEO_API;
