import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_API_KEY!, {} as any)

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price: process.env.PRODUCT_ID,
				quantity: 1,
			},
		],
		mode: 'payment',
		success_url: `${process.env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${process.env.BASE_URL}`,
	})

	res.status(200).json({ session: session.url })
}
