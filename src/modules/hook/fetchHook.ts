// src/features/outlet/outletHooks.ts
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { GetDataProps } from "../service/fetchService";

export const useGetOutlet = () => {
  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.jsonData.loading);
  const error = useSelector((state: RootState) => state.jsonData.error);
  const data = useSelector((state: RootState) => state.jsonData.data);

  const fetchOutletData = async (props: GetDataProps) => {
    try {
      const res = await dispatch(fetchOutletData(props)).unwrap();
      return res;
    } catch (error: any) {
      console.error("Error fetching outlet data:", error.message);
    }
  };

  return { fetchOutletData, data, loading, error };
};
