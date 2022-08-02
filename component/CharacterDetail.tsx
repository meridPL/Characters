import React from 'react'
import { ICharacterDetail } from '../interface/Character';
import Image from 'next/image'
import styled from 'styled-components';

const CharacterDetailSC = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   align-items: flex-start;
   border: 1px solid lightgray;
   padding: 1.5rem;
   /* margin: 1.5rem; */
   .image{
      min-width: 200px;
      margin-right: 2rem;
   }
   table{
      td:nth-child(1){
         font-weight: bold;
         padding-right: 15px;
         text-align: right;
      }
   }
`

const CharacterDetail = ({ characterDetail }: { characterDetail: ICharacterDetail }) => {
   const { image, location, name, species, status, episode } = characterDetail

   return (
      <CharacterDetailSC>
         <div className='image'>
         <Image
            alt={`Zdjęcie charakteru ${name}`}
            src={image}
            width={400}
            height={400}
            objectFit="contain"
            />
            </div>
         <table>
            <tbody>
               <tr>
                  <td>Name</td>
                  <td>{name}</td>
               </tr>
               <tr>
                  <td>Species</td>
                  <td>{species}</td>
               </tr>
               <tr>
                  <td>Status</td>
                  <td>{status}</td>
               </tr>
               <tr>
                  <td>Episode</td>
                  <td>{episode.length}</td>
               </tr>
               <tr>
                  <td>Name episod</td>
                  <td>{location.name}</td>
               </tr>
               <tr>
                  <td>Type</td>
                  <td>{location.type}</td>
               </tr>
            </tbody>
         </table>
      </CharacterDetailSC>
   )
}

export default CharacterDetail;