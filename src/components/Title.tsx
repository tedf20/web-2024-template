import { Typography, TypographyProps } from '@mui/material';

interface TitleProps extends Omit<TypographyProps, 'component'> {
  component?: React.ElementType;
}

const Title: React.FC<TitleProps> = ({ component = 'h1', ...props }) => (
  <Typography component={component} {...props} />
);

export default Title;
