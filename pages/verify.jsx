import axios from "axios";

const VerifyPage = ({ props }) => {
  console.log(props);
  return (
    <div className="flex flex-col items-center mt-10 text-center">
      <h1>Example Fractal ID client implementation</h1>
      <a
        className="fractal-id-btn"
        href="https://next.fractal.id/authorize?client_id=xzpETseMgXdmDa9wy51dpLP82I7grTZDf8LlAe922hs&redirect_uri =https%3A%2F%2Ffundme-iota.vercel.app%2F%2Fverify&response_type=code&scope=contact%3Aread%20verification.basic%3Aread%20verification.basic.details%3Aread%20verification.liveness%3Aread%20verification.liveness.details%3Aread"
      >
        Log in with <span style={{ color: "#ee7326" }}>Fractal</span>
      </a>
    </div>
  );
};

export default VerifyPage;

const prefs = {
  frontendServer: "https://next.fractal.id",
  authServer: "https://auth.next.fractal.id",
  resourceServer: "https://resource.next.fractal.id",

  client_id: "xzpETseMgXdmDa9wy51dpLP82I7grTZDf8LlAe922hs",
  client_secret: "ex3KunauspnL-MJlMzeVxS508qUw9fgMWj-UcsyCEV4",

  scope:
    "contact:read verification.basic:read verification.basic.details:read verification.liveness:read verification.liveness.details:read",
  redirect_url:
    "https://da21-2c0f-f5c0-45b-749c-cd3d-c38d-5b9f-7299.ngrok-free.app/verify",
  redirect_uri:
    "https%3A%2F%2Ffundme-iota.vercel.app%2F%2Fverify",
};

const getAccessToken = (code) =>
  axios
    .post(
      `https://auth.next.fractal.id/oauth/token?client_id=xzpETseMgXdmDa9wy51dpLP82I7grTZDf8LlAe922hs&client_secret=ex3KunauspnL-MJlMzeVxS508qUw9fgMWj-UcsyCEV4&code=${code}&grant_type=authorization_code&redirect_uri=https%3A%2F%2Ffundme-iota.vercel.app%2F%2Fverify`
    )
    .then((res) => res.data);

const getUserInformation = (accessToken) =>
  axios
    .get(`${prefs.resourceServer}/users/me`, {
      headers: { Authorization: "Bearer " + accessToken },
    })
    .then((res) => res.data);

export const getServerSideProps = async (context) => {
  const { req } = context;
  console.log(req);
  if (req.query?.error !== undefined) {
    return {
      props: {
        error: req.query?.error_description,
      },
    };
  }

  const code = req.query?.code;

  try {
    const tokenResponse = await getAccessToken(code);
    const token = tokenResponse?.access_token;
    console.log(tokenResponse, "tokenres");

    const userResponse = await getUserInformation(token);

    // const verificationPromise = fetcher(
    //   `${BASE_URL}/api_v2/verification-limit`,
    //   token
    // );

    // const paybridgeTransactionsPromise = fetcher(
    //   `${BASE_URL}/trade_naira_api/transactions`,
    //   token
    // );

    return {
      props: {
        userResponse,
      },
    };
  } catch (error) {
    return {
      props: {
        error: "An error occurred while fetching information",
      },
    };
  }
};
