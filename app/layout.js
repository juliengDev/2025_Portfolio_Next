import '../src/styles/custom.scss'
import '../src/styles/_index.scss'
import '../src/styles/_animations.scss'
import '../src/styles/_stars.scss'
import '../src/styles/_typography.scss'
import 'bootstrap/dist/css/bootstrap.min.css'


export const metadata = {
  title: 'Your Portfolio',
  description: 'A personal static website/portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="App">
          {children}
        </div>
      </body>
    </html>
  )
}