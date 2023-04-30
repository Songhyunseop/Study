import { useQuery, gql } from "@apollo/client";
import { IQuery } from "../../../src/commons/types/generated/types";
import { loginCheck } from "../../../src/components/commons/hocs/loginchk";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function LogInPage(): JSX.Element {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return <>{data?.fetchUserLoggedIn.name}님 환영합니다!!</>;
}

export default loginCheck(LogInPage);
