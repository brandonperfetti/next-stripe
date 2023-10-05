# Sales Marketing page

## Prerequisites

This project assumes you have working knowledge of:

* [Trigger.dev](https://trigger.dev/)
* [Airtable](https://airtable.com/)
* [Next.js](https://nextjs.org/)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then create a `.env.local` file with the following contents:

```bash
PRODUCT_ID=your_stripe_product_id
STRIPE_API_KEY=your_stripe_api_key
TRIGGER_API_KEY=your_trigger_api_key
TRIGGER_API_URL=https://api.trigger.dev
NEXT_PUBLIC_TRIGGER_PUBLIC_API_KEY=your_trigger_public_api_key
AIRTABLE_BASE_ID=your_airtable_base_id
AIRTABLE_TABLE_ID=your_airtable_table_id
AIRTABLE_TOKEN=your_airtable_token
BASE_URL=http://localhost:3000
```

Then run the development server:

```bash
npm run dev
```

Then in another terminal do:

```bash
npx @trigger.dev/cli@latest dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `src/pages/index.js`. The page
auto-updates as you edit the file.
