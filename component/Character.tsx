import Link from 'next/link';
import React from 'react'
import Image from 'next/image'
import { ICharacter } from '../interface/Character';
import styled from 'styled-components';

const CharacterSC = styled.div`
   cursor: pointer;
   max-width: 180px;
   margin: 1.5rem;
   padding: .5rem;
   border: 1px solid lightgray; 
   display: flex;
   justify-content: stretch;
   align-items: center;
   flex-direction: column;
   h3 {
      margin-top: 0;
   }
   &:hover{
      background: #ff71ff33;
      transform: scale(1.2);
   }
   transition: transform .3s;
`

const Character = ({ character }: { character: ICharacter }) => {
   const { name, image, id } = character
   return (
      <Link href={`/character/${id}`} passHref>
         <CharacterSC>
            <h3>{name}</h3>
            <div>

               <Image
                  alt={`Zdjęcie charakteru ${name}`}
                  src={image}
                  width={200}
                  height={200}
                  objectFit="contain"
               />
            </div>
         </CharacterSC>
      </Link>
   )
}

export default Character;