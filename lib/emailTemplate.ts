export interface OrderItem {
  name: string;
  size: string;
  color: string;
  printNumber?: string;
  quantity: number;
  price: number;
}

export interface OrderData {
  items: OrderItem[];
  customer: {
    fullName: string;
  };
  totalAmount: number;
  shipping: {
    address: string;
    city: string;
    additionalInfo?: string;
  };
  payment: {
    method: 'mobile_money' | 'card' | string;
  };
}

export function orderConfirmationTemplate(orderData: OrderData) {
  const orderItemsHtml = orderData.items.map((item: OrderItem) => `
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.name} (${item.size}, ${item.color}${item.printNumber ? `, Print: ${item.printNumber}` : ''})</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">${item.price.toLocaleString()} FCFA</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">${(item.price * item.quantity).toLocaleString()} FCFA</td>
    </tr>
  `).join('');
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #7c3aed; padding: 20px; text-align: center; color: white;">
        <h1 style="margin: 0;">Confirmation de commande</h1>
      </div>
      
      <div style="padding: 20px; background-color: #f9f9f9;">
        <p>Bonjour ${orderData.customer.fullName} ,</p>
        <p>Nous vous remercions pour votre commande. Voici un récapitulatif :</p>
        
        <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h2 style="margin-top: 0; color: #7c3aed;">Détails de la commande</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background-color: #f3f4f6;">
                <th style="padding: 10px; text-align: left;">Produit</th>
                <th style="padding: 10px; text-align: center;">Quantité</th>
                <th style="padding: 10px; text-align: right;">Prix unitaire</th>
                <th style="padding: 10px; text-align: right;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${orderItemsHtml}
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" style="padding: 10px; text-align: right; font-weight: bold;">Total</td>
                <td style="padding: 10px; text-align: right; font-weight: bold;">${orderData.totalAmount.toLocaleString()} FCFA</td>
              </tr>
            </tfoot>
          </table>
        </div>
        
        <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h2 style="margin-top: 0; color: #7c3aed;">Informations de livraison</h2>
          <p><strong>Adresse :</strong> ${orderData.shipping.address}</p>
          <p><strong>Ville :</strong> ${orderData.shipping.city}</p>
          ${orderData.shipping.additionalInfo ? `<p><strong>Informations complémentaires :</strong> ${orderData.shipping.additionalInfo}</p>` : ''}
        </div>
        
        <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h2 style="margin-top: 0; color: #7c3aed;">Méthode de paiement</h2>
          <p>${
            orderData.payment.method === 'mobile_money' ? 'Mobile Money' :
            orderData.payment.method === 'card' ? 'Carte bancaire' :
            'Paiement à la livraison'
          }</p>
        </div>
        
        <p>Nous vous contacterons bientôt pour vous informer de l'état de votre commande.</p>
        <p>Merci de faire confiance à SNOB !</p>
      </div>
      
      <div style="background-color: #333; color: white; padding: 15px; text-align: center;">
        <p>© ${new Date().getFullYear()} SNOB. Tous droits réservés.</p>
      </div>
    </div>
  `;
}