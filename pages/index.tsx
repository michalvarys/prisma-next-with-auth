import injectSettings from "../src/core/injectSettings"

function Index() {
  return <div>homepage</div>
}

export const getServerSideProps = injectSettings(
  async ({ req, res, query, locale }, { settings }) => {    
    return { props: {} }
  }
)

export default Index