import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$gray400',
  borderRadius: '$md',
  padding: '$4',
  width: '$6',
})

export function App() {
  return <Button>Hello World</Button>
}
