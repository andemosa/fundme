// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.query.error !== undefined) {
    res.send(req.query.error_description);
    return;
  }

  const code = req.query.code;

//   getAccessToken(code)
//     .then((token) => getUserInformation(token))
//     .then((r) => res.send(JSON.stringify(r)));
  res.status(200).json({ name: "John Doe" });
}
