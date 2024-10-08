import { Button } from "./components/ui/button"

function App() {

  return (
    <>
      <h2 className='font-semibold'>
        success
        <Button variant={'destructive'}
          onClick={() => window.alert('s')}
        >
          Press to die
        </Button>
      </h2>
    </>
  )
}

export default App
