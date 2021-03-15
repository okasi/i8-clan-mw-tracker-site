import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {
  PayPalButtons,
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js'
import { Spinner } from '@chakra-ui/spinner'
import { Box, Center, Container, Heading, Text } from '@chakra-ui/layout'

export default function Donate() {
  const createSubscription = (data, actions) => {
    return actions.subscription.create({
      plan_id: 'P-0UD354147G029302NMA35E2I',
    })
  }
  const onApprove = (data, actions) => {
    alert(data.subscriptionID)
  }
  useEffect(() => {
    // window.paypal
    //   .Buttons({
    //     style: {
    // shape: 'pill',
    // color: 'blue',
    // layout: 'vertical',
    // label: 'subscribe',
    //     },
    //     createSubscription: function (data, actions) {
    //       return actions.subscription.create({
    //         plan_id: 'P-0UD354147G029302NMA35E2I',
    //       })
    //     },
    //     onApprove: function (data, actions) {
    //       alert(data.subscriptionID)
    //     },
    //   })
    //   .render('#paypal-button-container')
  }, [])

  const [{ isPending }] = usePayPalScriptReducer()

  return (
    <>
      <Head>
        <title>i8 - Donate</title>
      </Head>

      <header>
        <Container maxW="xl" centerContent color="black">
          <Link href="/">
            <Box m={4} _hover={{cursor: "pointer"}}>
              <Image src="/i8_black.png" alt="i8" width={128} height={128} />
            </Box>
          </Link>
        </Container>
      </header>

      <section role="hero">
        <Container maxW="xl" centerContent color="black">
          <Box textAlign="center">
            <Heading variant="h1">i8 Clan</Heading>
            <Heading variant="h2">Donate</Heading>
          </Box>
        </Container>
      </section>

      <section role="info">
        <Text fontSize="xl" fontWeight="medium" textAlign="center" my={8}>
          Donate 2.99€ a month, to make this clan the best thing since Verdansk.
        </Text>
      </section>

      <section role="donate">
        <Center>
          {isPending ? (
            <Spinner></Spinner>
          ) : (
            <PayPalButtons
              createSubscription={createSubscription}
              onApprove={onApprove}
              style={{
                shape: 'pill',
                color: 'blue',
                layout: 'horizontal',
                label: 'subscribe',
                height: 55,
                width: 256,
              }}
            />
          )}
        </Center>
      </section>
    </>
  )
}
