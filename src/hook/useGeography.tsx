import { useRequest } from 'ahooks';
import GEO_API from 'api/geography';
import { useEffect, useState } from 'react';

export default function useGeography({
  proName,
  disName,
}: {
  proName?: string;
  disName?: string;
}) {
  const [provinceId, setProvinceId] = useState('');
  const [districtId, setDistrictId] = useState('');
  const [provinces, setProvinces] = useState<IGeography.Province[]>();
  const [districts, setDistricts] = useState<IGeography.District[]>();
  const [communes, setCommunes] = useState<IGeography.Commune[]>();

  const { loading: provinceLoading, error: errProvince } = useRequest(
    GEO_API.getProvince,
    {
      manual: false,
      refreshOnWindowFocus: true,
      onSuccess: (data) => setProvinces(data),
    }
  );

  const { loading: districtLoading, error: errDistrict } = useRequest(
    async () => await GEO_API.getDistrict(provinceId),
    {
      manual: false,
      ready: provinceId !== '' && provinces && provinces.length > 0,
      refreshDeps: [provinceId],
      onSuccess: (data) => setDistricts(data),
    }
  );

  const { loading: communeLoading, error: errCommune } = useRequest(
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
  useEffect(() => {
    if (proName !== undefined) {
      if (provinces && provinces.length > 0) {
        const getProvinceId = provinces?.find((d) => d.name === proName);
        if (getProvinceId) {
          setProvinceId(`${getProvinceId?.id}`);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [proName, provinces]);

  useEffect(() => {
    if (disName !== undefined) {
      if (districts && districts.length > 0) {
        const getDistrictId = districts?.find((d) => d.name === disName);
        if (getDistrictId) {
          setDistrictId(`${getDistrictId?.id}`);
        }
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disName, districts]);

  return {
    setProvinceId,
    setDistrictId,
    provinces,
    districts,
    communes,
    provinceLoading,
    districtLoading,
    communeLoading,
    errState: errProvince || errCommune || errDistrict,
  };
}
