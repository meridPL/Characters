import { useLazyQuery } from '@apollo/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Character from '../component/Character'
import Pagination, { IInfo } from '../component/Pagination'
import { ICharacter } from '../interface/Character'
import styles from '../styles/Home.module.css'
import { GET_CHARACTERS } from './api/character'
import _ from 'lodash'
import { useRouter } from 'next/router'

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Home: NextPage = () => {
  const router = useRouter()
  const [name, setName] = useState("")

  const [search, { data }] = useLazyQuery<{
    characters: {
      results: ICharacter[],
      info: IInfo
    }
  }>(GET_CHARACTERS, {
    variables: {
      page: parseInt(router.query.page as string),
      filter: {
        name: name
      }
    }
  })

  useEffect(() => {
    search()
  }, [])


  return (
    <div className={styles.container}>
      <Head>
        <title>Characters</title>
        <meta name="description" content="All character in one place" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>All characters</h1>
      <input
        placeholder='Name charackter'
        onChange={_.debounce(function (e) {
          setName(e.target.value)
          search()
        }, 500)}
      />
      <Div>
        {data && data.characters.results
          .map(v => {
            return (
              <Character key={v.id} character={v} />
            )
          })}
      </Div>
      {data?.characters.info &&
        <Pagination info={data?.characters.info} />
      }
    </div>
  )
}

export default Home
