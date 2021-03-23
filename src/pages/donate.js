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
import NavBar from '../components/NavBar'

export default function Donate() {
  const createSubscription = (data, actions) => {
    return actions.subscription.create({
      plan_id: 'P-0UD354147G029302NMA35E2I',
    })
  }
  const onApprove = (data, actions) => {
    alert("Wohoo! Subscription success! 🔥🚀🎉", data.subscriptionID)
  }

  const [{ isPending }] = usePayPalScriptReducer()

  return (
    <>
      <Head>
        <title>i8 - Donate</title>
      </Head>

      <NavBar />

      <main>
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
            Donate 2.99€ a month, to make this clan the best thing since
            Verdansk.
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
      </main>
    </>
  )
}
