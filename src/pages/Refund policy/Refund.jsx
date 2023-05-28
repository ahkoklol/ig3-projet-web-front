import React from 'react';
import { Container, Typography } from '@mui/material';

const RefundPolicyPage = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '180px', marginBottom: '50px' }}>
      <Typography variant="h3" sx={{ mt: 4 }}>
        Refund Policy
        <br />
        
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify' }}>
        We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.

        To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.

        To start a return, you can contact us at lala.lechat@outlook.com. Please note that returns will need to be sent to the following address: 37 rue du Clos de la Cerisaie, 34000 Montpellier, France.

        If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.

        You can always contact us for any return question at lala.lechat@outlook.com.
      </Typography>

      <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify' }}>
        <b>Damages and issues</b>
        <br />
        Please inspect your order upon reception and contact us immediately if the item is defective, damaged, or if you receive the wrong item, so that we can evaluate the issue and make it right.
      </Typography>

      <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify' }}>
        <b>Exceptions / non-returnable items</b>
        <br />
        Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases. Please get in touch if you have questions or concerns about your specific item.

        Unfortunately, we cannot accept returns on sale items or gift cards.
      </Typography>

      <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify' }}>
        <b>Exchanges</b>
        <br />
        The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.
      </Typography>

      <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify' }}>
        <b>European Union 14 day cooling off period</b>
        <br />
        Notwithstanding the above, if the merchandise is being shipped into the European Union, you have the right to cancel or return your order within 14 days, for any reason and without a justification. As above, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.
      </Typography>

      <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify' }}>
        <b>Refunds</b>
        <br />
        We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 10 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too.
        If more than 15 business days have passed since we’ve approved your return, please contact us at wesprayus@outlook.com.
      </Typography>
    </Container>
  );
};

export default RefundPolicyPage;