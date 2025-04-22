import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  printNumber?: string;
}

interface OrderConfirmationProps {
  customerName: string;
  orderItems: OrderItem[];
  totalAmount: number;
  shippingAddress: {
    address: string;
    city: string;
    additionalInfo?: string;
  };
  paymentMethod: string;
}

export const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  customerName,
  orderItems,
  totalAmount,
  shippingAddress,
  paymentMethod,
}) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };

  const getPaymentMethodText = (method: string) => {
    switch (method) {
      case 'mobile_money':
        return 'Mobile Money';
      case 'card':
        return 'Carte bancaire';
      case 'cash_on_delivery':
        return 'Paiement à la livraison';
      default:
        return method;
    }
  };

  return (
    <Html>
      <Head />
      <Preview>Confirmation de votre commande SNOB</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={headerHeading}>Confirmation de commande</Heading>
          </Section>

          <Section style={content}>
            <Text style={paragraph}>Bonjour {customerName},</Text>
            <Text style={paragraph}>
              Nous vous remercions pour votre commande. Voici un récapitulatif :
            </Text>

            <Section style={boxContainer}>
              <Heading as="h2" style={boxHeading}>
                Détails de la commande
              </Heading>

              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={tableHeaderCell}>Produit</th>
                    <th style={tableHeaderCellCenter}>Quantité</th>
                    <th style={tableHeaderCellRight}>Prix unitaire</th>
                    <th style={tableHeaderCellRight}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orderItems.map((item) => (
                    <tr key={`${item.id}-${item.size}-${item.color}`}>
                      <td style={tableCell}>
                        {item.name} ({item.size}, {item.color}
                        {item.printNumber && `, Print: ${item.printNumber}`})
                      </td>
                      <td style={tableCellCenter}>{item.quantity}</td>
                      <td style={tableCellRight}>{formatPrice(item.price)} FCFA</td>
                      <td style={tableCellRight}>
                        {formatPrice(item.price * item.quantity)} FCFA
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3} style={tableCellTotal}>
                      Total
                    </td>
                    <td style={tableCellTotalAmount}>
                      {formatPrice(totalAmount)} FCFA
                    </td>
                  </tr>
                </tfoot>
              </table>
            </Section>

            <Section style={boxContainer}>
              <Heading as="h2" style={boxHeading}>
                Informations de livraison
              </Heading>
              <Text style={paragraph}>
                <strong>Adresse :</strong> {shippingAddress.address}
              </Text>
              <Text style={paragraph}>
                <strong>Ville :</strong> {shippingAddress.city}
              </Text>
              {shippingAddress.additionalInfo && (
                <Text style={paragraph}>
                  <strong>Informations complémentaires :</strong>{' '}
                  {shippingAddress.additionalInfo}
                </Text>
              )}
            </Section>

            <Section style={boxContainer}>
              <Heading as="h2" style={boxHeading}>
                Méthode de paiement
              </Heading>
              <Text style={paragraph}>{getPaymentMethodText(paymentMethod)}</Text>
            </Section>

            <Text style={paragraph}>
              Nous vous contacterons bientôt pour vous informer de l&apos;état de votre
              commande.
            </Text>
            <Text style={paragraph}>Merci de faire confiance à SNOB !</Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              &copy; {new Date().getFullYear()} SNOB. Tous droits réservés.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f9f9f9',
};

const container = {
  maxWidth: '600px',
  margin: '0 auto',
};

const header = {
  backgroundColor: '#7c3aed',
  padding: '20px',
  textAlign: 'center' as const,
};

const headerHeading = {
  color: '#ffffff',
  margin: '0',
  fontSize: '24px',
};

const content = {
  padding: '20px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#333333',
};

const boxContainer = {
  backgroundColor: '#ffffff',
  padding: '15px',
  borderRadius: '5px',
  margin: '20px 0',
};

const boxHeading = {
  marginTop: '0',
  color: '#7c3aed',
  fontSize: '18px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse' as const,
};

const tableHeaderCell = {
  padding: '10px',
  textAlign: 'left' as const,
  backgroundColor: '#f3f4f6',
  fontSize: '14px',
};

const tableHeaderCellCenter = {
  ...tableHeaderCell,
  textAlign: 'center' as const,
};

const tableHeaderCellRight = {
  ...tableHeaderCell,
  textAlign: 'right' as const,
};

const tableCell = {
  padding: '10px',
  borderBottom: '1px solid #eee',
  fontSize: '14px',
};

const tableCellCenter = {
  ...tableCell,
  textAlign: 'center' as const,
};

const tableCellRight = {
  ...tableCell,
  textAlign: 'right' as const,
};

const tableCellTotal = {
  ...tableCell,
  textAlign: 'right' as const,
  fontWeight: 'bold',
};

const tableCellTotalAmount = {
  ...tableCell,
  textAlign: 'right' as const,
  fontWeight: 'bold',
};

const footer = {
  backgroundColor: '#333333',
  color: '#ffffff',
  padding: '15px',
  textAlign: 'center' as const,
};

const footerText = {
  fontSize: '14px',
  color: '#ffffff',
  margin: '0',
};

export default OrderConfirmation;
