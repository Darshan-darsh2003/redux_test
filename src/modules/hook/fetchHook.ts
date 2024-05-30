import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { GetDataProps } from "../service/fetchService";
import { fetchAction } from "../action/fetchAction";
import { reset } from "../slice/fetchSlice";

export const useFetchData = () => {
  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.jsonData.loading);
  const error = useSelector((state: RootState) => state.jsonData.error);
  const data = useSelector((state: RootState) => state.jsonData.data);

  const fetchDataHook = async (props: GetDataProps) => {
    try {
      const res = await dispatch(fetchAction(props));
      return res;
    } catch (error: any) {
      console.error("Error fetching outlet data:", error.message);
    }
  };

  const resetState = () => {
    dispatch(reset());
  };

  return { fetchDataHook, data, loading, error, resetState };
};
