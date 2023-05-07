import LoginPage from "../../components/LoginPage";

export default function Login({ cookies }) {
  return (
    <div>
      <LoginPage cookies={cookies} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const cookies = context.req.headers.cookie;

  return {
    props: cookies
      ? {
          cookies,
        }
      : { cookies: null },
  };
}
