import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/Home.module.css'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle title={'Conheça os profissionais'} />
    </div>
  )
}
