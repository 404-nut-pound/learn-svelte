export async function GET() {
  console.log('GET requested!')

  return new Response(JSON.stringify({ value: 'RESPONSE' }))
}
