import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material';
import { ArrowDown2 } from 'iconsax-react';
import React from 'react';
import theme from 'theme/theme';

const OrderAccordion = ({
  onChange,
  expanded,
  children,
  title,
}: {
  expanded: boolean;
  children: React.ReactNode;
  title: string;
  onChange:
    | ((event: React.SyntheticEvent<Element, Event>, expanded: boolean) => void)
    | undefined;
}) => {
  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      sx={{
        borderRadius: 2,
        '&.MuiAccordion-root, &.Mui-expanded': {
          boxShadow: 'none',
          mx: 3,
          mt: 0,
          background: theme.palette.background.paper,
          position: 'static',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ArrowDown2 />}
        sx={{
          '&> .MuiAccordionSummary-content': {
            m: 0,
          },
        }}
      >
        <Typography variant='h5' fontWeight='600'>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{ background: theme.palette.common.white, px: 0, py: 2 }}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default OrderAccordion;
