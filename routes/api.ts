import { route } from '@stacksjs/router'

/**
 * This file is the entry point for your application's API routes.
 * The routes defined here are automatically registered. Last but
 * not least, you may also create any other `routes/*.ts` files.
 *
 * @see https://docs.stacksjs.org/routing
 */

route.get('/foo/bar/{id}', () => 'hello world, foo bar') // $API_URL/hello/world
route.get('/', () => 'hello world') // $API_URL
route.get('/hello/world', () => 'hello world, buddy') // $API_URL/hello/world

route.post('/email/subscribe', 'Actions/SubscriberEmailAction')
route.post('/login', 'Actions/LoginAction')
route.get('/generate-registration-options', 'Actions/Auth/GenerateRegistrationAction')
route.post('/verify-registration', 'Actions/Auth/VerifyRegistrationAction')
route.get('/generate-authentication-options', 'Actions/Auth/GenerateAuthenticationAction')
route.post('/verify-authentication', 'Actions/Auth/VerifyAuthenticationAction')

// route.email('/welcome')
route.health() // adds a GET `/health` route
route.get('/install', 'Actions/InstallAction')
route.post('/ai/ask', 'Actions/AI/AskAction')
route.post('/ai/summary', 'Actions/AI/SummaryAction')

route.get('/stripe/fetch-customer', 'Actions/Payment/FetchStripeCustomerAction')
route.get('/stripe/fetch-user-subscriptions', 'Actions/Payment/FetchUserSubscriptionsAction')
route.get('/stripe/fetch-active-subscription', 'Actions/Payment/FetchActiveSubscriptionAction')
route.get('/stripe/default-payment-method', 'Actions/Payment/FetchDefaultPaymentMethodAction')
route.get('/stripe/user-payment-methods', 'Actions/Payment/FetchPaymentMethodsAction')
route.get('/stripe/create-setup-intent', 'Actions/Payment/CreateSetupIntentAction')
route.delete('/stripe/delete-payment-method', 'Actions/Payment/DeleteDefaultPaymentAction')
route.put('/stripe/update-default-payment-method', 'Actions/Payment/UpdateDefaultPaymentMethodAction')
route.post('/stripe/set-default-payment-method', 'Actions/Payment/SetDefaultPaymentAction')
route.post('/stripe/create-payment-intent', 'Actions/Payment/CreatePaymentIntentAction')
route.post('/stripe/create-subscription', 'Actions/Payment/CreateSubscriptionAction')
route.post('/stripe/create-invoice-subscription', 'Actions/Payment/CreateInvoiceSubscription')
route.patch('/stripe/update-customer', 'Actions/Payment/UpdateCustomerAction')
route.post('/stripe/checkout', 'Actions/Payment/CreateCheckoutAction')

// route.group('/some-path', async () => {...})
// route.action('/example') // equivalent to `route.get('/example', 'ExampleAction')`
// route.action('Dashboard/GetProjects')
// route.action('Dashboard/Settings/UpdateAiConfig')
// route.job('/example-two') // equivalent to `route.get('/example-two', 'ExampleTwoJob')`
