import { experimentalStyled as styled } from '@material-ui/core/styles';

export const PageTitleContainer = styled('div')`
  margin: ${({theme}) => theme.spacing(5) + ' ' + '0'};
  text-align: center;
`;

let cor = '#6b2aee';


export const PageTitleStyled = styled('h2')`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.primary.main };
  font-size: ${({ theme }) => theme.typography.h6.fontSize };
  margin: 0;

  ${({ theme }) => theme.breakpoints.down('md')}{
    font-size: ${({ theme }) => theme.typography.body1.fontSize };
  }
`;

export const PageSubtitleStyled =  styled('h3')`
  margin: ${({ theme }) => theme.spacing(1.5) + ' ' + '0'};
  color: ${({ theme }) => theme.palette.text.primary };
  font-size: ${({ theme }) => theme.typography.body1.fontSize };
  font-weight: normal;

  ${({ theme }) => theme.breakpoints.down('md')}{
    font-size: ${({ theme }) => theme.typography.body2.fontSize }
  }
`;