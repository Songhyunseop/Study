import { gql } from "@apollo/client";

export const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, page: $page) {
      _id
      name
      tags
      soldAt
      pickedCount
      remarks
      contents
      price
      images
    }
  }
`;
