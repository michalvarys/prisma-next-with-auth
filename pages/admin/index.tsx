import { secured } from '../../src/core'

function Dashboard() {
  return <div><h1>dashboard</h1><a href="/logout">logout</a></div>
}

export const getServerSideProps = secured(async () => {
  return {
    props: {},
  }
})

export default Dashboard
