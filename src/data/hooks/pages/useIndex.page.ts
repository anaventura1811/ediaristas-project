import { useState, useMemo } from 'react';
import { UserShortInterface } from 'data/@types/UserInterface';
import { ValidationService } from 'data/services/ValidationService';
import { ApiServices } from 'data/services/ApiService';

export default function useIndex(){
  const [cep, setCep] = useState(''),
    cepValido = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [error, setError] = useState(''),
    [search, setSearch] = useState(false),
    [loading, setLoading] = useState(false),
    [diaristas, setDiaristas] = useState([] as UserShortInterface[]),
    [diaristasRestantes, setDiaristasRestantes] = useState(0);
  
    async function searchProfessionals(cep: string) {
      setSearch(false);
      setLoading(true);
      setError('');
      try {
        const { data } = await ApiServices.get<{
          diaristas: UserShortInterface[];
          quantidade_diaristas: number;

        }>(`/api/diaristas-cidade?cep=${cep.replace(/\D/g, '')}`);
        setDiaristas(data.diaristas);
        setDiaristasRestantes(data.quantidade_diaristas);
        setSearch(true);
        setLoading(false);
      } catch(error) {
        setError('CEP não encontrado');
        setLoading(false);
      }
      
    }

  return {
    cep,
    setCep,
    cepValido,
    error,
    setError,
    search,
    setSearch,
    loading,
    setLoading,
    diaristas,
    setDiaristas,
    diaristasRestantes,
    setDiaristasRestantes,
  };
}