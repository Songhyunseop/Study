import { LoginCheck } from "../../../../src/components/commons/hoc/withAuth";
import { useQuery, gql } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function Main() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);

  return (
    <>
      <div>{data?.fetchUserLoggedIn.name}님 할로</div>
    </>
  );
}

export default LoginCheck(Main);
