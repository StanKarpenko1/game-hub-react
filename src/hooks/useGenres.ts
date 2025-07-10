import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import useData from "./useDatas";

export interface IGenre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useData<IGenre>('/genres');

export default useGenres;
