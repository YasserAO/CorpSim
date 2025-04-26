export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    console.log(email, password);
  } catch (err: unknown) {
    if (err instanceof Error) console.log(err.message);
    else console.log("Unkownn Error Occured");
  }
  return new Response("Success", { status: 200 });
}
