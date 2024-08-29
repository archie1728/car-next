// app/api/vat/[amount]/route.js
// export async function GET({ params }) {
//   const amount = parseFloat(params.amount) || 0;
//   const rate = parseFloat(process.env.VAT_RATE) || 0.07;
//   const vat = Math.round(amount * rate * 100) / 100;

//   return new Response(JSON.stringify({ rate, amount, vat }), {
//       headers: { 'Content-Type': 'application/json' },
//   });
// }


export async function GET(request, {params}) {
    const amount = parseFloat(params.amount);
    const rate = parseFloat(process.env.VAT_RATE);
    const vat = (Math.round(amount * rate, 2) *100) / 100;
    return Response.json({
      rate,
      amount,
      vat,
    });
  }