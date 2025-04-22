import { Resend } from 'resend';
import { render } from '@react-email/render';
import OrderConfirmation from '@/components/emails/OrderConfirmation';

interface OrderData {
  customer: {
    fullName: string;
    email: string;
    phone: string;
  };
  shipping: {
    address: string;
    city: string;
    additionalInfo?: string;
  };
  payment: {
    method: string;
  };
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    size: string;
    color: string;
    printNumber?: string;
  }>;
  totalAmount: number;
}

export async function sendOrderConfirmationEmails(orderData: OrderData) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  // Préparer les données pour le template React
  const emailProps = {
    customerName: `${orderData.customer.fullName}`,
    orderItems: orderData.items,
    totalAmount: orderData.totalAmount,
    shippingAddress: orderData.shipping,
    paymentMethod: orderData.payment.method,
  };

  // Rendre le template React en HTML
  const emailHtml = await render(OrderConfirmation(emailProps));

  try {
    // Email au client
    await resend.emails.send({
      from: `SNOB <${process.env.RESEND_FROM_EMAIL}>`,
      to: orderData.customer.email,
      subject: "Confirmation de votre commande SNOB",
      html: emailHtml,
    });

    // Email à l'administrateur
    await resend.emails.send({
      from: `SNOB <${process.env.RESEND_FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL || '',
      subject: `Nouvelle commande de ${orderData.customer.fullName} `,
      html: emailHtml,
    });

    return { success: true };
  } catch (error) {
    console.error('Erreur lors de l\'envoi des emails:', error);
    return { success: false, error };
  }

}