import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useAppNavigate = () => useNavigate();
export const useAppSelector = useSelector;
