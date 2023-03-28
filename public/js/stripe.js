import axios from 'axios';
import { showAlert } from './alert';
const stripe = window.Stripe(
  'pk_test_51MoHs0HU1puDAmAAAVXcLOWUVWzNYmHTI25Ti0R0z05Bk9gz3tK5uFgYZwCMR9MfOyOHN21B2JZ30OeHFlrJumjt00EBkTNl5H'
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(
      `http://127.0.0.1:3088/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    console.log(error);
    showAlert('error', error);
  }
};
