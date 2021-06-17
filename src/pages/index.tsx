import Head from 'next/head';
import Image from 'next/image';
import styles from '@styles/Home.module.css';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/Inputs/TextFieldMask';
import { Button, Typography, Container } from '@material-ui/core';
import { FormElementsContainer, ProfessionalsPaper, ProfessionalsContainer } from 'ui/styles/index.style';
import useIndex from '../data/hooks/pages/useIndex.page';

export default function Home() {
  const { cep, setCep, cepValido } = useIndex();
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            variant={'outlined'}
            value={ cep }
            onChange={ (e) => setCep(e.target.value) }
          />
          <Typography color={'error'}>{cepValido}</Typography>
          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width:'220px' }}
          >
            Buscar
          </Button>
        </FormElementsContainer>
        <ProfessionalsPaper>
          <ProfessionalsContainer>
            <UserInformation
              name={ 'Ana'}
              picture={'https://github.com/anaventura1811.png'}
              rating={4}
              description={'Belo Horizonte'}
            />
            <UserInformation
              name={ 'Ana'}
              picture={'https://github.com/anaventura1811.png'}
              rating={4}
              description={'Belo Horizonte'}
            />
            <UserInformation
              name={ 'Ana'}
              picture={'https://github.com/anaventura1811.png'}
              rating={4}
              description={'Belo Horizonte'}
            />
            <UserInformation
              name={ 'Ana'}
              picture={'https://github.com/anaventura1811.png'}
              rating={4}
              description={'Belo Horizonte'}
            />
            <UserInformation
              name={ 'Ana'}
              picture={'https://github.com/anaventura1811.png'}
              rating={4}
              description={'Belo Horizonte'}
            />
            <UserInformation
              name={ 'Ana'}
              picture={'https://github.com/anaventura1811.png'}
              rating={4}
              description={'Belo Horizonte'}
            />
          </ProfessionalsContainer>
        
        </ProfessionalsPaper>
      </Container>

    </div>
  )
}
