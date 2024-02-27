import { Grid } from './Grid'

interface Post {
  id: string
  title: string
}

export default function App() {
  return (
    <div className='App'>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Grid<Post>
        data={[{ id: '1', title: 'sdf' }]}
        renderItem={(item) => {
          return item.title
        }}
      />
      <Grid
        data={[{ id: '1', title: '123', label: 'sdfsdf', text: 'sdf' }]}
        renderItem={(item) => {
          return <div>{item.title}</div>
        }}
      />
    </div>
  )
}
