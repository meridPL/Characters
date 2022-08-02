import { gql } from '@apollo/client';
import { GetServerSideProps, NextPage } from 'next';
import React from 'react'
import { client } from '../api/client';
import { ICharacterDetail } from '../../interface/Character';
import CharacterDetail from '../../component/CharacterDetail';
import Link from 'next/link';
import styled from 'styled-components';
import { GET_CHARACTER } from '../api/character';

const Content = styled.div`
   margin: 1rem;
`

const CharacterDetailPage: NextPage<{ data: ICharacterDetail }> = ({ data }) => {
   return (
      <Content>
         <Link href={`/?page`} passHref>
            <button>Back</button>
         </Link>
         <CharacterDetail characterDetail={data} />
      </Content>
   )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { query } = context
   const { data } = await client.query({
      query: GET_CHARACTER,
      variables: {
         characterId: query.id
      }
   },
   );

   return {
      props: {
         data: data.character
      },
   };
}

export default CharacterDetailPage;