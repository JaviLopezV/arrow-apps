import { useNavigate } from "react-router-dom";

export default function useNavigation() {
  const navigate = useNavigate();

  const goTo = (link) => navigate(link);

  return { goTo };
}
