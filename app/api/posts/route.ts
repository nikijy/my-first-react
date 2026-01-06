export async function GET() {
  return Response.json({
    posts: [
      { id: 1, title: "اولین پست" },
      { id: 2, title: "دومین پست" },
      { id: 3, title: "سومین پست" },
    ],
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  return Response.json(
    {
      message: "پست با موفقیت دریافت شد",
      post: body,
    },
    { status: 201 }
  );
}
