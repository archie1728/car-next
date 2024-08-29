// app/api/vat/rate/route.js
// export async function GET() {
//   const rate = parseFloat(process.env.VAT_RATE) || 0.07;
//   return new Response(JSON.stringify({ rate }), {
//       headers: { 'Content-Type': 'application/json' },
//   });
// }


export async function GET(request) {
    return Response.json({rate: process.env.VAT_RATE});
  }
