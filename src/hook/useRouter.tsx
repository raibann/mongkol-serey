import {
  useNavigate,
  useParams,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { ROUTE_PATH } from 'utils/route-util';

export { ROUTE_PATH };

const useRouter = () => {
  const navigate = useNavigate();
  const urlParams = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  return {
    navigate,
    urlParams,
    location,
    searchParams,
    setSearchParams,
  };
};

export default useRouter;
