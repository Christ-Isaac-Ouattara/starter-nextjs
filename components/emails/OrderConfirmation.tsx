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
  image?: string; // Ajout de l'URL de l'image
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
          {/* En-tête avec logo */}
          <Section style={header}>
            <Row>
              <Column align="center">
                <Heading style={headerHeading}>SNOB</Heading>
                <Text style={headerSubheading}>Confirmation de commande</Text>
              </Column>
            </Row>
          </Section>

          <Section style={content}>
            {/* Introduction */}
            <Text style={greeting}>Bonjour {customerName},</Text>
            <Text style={paragraph}>
              Merci pour votre commande! Nous sommes ravis de vous compter parmi nos clients. Voici un récapitulatif de votre achat:
            </Text>

            {/* Résumé de la commande */}
            <Section style={boxContainer}>
              <Heading as="h2" style={boxHeading}>
                Détails de la commande
              </Heading>

              {/* Articles */}
              {orderItems.map((item) => (
                <Row key={`${item.id}-${item.size}-${item.color}`} style={productRow}>
                  {/* Image du produit */}
                  <Column style={productImageColumn}>
                    {item.image ? (
                      <Img 
                        src={item.image} 
                        alt={item.name} 
                        width="80" 
                        height="80" 
                        style={productImage} 
                      />
                    ) : (
                      <div style={productImagePlaceholder}></div>
                    )}
                  </Column>
                  
                  {/* Détails du produit */}
                  <Column style={productDetailsColumn}>
                    <Text style={productName}>{item.name}</Text>
                    <Text style={productVariants}>
                      Taille: {item.size} • Couleur: {item.color}
                      {item.printNumber && ` • Print: ${item.printNumber}`}
                    </Text>
                    <Text style={productQuantity}>Quantité: {item.quantity}</Text>
                  </Column>
                  
                  {/* Prix */}
                  <Column style={productPriceColumn}>
                    <Text style={productPrice}>{formatPrice(item.price * item.quantity)} FCFA</Text>
                    <Text style={productUnitPrice}>{formatPrice(item.price)} FCFA / unité</Text>
                  </Column>
                </Row>
              ))}

              {/* Ligne de séparation */}
              <Hr style={divider} />
              
              {/* Total */}
              <Row>
                <Column style={{ width: '70%' }}>
                  <Text style={totalLabel}>Total</Text>
                </Column>
                <Column style={{ width: '30%' }}>
                  <Text style={totalAmount}>{formatPrice(totalAmount)} FCFA</Text>
                </Column>
              </Row>
            </Section>

            {/* Informations de livraison */}
            <Section style={boxContainer}>
              <Heading as="h2" style={boxHeading}>
                Informations de livraison
              </Heading>
              <Row>
                <Column>
                  <Text style={infoLabel}>Adresse:</Text>
                  <Text style={infoValue}>{shippingAddress.address}</Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Text style={infoLabel}>Ville:</Text>
                  <Text style={infoValue}>{shippingAddress.city}</Text>
                </Column>
              </Row>
              {shippingAddress.additionalInfo && (
                <Row>
                  <Column>
                    <Text style={infoLabel}>Informations complémentaires:</Text>
                    <Text style={infoValue}>{shippingAddress.additionalInfo}</Text>
                  </Column>
                </Row>
              )}
            </Section>

            {/* Méthode de paiement */}
            <Section style={boxContainer}>
              <Heading as="h2" style={boxHeading}>
                Méthode de paiement
              </Heading>
              <Text style={paymentMethodText}>{getPaymentMethodText(paymentMethod)}</Text>
            </Section>

            {/* Message de conclusion */}
            <Text style={paragraph}>
              Nous vous contacterons bientôt pour vous informer de l'état de votre commande.
              Si vous avez des questions, n&apos;hésitez pas à nous contacter.
            </Text>
            
            {/* Bouton de suivi (décoratif) */}
            <Section style={ctaContainer}>
              <Link href="#" style={ctaButton}>
                Suivre ma commande
              </Link>
            </Section>
            
            <Text style={thankYouMessage}>Merci de faire confiance à SNOB !</Text>
          </Section>

          {/* Pied de page */}
          <Section style={footer}>
            <Text style={footerText}>
              &copy; {new Date().getFullYear()} SNOB. Tous droits réservés.
            </Text>
            <Text style={footerLinks}>
              <Link href="#" style={footerLink}>Notre site</Link> • 
              <Link href="#" style={footerLink}> Instagram</Link> • 
              <Link href="#" style={footerLink}> Facebook</Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles modernisés
const main = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  backgroundColor: '#f7f7f7',
  margin: '0 auto',
};

const container = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
};

const header = {
  backgroundColor: '#7c3aed',
  padding: '30px 20px',
  textAlign: 'center' as const,
};

const headerHeading = {
  color: '#ffffff',
  margin: '0 0 5px',
  fontSize: '32px',
  fontWeight: 'bold',
  letterSpacing: '1px',
};

const headerSubheading = {
  color: '#ffffff',
  margin: '0',
  fontSize: '18px',
  fontWeight: 'normal',
  opacity: '0.9',
};

const content = {
  padding: '30px 20px',
};

const greeting = {
  fontSize: '20px',
  lineHeight: '1.5',
  color: '#333333',
  fontWeight: 'bold',
  margin: '0 0 15px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#4b5563',
  margin: '0 0 20px',
};

const boxContainer = {
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '6px',
  margin: '25px 0',
  border: '1px solid #e5e7eb',
};

const boxHeading = {
  marginTop: '0',
  marginBottom: '15px',
  color: '#7c3aed',
  fontSize: '18px',
  fontWeight: 'bold',
  borderBottom: '1px solid #f3f4f6',
  paddingBottom: '10px',
};

// Styles pour les articles
const productRow = {
  marginBottom: '15px',
  borderBottom: '1px solid #f3f4f6',
  paddingBottom: '15px',
};

const productImageColumn = {
  width: '80px',
  verticalAlign: 'top',
};

const productImage = {
  borderRadius: '4px',
  border: '1px solid #e5e7eb',
  objectFit: 'cover' as const,
};

const productImagePlaceholder = {
  width: '80px',
  height: '80px',
  backgroundColor: '#f3f4f6',
  borderRadius: '4px',
};

const productDetailsColumn = {
  paddingLeft: '15px',
  verticalAlign: 'top',
};

const productName = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#111827',
  margin: '0 0 5px',
};

const productVariants = {
  fontSize: '14px',
  color: '#6b7280',
  margin: '0 0 5px',
};

const productQuantity = {
  fontSize: '14px',
  color: '#6b7280',
  margin: '0',
};

const productPriceColumn = {
  width: '120px',
  textAlign: 'right' as const,
  verticalAlign: 'top',
};

const productPrice = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#111827',
  margin: '0 0 5px',
};

const productUnitPrice = {
  fontSize: '12px',
  color: '#6b7280',
  margin: '0',
};

const divider = {
  borderTop: '1px solid #e5e7eb',
  margin: '15px 0',
};

const totalLabel = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#111827',
  margin: '0',
  textAlign: 'right' as const,
};

const totalAmount = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#7c3aed',
  margin: '0',
  textAlign: 'right' as const,
};

// Styles pour les informations
const infoLabel = {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#6b7280',
  margin: '0 0 5px',
};

const infoValue = {
  fontSize: '16px',
  color: '#111827',
  margin: '0 0 15px',
};

const paymentMethodText = {
  fontSize: '16px',
  color: '#111827',
  margin: '0',
};

// Styles pour le CTA
const ctaContainer = {
  textAlign: 'center' as const,
  margin: '30px 0',
};

const ctaButton = {
  backgroundColor: '#7c3aed',
  color: '#ffffff',
  padding: '12px 30px',
  borderRadius: '4px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '16px',
  display: 'inline-block',
};

const thankYouMessage = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#111827',
  margin: '20px 0 0',
  textAlign: 'center' as const,
};

// Styles pour le footer
const footer = {
  backgroundColor: '#1f2937',
  color: '#ffffff',
  padding: '20px',
  textAlign: 'center' as const,
};

const footerText = {
  fontSize: '14px',
  color: '#d1d5db',
  margin: '0 0 10px',
};

const footerLinks = {
  fontSize: '14px',
  color: '#d1d5db',
  margin: '0',
};

const footerLink = {
  color: '#d1d5db',
  textDecoration: 'none',
};

export default OrderConfirmation;
