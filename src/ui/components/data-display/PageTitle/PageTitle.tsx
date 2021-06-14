import React from 'react';
import { PageTitleContainer, PageTitleStyled, PageSubtitleStyled } from './PageTitle.style';

interface PageTitleProps {
  title: string;
  subtitle?: string | JSX.Element;
}

function PageTitle({ title, subtitle } : PageTitleProps) : JSX.Element {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{ title }</PageTitleStyled>
      <PageSubtitleStyled>{ subtitle }</PageSubtitleStyled> 
    </PageTitleContainer>
  )
}

export default PageTitle;
