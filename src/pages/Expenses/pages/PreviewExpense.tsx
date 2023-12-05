import { Stack } from '@mui/material';
import ExpenseInvoice from 'components/ComToPrint/ExpenseInvoice';
import SecondaryPageHeader from 'components/PageHeader/SecondaryPageHeader';

export default function PreviewExpense() {
  return (
    <>
      <SecondaryPageHeader title='Preview Expense' />
      <Stack direction={'row'} justifyContent={'center'}>
        <ExpenseInvoice />
      </Stack>
    </>
  );
}
