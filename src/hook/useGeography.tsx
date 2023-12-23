import { useRequest } from 'ahooks';
import GEO_API from 'api/geography';
import { useState } from 'react';

export default function useGeography() {
  const [provinceId, setProvinceId] = useState('1');
  const [districtId, setDistrictId] = useState('102');
  const [provinces, setProvinces] = useState<IGeography.Province[]>();
  const [districts, setDistricts] = useState<IGeography.District[]>();
  const [communes, setCommunes] = useState<IGeography.Commune[]>();

  const { loading: provinceLoading } = useRequest(GEO_API.getProvince, {
    manual: false,
    refreshOnWindowFocus: true,
    onSuccess: (data) => setProvinces(data),
  });

  const { loading: districtLoading } = useRequest(
    () => GEO_API.getDistrict(provinceId),
    {
      manual: false,
      ready: provinceId !== '',
      refreshOnWindowFocus: true,
      refreshDeps: [provinceId],
      onSuccess: (data) => setDistricts(data),
    }
  );

  const { loading: communeLoading } = useRequest(
    () => GEO_API.getCommune(districtId),
    {
      manual: false,
      ready: districtId !== '',
      refreshOnWindowFocus: true,
      refreshDeps: [districtId],
      onSuccess: (data) => setCommunes(data),
    }
  );
  console.log(provinceId);
  console.log(districtId);

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
