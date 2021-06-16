import React from 'react';
import { FooterStyled, FooterContainer, FooterTitle, AppList } from './Footer.style';
import { Typography, Box } from '@material-ui/core';

const Footer = () => {
  return (
    <FooterStyled>
     <FooterContainer>
       <Box sx={{ maxWidth: '400px' }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={'body2'} sx={{ marginTop: '16px'}} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sit omnis odio praesentium ratione nemo aliquam at quis 
            asperiores error quam ea, doloremque obcaecati officia 
            saepe blanditiis aut sunt, eaque temporibus!
          </Typography>
       </Box>
       <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
              <li>
                <a
                  href={'/'}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                >
                  <img src={'/img/logos/app-store.png'} alt={'App Store'} />

                </a>
              </li>
              <li>
                <a
                  href={'/'}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                >
                  <img src={'/img/logos/google-play.png'} alt={'Google Play'} />

                </a>
              </li>
          </AppList>
       </div>
      </FooterContainer>
    </FooterStyled>
  )
}

export default Footer;
