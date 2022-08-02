import { gql } from "@apollo/client";

export const GET_CHARACTER = gql`
query Character($characterId: ID!) {
   character(id: $characterId) {
     created
     episode {
       air_date
       created
       episode
       id
       name
     }
     gender
     id
     image
     location {
       created
       dimension
       id
       name
       type
     }
     name
     origin {
       created
       dimension
       id
       name
       type
     }
     species
     status
     type
   }
 }
`

export const GET_CHARACTERS = gql`
query ExampleQuery($page: Int, $filter: FilterCharacter) {
characters(page: $page, filter: $filter) {
  results {
    created
    gender
    id
    image
    name
    species
    status
    type
  }
  info {
    count
    next
    pages
    prev
  }
}
}
`