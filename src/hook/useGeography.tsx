import { useRequest } from 'ahooks';
import GEO_API from 'api/geography';
import { useState } from 'react';

export default function useGeography() {
  const [provinceId, setProvinceId] = useState('');
  const [districtId, setDistrictId] = useState('');
  const [provinces, setProvinces] = useState<IGeography.Province[]>();
  const [districts, setDistricts] = useState<IGeography.District[]>();
  const [communes, setCommunes] = useState<IGeography.Commune[]>();

  const { loading: provinceLoading } = useRequest(GEO_API.getProvince, {
    manual: false,
    refreshOnWindowFocus: true,
    onSuccess: (data) => setProvinces(data),
  });

  const { loading: districtLoading } = useRequest(
    async () => await GEO_API.getDistrict(provinceId),
    {
      manual: false,
      ready: provinceId !== '' && provinces && provinces.length > 0,
      refreshDeps: [provinceId],
      onSuccess: (data) => setDistricts(data),
    }
  );

  const { loading: communeLoading } = useRequest(
    async () => await GEO_API.getCommune(districtId),
    {
      manual: false,
      ready: districtId !== '' && districts && districts.length > 0,
      //   refreshOnWindowFocus: true,
      refreshDeps: [districtId],
      onSuccess: (data) => setCommunes(data),
    }
  );
  //   console.log('province', provinceId);
  //   console.log('district', districtId);

  return {
    setProvinceId,
    setDistrictId,
    provinces,
    districts,
    communes,
    provinceLoading,
    districtLoading,
    communeLoading,
  };
}
