const LANDING_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Next Chair DC</title>
    <style>
      :root {
        color-scheme: dark;
      }
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background: #000;
        color: #fff;
        font-family: Inter, Arial, Helvetica, sans-serif;
        text-align: center;
        padding: 24px;
      }
      h1 {
        margin: 0;
        font-size: clamp(2rem, 6vw, 4rem);
        line-height: 1.1;
        letter-spacing: -0.02em;
      }
    </style>
  </head>
  <body>
    <h1>Your barbershop needs more than an instagram bio</h1>
  </body>
</html>`;

function buildResponse(body, status = 200) {
  return new Response(body, {
    status,
    headers: {
      "content-type": "text/html; charset=UTF-8",
      "cache-control": "public, max-age=300"
    }
  });
}

export default {
  async fetch(request) {
    const { pathname } = new URL(request.url);

    if (pathname === "/next-chair-dc" || pathname === "/next-chair-dc/") {
      return buildResponse(LANDING_HTML);
    }

    if (pathname.startsWith("/next-chair-")) {
      return buildResponse("<h1>Page not found</h1>", 404);
    }

    return buildResponse("<h1>Not found</h1>", 404);
  }
};
