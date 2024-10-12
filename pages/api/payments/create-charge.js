import { Client, resources } from "coinbase-commerce-node";

Client.init(process.env.COINBASE_COMMERCE_API_KEY);
const { Charge } = resources;

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { amount, currency } = req.body;

      const chargeData = {
        name: "OSRS Bingo Buy-in",
        description: "Buy-in for OSRS Bingo game",
        local_price: {
          amount: amount,
          currency: currency,
        },
        pricing_type: "fixed_price",
        redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL}/games/join`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/games/join`,
      };

      const charge = await Charge.create(chargeData);

      res.status(200).json({ chargeId: charge.id, hostedUrl: charge.hosted_url });
    } catch (error) {
      console.error("Error creating charge:", error);
      res.status(500).json({ error: "Error creating charge" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}