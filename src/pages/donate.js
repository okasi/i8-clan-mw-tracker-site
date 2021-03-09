import React from 'react'
import Head from 'next/head'

export default function Donate() {
  return (
    <div>
      <Head>
        <script
          src="https://www.paypal.com/sdk/js?client-id=Adsy1vxGY3ZTSEfq5heKSrvqykIDX1BruqkRXDh4tceARQ2_-PMmlyCXokjeZrGFLCuOCQGQvUCOEQPd&vault=true&intent=subscription"
          data-sdk-integration-source="button-factory"
        ></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
           paypal.Buttons({
              style: {
                  shape: 'pill',
                  color: 'blue',
                  layout: 'vertical',
                  label: 'subscribe'
              },
              createSubscription: function(data, actions) {
                return actions.subscription.create({
                  'plan_id': 'P-0UD354147G029302NMA35E2I'
                });
              },
              onApprove: function(data, actions) {
                alert(data.subscriptionID);
              }
          }).render('#paypal-button-container');
        `,
          }}
        ></script>
      </Head>

      <div id="paypal-button-container"></div>
    </div>
  )
}
